import { describe, expect, it } from 'vitest'
import { CHANGELOG } from './changelog'
import { guidePage } from './pages/guide'
import { changelogPage } from './pages/changelog'

describe('Korean player documentation', () => {
  it('translates guide prose and data names, retaining only keyboard and controller labels', () => {
    const main = guidePage('ko').match(/<main\b[^>]*>([\s\S]*?)<\/main>/)![1]!
    const text = [...main.matchAll(/>([^<>]+)</g)].map((m) => m[1]!).join(' ')
    const remaining = text.replace(/&(?:#\d+|[a-z]+);/gi, ' ').replaceAll('Pokémon World', '').replace(/\b(?:WASD|D-pad|Space|Shift|Esc|Start|Enter|Tab|Xbox|PlayStation)\b/g, '')
    expect(remaining.match(/[A-Za-z]{3,}/g)).toBeNull()
    expect(text).toContain('불꽃세례')
    expect(text).toContain('합동 기술')
    expect(text).toContain('저주받은 물건')
  })

  it('translates every historical update, including collapsed details', () => {
    for (const update of CHANGELOG) {
      const fields = [update.title, ...update.highlights, ...update.changes.flatMap((change) => [change.title, ...change.notes])]
      for (const field of fields) expect(field.ko, `${update.date}: ${field.en}`).toMatch(/[가-힣]/)
    }
  })

  it('omits the removed footer link block from guide and history pages', () => {
    for (const page of [guidePage('ko'), changelogPage('ko')]) expect(page).not.toContain('class="footer-links"')
  })
})
