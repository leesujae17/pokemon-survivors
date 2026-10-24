import { TYPE_COLORS } from '../data/types'
import { gameSpecial, specialReady } from '../game/special'
import { STANCES } from '../game/stance'
import type { Game } from '../game/types'
import { t } from '../i18n'
import { localName } from '../i18n/names'
import { specialHudIcon, stanceHudIcon } from '../render/specialFx'
import { boundLabel, setGlyphText } from './inputLabels'
import { h, setStyle, setText } from './dom'

/**
 * Special attack controls: a HUD badge next to the move slots (desktop, its key
 * underneath) and a round touch button in the bottom-right corner, named by a
 * caption above it (any touch screen). Both show the move icon, the cooldown fill
 * and a "ready" pulse, and both fire it on a press: the badge takes a click or a
 * tap too. A chain dash's open window pulses faster and shows the jumps left;
 * Aegislash shows its current forme (icon, color and name) instead of the move.
 */
export const createSpecialControls = (onPress: () => void) => {
  const badgeIcon = h('img', { alt: '' })
  const buttonIcon = h('img', { alt: '' })
  const badgeTag = h('span', { class: 'special-tag hidden' })
  const buttonTag = h('span', { class: 'special-tag hidden' })
  const keyLabel = h('span', { class: 'special-key' })
  const label = t().hud.specialAttack
  const badge = h('button', { class: 'special special-badge special-attack', type: 'button', tabindex: '-1', 'aria-label': label }, badgeIcon, keyLabel, badgeTag)
  const button = h('button', { class: 'special special-button special-attack', type: 'button', 'aria-label': label }, buttonIcon, buttonTag, h('span', { class: 'touch-action-label', 'aria-hidden': 'true' }, label))
  const caption = h('span', { class: 'special-caption', 'aria-hidden': 'true' }, label)

  // Claim the press so the floating joystick (pointerdown anywhere) never sees it, and the badge never takes focus.
  for (const el of [badge, button]) {
    el.addEventListener('pointerdown', (e) => {
      e.preventDefault()
      e.stopPropagation()
      onPress()
    })
    el.addEventListener('contextmenu', (e) => e.preventDefault())
  }

  let key = ''

  const update = (g: Game) => {
    const r = gameSpecial(g)
    const s = g.special
    setGlyphText(keyLabel, boundLabel('special'))
    const look = `${localName(r.tier.name)}|${s.stance}`
    if (key !== look) {
      key = look
      const src = s.stance ? stanceHudIcon(s.stance) : specialHudIcon(r.id)
      badgeIcon.setAttribute('src', src)
      buttonIcon.setAttribute('src', src)
      badge.title = t().hud.specialTitle(localName(r.tier.name))
      const color = s.stance ? STANCES[s.stance].color : TYPE_COLORS[r.def.type]
      for (const el of [badge, button]) setStyle(el, '--type', color)
    }
    const tag = s.stance ? t().hud.stances[s.stance] : s.window > 0 ? t().hud.jumps(s.jumps) : ''
    for (const el of [badgeTag, buttonTag]) {
      setText(el, tag)
      el.classList.toggle('hidden', tag === '')
    }
    const fill = (s.total > 0 ? 1 - s.cooldown / s.total : 1).toFixed(3)
    const ready = specialReady(s)
    for (const el of [badge, button]) {
      setStyle(el, '--fill', fill)
      el.classList.toggle('ready', ready)
      el.classList.toggle('chain', s.window > 0)
    }
  }

  return { badge, button, caption, update }
}
