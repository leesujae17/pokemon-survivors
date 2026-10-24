import generated from './names.ko.generated.json'
import { locale, type Locale } from '.'

/**
 * Korean names with no official PokeAPI entry: the game's own props and a few
 * names the Korean games never used (picked from Korean Pokémon GO and wiki usage).
 */
const KO_EXTRA: Readonly<Record<string, string>> = {
  'Health Wing': '체력날개',
  'Hyper Beam': '파괴광선',
  'Burn Up': '불사르기',
  'Double Team': '그림자분신',
  'Cosmic Power': '코스믹파워',
  'Muscle Wing': '근력날개',
  'Resist Wing': '저항력날개',
  'Swift Wing': '순발력날개',
  'Pretty Wing': '고운날개',
  'Aura Guard': '오라가드',
  'Berry Tree': '나무열매 나무',
  'Dragon Flare': '드래곤플레어',
  'Forme Change': '폼체인지',
  'Primal Groudon': '원시그란돈',
  'Primal Kyogre': '원시가이오가',
  'Exp. Candy': '경험사탕',
  Incense: '향로',
  'Item Ball': '아이템볼',
  'Key Stone': '키스톤',
  // The held item, not the move of the same English name (손가락흔들기), which the data never names.
  Metronome: '메트로놈',
  'Oran Berry': '오랭열매',
  'Tall Grass': '풀숲',
  // The screens titled with the official names.
  'POKéDEX': '포켓몬 도감',
  'POKé MART': '프렌들리숍',
  // Only written in the messages' text (achievements, blurbs, toasts), never in the data.
  Explosion: '대폭발',
  'Huge Power': '천하장사',
  Meowth: '나옹',
  'Pay Day': '고양이돈받기',
  Splash: '튀어오르기',
  // Regions (`REGIONS`), as the Korean games call them.
  Kanto: '관동',
  Johto: '성도',
  Hoenn: '호연',
  Sinnoh: '신오',
  Unova: '하나',
  Kalos: '칼로스',
  Alola: '알로라',
  Galar: '가라르',
  Paldea: '팔데아',
}

/** Official Korean names (`npm run names`, from PokeAPI), keyed by the English name in the data files. */
const KO: Readonly<Record<string, string>> = { ...generated, ...KO_EXTRA }

/**
 * A Pokémon, move or item name as `lang` shows it. The data keeps the official
 * English names (pt-BR and Spanish show them too); Korean shows the official
 * Korean ones. The site pages render every language at build time, so they pass it.
 */
export const nameIn = (lang: Locale, name: string) => (lang === 'ko' ? (KO[name] ?? name) : name)

/** `nameIn` for the game's current language. Call it at render time, like `t()`. */
export const localName = (name: string) => nameIn(locale(), name)
