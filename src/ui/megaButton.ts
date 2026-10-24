import { PLAYABLE } from '../data/hatchlings'
import { MEGA } from '../data/megas'
import { heldMega, isFinalStage, megaBaseName, megaPhase } from '../game/mega'
import type { Game } from '../game/types'
import { t } from '../i18n'
import { localName } from '../i18n/names'
import { megaIcon } from '../render/megaFx'
import { boundLabel, setGlyphText } from './inputLabels'
import { h, setStyle, setText } from './dom'

/**
 * Mega Evolution controls, shown once the run holds its Mega Stone: a HUD badge
 * next to the special's (desktop, key E) and a round touch button above the
 * special button (coarse pointers). Locked (greyed, with the level the final
 * stage comes at) until the final stage, a recharge fill, a rainbow pulse when
 * ready and the form's time draining while it lasts.
 */
export const createMegaControls = (onPress: () => void) => {
  const badgeTag = h('span', { class: 'special-tag mega-tag hidden' })
  const keyLabel = h('span', { class: 'special-key' })
  const buttonTag = h('span', { class: 'special-tag mega-tag hidden' })
  const badge = h('button', { class: 'special mega special-badge hidden', type: 'button', 'aria-label': t().controls.actions.mega }, h('img', { src: megaIcon(), alt: '' }), keyLabel, badgeTag)
  const button = h(
    'button',
    { class: 'special mega mega-button hidden', type: 'button', 'aria-label': t().mega.section },
    h('img', { src: megaIcon(), alt: '' }),
    buttonTag,
    h('span', { class: 'touch-action-label', 'aria-hidden': 'true' }, t().controls.actions.mega),
  )
  // Claim the touch so the floating joystick (pointerdown anywhere) never sees it.
  for (const el of [badge, button]) el.addEventListener('pointerdown', (e) => {
    e.preventDefault()
    e.stopPropagation()
    onPress()
  })
  for (const el of [badge, button]) el.addEventListener('contextmenu', (e) => e.preventDefault())

  const update = (g: Game) => {
    // A stone of the branch the run didn't take (Glalitite on a Froslass) leaves the button off.
    const phase = heldMega(g) ? megaPhase(g.mega, isFinalStage(g.starter, g.player.stage)) : 'none'
    const line = PLAYABLE[g.starter].line
    const before = line[line.length - 2]
    const tag = phase === 'locked' && before && 'evolveAt' in before ? t().levelShort(before.evolveAt) : phase === 'ready' ? t().mega.button : ''
    const fill = phase === 'active' ? g.mega.active / MEGA.duration : phase === 'charging' ? 1 - g.mega.charge / MEGA.recharge : 1
    for (const el of [badge, button]) {
      el.classList.toggle('hidden', phase === 'none')
      el.classList.toggle('ready', phase === 'ready')
      el.classList.toggle('locked', phase === 'locked')
      el.classList.toggle('active', phase === 'active')
      setStyle(el, '--fill', fill.toFixed(3))
    }
    setGlyphText(keyLabel, boundLabel('mega'))
    for (const el of [badgeTag, buttonTag]) {
      setText(el, tag)
      el.classList.toggle('hidden', tag === '')
    }
    badge.title = phase === 'locked' ? t().mega.locked(localName(megaBaseName(g))) : t().mega.title
  }

  return { badge, button, update }
}
