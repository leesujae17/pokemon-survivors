# Co-op relay

The room relay for co-op: a Cloudflare Worker with one Durable Object per room
(`idFromName(code)`, SQLite storage). It owns the run's clock (60 Hz, ticks
derived from elapsed time), stamps inputs into the next unsent tick, persists
the input log before broadcasting (the output gate holds every frame until it
is durable), compares the players' state hashes, keeps the latest snapshot a
majority agreed on, heals a diverged client and records a desync dump. It runs
no game code: it imports only `../src/net/protocol.ts`, which imports nothing
(a test checks it).

- `src/room.ts`: the room as a pure state machine (all the rules, tested in `test/room.test.ts`).
- `src/roomObject.ts`: the Durable Object, a thin shell doing the storage, sockets and timers the room asks for.
- `src/vault.ts`: one Durable Object keeping desync dumps after their room is gone (30 days, the newest 500, pruned by its alarm).
- `src/index.ts`: the Worker routes; `src/auth.ts`: Clerk session tokens (RS256 against the JWKS).

```bash
npm install
npm test             # vitest in the Workers runtime (pure rules + a restart test)
npm run typecheck    # wrangler types + tsc
npm run dev          # wrangler dev on :8791
npm run deploy       # ps-coop-dev on workers.dev (also allows Vercel previews)
npm run deploy:prod  # ps-coop on workers.dev (only pokemonsurvivors.com)
node scripts/probe.mjs --bots 3 --secs 40 --desync --rejoin   # bots against a deployed relay
```

## Endpoints

