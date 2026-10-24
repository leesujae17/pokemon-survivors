import { createRng } from '../src/engine/rng'
import { LEGENDS, isLegend } from '../src/data/legends'
import { playerForm } from '../src/game/branch'
import { recordLegendWin } from '../src/game/capture'
import { advancePhase, chooseOffer, step } from '../src/game/game'
import { gainXp } from '../src/game/leveling'
import { grantStone } from '../src/game/mega'
import { EMPTY_SAVE, NO_RANKS, UPGRADES, UPGRADE_IDS, type Ranks, type Save } from '../src/game/meta'
import { MOVES } from '../src/game/moves'
import { startGame, startRecording, recordEvent, recordStep, moveOf, resimulate, RULES_VERSION, TICK, type ReplayStart } from '../src/game/replay'
import type { Game, Offer } from '../src/game/types'

const VIEW = { w: 480, h: 270 }
const BASE: ReplayStart = { seed: 11, starter: 'squirtle', difficulty: 'normal', ranks: NO_RANKS, shiny: false, luckyEgg: false, outbreak: null, lure: false, incense: false, view: VIEW }
const PICKS = new Set<Game['phase']>(['levelup', 'branch', 'ability', 'tm', 'curse', 'pokeball'])

const snapshot = (g: Game): Array<number | string> => {
  const p = g.player
  const form = playerForm(g)
  const values: Array<number | string> = [g.phase, g.time, g.now, g.kills, g.coins, g.revives, p.level, p.xp, p.hp, p.x, p.y, p.stage, g.legend?.awakened ?? -1, g.ability.id ?? '', g.special.stance ?? '', form.name, form.types.join(',')]
  for (const [key, value] of Object.entries(p.stats)) values.push(key, typeof value === 'number' ? value : JSON.stringify(value))
  for (const m of p.moves) values.push(m.id, m.level, m.cooldown, m.path ?? 0)
  for (const e of g.enemies) values.push(e.kind, e.x, e.y, e.hp, e.fight?.phase ?? -1)
  for (const p of g.pickups) values.push(p.kind, p.x, p.y)
  return values
}

const hash = (values: ReadonlyArray<number | string>) => {
  const bytes = new DataView(new ArrayBuffer(8))
  let h = 0x811c9dc5
  const byte = (b: number) => { h = Math.imul(h ^ b, 0x01000193) >>> 0 }
  for (const value of values) {
    if (typeof value === 'string') for (let i = 0; i < value.length; i++) byte(value.charCodeAt(i) & 255)
    else { bytes.setFloat64(0, value); for (let i = 0; i < 8; i++) byte(bytes.getUint8(i)) }
  }
  return h.toString(16).padStart(8, '0')
}

type Scenario = { id: string; start: ReplayStart; seconds: number; stage: (g: Game) => void }
const scenarios: Scenario[] = [
  { id: 'standard-levelups', start: BASE, seconds: 45, stage: g => gainXp(g, 600) },
  { id: 'standard-mega', start: { ...BASE, starter: 'charmander' }, seconds: 30, stage: g => { g.player.stage = 2; grantStone(g, 'charizardY') } },
  { id: 'legend-nightmare-horde', start: { ...BASE, starter: 'kyogre', difficulty: 'nightmare' }, seconds: 20, stage: g => { g.time = 180; g.nextEvent = 99; gainXp(g, 800) } },
  ...(['kyogre', 'groudon', 'rayquaza'] as const).map(starter => ({ id: `legend-${starter}-awakenings`, start: { ...BASE, starter }, seconds: 30, stage: (g: Game) => { g.player.level = 28; advancePhase(g) } })),
  { id: 'legend-deoxys-stances', start: { ...BASE, starter: 'deoxys' }, seconds: 30, stage: () => {} },
  { id: 'legend-arceus-biome', start: { ...BASE, starter: 'arceus' }, seconds: 30, stage: g => { g.time = 350 } },
]

