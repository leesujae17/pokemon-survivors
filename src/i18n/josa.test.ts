import { describe, expect, it } from 'vitest'
import { coda, ga, neun, reul, ro, wa } from './josa'

describe('coda', () => {
  it('reads Hangul exactly', () => {
    expect(coda('피카츄')).toBe(0)
    expect(coda('불꽃')).toBe(1)
    expect(coda('달')).toBe(2)
  })

  it('reads English names the way they are said in Korean', () => {
    expect(coda('Bagon')).toBe(1)
    expect(coda('Bronzong')).toBe(1)
    expect(coda('Squirtle')).toBe(2)
    expect(coda('Charcoal')).toBe(2)
    expect(coda('Charmander')).toBe(0)
    expect(coda('Vikavolt')).toBe(0)
  })

  it('ignores trailing markup and reads digits', () => {
    expect(coda('Charizard (Mega X)')).toBe(0)
    expect(coda('Lv 3')).toBe(1)
    expect(coda(7)).toBe(2)
    expect(coda(2)).toBe(0)
  })
})

describe('particles', () => {
  it('pick the form that matches the final sound', () => {
    expect(ga('Pikachu') + reul('Bagon') + neun('Mewtwo') + wa('Onix')).toBe('가을는와')
    expect(ga('Bagon') + reul('Pikachu') + neun('Bagon') + wa('Bagon')).toBe('이를은과')
  })

  it('use 로 after ㄹ and vowels, 으로 after other final consonants', () => {
    expect(ro('Charcoal')).toBe('로')
    expect(ro('Eevee')).toBe('로')
    expect(ro('Bagon')).toBe('으로')
  })
})
