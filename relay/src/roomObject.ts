import { DurableObject } from 'cloudflare:workers'
import { CLOSE_CODES, LIMITS, parseClientMessage, type Auth, type ServerMessage } from '../../src/net/protocol'
import { jwksKeys, verifyClerkToken } from './auth'
import type { Env } from './env'
import { gen, randomToken } from './codes'
import { gzip } from './gzip'
import { allowedOrigin } from './origins'
import {
  connect,
  createRoom,
  deadline,
  disconnect,
  hello,
  loadState,
  message,
  nextTickAt,
  reattach,
  running,
  tick,
  type ConnId,
  type Effect,
  type Identity,
  type State,
} from './room'
import { createSchema, dumpJson, persist, readRoom, syncTexts, type Sql } from './store'

/** A socket's attachment: survives WebSocket hibernation, so the room finds its sockets again. */
type Attachment = { id: ConnId; ua: string; seat: number | null }

/** A socket not seated within this long is closed: no valid `hello`, or one whose auth is still being checked. */
const HELLO_TIMEOUT_MS = 10_000

const isRecord = (v: unknown): v is Record<string, unknown> => typeof v === 'object' && v !== null && !Array.isArray(v)

const isAttachment = (v: unknown): v is Attachment =>
  isRecord(v) && typeof v.id === 'string' && typeof v.ua === 'string' && (v.seat === null || typeof v.seat === 'number')

/** The Durable Object's SQLite as the shared storage code sees it (`store.ts`). */
const sqlOf = (storage: DurableObjectStorage): Sql => ({
  run: (query, ...args) => void storage.sql.exec(query, ...args),
  all: (query, ...args) => storage.sql.exec(query, ...args).toArray(),
})

/** One JWKS cache per isolate, shared by the rooms it runs. */
let jwks: ReturnType<typeof jwksKeys> | null = null

/**
 * One co-op room. A class only because the Durable Object runtime asks for
 * one: it is a thin shell over the pure room (`room.ts`), doing the storage,
 * the sockets and the timers the room's effects ask for.
 */
export class RoomObject extends DurableObject<Env> {
  private state: State = loadState(null, gen, 0)
  private sockets = new Map<ConnId, WebSocket>()
  private attached = new Map<ConnId, Attachment>()
  private authing = new Set<ConnId>()
  private timer: ReturnType<typeof setTimeout> | null = null
  private alarmAt: number | null = null
  private readonly sql: Sql

  constructor(ctx: DurableObjectState, env: Env) {
    super(ctx, env)
    this.sql = sqlOf(ctx.storage)
    void ctx.blockConcurrencyWhile(async () => {
      const now = Date.now()
      this.state = loadState(readRoom(this.sql), gen, now)
      const back = ctx.getWebSockets().flatMap((ws) => {
        const a: unknown = ws.deserializeAttachment()
        if (!isAttachment(a)) return []
        this.sockets.set(a.id, ws)
        this.attached.set(a.id, a)
        return [a]
      })
      this.alarmAt = await ctx.storage.getAlarm()
      this.apply(reattach(this.state, back, now))
    })
  }

  /** Reserves the room (the Worker's `POST /rooms`). False when the code is taken. */
  async create(init: { code: string; build: string; region: string }): Promise<boolean> {
    const r = createRoom(this.state, init, Date.now())
    if (r.ok) createSchema(this.sql)
    this.apply(r.effects)
    return r.ok
  }

  async fetch(request: Request): Promise<Response> {
    if (request.headers.get('Upgrade') !== 'websocket') return new Response('Expected a WebSocket', { status: 426 })
    const [client, server] = Object.values(new WebSocketPair()) as [WebSocket, WebSocket]
    const id = crypto.randomUUID()
    const ua = (request.headers.get('User-Agent') ?? '').slice(0, 200)
    this.ctx.acceptWebSocket(server)
    const attachment: Attachment = { id, ua, seat: null }
    server.serializeAttachment(attachment)
    this.sockets.set(id, server)
    this.attached.set(id, attachment)
    connect(this.state, id, ua, Date.now())
    setTimeout(() => {
      const conn = this.state.live.conns.get(id)
      if (!conn || conn.seat !== null) return
      // A hello still authenticating is given up too: its late answer finds no socket (`hello` ignores it).
      this.closeSocket(id, 'refused')
      const ws = this.sockets.get(id)
      if (ws) this.dropSocket(ws)
    }, HELLO_TIMEOUT_MS)
    return new Response(null, { status: 101, webSocket: client })
  }

  async webSocketMessage(ws: WebSocket, raw: string | ArrayBuffer) {
    const a: unknown = ws.deserializeAttachment()
    if (!isAttachment(a)) return
    const text = typeof raw === 'string' ? raw : null
    // Far past any limit: no client of ours sends that.
    if (text !== null && text.length > LIMITS.chunkMessage * 2) return this.closeSocket(a.id, 'abuse')
    const msg = text === null ? null : parseClientMessage(text)
    const conn = this.state.live.conns.get(a.id)
    if (msg?.t === 'hello' && conn && conn.seat === null && !this.authing.has(a.id)) {
      this.authing.add(a.id)
      const identity = await this.identify(msg.auth).catch(() => null)
      this.authing.delete(a.id)
      this.apply(hello(this.state, a.id, msg, identity, Date.now(), { guests: this.env.ALLOW_GUESTS === 'on' }))
      return
    }
    this.apply(message(this.state, a.id, msg, Date.now()))
  }