export const crossEngineScenarios = () => scenarios.map(scenario => {
  const view = { ...VIEW }
  const game = startGame(scenario.start, view)
  scenario.stage(game)
  const end = game.time + scenario.seconds
  const recorder = startRecording(scenario.start)
  const bot = createRng(5)
  const trail: Array<number | string> = []
  let direction = 0
  while (game.time < end && game.phase !== 'gameover' && game.phase !== 'victory' && recorder.tick < 10000) {
    if (PICKS.has(game.phase)) {
      const index = Math.floor(bot() * game.offers.length)
      recordEvent(recorder, ['offer', index])
      chooseOffer(game, game.offers[index]!)
      continue
    }
    if (recorder.tick % 30 === 0) trail.push(...snapshot(game))
    if (recorder.tick === 600) Object.assign(view, { w: 300, h: 520 })
    direction = (direction + Math.floor(bot() * 3) + 31) % 32
    const special = recorder.tick % 240 === 0
    const mega = recorder.tick % 400 === 100
    if (special) recordEvent(recorder, ['special'])
    if (mega) recordEvent(recorder, ['mega'])
    step(game, { move: recordStep(recorder, view, moveOf(193 + direction)), special, mega }, TICK)
  }
  const replay = JSON.parse(JSON.stringify(recorder.replay))
  const resimulated = startGame(replay.start)
  scenario.stage(resimulated)
  resimulate(replay, resimulated)
  const originalEnd = [...snapshot(game), game.rng()]
  const replayEnd = [...snapshot(resimulated), resimulated.rng()]
  return { id: scenario.id, rules: RULES_VERSION, ticks: recorder.tick, kills: game.kills, level: game.player.level, awakened: game.legend?.awakened ?? null, biome: game.biome.id, types: playerForm(game).types, phase: game.phase, sameReplayEnd: hash(originalEnd) === hash(replayEnd), digest: hash([...trail, ...replayEnd]) }
})

const maximumRanks = Object.fromEntries(UPGRADE_IDS.map(id => [id, UPGRADES[id].maxRank])) as Ranks
const pickScore = (game: Game, offer: Offer) => {
  if (offer.kind === 'ability') return ({ iceBody: 90, multiscale: 90, hugePower: 100, adaptability: 95, technician: 95, regenerator: 85, naturalCure: 90 } as Record<string, number>)[offer.id] ?? 50
  if (offer.kind === 'evolution' || offer.kind === 'duo') return 110
  if (offer.kind === 'move') {
    const signature = isLegend(game.starter) && LEGENDS[game.starter].signature === offer.id
    const owned = game.player.moves.find(move => move.id === offer.id)
    const def = MOVES[offer.id]
    return signature ? 150 : owned ? 95 : 60 + Math.min(25, def.base.damage / Math.max(0.2, def.base.cooldown))
  }
  if (offer.kind === 'branch') return 115
  if (offer.kind === 'item') return ({ leftovers: 120, shellBell: 105, spinach: 95, charcoal: 95, mysticWater: 100, wiseGlasses: 90, quickClaw: 90, focusBand: 90 } as Record<string, number>)[offer.id] ?? 65
  if (offer.kind === 'berry') return game.player.hp < game.player.stats.maxHp / 2 ? 120 : 5
  return 20
}