- `POST /rooms` `{ v, build, region? }` → `{ code, region }`. The room lives near the host
  (location hint from the request's continent, or `region`).
- `GET /rooms/<code>/ws`: the WebSocket. The first message is `hello`. Co-op is for signed-in
  players (a Clerk session token in `hello.auth`): a guest hello is refused with `signIn`, except
  where `ALLOW_GUESTS` is `on` (the dev relay and local `wrangler dev`, for the soak, the in-tab
  bots and dev builds; `env.production` has it `off`).
- `GET /health`: the Worker answering (no Durable Object is touched).
- `GET /admin/dumps` (the last 100) and `GET /admin/dumps/<id>` (gzipped JSON), with
  `Authorization: Bearer <ADMIN_TOKEN>`. Without the token they answer 404.

## Secrets

`ADMIN_TOKEN` is set with `wrangler secret put ADMIN_TOKEN` (add `--env production` for
`ps-coop`). The tokens are in `~/.config/ps-coop/dev-admin-token` and `prod-admin-token` on
Pedro's Mac (mode 600). To fetch a dump:

```bash
H="Authorization: Bearer $(cat ~/.config/ps-coop/dev-admin-token)"
curl -s -H "$H" https://ps-coop-dev.pedrobarretto.workers.dev/admin/dumps
curl -s -H "$H" https://ps-coop-dev.pedrobarretto.workers.dev/admin/dumps/<id> | gunzip > dump.json
```

A dump has `meta` (room, build, region, the run's start with seed and loadouts, the
hashes reported at the diverged tick, seats with builds and user agents), `log`
(`[tick, entries]` for every tick with inputs) and `hashes` (`[tick, {seat: hash}]`).
Re-simulating `meta.run` with `log` reproduces the run.

## São Paulo relay (`node/`)

Cloudflare has no Durable Objects in South America, so a Brazilian room runs in the US
(116–140 ms away). `node/` runs the same room (`src/room.ts`, `src/store.ts`, `src/auth.ts`,
`src/codes.ts`) on Node 24 as a Docker image, on the VPS in São Paulo (Dokploy, next to the
accounts API, ~9 ms from a Brazilian player), for rooms whose host is in South America.

- **Routing:** a room's code says its relay (`RELAY_HOMES` in the protocol). Cloudflare makes
  codes starting with a letter, São Paulo (`sa`) with 2 to 5; 6 to 9 are free for the next VPS
  relay (one entry there, one in `RELAY_URLS` in `src/coopShell.ts`, one `VITE_COOP_URL_*`, and
  this image with `RELAY_HOME`). The game (`src/coop/relays.ts`) creates on the nearest VPS
  relay that answers within 70 ms and falls back to Cloudflare; a build without
  `VITE_COOP_URL_SA` sends every room to Cloudflare.
- **One process, every room:** one SQLite file per room (`node:sqlite`, WAL) on the `/data`
  volume, a 60 Hz timer per running room, the Worker's routes, origin checks, Clerk tokens,
  rate limits (by `X-Real-Ip` from Traefik) and the dump vault. An exclusive lock on
  `/data/relay.lock` keeps a second container off the same rooms.
- **A deploy or a crash loses only sockets:** SIGTERM closes them with 1012 (clients reconnect
  at once and resume) and rooms load back from the volume. A room whose step throws starts
  over from its file without touching the others. Logs are the Workers' JSON lines, plus
  `relay.stats` a minute (rooms, sockets, event-loop lag, CPU, memory).

```bash
cd node && npm ci
npm test && npm run typecheck   # the Node shell (restart, lock and rate-limit tests)
npm run dev                     # :8795, guests on; the game: ps.coop('relay', 'sa', 'http://localhost:8795')
node ../scripts/probe.mjs --url http://localhost:8795 --bots 3 --secs 40 --desync --rejoin
docker build -f relay/node/Dockerfile -t ps-relay .   # from the repository root, as Dokploy does
```

### One-time setup (Pedro)

1. **DNS** (GoDaddy, `ns23`/`ns24.domaincontrol.com`): an `A` record, name `coop-sa`, value
   `72.60.58.225` (the VPS, like `api`), TTL 600. Check: `dig +short coop-sa.pokemonsurvivors.com`.
2. **Dokploy**, project **Pokémon Survivors**, a new application `coop-sa`:
   - Source: this GitHub repository, branch `main`. Build type **Dockerfile**, Dockerfile
     `relay/node/Dockerfile`, build context `.` (the repository root).
   - Auto deploy on, with watch paths `relay/src/**`, `relay/node/**` and `src/net/protocol.ts`
     (all the image bundles: game deploys never restart it).
   - **Volume** (Advanced → Mounts): a volume mount, name `ps-relay-sa-data`, mount path `/data`.
     Without it every deploy loses the rooms in play.
   - **Rollout: stop-first** (Advanced → Swarm → Update config, `Order: stop-first`, Swarm's
     default; not the API's start-first). Two relays can't share the rooms: a new container
     started first would wait on the lock, never get healthy, and roll back.
   - **Environment:**
     ```
     RELAY_HOME=sa
     ALLOWED_ORIGINS=https://www.pokemonsurvivors.com,https://pokemonsurvivors.com
     ALLOW_GUESTS=off
     ADMIN_TOKEN=<openssl rand -base64 32, kept in ~/.config/ps-coop/sa-admin-token, mode 600>
     ```
     (`CLERK_ISSUER` defaults to `https://clerk.pokemonsurvivors.com`; `PORT`, `DATA_DIR` and
     `IP_HEADER=x-real-ip` come from the image.)
   - **Domain:** host `coop-sa.pokemonsurvivors.com`, path `/`, container port `8080`, HTTPS on,
     certificate Let's Encrypt.
3. Deploy, then check: `curl https://coop-sa.pokemonsurvivors.com/health` answers
   `{"ok":true,"home":"sa","version":…}`. To soak it, deploy a second app with
   `ALLOW_GUESTS=on` (or set it for a while) and run the probe with `--url https://coop-sa.pokemonsurvivors.com`:
   it must keep its sockets well past a minute (Traefik's timeouts) and end with every check green.
4. Ship the Cloudflare relay's code change (`npm run deploy:prod` here: its codes now always start
   with a letter) and wait 6 h, a room's longest life, so no live Cloudflare room has a digit code.
5. Vercel: `VITE_COOP_URL_SA=https://coop-sa.pokemonsurvivors.com` in Production, then redeploy the site.

No Clerk change is needed: the issuer is the same, and a token's `azp` is checked against `ALLOWED_ORIGINS`.

### Running it

- **Deploy:** a push to `main` touching the watch paths, or Deploy in Dokploy. The old container
  stops (1012 to every socket), the new one loads the rooms from the volume: players freeze for
  about a second and resume.
- **Rollback:** Dokploy's Deployments tab, redeploy the previous one (the volume stays).
- **Logs:** the app's Logs tab in Dokploy (JSON lines: `run.*`, `seat.*`, `room.*`, `relay.stats`).
- **Dumps:** `curl -s -H "Authorization: Bearer $(cat ~/.config/ps-coop/sa-admin-token)" https://coop-sa.pokemonsurvivors.com/admin/dumps`
  (then `/admin/dumps/<id> | gunzip > dump.json`).
- **Costs:** nothing extra; it shares the VPS. A 4-player room takes ~1–1.5% of a core and
  ~1 MB of memory past the process's ~80 MB.

## Limits and costs

Storage writes per run: one row per frame that carries inputs (at most 60 a second),
one a second for the clock bound, one per compared hash tick, and the snapshot chunks
every 10 s. A 4-player, 20-minute run writes about 75k rows. The Workers Free plan allows
100k rows written a day, so production needs Workers Paid (50M rows a month included).
