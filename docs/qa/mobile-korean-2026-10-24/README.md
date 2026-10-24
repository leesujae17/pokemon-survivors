# Mobile controls and Korean pages — 2026-10-24

- Client typecheck and both host-specific production builds passed. Full Vitest suite: 914 tests in 116 files. The 6 focused Korean guide/partner tests passed after the final text adjustments.
- Local development browser matrix: 390×844 touch, 510×964 fine pointer, 688×964 touch, 844×390 touch and 1280×900 desktop. Mobile guide, remap/cancel/reset/Back, removed About menus, Korean news and Pokédex clear labels, larger partner tabs and all 23 legends passed without page errors.
- Staged development run used CDP touch events: simultaneous movement + Special, Mega, manual Lunge after transformation hitstop, Pause/Resume and fixed joystick. These are real DOM/input checks with development-only setup, not a natural full-length game or a physical phone test.
- Production browser matrix passed for all 5 configurations. Korean guide rendered text allows only required controller/key names; every update-history title, highlight and collapsed note is localized. Removed footer link groups are absent.
- Root, Korean, English and Spanish game entries were tested with external scripts/styles held back: the text alternative remained clipped to 1×1 pixels before startup, preventing the reported flash on return from static pages.
- Screenshots were visually inspected. Bundled web-game client also ran and its screenshot/text output was inspected. The full DOM/input QA is in mobile-ko-qa.mjs; run it from a scratch directory with Playwright installed, writing to ../qa.

Publication and live verification identifiers are recorded in progress.md.

Published successfully to both existing public sites and verified the same five-size browser matrix on both. A separate 390×844 production touch flow on both hosts confirmed Start → draft selection → Special → Pause → Resume, no horizontal overflow, correct per-host Korean canonical URL and absent development hooks. Live results/screenshots are included.

- Netlify deploy: 6adbff456935480ee5dc0501
- GPT Sites version 6: appgprj_6ad4aaa563648191bde900a346591d1d~appgver_012ec8e8191081918e8289b1d79e2486
- GPT deployment: appgdep_6adbff9b02988191ae116c118b28af71
- GPT source: f7abd598374aab7593892c9b7d4bde9f097cbae5
