import { mkdirSync, readdirSync, rmSync } from 'node:fs'
import { join } from 'node:path'
import { DatabaseSync, type StatementSync } from 'node:sqlite'
import type { DumpInfo, Sql } from '../../src/store'

/**
 * SQLite on the instance's disk, through `node:sqlite` (synchronous: a write
 * is a few microseconds, so a room persists what it asks before it sends,
 * like the Durable Object). One file per room (`rooms/<CODE>.db`, the same
 * tables as the Durable Object's, `store.ts`) and one for the dumps
 * (`vault.db`). WAL with `synchronous = NORMAL`: a committed write survives
 * the process dying (a crash, `kill -9`, a deploy); only losing the machine
 * itself can cost the last moments, which the room's clock bound covers.
 */

export type RoomDb = { sql: Sql; tx: (fn: () => void) => void; close: () => void; remove: () => void }

const open = (path: string) => {
  const db = new DatabaseSync(path)
  db.exec('PRAGMA journal_mode = WAL')
  db.exec('PRAGMA synchronous = NORMAL')
  db.exec('PRAGMA busy_timeout = 1000')
  const statements = new Map<string, StatementSync>()
  const statement = (query: string) => {
    let s = statements.get(query)
    if (!s) {
      s = db.prepare(query)
      statements.set(query, s)
    }
    return s
  }
  const sql: Sql = {
    run: (query, ...args) => void statement(query).run(...args),
    all: (query, ...args) => statement(query).all(...args),
  }
  return { db, sql }
}

const roomsDir = (dataDir: string) => join(dataDir, 'rooms')

/** The codes of the rooms on disk (each one's file). */
export const roomCodes = (dataDir: string) => {
  mkdirSync(roomsDir(dataDir), { recursive: true })
  return readdirSync(roomsDir(dataDir)).flatMap((f) => (/^[A-Z0-9]+\.db$/.test(f) ? [f.slice(0, -3)] : []))
}

/** Room `code`'s database (made if missing). */
export const openRoomDb = (dataDir: string, code: string): RoomDb => {
  mkdirSync(roomsDir(dataDir), { recursive: true })
  const path = join(roomsDir(dataDir), `${code}.db`)
  const { db, sql } = open(path)
  let closed = false
  const close = () => {
    if (!closed) db.close()
    closed = true
  }
  return {
    sql,
    tx: (fn) => {
      db.exec('BEGIN')
      try {
        fn()
        db.exec('COMMIT')
      } catch (err) {
        db.exec('ROLLBACK')
        throw err
      }
    },
    close,
    // The room is over: its file goes, with the WAL beside it.
    remove: () => {
      close()
      for (const suffix of ['', '-wal', '-shm']) rmSync(path + suffix, { force: true })
    },
  }
}

export type Vault = {
  put: (info: DumpInfo, bytes: Uint8Array) => void
  list: (limit: number) => DumpInfo[]
  get: (id: string) => Uint8Array | null
  /** Drops dumps older than `days` or past the newest `max`. */
  prune: (now: number, keep: { days: number; max: number }) => void
  close: () => void
}

const isDumpInfo = (r: Record<string, unknown>): r is DumpInfo =>
  typeof r.id === 'string' && typeof r.code === 'string' && typeof r.run === 'number' && typeof r.tick === 'number' && typeof r.at === 'number' && typeof r.size === 'number'

/** Desync dumps, kept after their room is gone (the Durable Object `Vault`'s twin). */
export const openVault = (dataDir: string): Vault => {
  mkdirSync(dataDir, { recursive: true })
  const { db, sql } = open(join(dataDir, 'vault.db'))
  db.exec('CREATE TABLE IF NOT EXISTS dumps (id TEXT PRIMARY KEY, code TEXT NOT NULL, run INTEGER NOT NULL, tick INTEGER NOT NULL, at INTEGER NOT NULL, size INTEGER NOT NULL, data BLOB NOT NULL)')
  return {
    put: (info, bytes) =>
      void db.prepare('INSERT OR REPLACE INTO dumps (id, code, run, tick, at, size, data) VALUES (?, ?, ?, ?, ?, ?, ?)').run(info.id, info.code, info.run, info.tick, info.at, info.size, bytes),
    list: (limit) => sql.all('SELECT id, code, run, tick, at, size FROM dumps ORDER BY at DESC LIMIT ?', limit).filter(isDumpInfo),
    get: (id) => {
      const data = sql.all('SELECT data FROM dumps WHERE id = ?', id)[0]?.data
      return data instanceof Uint8Array ? data : null
    },
    prune: (now, keep) =>
      sql.run('DELETE FROM dumps WHERE at < ? OR id NOT IN (SELECT id FROM dumps ORDER BY at DESC LIMIT ?)', now - keep.days * 86_400_000, keep.max),
    close: () => db.close(),
  }
}