  async webSocketClose(ws: WebSocket) {
    this.dropSocket(ws)
  }

  async webSocketError(ws: WebSocket) {
    this.dropSocket(ws)
  }

  async alarm() {
    this.alarmAt = null
    this.apply(tick(this.state, Date.now()))
  }

  private dropSocket(ws: WebSocket) {
    const a: unknown = ws.deserializeAttachment()
    if (!isAttachment(a)) return
    this.sockets.delete(a.id)
    this.attached.delete(a.id)
    this.apply(disconnect(this.state, a.id, Date.now()))
  }

  private async identify(auth: Auth): Promise<Identity | null> {
    if (auth.kind === 'guest') return { id: `g:${auth.id}`, account: false }
    jwks ??= jwksKeys(`${this.env.CLERK_ISSUER}/.well-known/jwks.json`)
    const sub = await verifyClerkToken(auth.token, {
      keys: jwks,
      issuer: this.env.CLERK_ISSUER,
      allowedParty: (origin) => allowedOrigin(this.env, origin),
      now: Date.now(),
    })
    return sub ? { id: `u:${sub}`, account: true } : null
  }

  private send(id: ConnId, text: string) {
    try {
      this.sockets.get(id)?.send(text)
    } catch {
      // The socket is closing; its close event cleans up.
    }
  }

  private closeSocket(id: ConnId, reason: keyof typeof CLOSE_CODES) {
    const ws = this.sockets.get(id)
    if (!ws) return
    try {
      ws.close(CLOSE_CODES[reason], reason)
    } catch {
      // Already closed.
    }
  }

  /**
   * Applies the room's effects: every storage write first (the room saved
   * once), then the messages and closes in order, so the output gate holds
   * each message until what it reflects is durable. Then sets the timers.
   */
  private apply(effects: readonly Effect[]) {
    persist(this.sql, effects, this.state.room)
    const texts = new Map<ServerMessage, string>()
    let wiped = false
    for (const e of effects) {
      if (e.k === 'send') {
        const text = texts.get(e.msg) ?? JSON.stringify(e.msg)
        texts.set(e.msg, text)
        this.send(e.to, text)
      } else if (e.k === 'sync') for (const text of syncTexts(this.sql, e)) this.send(e.to, text)
      else if (e.k === 'close') this.closeSocket(e.to, e.reason)
      else if (e.k === 'event') console.log(JSON.stringify({ ev: e.ev, ...e.data }))
      else if (e.k === 'dump') this.ctx.waitUntil(this.dump(e).catch((err: unknown) => console.log(JSON.stringify({ ev: 'dump.failed', error: String(err) }))))
      else if (e.k === 'wipe') wiped = true
    }
    if (wiped) return this.wipe()
    for (const [id, a] of this.attached) {
      const seat = this.state.live.conns.get(id)?.seat ?? null
      if (a.seat === seat) continue
      const next = { ...a, seat }
      this.attached.set(id, next)
      this.sockets.get(id)?.serializeAttachment(next)
    }
    this.schedule()
  }

  /** The frame timer while a run's clock runs; the alarm for everything else time does. */
  private schedule() {
    const run = this.state.room?.run
    if (running(this.state) && run) {
      if (this.timer === null) {
        this.timer = setTimeout(() => {
          this.timer = null
          this.apply(tick(this.state, Date.now()))
        }, Math.max(0, Math.ceil(nextTickAt(run) - Date.now())))
      }
    } else if (this.timer !== null) {
      clearTimeout(this.timer)
      this.timer = null
    }
    const at = deadline(this.state)
    if (at === this.alarmAt) return
    this.alarmAt = at
    void (at === null ? this.ctx.storage.deleteAlarm() : this.ctx.storage.setAlarm(at))
  }

  /** Records a dump (a desync, a bad snapshot: room, run start, the whole input log, hashes per seat, builds and user agents) in the vault. */
  private async dump(e: Extract<Effect, { k: 'dump' }>) {
    const room = this.state.room
    const at = Date.now()
    const json = room ? dumpJson(this.sql, room, e, at) : null
    if (!room || !json) return
    const bytes = await gzip(json.body)
    const id = `${room.code}-${e.run}-${e.tick}-${randomToken(3)}`
    await this.env.VAULT.getByName('dumps').put({ id, code: room.code, run: e.run, tick: e.tick, at, size: bytes.byteLength }, bytes)
    console.log(JSON.stringify({ ev: 'dump.saved', id, bytes: bytes.byteLength, logTicks: json.logTicks }))
  }

  /** The room is over: storage, alarm and sockets go. */
  private wipe() {
    if (this.timer !== null) clearTimeout(this.timer)
    this.timer = null
    this.alarmAt = null
    for (const id of [...this.sockets.keys()]) {
      this.send(id, JSON.stringify({ t: 'bye', reason: 'expired' } satisfies ServerMessage))
      this.closeSocket(id, 'expired')
    }
    this.state = loadState(null, gen, Date.now())
    // Atomic, and (compatibility date 2026-02-24 on) the alarm goes too.
    void this.ctx.storage.deleteAll()
  }
}
