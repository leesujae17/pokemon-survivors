# LEGENDARIES 통합 검토·회귀 검증

대상은 `D:/Dev_Project/pokesurvivor-2`, 로컬 기준 커밋은 `553f5fb4`입니다. 기존 변경을 되돌리거나 다른 프로젝트·사용자 브라우저 저장을 수정하지 않았습니다. `CLAUDE.md`와 `progress.md`, 진행 중인 작업 기록을 먼저 확인했습니다. 이 체크아웃과 상위 경로에 AGENTS.md·.agents/skills가 없고 Codex memories 폴더는 비어 있었습니다.

## 원본과 적용 범위

[원본 사이트](https://www.pokemonsurvivors.com/en/)의 실제 HTML과 [공개 저장소](https://github.com/pedrobarretto/pokemon-survivors)를 확인했습니다. `agent-reach`의 GitHub CLI 경로로 직접 읽은 최신 비교 커밋은 **77a380c4e6208020739c70dd65303eeaedfff077**입니다. 사이트의 배포 SHA와 이 커밋의 일치는 확인하지 않았습니다.

진행 중인 로컬 구현은 [cd60b78dcfc2a93553154ba5b2f5bd7cd378492a](https://github.com/pedrobarretto/pokemon-survivors/commit/cd60b78dcfc2a93553154ba5b2f5bd7cd378492a)와 후속 난이도 조정 [95e22e7ce0745397ef68381a06f80c3661bf6f5f](https://github.com/pedrobarretto/pokemon-survivors/commit/95e22e7ce0745397ef68381a06f80c3661bf6f5f)을 포함합니다. 최신 원본의 협동·계절 이벤트·추가 상점 시스템 전체는 이번 요구에 포함하지 않았습니다. 로컬의 `Game.legend`와 최신 협동 구조의 `Player.legend` 차이는 의도적인 구조 차이입니다.

| 기능 | 확인 결과 |
| --- | --- |
| 23종 데이터 | canonical ID·포획 횟수·전용 기술·learnset·고유 특성·각성 데이터 확인. `hoOh` ID 유지. 23종 모두 실제 선택 화면에서 시작 성공 |
| 해금 | 트리오·균열 3회, 뮤츠 5회, 뮤·세레비·지라치 1회. 아르세우스는 다른 22종 포획 후 무한 모드에서 1회. 23종 각각의 직전/충족 경계 회귀 테스트 통과 |
| 포획과 저장 | 보스 최종 단계 처치 이벤트를 즉시 저장. 연출 도중 재로드해도 유지. 런 정산에서 중복 가산 없음. 이후 처치도 수치는 증가하고 UI만 목표 횟수에서 제한 |
| 저장 호환 | `ps:save`, version 1을 유지한 additive schema. 기존 지갑·업그레이드 유지. 필드 누락·비정상 값 정규화, ID별 max 병합·재병합 멱등성 확인 |
| 이로치 | 포획 완료/이후 이로치 보스 처치로 해금. 값 false는 이로치 소유+일반 모습 선택으로 유지. 기존 런 시작의 1/64 lucky-shiny 동작도 보존 |
| 선택 화면 | 실루엣·진행도·포획 수·위치 힌트·탭별 커서·상세·일반/이로치 선택 확인. 잠긴 마지막 선택값·Enter·더블클릭·Z로 잠금 우회 불가 |
| Legend 모드 | 고유 기술·고유 특성, Lv12 특성 선택·Lv28 각성, 강화된 horde와 Pressure, 일반 모드와 리플레이 분리 확인. replay rules 26의 결정성 테스트 통과 |
| 변신 | 가이오가·그란돈 원시회귀, 레쿠쟈 영구 메가폼, 테오키스 4폼 순환, 아르세우스 지역 타입 변경을 브라우저에서 확인 |
| 종료·재진입 | 일시정지→나가기→재진입, 피해로 실패→재시도, 뮤츠 최종 처치→승리→무한 모드 통과. 새 런에서 각성은 초기화되고 포획은 유지 |
| 제한·랭킹 | Daily Challenge 명단 전설 제외, 자신과 같은 종의 보스 조우 교체·Clone 처리, signature의 duo 보호 확인. 서버는 starter에서 ranking mode를 유도하고 모드 변경 시 부적합 UI 필터 해제 |
| 자산·한국어 | 일반·이로치·변신 64 variants의 284파일 및 종별 크레딧 누락 없음. 한국어 이름·설명·각성·선택 화면 스크린샷 검토 |

## 이 검토에서 보완한 부분

- `src/ui/starterSelect.ts`: 포획 기록 없이 이로치 소유만 있는 저장에서 Z 입력 시 `Cannot set properties of null (setting 'src')`가 발생함을 재현했습니다. 잠긴 종의 모습 변경을 막고 시작 버튼에 native disabled를 적용했습니다.
- `src/ui/abilityPick.ts`: 각성 후 특성 선택 제목의 포켓몬 이름을 한국어로 표시합니다.
- `src/i18n/ko.ts`: 실제 프로덕션 일시정지 이미지에서 발견한 능력치 표·강화 카드·도구·조작 안내의 영어 fallback을 한국어로 보완했습니다.
- `src/site/changelog.ts`: 전설 포획 조건·선택·각성·즉시 저장을 설명하는 2026-10-23 한국어 안내와 4개 언어 항목을 추가했습니다.
- `src/game/legendPersistence.test.ts`: 기존 저장, 23종 경계, 보스 최종 처치→저장→재로드→런 정산, 아르세우스 마지막 조건, 오래된 기기 push에 대한 27개 회귀 테스트를 추가했습니다.
- `scripts/qa-legends.mjs`, `scripts/qa-legend-production.mjs`: 개인 저장과 분리된 로컬 Chromium 통합 검증을 재현할 수 있습니다.

진행 중인 전체 통합 변경 목록과 23종 표는 [../../legendaries.md](../../legendaries.md)에 있습니다. 기존 전설 데이터·시뮬레이션·한국어·배포 설정은 소유 작업을 보존하며 검토했습니다.

## 테스트와 근거

| 검증 | 결과 |
| --- | --- |
| `npm run typecheck` | 통과 |
| `npm run typecheck --prefix server` | 통과 |
| `npm test -- --reporter=dot` | 114파일, 908개 통과 |
| 신규 저장 회귀 파일 | 27개 통과, 전체 908개에 포함 |
| `npm run build` | 최종 한국어 안내까지 포함해 통과. 기존 대형 chunk 안내만 남음 |
| 개발 브라우저 | [results.json](results.json): 7개 통합 시나리오 통과, page exception 0, asset 404 0 |
| 프로덕션 브라우저 | [production-results.json](production-results.json): 390×844에서 실제 시작·터치 카드 선택·이동/필살기 입력·일시정지/재개 통과. dev hooks 없음, 예외·자산 404 없음 |
| 최종 정적 페이지·번역 회귀 | [site-check.log](site-check.log): 4파일, 18개 통과 |
| 마지막 한국어 수정 후 전체 재실행 | [final-full-tests.log](final-full-tests.log): 클라이언트·서버 타입 검사 및 114파일/908개 재통과. 신규 27개는 908개에 포함 |
| 브라우저 엔진 간 결정성 | [cross-engine-results.json](cross-engine-results.json): Node 24.14.1/V8, Chromium 156.0.8078.4, Firefox 150.0.2, WebKit 27.2에서 8개 시나리오의 float64 상태 해시 및 리플레이 종료 상태가 모두 일치 |
| 동등한 전체 런 | [full-run-results.json](full-run-results.json): 가이오가/노말/seed11이 917.33초에 뮤츠 처치·승리. Lv63·각성2·6,707처치. 시작 후 체력·시간·레벨·적 조작 없이 60Hz 정상 입력 봇으로 진행. 리플레이 재계산도 일치 |
| 자산 검사 | [assets.json](assets.json): 23종, 64 variants, 284파일 누락 0 |
| 개발 스킬 기본 루프 | [client-loop](client-loop): 제공된 Playwright 클라이언트 실행, 텍스트 상태·스크린샷 검토 |
| 린트 | 전용 lint 스크립트가 없어 미실행 |
| 운영 계정·DB·랭킹 | 미실행. migration 016은 검토만 했으며 실행하지 않음 |

스크린샷은 사용자 PC의 로컬 Chromium에서 새 익명 컨텍스트로 생성했습니다. 개발 서버는 `127.0.0.1:5179`에서 HMR을 꺼서 병행 작업의 자동 새로고침 간섭을 차단했습니다. 모든 외부 HTTP 요청은 브라우저 테스트에서 차단했습니다. 개발 테스트는 마지막 보스 단계·레벨·치명 피해를 격리된 상태에 준비한 뒤 실제 combat/event/save와 UI를 통과시킵니다. 각 시나리오가 15분 전체 런을 자연 플레이한 것은 아닙니다.

스크린샷 예: [모바일 해금](mobile-unlocked.png), [Lv12 특성 선택](mobile-awakening-ability.png), [게임 플레이](mobile-gameplay.png), [승리](mobile-victory.png), [무한 모드](mobile-endless.png), [원시가이오가](desktop-kyogre-permanent-form.png), [아르세우스 타입](desktop-arceus-multitype.png). 각 PNG 옆의 JSON에는 같은 시점의 런 상태가 있습니다. 실제 이미지를 열어 한글·스프라이트·UI 배치를 검토했습니다.

초기 일반 샌드박스에서는 Vitest 하위 프로세스가 `spawn EPERM`, GitHub CLI가 차단된 프록시로 실패했습니다. 승인된 `require_escalated` 실행으로 정상 수행했으며 권한 거절은 없었습니다. QA 개발 중 카드 선택 후 애니메이션 대기, 버튼 접근성 이름, 동시 작업 HMR 간섭 때문에 발생했던 테스트 제어 오류는 수정하고 성공 결과로 재검증했습니다. 남은 실행 차단은 없습니다.

## 재현

```powershell
npm run dev -- --host 127.0.0.1 --port 5178 --strictPort
```

별도 PowerShell에서 설치된 Playwright 모듈의 절대 경로를 지정합니다. 프로젝트에 Playwright를 추가하거나 lockfile을 바꿀 필요는 없습니다.

```powershell
$env:PLAYWRIGHT_MODULE = 'C:\path\to\node_modules\playwright\index.mjs'
$env:LEGEND_QA_URL = 'http://127.0.0.1:5178'
node scripts/qa-legends.mjs
```

동시 파일 수정이 있다면 HMR을 끈 QA 서버를 사용합니다. 프로덕션 검증은 `npm run build` 후 `npm run preview -- --host 127.0.0.1 --port 4180 --strictPort`, 별도 창에서 같은 Playwright 경로를 지정하고 `node scripts/qa-legend-production.mjs`로 실행합니다. 검증 서버는 모두 loopback 전용입니다.

## 라이선스와 남은 범위

MIT는 원본 소스 코드에 적용됩니다. `public/assets`와 Pokémon IP는 MIT 범위에서 제외되며 SpriteCollab CC BY-NC 4.0·개별 크레딧·CHUNSOFT 유래 표시는 그대로 유지했습니다. [LICENSE](../../../LICENSE), [CREDITS.md](../../../CREDITS.md)에서 구분합니다.

Git push/merge/배포, 운영 데이터·DB 마이그레이션·인증·보안 설정 변경은 실행하지 않았습니다. 계정 서버와 실DB를 사용하는 온라인 랭킹 E2E 및 사람이 직접 조작하는 15분 실시간 플레이는 미실행입니다. 브라우저 엔진 간 결정성과 동등한 전체 런은 아래 후속 검증에서 확인했습니다. 한국어의 과거 upstream 변경 기록 일부는 기존 영어 fallback을 유지하지만, 이번 업데이트의 최신 안내와 전설 게임 UI는 한국어로 제공합니다.

## 후속 검증 (완료 보고 보완)

위 제한 가운데 엔진 간 결정성과 전체 런의 동등 검증은 후속 실행으로 확인했습니다. 기존 저장소에는 별도 `npm run determinism` 명령이 없어 `rulesGuard.test.ts`를 확인하고, `scripts/qa-simulation-core.ts`와 `scripts/qa-simulation.mjs`로 비교 도구를 추가했습니다. 이 도구 자체도 프로젝트의 strict TypeScript 설정으로 별도 검사해 통과했습니다. 전설 3종의 두 각성·영구 폼, 강화 horde/Pressure, 테오키스 폼, 아르세우스 지역 타입, 일반 레벨업·메가를 포함한 8개 시나리오를 비교했습니다. 초기 드라이버 버전 불일치는 기존에 설치된 호환 Firefox 드라이버와 WebKit 실행 파일을 사용해 해결했으며 새 브라우저 설치나 인증 변경은 하지 않았습니다.

전체 런은 사람이 실제 시간으로 15분 조작한 플레이가 아니라 **정상 시뮬레이션을 60Hz로 가속 실행한 입력 봇**입니다. 영구 업그레이드를 합법적인 최대 랭크로 설정한 테스트 시작 옵션을 사용했고, 이후에는 이동·기술 선택·필살기/메가 입력만 기록했습니다. 보스는 예정된 시각에 등장했고, 레지락·레지아이스·레지스틸·뮤츠의 실제 최종 처치와 Lv12/28 각성이 기록되었습니다. 선택적 균열은 이 경로에서 진입하지 않았으므로 균열 전체 공략의 자연 플레이 검증으로 해석하면 안 됩니다. 균열은 기존 영역/phase 규칙 테스트와 격리된 브라우저 시나리오의 검증 범위입니다.

일반 모드 대조 런도 실행했습니다. 파이리 seed41이 약 935.0초에 승리했고 Lv57·4,258처치였습니다. 같은 봇의 seed11과 seed23은 433.18초와 367.25초에 정상 게임오버로 끝났습니다. 이는 전투 결과이며 프로그램 예외나 리플레이 검증 실패가 아닙니다. 네 시도 모두 저장한 전체 리플레이의 종료 상태가 일치했고, 각 입력 기록은 `full-run-*-replay.json`에 보존했습니다.

후속 전체 런 명령은 `node scripts/qa-simulation.mjs --full-only`, 엔진 비교는 `node scripts/qa-simulation.mjs --cross-only`입니다. 앞의 `PLAYWRIGHT_MODULE` 설정과 함께 Firefox 1.60 드라이버에는 `PLAYWRIGHT_FIREFOX_MODULE`, 설치된 WebKit 실행 파일에는 `PLAYWRIGHT_WEBKIT_EXECUTABLE`을 지정했습니다. 실제 버전·각 시나리오 digest·종료 상태는 결과 JSON에 보존되어 있습니다. 사람의 15분 실시간 플레이와 운영 DB·온라인 랭킹 검증은 여전히 미실행입니다.

“프로덕션 모바일”은 **로컬 `npm run build` 결과를 `vite preview`로 제공한 390×844 viewport/touch 검증**이며 배포 사이트 테스트가 아닙니다. 마지막 `src/i18n/ko.ts` 수정 이후 클라이언트·서버 타입 검사, 전체 908개, 정적/번역 18개, 프로덕션 빌드를 재실행했습니다. 최신 빌드의 모바일 시작·카드 선택·터치 이동/필살기·일시정지/재개도 재통과했습니다.

핵심 선택 화면은 Library에 저장했습니다: `libfile_061a158411a48191bc409780e41b3226`, 파일 `production-mobile-select.png` (`file_00000000340c81f8b95d7a2f7318a8cc`). 저장 작업은 성공했고, 정확한 결과는 [library-delivery.json](library-delivery.json)에 있습니다. 제공된 로컬 메타데이터 도구가 사용하는 확장 속성을 이 Windows Python이 지원하지 않아 로컬 파일 연결 메타데이터 기록만 실패했습니다. Library 업로드 실패나 불확실한 저장 상태는 아닙니다.
