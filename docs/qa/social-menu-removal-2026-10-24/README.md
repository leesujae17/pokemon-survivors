# Title social-menu removal — 2026-10-24

Removed Discord, TikTok, YouTube and Instagram title controls and navigation handlers across portrait, landscape and desktop layouts. Empty sidebars collapse. Client typecheck and both host-specific production builds passed.

Production-browser checks cover 520x964, 390x844, 771x964, 844x390 and 1280x900; 12 keyboard moves per viewport; trainer/mission/partner navigation; 23 legend cells; no social controls, popups or page exceptions.

- Netlify: https://my-pokemon-world.netlify.app/ko/ — deploy `6adbf5ff395b2834a5f31c9a`.
- GPT Sites: https://pokemon-survivors-mobile-gpt.leesujae.chatgpt.site/ko/ — version 5, deploy `appgdep_6adbf621a3b08191b3ffa581db7d3658`, source `dee5af73d0d4998a2763946d6043ff486e3b079b`.

The browser script is retained at C:/Users/user/AppData/Local/Temp/pokemon-world-legends-2b7a7bd57f894c44ad16912be31dcb28/tools/social-removal.mjs. JSON evidence is beside this file. No full-suite rerun was needed for this UI-only removal; typechecks, builds and the affected end-to-end flows were checked directly.
