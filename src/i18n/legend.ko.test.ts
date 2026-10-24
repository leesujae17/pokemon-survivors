/// <reference types="node" />
import { existsSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { LEGEND_IDS, LEGENDS, type LegendDef } from '../data/legends'
import { ABILITIES } from '../data/abilities'
import sprites from '../data/sprites.generated.json'
import { MOVES } from '../game/moves'
import { legendaryMovesKo } from './legend.ko'
import { nameIn } from './names'

describe('the Korean legendary roster', () => {
  it('names all 23 legends, their signature moves, innate abilities and awakened forms in Korean', () => {
    for (const id of LEGEND_IDS) {
      const def: LegendDef = LEGENDS[id]
      const names = [def.name, MOVES[def.signature].name, ABILITIES[def.innate.ability].name, ...(def.form ? [def.form.name] : [])]
      for (const name of names) expect(nameIn('ko', name), `${id}: ${name}`).toMatch(/[가-힣]/)
      const move = legendaryMovesKo[LEGENDS[id].signature]
      expect(move.description).toMatch(/[가-힣]/)
      for (const upgrade of move.upgrades) {
        if (typeof upgrade === 'string') expect(upgrade).toMatch(/[가-힣]/)
        else
          for (const path of upgrade.fork) {
            expect(path.name).toMatch(/[가-힣]/)
            expect(path.desc).toMatch(/[가-힣]/)
          }
      }
    }
  })

  it('ships the normal/shiny sprites, cries and all playable alternate forms', () => {
    const manifest = sprites as Record<string, { forms?: Record<string, unknown> }>
    for (const id of LEGEND_IDS) {
      const def: LegendDef = LEGENDS[id]
      const dex = def.line[0].dex
      const forms = def.form ? [def.form.key] : id === 'deoxys' ? ['attack', 'defense', 'speed'] : []
      for (const form of ['', ...forms]) {
        if (form) expect(manifest[String(dex)]?.forms?.[form], `${id}/${form} manifest`).toBeDefined()
        // Alternate forms intentionally reuse the species portrait, just like the runtime loader.
        for (const color of ['', '/shiny'])
          for (const file of ['Walk.png', 'Idle.png', 'Hurt.png', ...(form ? [] : ['portrait.png'])]) {
            const asset = `../../public/assets/pokemon/${dex}${form ? `/${form}` : ''}${color}/${file}`
            expect(existsSync(new URL(asset, import.meta.url)), asset).toBe(true)
          }
      }
      expect(existsSync(new URL(`../../public/assets/pokemon/${dex}/cry.ogg`, import.meta.url)), `${id} cry`).toBe(true)
    }
  })
})