/** A normal legal-input bot: no HP/time/level/enemy changes or forced outcomes. */
export const fullRun = (starter: ReplayStart['starter'] = 'kyogre', seed = 11) => {
  const start: ReplayStart = { ...BASE, starter, seed, ranks: maximumRanks }
  const game = startGame(start)
  const recorder = startRecording(start)
  let save: Save = EMPTY_SAVE
  const milestones: Array<Record<string, string | number | boolean>> = []
  let nextMinute = 60
  let simulated = 0
  let previousX = 0, previousY = 0, stuck = 0
  let decisions = 0
  const trail: Array<number | string> = []
  const consumeEvents = () => {
    for (const event of game.events.splice(0)) {
      if (event.kind === 'legendBeaten' && isLegend(event.legend)) save = recordLegendWin(save, { legend: event.legend, shiny: event.shiny, endless: game.endless !== null }).save
      if (['boss', 'legendBeaten', 'awakened', 'victory', 'gameover', 'riftEnter', 'riftExit'].includes(event.kind)) milestones.push({ time: game.time, event: event.kind, detail: 'enemy' in event ? event.enemy : 'legend' in event ? event.legend : '' })
    }
  }
  while (simulated < 1400 && game.phase !== 'gameover' && game.phase !== 'victory') {
    if (PICKS.has(game.phase)) {
      if (++decisions > 6000) throw new Error(`Bot pick budget exceeded at ${game.time}s: ${game.phase}`)
      let index = 0
      game.offers.forEach((offer, i) => { if (pickScore(game, offer) > pickScore(game, game.offers[index]!)) index = i })
      recordEvent(recorder, ['offer', index])
      chooseOffer(game, game.offers[index]!)
      consumeEvents()
      continue
    }
    const p = game.player
    let vx = 0, vy = 0
    for (const enemy of game.enemies) {
      if (enemy.dying >= 0) continue
      const dx = p.x - enemy.x, dy = p.y - enemy.y
      const d2 = dx * dx + dy * dy
      if (d2 < 150 * 150) {
        const force = (enemy.boss ? 1.5 : 1) / Math.max(36, d2)
        vx += dx * force * 200; vy += dy * force * 200
      }
    }
    let target = game.pickups[0], score = Infinity
    for (const pickup of game.pickups) {
      const dx = pickup.x - p.x, dy = pickup.y - p.y
      const weight = pickup.kind === 'xp' ? 1 : pickup.kind === 'coin' ? 2 : 0.4
      const distance = (dx * dx + dy * dy) * weight
      if (distance < score) { target = pickup; score = distance }
    }
    if (target) {
      const dx = target.x - p.x, dy = target.y - p.y, length = Math.sqrt(dx * dx + dy * dy) || 1
      vx += dx / length * 0.65; vy += dy / length * 0.65
    } else {
      const angle = simulated / 9
      vx += Math.cos(angle) * 0.6; vy += Math.sin(angle) * 0.6
    }
    if (Math.abs(p.x - previousX) + Math.abs(p.y - previousY) < 0.01) stuck += TICK
    else stuck = 0
    previousX = p.x; previousY = p.y
    if (stuck > 0.8) { vx += Math.cos(simulated * 2) * 2; vy += Math.sin(simulated * 2) * 2 }
    const length = Math.sqrt(vx * vx + vy * vy) || 1
    const special = recorder.tick % 120 === 0
    const mega = recorder.tick % 120 === 30
    if (special) recordEvent(recorder, ['special'])
    if (mega) recordEvent(recorder, ['mega'])
    step(game, { move: recordStep(recorder, game.view, { x: vx / length, y: vy / length }), special, mega }, TICK)
    simulated += TICK
    consumeEvents()
    if (recorder.tick % 600 === 0) trail.push(...snapshot(game))
    if (game.time >= nextMinute) {
      milestones.push({ time: game.time, event: 'minute', hp: p.hp, level: p.level, kills: game.kills })
      console.log(`BOT ${starter}/${seed} ${Math.round(game.time)}s Lv${p.level} HP${Math.round(p.hp)} kills=${game.kills}`)
      nextMinute += 60
    }
  }
  const replay = JSON.parse(JSON.stringify(recorder.replay))
  const repeated = startGame(replay.start)
  resimulate(replay, repeated)
  return {
    starter, seed, difficulty: start.difficulty, legalMaxUpgradeRanks: true, noMidRunStateEdits: true, simulatedSeconds: simulated, runSeconds: game.time,
    phase: game.phase, ticks: recorder.tick, kills: game.kills, level: game.player.level, hp: game.player.hp, awakened: game.legend?.awakened ?? null,
    moves: game.player.moves.map(move => ({ id: move.id, level: move.level })), captures: save.legends, milestones,
    digest: hash([...trail, ...snapshot(game)]), sameReplayEnd: hash(snapshot(game)) === hash(snapshot(repeated)), replay,
  }
}
