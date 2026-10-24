import type { SiteLocale } from '..'
import { siteEn } from './en'
import { siteEs } from './es'
import { siteKo } from './ko'
import { sitePt, type SiteMessages } from './pt'

export type { SiteMessages }

/** Copy of the static site pages per language. Only `src/site` (build time) reads it; the game never loads it. */
export const SITE_MESSAGES = { pt: sitePt, en: siteEn, es: siteEs, ko: siteKo } as const satisfies Record<SiteLocale, SiteMessages>
