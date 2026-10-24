import fs from 'node:fs'
import path from 'node:path'
import assert from 'node:assert/strict'
import { pathToFileURL } from 'node:url'

// Run against a local dev server with an explicitly supplied Playwright module.
const { chromium } = await import(pathToFileURL(process.env.PLAYWRIGHT_MODULE).href)
const origin = process.env.LEGEND_QA_URL ?? 'http://127.0.0.1:5178'
if (!/^http:\/\/(127\.0\.0\.1|localhost):\d+$/.test(origin)) throw new Error('Local test server required')
const out = path.resolve('docs/qa/legend-audit-2026-10-23')
fs.mkdirSync(out, { recursive: true })
const browser = await chromium.launch({ headless: true })
const results = []
const errors = []
const missingAssets = []
const contexts = []
const navigations = []
const desktop = { width: 1280, height: 800 }
const mobile = { width: 390, height: 844 }
const startContext = async (name, seed, viewport = desktop) => {
  const context = await browser.newContext({ viewport, locale: 'ko-KR', isMobile: viewport === mobile, hasTouch: viewport === mobile })
  contexts.push(context)
  const page = await context.newPage()
  page.on('framenavigated', frame => { if (frame === page.mainFrame()) navigations.push({ name, url: frame.url() }) })
  page.on('pageerror', error => errors.push({ name, message: error.message }))
  page.on('response', response => {
    if (response.status() >= 400 && response.url().includes('/assets/')) missingAssets.push({ name, status: response.status(), url: response.url() })
  })
  await context.route('**/*', route => {
    const url = new URL(route.request().url())
    return url.origin === origin || ['data:', 'blob:'].includes(url.protocol) ? route.continue() : route.abort()
  })
  await page.addInitScript(seed => {
    if (seed && localStorage.getItem('ps:save') === null) localStorage.setItem('ps:save', JSON.stringify(seed))
    localStorage.setItem('ps:lang', 'ko')
  }, seed)
  await page.goto(`${origin}/ko/`)
  await page.waitForFunction(() => window.ps)
  await page.evaluate(() => window.advanceTime(0))
  return page
}
const advance = (page, ms) => page.evaluate(ms => window.advanceTime(ms), ms)
const state = page => page.evaluate(() => JSON.parse(window.render_game_to_text()))
const saved = page => page.evaluate(async () => (await import('/src/ui/save.ts')).loadSave())
const menu = async (page, id) => {
  await page.evaluate(id => window.ps.showMenu(id), id)
  await page.locator('.partner-go').waitFor()
  await advance(page, 17)
}
const shot = async (page, name) => {
  await page.waitForTimeout(1000)
  await advance(page, 17)
  await page.screenshot({ path: path.join(out, `${name}.png`), fullPage: true })
  fs.writeFileSync(path.join(out, `${name}.json`), JSON.stringify(await state(page), null, 2))
}
const pick = async (page, selector) => {
  await page.locator(selector).first().waitFor()
  await page.waitForTimeout(800)
  await page.locator(selector).first().click()
  await page.waitForTimeout(450)
  await advance(page, 50)
}
const draft = async page => {
  await advance(page, 50)
  if ((await state(page)).phase === 'levelup') await pick(page, '.offer')
  assert.equal((await state(page)).phase, 'playing')
}
const startSelected = async (page, id) => {
  await page.locator('.partner-go').click()
  await page.waitForFunction(id => window.ps.run()?.game.starter === id, id)
  await draft(page)
}
// Stage the last phase, then use real combat/events/shell persistence. No dev capture shortcut.
const defeat = async (page, id, shiny = false) => {
  await page.evaluate(async ({ id, shiny }) => {
    const { spawnEnemy } = await import('/src/game/enemies.ts')
    const { createFight, phasesOf } = await import('/src/game/bossFight.ts')
    const { bumpDamage } = await import('/src/game/combat.ts')
    const game = window.ps.run().game
    const boss = spawnEnemy(game, id, game.player.x + 100, game.player.y)
    boss.shiny = shiny
    boss.fight = createFight(game.rng, game.difficulty)
    boss.fight.phase = (phasesOf(id)?.length ?? 1) - 1
    boss.fight.ultDone = true
    bumpDamage(game, boss, boss.hp + 1, 'special')
  }, { id, shiny })
  await advance(page, 17)
}
const passed = (name, details) => {
  results.push({ name, status: 'passed', details })
  console.log(`PASS ${name}`)
}
try {
  const legacy = await startContext('legacy-lock', { version: 1, wallet: 12345, partner: 'kyogre', shinyStarters: { kyogre: true } })
  await menu(legacy)
  assert.equal(await legacy.locator('.partner-legend-grid .locked').count(), 23)
  assert.equal(await legacy.locator('.partner-go').isDisabled(), true)
  await legacy.keyboard.press('z')
  await legacy.keyboard.press('Enter')
  await legacy.locator('.partner-legend-grid .selected').dblclick()
  assert.equal((await state(legacy)).phase, 'menu')
  assert.equal((await saved(legacy)).shinyStarters.kyogre, true)
  assert.equal((await saved(legacy)).wallet, 12345)
  await shot(legacy, 'locked-save-boundary')
  await legacy.getByRole('tab').nth(0).click()
  await legacy.getByRole('tab').nth(2).click()
  assert.match(await legacy.locator('.partner-legend-grid .selected').getAttribute('title'), /가이오가/)
  await legacy.reload()
  await legacy.waitForFunction(() => window.ps)
  assert.equal((await state(legacy)).phase, 'menu')
  passed('legacy save, remembered locked partner, Z/Enter/double-click blocked, tab cursor remembered')

  const page = await startContext('capture-play', { version: 1, wallet: 12345, ranks: { protein: 2 }, partner: 'charmander' }, mobile)
  await menu(page, 'charmander')
  await startSelected(page, 'charmander')
  await page.evaluate(() => { window.ps.run().game.player.iframes = 9999 })
  for (let n = 1; n <= 3; n++) {
    await defeat(page, 'articuno', n === 3)
    const save = await saved(page)
    assert.equal(save.legends.articuno, n)
    assert.equal(save.shinyStarters.articuno === true, n === 3)
    if (n < 3) await advance(page, 3100)
  }
  await shot(page, 'capture-immediate')
  // Reload before the final capture animation has settled.
  await page.reload()
  await page.waitForFunction(() => window.ps)
  await page.evaluate(() => window.advanceTime(0))
  await menu(page, 'articuno')
  assert.equal(await page.locator('.partner-legend-grid .locked').count(), 22)
  assert.equal(await page.locator('.partner-go').isDisabled(), false)
  assert.equal((await saved(page)).legends.articuno, 3)
  assert.equal((await saved(page)).ranks.protein, 2)
  await shot(page, 'mobile-unlocked')
  await page.locator('.shiny-option').first().click()
  assert.equal((await saved(page)).shinyStarters.articuno, false)
  await page.reload()
  await page.waitForFunction(() => window.ps)
  await page.evaluate(() => window.advanceTime(0))
  await menu(page, 'articuno')
  assert.equal((await saved(page)).shinyStarters.articuno, false)
  assert.equal(await page.locator('.shiny-option').first().getAttribute('aria-checked'), 'true')
  passed('real boss defeat event banks 1/3, 2/3, capture+shiny; immediate reload and normal-form choice persist')
  await page.locator('.partner-more').first().click()
  await shot(page, 'mobile-details')
  await page.keyboard.press('Escape')
  await startSelected(page, 'articuno')
  assert.equal((await state(page)).mode, 'legend')
  assert.equal((await state(page)).starter, 'articuno')
  const before = (await state(page)).player.x
  await page.keyboard.down('ArrowRight')
  await advance(page, 500)
  await page.keyboard.up('ArrowRight')
  assert.ok((await state(page)).player.x > before)
  await shot(page, 'mobile-gameplay')
  await page.evaluate(() => window.ps.awaken())
  await advance(page, 5000)
  assert.equal((await state(page)).awakening, 1)
  assert.equal((await state(page)).phase, 'ability')
  await shot(page, 'mobile-awakening-ability')
  await pick(page, '.ability-card')
  const secondAwakening = await page.evaluate(() => window.ps.awaken())
  await advance(page, 5000)
  assert.equal((await state(page)).awakening, 2, JSON.stringify({ secondAwakening, state: await state(page) }))
  await shot(page, 'mobile-awakened')
  passed('captured legend starts from real UI, moves/attacks, Lv12 ability pick and Lv28 awakening work')

  await page.keyboard.press('Escape')
  await advance(page, 50)
  assert.equal((await state(page)).phase, 'paused')
  await pick(page, '.pause .buttons button:last-child')
  await page.locator('.partner-go').waitFor()
  assert.equal((await state(page)).phase, 'menu')
  await startSelected(page, 'articuno')
  assert.equal((await state(page)).awakening, 0)
  await page.evaluate(async () => {
    const { hurtPlayer } = await import('/src/game/combat.ts')
    const game = window.ps.run().game
    game.player.iframes = 0
    hurtPlayer(game, 99999)
  })
  await advance(page, 50)
  assert.equal((await state(page)).phase, 'gameover')
  await shot(page, 'mobile-failure')
  await page.waitForTimeout(1000)
  await page.locator('.result-buttons button').first().click()
  await page.waitForFunction(() => window.ps.run()?.game.phase === 'levelup')
  await draft(page)
  assert.equal((await state(page)).starter, 'articuno')
  passed('pause quit, re-entry resets awakening, damage failure and Retry all preserve capture')

  await defeat(page, 'mewtwo')
  await advance(page, 3100)
  assert.equal((await state(page)).phase, 'victory')
  await shot(page, 'mobile-victory')
  await page.waitForTimeout(1000)
  await page.getByRole('button', { name: /무한 모드/ }).click()
  await advance(page, 50)
  assert.equal(await page.evaluate(() => window.ps.run().game.endless !== null), true)
  assert.equal((await state(page)).mode, 'legend')
  await shot(page, 'mobile-endless')
  passed('actual Mewtwo final defeat reaches victory and the UI continues in Legend endless mode')

  const fresh = await startContext('fresh-save', null)
  await menu(fresh, 'articuno')
  assert.deepEqual((await saved(fresh)).legends, {})
  assert.equal(await fresh.locator('.partner-go').isDisabled(), true)
  await shot(fresh, 'desktop-fresh-locked')
  passed('brand-new save keeps all 23 legends locked')

  const ids = ['articuno', 'zapdos', 'moltres', 'raikou', 'entei', 'suicune', 'regirock', 'regice', 'registeel', 'mew', 'celebi', 'jirachi', 'mewtwo', 'lugia', 'hoOh', 'kyogre', 'groudon', 'rayquaza', 'dialga', 'latias', 'latios', 'deoxys', 'arceus']
  const roster = await startContext('roster-and-forms', { version: 1, legends: Object.fromEntries(ids.map(id => [id, 5])) })
  for (const id of ids) {
    await menu(roster, id)
    await startSelected(roster, id)
    assert.equal((await state(roster)).mode, 'legend')
    await roster.evaluate(() => { window.ps.run().game.player.iframes = 9999 })
    await advance(roster, 800)
    if (['kyogre', 'groudon', 'rayquaza'].includes(id)) {
      await roster.evaluate(() => window.ps.awaken())
      await advance(roster, 5000)
      await pick(roster, '.ability-card')
      await roster.evaluate(() => window.ps.awaken())
      await advance(roster, 5000)
      const form = await roster.evaluate(async () => (await import('/src/game/legend.ts')).legendLook(window.ps.run().game))
      assert.equal(form, id === 'rayquaza' ? 'mega' : 'primal')
      await shot(roster, `desktop-${id}-permanent-form`)
    }
    if (id === 'deoxys') {
      const stances = []
      for (let n = 0; n < 4; n++) {
        await roster.evaluate(() => { window.ps.run().game.special.cooldown = 0 })
        await roster.keyboard.press('Space')
        await advance(roster, 100)
        stances.push((await state(roster)).stance)
      }
      assert.deepEqual(stances, ['attack', 'defense', 'speed', 'normal'])
      await shot(roster, 'desktop-deoxys')
    }
    if (id === 'arceus') {
      const types = await roster.evaluate(async () => {
        window.ps.biome('cave')
        window.advanceTime(100)
        const game = window.ps.run().game
        const { legendStage } = await import('/src/game/legend.ts')
        return legendStage(game, game.legend).types
      })
      assert.deepEqual(types, ['rock'])
      await shot(roster, 'desktop-arceus-multitype')
    }
  }
  passed('all 23 legends start from the UI; permanent Primal/Mega forms, Deoxys stances and Arceus Multitype')

  assert.deepEqual(errors, [])
  assert.deepEqual(missingAssets, [])
  fs.writeFileSync(path.join(out, 'results.json'), JSON.stringify({ origin, isolatedStorage: true, stagedFinalBossPhases: true, results, errors, missingAssets, navigations }, null, 2))
  console.log(JSON.stringify({ scenarios: results.length, errors, missingAssets }))
} catch (error) {
  for (let i = 0; i < contexts.length; i++) {
    const page = contexts[i].pages()[0]
    if (page) await shot(page, `failure-context-${i}`).catch(() => {})
  }
  fs.writeFileSync(path.join(out, 'results.json'), JSON.stringify({ results, errors, missingAssets, navigations, failure: error.stack }, null, 2))
  throw error
} finally {
  await Promise.all(contexts.map(context => context.close()))
  await browser.close()
}
