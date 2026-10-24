import { describe, expect, it } from 'vitest'
import { LEGEND_IDS, LEGENDS } from '../data/legends'
import { createFight, phasesOf } from './bossFight'
import { canPlay, isCaptured, recordLegendWin, winsNeeded } from './capture'
import { killEnemy } from './combat'
import { spawnEnemy } from './enemies'
import { createGame } from './game'
import { EMPTY_SAVE, parseSave, recordRun, type Save } from './meta'
import { ownsShiny, playsShiny } from './shinyPicks'
import { applyPush } from './sync'
import { summary } from './tally.fixture'

const VIEW = { w: 480, h: 270 }
const reload = (save: typeof EMPTY_SAVE) => parseSave(JSON.stringify(save))

describe('legend persistence across the full defeat and run lifecycle', () => {
  it('keeps an older save and a normal-form shiny choice without granting a capture', () => {
    const old = parseSave(JSON.stringify({ version: 1, wallet: 12345, ranks: { protein: 2 }, partner: 'kyogre', shinyStarters: { kyogre: false } }))
    expect(old.wallet).toBe(12345)
    expect(old.ranks.protein).toBe(2)
    expect(old.legends).toEqual({})
    expect(canPlay(old, old.partner)).toBe(false)
    expect(ownsShiny(old, 'kyogre')).toBe(true)
    expect(playsShiny(old, 'kyogre')).toBe(false)
    expect(reload(old)).toEqual(old)
  })

  it.each(LEGEND_IDS)('%s unlocks exactly at its threshold and survives serialization', (id) => {
    const others = Object.fromEntries(LEGEND_IDS.filter(other => other !== id).map(other => [other, winsNeeded(other)]))
    let save: Save = { ...EMPTY_SAVE, legends: others }
    for (let n = 1; n <= winsNeeded(id); n++) {
      save = reload(recordLegendWin(save, { legend: id, shiny: n === winsNeeded(id), endless: true }).save)
      expect(isCaptured(save.legends, id)).toBe(n === winsNeeded(id))
      expect(canPlay(save, id)).toBe(n === winsNeeded(id))
    }
    expect(save.shinyStarters[id]).toBe(true)
  })

  it('banks only a final boss defeat, persists before run end, and never counts it again at settlement', () => {
    let save = EMPTY_SAVE
    for (let n = 1; n <= 3; n++) {
      const game = createGame('squirtle', VIEW, n)
      const boss = spawnEnemy(game, 'articuno', 100, 100)
      boss.fight = createFight(game.rng, game.difficulty)
      killEnemy(game, boss)
      expect(boss.hp).toBe(1)
      expect(game.events.some(event => event.kind === 'legendBeaten')).toBe(false)
      boss.fight.phase = phasesOf(boss.kind)!.length - 1
      boss.fight.ultDone = true
      killEnemy(game, boss)
      const defeats = game.events.filter(event => event.kind === 'legendBeaten')
      expect(defeats).toHaveLength(1)
      for (const event of defeats) save = recordLegendWin(save, { legend: 'articuno', shiny: event.shiny, endless: false }).save
      save = reload(save)
      expect(save.legends.articuno).toBe(n)
      expect(game.legendScene?.kind).toBe('capture')
      save = recordRun(save, summary({ legendWins: { articuno: { beaten: 1, shiny: 0 } } }), null, new Date('2026-10-23T12:00:00Z')).save
      expect(save.legends.articuno).toBe(n)
    }
    expect(canPlay(reload(save), 'articuno')).toBe(true)
  })

  it('requires all other 22 captures and endless for Arceus, including the last missing boundary', () => {
    const all22 = Object.fromEntries(LEGEND_IDS.filter(id => id !== 'arceus').map(id => [id, winsNeeded(id)]))
    const short = { ...EMPTY_SAVE, legends: { ...all22, hoOh: LEGENDS.hoOh.unlock.wins - 1 } }
    expect(recordLegendWin(short, { legend: 'arceus', shiny: true, endless: true }).result.counted).toBe(false)
    const ready = recordLegendWin(short, { legend: 'hoOh', shiny: false, endless: false }).save
    expect(recordLegendWin(ready, { legend: 'arceus', shiny: true, endless: false }).result.counted).toBe(false)
    const caught = reload(recordLegendWin(ready, { legend: 'arceus', shiny: true, endless: true }).save)
    expect(canPlay(caught, 'arceus')).toBe(true)
    expect(caught.shinyStarters.arceus).toBe(true)
  })

  it('does not erase a capture when an older device pushes, and repeated merges do not add wins', () => {
    const latest = { ...EMPTY_SAVE, legends: { kyogre: 3, hoOh: 3 }, shinyStarters: { kyogre: false } }
    const old = { ...EMPTY_SAVE, legends: { kyogre: 2, mew: 1 } }
    const push = { save: old, base: 4 }
    const merged = applyPush({ save: latest, revision: 5 }, push)
    expect(merged.save.legends).toEqual({ kyogre: 3, hoOh: 3, mew: 1 })
    expect(merged.save.shinyStarters.kyogre).toBe(false)
    expect(applyPush(merged, push).save).toEqual(merged.save)
    expect(canPlay(reload(merged.save), 'kyogre')).toBe(true)
  })
})
