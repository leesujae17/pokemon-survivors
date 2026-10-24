import { describe, expect, it } from 'vitest'
import { ABILITIES } from '../data/abilities'
import { BOSS_PHASES } from '../data/bosses'
import { BRANCHES } from '../data/branches'
import { CURSES } from '../data/curses'
import { ENEMIES } from '../data/enemies'
import { PLAYABLE } from '../data/hatchlings'
import { ITEMS } from '../data/items'
import { MEGAS } from '../data/megas'
import { WINGS } from '../data/places'
import { BAG_ITEMS } from '../game/bag'
import { CONSUMABLES } from '../game/consumables'
import { MOVES } from '../game/moves'
import { ko } from './ko'
import { nameIn } from './names'

// Key legends, units and proper names are intentional. Ordinary English prose is not.
const allowed = new Set('HP Lv px PC QR DPS TM SPACE Space Shift ENTER ESC TAB BACKSPACE PNG UTC PS XXXX Discord Safari Google GitHub PMD SpriteCollab PokéAPI Pokémon Nintendo Creatures GAME FREAK World The Company US'.split(' '))
const englishWords = (text: string) => (text.match(/[A-Za-zÀ-ÿ]{2,}/g) ?? []).filter(word => !allowed.has(word))

const strings = (value: unknown, path = ''): Array<[string, string]> => {
  if (typeof value === 'string') return [[path, value]]
  if (typeof value === 'function') {
    // A Korean name exercises interpolated text; numeric samples cover singular/plural,
    // zero, reward amounts and progress. Other parameters keep valid string values.
    const base: unknown[] = Array.from({ length: Math.max(6, value.length) }, () => '표본')
    const samples = [base, ...Array.from({ length: value.length }, (_, i) => [0, 1, 2].map(n => base.map((v, j) => i === j ? n : v))).flat()]
    const outputs: Array<[string, string]> = []
    for (const args of samples) {
      try {
        const result: unknown = Reflect.apply(value, undefined, args)
        if (typeof result === 'string') outputs.push([path, result])
      } catch {
        // Name-only callbacks reject numeric inputs; the base sample must still render.
      }
    }
    expect(outputs.length, `No valid message sample: ${path}`).toBeGreaterThan(0)
    return outputs
  }
  if (value && typeof value === 'object') return Object.entries(value).flatMap(([key, item]) => strings(item, `${path}.${key}`))
  return []
}

describe('Korean localization coverage', () => {
  it('has no English prose in static messages, growth branches or rendered message templates', () => {
    const untranslated = strings(ko).filter(([, text]) => englishWords(text).length)
    expect(untranslated).toEqual([])
  })

  it('covers the description and every upgrade of every move, including both fork choices', () => {
    for (const [id, move] of Object.entries(MOVES)) {
      const text = ko.moves[id as keyof typeof MOVES]
      expect(text, id).toBeDefined()
      expect(text.upgrades, id).toHaveLength(move.upgrades.length)
      for (const [path, line] of strings(text, id)) {
        expect(line, path).toMatch(/[가-힣]/)
        expect(englishWords(line), `${path}: ${line}`).toEqual([])
      }
    }
  })

  it('translates all displayed data names, including boss ultimate attacks', () => {
    const records = { MOVES, ITEMS, CURSES, BRANCHES, ABILITIES, ENEMIES, PLAYABLE, MEGAS, WINGS, BAG_ITEMS, CONSUMABLES }
    const names = Object.entries(records).flatMap(([group, records]) => Object.entries(records).map(([id, def]) => [`${group}.${id}`, def.name]))
    for (const [id, phases] of Object.entries(BOSS_PHASES)) {
      for (const phase of phases ?? []) if (phase.ultimate) names.push([`BOSS_PHASES.${id}`, phase.ultimate.move])
    }
    const missing = names.filter(([, name]) => !/[가-힣]/.test(nameIn('ko', name!)))
    expect(missing).toEqual([])
    for (const [, name] of names) expect(nameIn('en', name!)).toBe(name)
  })
})
