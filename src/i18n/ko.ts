import { moveDescriptionsKo } from './moves.ko'
import { legendKo, legendBossesKo, legendDomainsKo, legendaryMovesKo, abilityKo, abilitiesKo } from './legend.ko'
import { ga, neun, reul, ro, wa } from './josa'
import type { Messages } from './pt'

const BOOST_TYPES: Readonly<Record<string, string>> = { Normal: '노말', Fire: '불꽃', Water: '물', Grass: '풀', Electric: '전기', Ice: '얼음', Fighting: '격투', Poison: '독', Ground: '땅', Flying: '비행', Psychic: '에스퍼', Bug: '벌레', Rock: '바위', Ghost: '고스트', Dragon: '드래곤', Dark: '악', Steel: '강철', Fairy: '페어리' }
const typeBoost = (type: string) => `${BOOST_TYPES[type] ?? type} 타입 기술의 데미지 +10%.`

/** Region names as Korean games call them (the data keeps the English ones). */
const REGION_NAMES: Readonly<Record<string, string>> = {
  Kanto: '관동',
  Johto: '성도',
  Hoenn: '호연',
  Sinnoh: '신오',
  Unova: '하나',
  Kalos: '칼로스',
  Alola: '알로라',
  Galar: '가라르',
  Paldea: '팔데아',
}
export const ko: Messages = {
  loading: '불러오는 중…',
  level: (n) => `Lv ${n}`,
  levelShort: (n) => `Lv${n}`,
  max: "최대",
  new: "신규!",
  language: '언어',
  spaceKey: 'SPACE',
  stats: {
    hp: 'HP',
    attack: '공격',
    damage: '데미지',
    area: '범위',
    cooldown: '쿨타임',
    duration: '지속시간',
    amount: '투사체',
    speed: '속도',
    defense: '방어',
    regen: '재생',
  },
  home: {
    pressKeys: '아무 키나 누르세요',
    pressTouch: '터치해서 시작',
    play: '플레이',
    today: '오늘',
    outbreak: '대량발생',
    challenge: '오늘의 챌린지',
    challengeDone: (time) => `완료: ${time}`,
    challengeOpen: '오늘 아직 도전 안 함',
    missions: '미션',
    missionsLeft: (n) => (n === 1 ? '오늘의 미션 1개 남음' : `오늘의 미션 ${n}개 남음`),
    hall: '명예의 전당',
    hallJoined: (handle, today) => (today ? `@${handle}님, 오늘 입성!` : `@${handle}님, 명예의 전당 입성!`),
    change: '변경',
    stroll: '산책하기',
    strollTouch: '풀숲을 터치해서 산책하기',
    pokedex: '도감',
    eggs: '알',
    eggsReady: (n) => (n === 1 ? '부화 가능한 알 1개' : `부화 가능한 알 ${n}개`),
    mart: '상점',
    ranking: '랭킹',
    ideas: '아이디어',
    support: '프로젝트 후원하기',
  },
  shell: {
    back: '뒤로',
    settings: '설정',
    help: '플레이 방법',
    wallet: (amount: string) => `소지금: ${amount}`,
  },
  trainer: {
    title: '트레이너',
    open: '트레이너 카드',
    guest: '게스트',
    signIn: '로그인',
    stats: {
      runs: '판 수',
      wins: '승리',
      dex: '도감',
      shinies: '이로치',
    },
    noMedals: '메달과 리본이 여기에 표시돼요.',
    sync: {
      synced: '클라우드에 저장됨',
      syncing: '동기화 중…',
      offline: '오프라인: 이 기기에 저장됨',
      guest: '이 기기에만 저장됨',
    },
    syncNow: '동기화',
    editProfile: '프로필 편집',
    createProfile: '프로필 만들기',
    viewProfile: '공개 프로필 보기',
    share: '카드 공유',
    supporterSince: (gold: boolean, date: string) => `${date}부터 ${gold ? '골드 후원자' : '후원자'}`,
    missions: '미션과 업적',
    join: '계정 만들기 / 로그인',
    signOut: '로그아웃',
    hintKeys: '↑ ↓ 선택 · ENTER 열기 · ESC 뒤로',
  },
  title: {
    statsSection: '능력치',
    legendBase: '기본',
    legendFinal: '진화 후',
    evolution: '진화',
    special: '필살기',
    moves: '기술',
    signature: '시작',
    normal: '일반',
    shiny: '이로치',
    shinyPick: '색상',
    credits: '비공식 팬 게임 · 스프라이트: PMD SpriteCollab · 울음소리: PokéAPI · Pokémon © Nintendo/Creatures/GAME FREAK',
  },
  partner: {
    title: '파트너 선택',
    titleShort: '파트너',
    starters: '스타터',
    hatched: '부화',
    noneHatched: '알에서 부화한 포켓몬은 파트너가 돼요.',
    details: (mega) => (mega ? '기술, 필살기, 메가진화' : '기술과 필살기'),
    detailsShort: '상세',
    tabs: {
      status: '능력치',
      moves: '기술',
      mega: '메가',
    },
    start: '시작',
    startWith: (name) => `${name}${ro(name)} 시작`,
    close: '닫기',
    learnStart: '처음부터',
    learnNote: '진화할 때마다 새 기술이 열려요. 기술 칸은 6개이므로 모두 배울 수는 없어요.',
  },
  hud: {
    pause: '일시정지',
    specialAttack: '필살기',
    specialTitle: (name) => `${name} (Space)`,
    lunge: '돌진',
    lungeTitle: (name) => `${name} (Shift)`,
    stances: {
      shield: '실드',
      blade: '블레이드',
      normal: '노말폼',
      attack: '어택폼',
      defense: '디펜스폼',
      speed: '스피드폼',
    },
    jumps: (n) => `×${n}`,
  },
  levelUp: {
    title: (name, level) => `${name}의 레벨이 ${level}${ro(level)} 올랐다!`,
    ready: '준비 완료!',
    evolution: '진화!',
    evolves: (from, description) => `${from}${ga(from)} 진화한다! ${description}`,
    berry: (name) => `${name}의 HP를 40 회복한다.`,
    autoBerry: (level, count) => `Lv ${level}! 모든 강화 완료: *오랭열매*${count > 1 ? ` ×${count}` : ""}`,
    reroll: (n) => `다시 뽑기 (${n})`,
    skip: (n) => `건너뛰기 (${n})`,
    hintKeys: '↑ ↓ 선택 · ENTER 확인 · 1-3 단축키',
    sideHintKeys: '← → 선택 · ENTER 확인 · 1-3 단축키',
    pairHintKeys: '← → 선택 · ENTER 확인 · 1-2 단축키',
    hintTouch: '눌러서 선택 · 길게 눌러 기술 확인',
    draftTitle: (name) => `${name}의 두 번째 기술을 고르세요!`,
    forkTitle: (move, level) => `${move} Lv ${level} · 강화 방향 선택`,
    forkTag: '강화 분기',
    forkHint: (a, b) => `분기: ${a} / ${b}`,
    branchOf: (move) => `${move} 강화 분기`,
    freshTag: (form) => `✦ ${form}`,
    rare: '희귀! +2 Lv',
    shiny: '이로치!',
    shinyNote: '무료 선택! 한 번 더 고를 수 있어요.',
    banish: (n) => `잊기 (${n})`,
    banishCancel: '취소',
    banishHintKeys: '잊을 카드를 선택하세요 · ESC 취소',
    banishHintTouch: '잊을 카드를 누르세요',
    prize: { alpha: '우두머리 보상!', mission: '미션 완료!' },
  },
  difficulty: {
    label: '난이도',
    names: {
      normal: '노말',
      hard: '하드',
      nightmare: '나이트메어',
    },
    blurbs: {
      normal: '의도한 그대로 즐기는 기본 난이도예요.',
      hard: '더 빠르고 빽빽하고 단단한 무리가 더 세게 때려요. 프렌들리숍을 싹쓸이한 트레이너에게.',
      nightmare: '잔혹하고 빠르고 빽빽한 무리에, 모든 회복량이 절반. 행운을 빌어요.',
    },
  },
  pause: {
    title: '일시정지',
    resume: '계속하기',
    quit: '포기하기',
    settings: '설정',
    reportBug: '오류 신고',
    evoLegend: '최대 레벨 기술 + 짝이 되는 도구 = 다음 몬스터볼이나 레벨업 때 진화!',
    statsTitle: '능력치',
    movesTitle: '기술',
    itemsTitle: '도구',
    cards: '강화 카드',
    cardsHint: '이 능력치를 강화한 카드 수',
    noItems: '아직 도구가 없어요',
    typeDamage: '데미지',
    stats: {
      maxHp: '최대 HP',
      might: '데미지',
      cooldown: '쿨타임',
      area: '범위',
      duration: '지속시간',
      amount: '발사체 수',
      speed: '이동속도',
      armor: '방어',
      regen: 'HP 회복',
      magnet: '습득 범위',
      growth: '경험치',
      greed: '돈 (₽)',
      projectileSpeed: '발사체 속도',
      statusChance: '상태 이상 확률',
      statusDamage: '상태 이상 데미지',
      damageTaken: '받는 데미지',
      comboMoves: '연속 기술 수',
      specialRecharge: '필살기 충전',
    },
    cardHintKeys: '기술에 마우스를 올리면 카드를 볼 수 있어요',
    cardHintTouch: '기술을 길게 누르면 카드를 볼 수 있어요',
  },
  moveCard: {
    level: (n, max) => `Lv ${n}/${max}`,
    evolved: '★ 진화 완료',
    pierce: '관통',
    status: { burn: '화상', poison: '중독', paralysis: '마비', slow: '둔화', sleep: '잠듦', freeze: '동결', mark: '표식', confuse: '혼란', seed: '씨뿌리기', weaken: '약화' },
    seconds: (s) => `${s}초`,
    evolves: '진화',
    evolvedFrom: '진화 전 기술',
  },
  settings: {
    title: '설정',
    music: '음악',
    sfx: '효과음',
    sound: '사운드',
    damageNumbers: '데미지 표시',
    damageModes: {
      all: '전부',
      reduced: '줄임',
      off: '끔',
    },
    screenShake: '화면 흔들림',
    flashes: '화면 번쩍임',
    flashModes: { normal: '기본', reduced: '줄임' },
    uiScale: '화면 요소 크기',
    uiScaleAuto: '자동',
    joystick: '조이스틱',
    joystickModes: {
      floating: '손가락 따라감',
      fixed: '고정',
    },
    on: '켬',
    off: '끔',
    tabs: {
      sound: '사운드',
      game: '게임',
      controls: '조작',
      about: '정보',
    },
    about: 'Pokémon World는 무료 비공식 팬 게임으로, Nintendo, The Pokémon Company, GAME FREAK, Creatures와 관련이 없어요.',
    legal: '법적 고지 및 크레딧',
    github: 'GitHub 소스 코드',
    reportBug: '오류 신고',
    guide: '플레이 방법',
    install: '앱 설치',
    hintKeys: '↑ ↓ 선택 · ← → 조절/탭 전환 · ESC 뒤로',
    hintTouch: '터치하거나 드래그해서 조절',
  },
  controls: {
    open: '모바일 · 키보드 · 게임패드',
    title: '조작',
    keyboard: '키보드',
    gamepad: '게임패드',
    actions: {
      up: '위로 이동',
      down: '아래로 이동',
      left: '왼쪽으로 이동',
      right: '오른쪽으로 이동',
      special: '필살기',
      mega: '메가진화',
      lunge: '돌진',
      pause: '일시정지',
      confirm: '확인',
      back: '뒤로',
    },
    press: (action: string) => `*${action}*: 키나 게임패드 버튼을 누르세요… (ESC로 취소)`,
    reserved: '방향키와 ESC는 고정이에요. 다른 키를 고르세요.',
    bound: (action: string, key: string) => `*${action}*${reul(action)} 이제 ${key}${ro(key)} 해요.`,
    moved: (key: string, action: string, to: string | null) =>
      to ? `${key}${neun(key)} 원래 *${action}*에 쓰였어요. 이제 그 동작은 ${to}${ro(to)} 해요.` : `${key}${neun(key)} 원래 *${action}*에 쓰였어요. 이제 그 동작은 미지정이에요.`,
    restore: '기본값 복원',
    restored: '조작을 기본값으로 되돌렸어요.',
    fixed: '방향키와 ESC는 항상 작동해요. 왼쪽 스틱은 항상 이동이에요.',
    touchNote: '터치 화면에서는 조이스틱과 화면 버튼이 그대로예요. 키를 바꾸려면 키보드나 게임패드를 연결하세요.',
    padFound: (names: string) => `게임패드 연결됨: *${names}*`,
    padMissing:
      '게임패드가 감지되지 않았어요. 게임패드의 버튼을 눌러 보세요. 브라우저는 버튼을 누른 뒤에야 게임패드를 인식해요. 그래도 안 보이면 다시 연결하거나 다른 브라우저를 써 보세요.',
    unbound: '—',
    back: '뒤로',
    hintKeys: '↑ ↓ 선택 · ← → 열 전환 · ENTER 변경 · ESC 뒤로',
    hintTouch: '바꿀 키나 버튼을 터치하세요',
  },
  account: {
    pitch: 'Google로 로그인하면 진행 상황을 클라우드에 저장하고 어느 기기에서든 이어서 할 수 있어요. 게스트로 얻은 것도 모두 그대로 옮겨져요.',
    google: 'Google로 로그인',
    failed: '로그인하지 못했어요. 다시 시도해 주세요.',
    busy: '연결 중…',
    back: '뒤로',
    hintKeys: '↑ ↓ 선택 · ENTER 확인 · ESC 뒤로',
    hintTouch: '터치해서 선택',
    gateTitle: '플레이하기 전에',
    gatePitch: 'Google로 로그인하면 진행 상황을 클라우드에 저장하고, 어느 기기에서든 이어서 하고, 랭킹에도 오를 수 있어요.',
    gateNewAccount: '아직 계정이 없나요? 처음 로그인할 때 자동으로 만들어져요.',
    playAsGuest: '게스트로 플레이',
    gateGuestNote: '게스트로 하면 진행 상황이 이 기기에만 저장되고, 판 기록이 랭킹에 반영되지 않아요.',
  },
  discord: { title: '디스코드', open: 'Discord', pitch: '게임 소식과 오늘의 챌린지 순위, 다른 트레이너를 만나는 커뮤니티 서버예요. 기본 언어는 영어이며 다른 언어를 위한 채널도 있어요.', linkPitch: 'Discord 계정을 연결하면 서버에 바로 참여하고 후원자 역할을 받을 수 있어요.', guestPitch: 'Discord로 로그인하면 계정을 만들거나 기존 계정에 로그인하면서 두 계정을 연결해요.', link: 'Discord 연결', signIn: 'Discord로 로그인', connected: (name) => `@${name} 계정 연결됨`, row: (name) => `Discord: @${name}`, failed: 'Discord 계정을 연결하지 못했어요. 다시 시도하세요.', gift: (name) => `계정을 연결하고 서버에 참여하면 *이로치 ${name}*을 받아요!`, cardGift: (name) => `이로치 ${name} 받기`, busy: '연결 중…', back: '뒤로' },
  install: { title: '앱 설치', pitch: '홈 화면에 아이콘을 추가하면 전체 화면으로 바로 플레이할 수 있어요.', share: 'Safari 도구 막대나 더보기 메뉴에서 *공유*를 누르세요.', addHome: '*홈 화면에 추가*를 고른 뒤 *추가*를 누르세요.', iosStorage: '앱의 진행 상황은 Safari와 별도로 저장돼요. 계정에 로그인하면 진행 상황을 가져올 수 있어요.', ok: '확인' },
  ranking: {
    title: '랭킹',
    periods: {
      day: '오늘',
      week: '이번 주',
      all: '전체',
    },
    everyone: '모두',
    friends: '친구',
    allPokemon: '모든 포켓몬',
    eggGroup: '알에서 부화',
    pokemon: '포켓몬',
    loading: '불러오는 중…',
    offline: '랭킹에 연결할 수 없어요. 잠시 후 다시 시도하세요.',
    retry: '다시 시도',
    empty: '아직 아무도 없어요. 첫 번째 주인공이 되어 보세요!',
    emptyFriends: '다른 트레이너의 프로필에서 팔로우하면 여기에 표시돼요.',
    friendsGuest: '로그인하면 친구 랭킹을 볼 수 있어요.',
    you: '나',
    myProfile: '내 프로필',
    back: '뒤로',
    resets: '오늘과 이번 주 랭킹은 브라질리아 시간(UTC−3) 자정에 바뀌고, 한 주는 월요일에 시작해요. 모든 판은 서버 검증을 거쳐야 랭킹에 남아요.',
    hintKeys: '↑ ↓ 플레이어 · ← → 기간 · Q E 난이도 · F 친구 · ENTER 프로필 · ESC 뒤로',
    hintTouch: '트레이너를 터치하면 프로필을 볼 수 있어요',
    outcomes: {
      victory: '승리',
      death: '기절',
      quit: '포기',
    },
    sending: '랭킹에 전송 중…',
    place: {
      day: '오늘',
      week: '이번 주',
      all: '전체',
    },
    queued: '오프라인: 다시 온라인이 되면 이번 판이 랭킹에 올라가요.',
    rejected: '이번 판은 랭킹에 반영되지 않았어요.',
    unranked: '오프라인으로 시작한 판이라 랭킹에서 제외돼요.',
    guest: '로그인하면 랭킹에 오를 수 있어요.',
    noHandle: '계정 화면에서 프로필을 만들면 랭킹에 오를 수 있어요.',
    open: '랭킹',
    challengeTab: '챌린지',
    days: {
      today: '오늘',
      yesterday: '어제',
    },
    challengeHead: (date, name, difficulty, n) => `${date} · ${name} · ${difficulty} · ${n === 1 ? '트레이너 1명' : `트레이너 ${n}명`}`,
    challengeEmpty: '이날은 아직 아무도 공식 도전을 하지 않았어요.',
    challengeResets: '트레이너마다 처음 끝낸 판만 인정돼요. 리본은 다음 날 브라질리아 시간(UTC−3) 오전 3시에 지급돼요.',
    challengeHint: '↑ ↓ 플레이어 · ← → 날짜 · Q E 순위표 · F 친구 · ENTER 프로필 · ESC 뒤로',
    challengePlace: (date, rank, total) => `${date} 챌린지: ${total}명 중 *${rank}위*`,
    challengeSent: '공식 도전 기록을 보냈어요. 프로필을 만들면 순위가 표시돼요.',
    challengePractice: '연습: 오늘의 공식 도전은 이미 끝났어요.',
    challengePracticePlace: (rank, total) => `연습 · 공식 도전 기록: ${total}명 중 ${rank}위`,
    challengeGuest: '로컬 연습: 로그인하면 챌린지 랭킹에 참여할 수 있어요.',
    modes: { standard: '일반', legend: '전설' },
    legendGroup: '전설의 포켓몬',
  },
  profile: {
    title: '프로필',
    follow: '팔로우',
    unfollow: '팔로잉',
    followers: (n) => (n === 1 ? '팔로워 1명' : `팔로워 ${n}명`),
    following: (n) => `팔로잉 ${n}명`,
    brought: (n) => (n === 1 ? '초대한 친구 1명' : `초대한 친구 ${n}명`),
    followGuest: '로그인하면 트레이너를 팔로우할 수 있어요.',
    records: '기록',
    legendRecords: '전설 모드 기록',
    noRecord: '—',
    dex: '도감',
    dexLine: (caught, seen, total) => `잡은 수 ${caught}/${total} · 본 수 ${seen}`,
    recent: '최근 판',
    noRuns: '아직 랭킹 기록이 없어요.',
    share: '공유',
    report: '신고',
    card: '트레이너 카드',
    copied: '프로필 링크를 복사했어요!',
    edit: '편집',
    loading: '불러오는 중…',
    missing: (handle) => `@${handle} 트레이너를 찾을 수 없어요.`,
    offline: '서버에 연결할 수 없어요. 잠시 후 다시 시도하세요.',
    retry: '다시 시도',
    back: '뒤로',
    hintKeys: '← → 선택 · ENTER 확인 · ESC 뒤로',
    hintTouch: '터치해서 선택',
    editTitle: '내 프로필',
    editIntro: '랭킹과 프로필에 이렇게 표시돼요.',
    name: '이름',
    handle: '아이디',
    handleHint: '영문, 숫자, _ 3~20자. 프로필 링크에 들어가요.',
    problems: {
      short: '너무 짧아요. 3자 이상 입력하세요.',
      long: '너무 길어요. 최대 20자예요.',
      chars: '영문, 숫자, _만 쓸 수 있어요.',
      reserved: '예약된 이름이에요. 다른 이름을 고르세요.',
      taken: '이미 사용 중인 이름이에요.',
      name: '이름은 최대 24자로 입력하세요.',
    },
    useSuggestion: (handle) => `@${handle} 사용`,
    save: '저장',
    saving: '저장 중…',
    later: '나중에',
    saveFailed: '저장하지 못했어요. 연결을 확인하고 다시 시도하세요.',
    publicNote: '프로필은 공개돼요. 링크가 있으면 누구나 이름, 칭호, 기록, 도감, 최근 판을 볼 수 있어요.',
    editHintKeys: 'TAB 다음 칸 · ENTER 저장 · ESC 뒤로',
  },
  results: {
    victory: '뮤츠를 쓰러뜨렸다!',
    fainted: (name) => `${name}${neun(name)} 쓰러졌다!`,
    shiny: (name) => `이로치 ${name}`,
    time: '시간',
    level: '레벨',
    kills: '쓰러뜨린 수',
    earnings: (coins, bonus) => `코인 ${coins} · 보너스 ${bonus}`,
    retry: '다시 하기',
    change: '포켓몬 변경',
    dexSpecies: (n) => (n === 1 ? '새 포켓몬 +1' : `새 포켓몬 +${n}`),
    dexShinies: (n) => (n === 1 ? '이로치 1마리 잡음' : `이로치 ${n}마리 잡음`),
    support: '재미있었나요? 프로젝트를 후원해 주세요',
  },
  share: {
    button: '공유',
    title: '공유',
    trainerTitle: '트레이너 카드',
    rendering: '카드 그리는 중…',
    failed: '카드를 그리지 못했어요. 다시 시도하세요.',
    share: '공유',
    copy: '이미지 복사',
    download: 'PNG 다운로드',
    back: '뒤로',
    copied: '이미지를 복사했어요! 붙여넣기만 하세요.',
    saved: '이미지를 저장했어요!',
    hintKeys: '← → 선택 · ENTER 확인 · ESC 뒤로',
    hintTouch: '터치해서 선택',
    card: {
      shiny: '이로치',
      outcomes: {
        victory: '승리',
        fainted: '기절',
        endless: '무한 모드',
      },
      time: '시간',
      level: '레벨',
      kills: '쓰러뜨린 수',
      shinies: '이번 판의 이로치',
      newShinies: (n) => (n === 1 ? '도감에 새로 1마리' : `도감에 새로 ${n}마리`),
      newSpecies: '도감 신규 등록',
      speciesCount: (n) => (n === 1 ? '1종' : `${n}종`),
      moves: '가장 강한 기술',
      topMove: '가장 강한 기술',
      more: '더 있음',
      trainerCard: ['트레이너', '카드'],
      idLabel: '트레이너',
      guest: '게스트',
      medals: '메달',
      shinyTotal: '이로치',
      pokedex: '도감',
      best: '최고 기록',
      showcase: '이로치',
      inBox: (n) => `PC 박스에 ${n}마리`,
      noShinies: '이로치 없음',
      challenge: (date) => `${date} 챌린지`,
      challengePlace: (rank, total) => `${total}명 중 ${rank}위`,
      ribbons: '리본',
    },
  },
  pc: {
    title: 'PC 박스',
    box: (n, total) => `박스 ${n}/${total}`,
    prev: '이전 박스',
    next: '다음 박스',
    empty: '빈 칸',
    none: '아직 이로치가 없어요. 쓰러뜨린 이로치는 모두 여기서 지내요!',
    trainer: '트레이너 카드',
    back: '뒤로',
    hintKeys: '방향키 탐색 · Q E 박스 · ESC 뒤로',
    hintTouch: '이로치를 터치해서 보기 · ◀ ▶ 박스 전환',
  },
  dex: {
    seen: '발견',
    defeated: '격파',
    caught: '포획',
    cleared: '클리어',
    clear: '클리어',
    clearedOn: (level: string) => `${level} 난이도에서 뮤츠 격파`,
    filters: {
      all: '전체',
      seen: '발견',
      caught: '포획',
      missing: '미등록',
    },
    roles: {
      starter: '스타터',
      egg: '알',
      enemy: '야생',
      boss: '보스',
      legendary: '전설',
      event: '이벤트',
    },
    owned: '포획',
    yes: '완료!',
    no: '아직',
    shiny: '이로치',
    unseen: '아직 발견하지 못했어요. 계속 탐험하세요!',
    empty: '아직 아무것도 없어요.',
    back: '뒤로',
    site: '출현 장소 ↗',
    pc: 'PC 박스',
    hintKeys: '방향키 탐색 · Q E 필터 · ESC 뒤로',
    hintTouch: '포켓몬을 터치해서 상세 보기',
  },
  mart: {
    open: '프렌들리숍 열기',
    rank: (name, rank, max) => `${name} · Lv ${rank}/${max}`,
    buy: (price) => `구매 ${price}`,
    back: '뒤로',
    backDescription: '파트너 선택으로 돌아가요.',
    refund: '환불',
    refundAll: '전부 환불',
    refundDescription: (amount) => `구매를 모두 취소하고 ${amount}${reul(amount)} 돌려받아요.`,
    refundConfirm: (amount) => `전부 환불하고 ${amount}${reul(amount)} 돌려받을까요?`,
    yes: '예',
    no: '아니요',
    hint: 'Q E 진열대 · ↑ ↓ 선택 · ENTER 구매 · ESC 뒤로',
    tabs: {
      upgrades: '강화',
      counter: '오늘의 판매대',
      style: '스타일',
    },
    counterIntro: (time) => `모두에게 똑같고, 재고는 매일 바뀌어요. ${time} 후 재입고돼요.`,
    stock: (left, max) => `재고 ${left}/${max}`,
    inBag: (n) => `가방에 ${n}개`,
    sale: (pct) => `-${pct}%`,
    saleNote: (pct) => `오늘의 특가: ${pct}% 할인!`,
    soldOut: '오늘 품절',
    incubatorFull: '부화기 가득 참',
    eggDescription: (steps) => `바로 부화기로 들어가서 ${steps}걸음 후에 부화해요.`,
    owned: '보유',
    equipped: '장착 중',
    equip: '장착',
    styleSlots: {
      frame: '프레임',
      background: '배경',
      wallpaper: '배경화면',
    },
    styleDescriptions: {
      frame: '판 결과 카드와 공유하는 트레이너 카드의 프레임.',
      background: '판 결과 카드와 트레이너 카드의 하늘.',
      wallpaper: 'PC 박스의 배경화면.',
    },
    styles: {
      frame: {
        classic: '클래식',
        poke: '몬스터볼',
        great: '슈퍼볼',
        ultra: '하이퍼볼',
        master: '마스터볼',
        ambassador: '홍보대사',
        supporter: '후원자',
      },
      background: {
        night: '별이 빛나는 밤',
        meadow: '1번도로',
        forest: '상록숲',
        cave: '달맞이산',
        snow: '은빛산',
        tower: '보라타워',
        supporter: '황금빛 하늘',
      },
      wallpaper: {
        classic: '클래식',
        forest: '나뭇잎',
        cave: '조약돌',
        snow: '눈송이',
        tower: '꼬마 유령',
        supporter: '황금 별',
      },
    },
  },
  outbreak: {
    title: '오늘의 대량발생',
    blurb: '오늘은 모든 판에 나와요: 판마다 이로치가 2마리쯤 나와요.',
    started: (name) => `*${name}*${ga(name)} 대량발생했다!`,
    hint: '오늘은 훨씬 자주 나타나고, 이로치도 마찬가지예요.',
  },
  challenge: {
    title: '오늘의 챌린지',
    day: (date) => `${date} 챌린지`,
    same: '오늘의 판은 모두에게 똑같아요: 시드, 포켓몬, 난이도까지.',
    off: '프렌들리숍 강화, 벌레유인코롱, 향로, 빛나는부적 사용 불가. 오늘의 대량발생은 적용돼요.',
    outbreak: (name) => `대량발생: ${name}`,
    locked: '아직 알 속이지만, 오늘은 플레이할 수 있어요!',
    official: '공식 도전',
    officialHint: '오늘 처음으로 끝까지 마친 판만 챌린지 랭킹에 올라가요.',
    practice: '연습',
    practiceHint: '오늘의 공식 도전은 끝났어요: 이후 판은 연습이에요.',
    attempt: (time) => `내 기록: ${time}`,
    place: (rank, total) => `${total}명 중 ${rank}위`,
    next: (time) => `${time} 후 새 챌린지`,
    guest: '게스트도 플레이와 연습은 할 수 있지만, 챌린지 랭킹과 리본은 계정만 받을 수 있어요.',
    ribbons: '리본: 상위 10%는 금, 상위 절반은 은, 참가하면 동.',
    play: '플레이 (공식)',
    practicePlay: '연습',
    board: '랭킹',
    back: '뒤로',
    hintKeys: '← → 선택 · ENTER 확인 · ESC 뒤로',
    hintTouch: '터치해서 선택',
    started: (date) => `*${date} 챌린지*`,
    startedOfficial: '공식 도전: 행운을 빌어요!',
    startedPractice: '연습: 챌린지 랭킹에 기록되지 않아요.',
  },
  news: {
    title: "새 소식",
    open: "새 소식",
    unread: "새로운 업데이트가 있어요!",
    update: date=>`${date} 업데이트`,
    seeAll: "업데이트 내역 보기",
    close: "닫기",
    hintKeys: "← → 선택 · ENTER 확인 · ESC 뒤로",
    hintTouch: "터치해서 선택",
  },
  ribbons: {
    names: {
      gold: '금 리본',
      silver: '은 리본',
      bronze: '동 리본',
    },
    section: '챌린지 리본',
  },
  invite: {
    banner: (name) => `*${name}*님이 초대했어요!`,
    blurb: '계정을 만들면 두 사람 모두 우정의 알을 받아요.',
  },
  invites: {
    title: "친구 초대",
    cardFirst: "우정의 알을 받으세요",
    cardNext: (friends, next) => `친구 ${friends}/${next}명`,
    cardAll: (friends) => (friends === 1 ? "친구 1명 초대 완료" : `친구 ${friends}명 초대 완료`),
    how: "이용 방법",
    steps: ["친구가 *내 초대 링크*를 열어요.", "친구가 로그인하면 바로 *우정의 알*을 받아요.", "친구가 *3판*을 완료하면 초대 실적에 포함돼요."],
    tip: "X나 인스타그램 앱에서 링크가 열리면, 로그인하기 전에 ‘브라우저에서 열기’를 눌러 주세요.",
    link: "내 초대 링크",
    share: "링크 공유",
    copy: "링크 복사",
    copied: "링크를 복사했어요! 친구에게 붙여넣어 보내세요.",
    shareText: "함께 포켓몬 월드를 플레이해요! 내 링크로 가입하면 우정의 알을 받을 수 있어요:",
    rewards: "보상",
    reward: { 1: "우정의 알", 3: "홍보대사 칭호와 프레임", 5: "울트라 레어 알", 10: "이로치 미뇽" },
    milestone: (friends) => (friends === 1 ? "친구 1명" : `친구 ${friends}명`),
    friends: "초대한 친구",
    noFriends: "아직 내 링크로 가입한 친구가 없어요.",
    runs: (runs, need) => `${runs}/${need}판`,
    counted: "달성!",
    loading: "불러오는 중…",
    offline: "연결되지 않아 친구 목록을 불러오지 못했어요.",
    guest: "로그인하면 초대 링크를 받을 수 있어요.",
    signIn: "로그인",
    noHandle: "프로필(@)을 만들면 초대 링크를 받을 수 있어요.",
    createProfile: "프로필 만들기",
    back: "뒤로",
    hintKeys: "← → 버튼 선택 · ENTER 확인 · ESC 뒤로",
    hintTouch: "버튼을 터치하세요",
  },
  gifts: {
    title: '이상한 소포!',
    egg: (egg) => `*${egg}*${ga(egg)} 부화기에 들어갔어요.`,
    coins: (coins) => `*${coins}*${reul(coins)} 받았어요.`,
    newTitle: (title) => `새 칭호: *${title}*! 이미 적용됐어요.`,
    style: (name) => `새 스타일: *${name}*! 이미 적용됐어요.`,
    shinyHatch: (name) => `_이로치_ *${name}*${ga(name)} 찾아왔어요!`,
    ribbon: (name) => `*${name}*! 이미 프로필에 표시돼요.`,
    ribbonWhy: (date, rank, total) => `${date} 챌린지: ${total}명 중 ${rank}위`,
    button: "선물 도착!",
    buttonLabel: (n) => (n === 1 ? "열어 볼 이상한 소포 1개" : `열어 볼 이상한 소포 ${n}개`),
    open: "열기",
    later: "나중에",
    tapToOpen: "상자를 터치해서 열어 보세요!",
    more: (n) => (n === 1 ? "선물 1개가 더 기다리고 있어요" : `선물 ${n}개가 더 기다리고 있어요`),
    next: (n) => `다음 (${n})`,
    ok: '확인',
    pickNow: "지금 선택",
    full: "소포에 알이 있지만 부화기가 가득 찼어요. 알을 부화시킨 뒤 다시 열어 주세요.",
    hintKeys: "← → 선택 · ENTER 확인 · ESC 뒤로",
    hintTouch: "터치해서 선택",
    welcome: (from) => (from ? `@${from}님의 초대로 가입한 기념` : '초대로 가입한 기념'),
    friends: (n) => (n === 1 ? '첫 친구를 데려온 기념' : `친구 ${n}명을 데려온 기념`),
    shinyPick: '*원하는 이로치*! 명예의 전당을 터치해서 고르세요.',
    support: (tier) => (tier === 'gold' ? '골드 후원자 달성 기념 ♥' : '프로젝트 후원 기념 ♥'),
    staff: (from) => (from ? `게임 제작자 @${from}님이 보낸 선물 ♥` : '게임 제작자가 보낸 선물 ♥'),
    discord: "디스코드 참여 기념 ♥",
  },
  supporters: {
    title: '명예의 전당',
    lead: '게임을 살려 주는 분들이에요. 고마워요! ♥',
    perks: {
      title: '칭호',
      frame: '프레임',
      shiny: '이로치',
      companion: '동행',
      vote: '투표',
    },
    gold: '*골드* (누적 R$ 50 또는 US$ 10): 황금 배경, 배경화면, 배지',
    legends: '레전드',
    goldFrom: 'US$ 10+',
    fans: (n) => `후원자 · ${n}`,
    firstLegend: '첫 레전드가 되어 주세요',
    you: (tier) => (tier === 'gold' ? '골드 후원자예요' : '후원자예요'),
    join: '명예의 전당 입성',
    yours: '나의 후원',
    cosmetic: '모든 보상은 꾸미기 전용: 과금으로 강해지지 않아요.',
    guest: '보상은 계정으로 지급돼요: 후원 전에 로그인하세요.',
    noHandle: '후원이 계정으로 바로 연결되도록 프로필에서 @를 정하세요.',
    none: '후원 페이지에서 @를 적고 후원하세요: 보상은 이상한 소포로 도착해요.',
    loading: '불러오는 중…',
    offline: '지금은 서버에 연결할 수 없어요.',
    since: (tier, date) => (tier === 'gold' ? `${date}부터 *골드 후원자*예요. 정말 고마워요! ♥` : `${date}부터 *후원자*예요. 고마워요! ♥`),
    donate: '후원하기',
    signIn: '로그인',
    createProfile: '프로필 만들기',
    pick: (n) => (n > 1 ? `이로치 고르기 (${n})` : '이로치 고르기'),
    companion: '동행',
    vote: '투표',
    code: '코드가 있어요',
    codeShort: '코드',
    show: (on) => (on ? '배지와 이름: 표시' : '배지와 이름: 숨김'),
    shown: (on) => (on ? '표시' : '숨김'),
    back: '뒤로',
    hintKeys: '↑ ↓ 선택 · ENTER 확인 · ESC 뒤로',
    hintTouch: '터치해서 선택',
    gridHintKeys: '방향키 선택 · ENTER 확인 · ESC 뒤로',
    pickTitle: '원하는 이로치',
    pickIntro: '영원히 이로치로 만들 포켓몬을 고르세요. 아직 부화시키지 않은 알 계열이면 그 포켓몬도 함께 얻어요.',
    starters: '스타터',
    eggs: '알 계열',
    pickConfirm: (name) => `${name} 고르기`,
    pickNone: '포켓몬을 터치하세요',
    allShiny: '고를 수 있는 이로치를 이미 전부 가지고 있어요!',
    picked: (name) => `_이로치_ *${name}*${reul(name)} 얻었어요!`,
    pickedNote: '선택 화면에서 이로치를 켜고 플레이하세요.',
    play: (name) => `${name}${ro(name)} 플레이`,
    ok: '확인',
    companionTitle: '동행 포켓몬',
    companionIntro: '판에서 따라다닐 포켓몬을 고르세요. 보여 주기용이라 공격하지도, 무언가를 바꾸지도 않아요.',
    companionNone: '없음',
    companionShiny: (on) => (on ? '이로치: 예' : '이로치: 아니요'),
    companionSave: '데려가기',
    companionSaved: (name) => `${name}${ga(name)} 함께 가요!`,
    companionOff: '동행 포켓몬 없음.',
    pollTitle: '다음 포켓몬',
    pollIntro: '다음에 알에서 부화할 계열은 후원자가 골라요. 투표는 언제든 바꿀 수 있어요.',
    votes: (n) => (n === 1 ? '1표' : `${n}표`),
    yourVote: '내 투표',
    voteOnly: '투표는 후원자만 할 수 있어요. 결과는 모두가 볼 수 있어요.',
    voted: (name) => `${name}에 투표했어요!`,
    codeTitle: '코드 입력',
    codeIntro: '@ 없이 후원했나요? 코드는 감사 페이지에 있어요. 한 번만 쓸 수 있고, 입력한 계정에 적용돼요(친구 계정도 가능).',
    codeField: '코드',
    redeem: '사용',
    redeeming: '확인 중…',
    redeemed: '코드 사용 완료! 보상은 이상한 소포로 도착해요.',
    codeErrors: {
      format: '코드는 PS-XXXX-XXXX 형식이에요.',
      unknown: '존재하지 않는 코드예요.',
      used: '이미 사용된 코드예요.',
      offline: '연결이 끊겼어요. 다시 시도하세요.',
    },
    wallEmpty: '아직 아무도 없어요. 첫 이름의 주인공이 되어 보세요!',
    offWall: (total) => `후원자는 모두 ${total}명이에요. 명단에 표시하지 않는 분도 있어요.`,
    credits: '게임을 지켜 주는 트레이너들에게 감사드려요',
    banner: '이로치가 기다리고 있어요!',
    badge: (tier) => (tier === 'gold' ? '골드 후원자' : '후원자'),
    profileSince: (date) => `${date}부터 후원자`,
  },
  ideas: {
    title: '아이디어',
    lead: '게임에서 보고 싶은 것을 요청하고 다른 트레이너의 아이디어에 투표하세요. 가장 많이 득표한 아이디어부터 작업해요!',
    tabs: {
      top: '인기',
      new: '최신',
      done: '반영됨',
    },
    loading: '불러오는 중…',
    offline: '아이디어 게시판에 연결할 수 없어요. 잠시 후 다시 시도하세요.',
    retry: '다시 시도',
    empty: {
      top: '아직 아이디어가 없어요. 첫 아이디어를 보내 보세요!',
      new: '아직 아이디어가 없어요. 첫 아이디어를 보내 보세요!',
      done: '아직 반영된 게 없지만, 곧 나와요!',
    },
    you: '내 것',
    done: '반영됨',
    doneOn: (date) => `${date}부터 게임에 반영됨`,
    up: '추천',
    down: '비추천',
    score: (n) => (n === 1 || n === -1 ? `${n}표` : `${n}표`),
    more: '더 보기',
    post: '아이디어 제안',
    signIn: '로그인하고 제안하기',
    createProfile: '프로필을 만들고 제안하기',
    voteGuest: '투표하려면 계정으로 로그인하세요.',
    closed: '이 아이디어는 더 이상 투표할 수 없어요.',
    posted: '아이디어를 보냈어요! 이제 표가 모이길 빌어 봐요.',
    form: {
      title: '새 아이디어',
      titleField: '아이디어',
      titlePlaceholder: '예: 친구와 협동 모드',
      bodyField: '상세 내용 (선택)',
      bodyPlaceholder: '어떻게 작동할까요? 왜 재미있을까요?',
      note: (n) => `아이디어는 한 번에 하나, 하루 최대 ${n}개까지예요. 먼저 이미 제안된 게 있는지 확인하고 거기에 투표해 주세요.`,
      send: '보내기',
      sending: '보내는 중…',
      back: '뒤로',
      errors: {
        short: (min) => `아이디어를 ${min}자 이상 써 주세요.`,
        invalid: '이 아이디어를 보낼 수 없어요. 내용을 확인하고 다시 시도하세요.',
        limit: (n) => `오늘은 이미 아이디어를 ${n}개 보냈어요. 내일 다시 와 주세요!`,
        profile: '제안하기 전에 프로필을 만드세요.',
        banned: "이 계정은 아이디어를 제안할 수 없어요.",
        offline: '연결이 끊겼어요. 잠시 후 다시 시도하세요.',
      },
    },
    hintKeys: '↑ ↓ ← → 선택 · ENTER 투표 · Q E 탭 · N 새 아이디어 · ESC 뒤로',
    hintTouch: '▲ 또는 ▼를 터치해서 투표',
  },
  bugReport: {
    title: "버그 제보",
    crashTitle: "게임이 갑자기 종료됐나요?",
    lead: "어떤 상황에서 무엇을 하다가 문제가 생겼는지, 예상한 동작과 실제로 일어난 일을 알려 주세요.",
    crashLead: (run) => `지난 판${run ? ` (${run})` : ''}에서 게임이 갑자기 종료된 것 같아요. 어떤 일이 있었는지 알려 주시면 확인할게요.`,
    crashText: "플레이 도중 게임이 갑자기 종료됐어요.",
    field: "어떤 일이 있었나요?",
    placeholder: "예: 동굴에서 롱스톤이 나타나자 게임이 멈췄어요.",
    tech: "기술 정보 포함",
    techHint: "버전, 기기, 화면, 플레이 정보(포켓몬·시간·난이도), 최근 게임 오류를 포함해요. 저장 데이터는 보내지 않아요.",
    techShow: "전송할 정보 보기",
    note: "계정 없이도 제보할 수 있어요. 로그인했다면 제보에 내 @가 포함돼요.",
    send: "보내기",
    sending: "보내는 중…",
    back: "뒤로",
    sent: "제보를 보냈어요. 게임 개선에 도움을 주셔서 고마워요!",
    errors: {
      short: (min) => `${min}자 이상 작성해 주세요.`,
      invalid: "제보를 보내지 못했어요. 내용을 확인한 뒤 다시 시도해 주세요.",
      limit: "짧은 시간에 여러 번 제보했어요. 잠시 후 다시 시도해 주세요.",
      offline: "연결되지 않았어요. 잠시 후 다시 시도해 주세요.",
    },
    prompt: {
      text: "플레이 도중 게임이 종료된 것 같아요. 어떤 일이 있었는지 알려 주시겠어요?",
      report: "제보하기",
      dismiss: "나중에",
    },
  },
  report: {
    title: "신고",
    flag: (handle) => `@${handle} 신고`,
    lead: (name, handle) => `${name} (@${handle}) 신고`,
    run: (pokemon, time, difficulty) => `플레이: ${pokemon} · ${time} · ${difficulty}`,
    reason: "사유",
    reasons: {
      cheating: { name: "부정행위", hint: "불가능한 플레이 기록이나 진행 상황, 저장 데이터 조작." },
      name: { name: "부적절한 이름", hint: "이름이나 @에 부적절한 표현이 있어요." },
      other: { name: "기타", hint: "아래 의견란에 알려 주세요." },
    },
    note: "의견 (선택)",
    placeholder: "무엇을 보셨나요?",
    privacy: "운영팀이 모든 신고를 확인해요. 신고자의 정보는 공개되지 않아요.",
    send: "보내기",
    sending: "보내는 중…",
    back: "뒤로",
    thanksTitle: "고맙습니다!",
    thanks: "신고를 보냈어요. 운영팀이 확인할게요. 공정한 랭킹을 지키는 데 도움을 주셔서 고마워요!",
    ok: '확인',
    errors: {
      self: "자신을 신고할 수는 없어요.",
      limit: (n) => `오늘 이미 ${n}건을 신고했어요. 내일 다시 시도해 주세요.`,
      banned: "이 계정은 신고할 수 없어요.",
      invalid: "전송하지 못했어요. 의견을 확인한 뒤 다시 시도해 주세요.",
      offline: "연결되지 않았어요. 잠시 후 다시 시도해 주세요.",
    },
  },
  bag: {
    label: '가방',
    descriptions: {
      lure: '다음 판에서 야생 이로치 출현율 2배 (대량발생 포함).',
      incense: '다음 판에서 알 획득 확률 2배.',
    },
    active: {
      lure: '이번 판은 이로치 출현율 2배!',
      incense: '이번 판은 알 확률 2배!',
    },
    toggle: (name, n) => `${name} ×${n}`,
  },
  toast: {
    used: (who, move) => `${who}의 *${move}*!`,
    stance: (who, forme) => `${who}${neun(who)} *${forme}폼*으로 폼체인지했다!`,
    legendary: (name) => `_전설의 포켓몬_ *${name}*${ga(name)} 나타났다!`,
    boss: (name) => `야생의 *${name}*${ga(name)} 나타났다!`,
    bossFled: (name) => `야생의 *${name}*${neun(name)} 도망쳤다!`,
    shiny: (name) => `이로치 *${name}*${ga(name)} 나타났다!`,
    shinyPlayer: (name) => `행운이에요! *${name}*${ga(name)} 이로치예요! 이제 선택 화면에서 _해금_됐어요.`,
    caught: (name) => `이로치 *${name}*${reul(name)} 손에 넣었다! _도감_에 등록됐다.`,
    evolving: (name) => `어라…!? ${name}의 모습이…!`,
    evolved: (from, to) => `축하합니다! ${from}${neun(from)} ${to}${ro(to)} 진화했다!`,
    moveEvolved: (from, to) => `*${from}*${ga(from)} *${to}*${ro(to)} 진화했다!`,
    learns: (form) => `${form}: 이제 배울 수 있는 기술`,
    pokeball: (prize) => `몬스터볼: ${prize}`,
    pokeballEmpty: '아무것도 없다… 텅 비어 있었다!',
    pokeballLevel: (name, level) => `${name} Lv ${level}!`,
    pokeballEvolution: (name) => `${name}!`,
    pokeballBerry: '오랭열매!',
    revive: '*기력의조각* 덕분에 다시 일어섰다!',
  },
  mega: {
    button: '메가',
    title: '메가진화 (E)',
    section: '메가진화',
    sectionTwo: '메가진화 (하나 선택)',
    locked: (name) => `${name}${ro(name)} 진화하면 메가진화 가능`,
    stone: (stone) => `*${stone}*${reul(stone)} 손에 넣었다!`,
    stoneReady: '*메가* 버튼 또는 *E* 키: 메가진화!',
    stoneLocked: (name) => `_${name}_${ro(name)} 진화하면 메가진화할 수 있어요.`,
    reacting: (stone) => `*${stone}*${ga(stone)} 키스톤에 반응하고 있다!`,
    evolved: (from, to) => `${from}${neun(from)} *${to}*${ro(to)} 메가진화했다!`,
    ended: (name) => `${name}${neun(name)} 원래 모습으로 돌아왔다.`,
    ready: '*메가진화*를 다시 쓸 수 있다!',
    choose: (a, b) => `전설의 포켓몬이 *${a}*${wa(a)} *${b}*${reul(b)} 남겼다: 하나를 주우면 다른 하나는 부서진다.`,
    how: (stone, seconds, recharge) => `균열의 전설의 포켓몬을 쓰러뜨리면 ${stone}${reul(stone)} 얻어요. 최종 진화에서 ${seconds}초 동안 메가진화 (재충전 ${recharge}초):`,
    effects: {
      venusaur: 'HP +50, 방어 +3, 초당 HP 1 재생. 필살기 변화: 꽃보라.',
      charizardX: '데미지 +30%, 속도 +8, 방어 +1. 필살기 변화: 드래곤플레어, 푸른 용의 불꽃을 두른 돌진.',
      charizardY: '날씨를 쾌청으로 바꿔(균열 밖) 불꽃 기술 데미지 ×1.5; 데미지 +25%, 범위 +15%. 필살기 변화: 열풍.',
      blastoise: '기술마다 투사체 +1, 투사체 속도 +30%, 방어 +2. 필살기 변화: 물의파동.',
      raichuX: '70 px 안의 적이 마비될 수 있고, 데미지 +30%, 전기 기술 데미지 +25%. 필살기 변화: 볼트태클, 착지할 때마다 번개를 뿌리는 연쇄 돌진.',
      raichuY: '범위 +25%, 투사체 속도 +30%, 쿨타임 −10%, 속도 +8. 필살기 변화: 라이징볼트.',
      alakazam: '필살기를 쓸 때마다 내 기술 2개도 발동(손가락흔들기처럼), 쿨타임 −15%, 데미지 +10%. 필살기 변화: 사이코브레이크.',
      gengar: '90 px 안의 적은 속도 45% 감소, 데미지 +25%, 쿨타임 −10%. 필살기 변화: 폴터가이스트.',
      dragonite: '받는 데미지 25% 감소, 데미지 +25%, 속도 +6. 필살기 변화: 폭풍.',
      mewtwoY: '기술 데미지 +40%, 쿨타임 -15%, 범위 +15%. 필살기가 사이코브레이크로 바뀌어요.',
      meganium: 'HP +40, 초당 HP 2 재생, 풀·페어리 기술 데미지 +30%. 필살기 변화: 솔라빔.',
      feraligatr: '드래곤 기술 데미지 +35%, 물 기술 데미지 +20%, 데미지 +25%, 방어 +1. 필살기 변화: 웨이브태클, 연쇄 돌진.',
      tyranitar: '모래바람을 일으켜(균열 밖) 무리를 깎아내고, 마기라스는 피해를 입지 않는다. HP +60, 방어 +3, 데미지 +20%. 필살기 변화: 스톤에지.',
      sceptile: '속도 +12, 데미지 +20%, 풀·드래곤 기술 데미지 +20%. 연쇄 돌진 변화: 드래곤클로, 착지할 때마다 용의 기운이 고리로 터진다.',
      blaziken: '속도 +16, 데미지 +25%, 쿨타임 −10%. 필살기 변화: 블레이즈킥, 화상을 입힐 수 있는 연쇄 돌진.',
      swampert: '비를 내리게 해(균열 밖) 물 기술 데미지 ×1.5; HP +50, 데미지 +25%, 속도 +8. 필살기 변화: 탁류.',
      gardevoir: '노말·페어리 기술 데미지 +30%, 데미지 +15%, 초당 HP 1.5 재생. 필살기 변화: 문포스.',
      gallade: "에스퍼 기술 데미지 +30%, 격투 기술 데미지 +25%, 이동속도 +8. 연쇄 돌진은 최대 6회 이어지고 착지할 때마다 파동탄 고리가 퍼져요.",
      metagross: '데미지 +30%, 방어 +2, 속도 +6. 필살기 변화: 코멧펀치.',
      latias: '받는 데미지 -15%, HP +30, 기술 데미지 +25%. 필살기가 스케일샷으로 바뀌어요.',
      latios: '기술 데미지 +35%, 속도 +8, 투사체 속도 +20%. 필살기가 드래곤클로로 바뀌어요.',
      staraptor: '데미지 +30%, 속도 +10. 연쇄 돌진 변화: 불새, 착지할 때마다 바람의 칼날이 고리로 터진다.',
      garchomp: '데미지 +30%, 땅·바위·강철 기술 데미지 +30%, 방어 +1. 필살기 변화: 대지의힘.',
      garchompZ: '속도 +14, 쿨타임 −15%, 데미지 +15%. 필살기 변화: 스케일샷.',
      lucario: '격투·강철 기술 데미지 +35%, 속도 +10. 연쇄 돌진이 최대 6번 이어지고, 착지할 때마다 파동탄이 고리로 터진다.',
      lucarioZ: '받는 데미지 20% 감소, 방어 +2, 격투·강철 기술 데미지 +25%. 필살기 변화: 기합구슬.',
      emboar: '데미지 +35%, HP +40. 필살기 변화: 히트스탬프.',
      chesnaught: '받는 데미지 30% 감소, 방어 +2, HP +50. 필살기 변화: 니들가드.',
      delphox: '쿨타임 −15%, 데미지 +20%, 범위 +15%. 필살기 변화: 매지컬플레임.',
      greninja: '데미지 +30%, 속도 +8, 쿨타임 −10%. 필살기 변화: 깜짝베기, 착지할 때마다 어둠의 파동이 고리로 터지는 연쇄 돌진.',
      pidgeot: '범위 +20%, 투사체 속도 +30%, 속도 +10, 데미지 +20%. 필살기 변화: 에어슬래시.',
      gyarados: '데미지 +35%, 악 기술 데미지 +30%, 방어 +2. 필살기 변화: 폭포오르기.',
      ampharos: '드래곤 기술 데미지 +35%, 전기 기술 데미지 +20%, 데미지 +25%, HP +30. 필살기 변화: 전자포.',
      scizor: '데미지 +25%, 쿨타임 −15%, 방어 +1. 필살기 변화: 불릿펀치, 최대 6번 이어지며 착지할 때마다 강철 파편이 고리로 터지는 연쇄 돌진.',
      houndoom: '데미지 +35%, 불꽃 기술 데미지 +20%, 화상과 독 20% 강화. 필살기 변화: 타오르는분노.',
      aggron: '받는 데미지 25% 감소, 방어 +3, 데미지 +15%. 필살기 변화: 헤비봄버.',
      manectric: '80 px 안의 적은 속도 30% 감소, 속도 +12, 데미지 +20%, 쿨타임 −5%. 필살기 변화: 와일드볼트.',
      altaria: '노말·페어리 기술 데미지 +30%, 드래곤 기술 데미지 +20%, HP +30, 초당 HP 1 재생. 필살기 변화: 하이퍼보이스.',
      banette: '쿨타임 −20%, 모든 기술의 상태이상 확률 +10%, 데미지 +15%. 필살기 변화: 고스트다이브, 착지할 때마다 그림자가 고리로 터지는 연쇄 돌진.',
      glalie: '노말·얼음 기술 데미지 +30%, 데미지 +25%. 필살기 변화: 절대영도.',
      salamence: '노말·비행 기술 데미지 +30%, 속도 +12, 데미지 +25%. 필살기 변화: 이판사판태클.',
    },
  },
  ability: abilityKo,
  branch: {
    title: (name) => `${name}: 어떤 모습으로 진화할까요?`,
    subtitle: "진화하면 타입, 능력치, 필살기, 기술과 특성이 바뀌어요.",
    favored: (what) => `${what}의 영향을 받아요`,
    moves: "새 기술",
    abilities: "특성",
    special: "필살기",
    section: "진화 가능한 모습",
    note: (shown, total) => `진화할 때 ${total}가지 중 ${shown}가지가 나타나요. 날씨와 장소에 따라 특정 모습이 나올 가능성이 높아져요.`,
    noteAll: "진화할 때 원하는 모습을 선택해요.",
    choose: (n) => `선택지 ${n}개`,
    specialNote: "진화하면 선택한 모습의 필살기로 바뀌어요.",
  },
  tm: {
    titleBoss: (boss: string) => `${boss}: 기술머신을 남겼어요!`,
    titleFound: "기술머신을 발견했어요!",
    titleLegendary: (legend: string) => `${legend}의 전설 기술머신!`,
    titleTutor: "기술 가르침",
    subBoss: "원래 배울 수 없는 기술이에요. 배울까요?",
    subLegendary: "전설 기술머신은 한 판에 하나만 배울 수 있어요.",
    subTutor: (free: boolean) =>
      free
        ? "원래 배울 수 없지만 타입에 맞는 기술을 가르쳐 드려요. 첫 수업은 무료예요!"
        : "원래 배울 수 없지만 타입에 맞는 기술을 가르쳐 드려요. 수업료는 이번 판에서 모은 ₽로 내요.",
    tag: 'TM',
    free: "무료",
    wallet: (coins: string) => `소지금: ${coins}`,
    broke: "소지금이 부족해요",
    pass: "두고 가기",
    passTutor: "나중에",
    forgetTitle: (who: string, move: string) => `${who}: ${move} 기술을 배우고 싶어 해요…`,
    forgetFull: (who: string) => `하지만 ${who}: 이미 기술을 6개 알고 있어요. 어떤 기술을 잊을까요?`,
    forgetManual: "수동 기술은 하나만 배울 수 있어요. 어떤 기술을 잊을까요?",
    keep: (move: string) => `${move} 배우지 않기`,
    poof: ["하나, 둘, 셋…", '… … …', "짠!"],
    forgot: (who: string, move: string) => `${who}: ${move} 기술을 잊었어요.`,
    andLearned: (who: string, move: string) => `그리고… ${who}: ${move} 기술을 배웠어요!`,
    learned: (move: string) => `*${move}* 기술을 배웠어요!`,
    learnedInstead: (old: string, move: string) => `_${old}_ 기술을 잊고 *${move}* 기술을 배웠어요!`,
    raised: (move: string, level: number) => `*${move}* 기술이 Lv ${level}로 올랐어요!`,
    mastered: (move: string, coins: string) => `${move} 기술은 이미 최대 레벨이에요. 기술머신이 *${coins}*으로 바뀌었어요.`,
    hintKeys: "↑ ↓ 선택 · ENTER 확인",
    hintTouch: "터치해서 선택",
  },
  abilities: abilitiesKo,
  world: {
    biomes: {
      meadow: '1번도로',
      forest: '상록숲',
      cave: '달맞이산',
      snow: '은빛산',
      tower: '보라타워',
    },
    area: (n, total) => `구역 ${n}/${total}`,
    weather: {
      clear: '맑음',
      sun: '쾌청',
      rain: '비',
      sand: '모래바람',
      snow: '눈',
      fog: '안개',
    },
    weatherStart: {
      sun: '햇살이 *강해졌다*!',
      rain: '*비*가 내리기 시작했다!',
      sand: '*모래바람*이 불기 시작했다!',
      snow: '*눈*이 내리기 시작했다!',
      fog: '*짙은 안개*가 끼었다!',
    },
    weatherHint: {
      sun: '불꽃 기술 강화, 물 기술 약화',
      rain: '물 기술 강화, 불꽃 기술 약화',
      sand: '바위·땅·강철 타입 외에는 체력 감소',
      snow: '얼음 타입 외에는 체력 감소',
      fog: '멀리 보기 어려움',
    },
    weatherEnd: {
      sun: '햇살이 원래대로 돌아왔다.',
      rain: '비가 그쳤다.',
      sand: '모래바람이 가라앉았다.',
      snow: '눈이 그쳤다.',
      fog: '안개가 걷혔다.',
    },
  },
  eggs: {
    tiers: {
      common: '일반 알',
      rare: '레어 알',
      ultra: '울트라 레어 알',
      friend: '우정의 알',
    },
    found: (egg) => `*${egg}*${reul(egg)} 발견했다! 부화기로 들어간다.`,
    title: '부화기',
    intro: '알은 판에서 걸은 걸음 수로 부화해요. 부화기 속 알은 모두 함께 걸어요.',
    sources: '보스, 잠긴 상자, 균열에서 가끔 알이 나와요.',
    empty: '비어 있음',
    stepsLeft: (n) => `앞으로 ${n}걸음`,
    ready: '준비 완료!',
    hatch: '부화!',
    back: '뒤로',
    collection: (n, total) => `컬렉션 ${n}/${total}`,
    hint: '← → 선택 · ENTER 부화 · ESC 뒤로',
    hatching: '어라? 알이 움직이고 있다!',
    hatched: (name) => `알에서 *${name}*${ga(name)} 태어났다!`,
    hatchedShiny: (name) => `알에서 _이로치_ *${name}*${ga(name)} 태어났다!`,
    unlocked: '이제 파트너로 고를 수 있어요.',
    shinyUnlocked: '이제 모든 판에서 이로치예요!',
    duplicate: (name, coins) => `이미 ${name}${reul(name)} 가지고 있어서 ${coins}${ro(coins)} 바뀌었어요.`,
    play: (name) => `${name}${ro(name)} 플레이`,
    ok: '확인',
    skip: '터치해서 건너뛰기',
    tab: '알',
    locked: '???',
    lockedBlurb: (egg) => `아직 알 속에 있어요. *${egg}*에서 부화해요.`,
    friendBlurb: '*우정의 알*에서만 부화해요: 내 링크로 친구를 초대하면 받을 수 있어요.',
    lockedButton: '아직 알',
    incubator: (n, slots) => `부화기 ${n}/${slots}`,
    readyBadge: (n) => (n === 1 ? '알 1개 준비 완료!' : `알 ${n}개 준비 완료!`),
    steps: '걸음',
    eggs: '알',
    full: (coins) => `부화기가 가득 차서 알이 ${coins}${ro(coins)} 바뀌었어요.`,
  },
  mapEvents: {
    altar: (buff) => `제단이 *${buff}*${reul(buff)} 내려 주었다!`,
    fountain: '샘이 HP를 회복해 줘요. 안에 머무르세요!',
    chestAmbush: '잠긴 상자다! 가까이 있으면 열린다… _기습이다_!',
    chestOpen: (coins) => `상자를 열었다: *${coins}*, 도구 하나, 몬스터볼 하나!`,
    meowth: '*나옹*이 코인을 들고 달아난다! 공격해!',
    payDay: (coins) => `*고양이돈받기!* 나옹이 ${coins}${reul(coins)} 떨어뜨렸다!`,
    meowthEscaped: '*나옹*은 도망쳤다…',
    tutor: "근처에 *기술 가르침 선생님*이 천막을 세웠어요! 안에 들어가 기술을 배우세요.",
    tutorEmpty: "기술 선생님이 더 가르칠 기술이 없어요.",
    tutorLeft: "기술 선생님이 다른 곳으로 떠났어요…",
    field: {
      defense: "미션: *알*이 위험해요! 화살표를 따라가 둥지를 지키세요.",
      collect: (n) => `미션: 주변에 *몬스터볼 ${n}개*가 흩어졌어요! 시간 안에 모두 찾으세요.`,
      escort: "미션: *토게피*가 길을 잃었어요! 찾아서 둥지로 데려다주세요.",
      nestRaid: "야생 포켓몬이 알을 노려요! 안전해질 때까지 *원 안에 머무르세요*.",
      ballFound: (got, of) => `몬스터볼 *${got}/${of}*`,
      togepiJoin: "*토게피*가 따라오고 있어요! 둥지로 안내해 주세요.",
      done: (coins) => `*미션 완료!* ${coins} 획득, 레어 카드로 레벨업!`,
      doneEgg: (coins) => `*미션 완료!* 알과 ${coins} 획득, 레어 카드로 레벨업!`,
      failed: {
        defense: "알을 잃었어요…",
        collect: "시간이 끝나서 몬스터볼이 사라졌어요…",
        escort: "토게피가 겁을 먹고 달아났어요…",
      },
      hudReach: (time) => `위험에 빠진 알 ${time}`,
      hudDefend: (left) => `알 지키기 ${left}`,
      hudAway: (left) => `둥지로 돌아가세요! ${left}`,
      hudCollect: (got, of, time) => `몬스터볼 ${got}/${of} · ${time}`,
      hudFind: (time) => `토게피 찾기 ${time}`,
      hudEscort: (time) => `토게피를 둥지로 ${time}`,
    },
  },
  rifts: {
    open: '*전설의 균열*이 열렸다! 화살표를 따라가자.',
    closed: '균열이 닫혔다.',
    enter: (name) => `균열이 당신을 *${name}*에게 데려간다!`,
    enterShiny: (name) => `균열이 당신을 _이로치_ *${name}*에게 데려간다!`,
    cleared: (name) => `*${name}*${reul(name)} 쓰러뜨렸다! 균열이 보물을 남긴다.`,
    pairCleared: (a, b) => `*${a}* · *${b}* 격파! 균열이 보물을 남겼어요.`,
    collapse: '균열이 무너졌다! 원래 세계로 튕겨 나왔다.',
    fall: (name: string) => `*${name}*에게 당했다! 균열이 당신을 밀어낸다…`,
    fallen: '*일반 차원*으로 돌아왔다. 판은 계속된다!',
    hudPortal: (time) => `균열 ${time}`,
    hudArena: (time) => `붕괴 ${time}`,
    hudEndless: (time) => `무한 +${time}`,
    hudReaper: (time) => `아르세우스 ${time} 후`,
    hudHunting: '아르세우스가 당신을 쫓고 있다!',
    reaper: '*아르세우스*가 심판하러 내려왔다!',
    reaperBack: '*아르세우스*가 더 강해져서 돌아왔다!',
    reaperDown: '*아르세우스*를 쓰러뜨렸다! _전설적인_ 위업이다!',
    continue: '무한 모드',
    continueHint: '무리는 끝없이 몰려오고 20:00에 아르세우스가 사냥하러 와요. 얼마나 버틸 수 있을까요?',
    endlessOver: (name) => `${name}${ga(name)} 무한 모드에서 쓰러졌다!`,
    overtime: '연장전',
    legends: '전설의 포켓몬',
    reaperDefeated: (n) => (n === 1 ? '아르세우스 격파!' : `아르세우스 ${n}회 격파!`),
    omen: (name) => `*${name}*의 힘이 깨어나요! 곧 균열이 열려요.`,
    omenFaint: '전설의 기운이 느껴져요… 곧 균열이 열려요.',
    enterDomain: (place) => `*${place}*에 들어왔어요!`,
    hudCrossing: '계속 전진하세요!',
    escaped: (name) => `*${name}*이 몬스터볼에서 빠져나왔어요!`,
    caught: (name) => `*${name}* 포획 성공!`,
    calms: (name) => `바람이 *${name}*의 남은 분노를 잠재웠어요.`,
    domains: legendDomainsKo,
    pairName: (a: string, b: string) => `${a} & ${b}`,
    pairDown: (down, survivor) => `*${down}* 격파! *${survivor}*가 분노해요. 동료를 회복하기 전에 쓰러뜨리세요!`,
    pairRevive: (healer, revived) => `*${healer}*가 *${revived}*를 되살렸어요!`,
    guardUp: (name) => `*${name}*가 장벽을 펼쳤어요! 수호자를 쓰러뜨리세요.`,
    guardDown: '장벽이 깨졌어요!',
  },
  landmarks: {
    names: { cottage: "버려진 오두막", tunnel: "광산 터널", maze: "생울타리 미로", ruins: "안농 유적", camp: "버려진 야영지" },
    hints: {
      cottage: "안에 누군가 상자를 두고 갔어요…",
      tunnel: "한쪽 입구로 들어가 반대편으로 나와요.",
      maze: "미로 한가운데에 상자가 있어요.",
      ruins: "제단이 조용히 기다리고 있어요.",
      camp: "모닥불 옆에 배낭이 남아 있어요.",
    },
    loot: {
      cottage: "오래된 상자를 뒤졌어요!",
      maze: "미로 한가운데에 도착했어요!",
      ruins: "안농 문자가 빛나요!",
      camp: "주인이 두고 간 배낭을 열었어요!",
    },
    tunnelOut: "터널 반대편으로 나왔어요!",
  },
  places: {
    names: { cave: "어두운 동굴", graveyard: "유령 묘지", sky: "구름 위" },
    hudNames: { cave: "동굴", graveyard: "묘지", sky: "상승기류" },
    open: {
      cave: "*동굴* 입구가 나타났어요! 화살표를 따라가세요.",
      graveyard: "안개 속에서 *묘지*가 나타났어요! 화살표를 따라가세요.",
      sky: "하늘로 향하는 *상승기류*가 생겼어요! 화살표를 따라 날아가세요.",
    },
    sealed: {
      cave: "떨어진 바위가 동굴 입구를 막았어요.",
      graveyard: "묘지 문이 닫혔어요.",
      sky: "상승기류가 사라졌어요.",
    },
    blocked: "*비행* 타입 포켓몬만 이 상승기류를 탈 수 있어요.",
    goal: {
      cave: "어둠 속에서 계단을 찾아 *보물*이 있는 아래층으로 내려가세요!",
      graveyard: "유령을 쓰러뜨릴 때마다 *쐐기돌*이 흔들려요…",
      sky: "바람이 잦아들기 전에 날려 오는 *날개*를 모으세요!",
    },
    floor: (n) => `B${n}F`,
    wind: ["무언가 움직이고 있어요…", "점점 가까워져요!", "바로 근처예요! 바람이 거세져요!"],
    blownOut: "돌풍에 휩쓸려 동굴 밖으로 나왔어요!",
    monsterHouse: "*몬스터 소굴*이에요!",
    treasure: (coins) => `보물을 열었어요: *${coins}*, 도구, 몬스터볼!`,
    keystone: "*쐐기돌*이 갈라지고 *화강돌*이 깨어났어요!",
    keystoneShiny: "*쐐기돌*이 갈라지고 _이로치_ *화강돌*이 깨어났어요!",
    spiritomb: "*화강돌* 격파! 영혼들이 평온을 되찾았어요.",
    dawnSoon: "날이 밝아 오고 있어요…",
    dawn: "해가 뜨자 유령들이 사라졌어요.",
    calmSoon: "바람이 잦아들고 있어요…",
    landed: (n) => (n === 0 ? "바람이 잦아들어 아래로 내려왔어요." : `바람이 잦아들었어요. 날개 ${n}개를 가지고 돌아왔어요!`),
    wings: {
      healthWing: (n) => `최대 HP +${n}`,
      muscleWing: (n) => `데미지 +${n}%`,
      resistWing: (n) => `방어 +${n}`,
      swiftWing: (n) => `속도 +${n}`,
      prettyWing: (n) => `가치: ₽${n}`,
    },
    hudOpen: (name, time) => `${name} ${time}`,
    hudCave: (floor, time) => `${floor} · 돌풍 ${time}`,
    hudSpirits: (n, of, time) => `영혼 ${n}/${of} · ${time}`,
    hudDawn: (time) => `새벽 ${time}`,
    hudSky: (n, time) => `날개 ${n}개 · ${time}`,
    results: "탐험 장소",
    fall: "쓰러졌어요! *구조대*가 오고 있어요…",
    rescued: "구조되어 원래 맵으로 돌아왔어요. 플레이는 계속돼요!",
  },
  types: {
    normal: '노말',
    fire: '불꽃',
    water: '물',
    grass: '풀',
    electric: '전기',
    poison: '독',
    flying: '비행',
    bug: '벌레',
    rock: '바위',
    ground: '땅',
    ghost: '고스트',
    fighting: '격투',
    psychic: '에스퍼',
    ice: '얼음',
    steel: '강철',
    dark: '악',
    fairy: '페어리',
    dragon: '드래곤',
  },
  missions: {
    title: '미션',
    tab: '미션',
    daily: '일일',
    weekly: '주간',
    resetsIn: (time) => `${time} 후 갱신`,
    duration: (d, h, m) => (d > 0 ? `${d}일 ${h}시간` : h > 0 ? `${h}시간 ${m}분` : `${m}분`),
    back: '뒤로',
    hintKeys: '← → 탭 · ↑ ↓ 스크롤 · ENTER 칭호 표시 · ESC 뒤로',
    hintTouch: '칭호가 있는 업적을 터치해 표시하세요',
    report: '미션',
    reportReward: (amount) => `미션과 메달: +${amount}`,
    toastDone: (n, amount) => (n === 1 ? `미션 달성! *+${amount}*` : `미션 ${n}개 달성! *+${amount}*`),
    toastMedal: (name) => `새 메달: *${name}*!`,
    toastEgg: (n) => (n === 1 ? '*알*이 부화기에 들어갔다!' : `*알* ${n}개가 부화기에 들어갔다!`),
    rewardEgg: (tier) => `+ ${tier}`,
    reportEggs: (n) => (n === 1 ? '알 +1' : `알 +${n}`),
    rewardItem: (name) => `+ ${name} (가방에 보관)`,
    reportItems: (n) => (n === 1 ? '가방에 도구 +1' : `가방에 도구 +${n}`),
    toastItem: (n) => (n === 1 ? '*도구*가 가방에 들어갔다!' : `*도구* ${n}개가 가방에 들어갔다!`),
    goals: {
      kills: (n) => `포켓몬 ${n}마리 쓰러뜨리기`,
      typeKills: (n, type) => `${type} 타입 포켓몬 ${n}마리 쓰러뜨리기`,
      weatherKills: {
        sun: (n) => `쾌청일 때 포켓몬 ${n}마리 쓰러뜨리기`,
        rain: (n) => `비 속에서 포켓몬 ${n}마리 쓰러뜨리기`,
        sand: (n) => `모래바람 속에서 포켓몬 ${n}마리 쓰러뜨리기`,
        snow: (n) => `눈 속에서 포켓몬 ${n}마리 쓰러뜨리기`,
        fog: (n) => `안개 속에서 포켓몬 ${n}마리 쓰러뜨리기`,
      },
      biomeKills: {
        meadow: (n) => `1번도로에서 포켓몬 ${n}마리 쓰러뜨리기`,
        forest: (n) => `상록숲에서 포켓몬 ${n}마리 쓰러뜨리기`,
        cave: (n) => `달맞이산에서 포켓몬 ${n}마리 쓰러뜨리기`,
        snow: (n) => `은빛산에서 포켓몬 ${n}마리 쓰러뜨리기`,
        tower: (n) => `보라타워에서 포켓몬 ${n}마리 쓰러뜨리기`,
      },
      traitKills: (n) => `특수 행동을 하는 포켓몬 ${n}마리 쓰러뜨리기`,
      shinyKills: (n) => (n === '1' ? '이로치 포켓몬 쓰러뜨리기' : `이로치 포켓몬 ${n}마리 쓰러뜨리기`),
      outbreakKills: (n, name) => `오늘의 대량발생 ${name} ${n}마리 쓰러뜨리기`,
      bossKills: (n) => `보스 ${n}마리 쓰러뜨리기`,
      rifts: (n) => (n === '1' ? '전설의 균열에서 승리하기' : `전설의 균열에서 ${n}회 승리하기`),
      chests: (n) => (n === '1' ? '상자 열기' : `상자 ${n}개 열기`),
      meowths: (n) => (n === '1' ? '나옹이 코인을 떨어뜨리게 하기' : `나옹이 코인을 ${n}회 떨어뜨리게 하기`),
      altars: (n) => `제단 ${n}개 사용하기`,
      coins: (amount) => `${amount} 모으기`,
      moveEvolutions: (n) => (n === '1' ? '기술 진화시키기' : `기술 ${n}개 진화시키기`),
      wins: (n) => (n === '1' ? '뮤츠 쓰러뜨리기' : `뮤츠 ${n}회 쓰러뜨리기`),
      typeWins: (n, type) => (n === '1' ? `${type} 타입 스타터로 뮤츠 쓰러뜨리기` : `${type} 타입 스타터로 뮤츠 ${n}회 쓰러뜨리기`),
      survive: (n) => `한 판에서 ${n}분 생존하기`,
      typeSurvive: (n, type) => `${type} 타입 스타터로 ${n}분 생존하기`,
      level: (n) => `한 판에서 Lv ${n} 달성하기`,
      endless: (n) => `무한 모드에서 ${n}분 생존하기`,
      steps: (n) => `${n}걸음 걷기`,
      species: (n) => `한 판에서 포켓몬 ${n}종 만나기`,
      hatches: (n) => (n === '1' ? '알 부화시키기' : `알 ${n}개 부화시키기`),
    },
  },
  achievements: {
    tab: '업적',
    count: (n, total) => `메달 ${n} / ${total}`,
    medals: {
      bronze: '동',
      silver: '은',
      gold: '금',
    },
    title: '칭호',
    noTitle: '없음',
    titleTag: '칭호',
    equipped: '표시 중',
    giftTitles: {
      ambassador: '친구 3명을 게임에 초대함',
      supporter: '기부로 프로젝트를 후원함',
    },
    newMedals: '새 메달',
    names: {
      firstRun: '첫걸음',
      regular: '단골',
      veteran: '베테랑',
      kills1k: '천 마리 격파',
      kills10k: '무리 분쇄자',
      kills100k: '파죽지세',
      survive5: '생존자',
      survive10: '끈질긴 생명력',
      finalForm: '최종 진화',
      level30: '숙련자',
      level50: '배틀 마스터',
      moveEvo: '기술 진화',
      moveEvo50: '무기고',
      boss10: '보스 헌터',
      boss100: '보스의 천적',
      chests10: '보물 사냥꾼',
      meowths5: '고양이돈받기',
      altars25: '독실한 신자',
      coins10k: '저금',
      coins100k: '부자',
      coins1m: '재벌',
      starters9: '관광객',
      starters27: '완벽한 트레이너',
      missions10: '도우미',
      missions100: '불철주야',
      shiny1: '반짝반짝!',
      shiny10: '예리한 눈',
      shiny50: '이로치 헌터',
      shinyStarter: '이로치 파트너',
      dex100: '연구원',
      starterLines: '포켓몬 박사',
      firstHatch: '어라? 알이 부화했다!',
      shinyHatch: '이로치 부화',
      rift1: '균열 파괴자',
      rift25: '균열 방랑자',
      place1: "색다른 길",
      place25: "모험가",
      landmark1: "꼼꼼한 탐색",
      landmark50: "보물 사냥꾼",
      mega1: '메가 유대',
      mega25: '메가 마스터',
      alpha1: "첫 우두머리",
      alpha25: "우두머리 추적자",
      alpha100: "우두머리 사냥꾼",
      legends: '전설의 조련사',
      shinyLegend: '빛나는 전설',
      explorer: '탐험가',
      champion: '챔피언',
      wins10: '왕조',
      trio: '스타터 삼총사',
      kanto: '관동 챔피언',
      johto: '성도 챔피언',
      hoenn: '호연 챔피언',
      sinnoh: '신오 챔피언',
      unova: '하나 챔피언',
      kalos: '칼로스 챔피언',
      alola: '알로라 챔피언',
      galar: '가라르 챔피언',
      paldea: '팔데아 챔피언',
      regions: '지방 정복자',
      endless: '뮤츠를 넘어서',
      reaperSurvivor: '아르세우스의 시선 아래',
      reaperDown: '살아있는 전설',
    },
    titles: {
      veteran: '베테랑',
      kills100k: '파죽지세',
      coins1m: '재벌',
      starters27: '완벽한 트레이너',
      missions100: '불철주야',
      shiny50: '이로치 헌터',
      shinyStarter: '행운아',
      starterLines: '포켓몬 박사',
      shinyHatch: '이로치 브리더',
      legends: '전설의 조련사',
      explorer: "탐험가",
      champion: '챔피언',
      regions: '지방 정복자',
      reaperDown: '살아있는 전설',
      alpha100: "우두머리 사냥꾼",
      ambassador: '홍보대사',
      supporter: '후원자',
    },
    goals: {
      runs: (n) => (n === '1' ? '한 판 플레이하기' : `${n}판 플레이하기`),
      kills: (n) => `포켓몬을 총 ${n}마리 쓰러뜨리기`,
      bestMinutes: (n) => `한 판에서 ${n}분 생존하기`,
      bestLevel: (n) => `한 판에서 Lv ${n} 달성하기`,
      finalStages: () => '스타터를 최종 진화시키기',
      wins: (n) => (n === '1' ? '뮤츠 쓰러뜨리기' : `뮤츠 ${n}회 쓰러뜨리기`),
      trio: () => '풀, 불꽃, 물 타입 스타터로 각각 뮤츠 쓰러뜨리기',
      regions: () => '9개 지방 모두의 스타터로 뮤츠 쓰러뜨리기',
      starters: (n) => `서로 다른 스타터 ${n}마리로 플레이하기`,
      shinyKills: (n) => (n === '1' ? '이로치 포켓몬 쓰러뜨리기' : `이로치 포켓몬 ${n}마리 쓰러뜨리기`),
      shinyStarters: () => '이로치 스타터로 판 시작하기 (1/64 확률)',
      shinyLegends: () => '균열에서 이로치 전설의 포켓몬 쓰러뜨리기',
      rifts: (n) => (n === '1' ? '전설의 균열에서 승리하기' : `전설의 균열에서 ${n}회 승리하기`),
      legends: (n: string) => `균열의 전설의 포켓몬 ${n}마리 모두 쓰러뜨리기`,
      overtimeMinutes: (n) => (n === '1' ? '무한 모드에서 1분 생존하기' : `무한 모드에서 ${n}분 생존하기`),
      reaperDefeats: () => '무한 모드에서 아르세우스 쓰러뜨리기',
      bossKills: (n) => `보스 ${n}마리 쓰러뜨리기`,
      chests: (n) => `상자 ${n}개 열기`,
      meowths: (n) => `나옹이 코인을 ${n}회 떨어뜨리게 하기`,
      altars: (n) => `제단 ${n}개 사용하기`,
      coins: (amount) => `총 ${amount} 모으기`,
      moveEvolutions: (n) => (n === '1' ? '전용 도구로 기술 진화시키기' : `기술 ${n}개 진화시키기`),
      missions: (n) => `미션 ${n}개 달성하기`,
      dexSeen: (n) => `도감에 포켓몬 ${n}종 등록하기`,
      starterLines: () => '스타터 27마리의 모든 모습 모으기 (각각 최종 진화까지)',
      hatches: (n) => (n === '1' ? '알 부화시키기' : `알 ${n}개 부화시키기`),
      shinyHatches: () => '알에서 이로치 포켓몬 부화시키기 (1/100 확률)',
      megas: (n) => (n === '1' ? '메가진화 1회 하기' : `메가진화 ${n}회 하기`),
      alphaKills: n=>`우두머리 포켓몬 ${n}마리 쓰러뜨리기`,
      placeClears: n=>n==='1'?'동굴 보물·화강돌·날개를 얻는 비행 중 한 장소 완료하기':`탐험 장소 ${n}회 완료하기`,
      landmarks: n=>n==='1'?'오두막·미로·유적·야영지에 숨겨진 보물 하나 열기':`맵에 숨겨진 보물 ${n}개 열기`,
      places: n=>`탐험 장소 ${n}종 모두 완료하기: 동굴 보물·묘지의 화강돌·구름 위 비행`,
    },
    region: (name) => `${REGION_NAMES[name] ?? name} 스타터로 뮤츠 쓰러뜨리기`,
  },
  moves: {
    leechSeed: {
      description: moveDescriptionsKo.leechSeed,
      upgrades: [
        "씨앗 +1",
        "데미지 +3",
        {
          fork: [
            { name: "씨뿌리기", desc: "지속 피해 지대를 남김; 상태 이상 데미지 +15%" },
            { name: "뻗어가는 덩굴", desc: "씨앗이 적 2마리에게 추가 연쇄 공격; 데미지 -1" },
          ],
        },
        "재충전 0.3초 단축",
        "씨앗 +1",
        {
          fork: [
            { name: "씨폭탄", desc: "쓰러뜨린 적이 폭발; 데미지 +4" },
            { name: "추가 파종", desc: "즉시 추가 공격 (50% 위력); 범위 +20%" },
          ],
        },
        "씨앗 +2",
      ],
    },
    rapidSpin: {
      description: moveDescriptionsKo.rapidSpin,
      upgrades: [
        "데미지 +3",
        "회전 지속시간 +0.3초",
        {
          fork: [
            { name: "전기 회전", desc: "적 2마리 추가 연쇄 공격; 범위 +10%" },
            { name: "생명 회전", desc: "적중 시 HP 회복; 범위 +10%" },
          ],
        },
        "재충전 0.5초 단축",
        "데미지 +4",
        {
          fork: [
            { name: "껍질 폭발", desc: "쓰러뜨린 적이 폭발; 지속시간 +0.3초" },
            { name: "최후의 회전", desc: "HP 12% 이하인 적 마무리; 범위 +15%, 데미지 +16" },
          ],
        },
        "데미지 +5, 던지는 거리 증가",
      ],
    },
    petalDance: {
      description: moveDescriptionsKo.petalDance,
      upgrades: [
        "꽃잎 +1",
        "데미지 +3",
        {
          fork: [
            { name: "쌍나선", desc: "2번째 넓은 나선이 반대 방향으로 회전; 데미지 +2" },
            { name: "흩날리는 꽃잎", desc: "지속 피해 지대를 남김; 지속시간 +0.3초" },
          ],
        },
        "꽃잎 +1",
        "재충전 0.3초 단축",
        {
          fork: [
            { name: "만개", desc: "쓰러뜨린 적이 폭발; 데미지 +4" },
            { name: "꽃잎 회오리", desc: "적을 끌어당김; 범위 +15%" },
          ],
        },
        "꽃잎 +2",
      ],
    },
    eruption: {
      description: moveDescriptionsKo.eruption,
      upgrades: [
        "폭탄 +1",
        "데미지 +6",
        {
          fork: [
            { name: "용암 지대", desc: "지속 피해 지대를 남김; 범위 +10%" },
            { name: "여진", desc: "즉시 추가 공격 (50% 위력); 데미지 -4" },
          ],
        },
        "폭탄 +2",
        "재충전 0.4초 단축",
        {
          fork: [
            { name: "화산탄", desc: "쓰러뜨린 적이 폭발; 데미지 +8" },
            { name: "격노하는 화산", desc: "정예·보스에게 데미지 ×1.5; 데미지 +11" },
          ],
        },
        "폭탄 +2, 범위 +15%",
      ],
    },
    thrash: {
      description: moveDescriptionsKo.thrash,
      upgrades: [
        "데미지 +3",
        "초당 물기 +1회",
        {
          fork: [
            { name: "연쇄 광란", desc: "적 2마리 추가 연쇄 공격; 범위 +10%" },
            { name: "생명의 광란", desc: "적중 시 HP 회복; 범위 +20%" },
          ],
        },
        "난동 지속시간 +0.5초",
        "데미지 +4",
        {
          fork: [
            { name: "난동", desc: "쓰러뜨린 적이 폭발; 물기 +1" },
            { name: "거인의 분노", desc: "정예·보스에게 데미지 ×1.5; 물기 +1" },
          ],
        },
        "재충전 1초 단축, 데미지 +3",
      ],
    },
    doubleKick: {
      description: moveDescriptionsKo.doubleKick,
      upgrades: [
        "데미지 +3",
        "범위 +20%",
        {
          fork: [
            { name: "연쇄 발차기", desc: "적 2마리 추가 연쇄 공격; 쿨타임 -0.1초" },
            { name: "트리플킥", desc: "즉시 추가 공격 (50% 위력); 쿨타임 +0.1초, 데미지 +6" },
          ],
        },
        "데미지 +4",
        "뒤로 연속 발차기 +1쌍",
        {
          fork: [
            { name: "최후의 일격", desc: "HP 12% 이하인 적 마무리; 데미지 +10" },
            { name: "폭발 발차기", desc: "쓰러뜨린 적이 폭발; 데미지 +2" },
          ],
        },
        "범위 +25%, 밀쳐내기 강화",
      ],
    },
    mudShot: {
      description: moveDescriptionsKo.mudShot,
      upgrades: [
        "데미지 +3",
        "범위 +20%",
        {
          fork: [
            { name: "쌍파도", desc: "뒤로도 발사; 데미지 +7" },
            { name: "진흙 구덩이", desc: "적을 약화시키는 진흙을 남김; 파도 +1" },
          ],
        },
        "재충전 0.25초 단축",
        "데미지 +4",
        {
          fork: [
            { name: "진흙 튀기기", desc: "적중 시 2개로 분열; 범위 +10%, 데미지 +5" },
            { name: "진흙 해일", desc: "날아갔다가 되돌아옴; 쿨타임 +0.1초" },
          ],
        },
        "파도 +1, 데미지 +4",
      ],
    },
    woodHammer: {
      description: moveDescriptionsKo.woodHammer,
      upgrades: [
        "데미지 +6",
        "범위 +20%",
        {
          fork: [
            { name: "나무 파편", desc: "적 2마리 추가 연쇄 공격; 쿨타임 -0.2초" },
            { name: "뿌리내리기", desc: "지속 피해 지대를 남김; 쿨타임 -0.3초" },
          ],
        },
        "데미지 +8",
        "범위 +20%",
        {
          fork: [
            { name: "대형 망치", desc: "쓰러뜨린 적이 폭발; 쿨타임 -0.2초, 데미지 -10" },
            { name: "벌목꾼", desc: "정예·보스에게 데미지 ×1.5; 쿨타임 -0.3초, 데미지 +11" },
          ],
        },
        "데미지 +10",
      ],
    },
    drillPeck: {
      description: moveDescriptionsKo.drillPeck,
      upgrades: [
        "데미지 +2",
        "드릴 +1",
        {
          fork: [
            { name: "유도 드릴", desc: "적을 추적; 데미지 +4" },
            { name: "쌍부리", desc: "뒤로도 발사; 데미지 -1" },
          ],
        },
        "재충전 0.25초 단축",
        "데미지 +3",
        {
          fork: [
            { name: "파편 폭발", desc: "적중 시 2개로 분열; 범위 +10%, 데미지 +4" },
            { name: "칼날 바람", desc: "지속 피해 지대를 남김; 범위 +25%" },
          ],
        },
        "드릴 +1, 데미지 +3",
      ],
    },
    leafTornado: {
      description: moveDescriptionsKo.leafTornado,
      upgrades: [
        "데미지 +2",
        "범위 +20%",
        {
          fork: [
            { name: "추적 회오리", desc: "적을 추적; 지속시간 +0.3초" },
            { name: "폭풍의 눈", desc: "주변을 선회; 데미지 +3" },
          ],
        },
        "회오리바람 +1",
        "데미지 +3",
        {
          fork: [
            { name: "초록 폭발", desc: "쓰러뜨린 적이 폭발; 범위 +20%" },
            { name: "낙엽 지대", desc: "지속 피해 지대를 남김; 범위 +20%" },
          ],
        },
        "회오리바람 +1, 데미지 +3",
      ],
    },
    flameCharge: {
      description: moveDescriptionsKo.flameCharge,
      upgrades: [
        "데미지 +5",
        "범위 +20%",
        {
          fork: [
            { name: "불꽃 자취", desc: "지속 피해 지대를 남김; 쿨타임 -0.3초" },
            { name: "불티", desc: "적 2마리 추가 연쇄 공격; 쿨타임 -0.4초" },
          ],
        },
        "데미지 +6",
        "범위 +20%",
        {
          fork: [
            { name: "유성", desc: "쓰러뜨린 적이 폭발; 쿨타임 -0.4초" },
            { name: "생명의 불씨", desc: "적중 시 HP 회복; 쿨타임 -0.3초" },
          ],
        },
        "데미지 +8, 범위 +15%",
      ],
    },
    needleArm: {
      description: moveDescriptionsKo.needleArm,
      upgrades: [
        "데미지 +3",
        "바늘 +2",
        {
          fork: [
            { name: "전기 가시", desc: "적 2마리 추가 연쇄 공격; 지속시간 +0.3초" },
            { name: "흡혈 가시", desc: "적중 시 HP 회복; 데미지 +16" },
          ],
        },
        "재충전 0.5초 단축",
        "데미지 +4",
        {
          fork: [
            { name: "선인장 폭탄", desc: "쓰러뜨린 적이 폭발; 타격 +1, 데미지 -4" },
            { name: "이중 가시", desc: "즉시 추가 공격 (50% 위력); 타격 +1, 데미지 +8" },
          ],
        },
        "가시 지속시간 +0.4초, 데미지 +4",
      ],
    },
    psybeam: {
      description: moveDescriptionsKo.psybeam,
      upgrades: [
        "고리 +2",
        "데미지 +3",
        {
          fork: [
            { name: "쌍광선", desc: "뒤로도 발사" },
            { name: "잔혹한 정신", desc: "상태 이상인 적에게 데미지 ×1.35; 상태 이상 확률 +6%" },
          ],
        },
        "재충전 0.25초 단축",
        "데미지 +3, 범위 +20%",
        {
          fork: [
            { name: "프리즘", desc: "적중 시 2개로 분열; 타격 +1" },
            { name: "초능력 오라", desc: "주변을 선회; 타격 +1" },
          ],
        },
        "데미지 +4, 혼란 확률 +6%",
      ],
    },
    darkestLariat: {
      description: moveDescriptionsKo.darkestLariat,
      upgrades: [
        "데미지 +3",
        "사거리 +20%",
        {
          fork: [
            { name: "올가미", desc: "적을 끌어당김; 지속시간 +0.3초" },
            { name: "어둠의 포옹", desc: "적중 시 HP 회복; 지속시간 +0.4초" },
          ],
        },
        "재충전 0.4초 단축",
        "데미지 +4",
        {
          fork: [
            { name: "네 개의 팔", desc: "2번째 넓은 쌍이 반대 방향으로 회전; 데미지 -2" },
            { name: "완전 격파", desc: "HP 12% 이하인 적 마무리; 팔 +1, 데미지 +9" },
          ],
        },
        "데미지 +5, 사거리 +15%",
      ],
    },
    sparklingAria: {
      description: moveDescriptionsKo.sparklingAria,
      upgrades: [
        "거품 +1",
        "데미지 +4",
        {
          fork: [
            { name: "조수 웅덩이", desc: "피해를 주는 웅덩이를 남김; 데미지 +4" },
            { name: "연쇄 거품", desc: "적 2마리 추가 연쇄 공격; 범위 +20%" },
          ],
        },
        "재충전 0.3초 단축",
        "거품 +2",
        {
          fork: [
            { name: "거품 폭탄", desc: "쓰러뜨린 적이 폭발; 데미지 +5" },
            { name: "앵콜", desc: "즉시 추가 공격 (50% 위력)" },
          ],
        },
        "거품 +2, 범위 +15%",
      ],
    },
    snipeShot: {
      description: moveDescriptionsKo.snipeShot,
      upgrades: [
        "데미지 +5",
        "적 +1마리 관통",
        {
          fork: [
            { name: "거물 사냥", desc: "정예·보스에게 데미지 ×1.5; 쿨타임 -0.2초, 데미지 +8" },
            { name: "파편탄", desc: "적중 시 2개로 분열; 쿨타임 -0.3초" },
          ],
        },
        "데미지 +6",
        "사격 +1",
        {
          fork: [
            { name: "마무리 사격", desc: "HP 12% 이하인 적 마무리; 관통 +1, 데미지 +13" },
            { name: "연쇄탄", desc: "적 2마리 추가 연쇄 공격; 관통 +2, 데미지 -9" },
          ],
        },
        "데미지 +8",
      ],
    },
    flowerTrick: {
      description: moveDescriptionsKo.flowerTrick,
      upgrades: [
        "꽃 +1",
        "데미지 +4",
        {
          fork: [
            { name: "꽃다발", desc: "적중 시 2개로 분열; 쿨타임 -0.1초" },
            { name: "정원", desc: "지속 피해 지대를 남김; 쿨타임 -0.2초" },
          ],
        },
        "꽃 +1",
        "데미지 +5",
        {
          fork: [
            { name: "꽃 폭발", desc: "쓰러뜨린 적이 폭발; 속도 증가, 데미지 -5" },
            { name: "치명적인 꽃", desc: "HP 12% 이하인 적 마무리; 속도 증가, 데미지 +6" },
          ],
        },
        "꽃 +2",
      ],
    },
    aquaStep: {
      description: moveDescriptionsKo.aquaStep,
      upgrades: [
        "데미지 +4",
        "사거리 +20%",
        {
          fork: [
            { name: "물웅덩이", desc: "지속 피해 지대를 남김; 쿨타임 -0.2초" },
            { name: "생명의 발걸음", desc: "적중 시 HP 회복; 쿨타임 -0.25초" },
          ],
        },
        "데미지 +5",
        "사거리 +20%",
        {
          fork: [
            { name: "연쇄 물보라", desc: "적 2마리 추가 연쇄 공격; 쿨타임 -0.25초, 데미지 +8" },
            { name: "최후의 파도", desc: "쓰러뜨린 적이 폭발; 쿨타임 -0.25초" },
          ],
        },
        "데미지 +6, 사거리 +20%",
      ],
    },
    ember: {
      description: '가장 가까운 적에게 불씨를 쏜다. 화상을 입힐 수 있다.',
      upgrades: [
        "불씨 +1",
        "데미지 +4, 화상 확률 +10%",
        {
          fork: [
            { name: "추적 불꽃", desc: "불씨가 적을 추적; 쿨타임 10% 감소" },
            { name: "불씨 자취", desc: "불타는 지대를 남기지만 비행 속도 감소" },
          ],
        },
        "불씨 +1",
        "적 +1마리 관통",
        {
          fork: [
            { name: "분쇄", desc: "적중 시 불씨 2개로 분열; 데미지 +4" },
            { name: "교차 사격", desc: "뒤로도 발사; 쿨타임 10% 증가" },
          ],
        },
        "불씨 +1, 범위 +25%",
      ],
    },
    fireSpin: {
      description: '불꽃이 주위를 회전한다. 화상을 입힐 수 있다.',
      upgrades: [
        "불꽃 +1",
        "범위 +20%",
        {
          fork: [
            { name: "이중 고리", desc: "2번째 넓은 고리가 반대 방향으로 회전; 데미지 -3" },
            { name: "불꽃 바퀴", desc: "불탄 지대를 남김, 데미지 +4; 회전 속도 감소" },
          ],
        },
        "지속시간 +0.6초",
        "불꽃 +1",
        {
          fork: [
            { name: "연소", desc: "쓰러뜨린 적이 폭발; 데미지 +5" },
            { name: "불꽃 소용돌이", desc: "즉시 추가 공격 (50% 위력); 화상 데미지 증가" },
          ],
        },
        "불꽃 +1, 회전 속도 증가",
      ],
    },
    waterGun: {
      description: '이동하는 방향으로 적을 관통하는 물줄기를 발사한다.',
      upgrades: [
        "물줄기 +1",
        "데미지 +3",
        {
          fork: [
            { name: "쌍물줄기", desc: "뒤로도 분사; 데미지 -1" },
            { name: "유도 물줄기", desc: "적을 추적하고 +1마리 관통; 속도 감소" },
          ],
        },
        "쿨타임 0.1초 감소",
        "물줄기 +1",
        {
          fork: [
            { name: "도탄", desc: "적 2마리에게 추가로 튕김; 데미지 +4" },
            { name: "저류", desc: "물줄기가 돌아오며 다시 타격; 속도 15% 감소" },
          ],
        },
        "물줄기 +1, 관통 +2",
      ],
    },
    whirlpool: {
      description: '가까이 다가오는 적에게 데미지를 주고 감속시키는 소용돌이를 계속 일으킨다.',
      upgrades: [
        "범위 +20%",
        "데미지 +2",
        {
          fork: [
            { name: "잔혹한 물살", desc: "상태 이상인 적에게 데미지 ×1.35; 쿨타임 -0.04초" },
            { name: "샘물", desc: "적중 시 HP 회복; 쿨타임 -0.08초" },
          ],
        },
        "범위 +20%",
        "데미지 +3",
        {
          fork: [
            { name: "거센 물살", desc: "적 2마리 추가 연쇄 공격; 쿨타임 -0.08초" },
            { name: "저류", desc: "HP 12% 이하인 적 마무리; 쿨타임 -0.08초" },
          ],
        },
        "범위 +25%, 데미지 +3",
      ],
    },
    razorLeaf: {
      description: '날카로운 잎이 부메랑처럼 날아갔다 돌아온다. 독 상태로 만들 수 있다.',
      upgrades: [
        "나뭇잎 +1",
        "데미지 +4",
        {
          fork: [
            { name: "쌍나뭇잎", desc: "뒤로도 투척; 데미지 -2" },
            { name: "강풍", desc: "즉시 추가 공격 (50% 위력); 범위 +20%" },
          ],
        },
        "나뭇잎 +1",
        "출발 속도 25% 증가",
        {
          fork: [
            { name: "가시덤불", desc: "바닥에 독 가시를 남김; 독 확률 +25%" },
            { name: "나뭇잎 폭발", desc: "쓰러뜨린 적이 폭발; 데미지 +5" },
          ],
        },
        "나뭇잎 +1",
      ],
    },
    vineWhip: {
      description: '덩굴로 멀리까지 가로로 후려친다. 독 상태로 만들 수 있다.',
      upgrades: [
        "뒤쪽도 공격",
        "데미지 +5",
        {
          fork: [
            { name: "뿌리", desc: "지속 피해 지대를 남김; 범위 +10%" },
            { name: "연쇄 채찍", desc: "적 2마리 추가 연쇄 공격; 범위 +20%" },
          ],
        },
        "쿨타임 0.15초 감소",
        "데미지 +6",
        {
          fork: [
            { name: "가시 폭발", desc: "쓰러뜨린 적이 폭발; 범위 +20%" },
            { name: "흡혈 채찍", desc: "적중 시 HP 회복; 범위 +10%" },
          ],
        },
        "데미지 +8",
      ],
    },
    swift: {
      description: '반드시 명중하는 유도 별을 쏜다.',
      upgrades: [
        "별 +1",
        "데미지 +3",
        {
          fork: [
            { name: "별똥별", desc: "적 2마리에게 추가로 튕김; 데미지 +6" },
            { name: "별자리", desc: "별 +1, 데미지 +2; 주변을 선회" },
          ],
        },
        "별 +1",
        "적 +1마리 관통",
        {
          fork: [
            { name: "혜성", desc: "쓰러뜨린 적에서 별 폭발; 데미지 +5" },
            { name: "별의 소나기", desc: "즉시 추가 공격 (50% 위력); 속도 12% 증가" },
          ],
        },
        "별 +2",
      ],
    },
    thunder: {
      description: '화면 안의 무작위 적에게 번개가 떨어진다. 마비시킬 수 있다.',
      upgrades: [
        "번개 +1",
        "데미지 +8",
        {
          fork: [
            { name: "폭풍", desc: "작은 번개 +2개, 메아리 공격 (50% 위력); 데미지 -6" },
            { name: "집중 번개", desc: "거대 번개 1개, 데미지 +34, 적 2마리에게 연쇄 공격" },
          ],
        },
        "번개 +1",
        "쿨타임 0.3초 감소",
        {
          fork: [
            { name: "피뢰침", desc: "쓰러뜨린 적에서 방전; 데미지 +10" },
            { name: "대전 지대", desc: "대전 지대를 남김; 마비 확률 +15%" },
          ],
        },
        "번개 +2",
      ],
    },
    sludgeBomb: {
      description: '독 웅덩이를 남기는 오물을 던진다. 독은 중첩된다.',
      upgrades: [
        "폭탄 +1",
        "데미지 +2, 독 데미지 25% 증가",
        {
          fork: [
            { name: "늪", desc: "적을 끌어당김; 지속시간 +0.3초" },
            { name: "맹독 비", desc: "즉시 추가 공격 (50% 위력)" },
          ],
        },
        "범위 +20%",
        "폭탄 +1",
        {
          fork: [
            { name: "부식", desc: "상태 이상인 적에게 데미지 ×1.35; 데미지 +1" },
            { name: "전염", desc: "쓰러뜨린 적에서 독 폭발; 데미지 +3" },
          ],
        },
        "폭탄 +1, 범위 +20%",
      ],
    },
    dreamEater: {
      description:
        moveDescriptionsKo.dreamEater,
      upgrades: [
        "물기 +1",
        "데미지 +4",
        {
          fork: [
            { name: "악몽", desc: "적 2마리 추가 연쇄 공격; 범위 +10%" },
            { name: "포식", desc: "적중 시 HP 회복; 범위 +20%" },
          ],
        },
        "수면 확률 +15%",
        "쿨타임 0.3초 감소",
        {
          fork: [
            { name: "꿈의 폭발", desc: "쓰러뜨린 적이 폭발" },
            { name: "탐식자", desc: "정예·보스에게 데미지 ×1.5; 데미지 +11" },
          ],
        },
        "물기 +2",
      ],
    },
    forcePalm: {
      description: moveDescriptionsKo.forcePalm,
      upgrades: [
        "데미지 +5",
        "마비 확률 +15%",
        {
          fork: [
            { name: "연쇄 충격", desc: "적 2마리 추가 연쇄 공격; 범위 +10%" },
            { name: "이중 장타", desc: "즉시 추가 공격 (50% 위력); 범위 +20%" },
          ],
        },
        "쿨타임 0.2초 감소",
        "장타 +1",
        {
          fork: [
            { name: "생명의 일격", desc: "HP 12% 이하인 적 마무리; 데미지 +16" },
            { name: "파동 물결", desc: "쓰러뜨린 적이 폭발; 데미지 +6" },
          ],
        },
        "범위 +25%, 마비 확률 +10%",
      ],
    },
    dig: {
      description: moveDescriptionsKo.dig,
      upgrades: [
        "데미지 +10",
        "지진 범위 20% 증가",
        {
          fork: [
            { name: "땅가르기", desc: "지속 피해 지대를 남김; 쿨타임 -0.4초" },
            { name: "기습", desc: "정예·보스에게 데미지 ×1.5; 쿨타임 -0.5초" },
          ],
        },
        "데미지 +12",
        "땅속 유지시간 +0.3초",
        {
          fork: [
            { name: "동굴 붕괴", desc: "쓰러뜨린 적이 폭발; 쿨타임 -0.5초" },
            { name: "함정", desc: "HP 12% 이하인 적 마무리; 쿨타임 -0.5초, 데미지 +18" },
          ],
        },
        "데미지 +14, 지진 범위 25% 증가",
      ],
    },
    twister: {
      description: moveDescriptionsKo.twister,
      upgrades: [
        "데미지 +2",
        "지속시간 +1초",
        {
          fork: [
            { name: "바람 자취", desc: "지속 피해 지대를 남김; 회오리 +1, 데미지 -1" },
            { name: "분쇄기", desc: "HP 12% 이하인 적 마무리; 회오리 +1" },
          ],
        },
        "회오리 크기 20% 증가",
        "데미지 +3",
        {
          fork: [
            { name: "용오름", desc: "쓰러뜨린 적이 폭발; 쿨타임 -0.5초" },
            { name: "폭풍우", desc: "즉시 추가 공격 (50% 위력); 쿨타임 -0.2초" },
          ],
        },
        "회오리 +1, 크기 15% 증가",
      ],
    },
    sandTomb: {
      description: moveDescriptionsKo.sandTomb,
      upgrades: [
        "데미지 +2",
        "소용돌이 크기 20% 증가",
        {
          fork: [
            { name: "생명의 모래", desc: "적중 시 HP 회복; 지속시간 +0.5초" },
            { name: "잔혹한 무덤", desc: "상태 이상인 적에게 데미지 ×1.35; 지속시간 +1초" },
          ],
        },
        "쿨타임 0.8초 감소",
        "데미지 +3",
        {
          fork: [
            { name: "매몰", desc: "쓰러뜨린 적이 폭발; 범위 +20%" },
            { name: "모래시계", desc: "HP 12% 이하인 적 마무리; 범위 +10%, 데미지 +4" },
          ],
        },
        "지속시간 +1.5초, 데미지 +2",
      ],
    },
    meteorMash: {
      description: moveDescriptionsKo.meteorMash,
      upgrades: [
        "유성 +1",
        "데미지 +5",
        {
          fork: [
            { name: "강철 파편", desc: "적 2마리 추가 연쇄 공격; 범위 +10%, 데미지 +13" },
            { name: "분화구", desc: "지속 피해 지대를 남김; 범위 +20%" },
          ],
        },
        "쿨타임 0.25초 감소",
        "데미지 +6",
        {
          fork: [
            { name: "충돌", desc: "쓰러뜨린 적이 폭발; 유성 +1" },
            { name: "유성우", desc: "즉시 추가 공격 (50% 위력); 데미지 +5" },
          ],
        },
        "데미지 +6, 범위 +20%",
      ],
    },
    zenHeadbutt: {
      description: moveDescriptionsKo.zenHeadbutt,
      upgrades: [
        "데미지 +5",
        "범위 +20%",
        {
          fork: [
            { name: "정신 파동", desc: "적 2마리 추가 연쇄 공격; 쿨타임 -0.15초" },
            { name: "명상", desc: "적중 시 HP 회복; 쿨타임 -0.2초" },
          ],
        },
        "데미지 +6",
        "밀쳐내기 강화, 범위 +15%",
        {
          fork: [
            { name: "지진 박치기", desc: "쓰러뜨린 적이 폭발; 쿨타임 -0.2초" },
            { name: "깨달음", desc: "HP 12% 이하인 적 마무리; 쿨타임 -0.15초, 데미지 +13" },
          ],
        },
        "데미지 +8",
      ],
    },
    foulPlay: {
      description: moveDescriptionsKo.foulPlay,
      upgrades: [
        "데미지 +4",
        "대상 +1",
        {
          fork: [
            { name: "배신", desc: "정예·보스에게 데미지 ×1.5; 쿨타임 -0.1초" },
            { name: "연쇄 발톱", desc: "적 2마리 추가 연쇄 공격; 쿨타임 -0.25초" },
          ],
        },
        "데미지 +5",
        "사거리 25% 증가",
        {
          fork: [
            { name: "비열한 일격", desc: "HP 12% 이하인 적 마무리; 대상 +1, 데미지 +14" },
            { name: "덫", desc: "쓰러뜨린 적이 폭발; 대상 +1, 데미지 -9" },
          ],
        },
        "데미지 +6",
      ],
    },
    bodySlam: {
      description: moveDescriptionsKo.bodySlam,
      upgrades: [
        "데미지 +6",
        "충격파 범위 20% 증가",
        {
          fork: [
            { name: "진동", desc: "지속 피해 지대를 남김; 쿨타임 -0.3초" },
            { name: "중력", desc: "착지 시 적 무리를 끌어당김; 쿨타임 -0.4초" },
          ],
        },
        "마비 확률 +15%",
        "데미지 +8",
        {
          fork: [
            { name: "중량급", desc: "쓰러뜨린 적이 폭발; 쿨타임 -0.4초" },
            { name: "전기 내리치기", desc: "적 2마리 추가 연쇄 공격; 쿨타임 -0.4초" },
          ],
        },
        "데미지 +10, 충격파 범위 25% 증가",
      ],
    },
    dynamicPunch: {
      description: moveDescriptionsKo.dynamicPunch,
      upgrades: [
        "데미지 +10",
        "폭발 범위 20% 증가",
        {
          fork: [
            { name: "연쇄 주먹", desc: "적 2마리 추가 연쇄 공격; 쿨타임 -0.3초, 데미지 +10" },
            { name: "갈라진 바닥", desc: "지속 피해 지대를 남김; 쿨타임 -0.4초" },
          ],
        },
        "데미지 +12",
        "폭발 범위 20% 증가",
        {
          fork: [
            { name: "다이너마이트", desc: "쓰러뜨린 적이 폭발; 쿨타임 -0.4초, 데미지 -13" },
            { name: "챔피언", desc: "정예·보스에게 데미지 ×1.5; 쿨타임 -0.3초, 데미지 +28" },
          ],
        },
        "데미지 +16",
      ],
    },
    rollout: {
      description: moveDescriptionsKo.rollout,
      upgrades: [
        "데미지 +2",
        "구르기 지속시간 +0.5초",
        {
          fork: [
            { name: "대전 바위", desc: "적 2마리 추가 연쇄 공격; 쿨타임 -0.5초" },
            { name: "생명의 구르기", desc: "적중 시 HP 회복; 쿨타임 -0.6초, 데미지 +3" },
          ],
        },
        "데미지 +2",
        "범위 +20%",
        {
          fork: [
            { name: "눈사태", desc: "쓰러뜨린 적이 폭발; 지속시간 +0.5초" },
            { name: "스팀롤러", desc: "정예·보스에게 데미지 ×1.5; 지속시간 +0.3초, 데미지 +16" },
          ],
        },
        "데미지 +3, 쿨타임 0.5초 감소",
      ],
    },
    iceBall: {
      description: moveDescriptionsKo.iceBall,
      upgrades: [
        "데미지 +3",
        "구슬 +1",
        {
          fork: [
            { name: "얼음 자취", desc: "지속 피해 지대를 남김; 속도 증가" },
            { name: "연쇄 우박", desc: "적 2마리 추가 연쇄 공격; 데미지 +6" },
          ],
        },
        "쿨타임 0.2초 감소",
        "데미지 +4",
        {
          fork: [
            { name: "눈 무너뜨리기", desc: "쓰러뜨린 적이 폭발; 범위 +20%" },
            { name: "분쇄", desc: "HP 12% 이하인 적 마무리; 범위 +10%" },
          ],
        },
        "구슬 +1",
      ],
    },
    furyCutter: {
      description: moveDescriptionsKo.furyCutter,
      upgrades: [
        "데미지 +2",
        "범위 +20%",
        {
          fork: [
            { name: "연쇄 베기", desc: "적 2마리 추가 연쇄 공격; 쿨타임 -0.05초" },
            { name: "흡혈 낫", desc: "적중 시 HP 회복; 쿨타임 -0.1초" },
          ],
        },
        "데미지 +3",
        "범위 +20%",
        {
          fork: [
            { name: "수확", desc: "HP 12% 이하인 적 마무리; 쿨타임 -0.1초" },
            { name: "폭발 베기", desc: "쓰러뜨린 적이 폭발; 쿨타임 -0.1초" },
          ],
        },
        "데미지 +4",
      ],
    },
    sacredSword: {
      description: moveDescriptionsKo.sacredSword,
      upgrades: [
        "데미지 +5",
        "칼날 크기 20% 증가",
        {
          fork: [
            { name: "성스러운 자취", desc: "지속 피해 지대를 남김; 쿨타임 -0.2초" },
            { name: "용 사냥꾼", desc: "정예·보스에게 데미지 ×1.5; 쿨타임 -0.25초, 데미지 +7" },
          ],
        },
        "데미지 +6",
        "칼날 크기 20% 증가",
        {
          fork: [
            { name: "이중 베기", desc: "즉시 추가 공격 (50% 위력); 데미지 +6" },
            { name: "심판", desc: "쓰러뜨린 적이 폭발; 휘두르기 +1" },
          ],
        },
        "데미지 +7",
      ],
    },
    dragonDarts: {
      description: moveDescriptionsKo.dragonDarts,
      upgrades: [
        "데미지 +3",
        "다트 속도 증가",
        {
          fork: [
            { name: "쌍다트", desc: "적중 시 2개로 분열; 쿨타임 -0.1초, 데미지 +16" },
            { name: "호위", desc: "주변을 선회; 쿨타임 -0.15초, 데미지 -7" },
          ],
        },
        "데미지 +4",
        "다트 +2",
        {
          fork: [
            { name: "도탄", desc: "적 2마리에게 추가로 튕김; 데미지 +3" },
            { name: "보스 사냥꾼", desc: "정예·보스에게 데미지 ×1.5; 데미지 +16" },
          ],
        },
        "쿨타임 0.2초 감소, 데미지 +3",
      ],
    },
    snarl: {
      description: moveDescriptionsKo.snarl,
      upgrades: [
        "데미지 +3",
        "파도 크기 20% 증가",
        {
          fork: [
            { name: "연쇄 울부짖기", desc: "적 2마리 추가 연쇄 공격; 쿨타임 -0.15초" },
            { name: "굶주림", desc: "적중 시 HP 회복; 쿨타임 -0.25초" },
          ],
        },
        "데미지 +4",
        "파도 +1",
        {
          fork: [
            { name: "무리 폭발", desc: "쓰러뜨린 적이 폭발; 범위 +20%" },
            { name: "포식자", desc: "HP 12% 이하인 적 마무리; 범위 +10%" },
          ],
        },
        "데미지 +5, 파도 +1",
      ],
    },
    gigaImpact: {
      description: moveDescriptionsKo.gigaImpact,
      upgrades: [
        "데미지 +10",
        "충돌 범위 20% 증가",
        {
          fork: [
            { name: "붕괴", desc: "적을 끌어당김; 쿨타임 -0.6초, 데미지 +10" },
            { name: "충격파", desc: "적 2마리 추가 연쇄 공격; 쿨타임 -0.8초" },
          ],
        },
        "데미지 +14",
        "숨 고르기 0.25초 단축",
        {
          fork: [
            { name: "대재앙", desc: "쓰러뜨린 적이 폭발; 쿨타임 -0.8초" },
            { name: "거인", desc: "정예·보스에게 데미지 ×1.5; 쿨타임 -0.6초, 데미지 +15" },
          ],
        },
        "데미지 +18, 충돌 범위 25% 증가",
      ],
    },
    flail: {
      description: moveDescriptionsKo.flail,
      upgrades: [
        "데미지 +3",
        "따귀 +1",
        {
          fork: [
            { name: "재기", desc: "적중 시 HP 회복; 범위 +10%" },
            { name: "연쇄 후려치기", desc: "적 2마리 추가 연쇄 공격; 범위 +20%" },
          ],
        },
        "쿨타임 0.15초 감소",
        "데미지 +4",
        {
          fork: [
            { name: "필사의 발버둥", desc: "쓰러뜨린 적이 폭발; 따귀 +1" },
            { name: "최후의 저항", desc: "HP 12% 이하인 적 마무리; 따귀 +1, 데미지 +4" },
          ],
        },
        "데미지 +5, 범위 +15%",
      ],
    },
    boneRush: {
      description: moveDescriptionsKo.boneRush,
      upgrades: [
        "데미지 +3",
        "범위 +20%",
        {
          fork: [
            { name: "연쇄 뼈 공격", desc: "적 2마리 추가 연쇄 공격; 쿨타임 -0.1초" },
            { name: "뼈 무덤", desc: "지속 피해 지대를 남김; 쿨타임 -0.2초" },
          ],
        },
        "휘두르기 +1",
        "데미지 +4",
        {
          fork: [
            { name: "뼈 폭발", desc: "쓰러뜨린 적이 폭발; 범위 +20%" },
            { name: "곤봉", desc: "정예·보스에게 데미지 ×1.5; 범위 +10%" },
          ],
        },
        "휘두르기 +1, 데미지 +4",
      ],
    },
    metronome: {
      description: moveDescriptionsKo.metronome,
      upgrades: [
        "위력 +10%",
        "쿨타임 0.2초 감소",
        {
          fork: [
            { name: "앵콜", desc: "즉시 추가 공격 (50% 위력)" },
            { name: "스파크", desc: "적 2마리 추가 연쇄 공격; 데미지 +4" },
          ],
        },
        "쿨타임 0.2초 감소",
        "위력 +15%",
        {
          fork: [
            { name: "기습 공격", desc: "쓰러뜨린 적이 폭발; 쿨타임 -0.2초" },
            { name: "혼돈", desc: "지속 피해 지대를 남김; 쿨타임 -0.2초" },
          ],
        },
        "위력 +15%",
      ],
    },
    echoedVoice: {
      description: moveDescriptionsKo.echoedVoice,
      upgrades: [
        "데미지 +3",
        "파도 크기 20% 증가",
        {
          fork: [
            { name: "잔향", desc: "즉시 추가 공격 (50% 위력); 데미지 -4" },
            { name: "음향 반사", desc: "적 2마리 추가 연쇄 공격; 쿨타임 -0.2초, 데미지 +4" },
          ],
        },
        "데미지 +3",
        "파도 크기 20% 증가",
        {
          fork: [
            { name: "폭음", desc: "쓰러뜨린 적이 폭발; 쿨타임 -0.2초" },
            { name: "최후의 외침", desc: "HP 12% 이하인 적 마무리; 쿨타임 -0.2초" },
          ],
        },
        "데미지 +4",
      ],
    },
    curse: {
      description:
        moveDescriptionsKo.curse,
      upgrades: [
        "매초 최대 HP의 +0.3% 회복",
        "지속시간 +2초",
        {
          fork: [
            { name: "계약", desc: "저주로 HP 회복; 쿨타임 -0.8초" },
            { name: "역병", desc: "정예·보스에게 데미지 ×1.5; 쿨타임 -1초" },
          ],
        },
        "매초 최대 HP의 +0.3% 회복",
        "저주 대상 +1",
        {
          fork: [
            { name: "유령의 습격", desc: "쓰러뜨린 적이 폭발; 쿨타임 -1초" },
            { name: "선고", desc: "HP 12% 이하인 적 마무리; 쿨타임 -0.8초" },
          ],
        },
        "매초 최대 HP의 +0.4% 회복",
      ],
    },
    gust: {
      description: '원형으로 돌풍을 일으켜 주위의 적을 모두 날려 버린다.',
      upgrades: [
        "데미지 +3",
        "범위 +20%",
        {
          fork: [
            { name: "생명의 산들바람", desc: "적중 시 HP 회복; 쿨타임 -0.3초" },
            { name: "이중 돌풍", desc: "즉시 추가 공격 (50% 위력); 쿨타임 -0.1초" },
          ],
        },
        "돌풍 +1",
        "데미지 +4",
        {
          fork: [
            { name: "강풍", desc: "쓰러뜨린 적이 폭발; 범위 +30%" },
            { name: "전기 바람", desc: "적 2마리 추가 연쇄 공격; 범위 +20%" },
          ],
        },
        "돌풍 +1",
      ],
    },
    machPunch: {
      description: '가장 가까운 적에게 빠른 펀치를 연속으로 날린다.',
      upgrades: [
        "주먹질 +1",
        "데미지 +3",
        {
          fork: [
            { name: "연쇄 찌르기", desc: "적 2마리 추가 연쇄 공격; 범위 +10%" },
            { name: "생명의 찌르기", desc: "적중 시 HP 회복; 범위 +20%" },
          ],
        },
        "주먹질 +1",
        "쿨타임 0.2초 감소",
        {
          fork: [
            { name: "완전 격파", desc: "HP 12% 이하인 적 마무리; 데미지 +6" },
            { name: "소닉붐", desc: "쓰러뜨린 적이 폭발; 데미지 +5" },
          ],
        },
        "주먹질 +2",
      ],
    },
    flashCannon: {
      description: '일직선상의 모든 것을 관통하는 강철 구슬을 쏜다.',
      upgrades: [
        "데미지 +6",
        "범위 +25%",
        {
          fork: [
            { name: "프리즘", desc: "적중 시 2개로 분열; 쿨타임 -0.2초" },
            { name: "반사판", desc: "날아갔다가 되돌아옴; 쿨타임 -0.1초" },
          ],
        },
        "구슬 +1",
        "데미지 +8",
        {
          fork: [
            { name: "쌍포", desc: "뒤로도 발사; 범위 +10%" },
            { name: "장갑 관통", desc: "정예·보스에게 데미지 ×1.5; 범위 +25%" },
          ],
        },
        "구슬 +1",
      ],
    },
    spiritShackle: {
      description: '적을 관통하는 유령 화살을 부채꼴로 쏜다.',
      upgrades: [
        "화살 +1",
        "데미지 +3",
        {
          fork: [
            { name: "유도 화살", desc: "적을 추적; 관통 +1" },
            { name: "교차 사격", desc: "뒤로도 발사" },
          ],
        },
        "화살 +1",
        "쿨타임 0.2초 감소",
        {
          fork: [
            { name: "도탄", desc: "적 2마리에게 추가로 튕김; 데미지 +1" },
            { name: "잔혹한 속박", desc: "상태 이상인 적에게 데미지 ×1.35; 데미지 +6" },
          ],
        },
        "화살 +2",
      ],
    },
    waterShuriken: {
      description: '빠르고 정확한 유도 물 수리검을 던진다.',
      upgrades: [
        "수리검 +1",
        "데미지 +2",
        {
          fork: [
            { name: "도탄", desc: "적 2마리에게 추가로 튕김; 쿨타임 -0.08초, 데미지 +6" },
            { name: "물의 자취", desc: "지속 피해 지대를 남김; 쿨타임 -0.12초, 데미지 +7" },
          ],
        },
        "수리검 +1",
        "데미지 +3",
        {
          fork: [
            { name: "쌍별", desc: "적중 시 2개로 분열; 속도 증가" },
            { name: "최후의 베기", desc: "HP 12% 이하인 적 마무리; 속도 증가, 데미지 +2" },
          ],
        },
        "수리검 +2",
      ],
    },
    crunch: {
      description: '가장 가까운 적들을 강하게 깨문다.',
      upgrades: [
        "데미지 +6",
        "물기 +1",
        {
          fork: [
            { name: "연쇄 물기", desc: "물기가 주변 적 2마리에게 연쇄 공격; 데미지 -3" },
            { name: "이중 물기", desc: "즉시 추가 공격 (50% 위력); 범위 +15%" },
          ],
        },
        "쿨타임 0.2초 감소",
        "물기 +1",
        {
          fork: [
            { name: "굶주린 이빨", desc: "쓰러뜨린 적에서 그림자 폭발; 데미지 +8" },
            { name: "그림자 물기", desc: "피해를 주는 그림자를 남김; 범위 +20%" },
          ],
        },
        "물기 +1, 범위 +20%",
      ],
    },
    pyroBall: {
      description: '착지하면 폭발하는 불덩이를 걷어찬다.',
      upgrades: [
        "구슬 +1",
        "데미지 +6",
        {
          fork: [
            { name: "잿불", desc: "지속 피해 지대를 남김; 범위 +15%" },
            { name: "불티 공", desc: "적 2마리 추가 연쇄 공격; 범위 +25%" },
          ],
        },
        "쿨타임 0.3초 감소",
        "데미지 +8",
        {
          fork: [
            { name: "결정적인 슛", desc: "쓰러뜨린 적이 폭발; 구슬 +1" },
            { name: "이중 튀기기", desc: "즉시 추가 공격 (50% 위력)" },
          ],
        },
        "범위 +25%, 데미지 +6",
      ],
    },
    psyshock: {
      description: '염동력 구슬이 사방으로 날아갔다 돌아온다.',
      upgrades: [
        "구슬 +1",
        "데미지 +3",
        {
          fork: [
            { name: "초능력 궤도", desc: "주변을 선회; 범위 +10%" },
            { name: "파편", desc: "적중 시 2개로 분열; 범위 +20%" },
          ],
        },
        "구슬 +1",
        "데미지 +4",
        {
          fork: [
            { name: "연쇄 정신 공격", desc: "적 2마리 추가 연쇄 공격; 속도 증가" },
            { name: "정신 분쇄", desc: "정예·보스에게 데미지 ×1.5; 속도 증가" },
          ],
        },
        "구슬 +2",
      ],
    },
    earthquake: {
      description: '진동을 일으켜 주위의 모든 것에 데미지를 준다. 쿨타임이 길다.',
      upgrades: [
        "데미지 +8",
        "범위 +20%",
        {
          fork: [
            { name: "여진", desc: "즉시 추가 공격 (50% 위력); 쿨타임 -0.2초" },
            { name: "대전 단층", desc: "적 2마리 추가 연쇄 공격; 쿨타임 -0.4초" },
          ],
        },
        "진동 +1",
        "데미지 +10",
        {
          fork: [
            { name: "단층선", desc: "쓰러뜨린 적이 폭발; 범위 +25%" },
            { name: "심연", desc: "HP 12% 이하인 적 마무리; 범위 +15%" },
          ],
        },
        "진동 +1, 데미지 +10",
      ],
    },
    drumBeating: {
      description: '북을 울려 적을 감속시키는 뿌리의 파동을 일으킨다.',
      upgrades: [
        "데미지 +4",
        "범위 +20%",
        {
          fork: [
            { name: "잔혹한 박자", desc: "상태 이상인 적에게 데미지 ×1.35; 박자 +1" },
            { name: "생명의 박자", desc: "적중 시 HP 회복; 박자 +1" },
          ],
        },
        "쿨타임 0.25초 감소",
        "데미지 +5",
        {
          fork: [
            { name: "밀림의 메아리", desc: "적 2마리 추가 연쇄 공격; 박자 +1" },
            { name: "전쟁 북소리", desc: "쓰러뜨린 적이 폭발; 박자 +1" },
          ],
        },
        "범위 +25%, 데미지 +5",
      ],
    },
    disarmingVoice: {
      description: '사방으로 하트의 파동을 퍼뜨린다.',
      upgrades: [
        "하트 +2",
        "데미지 +3",
        {
          fork: [
            { name: "튀어 오르는 하트", desc: "적 2마리에게 추가로 튕김; 데미지 +9" },
            { name: "세레나데", desc: "주변을 선회; 데미지 -4" },
          ],
        },
        "쿨타임 0.2초 감소",
        "하트 +2",
        {
          fork: [
            { name: "부서진 하트", desc: "적중 시 2개로 분열; 데미지 +2" },
            { name: "달콤한 목소리", desc: "적중 시 HP 회복; 데미지 +4" },
          ],
        },
        "하트 +4",
      ],
    },
    torchSong: {
      description: '타오르는 노래로 사방에 불꽃 음표를 날린다.',
      upgrades: [
        "음표 +1",
        "데미지 +3",
        {
          fork: [
            { name: "유도 음표", desc: "적을 추적; 관통 +1, 데미지 +10" },
            { name: "모닥불", desc: "주변을 선회; 데미지 -4" },
          ],
        },
        "음표 +2",
        "쿨타임 0.3초 감소",
        {
          fork: [
            { name: "불꽃놀이", desc: "쓰러뜨린 적이 폭발; 데미지 +5" },
            { name: "불타는 무대", desc: "지속 피해 지대를 남김; 데미지 +3" },
          ],
        },
        "음표 +2, 범위 +20%",
      ],
    },
    leafBlade: {
      description: '회전하는 칼날로 주위의 모든 것을 벤다.',
      upgrades: [
        "데미지 +4",
        "범위 +20%",
        {
          fork: [
            { name: "쌍칼날", desc: "2번째 넓은 휘두르기가 반대 방향으로 회전" },
            { name: "깔끔한 베기", desc: "HP 12% 이하인 적 마무리; 칼날 +1" },
          ],
        },
        "쿨타임 0.2초 감소",
        "데미지 +6",
        {
          fork: [
            { name: "폭발 베기", desc: "쓰러뜨린 적이 폭발; 범위 +20%" },
            { name: "수액", desc: "적중 시 HP 회복; 범위 +10%" },
          ],
        },
        "칼날 +1",
      ],
    },
    razorShell: {
      description: '날카로운 조개껍질로 앞쪽을 호 모양으로 벤다.',
      upgrades: [
        "뒤쪽도 공격",
        "데미지 +5",
        {
          fork: [
            { name: "연쇄 베기", desc: "적 2마리 추가 연쇄 공격; 범위 +10%" },
            { name: "진주", desc: "적중 시 HP 회복; 범위 +20%" },
          ],
        },
        "쿨타임 0.15초 감소",
        "데미지 +6",
        {
          fork: [
            { name: "껍질 폭탄", desc: "쓰러뜨린 적이 폭발; 범위 +20%" },
            { name: "잔혹한 껍질", desc: "상태 이상인 적에게 데미지 ×1.35; 범위 +10%" },
          ],
        },
        "베기 +1, 데미지 +6",
      ],
    },
    quickAttack: {
      description: 'Shift 또는 돌진 버튼을 누르면 앞쪽의 적을 향해 짧게 돌진한다. 지나가는 길의 모든 적을 공격하며 잠깐 무적이 된다.',
      upgrades: [
        "데미지 +5",
        "범위 +20%",
        {
          fork: [
            { name: "잔상", desc: "지속 피해 지대를 남김; 쿨타임 -0.2초" },
            { name: "순간 이동", desc: "적 2마리 추가 연쇄 공격; 쿨타임 -0.3초, 데미지 +11" },
          ],
        },
        "데미지 +6",
        "돌진 거리 증가",
        {
          fork: [
            { name: "음속 충돌", desc: "쓰러뜨린 적이 폭발; 쿨타임 -0.3초, 데미지 -8" },
            { name: "덮치기", desc: "HP 12% 이하인 적 마무리; 쿨타임 -0.3초, 데미지 +26" },
          ],
        },
        "데미지 +8, 범위 +20%",
      ],
    },
    shockWave: {
      description: '전격이 적에게서 적으로 연쇄하며, 튈 때마다 약해진다. 마비시킬 수 있다.',
      upgrades: [
        "도약 +1",
        "데미지 +4",
        {
          fork: [
            { name: "과부하", desc: "쓰러뜨린 적이 폭발; 쿨타임 6% 감소" },
            { name: "메아리 전류", desc: "즉시 추가 공격 (50% 위력); 도약 -1" },
          ],
        },
        "도약 +1",
        "데미지 +5, 마비 확률 +10%",
        {
          fork: [
            { name: "정전기 지대", desc: "도약마다 불티를 남김; 마비 확률 +10%" },
            { name: "분기", desc: "도약마다 적 2마리에게 추가 연쇄 공격; 데미지 -2" },
          ],
        },
        "도약 +2",
      ],
    },
    hex: {
      description: '저주가 적에게서 적으로 연쇄한다. 상태 이상에 걸린 적에게는 ×1.7 데미지를 준다.',
      upgrades: [
        "도약 +1",
        "데미지 +4",
        {
          fork: [
            { name: "저주 폭발", desc: "쓰러뜨린 적이 폭발; 쿨타임 -0.1초, 데미지 -6" },
            { name: "영혼 흡수", desc: "적중 시 HP 회복; 쿨타임 -0.2초, 데미지 +8" },
          ],
        },
        "도약 +1",
        "데미지 +5",
        {
          fork: [
            { name: "유령불", desc: "지속 피해 지대를 남김; 범위 +25%, 데미지 -6" },
            { name: "저주받은 메아리", desc: "즉시 추가 공격 (50% 위력); 범위 +10%, 데미지 +11" },
          ],
        },
        "도약 +2",
      ],
    },
    toxicSpikes: {
      description: '적이 밟으면 터지는 독 가시를 땅에 뿌린다. 아무도 밟지 않으면 절반의 데미지로 터진다.',
      upgrades: [
        "데미지 +6",
        "가시 +1",
        {
          fork: [
            { name: "전기 가시", desc: "적 2마리 추가 연쇄 공격; 범위 +20%" },
            { name: "맹독 웅덩이", desc: "지속 피해 지대를 남김; 범위 +10%" },
          ],
        },
        "지속시간 +2초",
        "데미지 +8, 독 데미지 25% 증가",
        {
          fork: [
            { name: "연쇄 반응", desc: "쓰러뜨린 적이 폭발; 가시 +1" },
            { name: "잔혹한 독", desc: "상태 이상인 적에게 데미지 ×1.35; 가시 +1" },
          ],
        },
        "범위 +25%, 데미지 +6",
      ],
    },
    willOWisp: {
      description: '가장 가까운 적에게 스스로 불꽃을 쏘는 도깨비불을 남긴다. 화상을 입힐 수 있다.',
      upgrades: [
        "데미지 +3",
        "지속시간 +1.5초",
        {
          fork: [
            { name: "떠도는 불꽃", desc: "지속 피해 지대를 남김; 불꽃 +1, 데미지 +6" },
            { name: "장작불", desc: "쓰러뜨린 적이 폭발; 불꽃 +1, 데미지 -2" },
          ],
        },
        "쿨타임 1초 감소",
        "데미지 +4, 화상 확률 +10%",
        {
          fork: [
            { name: "쌍도깨비불", desc: "즉시 추가 공격 (50% 위력); 지속시간 +0.5초" },
            { name: "등불", desc: "정예·보스에게 데미지 ×1.5; 지속시간 +1.5초, 데미지 +4" },
          ],
        },
        "일제 사격당 불꽃 +1개, 데미지 +3",
      ],
    },
    iceShard: {
      description: '얼음 조각을 던진다. 조각은 점점 느려지다 땅에 박혀, 밟는 적에게 데미지를 주고 감속시킨다.',
      upgrades: [
        "파편 +1",
        "데미지 +3",
        {
          fork: [
            { name: "공전하는 파편", desc: "주변을 선회; 데미지 +6" },
            { name: "쌍부채", desc: "뒤로도 발사; 지속시간 +0.5초, 데미지 -2" },
          ],
        },
        "파편 +1",
        "쿨타임 0.2초 감소",
        {
          fork: [
            { name: "파편", desc: "적중 시 2개로 분열; 데미지 +3" },
            { name: "분쇄", desc: "HP 12% 이하인 적 마무리; 상태 이상 확률 +20%, 데미지 +2" },
          ],
        },
        "파편 +2, 범위 +20%",
      ],
    },
    rockTomb: {
      description: '가장 가까운 적들 위로 바위가 떨어져, 맞은 적의 발을 묶고 감속시킨다. 그림자로 낙하 지점을 알 수 있다.',
      upgrades: [
        "큰 바위 +1",
        "데미지 +6",
        {
          fork: [
            { name: "잔해", desc: "지속 피해 지대를 남김; 범위 +10%, 데미지 +3" },
            { name: "바위 파편", desc: "적 2마리 추가 연쇄 공격; 범위 +20%" },
          ],
        },
        "쿨타임 0.3초 감소",
        "큰 바위 +1",
        {
          fork: [
            { name: "산사태", desc: "쓰러뜨린 적이 폭발; 데미지 +8" },
            { name: "묘소", desc: "정예·보스에게 데미지 ×1.5; 데미지 +11" },
          ],
        },
        "큰 바위 +1, 범위 +20%",
      ],
    },
    pinMissile: {
      description: '양옆에서 발사된 바늘이 곡선을 그리며 가장 가까운 적에게 날아간다. 독 상태로 만들 수 있다.',
      upgrades: [
        "바늘 +1",
        "데미지 +2",
        {
          fork: [
            { name: "도탄", desc: "적 2마리에게 추가로 튕김" },
            { name: "군집", desc: "뒤로도 발사; 바늘 +1, 데미지 -1" },
          ],
        },
        "쿨타임 0.15초 감소",
        "적 +1마리 관통",
        {
          fork: [
            { name: "독침", desc: "적중 시 2개로 분열; 데미지 +2" },
            { name: "최후의 독침", desc: "HP 12% 이하인 적 마무리; 데미지 +5" },
          ],
        },
        "바늘 +2",
      ],
    },
    dragonBreath: {
      description: '가장 가까운 적에게 용의 불꽃을 부채꼴로 내뿜는다. 부채꼴 중앙일수록 강하다. 화상을 입힐 수 있다.',
      upgrades: [
        "부채꼴 범위에 솜뭉치 +1개 추가",
        "데미지 +3",
        {
          fork: [
            { name: "쌍숨결", desc: "뒤로도 발사; 데미지 +3" },
            { name: "불탄 대지", desc: "지속 피해 지대를 남김; 범위 +20%" },
          ],
        },
        "쿨타임 0.15초 감소",
        "부채꼴 범위에 솜뭉치 +1개 추가",
        {
          fork: [
            { name: "용의 격노", desc: "쓰러뜨린 적이 폭발; 데미지 +4" },
            { name: "잔혹한 불꽃", desc: "상태 이상인 적에게 데미지 ×1.35; 상태 이상 확률 +20%, 데미지 +3" },
          ],
        },
        "부채꼴 범위에 솜뭉치 +2개 추가",
      ],
    },
    flameWheel: {
      description: moveDescriptionsKo.flameWheel,
      upgrades: [
        "데미지 +3",
        "불꽃 지속시간 +0.6초",
        {
          fork: [
            { name: "생명의 바퀴", desc: "적중 시 HP 회복; 범위 +10%" },
            { name: "불티 바퀴", desc: "적 2마리 추가 연쇄 공격; 범위 +20%" },
          ],
        },
        "데미지 +3, 화상 확률 +10%",
        "불꽃 지속시간 +0.6초",
        {
          fork: [
            { name: "폭발 바퀴", desc: "쓰러뜨린 적이 폭발; 데미지 +4" },
            { name: "잔혹한 바퀴", desc: "상태 이상인 적에게 데미지 ×1.35; 데미지 +2" },
          ],
        },
        "데미지 +3, 범위 +25%",
      ],
    },
    solarBeam: {
      description: moveDescriptionsKo.solarBeam,
      upgrades: [
        "데미지 +8",
        "범위 +15%",
        {
          fork: [
            { name: "프리즘 광선", desc: "적 2마리 추가 연쇄 공격; 쿨타임 -0.4초, 데미지 +9" },
            { name: "불탄 길", desc: "지속 피해 지대를 남김; 쿨타임 -0.5초" },
          ],
        },
        "데미지 +10",
        "광선 +1",
        {
          fork: [
            { name: "초신성", desc: "쓰러뜨린 적이 폭발; 범위 +20%" },
            { name: "작열하는 태양", desc: "정예·보스에게 데미지 ×1.5; 범위 +10%" },
          ],
        },
        "데미지 +12, 쿨타임 0.4초 감소",
      ],
    },
    brine: {
      description: moveDescriptionsKo.brine,
      upgrades: [
        "대상 +1",
        "데미지 +5",
        {
          fork: [
            { name: "연쇄 물보라", desc: "적 2마리 추가 연쇄 공격; 쿨타임 -0.1초" },
            { name: "소금 웅덩이", desc: "지속 피해 지대를 남김; 쿨타임 -0.2초, 데미지 +4" },
          ],
        },
        "범위 +25%",
        "대상 +1",
        {
          fork: [
            { name: "마무리 물보라", desc: "HP 12% 이하인 적 마무리; 데미지 +10" },
            { name: "소금 해일", desc: "쓰러뜨린 적이 폭발; 데미지 +7" },
          ],
        },
        "대상 +1, 데미지 +5",
      ],
    },
    electroBall: {
      description: moveDescriptionsKo.electroBall,
      upgrades: [
        "데미지 +5",
        "적 +1마리 관통",
        {
          fork: [
            { name: "유도 구슬", desc: "적을 추적; 쿨타임 -0.1초, 데미지 +20" },
            { name: "방전", desc: "적 2마리 추가 연쇄 공격; 쿨타임 -0.2초, 데미지 -7" },
          ],
        },
        "구슬 +1",
        "데미지 +6, 마비 확률 +10%",
        {
          fork: [
            { name: "분열 구슬", desc: "적중 시 2개로 분열; 범위 +15%" },
            { name: '요요', desc: "날아갔다가 되돌아옴; 범위 +25%" },
          ],
        },
        "구슬 +1, 데미지 +5",
      ],
    },
    venoshock: {
      description: moveDescriptionsKo.venoshock,
      upgrades: [
        "덩어리 +1",
        "데미지 +4",
        {
          fork: [
            { name: "물방울", desc: "적중 시 2개로 분열; 쿨타임 -0.1초" },
            { name: "독의 자취", desc: "독 지대를 남김; 쿨타임 -0.15초" },
          ],
        },
        "덩어리 +1",
        "데미지 +5, 독 확률 +10%",
        {
          fork: [
            { name: "도탄", desc: "적 2마리에게 추가로 튕김; 데미지 +4" },
            { name: "맹독 폭발", desc: "쓰러뜨린 적이 폭발; 관통 +1" },
          ],
        },
        "덩어리 +1, 데미지 +4",
      ],
    },
    selfDestruct: {
      description: moveDescriptionsKo.selfDestruct,
      upgrades: [
        "데미지 +15",
        "범위 +15%",
        {
          fork: [
            { name: "재구성", desc: "폭발 시 HP 회복; 쿨타임 -0.7초" },
            { name: "불타는 분화구", desc: "지속 피해 지대를 남김; 쿨타임 -1초" },
          ],
        },
        "데미지 +20",
        "범위 +15%",
        {
          fork: [
            { name: "연쇄 반응", desc: "쓰러뜨린 적이 폭발; 쿨타임 -1초" },
            { name: "결사 돌격", desc: "정예·보스에게 데미지 ×1.5; 쿨타임 -0.8초" },
          ],
        },
        "데미지 +25, 범위 +20%",
      ],
    },
    roost: {
      description: moveDescriptionsKo.roost,
      upgrades: [
        "돌풍 데미지 +6",
        "매초 HP 2.5% 회복",
        {
          fork: [
            { name: "빠른 착지", desc: "자리 잡는 속도 2배, 회복량 30% 감소" },
            { name: "바람 둥지", desc: "착지 시 피해를 주는 바람을 남김; 범위 +20%" },
          ],
        },
        "돌풍 범위 +30%",
        "매초 HP 3% 회복",
        {
          fork: [
            { name: "폭발 깃털", desc: "쓰러뜨린 적이 폭발; 데미지 +4" },
            { name: "깊은 휴식", desc: "회복량 60% 증가, 자리 잡는 시간 증가" },
          ],
        },
        "돌풍 데미지 +10, 매초 HP 3.5% 회복",
      ],
    },
    focusPunch: {
      description: moveDescriptionsKo.focusPunch,
      upgrades: [
        "데미지 +18",
        "충전 속도 증가",
        {
          fork: [
            { name: "연쇄 파동", desc: "적 2마리 추가 연쇄 공격; 범위 +10%, 데미지 +31" },
            { name: "달인의 일격", desc: "정예·보스에게 데미지 ×1.5; 범위 +20%" },
          ],
        },
        "데미지 +22",
        "충전 속도 증가",
        {
          fork: [
            { name: "지진 주먹", desc: "쓰러뜨린 적이 폭발; 데미지 +26" },
            { name: "빠른 집중", desc: "충전시간이 8에서 5으로 감소; 데미지 +4" },
          ],
        },
        "데미지 +22, 범위 +20%",
      ],
    },
    gyroBall: {
      description: moveDescriptionsKo.gyroBall,
      upgrades: [
        "톱니바퀴 +1",
        "데미지 +3",
        {
          fork: [
            { name: "생명의 톱니바퀴", desc: "적중 시 HP 회복; 범위 +10%" },
            { name: "분쇄기", desc: "적을 끌어당김; 범위 +20%" },
          ],
        },
        "회전 속도 25% 증가",
        "톱니바퀴 +1",
        {
          fork: [
            { name: "톱니바퀴 폭탄", desc: "쓰러뜨린 적이 폭발; 데미지 +4" },
            { name: "분쇄기", desc: "HP 12% 이하인 적 마무리; 데미지 +9" },
          ],
        },
        "데미지 +5, 범위 +20%",
      ],
    },
    suckerPunch: {
      description: moveDescriptionsKo.suckerPunch,
      upgrades: [
        "데미지 +4",
        "찌르기당 대상 +1마리",
        {
          fork: [
            { name: "생명의 반격", desc: "적중 시 HP 회복; 쿨타임 -0.05초" },
            { name: "연쇄 찌르기", desc: "적 2마리 추가 연쇄 공격; 쿨타임 -0.08초" },
          ],
        },
        "사거리 +20%",
        "데미지 +6",
        {
          fork: [
            { name: "비열한 속임수", desc: "HP 12% 이하인 적 마무리; 대상 +1, 데미지 +11" },
            { name: "폭발 함정", desc: "쓰러뜨린 적이 폭발; 대상 +1" },
          ],
        },
        "데미지 +6, 쿨타임 0.08초 감소",
      ],
    },
    futureSight: {
      description: moveDescriptionsKo.futureSight,
      upgrades: [
        "데미지 +10",
        "범위 +20%",
        {
          fork: [
            { name: "특이점", desc: "적을 끌어당김; 표식 +1" },
            { name: "예감", desc: "적 2마리 추가 연쇄 공격; 표식 +1" },
          ],
        },
        "쿨타임 0.6초 감소",
        "데미지 +14",
        {
          fork: [
            { name: "예언", desc: "쓰러뜨린 적이 폭발; 표식 +1" },
            { name: "운명", desc: "정예·보스에게 데미지 ×1.5; 표식 +1, 데미지 +13" },
          ],
        },
        "데미지 +14, 범위 +20%",
      ],
    },
    bonemerang: {
      description: moveDescriptionsKo.bonemerang,
      upgrades: [
        "데미지 +5",
        "뼈 +1",
        {
          fork: [
            { name: "뼈 자취", desc: "지속 피해 지대를 남김; 범위 +15%" },
            { name: "대전 뼈", desc: "적 2마리 추가 연쇄 공격; 범위 +25%" },
          ],
        },
        "쿨타임 0.2초 감소",
        "데미지 +6",
        {
          fork: [
            { name: "폭발 뼈", desc: "쓰러뜨린 적이 폭발; 뼈 +1" },
            { name: "정확한 일격", desc: "HP 12% 이하인 적 마무리; 뼈 +1" },
          ],
        },
        "데미지 +6, 비행 속도 25% 증가",
      ],
    },
    stealthRock: {
      description: moveDescriptionsKo.stealthRock,
      upgrades: [
        "돌 +1",
        "데미지 +4",
        {
          fork: [
            { name: "자석돌", desc: "적을 끌어당김; 지속시간 +3초" },
            { name: "전기 돌", desc: "적 2마리 추가 연쇄 공격; 지속시간 +3초" },
          ],
        },
        "범위 +20%",
        "돌 +2",
        {
          fork: [
            { name: "바위 지뢰", desc: "쓰러뜨린 적이 폭발; 데미지 +6" },
            { name: "요새", desc: "정예·보스에게 데미지 ×1.5; 데미지 +4" },
          ],
        },
        "데미지 +6, 지속시간 +5초",
      ],
    },
    uTurn: {
      description: moveDescriptionsKo.uTurn,
      upgrades: [
        "데미지 +6",
        "범위 +20%",
        {
          fork: [
            { name: "기류", desc: "지속 피해 지대를 남김; 쿨타임 -0.2초" },
            { name: "생명의 귀환", desc: "적중 시 HP 회복; 쿨타임 -0.3초" },
          ],
        },
        "데미지 +8",
        "비행 거리 증가",
        {
          fork: [
            { name: "폭발 귀환", desc: "쓰러뜨린 적이 폭발; 쿨타임 -0.3초" },
            { name: "지그재그", desc: "적 2마리 추가 연쇄 공격; 쿨타임 -0.3초, 데미지 +25" },
          ],
        },
        "데미지 +10, 범위 +20%",
      ],
    },
    dragonTail: {
      description: moveDescriptionsKo.dragonTail,
      upgrades: [
        "데미지 +6",
        "범위 +20%",
        {
          fork: [
            { name: "생명의 꼬리", desc: "적중 시 HP 회복; 쿨타임 -0.15초" },
            { name: "거인의 꼬리", desc: "정예·보스에게 데미지 ×1.5; 쿨타임 -0.2초" },
          ],
        },
        "데미지 +7",
        "범위 +20%",
        {
          fork: [
            { name: "폭발 던지기", desc: "쓰러뜨린 적이 폭발; 쿨타임 -0.2초" },
            { name: "최후의 꼬리", desc: "HP 12% 이하인 적 마무리; 쿨타임 -0.2초, 데미지 +12" },
          ],
        },
        "데미지 +9",
      ],
    },
    sheerCold: {
      description: moveDescriptionsKo.sheerCold,
      upgrades: [
        "데미지 +2",
        "범위 +15%",
        {
          fork: [
            { name: "잔혹한 서리", desc: "상태 이상인 적에게 데미지 ×1.35; 데미지 +6" },
            { name: "얼음 분쇄", desc: "쓰러뜨린 적이 폭발; 데미지 -1" },
          ],
        },
        "쿨타임 0.4초 감소",
        "데미지 +2, HP 27% 이하인 적 분쇄",
        {
          fork: [
            { name: "이중 파도", desc: "즉시 추가 공격 (50% 위력); 범위 +10%" },
            { name: "빙하기", desc: "정예·보스에게 데미지 ×1.5; 범위 +20%" },
          ],
        },
        "쿨타임 0.4초 감소, HP 30% 이하인 적 분쇄",
      ],
    },
    flamethrower: {
      description: '앞쪽의 모든 것을 관통하는 불길을 계속 내뿜는다.',
      upgrades: ["데미지 +5, 물줄기 너비 증가", "불꽃 +2, 사거리 증가", "불타는 지대 지속시간 +0.8초, 화상 데미지 30% 증가", "쿨타임 0.15초 감소, 불꽃 +2"],
    },
    fireBlast: {
      description: '거대한 ★ 모양 불꽃이 주위를 회전한다.',
      upgrades: ["불덩이 +1", "데미지 +8, 별 크기 증가", "별의 연소시간 +0.4초 증가, 화상 확률 +15%", "쿨타임 0.4초 감소, 데미지 +8"],
    },
    hydroPump: {
      description: '적을 관통하고 날려 버리는 고압 물줄기를 발사한다.',
      upgrades: ["데미지 +8", "물줄기 굵기와 길이 증가", "물줄기 +1", "쿨타임 0.2초 감소, 밀쳐내는 거리 증가"],
    },
    surf: {
      description: '거대한 파도가 주위로 퍼져 적을 밀어내고 감속시킨다.',
      upgrades: ["데미지 +6", "파도 너비 증가", "파도 +1", "쿨타임 0.25초 감소, 데미지 +4"],
    },
    leafStorm: {
      description: '잎의 폭풍이 사방으로 날아갔다 부메랑처럼 돌아온다.',
      upgrades: ["나뭇잎 +4", "데미지 +6", "나뭇잎 크기 증가, 폭풍 지속시간 증가", "쿨타임 0.25초 감소, 회전 속도 증가"],
    },
    powerWhip: {
      description: '거대한 가시덩굴이 양쪽을 후려친다.',
      upgrades: ["데미지 +10", "덩굴 길이 증가", "덩굴 +1", "쿨타임 0.25초 감소, 밀쳐내는 거리 증가"],
    },
    triAttack: {
      description: '불꽃, 얼음, 번개의 삼각형이 여러 적을 쫓아간다.',
      upgrades: ["데미지 +6", "상태 이상 확률 +20%, 광선 굵기 증가", "광선 +3개: 두 번째 삼각형 생성", "쿨타임 0.25초 감소, 데미지 +6"],
    },
    wildboltStorm: {
      description: '번개 폭풍이 화면 전체를 강타한다.',
      upgrades: ["번개 +2", "데미지 +10", "연쇄 공격 사거리 증가, 마비 확률 +15%", "쿨타임 0.3초 감소, 번개 +2"],
    },
    gunkShot: {
      description: '거대한 웅덩이를 남기는 산더미 같은 독성 쓰레기를 던진다.',
      upgrades: ["쓰레기 더미 +1", "데미지 +4, 독 데미지 25% 증가", "웅덩이 크기 증가, 지속시간 +0.6초", "쿨타임 0.4초 감소, 데미지 +5"],
    },
    hurricane: {
      description: '회오리가 주위를 돌며 적을 빨아들였다가 날려 버린다.',
      upgrades: ["데미지 +5", "회오리 +1", "회오리 크기 증가, 지속시간 +1초", "쿨타임 0.6초 감소, 회전 속도 증가"],
    },
    extremeSpeed: {
      description: 'Shift 또는 돌진 버튼을 누르면 번개처럼 빠르게 돌진해 적 무리를 가르고, 마지막에 충격파를 일으킨다.',
      upgrades: ["데미지 +10", "돌진 범위 증가, 충격파 범위 증가", "돌진 거리 증가, 데미지 +6", "데미지 +12, 밀쳐내는 거리 증가"],
    },
    thunderbolt: {
      description: '번개가 최대 9마리의 적에게 연쇄하며, 상당수를 마비시킨다.',
      upgrades: ["대상 +3", "데미지 +8", "전류의 연쇄 공격 거리 증가, 마비 확률 +15%", "쿨타임 0.2초 감소, 대상 +3"],
    },
    barbBarrage: {
      description: '터지면 커다란 독구름이 되는 독침을 한 움큼씩 흩뿌린다.',
      upgrades: ["가시 +2", "데미지 +10", "폭발 범위 증가, 독 데미지 30% 증가", "쿨타임 0.2초 감소, 가시 +2"],
    },
    inferno: {
      description: '오랫동안 불꽃 폭발을 쏘아 대는 모닥불을 남긴다. 자주 화상을 입힌다.',
      upgrades: ["데미지 +6", "일제 사격당 폭발 +1회", "불꽃 고리 크기 증가, 모닥불 지속시간 +2초", "쿨타임 1초 감소, 화상 확률 +15%"],
    },
    blizzard: {
      description: '눈보라가 주위 땅에 얼음 고리를 박아, 고리를 넘으려는 적에게 데미지를 주고 감속시킨다.',
      upgrades: ["고드름 +3", "데미지 +6", "충돌 범위 증가, 얼음 지속시간 +1초", "쿨타임 0.3초 감소, 고드름 +2"],
    },
    stoneEdge: {
      description: '가장 가까운 적들을 향해 땅에서 돌기둥이 줄지어 솟아오른다.',
      upgrades: ["데미지 +10", "기둥 +1줄", "기둥 크기 증가, 기둥의 줄 길이 증가", "쿨타임 0.3초 감소, 데미지 +6"],
    },
    megahorn: {
      description: '거대한 뿔이 적 무리 전체를 꿰뚫으며 적을 날려 버리고 독 상태로 만든다.',
      upgrades: ["데미지 +10", "뿔 +1", "뿔 크기와 비행 거리 증가", "쿨타임 0.25초 감소, 독 확률 +20%"],
    },
    outrage: {
      description: '용의 폭주: 여러 방향으로 동시에 부채꼴 불꽃을 내뿜으며, 매번 방향이 바뀐다.',
      upgrades: ["데미지 +5", "난동 중 숨결 +1회", "숨결 범위 증가, 포효 범위 증가", "쿨타임 0.25초 감소, 화상 확률 +15%"],
    },
    jawLock: {
      description: moveDescriptionsKo.jawLock,
      upgrades: ["큰 입 +1", "데미지 +8", "범위 +25%, 쿨타임 0.15초 감소", "큰 입 +1, 데미지 +6"],
    },
    superpower: {
      description: moveDescriptionsKo.superpower,
      upgrades: ["데미지 +10", "주먹질 +3", "범위 +20%", "쿨타임 0.25초 감소, 데미지 +8"],
    },
    fissure: {
      description: moveDescriptionsKo.fissure,
      upgrades: ["균열 +1", "데미지 +12", "범위 +20%", "균열 +1, 쿨타임 0.3초 감소"],
    },
    extrasensory: {
      description: moveDescriptionsKo.extrasensory,
      upgrades: ["눈 +1", "데미지 +10, 혼란 확률 +20%", "범위 +20%", "눈 +1, 끌어당기기 지속시간 +0.3초"],
    },
    steelBeam: {
      description: moveDescriptionsKo.steelBeam,
      upgrades: ["데미지 +6", "광선 +1", "지속시간 +0.3초, 범위 +15%", "광선 +1, 데미지 +6"],
    },
    infernalParade: {
      description: moveDescriptionsKo.infernalParade,
      upgrades: ["불꽃 +2", "데미지 +5, 화상 확률 +15%", "지속시간 +1초, 불꽃 이동 속도 증가", "불꽃 +2, 데미지 +4"],
    },
    phantomForce: {
      description: moveDescriptionsKo.phantomForce,
      upgrades: ["화살 +2", "데미지 +10", "범위 +25%", "화살 +2, 쿨타임 0.2초 감소"],
    },
    aquaCutter: {
      description: moveDescriptionsKo.aquaCutter,
      upgrades: ["수리검 +1", "데미지 +7", "범위 +25%", "수리검 +1, 속도 증가"],
    },
    searingShot: {
      description: moveDescriptionsKo.searingShot,
      upgrades: ["불덩이 +1", "데미지 +10", "범위 +25%, 화상 데미지 +25% 증가", "불덩이 +1, 쿨타임 0.3초 감소"],
    },
    gigaDrain: {
      description: moveDescriptionsKo.gigaDrain,
      upgrades: ["덩굴 +1", "데미지 +4", "흡수 지속시간 +0.5초", "덩굴 +2, 데미지 +3"],
    },
    burningJealousy: {
      description: moveDescriptionsKo.burningJealousy,
      upgrades: ["기둥 +2", "데미지 +12", "범위 +25%, 화상 데미지 +25% 증가", "기둥 +2, 쿨타임 0.3초 감소"],
    },
    trailblaze: {
      description: moveDescriptionsKo.trailblaze,
      upgrades: ["데미지 +8", "범위 +20%", "칼날 +1", "쿨타임 0.25초 감소, 데미지 +8"],
    },
    liquidation: {
      description: moveDescriptionsKo.liquidation,
      upgrades: ["파도 +1", "데미지 +10", "범위 +20%, 표식 확률 +20%", "파도 +1, 쿨타임 0.2초 감소"],
    },
    alluringVoice: {
      description: moveDescriptionsKo.alluringVoice,
      upgrades: ["파도 +1", "데미지 +8, 혼란 확률 +15%", "범위 +20%", "파도 +1, 쿨타임 0.3초 감소"],
    },
    fieryDance: {
      description: moveDescriptionsKo.fieryDance,
      upgrades: [
        "불꽃 +2",
        "데미지 +3",
        {
          fork: [
            { name: "맹화", desc: "쓰러뜨린 적이 폭발; 범위 +25%" },
            { name: "스파크", desc: "적 2마리에게 연쇄 공격; 데미지 +2" },
          ],
        },
        "쿨타임 0.3초 감소",
        "불꽃 +2",
        {
          fork: [
            { name: "살아 있는 불씨", desc: "상태 이상인 적에게 데미지 ×1.35; 화상 확률 +25%, 화상 데미지 30% 증가" },
            { name: "앵콜", desc: "즉시 추가 공격 (50% 위력); 데미지 +3" },
          ],
        },
        "데미지 +4, 범위 +20%",
      ],
    },
    overdrive: {
      description: moveDescriptionsKo.overdrive,
      upgrades: [
        "데미지 +2",
        "범위 +20%",
        {
          fork: [
            { name: "긴 독주", desc: "상태 이상인 적에게 데미지 ×1.35; 박자 +2" },
            { name: "왜곡", desc: "적 2마리에게 연쇄 공격; 데미지 +2" },
          ],
        },
        "쿨타임 0.3초 감소",
        "데미지 +3",
        {
          fork: [
            { name: "증폭기", desc: "정예·보스에게 데미지 ×1.5; 범위 +25%" },
            { name: "앵콜", desc: "즉시 추가 공격 (50% 위력); 마비 확률 +25%" },
          ],
        },
        "박자 +2, 데미지 +2",
      ],
    },
    gigatonHammer: {
      description: moveDescriptionsKo.gigatonHammer,
      upgrades: [
        "데미지 +8",
        "범위 +20%",
        {
          fork: [
            { name: "파편 폭발", desc: "쓰러뜨린 적이 폭발; 데미지 +6" },
            { name: "가벼운 손놀림", desc: "HP 12% 이하인 적 마무리; 쿨타임 -0.3초" },
          ],
        },
        "데미지 +8",
        "범위 +20%",
        {
          fork: [
            { name: "기가톤", desc: "정예·보스에게 데미지 ×1.5; 데미지 +10" },
            { name: "충격파", desc: "적 2마리에게 연쇄 공격; 범위 +30%" },
          ],
        },
        "데미지 +10, 쿨타임 0.2초 감소",
      ],
    },
    bitterBlade: {
      description: moveDescriptionsKo.bitterBlade,
      upgrades: [
        "데미지 +4",
        "범위 +20%",
        {
          fork: [
            { name: "쌍칼날", desc: "HP 12% 이하인 적 마무리; 2번째 베기가 되돌아옴" },
            { name: "원한의 불씨", desc: "쓰러뜨린 적이 폭발; 데미지 +4" },
          ],
        },
        "쿨타임 0.2초 감소",
        "데미지 +5",
        {
          fork: [
            { name: "영혼의 불꽃", desc: "상태 이상인 적에게 데미지 ×1.35; 화상 확률 +30%" },
            { name: "떠도는 불꽃", desc: "적 2마리에게 연쇄 공격; 범위 +20%" },
          ],
        },
        "데미지 +6, 범위 +15%",
      ],
    },
    leechLife: {
      description: moveDescriptionsKo.leechLife,
      upgrades: [
        "데미지 +2",
        "물기 대상 +1마리",
        {
          fork: [
            { name: "갈증", desc: "HP 12% 이하인 적 마무리; 쿨타임 -0.08초" },
            { name: "전염", desc: "물기가 적 2마리에게 연쇄 공격; 데미지 +1" },
          ],
        },
        "데미지 +2",
        "사거리 +30%",
        {
          fork: [
            { name: "군집", desc: "정예·보스에게 데미지 ×1.5; 물기 대상 +1마리" },
            { name: "흡혈귀", desc: "쓰러뜨린 적이 폭발; 데미지 +3" },
          ],
        },
        "데미지 +3",
      ],
    },
    fireFang: {
      description: moveDescriptionsKo.fireFang,
      upgrades: [
        "데미지 +5",
        "화상 확률 +15%",
        {
          fork: [
            { name: "쌍이빨", desc: "상태 이상인 적에게 데미지 ×1.35; 물기 대상 +1마리" },
            { name: "불꽃세례", desc: "쓰러뜨린 적이 폭발; 데미지 +4" },
          ],
        },
        "쿨타임 0.2초 감소",
        "데미지 +6",
        {
          fork: [
            { name: "깊은 화상", desc: "바닥에 불꽃을 남김; 화상 데미지 40% 증가" },
            { name: "옮겨붙는 불꽃", desc: "물기가 적 2마리에게 연쇄 공격; 범위 +20%" },
          ],
        },
        "물기 대상 +1마리, 데미지 +4",
      ],
    },
    furySwipes: {
      description: moveDescriptionsKo.furySwipes,
      upgrades: [
        "데미지 +2",
        "범위 +20%",
        {
          fork: [
            { name: "광란", desc: "상태 이상인 적에게 데미지 ×1.35; 쿨타임 -0.15초" },
            { name: "긴 발톱", desc: "할퀴기가 적 2마리에게 연쇄 공격; 데미지 +1" },
          ],
        },
        "데미지 +2",
        "할퀴기 +1",
        {
          fork: [
            { name: "분노", desc: "쓰러뜨린 적이 폭발; 데미지 +2" },
            { name: "앞발 때리기", desc: "정예·보스에게 데미지 ×1.5; 범위 +25%" },
          ],
        },
        "데미지 +3",
      ],
    },
    heavySlam: {
      description: moveDescriptionsKo.heavySlam,
      upgrades: [
        "데미지 +6",
        "범위 +20%",
        {
          fork: [
            { name: "무거운 발걸음", desc: "적을 끌어당김; 쿨타임 -0.4초" },
            { name: "울림", desc: "쓰러뜨린 적이 폭발; 데미지 +4" },
          ],
        },
        "데미지 +8",
        "범위 +20%",
        {
          fork: [
            { name: "공명", desc: "충격이 적 2마리에게 연쇄 공격; 데미지 +4" },
            { name: "중량급", desc: "정예·보스에게 데미지 ×1.5; 범위 +20%" },
          ],
        },
        "데미지 +9",
      ],
    },
    bulldoze: {
      description: moveDescriptionsKo.bulldoze,
      upgrades: [
        "데미지 +4",
        "범위 +20%",
        {
          fork: [
            { name: "양면 공격", desc: "상태 이상인 적에게 데미지 ×1.35; 부채꼴 파도 +1개" },
            { name: "산사태", desc: "쓰러뜨린 적이 폭발; 데미지 +3" },
          ],
        },
        "쿨타임 0.3초 감소",
        "데미지 +5",
        {
          fork: [
            { name: "성벽", desc: "적을 끌어당김; 범위 +30%" },
            { name: "진동", desc: "적 2마리에게 연쇄 공격; 데미지 +3, 속도 증가" },
          ],
        },
        "파도 +1, 데미지 +4",
      ],
    },
    perishSong: {
      description: moveDescriptionsKo.perishSong,
      upgrades: [
        "데미지 +8",
        "쿨타임 1초 감소",
        {
          fork: [
            { name: "진혼곡", desc: "정예·보스에게 데미지 ×1.5; 데미지 +12" },
            { name: "반복 연주", desc: "HP 12% 이하인 적 마무리; 쿨타임 -1.5초" },
          ],
        },
        "데미지 +10",
        "쿨타임 1초 감소",
        {
          fork: [
            { name: "마지막 소절", desc: "쓰러뜨린 적이 폭발; 데미지 +8" },
            { name: "빠른 합창", desc: "상태 이상인 적에게 데미지 ×1.35; 쿨타임 -2초, 데미지 -6" },
          ],
        },
        "데미지 +12",
      ],
    },
    chargeBeam: {
      description: moveDescriptionsKo.chargeBeam,
      upgrades: [
        "데미지 +4",
        "범위 +20%",
        {
          fork: [
            { name: "쌍광선", desc: "정예·보스에게 데미지 ×1.5; 부채꼴 광선 +1개" },
            { name: "불티", desc: "적 2마리에게 연쇄 공격; 데미지 +3" },
          ],
        },
        "쿨타임 0.2초 감소",
        "데미지 +5",
        {
          fork: [
            { name: "장거리", desc: "HP 12% 이하인 적 마무리; 사거리 +30%" },
            { name: "과부하", desc: "쓰러뜨린 적이 폭발; 데미지 +5" },
          ],
        },
        "광선 +1, 데미지 +3",
      ],
    },
    moonblast: {
      description: moveDescriptionsKo.moonblast,
      upgrades: [
        "데미지 +5",
        "약화 확률 +20%",
        {
          fork: [
            { name: "보름달", desc: "상태 이상인 적에게 데미지 ×1.35; 관통 +2" },
            { name: "인도하는 달", desc: "대상을 추적; 데미지 +3" },
          ],
        },
        "쿨타임 0.25초 감소",
        "데미지 +6",
        {
          fork: [
            { name: "쌍달", desc: "적중 시 2개로 분열; 달 +1" },
            { name: "거대한 달", desc: "정예·보스에게 데미지 ×1.5; 범위 +30%" },
          ],
        },
        "데미지 +6, 범위 +15%",
      ],
    },
    frostBreath: {
      description: moveDescriptionsKo.frostBreath,
      upgrades: [
        "데미지 +2",
        "솜뭉치 +2",
        {
          fork: [
            { name: "차가운 공기", desc: "HP 12% 이하인 적 마무리; 감속 확률 +30%" },
            { name: "얼음 결정", desc: "적 2마리에게 연쇄 공격; 데미지 +2" },
          ],
        },
        "쿨타임 0.2초 감소",
        "데미지 +3",
        {
          fork: [
            { name: "눈보라", desc: "적을 끌어당김; 범위 +30%" },
            { name: "강풍", desc: "정예·보스에게 데미지 ×1.5; 솜뭉치 +2" },
          ],
        },
        "데미지 +3, 감속 확률 +10%",
      ],
    },
    avalanche: {
      description: moveDescriptionsKo.avalanche,
      upgrades: [
        "데미지 +4",
        "범위 +20%",
        {
          fork: [
            { name: "두 갈래 경사", desc: "정예·보스에게 데미지 ×1.5; 눈사태 +1" },
            { name: "눈덩이", desc: "쓰러뜨린 적이 폭발; 데미지 +4" },
          ],
        },
        "쿨타임 0.3초 감소",
        "데미지 +5",
        {
          fork: [
            { name: "눈 무너뜨리기", desc: "HP 12% 이하인 적 마무리; 범위 +25%" },
            { name: "얼음 파편", desc: "적 2마리에게 연쇄 공격; 데미지 +3" },
          ],
        },
        "데미지 +5, 눈사태 +1",
      ],
    },
    rockSlide: {
      description: moveDescriptionsKo.rockSlide,
      upgrades: [
        "바위 +1",
        "데미지 +5",
        {
          fork: [
            { name: "동굴 붕괴", desc: "쓰러뜨린 적에서 바위 폭발; 데미지 +3" },
            { name: "눈사태", desc: "바위 +2, 즉시 추가 공격 (50% 위력); 데미지 -3" },
          ],
        },
        "쿨타임 0.3초 감소",
        "데미지 +6",
        {
          fork: [
            { name: "잔해", desc: "피해를 주는 잔해를 남김; 범위 +25%" },
            { name: "나무 파편", desc: "주변 적 2마리에게 연쇄 공격; 데미지 +4" },
          ],
        },
        "바위 +2, 데미지 +5",
      ],
    },
    yawn: {
      description: moveDescriptionsKo.yawn,
      upgrades: [
        "범위 +15%",
        "데미지 +4",
        {
          fork: [
            { name: "이중 하품", desc: "즉시 추가 공격 (50% 위력); 데미지 +1" },
            { name: "무거운 거품", desc: "쓰러뜨린 적이 폭발; 범위 +20%, 데미지 +2" },
          ],
        },
        "쿨타임 0.4초 감소",
        "데미지 +5",
        {
          fork: [
            { name: "코골기", desc: "거품 폭발이 주변 적 2마리에게 연쇄 공격; 데미지 +4" },
            { name: "단체 낮잠", desc: "거품 +1; 수면 지대를 남김" },
          ],
        },
        "거품 +1, 데미지 +4",
      ],
    },
    iceBeam: {
      description: moveDescriptionsKo.iceBeam,
      upgrades: [
        "데미지 +5",
        "얼음 확률 +10%",
        {
          fork: [
            { name: "쌍광선", desc: "광선 +1; 얼음을 남김; 데미지 -3" },
            { name: "얼음 메아리", desc: "즉시 추가 공격 (50% 위력); 범위 +20%" },
          ],
        },
        "쿨타임 0.2초 감소",
        "데미지 +6",
        {
          fork: [
            { name: "프리즘", desc: "주변 적 2마리에게 연쇄 공격; 데미지 +4" },
            { name: "분쇄", desc: "쓰러뜨린 적이 폭발; 얼음 확률 +15%" },
          ],
        },
        "광선 +1, 데미지 +4",
      ],
    },
    discharge: {
      description: moveDescriptionsKo.discharge,
      upgrades: [
        "데미지 +6",
        "범위 +15%",
        {
          fork: [
            { name: "전기 연쇄", desc: "주변 적 2마리에게 연쇄 공격; 마비 확률 +15%" },
            { name: "과부하", desc: "쓰러뜨린 적이 폭발; 데미지 +4" },
          ],
        },
        "쿨타임 0.15초 감소",
        "데미지 +7",
        {
          fork: [
            { name: "전기 메아리", desc: "즉시 추가 공격 (50% 위력); 범위 +15%" },
            { name: "고전압", desc: "데미지 +5; 전기 지대를 남김" },
          ],
        },
        "데미지 +8, 범위 +15%",
      ],
    },
    heatWave: {
      description: moveDescriptionsKo.heatWave,
      upgrades: [
        "데미지 +4",
        "화상 확률 +10%",
        {
          fork: [
            { name: "타오르는 불꽃", desc: "적중 시 파도가 2개로 분열; 데미지 -2" },
            { name: "양방향", desc: "뒤로도 돌풍 발사; 데미지 +2" },
          ],
        },
        "쿨타임 0.25초 감소",
        "데미지 +5",
        {
          fork: [
            { name: "연소", desc: "쓰러뜨린 적이 폭발; 화상 확률 +30%" },
            { name: "폭염", desc: "즉시 추가 공격 (50% 위력); 데미지 +3" },
          ],
        },
        "파도 +1, 데미지 +5",
      ],
    },
    thunderFang: {
      description: moveDescriptionsKo.thunderFang,
      upgrades: [
        "데미지 +4",
        "물기 +1",
        {
          fork: [
            { name: "스파크", desc: "물기가 주변 적 2마리에게 연쇄 공격; 마비 확률 +15%" },
            { name: "합선", desc: "쓰러뜨린 적이 폭발; 데미지 +5" },
          ],
        },
        "쿨타임 0.1초 감소",
        "데미지 +5",
        {
          fork: [
            { name: "이중 물기", desc: "물기 +1, 즉시 추가 공격 (50% 위력)" },
            { name: "큰 턱", desc: "데미지 +6; 전기 지대를 남김" },
          ],
        },
        "물기 +1, 데미지 +4",
      ],
    },
    lavaPlume: {
      description: moveDescriptionsKo.lavaPlume,
      upgrades: [
        "간헐천 +1",
        "데미지 +4",
        {
          fork: [
            { name: "마그마", desc: "웅덩이 지속시간 +1.2초, 용암 범위 증가" },
            { name: "분화", desc: "쓰러뜨린 적이 폭발; 데미지 +3" },
          ],
        },
        "쿨타임 0.3초 감소",
        "데미지 +5",
        {
          fork: [
            { name: "진동", desc: "즉시 추가 공격 (50% 위력); 범위 +25%" },
            { name: "살아 있는 불씨", desc: "간헐천이 주변 적 2마리에게 연쇄 공격; 웅덩이 지속시간 +0.8초" },
          ],
        },
        "간헐천 +2, 데미지 +4",
      ],
    },
    auroraBeam: {
      description: moveDescriptionsKo.auroraBeam,
      upgrades: [
        "데미지 +4",
        "약화 확률 +15%",
        {
          fork: [
            { name: "쌍오로라", desc: "뒤로 광선 +1개 발사; 쓰러뜨린 적이 폭발" },
            { name: "반사", desc: "즉시 추가 공격 (50% 위력); 범위 +20%" },
          ],
        },
        "쿨타임 0.25초 감소",
        "데미지 +5",
        {
          fork: [
            { name: "굴절", desc: "주변 적 2마리에게 연쇄 공격; 데미지 +4" },
            { name: "극광", desc: "2번째 넓은 오로라가 반대 방향으로 휩씀" },
          ],
        },
        "데미지 +6, 범위 +15%",
      ],
    },
    meteorBeam: {
      description:
        moveDescriptionsKo.meteorBeam,
      upgrades: [
        "유성 +1",
        "데미지 +4",
        {
          fork: [
            { name: "파편", desc: "적중 시 2개로 분열; 데미지 +3" },
            { name: "도탄", desc: "유성 +1; 적 2마리에게 추가로 튕김" },
          ],
        },
        "쿨타임 0.2초 감소",
        "데미지 +5",
        {
          fork: [
            { name: "분화구", desc: "유성 +1; 쓰러뜨린 적이 폭발" },
            { name: "낙하 자취", desc: "피해를 주는 파편을 남김; 데미지 +4" },
          ],
        },
        "유성 +2",
      ],
    },
    icyWind: {
      description: moveDescriptionsKo.icyWind,
      upgrades: [
        "돌풍 +1",
        "데미지 +3",
        {
          fork: [
            { name: "소용돌이", desc: "뒤로도 돌풍 발사; 데미지 +2" },
            { name: "눈보라", desc: "범위 +30%; 적중 시 돌풍이 2개로 분열" },
          ],
        },
        "쿨타임 0.25초 감소",
        "데미지 +3",
        {
          fork: [
            { name: "서리", desc: "쓰러뜨린 적이 폭발; 데미지 +2" },
            { name: "강풍", desc: "돌풍 +2, 즉시 추가 공격 (50% 위력)" },
          ],
        },
        "돌풍 +2, 데미지 +3",
      ],
    },
    ironHead: {
      description:
        moveDescriptionsKo.ironHead,
      upgrades: [
        "데미지 +6",
        "지속시간 +0.5초",
        {
          fork: [
            { name: "파편 폭발", desc: "파편 +4; 강철 공격으로 쓰러뜨린 적이 폭발" },
            { name: "강철 반사", desc: "쿨타임 −0.8초, 다시 단단해짐; 데미지 -4" },
          ],
        },
        "데미지 +8",
        "지속시간 +0.5초",
        {
          fork: [
            { name: "돌머리", desc: "데미지 +8; 충격이 주변 적 2마리에게 연쇄 공격" },
            { name: "위협", desc: "풀죽음 확률 +25%; 강철 자취를 남김" },
          ],
        },
        "데미지 +10, 쿨타임 0.5초 감소",
      ],
    },
    psystrike: {
      description: moveDescriptionsKo.psystrike,
      upgrades: [
        "구슬 +1",
        "데미지 +5",
        {
          fork: [
            { name: "귀환", desc: "구슬이 돌아오며 다시 타격; 데미지 +3" },
            { name: "정신 봉쇄", desc: "구슬 +1, 적을 추적; 데미지 -3" },
          ],
        },
        "쿨타임 0.2초 감소",
        "데미지 +6",
        {
          fork: [
            { name: "이중 파도", desc: "구슬 +1; 뒤로도 발사" },
            { name: "분열", desc: "적중 시 2개로 분열; 데미지 +5" },
          ],
        },
        "구슬 +1, 데미지 +5",
      ],
    },
    ragingFury: {
      description:
        moveDescriptionsKo.ragingFury,
      upgrades: ["데미지 +4", "불꽃 지속시간 +0.6초, 범위 +15%", "데미지 +5, 화상 확률 +15%", "데미지 +5, 범위 +20%"],
    },
    seedFlare: {
      description:
        moveDescriptionsKo.seedFlare,
      upgrades: ["데미지 +10", "광선 +1", "범위 +20%", "데미지 +12, 쿨타임 0.4초 감소"],
    },
    waterSpout: {
      description: moveDescriptionsKo.waterSpout,
      upgrades: ["낙하 +2", "데미지 +8", "범위 +25%", "낙하 +2, 쿨타임 0.2초 감소"],
    },
    electroDrift: {
      description:
        moveDescriptionsKo.electroDrift,
      upgrades: ["구슬 +1", "데미지 +7", "지속시간 +0.4초, 범위 +20%", "구슬 +1, 마비 확률 +15%"],
    },
    sludgeWave: {
      description:
        moveDescriptionsKo.sludgeWave,
      upgrades: ["데미지 +3", "파도 +1", "범위 +20%, 독 확률 +15%", "데미지 +3, 쿨타임 0.3초 감소"],
    },
    explosion: {
      description:
        moveDescriptionsKo.explosion,
      upgrades: ["데미지 +25", "범위 +15%", "쿨타임 1.2초 감소", "데미지 +30, 범위 +15%"],
    },
    oblivionWing: {
      description: moveDescriptionsKo.oblivionWing,
      upgrades: ["데미지 +9", "광선 +1", "쿨타임 0.2초 감소", "광선 +1, 데미지 +9"],
    },
    skyUppercut: {
      description:
        moveDescriptionsKo.skyUppercut,
      upgrades: ["데미지 +20", "주먹 +1", "범위 +20%", "데미지 +24, 주먹 +1"],
    },
    gearGrind: {
      description: moveDescriptionsKo.gearGrind,
      upgrades: ["데미지 +6", "범위 +20%", "톱니바퀴 +1", "데미지 +7, 쿨타임 0.25초 감소"],
    },
    kowtowCleave: {
      description:
        moveDescriptionsKo.kowtowCleave,
      upgrades: ["데미지 +10", "쪼개기 +1", "범위 +20%", "데미지 +11, 쿨타임 0.12초 감소"],
    },
    hyperspaceHole: {
      description: moveDescriptionsKo.hyperspaceHole,
      upgrades: ["데미지 +14", "고리 +1", "범위 +20%, 끌어당기기 지속시간 +0.3초 증가", "데미지 +16, 쿨타임 0.5초 감소"],
    },
    thousandArrows: {
      description: moveDescriptionsKo.thousandArrows,
      upgrades: ["화살 +3", "데미지 +9", "범위 +25%", "화살 +3, 쿨타임 0.2초 감소"],
    },
    stoneAxe: {
      description:
        moveDescriptionsKo.stoneAxe,
      upgrades: ["데미지 +10", "파편 +1", "파편 지속시간 +4초, 범위 +15%", "데미지 +12, 파편 +1"],
    },
    firstImpression: {
      description: moveDescriptionsKo.firstImpression,
      upgrades: ["데미지 +9", "돌진 +1", "쿨타임 0.3초 감소", "데미지 +10, 돌진 +1"],
    },
    breakingSwipe: {
      description:
        moveDescriptionsKo.breakingSwipe,
      upgrades: ["데미지 +8", "범위 +20%", "쿨타임 0.3초 감소", "데미지 +10, 범위 +15%"],
    },
    glacialLance: {
      description:
        moveDescriptionsKo.glacialLance,
      upgrades: ["창 +1", "데미지 +10", "범위 +20%, 얼음 확률 +15%", "창 +1, 쿨타임 0.3초 감소"],
    },
    braveBird: {
      description:
        moveDescriptionsKo.braveBird,
      upgrades: [
        "데미지 +6",
        "범위 +20%",
        {
          fork: [
            { name: "충돌 착지", desc: "쓰러뜨린 적이 폭발; 데미지 +6" },
            { name: "깃털 자취", desc: "이동 경로에 베기 피해를 주는 지대를 남김; 쿨타임 0.3초 감소" },
          ],
        },
        "데미지 +6",
        "쿨타임 0.3초 감소",
        {
          fork: [
            { name: "전기 날개", desc: "불티가 주변 적에게 연쇄 공격; 데미지 +4" },
            { name: "재비행", desc: "즉시 추가 공격 (50% 위력); 데미지 -4" },
          ],
        },
        "데미지 +8, 범위 +20%",
      ],
    },
    weatherBall: {
      description:
        moveDescriptionsKo.weatherBall,
      upgrades: [
        "데미지 +4",
        "구슬 +1",
        {
          fork: [
            { name: "한랭 전선", desc: "쓰러뜨린 적이 폭발; 데미지 +4" },
            { name: "국지성 날씨", desc: "착지한 곳에 날씨 지대를 남김; 범위 +25%" },
          ],
        },
        "쿨타임 0.25초 감소",
        "데미지 +4, 범위 +15%",
        {
          fork: [
            { name: "구슬 소나기", desc: "구슬 +1; 정예·보스에게 데미지 ×1.5" },
            { name: "이중 전선", desc: "즉시 추가 공격 (50% 위력); 데미지 -3" },
          ],
        },
        "데미지 +5, 효과 확률 +15%",
      ],
    },
    accelerock: {
      description: moveDescriptionsKo.accelerock,
      upgrades: [
        "데미지 +2",
        "쿨타임 0.08초 감소",
        {
          fork: [
            { name: "파편", desc: "조각이 주변 적에게 연쇄 공격; 데미지 +1" },
            { name: "충돌", desc: "쓰러뜨린 적이 폭발; 데미지 +3" },
          ],
        },
        "데미지 +3",
        "돌진 +1",
        {
          fork: [
            { name: "무리", desc: "돌진 +1, 상태 이상인 적에게 데미지 ×1.35; 데미지 -1" },
            { name: "바위 메아리", desc: "즉시 추가 공격 (50% 위력); 쿨타임 감소" },
          ],
        },
        "데미지 +4, 쿨타임 0.06초 감소",
      ],
    },
    zapCannon: {
      description: moveDescriptionsKo.zapCannon,
      upgrades: [
        "데미지 +3",
        "범위 +20%",
        {
          fork: [
            { name: "유도", desc: "구슬이 가장 가까운 적을 추적; 데미지 +2" },
            { name: "전기 지대", desc: "이동 경로에 전기 지대를 남김; 범위 +15%" },
          ],
        },
        "쿨타임 0.4초 감소",
        "데미지 +4",
        {
          fork: [
            { name: "전기 연쇄", desc: "불티가 주변 적에게 연쇄 공격; 데미지 +2" },
            { name: "쌍포", desc: "구슬 +1, 적중 시 HP 회복; 데미지 -3" },
          ],
        },
        "데미지 +5, 범위 +20%",
      ],
    },
    aerialAce: {
      description: moveDescriptionsKo.aerialAce,
      upgrades: [
        "데미지 +3",
        "베기 +1",
        {
          fork: [
            { name: "떼", desc: "베기 +1; 정예·보스에게 데미지 ×1.5" },
            { name: "마무리 일격", desc: "쓰러뜨린 적이 폭발; 데미지 +5" },
          ],
        },
        "쿨타임 0.2초 감소",
        "데미지 +4",
        {
          fork: [
            { name: "이중 베기", desc: "즉시 추가 공격 (50% 위력); 데미지 -3" },
            { name: "칼날 바람", desc: "바람 불티가 주변 적에게 연쇄 공격; 데미지 +2" },
          ],
        },
        "베기 +1, 데미지 +4",
      ],
    },
    crossPoison: {
      description: moveDescriptionsKo.crossPoison,
      upgrades: [
        "데미지 +4",
        "독 확률 +15%",
        {
          fork: [
            { name: "맹독 지대", desc: "독 웅덩이를 남김; 독 확률 +20%" },
            { name: "치명적인 일격", desc: "쓰러뜨린 적이 폭발; 데미지 +6" },
          ],
        },
        "범위 +20%",
        '교차 베기 +1회',
        {
          fork: [
            { name: "이중 교차", desc: "즉시 추가 공격 (50% 위력); 데미지 -3" },
            { name: "옮겨가는 맹독", desc: "독 불티가 주변 적에게 연쇄 공격; 범위 +20%" },
          ],
        },
        "데미지 +6, 독 데미지 30% 증가",
      ],
    },
    bubbleBeam: {
      description: moveDescriptionsKo.bubbleBeam,
      upgrades: [
        "거품 +2",
        "데미지 +2",
        {
          fork: [
            { name: "거품", desc: "적중 시 거품이 2개로 분열; 데미지 -1" },
            { name: "유도 거품", desc: "거품이 적을 추적; 비행 속도 감소" },
          ],
        },
        "거품 +2",
        "데미지 +2, 범위 +20%",
        {
          fork: [
            { name: "도탄", desc: "거품이 다른 적에게 튕김; 데미지 +1" },
            { name: "쌍물줄기", desc: "뒤로도 발사; 쿨타임 +0.1초" },
          ],
        },
        "거품 +3, 데미지 +1",
      ],
    },
    rockBlast: {
      description: moveDescriptionsKo.rockBlast,
      upgrades: [
        "데미지 +3",
        "쿨타임 0.15초 감소",
        {
          fork: [
            { name: "자갈", desc: "적중 시 바위가 2개로 분열; 데미지 -2" },
            { name: "물수제비", desc: "바위가 다른 적에게 튕김; 데미지 +3" },
          ],
        },
        "바위 +1",
        "데미지 +4, 범위 +15%",
        {
          fork: [
            { name: "폭발 바위", desc: "쓰러뜨린 적이 폭발; 데미지 +2" },
            { name: "유도 바위", desc: "바위가 적을 추적; 비행 속도 감소" },
          ],
        },
        "바위 +1, 데미지 +4",
      ],
    },
    cottonSpore: {
      description: moveDescriptionsKo.cottonSpore,
      upgrades: [
        "범위 +20%",
        "지속시간 +1초",
        {
          fork: [
            { name: "풍성한 솜털", desc: "즉시 추가 공격 (50% 위력); 데미지 +2" },
            { name: "전기 솜", desc: "불티가 주변 적에게 연쇄 공격; 데미지 +3" },
          ],
        },
        "쿨타임 0.6초 감소",
        "범위 +20%, 데미지 +2",
        {
          fork: [
            { name: "쌍구름", desc: "다른 무리에 구름 +1개 생성; 적을 끌어당김" },
            { name: "폭발 솜", desc: "쓰러뜨린 적이 폭발; 범위 +30%" },
          ],
        },
        "지속시간 +1.5초, 데미지 +2",
      ],
    },
    wildCharge: {
      description: moveDescriptionsKo.wildCharge,
      upgrades: [
        "데미지 +4",
        "지속시간 +0.4초",
        {
          fork: [
            { name: "전기 자취", desc: "달린 자리에 전기 지대를 남김; 데미지 +1" },
            { name: "합선", desc: "쓰러뜨린 적이 폭발; 데미지 +4" },
          ],
        },
        "쿨타임 0.5초 감소",
        "데미지 +5, 마비 확률 +10%",
        {
          fork: [
            { name: "재기", desc: "지속시간 +0.6초, 감전 공격 시 HP 회복" },
            { name: "연쇄 번개", desc: "불티가 주변 적에게 연쇄 공격; 데미지 +2" },
          ],
        },
        "데미지 +6, 범위 +20%",
      ],
    },
    playRough: {
      description: moveDescriptionsKo.playRough,
      upgrades: [
        "데미지 +2",
        "범위 +20%",
        {
          fork: [
            { name: "소동", desc: "다른 적에게 구름 +1개 생성; 상태 이상인 적에게 데미지 ×1.35" },
            { name: "비열한 싸움", desc: "쓰러뜨린 적이 폭발; 데미지 +2" },
          ],
        },
        "쿨타임 0.3초 감소",
        "데미지 +3",
        {
          fork: [
            { name: "재대결", desc: "즉시 추가 공격 (50% 위력); 데미지 -1" },
            { name: "도발", desc: "약화 확률 +25%, 범위 +20%; 적을 끌어당김" },
          ],
        },
        "구름 +1, 데미지 +2",
      ],
    },
    spore: {
      description: moveDescriptionsKo.spore,
      upgrades: [
        "범위 +20%",
        "수면 확률 +10%",
        {
          fork: [
            { name: "포자", desc: "잠든 적에게 독 부여" },
            { name: "무거운 포자", desc: "범위 +30%; 잠에서 깬 적에게 감속 부여" },
          ],
        },
        "수면 지속시간 +0.5초",
        "쿨타임 0.8초 감소",
        {
          fork: [
            { name: "이중 포자", desc: "즉시 다시 분출; 쿨타임 0.4초 감소" },
            { name: "꿈의 가루", desc: "잠든 적에게 표식을 남겨 받는 데미지 증가" },
          ],
        },
        "범위 +20%, 수면 지속시간 +0.5초",
      ],
    },
    waterfall: {
      description: moveDescriptionsKo.waterfall,
      upgrades: [
        "데미지 +4",
        "기둥 +1",
        {
          fork: [
            { name: "긴 낙하", desc: "기둥 +2; 정예·보스에게 데미지 ×1.5" },
            { name: "저류", desc: "쓰러뜨린 적이 폭발; 데미지 +5" },
          ],
        },
        "쿨타임 0.3초 감소",
        "데미지 +5, 범위 +15%",
        {
          fork: [
            { name: "이중 낙하", desc: "즉시 추가 공격 (50% 위력); 데미지 -3" },
            { name: "물보라", desc: "물방울이 주변 적에게 연쇄 공격; 범위 +20%" },
          ],
        },
        "데미지 +7, 기둥 +1",
      ],
    },
    lastResort: {
      description: moveDescriptionsKo.lastResort,
      upgrades: [
        "데미지 +8",
        "범위 +20%",
        {
          fork: [
            { name: "전부 아니면 전무", desc: "데미지 +10; 정예·보스에게 데미지 ×1.5" },
            { name: "초신성", desc: "쓰러뜨린 적이 폭발; 범위 +30%" },
          ],
        },
        "쿨타임 0.4초 감소",
        "데미지 +10",
        {
          fork: [
            { name: "쉬지 않는 공격", desc: "쿨타임 0.3초 감소; HP가 적게 남은 적 마무리" },
            { name: "앵콜", desc: "즉시 추가 공격 (50% 위력); 데미지 -8" },
          ],
        },
        "데미지 +12, 범위 +20%",
      ],
    },
    firePledge: {
      description: moveDescriptionsKo.firePledge,
      upgrades: ["기둥 +2, 데미지 +10", "불바다 지속시간 +1초, 범위 +15%", "데미지 +16, 화상 데미지 25% 증가", "기둥 +2, 쿨타임 0.4초 감소"],
    },
    waterPledge: {
      description: moveDescriptionsKo.waterPledge,
      upgrades: ["간헐천 +1, 데미지 +10", "무지개 지속시간 +1.2초", "범위 +25%, 데미지 +12", "간헐천 +2, 쿨타임 0.35초 감소"],
    },
    grassPledge: {
      description: moveDescriptionsKo.grassPledge,
      upgrades: ["기둥 +1, 데미지 +7", "늪 범위 +20%", "데미지 +10", "기둥 +2, 쿨타임 0.3초 감소"],
    },
    fusionFlare: {
      description: moveDescriptionsKo.fusionFlare,
      upgrades: ["혜성 +1", "데미지 +18, 범위 +15%", "불씨 지속시간 +1초, 화상 확률 +15%", "혜성 +1, 쿨타임 0.4초 감소"],
    },
    fusionBolt: {
      description: moveDescriptionsKo.fusionBolt,
      upgrades: ["혜성 +1", "데미지 +36, 범위 +15%", "불티 지속시간 +1초, 마비 확률 +15%", "혜성 +1, 쿨타임 0.4초 감소"],
    },
    ionDeluge: {
      description: moveDescriptionsKo.ionDeluge,
      upgrades: ["웅덩이 +1", "데미지 +9, 웅덩이 지속시간 +1초", "범위 +25%, 마비 확률 +10%", "웅덩이 +1, 쿨타임 0.3초 감소"],
    },
    freezeDry: {
      description: moveDescriptionsKo.freezeDry,
      upgrades: ["안개 파동 +1개", "데미지 +6, 얼음 확률 +15%", "범위 +25%", "범위 +15%, 쿨타임 0.3초 감소"],
    },
    nightmare: {
      description: moveDescriptionsKo.nightmare,
      upgrades: ["대상 +2", "데미지 +14, 독 확률 +15%", "사거리 +25%, 독 데미지 25% 증가", "대상 +2, 쿨타임 0.3초 감소"],
    },
    ...legendaryMovesKo,
  },
  items: {
    muscleBand: '모든 기술의 데미지 +10%.',
    quickClaw: '기술의 쿨타임이 8% 더 빨리 끝난다.',
    wideLens: '기술 범위 +10%.',
    lightClay: '효과 지속시간 +12%.',
    loadedDice: '연속 공격 기술의 투사체 +1.',
    leftovers: '매초 HP를 0.3 회복한다.',
    choiceScarf: '이동 속도 +8%.',
    luckyEgg: '획득 경험치 +10%.',
    dowsingMachine: '더 먼 곳의 경험사탕도 끌어당긴다.',
    kingsRock: '상태 이상(화상, 독, 마비)을 일으킬 확률 +6%.',
    toxicOrb: '화상과 독의 데미지 +20%.',
    assaultVest: '최대 HP +20, 방어 +1.',
    metronome:
      '도약이나 대시가 끝날 때마다(다른 필살기가 발동할 때도) 그 자리에서 기술 1개를 발사한다. 최대 단계에서는 2개지만, 연쇄 중에는 두 번째 기술이 마지막 도약에서만 나간다.',
    powerHerb: '필살기로 쓰러뜨린 적(연쇄 도중 쓰러뜨린 적 포함) 하나당 필살기 쿨타임이 0.25초 줄어든다.',
    charcoal: typeBoost('불꽃'),
    mysticWater: typeBoost('물'),
    miracleSeed: typeBoost('풀'),
    silkScarf: typeBoost('노말'),
    magnet: typeBoost('전기'),
    poisonBarb: typeBoost('독'),
    sharpBeak: typeBoost('비행'),
    neverMeltIce: typeBoost('얼음'),
    hardStone: typeBoost('바위'),
    silverPowder: typeBoost('벌레'),
    dragonFang: typeBoost('드래곤'),
    blackBelt: typeBoost('Fighting'),
    metalCoat: typeBoost('Steel'),
    spellTag: typeBoost('Ghost'),
    blackGlasses: typeBoost('Dark'),
    twistedSpoon: typeBoost('Psychic'),
    softSand: typeBoost('Ground'),
    fairyFeather: typeBoost('Fairy'),
  },
  upgrades: {
    hpUp: '단계당 최대 HP +10.',
    protein: '단계당 데미지 +5%.',
    iron: '단계당 방어 +1.',
    carbos: '단계당 속도 +5%.',
    calcium: '단계당 기술 범위 +5%.',
    zinc: '단계당 기술의 쿨타임이 2.5% 더 빨리 끝난다.',
    ppUp: '모든 기술의 투사체 +1.',
    expCharm: '단계당 획득 경험치 +3%.',
    amuletCoin: '단계당 획득 ₽ +10%.',
    abilityCapsule: '한 판당 레벨업 다시 뽑기 +1회.',
    escapeRope: '한 판당 레벨업 건너뛰기 +1회.',
    shinyCharm: '야생 이로치가 더 자주 나온다: 단계당 확률이 기본의 1/3씩 증가 (최대 1/450 → 1/225).',
  },
  consumables: {
    potion: 'HP를 30 회복했다.',
    superPotion: 'HP를 60 회복했다.',
    rareCandy: '레벨이 올랐다!',
    expShare: '경험사탕이 전부 모여들었다!',
    pokeFlute: '야생 포켓몬이 잠들었다!',
    maxRepel: '야생 포켓몬이 다가오지 않는다!',
    explosion: '대폭발을 사용했다!',
    xAttack: '공격이 크게 올랐다!',
    xSpeed: '속도가 크게 올랐다!',
    revive: '기절할 때를 대비해 보관해 두었다.',
  },
  blurbs: {
    bulbasaur: '밸런스형. HP를 재생한다.',
    charmander: '공격형. 데미지는 높고 HP는 낮다.',
    squirtle: '방어형. HP와 방어가 높다.',
    chikorita: '힐러. HP가 많고 재생력이 뛰어나다.',
    cyndaquil: '작열. 기술이 더 크고 더 오래간다.',
    totodile: '싸움꾼. 강력한 물기와 두꺼운 가죽.',
    treecko: '날쌘돌이. 빠르게 달리지만 연약하다.',
    torchic: '파이터. 점점 강해지는 불꽃 킥.',
    mudkip: '탱커. 맞고 버티다 땅에서 반격한다.',
    turtwig: '요새. 느리고 단단하며 땅을 뒤흔든다.',
    chimchar: '민첩. 빠른 펀치 콤보.',
    piplup: '도도함. 방어와 강철 탄환.',
    snivy: '우아함. 빠르고 획득 범위가 넓다.',
    tepig: '헤비급. HP가 많고 힘으로 밀어붙이는 기술.',
    oshawott: '검사. 조개껍데기로 호를 그리며 벤다.',
    chespin: '가시돌이. 방어가 높고 가까이서 주먹을 날린다.',
    fennekin: '신비. 초능력과 더 넓은 범위.',
    froakie: '닌자. 매우 빠르지만 HP가 적다.',
    rowlet: '궁수. 빠르고 정확한 화살.',
    litten: '어둠의 투사. 데미지가 높고 튼튼하다.',
    popplio: '퍼포머. 노래하고 회복하며 사방을 공격한다.',
    grookey: '리듬. 무리를 둔화시키는 파동.',
    scorbunny: '스트라이커. 폭발적인 킥과 속도.',
    sobble: '저격수. 빠르고 강한 투사체.',
    sprigatito: '장난꾸러기. 짧은 쿨타임과 더 많은 경험치.',
    fuecoco: '느긋함. HP가 많고 불타는 노래를 부른다.',
    quaxly: '댄서. 물속에서 회전하며 공격한다.',
    pichu: '전기. 빠른 전격, 하지만 연약하다.',
    machop: '파이터. 강한 펀치와 넉넉한 HP.',
    eevee: '적응형. 빨리 성장해 블래키가 된다.',
    togepi: '행운. HP를 재생하고 경험치를 더 얻는다.',
    spheal: '데굴데굴. 통통하고 튼튼하며 차갑다.',
    starly: '쾌속. 빠르게 날며 멀리서 아이템을 끌어당긴다.',
    budew: '독성. 상태 이상이 더 자주, 더 강하게 걸린다.',
    rockruff: '충성. 빠른 물기, 이윽고 루가루암으로 성장한다.',
    grubbin: '배터리. 기술이 더 크고 더 오래간다.',
    gastly: '유령. 데미지는 높고 HP는 적다.',
    abra: '에스퍼. 쿨타임이 매우 짧지만 매우 연약하다.',
    ralts: '공감. 더 넓은 범위와 재생.',
    riolu: '파동. 빠르고 강하며 루카리오가 된다.',
    zorua: '환영술사. 빠르고 데미지도 넉넉하다.',
    larvesta: '태양. 불꽃 범위와 화상 확률.',
    noibat: '초음파. 커다란 파동과 속도.',
    honedge: '살아 있는 검. 높은 방어와 강철 베기.',
    toxel: '로커. 리듬에 맞춘 전격과 독.',
    tinkatink: '해머. 땅을 뒤흔드는 묵직한 일격.',
    charcadet: '불씨. 위력과 사거리가 점점 늘어나는 사격.',
    dratini: '희귀. 균형 잡힌 능력, 망나뇽으로 성장한다.',
    larvitar: '요새. HP가 많고 땅을 뒤흔드는 방어.',
    beldum: '철갑. 강철 방어와 순수한 힘.',
    gible: '육지 상어. 강한 물기, 갈수록 빨라진다.',
    dreepy: '미사일. 빠르고 정확한 드라꼰을 발사한다.',
    pidgey: '새. 돌풍과 속도.',
    zubat: '박쥐. 빠르게 물고 독을 퍼뜨린다.',
    poliwag: '올챙이. 물, 펀치, 빠른 쿨타임.',
    geodude: '바위. 느리고 튼튼하며 무거운 바위를 던진다.',
    roggenrola: '결정. 두꺼운 장갑, 기가이어스는 넓게 짓뭉갠다.',
    mareep: '전기 양털. 마비시키는 전격.',
    shinx: '전기 스라소니. 송곳니와 전격, 렌트라의 눈빛은 마비시킨다.',
    azurill: '통통 튀는 공. 처음엔 약하지만 마지막엔 천하장사.',
    shroomish: '버섯. 처음엔 포자, 이후엔 버섯모의 펀치.',
    swinub: '아기 돼지. 바닥의 얼음과 넘치는 근성.',
    snorunt: '눈사람. 얼음 조각과 물기.',
    growlithe: '불꽃 강아지. 충직하고 빠르고 강하다.',
    vulpix: '여우. 도깨비불과 오래가는 화상.',
    cubone: '외톨이. 두꺼운 두개골과 강한 진동.',
    scyther: '사마귀. 매우 빠르지만 연약하다.',
    magikarp: '튀어오르기밖에 모른다. 갸라도스가 되기 전까지는.',
    horsea: '저격수. 빠르고 정확한 사격.',
    kabuto: '화석. 단단한 껍질과 날카로운 칼날.',
    houndour: '어둠의 사냥개. 더 강한 화상.',
    teddiursa: '아기 곰. HP가 많고 발톱이 묵직하다.',
    aron: '갑옷. 최고의 방어, 하지만 매우 느리다.',
    trapinch: '개미지옥. 구덩이를 파고 드래곤이 된다.',
    swablu: '솜털 새. 회복하고 노래하다 드래곤이 된다.',
    electrike: '번개. 빠르게 달리고 재충전도 빠르다.',
    shuppet: '저주 인형. 상태 이상과 저주.',
    bagon: '하늘을 꿈꾼다. 알에서부터 드래곤의 불꽃.',
    slakoth: '나무늘보. 굼뜨지만 한 방이 매우 세다.',
    feebas: '가장 수수한 포켓몬. 가장 아름다워지기 전까지는.',
    deino: '눈먼 물기꾼. 세게 물고, 머리가 셋이 되면 더 많이 쏜다.',
    munchlax: '먹보 탱커. HP, 방어, 재생이 높고 멀리서 아이템을 끌어당긴다.',
    articuno: '얼음의 새. 넓은 기술 범위와 적을 느리게 하는 냉기를 지녀요.',
    zapdos: '천둥의 새. 빠르게 움직이며 접촉한 적을 마비시켜요.',
    moltres: '불꽃의 새. 높은 데미지를 주고 접촉한 적을 불태워요.',
    raikou: '번개처럼 달리는 전설. 세 맹수 중 가장 빨라요.',
    entei: '살아 있는 화산. 강력하고 튼튼해요.',
    suicune: '북풍의 화신. 우아하게 움직이며 HP를 회복해요.',
    regirock: '바위 거인. 느리지만 방어력이 뛰어나요.',
    regice: '얼음 거인. 넓은 기술 범위와 단단한 몸을 지녀요.',
    registeel: '강철 거인. 가장 두꺼운 장갑을 지녀요.',
    mew: '모든 포켓몬의 조상. 다양한 기술을 배우고 빠르게 성장해요.',
    celebi: '시간의 수호자. 끊임없이 HP를 회복해요.',
    jirachi: '소원을 이루는 별. 레어 카드와 포켓달러를 더 많이 얻어요.',
    mewtwo: '최강의 초능력. 압도적인 에스퍼 데미지를 줘요.',
    lugia: '바다의 수호자. HP가 가득 차 있을 때 특히 튼튼해요.',
    hoOh: '무지갯빛 전설. 성스러운 불꽃과 꾸준한 회복을 지녀요.',
    kyogre: '바다의 지배자. 비를 부르고 원시회귀해요.',
    groudon: '대지의 지배자. 햇살을 부르고 원시회귀해요.',
    rayquaza: '하늘의 지배자. 날씨의 영향을 받지 않고 메가진화해요.',
    dialga: '시간의 지배자. 단단하며 끈질기게 공격해요.',
    latias: '날렵한 무한포켓몬. 용암과 함정 위를 떠다녀요.',
    latios: '예리한 무한포켓몬. 빠르게 움직이며 먼 곳을 공격해요.',
    deoxys: '우주 바이러스. 필살기로 네 가지 폼을 바꿔요.',
    arceus: '태초의 존재. 지역에 따라 타입이 바뀌어요.',
  },
  specials: {
    blastBurn: '불꽃을 두르고 돌진해 화염의 흔적을 남긴다.',
    hydroCannon: '이동하는 방향으로 집중 포격을 날린다.',
    frenzyPlant: '땅에서 뿌리가 고리 모양으로 솟아나 적을 둔화시킨다.',
    boomburst: '주변의 모든 것을 밀어내는 충격파.',
    boltStrike: '가장 가까운 적들에게 번개가 내리꽂혀 마비시키기도 한다.',
    doomDesire: '가장 가까운 적들에게 강철 빛기둥이 떨어진다. 수는 적지만 묵직하다.',
    lightOfRuin: '가장 가까운 적들에게 빛줄기가 떨어져 잠재우기도 한다.',
    expandingForce: '주변으로 퍼지는 염동력 파동이 적을 밀어내고 둔화시킨다.',
    nightDaze: '주변으로 퍼지는 어둠의 파동이 적을 밀어내고 잠재우기도 한다.',
    dracoMeteor: '주변에 유성우가 쏟아져 화상을 입히기도 한다.',
    diamondStorm: '주변에 바위가 쏟아져 강하게 때리고 밀어낸다.',
    blizzard: '주변에 고드름이 쏟아져 적을 둔화시킨다.',
    astralBarrage: '그림자 구슬을 사방으로 고리처럼 발사해 마비시키기도 한다.',
    auraSphere: '에너지 구체를 사방으로 고리처럼 발사한다.',
    attackOrder: '독침을 사방으로 고리처럼 발사해 독을 입히기도 한다.',
    precipiceBlades: '돌칼날의 벽이 이동 방향으로 휩쓸며 적을 둔화시킨다.',
    aeroblast: '바람의 벽이 이동 방향으로 휩쓸며 적을 밀어낸다.',
    malignantChain: '조금 더 빨리 달리며 뒤에 독의 흔적을 남긴다.',
    solarBlade: '가장 가까운 적까지 베며 돌진한다. 명중 직후 다시 누르면 다음 적에게 도약한다.',
    closeCombat: '가장 가까운 적까지 연타하며 돌진한다. 명중 직후 다시 누르면 다음 적에게 도약한다.',
    dragonRush: '드래곤처럼 가장 가까운 적에게 돌진한다. 명중 직후 다시 누르면 다음 적에게 도약한다.',
    braveBird: '가장 가까운 적에게 급강하한다. 명중 직후 다시 누르면 다음 적에게 도약한다.',
    ironHead: '칼날을 앞세워 가장 가까운 적에게 돌진한다. 명중 직후 다시 누르면 다음 적에게 도약한다.',
    stanceChange: '실드폼(받는 데미지 −30%, 기술 ×0.7)과 블레이드폼(기술 ×1.3, 받는 데미지 +10%)을 전환한다.',
    formeChange: '노말폼 → 어택폼(기술 위력 ×1.35, 받는 데미지 +25%) → 디펜스폼(받는 데미지 -40%, 기술 위력 ×0.75) → 스피드폼(이동속도 +35%) 순서로 바꿔요.',
    dragonFlare: '푸른 용의 불꽃을 두르고 길게 대시해 불길의 흔적을 남기고, 끝에서 폭발한다.',
    psystrike: '주변에 거대한 염동력 파동이 세 번 퍼져 밀어내고 둔화시킨다.',
    poltergeist: '그림자 탄 24발을 사방으로 고리처럼 발사해 마비시키기도 한다.',
    moonblast: '달빛 12줄기가 가장 가까운 적들에게 내리꽂혀 잠재우기도 한다.',
    auraStorm: '최대 6번 도약하는 연쇄 대시. 착지할 때마다 파동탄이 고리 모양으로 터져 나온다.',
    stoneEdge: '주변에 돌칼날이 거세게 쏟아진다.',
    petalBlizzard: '주변에 꽃잎 파동이 세 번 퍼져 적을 둔화시킨다.',
    heatWave: '주변에 거대한 열풍이 두 번 퍼져 화상을 입히기도 한다.',
    waterPulse: '주변에 물의 파동이 네 번 퍼져 적을 둔화시키기도 한다.',
    voltTackle: '최대 6번 도약하는 전기 연쇄 대시. 착지할 때마다 전격이 고리 모양으로 터져 나온다.',
    risingVoltage: '번개 14줄기가 가장 가까운 적들에게 내리꽂혀 마비시키기도 한다.',
    hurricane: '걷는 방향으로 휩쓰는 거대한 바람의 벽.',
    solarBeam: '햇빛 12줄기가 가장 가까운 적들에게 내리꽂힌다.',
    waveCrash: '물을 두르고 최대 6번 도약하는 연쇄 대시.',
    dragonClaw: '최대 6번 도약하는 연쇄 대시. 착지할 때마다 용의 기운이 고리 모양으로 터져 나온다.',
    blazeKick: '불꽃을 두르고 최대 6번 도약하는 연쇄 대시. 화상을 입히기도 한다.',
    muddyWater: '주변에 진흙 파도가 세 번 퍼져 적을 둔화시킨다.',
    meteorMash: '주변에 강철 유성이 거세게 쏟아진다.',
    skyAttack: '최대 6번 도약하는 연쇄 대시. 착지할 때마다 바람 칼날이 고리 모양으로 터져 나온다.',
    earthPower: '주변에 대지의 파동이 세 번 퍼져 적을 둔화시킨다.',
    scaleShot: '비늘 24개를 사방으로 고리처럼 발사한다.',
    focusBlast: '에너지 구체 10개가 가장 가까운 적들에게 내리꽂힌다.',
    heatCrash: '불타는 충격 8번이 가장 가까운 적들을 강타해 화상을 입히기도 한다.',
    spikyShield: '주변에 가시 파동이 두 번 퍼져 모든 것을 밀어낸다.',
    mysticalFire: '주변에 신비한 불꽃 파동이 세 번 퍼져 화상을 입히기도 한다.',
    nightSlash: '최대 6번 도약하는 연쇄 대시. 착지할 때마다 어둠의 파동이 고리 모양으로 터져 나온다.',
    airSlash: '공기 칼날 24개를 사방으로 고리처럼 발사한다.',
    waterfall: '걷는 방향으로 휩쓰는 거대한 물의 벽.',
    zapCannon: '주변에 거대한 전기 파동이 세 번 퍼져 거의 확실히 마비시킨다.',
    bulletPunch: '쿨타임이 짧은, 최대 6번 도약하는 연쇄 대시. 착지할 때마다 강철 파편이 고리 모양으로 터져 나온다.',
    fieryWrath: '주변에 어둠의 불꽃이 거세게 쏟아져 화상을 입히기도 한다.',
    heavySlam: '거대한 강철 충격 8번이 가장 가까운 적들에게 떨어진다.',
    wildCharge: '더 빨리 달리며 마비를 일으킬 수 있는 스파크 흔적을 남긴다.',
    hyperVoice: '주변에 매혹의 음파가 세 번 퍼져 잠재우기도 한다.',
    phantomForce: '최대 6번 도약하는 연쇄 대시. 착지할 때마다 그림자가 고리 모양으로 터져 나온다.',
    sheerCold: '주변에 절대영도의 냉기가 세 번 퍼져 적을 크게 둔화시킨다.',
    doubleEdge: '급강하 공격 12번이 가장 가까운 적들에게 떨어진다.',
  },
  duo: {
    tag: '합동 기술!',
    frees: '기술 칸 1개 확보 · 한 판에 하나만 가능',
    title: '합동 기술',
    legend: '표시된 두 타입의 최대 레벨 기술(또는 진화한 기술)을 합칠 수 있어요. 한 판에 하나만 만들 수 있어요.',
    done: '완성',
    fused: (a: string, b: string, to: string) => `*${a}*와 *${b}*가 힘을 합쳐 *${to}*가 되었어요!`,
  },
  curses: {
    lifeOrb: {"upside":"데미지 +30%.","downside":"기술을 사용할 때마다 HP 1% 소모 (초당 최대 한 번, HP 1에서 멈춤)."},
    choiceBand: {"upside":"데미지 +40%.","downside":"새 기술을 배울 수 없고 이미 가진 기술만 강화할 수 있어요."},
    flameOrb: {"upside":"데미지 +25%, 상태 이상 확률 +10%.","downside":"화상으로 매초 HP 0.7% 소모 (HP 1에서 멈춤)."},
    ironBall: {"upside":"데미지 +30%, 방어 +1.","downside":"무거워서 이동속도 -13."},
  },
  curse: {
    title: "저주받은 도구!",
    subtitle: "상자 바닥에 강력한 도구가 있어요… 하지만 대가가 따라요.",
    take: "가져가기",
    leave: "두고 가기",
    note: "도구 칸을 차지하지 않으며 이번 판이 끝날 때까지 유지돼요.",
    label: "저주",
    taken: (name: string) => `*${name}* 도구를 가져왔어요… _힘에는 대가가 따라요_.`,
    left: (name: string) => `*${name}* 도구를 상자에 두었어요.`,
  },
  pokeballPick: {
    label: "몬스터볼",
    title: "몬스터볼에 새로운 것이 들어 있어요!",
    take: "가져가기",
    leave: "두고 가기",
    moveSlot: (used: number, max: number) => `기술 칸을 차지해요 (${used}/${max}칸 사용 중).`,
    itemSlot: (used: number, max: number) => `도구 칸을 차지해요 (${used}/${max}칸 사용 중).`,
    note: "두고 가면 사라져요. 이미 가진 기술과 도구의 강화는 자동으로 적용돼요.",
    left: (name: string) => `*${name}*을 두고 갔어요.`,
    itemHintTouch: "터치해서 선택",
  },
  traits: {
    healer: (name: string) => `*${name}*${ga(name)} 주변 아군을 회복시킨다. 먼저 쓰러뜨리세요!`,
    shield: (name: string) => `*${name}*${ga(name)} 데미지를 흡수하는 _보호막_으로 아군을 지킨다.`,
    summoner: (name: string) => `*${name}*${ga(name)} 몇 초마다 지원군을 부른다.`,
    kamikaze: (name: string) => `*${name}*${ga(name)} 깜빡이다가 _폭발_한다! 빨간 원 밖으로 피하세요!`,
    beam: (name: string) => `*${name}*${ga(name)} _빔_을 조준한다: 바닥의 선에서 벗어나세요!`,
    leaper: (name: string) => `*${name}*${ga(name)} 무리 위로 도약한다: _그림자_를 피하세요!`,
    spitter: (name: string) => `*${name}*의 원거리 공격은 오라를 통과해요. _계속 움직여서_ 피하세요!`,
  },
  hazards: {
    intro: "*지형 공격!* 발밑에 표시가 생기면 곧 공격이 떨어져요. _계속 움직이세요_.",
  },
  alphas: {
    tag: "우두머리",
    appeared: (name: string) => `*우두머리 ${name}* 등장! 조준할 때 _빨간 선_ 밖으로 피하세요.`,
    defeated: (name: string) => `*우두머리 ${name}* 격파! _보상_을 챙기세요.`,
    prize: "*우두머리 보상*: _레어_ 카드!",
  },
  legend: legendKo,
  legends: legendBossesKo,
}
