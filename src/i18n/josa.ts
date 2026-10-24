/**
 * Final sound of a word, for the Korean particles after it: 0 no final consonant,
 * 1 a final consonant, 2 a final ㄹ. Hangul is exact; Pokémon, move and item names
 * stay in English, so a Latin ending is read the way it's said in Korean: -m/-n/-ng
 * close the syllable, -l/-le is ㄹ, and the rest end on a vowel (Charmander → 차맨더,
 * Vikavolt → 빅카볼트). Digits are read in Sino-Korean (일, 삼, 육…).
 */
export const coda = (word: string | number): 0 | 1 | 2 => {
  const s = String(word).replace(/[^\p{L}\p{N}]+$/u, '')
  const last = s.at(-1) ?? ''
  const code = last.charCodeAt(0)
  if (code >= 0xac00 && code <= 0xd7a3) {
    const jong = (code - 0xac00) % 28
    return jong === 0 ? 0 : jong === 8 ? 2 : 1
  }
  if (/\d/.test(last)) return last === '1' || last === '7' || last === '8' ? 2 : last === '0' || last === '3' || last === '6' ? 1 : 0
  const w = s.toLowerCase()
  if (/(l|le)$/.test(w)) return 2
  return /(m|n|ng)$/.test(w) ? 1 : 0
}

/** Particles that agree with the word before them; each returns only the particle: `${name}${ga(name)}` → Pikachu가, Bagon이. */
export const ga = (w: string | number) => (coda(w) ? '이' : '가')
export const reul = (w: string | number) => (coda(w) ? '을' : '를')
export const neun = (w: string | number) => (coda(w) ? '은' : '는')
export const wa = (w: string | number) => (coda(w) ? '과' : '와')
/** 으로 after a closed syllable, 로 after a vowel or ㄹ. */
export const ro = (w: string | number) => (coda(w) === 1 ? '으로' : '로')
