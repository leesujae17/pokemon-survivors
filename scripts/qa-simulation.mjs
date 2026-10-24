import fs from 'node:fs'
import path from 'node:path'
import vm from 'node:vm'
import assert from 'node:assert/strict'
import { createRequire } from 'node:module'
import { pathToFileURL } from 'node:url'

const require = createRequire(new URL('../server/package.json', import.meta.url))
const esbuild = await import(pathToFileURL(require.resolve('esbuild')).href)
const { chromium, firefox, webkit } = await import(pathToFileURL(process.env.PLAYWRIGHT_MODULE).href)
const out = path.resolve('docs/qa/legend-audit-2026-10-23')
const build = await esbuild.build({ entryPoints: ['scripts/qa-simulation-core.ts'], bundle: true, write: false, format: 'iife', globalName: 'LegendQa', platform: 'browser', target: 'es2022' })
const code = build.outputFiles[0].text
const sandbox = vm.createContext({ console })
vm.runInContext(code, sandbox)
const runCross = !process.argv.includes('--full-only')
const runFull = !process.argv.includes('--cross-only')
if (runCross) {
  const reference = JSON.parse(JSON.stringify(sandbox.LegendQa.crossEngineScenarios()))
  const engines = [{ name: `Node ${process.version} / V8 ${process.versions.v8}`, status: 'passed', scenarios: reference }]
  assert.ok(reference.every(scenario => scenario.sameReplayEnd))
  for (const [name, defaultType] of Object.entries({ chromium, firefox, webkit })) {
    let browser
    try {
      const executablePath = process.env[`PLAYWRIGHT_${name.toUpperCase()}_EXECUTABLE`]
      const alternateModule = process.env[`PLAYWRIGHT_${name.toUpperCase()}_MODULE`]
      const type = alternateModule ? (await import(pathToFileURL(alternateModule).href))[name] : defaultType
      browser = await type.launch({ headless: true, ...(executablePath ? { executablePath } : {}) })
      const page = await browser.newPage()
      await page.addScriptTag({ content: code })
      const scenarios = await page.evaluate(() => window.LegendQa.crossEngineScenarios())
      const same = JSON.stringify(scenarios) === JSON.stringify(reference)
      engines.push({ name, version: browser.version(), alternateInstalledDriver: Boolean(alternateModule), status: same ? 'passed' : 'failed', scenarios })
      console.log(`${same ? 'PASS' : 'FAIL'} cross-engine ${name} ${browser.version()}: ${scenarios.length} scenarios`)
    } catch (error) {
      engines.push({ name, status: 'blocked', reason: error.message })
      console.log(`BLOCKED ${name}: ${error.message.split('\n')[0]}`)
    } finally { await browser?.close() }
  }
  fs.writeFileSync(path.join(out, 'cross-engine-results.json'), JSON.stringify({ existingDeterminismCommand: false, localRulesGuard: 'src/game/rulesGuard.test.ts', method: 'FNV float64 bit digests across snapshots and replay endings', engines }, null, 2))
  if (engines.some(engine => engine.status === 'failed')) process.exitCode = 1
}
if (runFull) {
  const attempts = []
  for (const starter of ['kyogre', 'charmander']) {
    for (const seed of [11, 23, 41]) {
      const result = sandbox.LegendQa.fullRun(starter, seed)
      const replayName = `full-run-${starter}-${seed}-replay.json`
      fs.writeFileSync(path.join(out, replayName), JSON.stringify(result.replay))
      const { replay, ...summary } = result
      attempts.push({ ...summary, replayFile: replayName })
      fs.writeFileSync(path.join(out, 'full-run-results.json'), JSON.stringify({ naturalHumanPlay: false, accelerated60HzBot: true, stateEditsAfterStart: false, attempts }, null, 2))
      console.log(`${result.sameReplayEnd ? 'PASS' : 'FAIL'} full-run ${starter} seed=${seed}: ${result.phase}, ${result.runSeconds.toFixed(1)}s, level ${result.level}, ${result.kills} kills; replay=${result.sameReplayEnd}`)
      if (!result.sameReplayEnd) process.exitCode = 1
      if (result.phase === 'victory') break
    }
  }
}
