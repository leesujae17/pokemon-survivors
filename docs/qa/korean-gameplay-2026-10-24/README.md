# Korean gameplay verification

- TypeScript check and full Vitest suite: 917 tests / 117 files passed.
- Growth rendering: 2,189 cards/details at each of 390x844 touch, 844x390 touch and 1280x900 desktop. Tests use the actual offerTile/moveCard renderers for every move, level and fork; only keyboard/units and the official DD래리어트 name are exempted.
- Interactive flow: start a run, select the opening move, select a level-4 fork, learn a TM and inspect its Korean notification. No page exceptions.
- Separate real Settings interaction: pause, open settings, switch KO -> EN -> KO, resume, open a fork. Both HUD Pokémon name and fork text are Korean; screenshot attached. The bulk renderer audit directly changes the locale, so its intermediate cached HUD text is not used as evidence for Settings behavior.
- Numeric comparison: 1,938 move text literals compared to the previous source; all numerical values preserved, with "twice" rendered as "2배". Echo damage remains 50%, not a 50% proc chance.
- Regression scripts require Playwright and the development server on 127.0.0.1:4183. They use an isolated browser profile and dev-only game staging helpers, and do not touch the user's save. Adjust their output directory when running from another location.
- Built-in suite: `npm test`. Focused coverage: `npx vitest run src/i18n/coverage.ko.test.ts`.
- Production verification passed on both my-pokemon-world.netlify.app and pokemon-survivors-mobile-gpt.leesujae.chatgpt.site: mobile touch start, Korean opening choices and pause details, special action, pause/resume, updated Korean changelog, correct canonical URL, no development hooks or page errors. Live screenshots visually inspected; live-*.json and live-*.png are attached. Run production-regression.mjs with the site origin as its first argument.
