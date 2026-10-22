import type { Phase, ServerMessage } from '../../src/net/protocol'
import type { Effect, Room } from './room'

/**
 * A room's storage, the same for both relay shells: each room has its own
 * SQLite (the Durable Object's, or one file per room on the São Paulo server)
 * behind this small adapter, so the tables, what the room's effects write and
 * how a sync or a dump reads them back are written once.
 */

export type Bind = string | number | null

/** One room's SQLite: `run` for writes, `all` for reads (rows as the driver gives them). */
export type Sql = {
  run: (query: string, ...args: Bind[]) => void
  all: (query: string, ...args: Bind[]) => Record<string, unknown>[]
}

export const SCHEMA = [
  'CREATE TABLE IF NOT EXISTS kv (k TEXT PRIMARY KEY, v TEXT NOT NULL)',
  'CREATE TABLE IF NOT EXISTS log (run INTEGER NOT NULL, tick INTEGER NOT NULL, e TEXT NOT NULL, PRIMARY KEY (run, tick)) WITHOUT ROWID',
  'CREATE TABLE IF NOT EXISTS hashes (run INTEGER NOT NULL, tick INTEGER NOT NULL, v TEXT NOT NULL, PRIMARY KEY (run, tick)) WITHOUT ROWID',
  'CREATE TABLE IF NOT EXISTS snaps (run INTEGER NOT NULL, tick INTEGER NOT NULL, part INTEGER NOT NULL, data TEXT NOT NULL, PRIMARY KEY (run, tick, part)) WITHOUT ROWID',
] as const

/** Ticks of the log per catch-up frame. */
export const TAIL_FRAME_TICKS = 600

const PHASES: readonly Phase[] = ['lobby', 'playing', 'ended']

const isRecord = (v: unknown): v is Record<string, unknown> => typeof v === 'object' && v !== null && !Array.isArray(v)

/** The room as saved (its own JSON), checked for the fields everything else relies on. */
export const isRoom = (v: unknown): v is Room =>
  isRecord(v) && typeof v.code === 'string' && typeof v.build === 'string' && PHASES.some((p) => p === v.phase) && Array.isArray(v.seats) && Array.isArray(v.banned)

const text = (row: Record<string, unknown> | undefined, k: string) => (typeof row?.[k] === 'string' ? row[k] : '')
const whole = (row: Record<string, unknown> | undefined, k: string) => (typeof row?.[k] === 'number' ? row[k] : 0)

export const createSchema = (sql: Sql) => SCHEMA.forEach((q) => sql.run(q))

/** The room this storage holds, or null (none made yet, or wiped). */
export const readRoom = (sql: Sql): Room | null => {
  if (sql.all("SELECT name FROM sqlite_master WHERE type = 'table' AND name = 'kv'").length === 0) return null
  const row = sql.all("SELECT v FROM kv WHERE k = 'room'")[0]
  if (!row) return null
  const v: unknown = JSON.parse(text(row, 'v'))
  return isRoom(v) ? v : null
}

/** Writes what `effects` ask of storage, then the room once if any asked for a `save`. */
export const persist = (sql: Sql, effects: readonly Effect[], room: Room | null) => {
  let save = false
  for (const e of effects) {
    if (e.k === 'save') save = true
    else if (e.k === 'log') sql.run('INSERT OR REPLACE INTO log (run, tick, e) VALUES (?, ?, ?)', e.run, e.tick, JSON.stringify(e.entries))
    else if (e.k === 'hashes') sql.run('INSERT OR REPLACE INTO hashes (run, tick, v) VALUES (?, ?, ?)', e.run, e.tick, JSON.stringify(e.bySeat))
    else if (e.k === 'chunk') sql.run('INSERT OR REPLACE INTO snaps (run, tick, part, data) VALUES (?, ?, ?, ?)', e.run, e.tick, e.part, e.data)
    else if (e.k === 'keepSnapshot') sql.run('DELETE FROM snaps WHERE run = ? AND tick <> ?', e.run, e.tick)
    else if (e.k === 'dropSnapshot') sql.run('DELETE FROM snaps WHERE run = ? AND tick = ?', e.run, e.tick)
    else if (e.k === 'dropRun') for (const table of ['log', 'hashes', 'snaps']) sql.run(`DELETE FROM ${table} WHERE run = ?`, e.run)
  }
  if (save && room) sql.run("INSERT OR REPLACE INTO kv (k, v) VALUES ('room', ?)", JSON.stringify(room))
}

const logRows = (sql: Sql, run: number, from: number, to: number) =>
  sql.all('SELECT tick, e FROM log WHERE run = ? AND tick >= ? AND tick < ? ORDER BY tick', run, from, to).map((r) => `[${whole(r, 'tick')},${text(r, 'e')}]`)

/** A sync's messages, in order: the `sync`, the base snapshot's chunks, then the log from `from` to `to` in frames. */
export const syncTexts = (sql: Sql, e: Extract<Effect, { k: 'sync' }>): string[] => {
  const run = e.msg.run.id
  let msg = e.msg
  const base = msg.base
  const chunks = base ? sql.all('SELECT part, data FROM snaps WHERE run = ? AND tick = ? ORDER BY part', run, base.tick) : []
  // A snapshot that isn't all there (it never should be) falls back to the seed.
  if (base && chunks.length !== base.parts) msg = { ...msg, base: null, from: 0 }
  const out = [JSON.stringify(msg)]
  if (msg.base) for (const c of chunks) out.push(JSON.stringify({ t: 'snapPart', tick: msg.base.tick, part: whole(c, 'part'), data: text(c, 'data') } satisfies ServerMessage))
  for (let from = msg.from; from < msg.to; from += TAIL_FRAME_TICKS) {
    const to = Math.min(msg.to, from + TAIL_FRAME_TICKS)
    // Entries are stored as their JSON: spliced in as they are.
    out.push(`{"t":"frame","from":${from},"to":${to},"ticks":[${logRows(sql, run, from, to).join(',')}]}`)
  }
  return out
}

export type DumpInfo = { id: string; code: string; run: number; tick: number; at: number; size: number }

/** Dumps kept: the newest `max`, none older than `days`, pruned once a day while any are held. */
export const RETENTION = { days: 30, max: 500 } as const

/**
 * A dump's JSON (a desync, a bad snapshot): `meta` (room, run start, the
 * hashes reported, seats with builds and user agents), the run's whole input
 * `log` and its `hashes` per seat. Null when the room has no run.
 */
export const dumpJson = (sql: Sql, room: Room, e: Extract<Effect, { k: 'dump' }>, at: number): { body: string; logTicks: number } | null => {
  if (!room.run) return null
  const log = logRows(sql, e.run, 0, 2 ** 31)
  const hashes = sql.all('SELECT tick, v FROM hashes WHERE run = ? ORDER BY tick', e.run).map((r) => `[${whole(r, 'tick')},${text(r, 'v')}]`)
  const meta = {
    code: room.code,
    build: room.build,
    region: room.region,
    createdAt: room.createdAt,
    at,
    reason: e.reason,
    tick: e.tick,
    reports: e.reports,
    majority: e.majority,
    minority: e.minority,
    run: room.run.start,
    clock: { next: room.run.next, bound: room.run.bound, agreed: room.run.agreed },
    seats: room.seats.map((s) => ({ seat: s.seat, account: s.account, name: s.name, build: s.build, ua: s.ua })),
  }
  return { body: `{"meta":${JSON.stringify(meta)},"log":[${log.join(',')}],"hashes":[${hashes.join(',')}]}`, logTicks: log.length }
}
