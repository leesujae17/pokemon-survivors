import type { AbilityId, HitKind } from './data/abilities'
import type { BranchId } from './data/branches'
import type { EnemyId } from './data/enemies'
import type { PlayableId } from './data/hatchlings'
import type { MegaId } from './data/megas'
import type { Difficulty } from './game/difficulty'
import type { RunMode } from './game/ranking'
import type { LobbyFocus } from './ui/title'
/** Custom events sent to Umami, with their payloads. Keep this list short: every event counts. */
type AnalyticsEvents = {
  /** `mode`: a regular run or the Legend mode's (a legend played, `runMode`). */
  run_start: { starter: PlayableId; difficulty: Difficulty; mode: RunMode; challenge?: 'official' | 'practice' }
  /** How a run ended, with what it was built from: the build and the cause of a faint are what tuning needs. */
  run_end: {
    starter: PlayableId
    difficulty: Difficulty
    mode: RunMode
    outcome: 'victory' | 'gameover' | 'endless' | 'quit'
    minute: number
    level: number
    kills: number
    stage: number
    branch: BranchId | null
    ability: AbilityId | null
    /** The Mega Stone found, and how many times the run Mega Evolved. */
    mega: MegaId | null
    megas: number
    /** `id:level` of each move and held item at the end. */
    moves: string[]
    items: string[]
    bosses: number
    /** What landed the last hit of a faint: the foe's species (null for a hazard) and the kind of hit. */
    foe: EnemyId | null
    hit: HitKind | null
    challenge?: 'official' | 'practice'
  }
  /** An entry pressed in the lobby: what players open. */
  lobby_press: { entry: LobbyFocus }
  /** A share card left the game (the run's or the Trainer Card), or the invite link, through the share sheet, the clipboard or a download. */
  share: { kind: 'run' | 'trainer' | 'invite'; method: 'share' | 'copy' | 'download' }
  /** The game opened from a link carrying a handle this device didn't hold (`?ref=` or a profile's `?u=`); `first`: the device had no inviter yet. */
  ref_land: { ref: string; via: 'ref' | 'profile'; first: 0 | 1 }
  /** A new account signed up with an invite and the API counted it (`POST /referral`). */
  ref_signup: { ref: string }
  /**
   * Installing the app (`ui/install.ts`): Chromium's prompt shown from Settings (`prompt`) and the
   * answer (`accepted`, `dismissed`), the iOS how-to opened (`ios`), and any install at all,
   * from our button or the browser's menu (`installed`).
   */
  install: { step: 'prompt' | 'accepted' | 'dismissed' | 'ios' | 'installed' }
}

declare global {
  interface Window {
    /** Umami's tracker, set by the script in the page head. Missing in dev, offline or behind an ad blocker. */
    umami?: { track: (event: string, data?: Record<string, string | number>) => void }
  }
}

/** Sends a custom event to Umami. Silently does nothing when the tracker isn't loaded. */
export const track = <E extends keyof AnalyticsEvents>(event: E, data: AnalyticsEvents[E]) => window.umami?.track(event, Object.fromEntries(Object.entries(data).map(([key, value]) => [key, Array.isArray(value) ? value.join(',') : typeof value === 'boolean' ? Number(value) : value ?? ''])))
