import { en } from './en'
import { es } from './es'
import { ko } from './ko'
import { pt, type Messages } from './pt'

export type { Messages }

/** Supported languages, in menu order. `name` is always shown in its own language. */
export const LOCALES = {
  pt: { name: 'Português', short: 'PT', tag: 'pt-BR', messages: pt },
  en: { name: 'English', short: 'EN', tag: 'en-US', messages: en },
  es: { name: 'Español', short: 'ES', tag: 'es-419', messages: es },
  ko: { name: '한국어', short: 'KO', tag: 'ko-KR', messages: ko },
} as const satisfies Record<string, { name: string; short: string; tag: string; messages: Messages }>

export type Locale = keyof typeof LOCALES

export const LOCALE_IDS = Object.keys(LOCALES) as Locale[]

/**
 * Languages of the static site pages (Pokédex, guide, changelog…): every game
 * language, so the game's links open the pages in the language the player picked.
 */
export const SITE_LOCALE_IDS = ['pt', 'en', 'es', 'ko'] as const satisfies readonly Locale[]

export type SiteLocale = (typeof SITE_LOCALE_IDS)[number]

/** The site language a game language links to: the same one, now that the site has them all. */
export const siteLocale = (l: Locale): SiteLocale => l

const KEY = 'ps:lang'

const isLocale = (v: unknown): v is Locale => typeof v === 'string' && v in LOCALES

/** The language a first visit starts in, whatever the browser's. */
export const DEFAULT_LOCALE: Locale = 'ko'

/** Saved choice first, then the first of `languages` we support (`pt-PT` → pt, `es-MX` → es), else Korean. */
export const detectLocale = (saved: string | null, languages: readonly string[]): Locale =>
  isLocale(saved) ? saved : (languages.map((l) => l.slice(0, 2).toLowerCase()).find(isLocale) ?? DEFAULT_LOCALE)

const readSaved = () => {
  try {
    return localStorage.getItem(KEY)
  } catch {
    return null
  }
}

/**
 * Only a localized page (`/en/`, `/es/` and `/ko/` set `data-locale`) picks the first
 * language: everywhere else a first visit starts in Korean, not the browser's language.
 */
const preferredLanguages = (): readonly string[] => {
  const page = globalThis.document?.documentElement.dataset.locale
  return page ? [page] : []
}

let current: Locale = detectLocale(readSaved(), preferredLanguages())

export const locale = () => current

/** Messages of the current language. Call it at render time, so a language switch shows up on the next render. */
export const t = (): Messages => LOCALES[current].messages

/** Switches language and remembers it. Screens re-render themselves (see `main.ts`). */
export const setLocale = (next: Locale) => {
  current = next
  document.documentElement.lang = LOCALES[next].tag
  try {
    localStorage.setItem(KEY, next)
  } catch {
    // Storage blocked: the choice just lasts this session.
  }
}

/** The language after `l`, wrapping around: the menus cycle through them. */
export const nextLocale = (l: Locale) => LOCALE_IDS[(LOCALE_IDS.indexOf(l) + 1) % LOCALE_IDS.length]!

const numberFormats = new Map<string, Intl.NumberFormat>()

/**
 * Whole number with the current language's thousands separator (`1.250`, `1,250`).
 * The HUD formats the run's ₽ every frame, so each language's formatter is built once.
 */
export const formatNumber = (n: number) => {
  const tag = LOCALES[current].tag
  let format = numberFormats.get(tag)
  if (!format) numberFormats.set(tag, (format = new Intl.NumberFormat(tag, { maximumFractionDigits: 0 })))
  return format.format(Math.round(n))
}

/** A number with up to `digits` decimals in the current language (`1,25` in pt and es, `1.25` in English). */
export const formatDecimal = (n: number, digits = 1) => n.toLocaleString(LOCALES[current].tag, { maximumFractionDigits: digits })

/** A `YYYY-MM-DD` day as day and month in the current language (`15/10`, `10/15`). */
export const formatDay = (day: string) => {
  const [y, m, d] = day.split('-').map(Number)
  return new Date(Date.UTC(y!, m! - 1, d!)).toLocaleDateString(LOCALES[current].tag, { day: '2-digit', month: '2-digit', timeZone: 'UTC' })
}

export const formatPokeDollars = (amount: number) => `₽ ${formatNumber(amount)}`
