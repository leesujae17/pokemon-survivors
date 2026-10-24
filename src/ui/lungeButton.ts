import { TYPE_COLORS } from '../data/types'
import { isManual, MOVES, moveStats } from '../game/moves'
import type { Game } from '../game/types'
import { t } from '../i18n'
import { localName } from '../i18n/names'
import { moveIcon } from '../render/art'
import { boundLabel, setGlyphText } from './inputLabels'
import { h, setStyle } from './dom'

/**
 * Controls for the manual moves (Quick Attack, Extreme Speed), shown while the
 * player owns one: a HUD badge next to the special's (desktop, key Shift) and
 * a round touch button left of the special button (coarse pointers), with the
 * move icon, its recharge fill and a "ready" pulse.
 */
export const createLungeControls = (onPress: () => void) => {
  const badgeIcon = h('img', { alt: '' })
  const buttonIcon = h('img', { alt: '' })
  const keyLabel = h('span', { class: 'special-key' })
  const badge = h('button', { class: 'special special-badge lunge hidden', type: 'button', 'aria-label': t().hud.lunge }, badgeIcon, keyLabel)
  const button = h('button', { class: 'special lunge lunge-button hidden', type: 'button', 'aria-label': t().hud.lunge }, buttonIcon, h('span', { class: 'touch-action-label', 'aria-hidden': 'true' }, t().hud.lunge))

  // Claim the touch so the floating joystick (pointerdown anywhere) never sees it.
  for (const el of [badge, button]) el.addEventListener('pointerdown', (e) => {
    e.preventDefault()
    e.stopPropagation()
    onPress()
  })
  for (const el of [badge, button]) el.addEventListener('contextmenu', (e) => e.preventDefault())

  let shown = ''

  const update = (g: Game) => {
    const owned = g.player.moves.find((m) => isManual(m.id))
    const id = owned?.id ?? ''
    if (shown !== id) {
      shown = id
      for (const el of [badge, button]) el.classList.toggle('hidden', !owned)
      if (owned) {
        const def = MOVES[owned.id]
        for (const icon of [badgeIcon, buttonIcon]) icon.setAttribute('src', moveIcon(owned.id))
        for (const el of [badge, button]) setStyle(el, '--type', TYPE_COLORS[def.type])
        badge.title = t().hud.lungeTitle(localName(def.name))
      }
    }
    if (!owned) return
    setGlyphText(keyLabel, boundLabel('lunge'))
    const fill = 1 - owned.cooldown / moveStats(owned.id, owned.level, g.player.stats, owned.path).cooldown
    for (const el of [badge, button]) {
      setStyle(el, '--fill', fill.toFixed(3))
      el.classList.toggle('ready', owned.cooldown <= 0)
    }
  }

  return { badge, button, update }
}
