// Builds src/i18n/names.ko.generated.json: the official Korean names (PokeAPI) of every
// Pokémon, move and item name the game shows, keyed by the English name in the data files.
// Megas are built from their species ("Mega Charizard X" → 메가리자몽X). Names PokeAPI
// doesn't know are listed at the end: give them a Korean name in src/i18n/names.ko.ts.
// Usage: npm run names
import { writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { join } from 'node:path'
import { runnerImport } from 'vite'

const ROOT = fileURLToPath(new URL('..', import.meta.url))
const OUT = join(ROOT, 'src/i18n/names.ko.generated.json')
const GRAPHQL = 'https://graphql.pokeapi.co/v1beta2'
const KO = 3
const EN = 9

/** Data modules whose tables hold names the player sees. */
const SOURCES = [
  '/src/data/hatchlings.ts',
  '/src/data/legends.ts',
  '/src/data/abilities.ts',
  '/src/data/branches.ts',
  '/src/data/curses.ts',
  '/src/data/enemies.ts',
  '/src/data/roster.ts',
  '/src/data/megas.ts',
  '/src/data/items.ts',
  '/src/data/consumables.ts',
  '/src/data/supporters.ts',
  '/src/game/moves.ts',
  '/src/game/special.ts',
  '/src/game/consumables.ts',
  '/src/game/meta.ts',
  '/src/game/bag.ts',
]

/** Every string under a `name`, `stone` or `ability` key, however deep. */
const collect = (value, out, seen = new Set()) => {
  if (!value || typeof value !== 'object' || seen.has(value)) return
  seen.add(value)
  for (const [key, v] of Object.entries(value)) {
    if ((key === 'name' || key === 'stone' || key === 'ability') && typeof v === 'string') out.add(v)
    else collect(v, out, seen)
  }
}

const englishNames = async () => {
  const names = new Set()
  for (const file of SOURCES) {
    const { module } = await runnerImport(file, { configFile: false, root: ROOT })
    collect(module, names)
  }
  return names
}

const query = async (q) => {
  const res = await fetch(GRAPHQL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ query: q }) })
  const json = await res.json()
  if (json.errors) throw new Error(JSON.stringify(json.errors).slice(0, 400))
  return json.data
}

/** English → Korean for one PokeAPI name table (`pokemonspeciesname`, `movename`, `itemname`). */
const table = async (name, idField) => {
  const data = await query(`{ rows: ${name}(where: { language_id: { _in: [${KO}, ${EN}] } }) { ${idField} language_id name } }`)
  const byId = new Map()
  for (const r of data.rows) {
    const entry = byId.get(r[idField]) ?? {}
    entry[r.language_id === KO ? 'ko' : 'en'] = r.name
    byId.set(r[idField], entry)
  }
  return new Map([...byId.values()].filter((e) => e.en && e.ko).map((e) => [norm(e.en), e.ko]))
}

/** Matching key: case, accents, dots and dashes don't matter ("Poké Ball" = "Poke Ball", "Exp. Share" = "Exp Share"). */
const norm = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[.'’-]/g, '').replace(/\s+/g, ' ').trim()

const names = await englishNames()
const [species, moves, items, abilities] = await Promise.all([
  table('pokemonspeciesname', 'pokemon_species_id'),
  table('movename', 'move_id'),
  table('itemname', 'item_id'),
  table('abilityname', 'ability_id'),
])

const out = {}
const unknown = []
for (const en of [...names].sort()) {
  const key = norm(en)
  const mega = /^Mega (.+?)(?: ([XYZ]))?$/.exec(en)
  const ko =
    species.get(key) ??
    moves.get(key) ??
    items.get(key) ??
    abilities.get(key) ??
    (mega && species.get(norm(mega[1])) ? `메가${species.get(norm(mega[1]))}${mega[2] ?? ''}` : undefined)
  if (ko) out[en] = ko
  else unknown.push(en)
}

await writeFile(OUT, `${JSON.stringify(out, null, 1)}\n`)
console.log(`Wrote ${OUT}: ${Object.keys(out).length} of ${names.size} names.`)
if (unknown.length) console.log(`No PokeAPI match (${unknown.length}): ${unknown.join(' | ')}`)
