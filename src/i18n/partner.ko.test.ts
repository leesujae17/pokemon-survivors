import { describe, expect, it } from 'vitest'
import { PLAYABLE_IDS, PLAYABLE } from '../data/hatchlings'
import { MEGAS } from '../data/megas'
import { resolveSpecial } from '../game/special'
import { MOVES } from '../game/moves'
import { ko } from './ko'
import { nameIn } from './names'

describe('Korean partner details', () => {
  it('translates the special names shown at the first and final stages of every partner', () => {
    for (const id of PLAYABLE_IDS) {
      for (const stage of [0, PLAYABLE[id].line.length - 1]) {
        const { tier } = resolveSpecial(id, stage)
        expect(nameIn('ko', tier.name), `${id}: ${tier.name}`).toMatch(/[가-힣]/)
      }
    }
    expect(nameIn('ko', 'Hydro Pump')).toBe('하이드로펌프')
    expect(nameIn('ko', 'Hydro Cannon')).toBe('하이드로캐논')
  })

  it('translates Mega forms and their ability names', () => {
    for (const mega of Object.values(MEGAS)) {
      expect(nameIn('ko', mega.name), mega.name).toMatch(/[가-힣]/)
      expect(nameIn('ko', mega.ability), mega.ability).toMatch(/[가-힣]/)
    }
    expect(nameIn('ko', 'Tough Claws')).toBe('단단한발톱')
  })

  it('provides Korean descriptions for the full move roster', () => {
    for (const id of Object.keys(MOVES) as Array<keyof typeof MOVES>) {
      expect(ko.moves[id].description, id).toMatch(/[가-힣]/)
    }
  })
})
