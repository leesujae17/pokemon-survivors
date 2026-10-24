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
  max: 'MAX',
  new: 'NEW!',
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
  socials: {
    follow: (name: string) => `${name}에서 팔로우`,
  },
  discord: { title: '디스코드', open: 'Discord', pitch: '게임 소식과 오늘의 챌린지 순위, 다른 트레이너를 만나는 커뮤니티 서버예요. 기본 언어는 영어이며 다른 언어를 위한 채널도 있어요.', linkPitch: 'Discord 계정을 연결하면 서버에 바로 참여하고 후원자 역할을 받을 수 있어요.', guestPitch: 'Discord로 로그인하면 계정을 만들거나 기존 계정에 로그인하면서 두 계정을 연결해요.', link: 'Discord 연결', signIn: 'Discord로 로그인', openServer: '서버 열기', join: '서버 참여', connected: (name) => `@${name} 계정 연결됨`, row: (name) => `Discord: @${name}`, failed: 'Discord 계정을 연결하지 못했어요. 다시 시도하세요.', gift: (name) => `계정을 연결하고 서버에 참여하면 *이로치 ${name}*을 받아요!`, cardGift: (name) => `이로치 ${name} 받기`, busy: '연결 중…', back: '뒤로' },
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
    title: 'INVITE FRIENDS',
    cardFirst: 'Get a Friendship Egg',
    cardNext: (friends, next) => `${friends}/${next} friends`,
    cardAll: (friends) => (friends === 1 ? '1 friend brought' : `${friends} friends brought`),
    how: 'How it works',
    steps: ['Your friend opens *your link*.', 'They sign in and get a *Friendship Egg* right away.', 'Once they finish *3 runs*, they count for you.'],
    tip: 'If the link opens inside X or Instagram, your friend should tap "Open in browser" before signing in.',
    link: 'Your link',
    share: 'Share link',
    copy: 'Copy link',
    copied: 'Link copied! Just paste it to your friends.',
    shareText: 'Play Pokémon Survivors with me? Join through my link and get a Friendship Egg:',
    rewards: 'Rewards',
    reward: { 1: 'Friendship Egg', 3: 'Ambassador title and frame', 5: 'Ultra rare egg', 10: 'Shiny Dratini' },
    milestone: (friends) => (friends === 1 ? '1 friend' : `${friends} friends`),
    friends: 'Your friends',
    noFriends: 'Nobody has joined through your link yet.',
    runs: (runs, need) => `${runs}/${need} runs`,
    counted: 'Counted!',
    loading: 'Loading…',
    offline: 'No connection: the friends list didn’t load.',
    guest: 'Sign in to get your invite link.',
    signIn: 'Sign in',
    noHandle: 'Create your profile (@) to get your invite link.',
    createProfile: 'Create profile',
    back: 'Back',
    hintKeys: '← → button · ENTER pick · ESC back',
    hintTouch: 'Tap a button',
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
    button: 'Gift!',
    buttonLabel: (n) => (n === 1 ? 'A Mystery Gift to open' : `${n} Mystery Gifts to open`),
    open: 'Open',
    later: 'Later',
    tapToOpen: 'Tap the box to open it!',
    more: (n) => (n === 1 ? '1 more gift waiting' : `${n} more gifts waiting`),
    next: (n) => `Next (${n})`,
    ok: 'OK',
    pickNow: 'Pick now',
    full: 'There’s an egg in here, but the incubator is full. Hatch an egg and come back to open it.',
    hintKeys: '← → choose · ENTER confirm · ESC back',
    hintTouch: 'Tap to choose',
    welcome: (from) => (from ? `@${from}님의 초대로 가입한 기념` : '초대로 가입한 기념'),
    friends: (n) => (n === 1 ? '첫 친구를 데려온 기념' : `친구 ${n}명을 데려온 기념`),
    shinyPick: '*원하는 이로치*! 명예의 전당을 터치해서 고르세요.',
    support: (tier) => (tier === 'gold' ? '골드 후원자 달성 기념 ♥' : '프로젝트 후원 기념 ♥'),
    staff: (from) => (from ? `게임 제작자 @${from}님이 보낸 선물 ♥` : '게임 제작자가 보낸 선물 ♥'),
    discord: 'For joining our Discord ♥',
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
    offWall: (total) => `${total} supporters in all. Some prefer to stay off the wall.`,
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
        banned: "This account can't suggest ideas.",
        offline: '연결이 끊겼어요. 잠시 후 다시 시도하세요.',
      },
    },
    hintKeys: '↑ ↓ ← → 선택 · ENTER 투표 · Q E 탭 · N 새 아이디어 · ESC 뒤로',
    hintTouch: '▲ 또는 ▼를 터치해서 투표',
  },
  bugReport: {
    title: 'REPORT A BUG',
    crashTitle: 'DID THE GAME CLOSE?',
    lead: 'Tell us what happened: what you were doing, what you expected and what went wrong.',
    crashLead: (run) => `Looks like the game closed by itself during your last run${run ? ` (${run})` : ''}. Tell us what happened and we'll look into it.`,
    crashText: 'The game closed by itself in the middle of a run.',
    field: 'What happened?',
    placeholder: 'E.g.: in the cave, the game froze when Onix showed up.',
    tech: 'Include technical info',
    techHint: "Version, device, screen, the run (Pokémon, time, difficulty) and the game's last errors. Nothing from your save.",
    techShow: "See what's sent",
    note: 'No account needed. If you signed in, the report goes with your @.',
    send: 'Send',
    sending: 'Sending…',
    back: 'Back',
    sent: 'Report sent. Thanks for helping make the game better!',
    errors: {
      short: (min) => `Write at least ${min} letters.`,
      invalid: "This report couldn't be sent. Check the text and try again.",
      limit: "You've sent several reports just now. Try again later.",
      offline: 'No connection. Try again in a bit.',
    },
    prompt: {
      text: 'Looks like the game closed during a run. Want to tell us what happened?',
      report: 'Report',
      dismiss: 'Not now',
    },
  },
  report: {
    title: 'REPORT',
    flag: (handle) => `Report @${handle}`,
    lead: (name, handle) => `Report ${name} (@${handle})`,
    run: (pokemon, time, difficulty) => `Run: ${pokemon} · ${time} · ${difficulty}`,
    reason: 'REASON',
    reasons: {
      cheating: { name: 'Cheating', hint: 'An impossible run or progress, an edited save.' },
      name: { name: 'Offensive name', hint: 'The name or @ is offensive.' },
      other: { name: 'Something else', hint: 'Tell us in the comment.' },
    },
    note: 'Comment (optional)',
    placeholder: 'What did you see?',
    privacy: 'The team looks at every report. Nobody finds out who reported.',
    send: 'Send',
    sending: 'Sending…',
    back: 'Back',
    thanksTitle: 'THANK YOU!',
    thanks: 'Report sent. The team will take a look. Thanks for helping keep the ranking fair!',
    ok: 'OK',
    errors: {
      self: "You can't report yourself.",
      limit: (n) => `You've already sent ${n} reports today. Try again tomorrow.`,
      banned: "This account can't send reports.",
      invalid: "It didn't go through. Check the comment and try again.",
      offline: 'No connection. Try again in a moment.',
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
    learns: (form) => `${form} can now learn:`,
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
    title: (name) => `${name} is evolving… but into what?`,
    subtitle: 'The evolution changes the type, stats, special, moves and Abilities.',
    favored: (what) => `${what} favors it`,
    moves: 'New moves',
    abilities: 'Abilities',
    special: 'Special',
    section: 'Possible evolutions',
    note: (shown, total) => `${shown} of the ${total} show up at the evolution; the weather and the place pull one of them in.`,
    noteAll: 'You pick the path at the evolution.',
    choose: (n) => `${n} options`,
    specialNote: 'At the evolution, the special becomes the chosen form’s.',
  },
  tm: {
    titleBoss: (boss: string) => `${boss} left a TM!`,
    titleFound: 'You found a TM!',
    titleLegendary: (legend: string) => `${legend}'s legendary TM!`,
    titleTutor: 'Move Tutor',
    subBoss: 'A move from outside your learnset. Learn it?',
    subLegendary: 'Only one legendary TM can be learned per run.',
    subTutor: (free: boolean) =>
      free
        ? 'I teach moves that suit your type, ones you’d never learn on your own. The first lesson is free!'
        : 'I teach moves that suit your type, ones you’d never learn on your own. I charge the run’s ₽.',
    tag: 'TM',
    free: 'FREE',
    wallet: (coins: string) => `You have ${coins}`,
    broke: 'Not enough ₽',
    pass: 'Leave it',
    passTutor: 'Not now',
    forgetTitle: (who: string, move: string) => `${who} wants to learn ${move}…`,
    forgetFull: (who: string) => `…but ${who} already knows 6 moves. Forget which one?`,
    forgetManual: '…but only one manual move fits. Forget which one?',
    keep: (move: string) => `Don’t learn ${move}`,
    poof: ['1, 2 and…', '… … …', 'Poof!'],
    forgot: (who: string, move: string) => `${who} forgot ${move}.`,
    andLearned: (who: string, move: string) => `And… ${who} learned ${move}!`,
    learned: (move: string) => `Learned *${move}*!`,
    learnedInstead: (old: string, move: string) => `Forgot _${old}_ and learned *${move}*!`,
    raised: (move: string, level: number) => `*${move}* rose to Lv ${level}!`,
    mastered: (move: string, coins: string) => `${move} is already maxed: the TM became *${coins}*.`,
    hintKeys: '↑ ↓ choose · ENTER confirm',
    hintTouch: 'Tap to choose',
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
    tutor: 'A *Move Tutor* set up a tent nearby! Stand in it for a lesson.',
    tutorEmpty: 'The Move Tutor has nothing left to teach you.',
    tutorLeft: 'The Move Tutor moved on…',
    field: {
      defense: 'Mission: an *egg* is in danger! Follow the arrow and defend the nest.',
      collect: (n) => `Mission: *${n} Poké Balls* got lost around here! Find them all in time.`,
      escort: 'Mission: a *Togepi* got lost! Find it and take it back to its nest.',
      nestRaid: "The wild Pokémon want the egg! *Stay in the ring* until it's safe.",
      ballFound: (got, of) => `Poké Ball *${got}/${of}*`,
      togepiJoin: '*Togepi* is following you! Lead it to its nest.',
      done: (coins) => `*Mission complete!* ${coins} and a level of rare cards!`,
      doneEgg: (coins) => `*Mission complete!* The egg is yours, plus ${coins} and rare cards!`,
      failed: {
        defense: 'The egg was lost…',
        collect: "Time's up: the Poké Balls are gone…",
        escort: 'Togepi ran off, scared…',
      },
      hudReach: (time) => `Egg in danger ${time}`,
      hudDefend: (left) => `Defend the egg ${left}`,
      hudAway: (left) => `Back to the nest! ${left}`,
      hudCollect: (got, of, time) => `Poké Balls ${got}/${of} · ${time}`,
      hudFind: (time) => `Find Togepi ${time}`,
      hudEscort: (time) => `Take Togepi home ${time}`,
    },
  },
  rifts: {
    open: '*전설의 균열*이 열렸다! 화살표를 따라가자.',
    closed: '균열이 닫혔다.',
    enter: (name) => `균열이 당신을 *${name}*에게 데려간다!`,
    enterShiny: (name) => `균열이 당신을 _이로치_ *${name}*에게 데려간다!`,
    cleared: (name) => `*${name}*${reul(name)} 쓰러뜨렸다! 균열이 보물을 남긴다.`,
    pairCleared: (a, b) => `*${a}* and *${b}* defeated! The rift leaves a treasure.`,
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
    names: { cottage: 'Abandoned Cottage', tunnel: 'Mine Tunnel', maze: 'Hedge Maze', ruins: 'Unown Ruins', camp: 'Abandoned Camp' },
    hints: {
      cottage: 'Someone left a crate inside…',
      tunnel: 'Go in one mouth, come out the other.',
      maze: 'A chest waits at the heart of the maze.',
      ruins: 'The altar waits in silence.',
      camp: 'A backpack left behind by the fire.',
    },
    loot: {
      cottage: 'You rummaged through the old crate!',
      maze: 'You reached the heart of the maze!',
      ruins: 'The Unown glyphs light up!',
      camp: 'You opened the forgotten backpack!',
    },
    tunnelOut: 'You came out the other side of the tunnel!',
  },
  places: {
    names: { cave: 'Dark Cave', graveyard: 'Haunted Graveyard', sky: 'Above the Clouds' },
    hudNames: { cave: 'Cave', graveyard: 'Graveyard', sky: 'Updraft' },
    open: {
      cave: 'The mouth of a *cave* showed up! Follow the arrow.',
      graveyard: 'A *graveyard* loomed out of the fog! Follow the arrow.',
      sky: 'An *updraft* rises into the sky! Follow the arrow and fly.',
    },
    sealed: {
      cave: 'Rocks fell over the cave’s mouth.',
      graveyard: 'The graveyard’s gate swung shut.',
      sky: 'The updraft died down.',
    },
    blocked: 'Only a *Flying*-type Pokémon can ride this updraft.',
    goal: {
      cave: 'Find the stairs in the dark and head down to the *treasure*!',
      graveyard: 'Every ghost you defeat stirs the *Odd Keystone*…',
      sky: 'Grab the *wings* the wind brings before it calms!',
    },
    floor: (n) => `B${n}F`,
    wind: ['Something’s stirring…', 'It’s getting closer!', 'It’s right nearby! It’s gusting hard!'],
    blownOut: 'A gust of wind blew you out of the cave!',
    monsterHouse: 'It’s a *Monster House*!',
    treasure: (coins) => `Treasure opened: *${coins}*, items and a Poké Ball!`,
    keystone: 'The *Odd Keystone* cracked and *Spiritomb* awoke!',
    keystoneShiny: 'The *Odd Keystone* cracked and a _shiny_ *Spiritomb* awoke!',
    spiritomb: '*Spiritomb* defeated! The spirits rest in peace.',
    dawnSoon: 'Dawn is breaking…',
    dawn: 'The sun rose and the ghosts faded away.',
    calmSoon: 'The wind is calming down…',
    landed: (n) => (n === 0 ? 'The wind calmed and you glided back down.' : `The wind calmed. You came back with ${n === 1 ? '1 wing' : `${n} wings`}!`),
    wings: {
      healthWing: (n) => `+${n} max HP`,
      muscleWing: (n) => `+${n}% damage`,
      resistWing: (n) => `+${n} defense`,
      swiftWing: (n) => `+${n} speed`,
      prettyWing: (n) => `worth ₽${n}`,
    },
    hudOpen: (name, time) => `${name} ${time}`,
    hudCave: (floor, time) => `${floor} · wind ${time}`,
    hudSpirits: (n, of, time) => `Spirits ${n}/${of} · ${time}`,
    hudDawn: (time) => `Dawn ${time}`,
    hudSky: (n, time) => `Wings ${n} · ${time}`,
    results: 'Places',
    fall: 'You fainted! A *rescue team* is on its way…',
    rescued: 'You were rescued back to the map. The run goes on!',
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
        '+1 seed',
        '+3 damage',
        {
          fork: [
            { name: 'Sowing', desc: 'Leaves hurting ground; +15% status damage' },
            { name: 'Runner Vine', desc: 'The seed jumps to 2 more foes; -1 damage' },
          ],
        },
        'Recharges 0.3s faster',
        '+1 seed',
        {
          fork: [
            { name: 'Seed Bomb', desc: 'Foes it faints explode; +4 damage' },
            { name: 'Second Sowing', desc: 'Recasts at once (50%); +20% area' },
          ],
        },
        '+2 seeds',
      ],
    },
    rapidSpin: {
      description: moveDescriptionsKo.rapidSpin,
      upgrades: [
        '+3 damage',
        'Spins +0.3s',
        {
          fork: [
            { name: 'Static Spin', desc: 'Arcs to 2 more foes; +10% area' },
            { name: 'Vital Spin', desc: 'Its hits heal you; +10% area' },
          ],
        },
        'Recharges 0.5s faster',
        '+4 damage',
        {
          fork: [
            { name: 'Shell Blast', desc: 'Foes it faints explode; +0.3s duration' },
            { name: 'Final Spin', desc: 'Finishes foes ≤12% HP; +15% area, +16 damage' },
          ],
        },
        '+5 damage and flings farther',
      ],
    },
    petalDance: {
      description: moveDescriptionsKo.petalDance,
      upgrades: [
        '+1 petal',
        '+3 damage',
        {
          fork: [
            { name: 'Twin Spiral', desc: 'A 2nd, wider spiral spins back; +2 damage' },
            { name: 'Fallen Petals', desc: 'Leaves hurting ground; +0.3s duration' },
          ],
        },
        '+1 petal',
        'Recharges 0.3s faster',
        {
          fork: [
            { name: 'Full Bloom', desc: 'Foes it faints explode; +4 damage' },
            { name: 'Petal Cyclone', desc: 'Pulls foes into it; +15% area' },
          ],
        },
        '+2 petals',
      ],
    },
    eruption: {
      description: moveDescriptionsKo.eruption,
      upgrades: [
        '+1 bomb',
        '+6 damage',
        {
          fork: [
            { name: 'Lava Field', desc: 'Leaves hurting ground; +10% area' },
            { name: 'Aftershock', desc: 'Recasts at once (50%); -4 damage' },
          ],
        },
        '+2 bombs',
        'Recharges 0.4s faster',
        {
          fork: [
            { name: 'Pyroclast', desc: 'Foes it faints explode; +8 damage' },
            { name: 'Raging Volcano', desc: '×1.5 vs elites & bosses; +11 damage' },
          ],
        },
        '+2 bombs and +15% area',
      ],
    },
    thrash: {
      description: moveDescriptionsKo.thrash,
      upgrades: [
        '+3 damage',
        '+1 bite per second',
        {
          fork: [
            { name: 'Chain Frenzy', desc: 'Arcs to 2 more foes; +10% area' },
            { name: 'Vital Frenzy', desc: 'Its hits heal you; +20% area' },
          ],
        },
        'Rampage +0.5s',
        '+4 damage',
        {
          fork: [
            { name: 'Rampage', desc: 'Foes it faints explode; +1 bite' },
            { name: 'Titan Rage', desc: '×1.5 vs elites & bosses; +1 bite' },
          ],
        },
        'Recharges 1s faster and +3 damage',
      ],
    },
    doubleKick: {
      description: moveDescriptionsKo.doubleKick,
      upgrades: [
        '+3 damage',
        '+20% area',
        {
          fork: [
            { name: 'Chain Kick', desc: 'Arcs to 2 more foes; -0.1s cooldown' },
            { name: 'Triple Kick', desc: 'Recasts at once (50%); +0.1s cooldown, +6 damage' },
          ],
        },
        '+4 damage',
        '+1 pair of kicks, behind you',
        {
          fork: [
            { name: 'Coup de Grâce', desc: 'Finishes foes ≤12% HP; +10 damage' },
            { name: 'Blast Kick', desc: 'Foes it faints explode; +2 damage' },
          ],
        },
        '+25% area and pushes harder',
      ],
    },
    mudShot: {
      description: moveDescriptionsKo.mudShot,
      upgrades: [
        '+3 damage',
        '+20% area',
        {
          fork: [
            { name: 'Twin Wave', desc: 'Also fires backwards; +7 damage' },
            { name: 'Mud Pit', desc: 'Leaves weakening mud; +1 wave' },
          ],
        },
        'Recharges 0.25s faster',
        '+4 damage',
        {
          fork: [
            { name: 'Splatter', desc: 'Splits in 2 on hit; +10% area, +5 damage' },
            { name: 'Mud Tide', desc: 'Flies out and back; +0.1s cooldown' },
          ],
        },
        '+1 wave and +4 damage',
      ],
    },
    woodHammer: {
      description: moveDescriptionsKo.woodHammer,
      upgrades: [
        '+6 damage',
        '+20% area',
        {
          fork: [
            { name: 'Splinters', desc: 'Arcs to 2 more foes; -0.2s cooldown' },
            { name: 'Rooted', desc: 'Leaves hurting ground; -0.3s cooldown' },
          ],
        },
        '+8 damage',
        '+20% area',
        {
          fork: [
            { name: 'Sledge', desc: 'Foes it faints explode; -0.2s cooldown, -10 damage' },
            { name: 'Lumberjack', desc: '×1.5 vs elites & bosses; -0.3s cooldown, +11 damage' },
          ],
        },
        '+10 damage',
      ],
    },
    drillPeck: {
      description: moveDescriptionsKo.drillPeck,
      upgrades: [
        '+2 damage',
        '+1 drill',
        {
          fork: [
            { name: 'Guided Drill', desc: 'Homes in on foes; +4 damage' },
            { name: 'Twin Beak', desc: 'Also fires backwards; -1 damage' },
          ],
        },
        'Recharges 0.25s faster',
        '+3 damage',
        {
          fork: [
            { name: 'Shrapnel', desc: 'Splits in 2 on hit; +10% area, +4 damage' },
            { name: 'Cutting Wind', desc: 'Leaves hurting ground; +25% area' },
          ],
        },
        '+1 drill and +3 damage',
      ],
    },
    leafTornado: {
      description: moveDescriptionsKo.leafTornado,
      upgrades: [
        '+2 damage',
        '+20% area',
        {
          fork: [
            { name: 'Hunting Twister', desc: 'Homes in on foes; +0.3s duration' },
            { name: 'Eye of the Storm', desc: 'Circles around you; +3 damage' },
          ],
        },
        '+1 whirlwind',
        '+3 damage',
        {
          fork: [
            { name: 'Green Burst', desc: 'Foes it faints explode; +20% area' },
            { name: 'Leaf Litter', desc: 'Leaves hurting ground; +20% area' },
          ],
        },
        '+1 whirlwind and +3 damage',
      ],
    },
    flameCharge: {
      description: moveDescriptionsKo.flameCharge,
      upgrades: [
        '+5 damage',
        '+20% area',
        {
          fork: [
            { name: 'Fire Trail', desc: 'Leaves hurting ground; -0.3s cooldown' },
            { name: 'Sparks', desc: 'Arcs to 2 more foes; -0.4s cooldown' },
          ],
        },
        '+6 damage',
        '+20% area',
        {
          fork: [
            { name: 'Meteor', desc: 'Foes it faints explode; -0.4s cooldown' },
            { name: 'Vital Ember', desc: 'Its hits heal you; -0.3s cooldown' },
          ],
        },
        '+8 damage and +15% area',
      ],
    },
    needleArm: {
      description: moveDescriptionsKo.needleArm,
      upgrades: [
        '+3 damage',
        '+2 needles',
        {
          fork: [
            { name: 'Static Thorns', desc: 'Arcs to 2 more foes; +0.3s duration' },
            { name: 'Vampire Thorns', desc: 'Its hits heal you; +16 damage' },
          ],
        },
        'Recharges 0.5s faster',
        '+4 damage',
        {
          fork: [
            { name: 'Cactus Bomb', desc: 'Foes it faints explode; +1 hit, -4 damage' },
            { name: 'Double Bristle', desc: 'Recasts at once (50%); +1 hit, +8 damage' },
          ],
        },
        'Quills +0.4s and +4 damage',
      ],
    },
    psybeam: {
      description: moveDescriptionsKo.psybeam,
      upgrades: [
        '+2 rings',
        '+3 damage',
        {
          fork: [
            { name: 'Twin Beam', desc: 'Also fires backwards' },
            { name: 'Cruel Mind', desc: '×1.35 vs afflicted foes; +6% status' },
          ],
        },
        'Recharges 0.25s faster',
        '+3 damage and +20% area',
        {
          fork: [
            { name: 'Prism', desc: 'Splits in 2 on hit; +1 hit' },
            { name: 'Psychic Aura', desc: 'Circles around you; +1 hit' },
          ],
        },
        '+4 damage and +6% chance to confuse',
      ],
    },
    darkestLariat: {
      description: moveDescriptionsKo.darkestLariat,
      upgrades: [
        '+3 damage',
        '+20% reach',
        {
          fork: [
            { name: 'Lasso', desc: 'Pulls foes into it; +0.3s duration' },
            { name: 'Dark Embrace', desc: 'Its hits heal you; +0.4s duration' },
          ],
        },
        'Recharges 0.4s faster',
        '+4 damage',
        {
          fork: [
            { name: 'Four Arms', desc: 'A 2nd, wider pair spins back; -2 damage' },
            { name: 'Knockout', desc: 'Finishes foes ≤12% HP; +1 arm, +9 damage' },
          ],
        },
        '+5 damage and +15% reach',
      ],
    },
    sparklingAria: {
      description: moveDescriptionsKo.sparklingAria,
      upgrades: [
        '+1 bubble',
        '+4 damage',
        {
          fork: [
            { name: 'Tide Pool', desc: 'Leaves hurting puddles; +4 damage' },
            { name: 'Foam Arc', desc: 'Arcs to 2 more foes; +20% area' },
          ],
        },
        'Recharges 0.3s faster',
        '+2 bubbles',
        {
          fork: [
            { name: 'Bubble Bomb', desc: 'Foes it faints explode; +5 damage' },
            { name: 'Encore', desc: 'Recasts at once (50%)' },
          ],
        },
        '+2 bubbles and +15% area',
      ],
    },
    snipeShot: {
      description: moveDescriptionsKo.snipeShot,
      upgrades: [
        '+5 damage',
        'Pierces +1 foe',
        {
          fork: [
            { name: 'Big Game', desc: '×1.5 vs elites & bosses; -0.2s cooldown, +8 damage' },
            { name: 'Fragment Round', desc: 'Splits in 2 on hit; -0.3s cooldown' },
          ],
        },
        '+6 damage',
        '+1 shot',
        {
          fork: [
            { name: 'Mercy Shot', desc: 'Finishes foes ≤12% HP; +1 pierce, +13 damage' },
            { name: 'Arc Round', desc: 'Arcs to 2 more foes; +2 pierce, -9 damage' },
          ],
        },
        '+8 damage',
      ],
    },
    flowerTrick: {
      description: moveDescriptionsKo.flowerTrick,
      upgrades: [
        '+1 flower',
        '+4 damage',
        {
          fork: [
            { name: 'Bouquet', desc: 'Splits in 2 on hit; -0.1s cooldown' },
            { name: 'Garden', desc: 'Leaves hurting ground; -0.2s cooldown' },
          ],
        },
        '+1 flower',
        '+5 damage',
        {
          fork: [
            { name: 'Blossom Burst', desc: 'Foes it faints explode; faster, -5 damage' },
            { name: 'Fatal Flower', desc: 'Finishes foes ≤12% HP; faster, +6 damage' },
          ],
        },
        '+2 flowers',
      ],
    },
    aquaStep: {
      description: moveDescriptionsKo.aquaStep,
      upgrades: [
        '+4 damage',
        '+20% reach',
        {
          fork: [
            { name: 'Puddles', desc: 'Leaves hurting ground; -0.2s cooldown' },
            { name: 'Vital Step', desc: 'Its hits heal you; -0.25s cooldown' },
          ],
        },
        '+5 damage',
        '+20% reach',
        {
          fork: [
            { name: 'Chain Splash', desc: 'Arcs to 2 more foes; -0.25s cooldown, +8 damage' },
            { name: 'Final Wave', desc: 'Foes it faints explode; -0.25s cooldown' },
          ],
        },
        '+6 damage and +20% reach',
      ],
    },
    ember: {
      description: '가장 가까운 적에게 불씨를 쏜다. 화상을 입힐 수 있다.',
      upgrades: [
        '+1 ember',
        '+4 damage and +10% burn chance',
        {
          fork: [
            { name: 'Homing Flame', desc: 'Embers home in on foes; 10% faster cooldown' },
            { name: 'Ember Trail', desc: 'Leave burning ground, but fly slower' },
          ],
        },
        '+1 ember',
        'Pierces +1 foe',
        {
          fork: [
            { name: 'Shatter', desc: 'Split into 2 embers on hit; +4 damage' },
            { name: 'Crossfire', desc: 'Also fires backwards; 10% slower cooldown' },
          ],
        },
        '+1 ember and +25% area',
      ],
    },
    fireSpin: {
      description: '불꽃이 주위를 회전한다. 화상을 입힐 수 있다.',
      upgrades: [
        '+1 flame',
        '+20% area',
        {
          fork: [
            { name: 'Double Ring', desc: 'Wider 2nd ring spins the other way; -3 damage' },
            { name: 'Fire Wheel', desc: 'Scorched ground and +4 damage; slower spin' },
          ],
        },
        'Lasts +0.6s',
        '+1 flame',
        {
          fork: [
            { name: 'Combustion', desc: 'Defeated foes explode; +5 damage' },
            { name: 'Fire Vortex', desc: 'Spins again right after (50%); burns harder' },
          ],
        },
        '+1 flame and spins faster',
      ],
    },
    waterGun: {
      description: '이동하는 방향으로 적을 관통하는 물줄기를 발사한다.',
      upgrades: [
        '+1 jet',
        '+3 damage',
        {
          fork: [
            { name: 'Twin Jet', desc: 'Also sprays backwards; -1 damage' },
            { name: 'Guided Jet', desc: 'Homes in and pierces +1 foe; slower' },
          ],
        },
        '0.1s faster cooldown',
        '+1 jet',
        {
          fork: [
            { name: 'Ricochet', desc: 'Bounces to 2 more foes; +4 damage' },
            { name: 'Undertow', desc: 'Jets come back, hitting again; 15% slower' },
          ],
        },
        '+1 jet and pierces +2',
      ],
    },
    whirlpool: {
      description: '가까이 다가오는 적에게 데미지를 주고 감속시키는 소용돌이를 계속 일으킨다.',
      upgrades: [
        '+20% area',
        '+2 damage',
        {
          fork: [
            { name: 'Cruel Current', desc: '×1.35 vs afflicted foes; -0.04s cooldown' },
            { name: 'Spring', desc: 'Its hits heal you; -0.08s cooldown' },
          ],
        },
        '+20% area',
        '+3 damage',
        {
          fork: [
            { name: 'Riptide', desc: 'Arcs to 2 more foes; -0.08s cooldown' },
            { name: 'Undertow', desc: 'Finishes foes ≤12% HP; -0.08s cooldown' },
          ],
        },
        '+25% area and +3 damage',
      ],
    },
    razorLeaf: {
      description: '날카로운 잎이 부메랑처럼 날아갔다 돌아온다. 독 상태로 만들 수 있다.',
      upgrades: [
        '+1 leaf',
        '+4 damage',
        {
          fork: [
            { name: 'Twin Leaves', desc: 'Also throws backwards; -2 damage' },
            { name: 'Gale', desc: 'Throws again right after (50%); +20% area' },
          ],
        },
        '+1 leaf',
        'Leaves 25% faster',
        {
          fork: [
            { name: 'Bramble', desc: 'Poison thorns on the ground; +25% poison' },
            { name: 'Leaf Burst', desc: 'Defeated foes explode; +5 damage' },
          ],
        },
        '+1 leaf',
      ],
    },
    vineWhip: {
      description: '덩굴로 멀리까지 가로로 후려친다. 독 상태로 만들 수 있다.',
      upgrades: [
        'Also strikes behind',
        '+5 damage',
        {
          fork: [
            { name: 'Roots', desc: 'Leaves hurting ground; +10% area' },
            { name: 'Chain Whip', desc: 'Arcs to 2 more foes; +20% area' },
          ],
        },
        '0.15s faster cooldown',
        '+6 damage',
        {
          fork: [
            { name: 'Thorn Burst', desc: 'Foes it faints explode; +20% area' },
            { name: 'Vampire Whip', desc: 'Its hits heal you; +10% area' },
          ],
        },
        '+8 damage',
      ],
    },
    swift: {
      description: '반드시 명중하는 유도 별을 쏜다.',
      upgrades: [
        '+1 star',
        '+3 damage',
        {
          fork: [
            { name: 'Shooting Stars', desc: 'Bounce to 2 more foes; +6 damage' },
            { name: 'Constellation', desc: '+1 star and +2 damage; they circle you' },
          ],
        },
        '+1 star',
        'Pierces +1 foe',
        {
          fork: [
            { name: 'Comet', desc: 'Foes they defeat burst into stars; +5 damage' },
            { name: 'Star Shower', desc: 'Casts again right after (50%); 12% faster' },
          ],
        },
        '+2 stars',
      ],
    },
    thunder: {
      description: '화면 안의 무작위 적에게 번개가 떨어진다. 마비시킬 수 있다.',
      upgrades: [
        '+1 bolt',
        '+8 damage',
        {
          fork: [
            { name: 'Storm', desc: '+2 smaller bolts and an echo (50%); -6 damage' },
            { name: 'Focused Bolt', desc: '1 huge bolt, +34 damage, arcs to 2 foes' },
          ],
        },
        '+1 bolt',
        '0.3s faster cooldown',
        {
          fork: [
            { name: 'Lightning Rod', desc: 'Defeated foes discharge; +10 damage' },
            { name: 'Charged Ground', desc: 'Leaves charged ground; +15% paralysis' },
          ],
        },
        '+2 bolts',
      ],
    },
    sludgeBomb: {
      description: '독 웅덩이를 남기는 오물을 던진다. 독은 중첩된다.',
      upgrades: [
        '+1 bomb',
        '+2 damage and 25% stronger poison',
        {
          fork: [
            { name: 'Bog', desc: 'Pulls foes into it; +0.3s duration' },
            { name: 'Toxic Rain', desc: 'Recasts at once (50%)' },
          ],
        },
        '+20% area',
        '+1 bomb',
        {
          fork: [
            { name: 'Corrosion', desc: '×1.35 vs afflicted foes; +1 damage' },
            { name: 'Contagion', desc: 'Fainted foes burst in poison; +3 damage' },
          ],
        },
        '+1 bomb and +20% area',
      ],
    },
    dreamEater: {
      description:
        moveDescriptionsKo.dreamEater,
      upgrades: [
        '+1 bite',
        '+4 damage',
        {
          fork: [
            { name: 'Nightmare', desc: 'Arcs to 2 more foes; +10% area' },
            { name: 'Feast', desc: 'Its hits heal you; +20% area' },
          ],
        },
        '+15% sleep chance',
        '0.3s faster cooldown',
        {
          fork: [
            { name: 'Dream Burst', desc: 'Foes it faints explode' },
            { name: 'Devourer', desc: '×1.5 vs elites & bosses; +11 damage' },
          ],
        },
        '+2 bites',
      ],
    },
    forcePalm: {
      description: moveDescriptionsKo.forcePalm,
      upgrades: [
        '+5 damage',
        '+15% paralysis chance',
        {
          fork: [
            { name: 'Chain Shock', desc: 'Arcs to 2 more foes; +10% area' },
            { name: 'Double Palm', desc: 'Recasts at once (50%); +20% area' },
          ],
        },
        '0.2s faster cooldown',
        '+1 palm',
        {
          fork: [
            { name: 'Vital Strike', desc: 'Finishes foes ≤12% HP; +16 damage' },
            { name: 'Aura Wave', desc: 'Foes it faints explode; +6 damage' },
          ],
        },
        '+25% area and +10% paralysis chance',
      ],
    },
    dig: {
      description: moveDescriptionsKo.dig,
      upgrades: [
        '+10 damage',
        '20% bigger quake',
        {
          fork: [
            { name: 'Fissure', desc: 'Leaves hurting ground; -0.4s cooldown' },
            { name: 'Ambush', desc: '×1.5 vs elites & bosses; -0.5s cooldown' },
          ],
        },
        '+12 damage',
        '+0.3s underground',
        {
          fork: [
            { name: 'Cave-in', desc: 'Foes it faints explode; -0.5s cooldown' },
            { name: 'Pitfall', desc: 'Finishes foes ≤12% HP; -0.5s cooldown, +18 damage' },
          ],
        },
        '+14 damage and 25% bigger quake',
      ],
    },
    twister: {
      description: moveDescriptionsKo.twister,
      upgrades: [
        '+2 damage',
        'Lasts +1s',
        {
          fork: [
            { name: 'Wind Trail', desc: 'Leaves hurting ground; +1 tornado, -1 damage' },
            { name: 'Grinder', desc: 'Finishes foes ≤12% HP; +1 tornado' },
          ],
        },
        '20% bigger tornadoes',
        '+3 damage',
        {
          fork: [
            { name: 'Waterspout', desc: 'Foes it faints explode; -0.5s cooldown' },
            { name: 'Tempest', desc: 'Recasts at once (50%); -0.2s cooldown' },
          ],
        },
        '+1 tornado and 15% bigger',
      ],
    },
    sandTomb: {
      description: moveDescriptionsKo.sandTomb,
      upgrades: [
        '+2 damage',
        '20% bigger vortex',
        {
          fork: [
            { name: 'Vital Sands', desc: 'Its hits heal you; +0.5s duration' },
            { name: 'Cruel Tomb', desc: '×1.35 vs afflicted foes; +1s duration' },
          ],
        },
        '0.8s faster cooldown',
        '+3 damage',
        {
          fork: [
            { name: 'Bury', desc: 'Foes it faints explode; +20% area' },
            { name: 'Hourglass', desc: 'Finishes foes ≤12% HP; +10% area, +4 damage' },
          ],
        },
        'Lasts +1.5s and +2 damage',
      ],
    },
    meteorMash: {
      description: moveDescriptionsKo.meteorMash,
      upgrades: [
        '+1 meteor',
        '+5 damage',
        {
          fork: [
            { name: 'Steel Shards', desc: 'Arcs to 2 more foes; +10% area, +13 damage' },
            { name: 'Crater', desc: 'Leaves hurting ground; +20% area' },
          ],
        },
        '0.25s faster cooldown',
        '+6 damage',
        {
          fork: [
            { name: 'Impact', desc: 'Foes it faints explode; +1 meteor' },
            { name: 'Meteor Shower', desc: 'Recasts at once (50%); +5 damage' },
          ],
        },
        '+6 damage and +20% area',
      ],
    },
    zenHeadbutt: {
      description: moveDescriptionsKo.zenHeadbutt,
      upgrades: [
        '+5 damage',
        '+20% area',
        {
          fork: [
            { name: 'Mind Wave', desc: 'Arcs to 2 more foes; -0.15s cooldown' },
            { name: 'Meditation', desc: 'Its hits heal you; -0.2s cooldown' },
          ],
        },
        '+6 damage',
        'More knockback and +15% area',
        {
          fork: [
            { name: 'Seismic Head', desc: 'Foes it faints explode; -0.2s cooldown' },
            { name: 'Enlightenment', desc: 'Finishes foes ≤12% HP; -0.15s cooldown, +13 damage' },
          ],
        },
        '+8 damage',
      ],
    },
    foulPlay: {
      description: moveDescriptionsKo.foulPlay,
      upgrades: [
        '+4 damage',
        '+1 target',
        {
          fork: [
            { name: 'Betrayal', desc: '×1.5 vs elites & bosses; -0.1s cooldown' },
            { name: 'Chain Claws', desc: 'Arcs to 2 more foes; -0.25s cooldown' },
          ],
        },
        '+5 damage',
        '25% longer reach',
        {
          fork: [
            { name: 'Low Blow', desc: 'Finishes foes ≤12% HP; +1 target, +14 damage' },
            { name: 'Snare', desc: 'Foes it faints explode; +1 target, -9 damage' },
          ],
        },
        '+6 damage',
      ],
    },
    bodySlam: {
      description: moveDescriptionsKo.bodySlam,
      upgrades: [
        '+6 damage',
        '20% bigger shockwave',
        {
          fork: [
            { name: 'Tremor', desc: 'Leaves hurting ground; -0.3s cooldown' },
            { name: 'Gravity', desc: 'The landing pulls the crowd in; -0.4s cooldown' },
          ],
        },
        '+15% paralysis chance',
        '+8 damage',
        {
          fork: [
            { name: 'Heavyweight', desc: 'Foes it faints explode; -0.4s cooldown' },
            { name: 'Static Slam', desc: 'Arcs to 2 more foes; -0.4s cooldown' },
          ],
        },
        '+10 damage and 25% bigger shockwave',
      ],
    },
    dynamicPunch: {
      description: moveDescriptionsKo.dynamicPunch,
      upgrades: [
        '+10 damage',
        '20% bigger blast',
        {
          fork: [
            { name: 'Chain Punch', desc: 'Arcs to 2 more foes; -0.3s cooldown, +10 damage' },
            { name: 'Cracked Floor', desc: 'Leaves hurting ground; -0.4s cooldown' },
          ],
        },
        '+12 damage',
        '20% bigger blast',
        {
          fork: [
            { name: 'Dynamite', desc: 'Foes it faints explode; -0.4s cooldown, -13 damage' },
            { name: 'Champion', desc: '×1.5 vs elites & bosses; -0.3s cooldown, +28 damage' },
          ],
        },
        '+16 damage',
      ],
    },
    rollout: {
      description: moveDescriptionsKo.rollout,
      upgrades: [
        '+2 damage',
        'Rolls +0.5s',
        {
          fork: [
            { name: 'Charged Rock', desc: 'Arcs to 2 more foes; -0.5s cooldown' },
            { name: 'Vital Roll', desc: 'Its hits heal you; -0.6s cooldown, +3 damage' },
          ],
        },
        '+2 damage',
        '+20% area',
        {
          fork: [
            { name: 'Avalanche', desc: 'Foes it faints explode; +0.5s duration' },
            { name: 'Steamroller', desc: '×1.5 vs elites & bosses; +0.3s duration, +16 damage' },
          ],
        },
        '+3 damage and 0.5s faster cooldown',
      ],
    },
    iceBall: {
      description: moveDescriptionsKo.iceBall,
      upgrades: [
        '+3 damage',
        '+1 ball',
        {
          fork: [
            { name: 'Ice Trail', desc: 'Leaves hurting ground; faster' },
            { name: 'Hail Arc', desc: 'Arcs to 2 more foes; +6 damage' },
          ],
        },
        '0.2s faster cooldown',
        '+4 damage',
        {
          fork: [
            { name: 'Snowslide', desc: 'Foes it faints explode; +20% area' },
            { name: 'Shatter', desc: 'Finishes foes ≤12% HP; +10% area' },
          ],
        },
        '+1 ball',
      ],
    },
    furyCutter: {
      description: moveDescriptionsKo.furyCutter,
      upgrades: [
        '+2 damage',
        '+20% area',
        {
          fork: [
            { name: 'Chain Cut', desc: 'Arcs to 2 more foes; -0.05s cooldown' },
            { name: 'Vampire Scythe', desc: 'Its hits heal you; -0.1s cooldown' },
          ],
        },
        '+3 damage',
        '+20% area',
        {
          fork: [
            { name: 'Reap', desc: 'Finishes foes ≤12% HP; -0.1s cooldown' },
            { name: 'Blast Cut', desc: 'Foes it faints explode; -0.1s cooldown' },
          ],
        },
        '+4 damage',
      ],
    },
    sacredSword: {
      description: moveDescriptionsKo.sacredSword,
      upgrades: [
        '+5 damage',
        '20% bigger blade',
        {
          fork: [
            { name: 'Holy Trail', desc: 'Leaves hurting ground; -0.2s cooldown' },
            { name: 'Dragonslayer', desc: '×1.5 vs elites & bosses; -0.25s cooldown, +7 damage' },
          ],
        },
        '+6 damage',
        '20% bigger blade',
        {
          fork: [
            { name: 'Double Slash', desc: 'Recasts at once (50%); +6 damage' },
            { name: 'Judgment', desc: 'Foes it faints explode; +1 swing' },
          ],
        },
        '+7 damage',
      ],
    },
    dragonDarts: {
      description: moveDescriptionsKo.dragonDarts,
      upgrades: [
        '+3 damage',
        'Faster darts',
        {
          fork: [
            { name: 'Twin Darts', desc: 'Splits in 2 on hit; -0.1s cooldown, +16 damage' },
            { name: 'Escort', desc: 'Circles around you; -0.15s cooldown, -7 damage' },
          ],
        },
        '+4 damage',
        '+2 darts',
        {
          fork: [
            { name: 'Ricochet', desc: 'Bounces to 2 more foes; +3 damage' },
            { name: 'Bosshunter', desc: '×1.5 vs elites & bosses; +16 damage' },
          ],
        },
        '0.2s faster cooldown and +3 damage',
      ],
    },
    snarl: {
      description: moveDescriptionsKo.snarl,
      upgrades: [
        '+3 damage',
        '20% bigger waves',
        {
          fork: [
            { name: 'Chain Snarl', desc: 'Arcs to 2 more foes; -0.15s cooldown' },
            { name: 'Hunger', desc: 'Its hits heal you; -0.25s cooldown' },
          ],
        },
        '+4 damage',
        '+1 wave',
        {
          fork: [
            { name: 'Pack Burst', desc: 'Foes it faints explode; +20% area' },
            { name: 'Predator', desc: 'Finishes foes ≤12% HP; +10% area' },
          ],
        },
        '+5 damage and +1 wave',
      ],
    },
    gigaImpact: {
      description: moveDescriptionsKo.gigaImpact,
      upgrades: [
        '+10 damage',
        '20% bigger impact',
        {
          fork: [
            { name: 'Collapse', desc: 'Pulls foes into it; -0.6s cooldown, +10 damage' },
            { name: 'Shock Wave', desc: 'Arcs to 2 more foes; -0.8s cooldown' },
          ],
        },
        '+14 damage',
        'Catches its breath 0.25s sooner',
        {
          fork: [
            { name: 'Cataclysm', desc: 'Foes it faints explode; -0.8s cooldown' },
            { name: 'Titan', desc: '×1.5 vs elites & bosses; -0.6s cooldown, +15 damage' },
          ],
        },
        '+18 damage and 25% bigger impact',
      ],
    },
    flail: {
      description: moveDescriptionsKo.flail,
      upgrades: [
        '+3 damage',
        '+1 slap',
        {
          fork: [
            { name: 'Second Wind', desc: 'Its hits heal you; +10% area' },
            { name: 'Lash Arc', desc: 'Arcs to 2 more foes; +20% area' },
          ],
        },
        '0.15s faster cooldown',
        '+4 damage',
        {
          fork: [
            { name: 'Desperation', desc: 'Foes it faints explode; +1 slap' },
            { name: 'Last Stand', desc: 'Finishes foes ≤12% HP; +1 slap, +4 damage' },
          ],
        },
        '+5 damage and +15% area',
      ],
    },
    boneRush: {
      description: moveDescriptionsKo.boneRush,
      upgrades: [
        '+3 damage',
        '+20% area',
        {
          fork: [
            { name: 'Bone Arc', desc: 'Arcs to 2 more foes; -0.1s cooldown' },
            { name: 'Boneyard', desc: 'Leaves hurting ground; -0.2s cooldown' },
          ],
        },
        '+1 swing',
        '+4 damage',
        {
          fork: [
            { name: 'Bone Burst', desc: 'Foes it faints explode; +20% area' },
            { name: 'Bludgeon', desc: '×1.5 vs elites & bosses; +10% area' },
          ],
        },
        '+1 swing and +4 damage',
      ],
    },
    metronome: {
      description: moveDescriptionsKo.metronome,
      upgrades: [
        '+10% power',
        '0.2s faster cooldown',
        {
          fork: [
            { name: 'Encore', desc: 'Wags again right after (50%)' },
            { name: 'Spark', desc: 'Arcs to 2 more foes; +4 damage' },
          ],
        },
        '0.2s faster cooldown',
        '+15% power',
        {
          fork: [
            { name: 'Surprise', desc: 'Foes it faints explode; -0.2s cooldown' },
            { name: 'Chaos', desc: 'Leaves hurting ground; -0.2s cooldown' },
          ],
        },
        '+15% power',
      ],
    },
    echoedVoice: {
      description: moveDescriptionsKo.echoedVoice,
      upgrades: [
        '+3 damage',
        '20% bigger waves',
        {
          fork: [
            { name: 'Reverb', desc: 'Recasts at once (50%); -4 damage' },
            { name: 'Feedback', desc: 'Arcs to 2 more foes; -0.2s cooldown, +4 damage' },
          ],
        },
        '+3 damage',
        '20% bigger waves',
        {
          fork: [
            { name: 'Boom', desc: 'Foes it faints explode; -0.2s cooldown' },
            { name: 'Final Shout', desc: 'Finishes foes ≤12% HP; -0.2s cooldown' },
          ],
        },
        '+4 damage',
      ],
    },
    curse: {
      description:
        moveDescriptionsKo.curse,
      upgrades: [
        '+0.3% of max HP per second',
        'Lasts +2s',
        {
          fork: [
            { name: 'Pact', desc: 'The curse gives you HP back; -0.8s cooldown' },
            { name: 'Plague', desc: '×1.5 vs elites & bosses; -1s cooldown' },
          ],
        },
        '+0.3% of max HP per second',
        '+1 cursed foe',
        {
          fork: [
            { name: 'Haunting', desc: 'Foes it faints explode; -1s cooldown' },
            { name: 'Sentence', desc: 'Finishes foes ≤12% HP; -0.8s cooldown' },
          ],
        },
        '+0.4% of max HP per second',
      ],
    },
    gust: {
      description: '원형으로 돌풍을 일으켜 주위의 적을 모두 날려 버린다.',
      upgrades: [
        '+3 damage',
        '+20% area',
        {
          fork: [
            { name: 'Vital Breeze', desc: 'Its hits heal you; -0.3s cooldown' },
            { name: 'Double Gust', desc: 'Recasts at once (50%); -0.1s cooldown' },
          ],
        },
        '+1 gust',
        '+4 damage',
        {
          fork: [
            { name: 'Gale', desc: 'Foes it faints explode; +30% area' },
            { name: 'Static Wind', desc: 'Arcs to 2 more foes; +20% area' },
          ],
        },
        '+1 gust',
      ],
    },
    machPunch: {
      description: '가장 가까운 적에게 빠른 펀치를 연속으로 날린다.',
      upgrades: [
        '+1 punch',
        '+3 damage',
        {
          fork: [
            { name: 'Chain Jab', desc: 'Arcs to 2 more foes; +10% area' },
            { name: 'Vital Jab', desc: 'Its hits heal you; +20% area' },
          ],
        },
        '+1 punch',
        '0.2s faster cooldown',
        {
          fork: [
            { name: 'Knockout', desc: 'Finishes foes ≤12% HP; +6 damage' },
            { name: 'Sonic Boom', desc: 'Foes it faints explode; +5 damage' },
          ],
        },
        '+2 punches',
      ],
    },
    flashCannon: {
      description: '일직선상의 모든 것을 관통하는 강철 구슬을 쏜다.',
      upgrades: [
        '+6 damage',
        '+25% area',
        {
          fork: [
            { name: 'Prism', desc: 'Splits in 2 on hit; -0.2s cooldown' },
            { name: 'Reflector', desc: 'Flies out and back; -0.1s cooldown' },
          ],
        },
        '+1 orb',
        '+8 damage',
        {
          fork: [
            { name: 'Twin Cannon', desc: 'Also fires backwards; +10% area' },
            { name: 'Armor Piercer', desc: '×1.5 vs elites & bosses; +25% area' },
          ],
        },
        '+1 orb',
      ],
    },
    spiritShackle: {
      description: '적을 관통하는 유령 화살을 부채꼴로 쏜다.',
      upgrades: [
        '+1 arrow',
        '+3 damage',
        {
          fork: [
            { name: 'Guided Arrows', desc: 'Homes in on foes; +1 pierce' },
            { name: 'Crossfire', desc: 'Also fires backwards' },
          ],
        },
        '+1 arrow',
        '0.2s faster cooldown',
        {
          fork: [
            { name: 'Ricochet', desc: 'Bounces to 2 more foes; +1 damage' },
            { name: 'Cruel Shackle', desc: '×1.35 vs afflicted foes; +6 damage' },
          ],
        },
        '+2 arrows',
      ],
    },
    waterShuriken: {
      description: '빠르고 정확한 유도 물 수리검을 던진다.',
      upgrades: [
        '+1 shuriken',
        '+2 damage',
        {
          fork: [
            { name: 'Ricochet', desc: 'Bounces to 2 more foes; -0.08s cooldown, +6 damage' },
            { name: 'Water Trail', desc: 'Leaves hurting ground; -0.12s cooldown, +7 damage' },
          ],
        },
        '+1 shuriken',
        '+3 damage',
        {
          fork: [
            { name: 'Twin Star', desc: 'Splits in 2 on hit; faster' },
            { name: 'Final Cut', desc: 'Finishes foes ≤12% HP; faster, +2 damage' },
          ],
        },
        '+2 shurikens',
      ],
    },
    crunch: {
      description: '가장 가까운 적들을 강하게 깨문다.',
      upgrades: [
        '+6 damage',
        '+1 bite',
        {
          fork: [
            { name: 'Chain Bite', desc: 'The bite jumps to 2 nearby foes; -3 damage' },
            { name: 'Double Bite', desc: 'Bites again right after (50%); +15% area' },
          ],
        },
        '0.2s faster cooldown',
        '+1 bite',
        {
          fork: [
            { name: 'Hungry Fangs', desc: 'Defeated foes burst into shadow; +8 damage' },
            { name: 'Shadow Bite', desc: 'Leaves harmful shadow behind; +20% area' },
          ],
        },
        '+1 bite and +20% area',
      ],
    },
    pyroBall: {
      description: '착지하면 폭발하는 불덩이를 걷어찬다.',
      upgrades: [
        '+1 ball',
        '+6 damage',
        {
          fork: [
            { name: 'Cinders', desc: 'Leaves hurting ground; +15% area' },
            { name: 'Spark Ball', desc: 'Arcs to 2 more foes; +25% area' },
          ],
        },
        '0.3s faster cooldown',
        '+8 damage',
        {
          fork: [
            { name: 'Golazo', desc: 'Foes it faints explode; +1 ball' },
            { name: 'Double Bounce', desc: 'Recasts at once (50%)' },
          ],
        },
        '+25% area and +6 damage',
      ],
    },
    psyshock: {
      description: '염동력 구슬이 사방으로 날아갔다 돌아온다.',
      upgrades: [
        '+1 orb',
        '+3 damage',
        {
          fork: [
            { name: 'Psychic Orbit', desc: 'Circles around you; +10% area' },
            { name: 'Shard', desc: 'Splits in 2 on hit; +20% area' },
          ],
        },
        '+1 orb',
        '+4 damage',
        {
          fork: [
            { name: 'Mind Arc', desc: 'Arcs to 2 more foes; faster' },
            { name: 'Mind Crush', desc: '×1.5 vs elites & bosses; faster' },
          ],
        },
        '+2 orbs',
      ],
    },
    earthquake: {
      description: '진동을 일으켜 주위의 모든 것에 데미지를 준다. 쿨타임이 길다.',
      upgrades: [
        '+8 damage',
        '+20% area',
        {
          fork: [
            { name: 'Aftershock', desc: 'Recasts at once (50%); -0.2s cooldown' },
            { name: 'Charged Fault', desc: 'Arcs to 2 more foes; -0.4s cooldown' },
          ],
        },
        '+1 tremor',
        '+10 damage',
        {
          fork: [
            { name: 'Fault Line', desc: 'Foes it faints explode; +25% area' },
            { name: 'Abyss', desc: 'Finishes foes ≤12% HP; +15% area' },
          ],
        },
        '+1 tremor and +10 damage',
      ],
    },
    drumBeating: {
      description: '북을 울려 적을 감속시키는 뿌리의 파동을 일으킨다.',
      upgrades: [
        '+4 damage',
        '+20% area',
        {
          fork: [
            { name: 'Cruel Beat', desc: '×1.35 vs afflicted foes; +1 beat' },
            { name: 'Vital Beat', desc: 'Its hits heal you; +1 beat' },
          ],
        },
        '0.25s faster cooldown',
        '+5 damage',
        {
          fork: [
            { name: 'Jungle Echo', desc: 'Arcs to 2 more foes; +1 beat' },
            { name: 'War Drum', desc: 'Foes it faints explode; +1 beat' },
          ],
        },
        '+25% area and +5 damage',
      ],
    },
    disarmingVoice: {
      description: '사방으로 하트의 파동을 퍼뜨린다.',
      upgrades: [
        '+2 hearts',
        '+3 damage',
        {
          fork: [
            { name: 'Bouncing Hearts', desc: 'Bounces to 2 more foes; +9 damage' },
            { name: 'Serenade', desc: 'Circles around you; -4 damage' },
          ],
        },
        '0.2s faster cooldown',
        '+2 hearts',
        {
          fork: [
            { name: 'Broken Heart', desc: 'Splits in 2 on hit; +2 damage' },
            { name: 'Sweet Voice', desc: 'Its hits heal you; +4 damage' },
          ],
        },
        '+4 hearts',
      ],
    },
    torchSong: {
      description: '타오르는 노래로 사방에 불꽃 음표를 날린다.',
      upgrades: [
        '+1 note',
        '+3 damage',
        {
          fork: [
            { name: 'Guided Notes', desc: 'Homes in on foes; +1 pierce, +10 damage' },
            { name: 'Campfire', desc: 'Circles around you; -4 damage' },
          ],
        },
        '+2 notes',
        '0.3s faster cooldown',
        {
          fork: [
            { name: 'Fireworks', desc: 'Foes it faints explode; +5 damage' },
            { name: 'Burning Stage', desc: 'Leaves hurting ground; +3 damage' },
          ],
        },
        '+2 notes and +20% area',
      ],
    },
    leafBlade: {
      description: '회전하는 칼날로 주위의 모든 것을 벤다.',
      upgrades: [
        '+4 damage',
        '+20% area',
        {
          fork: [
            { name: 'Twin Blades', desc: 'A 2nd, wider swing spins back' },
            { name: 'Clean Cut', desc: 'Finishes foes ≤12% HP; +1 blade' },
          ],
        },
        '0.2s faster cooldown',
        '+6 damage',
        {
          fork: [
            { name: 'Blast Cut', desc: 'Foes it faints explode; +20% area' },
            { name: 'Sap', desc: 'Its hits heal you; +10% area' },
          ],
        },
        '+1 blade',
      ],
    },
    razorShell: {
      description: '날카로운 조개껍질로 앞쪽을 호 모양으로 벤다.',
      upgrades: [
        'Also strikes behind',
        '+5 damage',
        {
          fork: [
            { name: 'Chain Cut', desc: 'Arcs to 2 more foes; +10% area' },
            { name: 'Pearl', desc: 'Its hits heal you; +20% area' },
          ],
        },
        '0.15s faster cooldown',
        '+6 damage',
        {
          fork: [
            { name: 'Shell Bomb', desc: 'Foes it faints explode; +20% area' },
            { name: 'Cruel Shell', desc: '×1.35 vs afflicted foes; +10% area' },
          ],
        },
        '+1 slash and +6 damage',
      ],
    },
    quickAttack: {
      description: 'Shift 또는 돌진 버튼을 누르면 앞쪽의 적을 향해 짧게 돌진한다. 지나가는 길의 모든 적을 공격하며 잠깐 무적이 된다.',
      upgrades: [
        '+5 damage',
        '+20% area',
        {
          fork: [
            { name: 'Afterimage', desc: 'Leaves hurting ground; -0.2s cooldown' },
            { name: 'Flash Step', desc: 'Arcs to 2 more foes; -0.3s cooldown, +11 damage' },
          ],
        },
        '+6 damage',
        'Longer lunge',
        {
          fork: [
            { name: 'Sonic Impact', desc: 'Foes it faints explode; -0.3s cooldown, -8 damage' },
            { name: 'Pounce', desc: 'Finishes foes ≤12% HP; -0.3s cooldown, +26 damage' },
          ],
        },
        '+8 damage and +20% area',
      ],
    },
    shockWave: {
      description: '전격이 적에게서 적으로 연쇄하며, 튈 때마다 약해진다. 마비시킬 수 있다.',
      upgrades: [
        '+1 jump',
        '+4 damage',
        {
          fork: [
            { name: 'Overload', desc: 'Defeated foes explode; 6% faster cooldown' },
            { name: 'Echo Current', desc: 'The chain strikes again (50%); -1 jump' },
          ],
        },
        '+1 jump',
        '+5 damage and +10% paralysis chance',
        {
          fork: [
            { name: 'Static Field', desc: 'Each jump leaves sparks; +10% paralysis' },
            { name: 'Branching', desc: 'Each jump forks to 2 more foes; -2 damage' },
          ],
        },
        '+2 jumps',
      ],
    },
    hex: {
      description: '저주가 적에게서 적으로 연쇄한다. 상태 이상에 걸린 적에게는 ×1.7 데미지를 준다.',
      upgrades: [
        '+1 jump',
        '+4 damage',
        {
          fork: [
            { name: 'Hex Burst', desc: 'Foes it faints explode; -0.1s cooldown, -6 damage' },
            { name: 'Soul Drain', desc: 'Its hits heal you; -0.2s cooldown, +8 damage' },
          ],
        },
        '+1 jump',
        '+5 damage',
        {
          fork: [
            { name: 'Ghostfire', desc: 'Leaves hurting ground; +25% area, -6 damage' },
            { name: 'Cursed Echo', desc: 'Recasts at once (50%); +10% area, +11 damage' },
          ],
        },
        '+2 jumps',
      ],
    },
    toxicSpikes: {
      description: '적이 밟으면 터지는 독 가시를 땅에 뿌린다. 아무도 밟지 않으면 절반의 데미지로 터진다.',
      upgrades: [
        '+6 damage',
        '+1 spike',
        {
          fork: [
            { name: 'Static Spikes', desc: 'Arcs to 2 more foes; +20% area' },
            { name: 'Toxic Puddle', desc: 'Leaves hurting ground; +10% area' },
          ],
        },
        'Last +2s',
        '+8 damage and 25% stronger poison',
        {
          fork: [
            { name: 'Chain Reaction', desc: 'Foes it faints explode; +1 spike' },
            { name: 'Cruel Venom', desc: '×1.35 vs afflicted foes; +1 spike' },
          ],
        },
        '+25% area and +6 damage',
      ],
    },
    willOWisp: {
      description: '가장 가까운 적에게 스스로 불꽃을 쏘는 도깨비불을 남긴다. 화상을 입힐 수 있다.',
      upgrades: [
        '+3 damage',
        'Lasts +1.5s',
        {
          fork: [
            { name: 'Wandering Flame', desc: 'Leaves hurting ground; +1 flame, +6 damage' },
            { name: 'Pyre', desc: 'Foes it faints explode; +1 flame, -2 damage' },
          ],
        },
        '1s faster cooldown',
        '+4 damage and +10% burn chance',
        {
          fork: [
            { name: 'Twin Wisp', desc: 'Recasts at once (50%); +0.5s duration' },
            { name: 'Lantern', desc: '×1.5 vs elites & bosses; +1.5s duration, +4 damage' },
          ],
        },
        '+1 flame per volley and +3 damage',
      ],
    },
    iceShard: {
      description: '얼음 조각을 던진다. 조각은 점점 느려지다 땅에 박혀, 밟는 적에게 데미지를 주고 감속시킨다.',
      upgrades: [
        '+1 shard',
        '+3 damage',
        {
          fork: [
            { name: 'Orbiting Shards', desc: 'Circles around you; +6 damage' },
            { name: 'Twin Fan', desc: 'Also fires backwards; +0.5s duration, -2 damage' },
          ],
        },
        '+1 shard',
        '0.2s faster cooldown',
        {
          fork: [
            { name: 'Splinter', desc: 'Splits in 2 on hit; +3 damage' },
            { name: 'Shatter', desc: 'Finishes foes ≤12% HP; +20% status, +2 damage' },
          ],
        },
        '+2 shards and +20% area',
      ],
    },
    rockTomb: {
      description: '가장 가까운 적들 위로 바위가 떨어져, 맞은 적의 발을 묶고 감속시킨다. 그림자로 낙하 지점을 알 수 있다.',
      upgrades: [
        '+1 boulder',
        '+6 damage',
        {
          fork: [
            { name: 'Rubble', desc: 'Leaves hurting ground; +10% area, +3 damage' },
            { name: 'Rock Shards', desc: 'Arcs to 2 more foes; +20% area' },
          ],
        },
        '0.3s faster cooldown',
        '+1 boulder',
        {
          fork: [
            { name: 'Rockslide', desc: 'Foes it faints explode; +8 damage' },
            { name: 'Mausoleum', desc: '×1.5 vs elites & bosses; +11 damage' },
          ],
        },
        '+1 boulder and +20% area',
      ],
    },
    pinMissile: {
      description: '양옆에서 발사된 바늘이 곡선을 그리며 가장 가까운 적에게 날아간다. 독 상태로 만들 수 있다.',
      upgrades: [
        '+1 needle',
        '+2 damage',
        {
          fork: [
            { name: 'Ricochet', desc: 'Bounces to 2 more foes' },
            { name: 'Swarm', desc: 'Also fires backwards; +1 needle, -1 damage' },
          ],
        },
        '0.15s faster cooldown',
        'Pierces +1 foe',
        {
          fork: [
            { name: 'Stingers', desc: 'Splits in 2 on hit; +2 damage' },
            { name: 'Final Sting', desc: 'Finishes foes ≤12% HP; +5 damage' },
          ],
        },
        '+2 needles',
      ],
    },
    dragonBreath: {
      description: '가장 가까운 적에게 용의 불꽃을 부채꼴로 내뿜는다. 부채꼴 중앙일수록 강하다. 화상을 입힐 수 있다.',
      upgrades: [
        'Cone +1 puff wider',
        '+3 damage',
        {
          fork: [
            { name: 'Twin Breath', desc: 'Also fires backwards; +3 damage' },
            { name: 'Scorched Earth', desc: 'Leaves hurting ground; +20% area' },
          ],
        },
        '0.15s faster cooldown',
        'Cone +1 puff wider',
        {
          fork: [
            { name: 'Draconic Fury', desc: 'Foes it faints explode; +4 damage' },
            { name: 'Cruel Flame', desc: '×1.35 vs afflicted foes; +20% status, +3 damage' },
          ],
        },
        'Cone +2 puffs wider',
      ],
    },
    flameWheel: {
      description: moveDescriptionsKo.flameWheel,
      upgrades: [
        '+3 damage',
        'Flames last +0.6s',
        {
          fork: [
            { name: 'Vital Wheel', desc: 'Its hits heal you; +10% area' },
            { name: 'Spark Wheel', desc: 'Arcs to 2 more foes; +20% area' },
          ],
        },
        '+3 damage and +10% burn chance',
        'Flames last +0.6s',
        {
          fork: [
            { name: 'Blast Wheel', desc: 'Foes it faints explode; +4 damage' },
            { name: 'Cruel Wheel', desc: '×1.35 vs afflicted foes; +2 damage' },
          ],
        },
        '+3 damage and +25% area',
      ],
    },
    solarBeam: {
      description: moveDescriptionsKo.solarBeam,
      upgrades: [
        '+8 damage',
        '+15% area',
        {
          fork: [
            { name: 'Prism Beam', desc: 'Arcs to 2 more foes; -0.4s cooldown, +9 damage' },
            { name: 'Scorched Path', desc: 'Leaves hurting ground; -0.5s cooldown' },
          ],
        },
        '+10 damage',
        '+1 beam',
        {
          fork: [
            { name: 'Supernova', desc: 'Foes it faints explode; +20% area' },
            { name: 'Full Sun', desc: '×1.5 vs elites & bosses; +10% area' },
          ],
        },
        '+12 damage and 0.4s faster cooldown',
      ],
    },
    brine: {
      description: moveDescriptionsKo.brine,
      upgrades: [
        '+1 target',
        '+5 damage',
        {
          fork: [
            { name: 'Splash Arc', desc: 'Arcs to 2 more foes; -0.1s cooldown' },
            { name: 'Salt Pool', desc: 'Leaves hurting ground; -0.2s cooldown, +4 damage' },
          ],
        },
        '+25% area',
        '+1 target',
        {
          fork: [
            { name: 'Mercy Splash', desc: 'Finishes foes ≤12% HP; +10 damage' },
            { name: 'Salt Tide', desc: 'Foes it faints explode; +7 damage' },
          ],
        },
        '+1 target and +5 damage',
      ],
    },
    electroBall: {
      description: moveDescriptionsKo.electroBall,
      upgrades: [
        '+5 damage',
        'Pierces +1 foe',
        {
          fork: [
            { name: 'Guided Ball', desc: 'Homes in on foes; -0.1s cooldown, +20 damage' },
            { name: 'Discharge', desc: 'Arcs to 2 more foes; -0.2s cooldown, -7 damage' },
          ],
        },
        '+1 orb',
        '+6 damage and +10% paralysis chance',
        {
          fork: [
            { name: 'Split Ball', desc: 'Splits in 2 on hit; +15% area' },
            { name: 'Yo-yo', desc: 'Flies out and back; +25% area' },
          ],
        },
        '+1 orb and +5 damage',
      ],
    },
    venoshock: {
      description: moveDescriptionsKo.venoshock,
      upgrades: [
        '+1 glob',
        '+4 damage',
        {
          fork: [
            { name: 'Droplets', desc: 'Splits in 2 on hit; -0.1s cooldown' },
            { name: 'Venom Trail', desc: 'Leaves poisoning ground; -0.15s cooldown' },
          ],
        },
        '+1 glob',
        '+5 damage and +10% poison chance',
        {
          fork: [
            { name: 'Ricochet', desc: 'Bounces to 2 more foes; +4 damage' },
            { name: 'Toxic Burst', desc: 'Foes it faints explode; +1 pierce' },
          ],
        },
        '+1 glob and +4 damage',
      ],
    },
    selfDestruct: {
      description: moveDescriptionsKo.selfDestruct,
      upgrades: [
        '+15 damage',
        '+15% area',
        {
          fork: [
            { name: 'Recompose', desc: 'The blast gives HP back; -0.7s cooldown' },
            { name: 'Burning Crater', desc: 'Leaves hurting ground; -1s cooldown' },
          ],
        },
        '+20 damage',
        '+15% area',
        {
          fork: [
            { name: 'Chain Reaction', desc: 'Foes it faints explode; -1s cooldown' },
            { name: 'Kamikaze', desc: '×1.5 vs elites & bosses; -0.8s cooldown' },
          ],
        },
        '+25 damage and +20% area',
      ],
    },
    roost: {
      description: moveDescriptionsKo.roost,
      upgrades: [
        '+6 gust damage',
        'Heals 2.5% HP per second',
        {
          fork: [
            { name: 'Quick Perch', desc: 'Settles twice as fast, but heals 30% less' },
            { name: 'Wind Nest', desc: 'The landing leaves hurting wind; +20% area' },
          ],
        },
        '+30% gust area',
        'Heals 3% HP per second',
        {
          fork: [
            { name: 'Blast Feathers', desc: 'Foes it faints explode; +4 damage' },
            { name: 'Deep Rest', desc: 'Heals 60% more, but takes longer to settle' },
          ],
        },
        '+10 gust damage and heals 3.5% HP per second',
      ],
    },
    focusPunch: {
      description: moveDescriptionsKo.focusPunch,
      upgrades: [
        '+18 damage',
        'Charges faster',
        {
          fork: [
            { name: 'Chain Wave', desc: 'Arcs to 2 more foes; +10% area, +31 damage' },
            { name: 'Master Strike', desc: '×1.5 vs elites & bosses; +20% area' },
          ],
        },
        '+22 damage',
        'Charges faster',
        {
          fork: [
            { name: 'Seismic Fist', desc: 'Foes it faints explode; +26 damage' },
            { name: 'Short Focus', desc: 'Charges in 5 instead of 8; +4 damage' },
          ],
        },
        '+22 damage and +20% area',
      ],
    },
    gyroBall: {
      description: moveDescriptionsKo.gyroBall,
      upgrades: [
        '+1 gear',
        '+3 damage',
        {
          fork: [
            { name: 'Vital Gear', desc: 'Its hits heal you; +10% area' },
            { name: 'Grinder', desc: 'Pulls foes into it; +20% area' },
          ],
        },
        'Spin 25% faster',
        '+1 gear',
        {
          fork: [
            { name: 'Gear Bomb', desc: 'Foes it faints explode; +4 damage' },
            { name: 'Shredder', desc: 'Finishes foes ≤12% HP; +9 damage' },
          ],
        },
        '+5 damage and +20% area',
      ],
    },
    suckerPunch: {
      description: moveDescriptionsKo.suckerPunch,
      upgrades: [
        '+4 damage',
        '+1 target per jab',
        {
          fork: [
            { name: 'Vital Counter', desc: 'Its hits heal you; -0.05s cooldown' },
            { name: 'Chain Jab', desc: 'Arcs to 2 more foes; -0.08s cooldown' },
          ],
        },
        '+20% reach',
        '+6 damage',
        {
          fork: [
            { name: 'Dirty Trick', desc: 'Finishes foes ≤12% HP; +1 target, +11 damage' },
            { name: 'Booby Trap', desc: 'Foes it faints explode; +1 target' },
          ],
        },
        '+6 damage and 0.08s faster cooldown',
      ],
    },
    futureSight: {
      description: moveDescriptionsKo.futureSight,
      upgrades: [
        '+10 damage',
        '+20% area',
        {
          fork: [
            { name: 'Singularity', desc: 'Pulls foes into it; +1 mark' },
            { name: 'Premonition', desc: 'Arcs to 2 more foes; +1 mark' },
          ],
        },
        '0.6s faster cooldown',
        '+14 damage',
        {
          fork: [
            { name: 'Prophecy', desc: 'Foes it faints explode; +1 mark' },
            { name: 'Fate', desc: '×1.5 vs elites & bosses; +1 mark, +13 damage' },
          ],
        },
        '+14 damage and +20% area',
      ],
    },
    bonemerang: {
      description: moveDescriptionsKo.bonemerang,
      upgrades: [
        '+5 damage',
        '+1 bone',
        {
          fork: [
            { name: 'Bone Trail', desc: 'Leaves hurting ground; +15% area' },
            { name: 'Charged Bone', desc: 'Arcs to 2 more foes; +25% area' },
          ],
        },
        '0.2s faster cooldown',
        '+6 damage',
        {
          fork: [
            { name: 'Blast Bone', desc: 'Foes it faints explode; +1 bone' },
            { name: 'Clean Hit', desc: 'Finishes foes ≤12% HP; +1 bone' },
          ],
        },
        '+6 damage and flies 25% faster',
      ],
    },
    stealthRock: {
      description: moveDescriptionsKo.stealthRock,
      upgrades: [
        '+1 stone',
        '+4 damage',
        {
          fork: [
            { name: 'Lodestone', desc: 'Pulls foes into it; +3s duration' },
            { name: 'Static Stones', desc: 'Arcs to 2 more foes; +3s duration' },
          ],
        },
        '+20% area',
        '+2 stones',
        {
          fork: [
            { name: 'Rock Mine', desc: 'Foes it faints explode; +6 damage' },
            { name: 'Fortress', desc: '×1.5 vs elites & bosses; +4 damage' },
          ],
        },
        '+6 damage and last +5s',
      ],
    },
    uTurn: {
      description: moveDescriptionsKo.uTurn,
      upgrades: [
        '+6 damage',
        '+20% area',
        {
          fork: [
            { name: 'Slipstream', desc: 'Leaves hurting ground; -0.2s cooldown' },
            { name: 'Vital Return', desc: 'Its hits heal you; -0.3s cooldown' },
          ],
        },
        '+8 damage',
        'Goes farther',
        {
          fork: [
            { name: 'Blast Return', desc: 'Foes it faints explode; -0.3s cooldown' },
            { name: 'Zigzag', desc: 'Arcs to 2 more foes; -0.3s cooldown, +25 damage' },
          ],
        },
        '+10 damage and +20% area',
      ],
    },
    dragonTail: {
      description: moveDescriptionsKo.dragonTail,
      upgrades: [
        '+6 damage',
        '+20% area',
        {
          fork: [
            { name: 'Vital Tail', desc: 'Its hits heal you; -0.15s cooldown' },
            { name: 'Titan Tail', desc: '×1.5 vs elites & bosses; -0.2s cooldown' },
          ],
        },
        '+7 damage',
        '+20% area',
        {
          fork: [
            { name: 'Blast Throw', desc: 'Foes it faints explode; -0.2s cooldown' },
            { name: 'Final Tail', desc: 'Finishes foes ≤12% HP; -0.2s cooldown, +12 damage' },
          ],
        },
        '+9 damage',
      ],
    },
    sheerCold: {
      description: moveDescriptionsKo.sheerCold,
      upgrades: [
        '+2 damage',
        '+15% area',
        {
          fork: [
            { name: 'Cruel Frost', desc: '×1.35 vs afflicted foes; +6 damage' },
            { name: 'Shattering Ice', desc: 'Foes it faints explode; -1 damage' },
          ],
        },
        '0.4s faster cooldown',
        '+2 damage and shatters under 27%',
        {
          fork: [
            { name: 'Double Wave', desc: 'Recasts at once (50%); +10% area' },
            { name: 'Ice Age', desc: '×1.5 vs elites & bosses; +20% area' },
          ],
        },
        '0.4s faster cooldown and shatters under 30%',
      ],
    },
    flamethrower: {
      description: '앞쪽의 모든 것을 관통하는 불길을 계속 내뿜는다.',
      upgrades: ['+5 damage and a wider jet', '+2 flames and longer reach', 'Burning ground lasts +0.8s and burns are 30% stronger', '0.15s faster cooldown and +2 flames'],
    },
    fireBlast: {
      description: '거대한 ★ 모양 불꽃이 주위를 회전한다.',
      upgrades: ['+1 fireball', '+8 damage and a bigger star', 'The star burns +0.4s longer and +15% burn chance', '0.4s faster cooldown and +8 damage'],
    },
    hydroPump: {
      description: '적을 관통하고 날려 버리는 고압 물줄기를 발사한다.',
      upgrades: ['+8 damage', 'Thicker, longer jets', '+1 jet', '0.2s faster cooldown and knocks foes farther'],
    },
    surf: {
      description: '거대한 파도가 주위로 퍼져 적을 밀어내고 감속시킨다.',
      upgrades: ['+6 damage', 'Wider waves', '+1 wave', '0.25s faster cooldown and +4 damage'],
    },
    leafStorm: {
      description: '잎의 폭풍이 사방으로 날아갔다 부메랑처럼 돌아온다.',
      upgrades: ['+4 leaves', '+6 damage', 'Bigger leaves and a longer storm', '0.25s faster cooldown and a faster spin'],
    },
    powerWhip: {
      description: '거대한 가시덩굴이 양쪽을 후려친다.',
      upgrades: ['+10 damage', 'Longer vines', '+1 vine', '0.25s faster cooldown and knocks foes farther'],
    },
    triAttack: {
      description: '불꽃, 얼음, 번개의 삼각형이 여러 적을 쫓아간다.',
      upgrades: ['+6 damage', '+20% status chance and thicker beams', '+3 beams: a second triangle', '0.25s faster cooldown and +6 damage'],
    },
    wildboltStorm: {
      description: '번개 폭풍이 화면 전체를 강타한다.',
      upgrades: ['+2 bolts', '+10 damage', 'Forks reach farther and +15% paralysis chance', '0.3s faster cooldown and +2 bolts'],
    },
    gunkShot: {
      description: '거대한 웅덩이를 남기는 산더미 같은 독성 쓰레기를 던진다.',
      upgrades: ['+1 heap of garbage', '+4 damage and 25% stronger poison', 'Bigger puddles that last +0.6s', '0.4s faster cooldown and +5 damage'],
    },
    hurricane: {
      description: '회오리가 주위를 돌며 적을 빨아들였다가 날려 버린다.',
      upgrades: ['+5 damage', '+1 tornado', 'Bigger tornadoes that last +1s', '0.6s faster cooldown and a faster spin'],
    },
    extremeSpeed: {
      description: 'Shift 또는 돌진 버튼을 누르면 번개처럼 빠르게 돌진해 적 무리를 가르고, 마지막에 충격파를 일으킨다.',
      upgrades: ['+10 damage', 'Bigger lunge and shockwave', 'Longer lunge and +6 damage', '+12 damage and knocks foes farther'],
    },
    thunderbolt: {
      description: '번개가 최대 9마리의 적에게 연쇄하며, 상당수를 마비시킨다.',
      upgrades: ['+3 targets', '+8 damage', 'The current jumps farther and +15% paralysis chance', '0.2s faster cooldown and +3 targets'],
    },
    barbBarrage: {
      description: '터지면 커다란 독구름이 되는 독침을 한 움큼씩 흩뿌린다.',
      upgrades: ['+2 barbs', '+10 damage', 'Bigger blasts and 30% stronger poison', '0.2s faster cooldown and +2 barbs'],
    },
    inferno: {
      description: '오랫동안 불꽃 폭발을 쏘아 대는 모닥불을 남긴다. 자주 화상을 입힌다.',
      upgrades: ['+6 damage', '+1 blast per volley', 'Bigger ring of fire and the bonfire lasts +2s', '1s faster cooldown and +15% burn chance'],
    },
    blizzard: {
      description: '눈보라가 주위 땅에 얼음 고리를 박아, 고리를 넘으려는 적에게 데미지를 주고 감속시킨다.',
      upgrades: ['+3 icicles', '+6 damage', 'Bigger impacts and the ice lasts +1s', '0.3s faster cooldown and +2 icicles'],
    },
    stoneEdge: {
      description: '가장 가까운 적들을 향해 땅에서 돌기둥이 줄지어 솟아오른다.',
      upgrades: ['+10 damage', '+1 row of pillars', 'Bigger pillars and longer rows', '0.3s faster cooldown and +6 damage'],
    },
    megahorn: {
      description: '거대한 뿔이 적 무리 전체를 꿰뚫으며 적을 날려 버리고 독 상태로 만든다.',
      upgrades: ['+10 damage', '+1 horn', 'Bigger horns that fly farther', '0.25s faster cooldown and +20% poison chance'],
    },
    outrage: {
      description: '용의 폭주: 여러 방향으로 동시에 부채꼴 불꽃을 내뿜으며, 매번 방향이 바뀐다.',
      upgrades: ['+5 damage', '+1 breath in the rampage', 'Bigger breaths and roar', '0.25s faster cooldown and +15% burn chance'],
    },
    jawLock: {
      description: moveDescriptionsKo.jawLock,
      upgrades: ['+1 maw', '+8 damage', '+25% area and 0.15s faster cooldown', '+1 maw and +6 damage'],
    },
    superpower: {
      description: moveDescriptionsKo.superpower,
      upgrades: ['+10 damage', '+3 punches', '+20% area', '0.25s faster cooldown and +8 damage'],
    },
    fissure: {
      description: moveDescriptionsKo.fissure,
      upgrades: ['+1 crack', '+12 damage', '+20% area', '+1 crack and 0.3s faster cooldown'],
    },
    extrasensory: {
      description: moveDescriptionsKo.extrasensory,
      upgrades: ['+1 eye', '+10 damage and +20% confusion chance', '+20% area', '+1 eye and pulls for +0.3s'],
    },
    steelBeam: {
      description: moveDescriptionsKo.steelBeam,
      upgrades: ['+6 damage', '+1 beam', 'Lasts +0.3s and +15% area', '+1 beam and +6 damage'],
    },
    infernalParade: {
      description: moveDescriptionsKo.infernalParade,
      upgrades: ['+2 flames', '+5 damage and +15% burn chance', 'Lasts +1s and the flames move faster', '+2 flames and +4 damage'],
    },
    phantomForce: {
      description: moveDescriptionsKo.phantomForce,
      upgrades: ['+2 arrows', '+10 damage', '+25% area', '+2 arrows and 0.2s faster cooldown'],
    },
    aquaCutter: {
      description: moveDescriptionsKo.aquaCutter,
      upgrades: ['+1 shuriken', '+7 damage', '+25% area', '+1 shuriken and more speed'],
    },
    searingShot: {
      description: moveDescriptionsKo.searingShot,
      upgrades: ['+1 fireball', '+10 damage', '+25% area and burns +25% stronger', '+1 fireball and 0.3s faster cooldown'],
    },
    gigaDrain: {
      description: moveDescriptionsKo.gigaDrain,
      upgrades: ['+1 vine', '+4 damage', 'Drains for +0.5s', '+2 vines and +3 damage'],
    },
    burningJealousy: {
      description: moveDescriptionsKo.burningJealousy,
      upgrades: ['+2 pillars', '+12 damage', '+25% area and burns +25% stronger', '+2 pillars and 0.3s faster cooldown'],
    },
    trailblaze: {
      description: moveDescriptionsKo.trailblaze,
      upgrades: ['+8 damage', '+20% area', '+1 blade', '0.25s faster cooldown and +8 damage'],
    },
    liquidation: {
      description: moveDescriptionsKo.liquidation,
      upgrades: ['+1 wave', '+10 damage', '+20% area and +20% mark chance', '+1 wave and 0.2s faster cooldown'],
    },
    alluringVoice: {
      description: moveDescriptionsKo.alluringVoice,
      upgrades: ['+1 wave', '+8 damage and +15% confusion chance', '+20% area', '+1 wave and 0.3s faster cooldown'],
    },
    fieryDance: {
      description: moveDescriptionsKo.fieryDance,
      upgrades: [
        '+2 flames',
        '+3 damage',
        {
          fork: [
            { name: 'Blaze', desc: 'Defeated foes explode; +25% area' },
            { name: 'Spark', desc: 'The hit jumps to 2 foes; +2 damage' },
          ],
        },
        '0.3s faster cooldown',
        '+2 flames',
        {
          fork: [
            { name: 'Live Embers', desc: '×1.35 vs afflicted foes; +25% burn, burns 30% harder' },
            { name: 'Encore', desc: 'Dances again right after (50%); +3 damage' },
          ],
        },
        '+4 damage and +20% area',
      ],
    },
    overdrive: {
      description: moveDescriptionsKo.overdrive,
      upgrades: [
        '+2 damage',
        '+20% area',
        {
          fork: [
            { name: 'Long Solo', desc: '×1.35 vs afflicted foes; +2 beats' },
            { name: 'Distortion', desc: 'The hit jumps to 2 foes; +2 damage' },
          ],
        },
        '0.3s faster cooldown',
        '+3 damage',
        {
          fork: [
            { name: 'Amplifier', desc: '×1.5 vs elites & bosses; +25% area' },
            { name: 'Encore', desc: 'Plays again right after (50%); +25% paralysis' },
          ],
        },
        '+2 beats and +2 damage',
      ],
    },
    gigatonHammer: {
      description: moveDescriptionsKo.gigatonHammer,
      upgrades: [
        '+8 damage',
        '+20% area',
        {
          fork: [
            { name: 'Shrapnel', desc: 'Defeated foes explode; +6 damage' },
            { name: 'Light Grip', desc: 'Finishes foes ≤12% HP; -0.3s cooldown' },
          ],
        },
        '+8 damage',
        '+20% area',
        {
          fork: [
            { name: 'Gigaton', desc: '×1.5 vs elites & bosses; +10 damage' },
            { name: 'Shockwave', desc: 'The hit jumps to 2 foes; +30% area' },
          ],
        },
        '+10 damage and 0.2s faster cooldown',
      ],
    },
    bitterBlade: {
      description: moveDescriptionsKo.bitterBlade,
      upgrades: [
        '+4 damage',
        '+20% area',
        {
          fork: [
            { name: 'Twin Blade', desc: 'Finishes foes ≤12% HP; a 2nd slash comes back' },
            { name: 'Bitter Ember', desc: 'Defeated foes explode; +4 damage' },
          ],
        },
        '0.2s faster cooldown',
        '+5 damage',
        {
          fork: [
            { name: 'Soul Fire', desc: '×1.35 vs afflicted foes; +30% burn' },
            { name: 'Wandering Flame', desc: 'The hit jumps to 2 foes; +20% area' },
          ],
        },
        '+6 damage and +15% area',
      ],
    },
    leechLife: {
      description: moveDescriptionsKo.leechLife,
      upgrades: [
        '+2 damage',
        'Bites +1 foe',
        {
          fork: [
            { name: 'Thirst', desc: 'Finishes foes ≤12% HP; -0.08s cooldown' },
            { name: 'Contagion', desc: 'The bite jumps to 2 foes; +1 damage' },
          ],
        },
        '+2 damage',
        '+30% reach',
        {
          fork: [
            { name: 'Swarm', desc: '×1.5 vs elites & bosses; bites +1 foe' },
            { name: 'Bloodsucker', desc: 'Defeated foes explode; +3 damage' },
          ],
        },
        '+3 damage',
      ],
    },
    fireFang: {
      description: moveDescriptionsKo.fireFang,
      upgrades: [
        '+5 damage',
        '+15% burn chance',
        {
          fork: [
            { name: 'Twin Fangs', desc: '×1.35 vs afflicted foes; bites +1 foe' },
            { name: 'Ember', desc: 'Defeated foes explode; +4 damage' },
          ],
        },
        '0.2s faster cooldown',
        '+6 damage',
        {
          fork: [
            { name: 'Deep Burn', desc: 'Leaves fire on the ground; burns 40% harder' },
            { name: 'Leaping Fire', desc: 'The bite jumps to 2 foes; +20% area' },
          ],
        },
        'Bites +1 foe and +4 damage',
      ],
    },
    furySwipes: {
      description: moveDescriptionsKo.furySwipes,
      upgrades: [
        '+2 damage',
        '+20% area',
        {
          fork: [
            { name: 'Frenzy', desc: '×1.35 vs afflicted foes; -0.15s cooldown' },
            { name: 'Long Claws', desc: 'The scratch jumps to 2 foes; +1 damage' },
          ],
        },
        '+2 damage',
        '+1 scratch',
        {
          fork: [
            { name: 'Rage', desc: 'Defeated foes explode; +2 damage' },
            { name: 'Paw Slap', desc: '×1.5 vs elites & bosses; +25% area' },
          ],
        },
        '+3 damage',
      ],
    },
    heavySlam: {
      description: moveDescriptionsKo.heavySlam,
      upgrades: [
        '+6 damage',
        '+20% area',
        {
          fork: [
            { name: 'Heavy Step', desc: 'Pulls foes in; -0.4s cooldown' },
            { name: 'Rumble', desc: 'Defeated foes explode; +4 damage' },
          ],
        },
        '+8 damage',
        '+20% area',
        {
          fork: [
            { name: 'Resonance', desc: 'The thud jumps to 2 foes; +4 damage' },
            { name: 'Heavyweight', desc: '×1.5 vs elites & bosses; +20% area' },
          ],
        },
        '+9 damage',
      ],
    },
    bulldoze: {
      description: moveDescriptionsKo.bulldoze,
      upgrades: [
        '+4 damage',
        '+20% area',
        {
          fork: [
            { name: 'Two Fronts', desc: '×1.35 vs afflicted foes; +1 wave, fanned' },
            { name: 'Landslide', desc: 'Defeated foes explode; +3 damage' },
          ],
        },
        '0.3s faster cooldown',
        '+5 damage',
        {
          fork: [
            { name: 'Rampart', desc: 'Pulls foes in; +30% area' },
            { name: 'Tremor', desc: 'The hit jumps to 2 foes; +3 damage, faster' },
          ],
        },
        '+1 wave and +4 damage',
      ],
    },
    perishSong: {
      description: moveDescriptionsKo.perishSong,
      upgrades: [
        '+8 damage',
        '1s faster cooldown',
        {
          fork: [
            { name: 'Requiem', desc: '×1.5 vs elites & bosses; +12 damage' },
            { name: 'Refrain', desc: 'Finishes foes ≤12% HP; -1.5s cooldown' },
          ],
        },
        '+10 damage',
        '1s faster cooldown',
        {
          fork: [
            { name: 'Final Verse', desc: 'Defeated foes explode; +8 damage' },
            { name: 'Quick Chorus', desc: '×1.35 vs afflicted foes; -2s cooldown, -6 damage' },
          ],
        },
        '+12 damage',
      ],
    },
    chargeBeam: {
      description: moveDescriptionsKo.chargeBeam,
      upgrades: [
        '+4 damage',
        '+20% area',
        {
          fork: [
            { name: 'Twin Beam', desc: '×1.5 vs elites & bosses; +1 beam, fanned' },
            { name: 'Sparks', desc: 'The hit jumps to 2 foes; +3 damage' },
          ],
        },
        '0.2s faster cooldown',
        '+5 damage',
        {
          fork: [
            { name: 'Long Range', desc: 'Finishes foes ≤12% HP; +30% reach' },
            { name: 'Overload', desc: 'Defeated foes explode; +5 damage' },
          ],
        },
        '+1 beam and +3 damage',
      ],
    },
    moonblast: {
      description: moveDescriptionsKo.moonblast,
      upgrades: [
        '+5 damage',
        '+20% weaken chance',
        {
          fork: [
            { name: 'Full Moon', desc: '×1.35 vs afflicted foes; goes through +2' },
            { name: 'Guiding Moon', desc: 'Homes in on the target; +3 damage' },
          ],
        },
        '0.25s faster cooldown',
        '+6 damage',
        {
          fork: [
            { name: 'Twin Moons', desc: 'Splits in 2 on a hit; +1 moon' },
            { name: 'Supermoon', desc: '×1.5 vs elites & bosses; +30% area' },
          ],
        },
        '+6 damage and +15% area',
      ],
    },
    frostBreath: {
      description: moveDescriptionsKo.frostBreath,
      upgrades: [
        '+2 damage',
        '+2 puffs',
        {
          fork: [
            { name: 'Frigid Air', desc: 'Finishes foes ≤12% HP; +30% slow' },
            { name: 'Crystals', desc: 'The hit jumps to 2 foes; +2 damage' },
          ],
        },
        '0.2s faster cooldown',
        '+3 damage',
        {
          fork: [
            { name: 'Snowstorm', desc: 'Pulls foes in; +30% area' },
            { name: 'Gale', desc: '×1.5 vs elites & bosses; +2 puffs' },
          ],
        },
        '+3 damage and +10% slow chance',
      ],
    },
    avalanche: {
      description: moveDescriptionsKo.avalanche,
      upgrades: [
        '+4 damage',
        '+20% area',
        {
          fork: [
            { name: 'Two Slopes', desc: '×1.5 vs elites & bosses; +1 avalanche' },
            { name: 'Snowball', desc: 'Defeated foes explode; +4 damage' },
          ],
        },
        '0.3s faster cooldown',
        '+5 damage',
        {
          fork: [
            { name: 'Snowslide', desc: 'Finishes foes ≤12% HP; +25% area' },
            { name: 'Ice Shards', desc: 'The hit jumps to 2 foes; +3 damage' },
          ],
        },
        '+5 damage and +1 avalanche',
      ],
    },
    rockSlide: {
      description: moveDescriptionsKo.rockSlide,
      upgrades: [
        '+1 rock',
        '+5 damage',
        {
          fork: [
            { name: 'Cave-in', desc: 'Defeated foes burst into rocks; +3 damage' },
            { name: 'Avalanche', desc: '+2 rocks and falls again (50%); -3 damage' },
          ],
        },
        'Cooldown 0.3s faster',
        '+6 damage',
        {
          fork: [
            { name: 'Rubble', desc: 'Leaves hurting rubble behind; +25% area' },
            { name: 'Splinters', desc: 'Hits jump to 2 neighbors; +4 damage' },
          ],
        },
        '+2 rocks and +5 damage',
      ],
    },
    yawn: {
      description: moveDescriptionsKo.yawn,
      upgrades: [
        '+15% area',
        '+4 damage',
        {
          fork: [
            { name: 'Double yawn', desc: 'Yawns again right after (50%); +1 damage' },
            { name: 'Heavy bubble', desc: 'Defeated foes burst; +20% area and +2 damage' },
          ],
        },
        'Cooldown 0.4s faster',
        '+5 damage',
        {
          fork: [
            { name: 'Snore', desc: 'Pops jump to 2 neighbors; +4 damage' },
            { name: 'Group nap', desc: '+1 bubble; they leave drowsy ground' },
          ],
        },
        '+1 bubble and +4 damage',
      ],
    },
    iceBeam: {
      description: moveDescriptionsKo.iceBeam,
      upgrades: [
        '+5 damage',
        '+10% freeze chance',
        {
          fork: [
            { name: 'Twin beam', desc: '+1 beam; they leave ice behind; -3 damage' },
            { name: 'Icy echo', desc: 'Fires again right after (50%); +20% area' },
          ],
        },
        'Cooldown 0.2s faster',
        '+6 damage',
        {
          fork: [
            { name: 'Prism', desc: 'Hits jump to 2 neighbors; +4 damage' },
            { name: 'Shatter', desc: 'Defeated foes burst; +15% freeze chance' },
          ],
        },
        '+1 beam and +4 damage',
      ],
    },
    discharge: {
      description: moveDescriptionsKo.discharge,
      upgrades: [
        '+6 damage',
        '+15% area',
        {
          fork: [
            { name: 'Voltaic arc', desc: 'Hits jump to 2 neighbors; +15% paralysis' },
            { name: 'Overload', desc: 'Defeated foes burst; +4 damage' },
          ],
        },
        'Cooldown 0.15s faster',
        '+7 damage',
        {
          fork: [
            { name: 'Electric echo', desc: 'Discharges again right after (50%); +15% area' },
            { name: 'High voltage', desc: '+5 damage; leaves electrified ground' },
          ],
        },
        '+8 damage and +15% area',
      ],
    },
    heatWave: {
      description: moveDescriptionsKo.heatWave,
      upgrades: [
        '+4 damage',
        '+10% burn chance',
        {
          fork: [
            { name: 'Flare-up', desc: 'The wave splits in 2 on hit; -2 damage' },
            { name: 'Both ways', desc: 'Also blows backward; +2 damage' },
          ],
        },
        'Cooldown 0.25s faster',
        '+5 damage',
        {
          fork: [
            { name: 'Combustion', desc: 'Defeated foes burst; burn +30%' },
            { name: 'Sweltering', desc: 'Blows again right after (50%); +3 damage' },
          ],
        },
        '+1 wave and +5 damage',
      ],
    },
    thunderFang: {
      description: moveDescriptionsKo.thunderFang,
      upgrades: [
        '+4 damage',
        '+1 bite',
        {
          fork: [
            { name: 'Spark', desc: 'Bites jump to 2 neighbors; +15% paralysis' },
            { name: 'Short circuit', desc: 'Defeated foes burst; +5 damage' },
          ],
        },
        'Cooldown 0.1s faster',
        '+5 damage',
        {
          fork: [
            { name: 'Double bite', desc: '+1 bite and bites again right after (50%)' },
            { name: 'Jaws', desc: '+6 damage; leaves electrified ground' },
          ],
        },
        '+1 bite and +4 damage',
      ],
    },
    lavaPlume: {
      description: moveDescriptionsKo.lavaPlume,
      upgrades: [
        '+1 geyser',
        '+4 damage',
        {
          fork: [
            { name: 'Magma', desc: 'Pools +1.2s and spread more lava' },
            { name: 'Eruption', desc: 'Defeated foes burst; +3 damage' },
          ],
        },
        'Cooldown 0.3s faster',
        '+5 damage',
        {
          fork: [
            { name: 'Tremor', desc: 'Bursts again right after (50%); +25% area' },
            { name: 'Live embers', desc: 'Geysers jump to 2 neighbors; pools +0.8s' },
          ],
        },
        '+2 geysers and +4 damage',
      ],
    },
    auroraBeam: {
      description: moveDescriptionsKo.auroraBeam,
      upgrades: [
        '+4 damage',
        '+15% weaken chance',
        {
          fork: [
            { name: 'Twin aurora', desc: '+1 beam behind you; defeated foes burst' },
            { name: 'Reflection', desc: 'Sweeps again right after (50%); +20% area' },
          ],
        },
        'Cooldown 0.25s faster',
        '+5 damage',
        {
          fork: [
            { name: 'Refraction', desc: 'Hits jump to 2 neighbors; +4 damage' },
            { name: 'Northern lights', desc: 'A 2nd, wider aurora sweeps the other way' },
          ],
        },
        '+6 damage and +15% area',
      ],
    },
    meteorBeam: {
      description:
        moveDescriptionsKo.meteorBeam,
      upgrades: [
        '+1 meteor',
        '+4 damage',
        {
          fork: [
            { name: 'Fragments', desc: 'Split in 2 on hit; +3 damage' },
            { name: 'Ricochet', desc: '+1 meteor; they ricochet to 2 more foes' },
          ],
        },
        'Cooldown 0.2s faster',
        '+5 damage',
        {
          fork: [
            { name: 'Crater', desc: '+1 meteor; defeated foes burst' },
            { name: 'Falling trail', desc: 'Leave hurting shards behind; +4 damage' },
          ],
        },
        '+2 meteors',
      ],
    },
    icyWind: {
      description: moveDescriptionsKo.icyWind,
      upgrades: [
        '+1 gust',
        '+3 damage',
        {
          fork: [
            { name: 'Whirl', desc: 'Also blows backward; +2 damage' },
            { name: 'Snowstorm', desc: '+30% area; gusts split in 2 on hit' },
          ],
        },
        'Cooldown 0.25s faster',
        '+3 damage',
        {
          fork: [
            { name: 'Frost', desc: 'Defeated foes burst; +2 damage' },
            { name: 'Gale', desc: '+2 gusts and blows again right after (50%)' },
          ],
        },
        '+2 gusts and +3 damage',
      ],
    },
    ironHead: {
      description:
        moveDescriptionsKo.ironHead,
      upgrades: [
        '+6 damage',
        'Lasts +0.5s',
        {
          fork: [
            { name: 'Shrapnel', desc: '+4 shards; foes felled by the iron burst' },
            { name: 'Steel reflex', desc: 'Cooldown −0.8s and hardens again; -4 damage' },
          ],
        },
        '+8 damage',
        'Lasts +0.5s',
        {
          fork: [
            { name: 'Hard head', desc: '+8 damage; the impact jumps to 2 neighbors' },
            { name: 'Intimidate', desc: '+25% flinch chance; leaves a steel trail' },
          ],
        },
        '+10 damage and cooldown 0.5s faster',
      ],
    },
    psystrike: {
      description: moveDescriptionsKo.psystrike,
      upgrades: [
        '+1 orb',
        '+5 damage',
        {
          fork: [
            { name: 'Return', desc: 'Orbs come back and hit again; +3 damage' },
            { name: 'Mind lock', desc: '+1 orb and they home in; -3 damage' },
          ],
        },
        'Cooldown 0.2s faster',
        '+6 damage',
        {
          fork: [
            { name: 'Double wave', desc: '+1 orb; also fires backward' },
            { name: 'Split', desc: 'Split in 2 on hit; +5 damage' },
          ],
        },
        '+1 orb and +5 damage',
      ],
    },
    ragingFury: {
      description:
        moveDescriptionsKo.ragingFury,
      upgrades: ['+4 damage', 'Flames last +0.6s and +15% area', '+5 damage and +15% burn chance', '+5 damage and +20% area'],
    },
    seedFlare: {
      description:
        moveDescriptionsKo.seedFlare,
      upgrades: ['+10 damage', '+1 ray', '+20% area', '+12 damage and 0.4s faster cooldown'],
    },
    waterSpout: {
      description: moveDescriptionsKo.waterSpout,
      upgrades: ['+2 drops', '+8 damage', '+25% area', '+2 drops and 0.2s faster cooldown'],
    },
    electroDrift: {
      description:
        moveDescriptionsKo.electroDrift,
      upgrades: ['+1 orb', '+7 damage', 'Last +0.4s and +20% area', '+1 orb and +15% paralysis chance'],
    },
    sludgeWave: {
      description:
        moveDescriptionsKo.sludgeWave,
      upgrades: ['+3 damage', '+1 wave', '+20% area and +15% poison chance', '+3 damage and 0.3s faster cooldown'],
    },
    explosion: {
      description:
        moveDescriptionsKo.explosion,
      upgrades: ['+25 damage', '+15% area', '1.2s faster cooldown', '+30 damage and +15% area'],
    },
    oblivionWing: {
      description: moveDescriptionsKo.oblivionWing,
      upgrades: ['+9 damage', '+1 beam', '0.2s faster cooldown', '+1 beam and +9 damage'],
    },
    skyUppercut: {
      description:
        moveDescriptionsKo.skyUppercut,
      upgrades: ['+20 damage', '+1 fist', '+20% area', '+24 damage and +1 fist'],
    },
    gearGrind: {
      description: moveDescriptionsKo.gearGrind,
      upgrades: ['+6 damage', '+20% area', '+1 gear', '+7 damage and 0.25s faster cooldown'],
    },
    kowtowCleave: {
      description:
        moveDescriptionsKo.kowtowCleave,
      upgrades: ['+10 damage', '+1 cleave', '+20% area', '+11 damage and 0.12s faster cooldown'],
    },
    hyperspaceHole: {
      description: moveDescriptionsKo.hyperspaceHole,
      upgrades: ['+14 damage', '+1 ring', '+20% area and they pull +0.3s longer', '+16 damage and 0.5s faster cooldown'],
    },
    thousandArrows: {
      description: moveDescriptionsKo.thousandArrows,
      upgrades: ['+3 arrows', '+9 damage', '+25% area', '+3 arrows and 0.2s faster cooldown'],
    },
    stoneAxe: {
      description:
        moveDescriptionsKo.stoneAxe,
      upgrades: ['+10 damage', '+1 splinter', 'Splinters last +4s and +15% area', '+12 damage and +1 splinter'],
    },
    firstImpression: {
      description: moveDescriptionsKo.firstImpression,
      upgrades: ['+9 damage', '+1 dash', '0.3s faster cooldown', '+10 damage and +1 dash'],
    },
    breakingSwipe: {
      description:
        moveDescriptionsKo.breakingSwipe,
      upgrades: ['+8 damage', '+20% area', '0.3s faster cooldown', '+10 damage and +15% area'],
    },
    glacialLance: {
      description:
        moveDescriptionsKo.glacialLance,
      upgrades: ['+1 lance', '+10 damage', '+20% area and +15% freeze chance', '+1 lance and 0.3s faster cooldown'],
    },
    braveBird: {
      description:
        moveDescriptionsKo.braveBird,
      upgrades: [
        '+6 damage',
        '+20% area',
        {
          fork: [
            { name: 'Crash Landing', desc: 'Defeated foes explode; +6 damage' },
            { name: 'Feather Trail', desc: 'Leaves cutting ground along the way; 0.3s faster cooldown' },
          ],
        },
        '+6 damage',
        '0.3s faster cooldown',
        {
          fork: [
            { name: 'Volt Wing', desc: 'Sparks jump to nearby foes; +4 damage' },
            { name: 'Second Flight', desc: 'Dives again right after (50%); -4 damage' },
          ],
        },
        '+8 damage and +20% area',
      ],
    },
    weatherBall: {
      description:
        moveDescriptionsKo.weatherBall,
      upgrades: [
        '+4 damage',
        '+1 ball',
        {
          fork: [
            { name: 'Cold Front', desc: 'Defeated foes explode; +4 damage' },
            { name: 'Local Weather', desc: 'Leaves weather ground where it lands; +25% area' },
          ],
        },
        '0.25s faster cooldown',
        '+4 damage and +15% area',
        {
          fork: [
            { name: 'Ball Shower', desc: '+1 ball; ×1.5 on elites and bosses' },
            { name: 'Double Front', desc: 'Throws again right after (50%); -3 damage' },
          ],
        },
        '+5 damage and +15% effect chance',
      ],
    },
    accelerock: {
      description: moveDescriptionsKo.accelerock,
      upgrades: [
        '+2 damage',
        '0.08s faster cooldown',
        {
          fork: [
            { name: 'Shards', desc: 'Chips jump to nearby foes; +1 damage' },
            { name: 'Impact', desc: 'Defeated foes explode; +3 damage' },
          ],
        },
        '+3 damage',
        '+1 dash',
        {
          fork: [
            { name: 'Pack', desc: '+1 dash and ×1.35 on foes with a status; -1 damage' },
            { name: 'Rock Echo', desc: 'Dashes again right after (50%); faster cooldown' },
          ],
        },
        '+4 damage and 0.06s faster cooldown',
      ],
    },
    zapCannon: {
      description: moveDescriptionsKo.zapCannon,
      upgrades: [
        '+3 damage',
        '+20% area',
        {
          fork: [
            { name: 'Guided', desc: 'The orb homes in on the nearest foe; +2 damage' },
            { name: 'Electric Field', desc: 'Leaves electrified ground along the way; +15% area' },
          ],
        },
        '0.4s faster cooldown',
        '+4 damage',
        {
          fork: [
            { name: 'Voltaic Arc', desc: 'Sparks jump to nearby foes; +2 damage' },
            { name: 'Twin Cannon', desc: '+1 orb and hits heal you; -3 damage' },
          ],
        },
        '+5 damage and +20% area',
      ],
    },
    aerialAce: {
      description: moveDescriptionsKo.aerialAce,
      upgrades: [
        '+3 damage',
        '+1 slash',
        {
          fork: [
            { name: 'Flock', desc: '+1 slash; ×1.5 on elites and bosses' },
            { name: 'Finishing Blow', desc: 'Defeated foes explode; +5 damage' },
          ],
        },
        '0.2s faster cooldown',
        '+4 damage',
        {
          fork: [
            { name: 'Double Cut', desc: 'Slashes again right after (50%); -3 damage' },
            { name: 'Cutting Wind', desc: 'Wind sparks jump to nearby foes; +2 damage' },
          ],
        },
        '+1 slash and +4 damage',
      ],
    },
    crossPoison: {
      description: moveDescriptionsKo.crossPoison,
      upgrades: [
        '+4 damage',
        '+15% poison chance',
        {
          fork: [
            { name: 'Toxic Ground', desc: 'Leaves a poison puddle; +20% poison chance' },
            { name: 'Lethal Blow', desc: 'Defeated foes explode; +6 damage' },
          ],
        },
        '+20% area',
        '+1 X',
        {
          fork: [
            { name: 'Double Cross', desc: 'Slashes again right after (50%); -3 damage' },
            { name: 'Leaping Toxin', desc: 'Venom sparks jump to nearby foes; +20% area' },
          ],
        },
        '+6 damage and 30% stronger poison',
      ],
    },
    bubbleBeam: {
      description: moveDescriptionsKo.bubbleBeam,
      upgrades: [
        '+2 bubbles',
        '+2 damage',
        {
          fork: [
            { name: 'Foam', desc: 'Bubbles split in 2 on hit; -1 damage' },
            { name: 'Guided Bubbles', desc: 'Bubbles home in on foes; they fly slower' },
          ],
        },
        '+2 bubbles',
        '+2 damage and +20% area',
        {
          fork: [
            { name: 'Ricochet', desc: 'Bubbles bounce to another foe; +1 damage' },
            { name: 'Twin Stream', desc: 'Also fires backwards; +0.1s cooldown' },
          ],
        },
        '+3 bubbles and +1 damage',
      ],
    },
    rockBlast: {
      description: moveDescriptionsKo.rockBlast,
      upgrades: [
        '+3 damage',
        '0.15s faster cooldown',
        {
          fork: [
            { name: 'Gravel', desc: 'Rocks split in 2 on hit; -2 damage' },
            { name: 'Skip', desc: 'Rocks bounce to another foe; +3 damage' },
          ],
        },
        '+1 rock',
        '+4 damage and +15% area',
        {
          fork: [
            { name: 'Blast Rock', desc: 'Defeated foes explode; +2 damage' },
            { name: 'Guided Rocks', desc: 'Rocks home in on foes; they fly slower' },
          ],
        },
        '+1 rock and +4 damage',
      ],
    },
    cottonSpore: {
      description: moveDescriptionsKo.cottonSpore,
      upgrades: [
        '+20% area',
        'Lasts +1s',
        {
          fork: [
            { name: 'More Fluff', desc: 'Drops another cloud right after (50%); +2 damage' },
            { name: 'Static Cotton', desc: 'Sparks jump to nearby foes; +3 damage' },
          ],
        },
        '0.6s faster cooldown',
        '+20% area and +2 damage',
        {
          fork: [
            { name: 'Two Clouds', desc: '+1 cloud on another crowd; they pull foes in' },
            { name: 'Blast Cotton', desc: 'Defeated foes explode; +30% area' },
          ],
        },
        'Lasts +1.5s and +2 damage',
      ],
    },
    wildCharge: {
      description: moveDescriptionsKo.wildCharge,
      upgrades: [
        '+4 damage',
        'Lasts +0.4s',
        {
          fork: [
            { name: 'Spark Trail', desc: 'Leaves electrified ground where you run; +1 damage' },
            { name: 'Short Circuit', desc: 'Defeated foes explode; +4 damage' },
          ],
        },
        '0.5s faster cooldown',
        '+5 damage and +10% paralysis chance',
        {
          fork: [
            { name: 'Second Wind', desc: 'Lasts +0.6s and shocks heal you' },
            { name: 'Chain Bolt', desc: 'Sparks jump to nearby foes; +2 damage' },
          ],
        },
        '+6 damage and +20% area',
      ],
    },
    playRough: {
      description: moveDescriptionsKo.playRough,
      upgrades: [
        '+2 damage',
        '+20% area',
        {
          fork: [
            { name: 'Ruckus', desc: '+1 cloud on another foe; ×1.35 on foes with a status' },
            { name: 'Dirty Fight', desc: 'Defeated foes explode; +2 damage' },
          ],
        },
        '0.3s faster cooldown',
        '+3 damage',
        {
          fork: [
            { name: 'Rematch', desc: 'Brawls again right after (50%); -1 damage' },
            { name: 'Taunt', desc: '+25% weaken chance, +20% area; pulls foes in' },
          ],
        },
        '+1 cloud and +2 damage',
      ],
    },
    spore: {
      description: moveDescriptionsKo.spore,
      upgrades: [
        '+20% area',
        '+10% sleep chance',
        {
          fork: [
            { name: 'Effect Spore', desc: 'Sleepers are poisoned too' },
            { name: 'Heavy Spore', desc: '+30% area; sleepers wake up slow' },
          ],
        },
        'Sleep lasts +0.5s',
        '0.8s faster cooldown',
        {
          fork: [
            { name: 'Double Spore', desc: 'Puffs again right after; 0.4s faster cooldown' },
            { name: 'Dream Dust', desc: 'Sleepers are marked and take more damage' },
          ],
        },
        '+20% area and sleep lasts +0.5s',
      ],
    },
    waterfall: {
      description: moveDescriptionsKo.waterfall,
      upgrades: [
        '+4 damage',
        '+1 pillar',
        {
          fork: [
            { name: 'Long Fall', desc: '+2 pillars; ×1.5 on elites and bosses' },
            { name: 'Undertow', desc: 'Defeated foes explode; +5 damage' },
          ],
        },
        '0.3s faster cooldown',
        '+5 damage and +15% area',
        {
          fork: [
            { name: 'Double Drop', desc: 'Rises again right after (50%); -3 damage' },
            { name: 'Splashes', desc: 'Droplets jump to nearby foes; +20% area' },
          ],
        },
        '+7 damage and +1 pillar',
      ],
    },
    lastResort: {
      description: moveDescriptionsKo.lastResort,
      upgrades: [
        '+8 damage',
        '+20% area',
        {
          fork: [
            { name: 'All or Nothing', desc: '+10 damage; ×1.5 on elites and bosses' },
            { name: 'Supernova', desc: 'Defeated foes explode; +30% area' },
          ],
        },
        '0.4s faster cooldown',
        '+10 damage',
        {
          fork: [
            { name: 'No Rest', desc: '0.3s faster cooldown; finishes off foes left with little HP' },
            { name: 'Encore', desc: 'Slams again right after (50%); -8 damage' },
          ],
        },
        '+12 damage and +20% area',
      ],
    },
    firePledge: {
      description: moveDescriptionsKo.firePledge,
      upgrades: ['+2 pillars and +10 damage', 'The sea of fire lasts +1s and +15% area', '+16 damage and burns 25% stronger', '+2 pillars and 0.4s faster cooldown'],
    },
    waterPledge: {
      description: moveDescriptionsKo.waterPledge,
      upgrades: ['+1 geyser and +10 damage', 'The rainbow lasts +1.2s', '+25% area and +12 damage', '+2 geysers and 0.35s faster cooldown'],
    },
    grassPledge: {
      description: moveDescriptionsKo.grassPledge,
      upgrades: ['+1 pillar and +7 damage', '+20% swamp area', '+10 damage', '+2 pillars and 0.3s faster cooldown'],
    },
    fusionFlare: {
      description: moveDescriptionsKo.fusionFlare,
      upgrades: ['+1 comet', '+18 damage and +15% area', 'Embers last +1s and +15% burn chance', '+1 comet and 0.4s faster cooldown'],
    },
    fusionBolt: {
      description: moveDescriptionsKo.fusionBolt,
      upgrades: ['+1 comet', '+36 damage and +15% area', 'Sparks last +1s and +15% paralysis chance', '+1 comet and 0.4s faster cooldown'],
    },
    ionDeluge: {
      description: moveDescriptionsKo.ionDeluge,
      upgrades: ['+1 puddle', '+9 damage and puddles last +1s', '+25% area and +10% paralysis chance', '+1 puddle and 0.3s faster cooldown'],
    },
    freezeDry: {
      description: moveDescriptionsKo.freezeDry,
      upgrades: ['+1 wave of mist', '+6 damage and +15% freeze chance', '+25% area', '+15% area and 0.3s faster cooldown'],
    },
    nightmare: {
      description: moveDescriptionsKo.nightmare,
      upgrades: ['+2 targets', '+14 damage and +15% poison chance', '+25% reach and poison 25% stronger', '+2 targets and 0.3s faster cooldown'],
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
    title: 'Cursed item!',
    subtitle: 'At the bottom of the chest lies something powerful… for a price.',
    take: 'Take it',
    leave: 'Leave it',
    note: "Takes no item slot and stays until the run's end.",
    label: 'CURSED',
    taken: (name: string) => `You took the *${name}*… _power has a price_.`,
    left: (name: string) => `You left the *${name}* in the chest.`,
  },
  pokeballPick: {
    label: 'POKÉ BALL',
    title: 'Something new in the Poké Ball!',
    take: 'Take',
    leave: 'Leave',
    moveSlot: (used: number, max: number) => `Takes a move slot (${used}/${max} in use).`,
    itemSlot: (used: number, max: number) => `Takes an item slot (${used}/${max} in use).`,
    note: "Leave it and it's gone. Upgrades to what you have go in on their own.",
    left: (name: string) => `You left *${name}* behind.`,
    itemHintTouch: 'Tap to choose',
  },
  traits: {
    healer: (name: string) => `*${name}*${ga(name)} 주변 아군을 회복시킨다. 먼저 쓰러뜨리세요!`,
    shield: (name: string) => `*${name}*${ga(name)} 데미지를 흡수하는 _보호막_으로 아군을 지킨다.`,
    summoner: (name: string) => `*${name}*${ga(name)} 몇 초마다 지원군을 부른다.`,
    kamikaze: (name: string) => `*${name}*${ga(name)} 깜빡이다가 _폭발_한다! 빨간 원 밖으로 피하세요!`,
    beam: (name: string) => `*${name}*${ga(name)} _빔_을 조준한다: 바닥의 선에서 벗어나세요!`,
    leaper: (name: string) => `*${name}*${ga(name)} 무리 위로 도약한다: _그림자_를 피하세요!`,
    spitter: (name: string) => `*${name}* spits from afar, and the shot gets past your aura: _keep moving_ to dodge it!`,
  },
  hazards: {
    intro: '*The world strikes!* The ground marks where you stand, then it lands: _keep moving_.',
  },
  alphas: {
    tag: 'ALPHA',
    appeared: (name: string) => `An *Alpha ${name}* appeared! Step off the _red line_ when it aims.`,
    defeated: (name: string) => `You beat the *Alpha ${name}*! Grab the _prize_.`,
    prize: '*Alpha prize*: _rare_ cards!',
  },
  legend: legendKo,
  legends: legendBossesKo,
}
