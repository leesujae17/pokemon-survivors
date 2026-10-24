import type { SiteLocale } from '../i18n'

/** The same text in every language: the type makes a missing translation a compile error. */
type Localized = Readonly<Record<SiteLocale, string>>

/** One change inside an update: a headline and its details, a sentence or two each. */
export type ChangelogChange = {
  title: Localized
  notes: readonly Localized[]
}

/** What shipped on one day, for players: a few highlights up top, then every change. */
export type ChangelogUpdate = {
  /** ISO date (`YYYY-MM-DD`) the update went live. One update per day, so it also names the update. */
  date: string
  title: Localized
  /** 3 to 5 one-liners, what a player most wants to hear: the lobby's Novidades shows the newest update's. */
  highlights: readonly Localized[]
  changes: readonly ChangelogChange[]
}

/**
 * Update history shown at `/novidades/`, `/en/changelog/` and `/es/novedades/`, newest first,
 * and in the lobby's Novidades (the newest update's highlights).
 * When a player-facing change ships, add it to the top update if it's from today (and revisit its
 * highlights), or open a new update on top.
 */
export const CHANGELOG: readonly ChangelogUpdate[] = [
  {
    date: '2026-10-24',
    title: { pt: 'Tradução coreana durante a partida', en: 'Complete Korean in-game text', es: 'Textos de la partida en coreano', ko: '성장 메뉴와 전투 메시지 한국어 개선' },
    highlights: [
      { pt: 'Os nomes e efeitos de todas as melhorias e ramificações agora estão em coreano.', en: 'Every upgrade and fork now has Korean names and effect descriptions.', es: 'Todas las mejoras y ramificaciones tienen nombres y efectos en coreano.', ko: '모든 기술의 레벨별 강화 효과와 분기 이름·설명을 한국어로 표시해요.' },
      { pt: 'MTs, itens amaldiçoados, missões de campo e exploração receberam tradução.', en: 'TMs, cursed items, field missions and exploration messages are translated.', es: 'Se tradujeron las MT, los objetos malditos y los mensajes de misiones y exploración.', ko: '기술머신, 저주받은 도구, 현장 미션과 탐험 알림의 영문을 한국어로 바꿨어요.' },
      { pt: 'Avisos, cartões e dicas mostram os nomes coreanos de Pokémon, golpes e itens.', en: 'Alerts, cards and tooltips use Korean Pokémon, move and item names.', es: 'Los avisos, tarjetas y descripciones muestran los nombres coreanos de Pokémon, movimientos y objetos.', ko: '알림과 카드, 상세 정보에 포켓몬·기술·도구 이름이 영어로 섞이지 않도록 고쳤어요.' },
    ],
    changes: [{
      title: { pt: 'Cobertura de tradução', en: 'Translation coverage', es: 'Cobertura de traducción', ko: '번역 누락 방지' },
      notes: [{ pt: 'As verificações cobrem os textos das melhorias, ambas as ramificações, mensagens dinâmicas e nomes dos dados de jogo. As regras e valores de combate não mudaram.', en: 'Checks cover all upgrades, both fork choices, dynamic messages and gameplay names. Combat rules and values are unchanged.', es: 'Las comprobaciones cubren mejoras, ambas ramificaciones, mensajes dinámicos y nombres del juego. Las reglas y los valores de combate no cambiaron.', ko: '강화 문구와 양쪽 분기, 동적으로 생성되는 메시지, 게임 데이터 이름을 검사해 번역 누락을 찾도록 했어요. 전투 규칙과 수치는 그대로예요.' }],
    }],
  },
  {
    date: '2026-10-23',
    title: { pt: 'Modo Lendário no Pokémon World', en: 'Legend Mode in Pokémon World', es: 'Modo Legendario en Pokémon World', ko: '포켓몬 월드에 찾아온 전설의 포켓몬' },
    highlights: [
      { pt: 'Capture 23 lendários vencendo-os como chefes e escolha-os na nova aba.', en: 'Capture 23 legendary bosses and choose them in the new tab.', es: 'Captura a 23 jefes legendarios y elígelos en la nueva pestaña.', ko: '전설 보스를 쓰러뜨려 23종을 포획하고, 새 전설의 포켓몬 탭에서 선택하세요.' },
      { pt: 'O Modo Lendário traz golpes próprios, habilidades inatas e despertares nos níveis 12 e 28.', en: 'Legend Mode brings signature moves, innate abilities and awakenings at levels 12 and 28.', es: 'El Modo Legendario incluye movimientos propios, habilidades innatas y despertares en los niveles 12 y 28.', ko: '전설 모드에서는 전용 기술과 고유 특성으로 싸우며, Lv 12와 28에 각성해요.' },
      { pt: 'Cada vitória fica salva imediatamente; capturas e a escolha Normal/Shiny continuam após recarregar.', en: 'Each victory is saved immediately; captures and Normal/Shiny choices survive reloading.', es: 'Cada victoria se guarda al instante; las capturas y la elección Normal/Shiny se conservan al recargar.', ko: '보스 승리는 즉시 저장돼요. 다시 접속해도 포획 기록과 일반·이로치 모습 선택이 유지돼요.' },
    ],
    changes: [
      {
        title: { pt: 'Captura e seleção', en: 'Capture and selection', es: 'Captura y selección', ko: '포획 조건과 선택 화면' },
        notes: [
          { pt: 'Trios e lendários das fendas pedem 3 vitórias; Mewtwo, 5; Mew, Celebi e Jirachi, 1. Arceus espera os outros 22 e só pode ser capturado no modo infinito.', en: 'Trio and rift legends require 3 wins; Mewtwo needs 5; Mew, Celebi and Jirachi need 1. Arceus requires the other 22 captures and an endless-mode defeat.', es: 'Los tríos y legendarios de grietas requieren 3 victorias; Mewtwo, 5; Mew, Celebi y Jirachi, 1. Arceus requiere las otras 22 capturas y una derrota en modo infinito.', ko: '트리오와 균열 전설은 3회, 뮤츠는 5회, 뮤·세레비·지라치는 1회 승리로 포획해요. 아르세우스는 나머지 22종을 모두 포획한 뒤 무한 모드에서 쓰러뜨려야 해요.' },
          { pt: 'A seleção mostra o progresso e onde encontrar cada um. Lendários ainda não capturados não iniciam partidas nem trocam de forma.', en: 'The selection shows capture progress and encounter hints. Uncaptured legends cannot start runs or switch forms.', es: 'La selección muestra el progreso y dónde encontrarlos. Los legendarios sin capturar no pueden iniciar partidas ni cambiar de forma.', ko: '선택 화면에서 포획 진행도와 만나는 장소를 확인할 수 있어요. 미포획 전설은 시작하거나 모습을 바꿀 수 없어요.' },
        ],
      },
    ],
  },
  {
    date: '2026-10-20',
    title: { pt: 'Lendários jogáveis e um mapa para explorar', en: 'Playable legendaries and a map to explore', es: 'Legendarios jugables y un mapa para explorar' , ko: "플레이 가능한 전설의 포켓몬과 탐험하는 맵" },
    highlights: [
      { pt: 'Modo Lendário: capture os 23 lendários vencendo-os como chefes e jogue com eles, com ranking próprio.', en: 'Legend Mode: catch all 23 legendaries by beating them as bosses, then play as them, with their own ranking.', es: 'Modo Legendario: captura a los 23 legendarios venciéndolos como jefes y juega con ellos, con su propio ranking.' , ko: "전설 모드: 보스로 등장하는 전설의 포켓몬 23종을 포획해 직접 플레이하고 전용 랭킹에 도전하세요." },
      { pt: 'Fendas épicas: o céu avisa, você atravessa o domínio do lendário, vence uma batalha em 3 fases e joga a Poké Ball.', en: 'Epic rifts: the sky warns you, you cross the legendary’s domain, win a 3-phase battle and throw the Poké Ball.', es: 'Grietas épicas: el cielo avisa, cruzas el dominio del legendario, ganas una batalla en 3 fases y lanzas la Poké Ball.' , ko: "더욱 웅장해진 균열: 하늘의 전조를 보고 전설의 영역을 통과한 뒤, 3단계 전투에서 이겨 몬스터볼을 던지세요." },
      { pt: 'Os lendários do mapa, de Articuno a Arceus, agora lutam em 3 fases, com entrada, tema próprio e um golpe supremo.', en: 'The legendaries on the map, from Articuno to Arceus, now fight in 3 phases, with an entrance, their own theme and an ultimate.', es: 'Los legendarios del mapa, de Articuno a Arceus, ahora pelean en 3 fases, con entrada, tema propio y un golpe supremo.' , ko: "프리져부터 아르세우스까지 맵의 전설 보스가 고유 등장 연출·테마·필살기를 갖춘 3단계 전투를 펼쳐요." },
      { pt: 'Pontos de interesse e tesouros pelo mapa, e lugares para entrar: uma Mystery Dungeon no escuro, um cemitério com Spiritomb e o céu.', en: 'Landmarks and treasures all over the map, and places to step into: a Mystery Dungeon in the dark, a graveyard with Spiritomb and the sky.', es: 'Puntos de interés y tesoros por el mapa, y lugares para entrar: un Mundo Misterioso a oscuras, un cementerio con Spiritomb y el cielo.' , ko: "맵 곳곳의 명소와 보물, 어두운 던전·화강돌의 묘지·구름 위 하늘을 탐험하세요." },
      { pt: 'Viu uma partida impossível no ranking? Toque na bandeira ao lado dela para denunciar.', en: 'Saw an impossible run on the ranking? Tap the flag next to it to report it.', es: '¿Viste una partida imposible en el ranking? Toca la bandera a su lado para denunciarla.' , ko: "랭킹에서 불가능해 보이는 기록을 발견했나요? 옆의 깃발을 눌러 신고할 수 있어요." },
    ],
    changes: [
      {
        title: { pt: 'Modo Lendário', en: 'Legend Mode', es: 'Modo Legendario' , ko: "전설 모드" },
        notes: [
          {
            pt: 'A ideia mais votada do mural de ideias, de @clementwong212: os lendários agora são jogáveis, num modo só deles. São 23: Articuno, Zapdos, Moltres, Raikou, Entei, Suicune, Regirock, Regice, Registeel, Mew, Celebi, Jirachi, Mewtwo, Lugia, Ho-Oh, Kyogre, Groudon, Rayquaza, Dialga, Latias, Latios, Deoxys e Arceus.',
            en: 'The most voted idea on the ideas board, from @clementwong212: legendaries are now playable, in a mode of their own. All 23 of them: Articuno, Zapdos, Moltres, Raikou, Entei, Suicune, Regirock, Regice, Registeel, Mew, Celebi, Jirachi, Mewtwo, Lugia, Ho-Oh, Kyogre, Groudon, Rayquaza, Dialga, Latias, Latios, Deoxys and Arceus.',
            es: 'La idea más votada del muro de ideas, de @clementwong212: los legendarios ahora son jugables, en un modo propio. Son 23: Articuno, Zapdos, Moltres, Raikou, Entei, Suicune, Regirock, Regice, Registeel, Mew, Celebi, Jirachi, Mewtwo, Lugia, Ho-Oh, Kyogre, Groudon, Rayquaza, Dialga, Latias, Latios, Deoxys y Arceus.',
          ko: "아이디어 게시판에서 가장 많은 표를 받은 @clementwong212님의 제안으로 전설의 포켓몬 전용 모드를 추가했어요. 프리져·썬더·파이어·라이코·앤테이·스이쿤·레지락·레지아이스·레지스틸·뮤·세레비·지라치·뮤츠·루기아·칠색조·가이오가·그란돈·레쿠쟈·디아루가·라티아스·라티오스·테오키스·아르세우스, 총 23종이에요." },
          {
            pt: 'Para capturar um lendário, vença-o como chefe, em qualquer modo: 3 vezes para os das fendas e dos trios, 5 para o Mewtwo e 1 para Mew, Celebi e Jirachi. A cada vitória ele escapa da Poké Ball e o jogo conta (Kyogre escapou… 2/3); na última, ele é seu e aparece na nova aba Lendários da seleção de parceiro. Arceus é o último troféu: só se deixa capturar no modo sem fim, depois dos outros 22.',
            en: 'To catch a legendary, beat it as a boss, in any mode: 3 times for the rift and trio legendaries, 5 for Mewtwo and once for Mew, Celebi and Jirachi. Every win before that it breaks free from the Poké Ball and the game keeps count (Kyogre broke free… 2/3); on the last one it’s yours and shows up in the new Legendaries tab of the partner select. Arceus is the final trophy: it can only be caught in endless mode, after the other 22.',
            es: 'Para capturar un legendario, véncelo como jefe, en cualquier modo: 3 veces los de las grietas y los tríos, 5 a Mewtwo y 1 a Mew, Celebi y Jirachi. En cada victoria se escapa de la Poké Ball y el juego lleva la cuenta (Kyogre se escapó… 2/3); en la última es tuyo y aparece en la nueva pestaña Legendarios de la selección de compañero. Arceus es el último trofeo: solo se deja capturar en el modo infinito, después de los otros 22.',
          ko: "어느 모드에서든 보스로 쓰러뜨리면 포획 횟수가 쌓여요. 균열·트리오는 3회, 뮤츠는 5회, 뮤·세레비·지라치는 1회가 필요해요. 그전에는 몬스터볼에서 빠져나오며 진행도(가이오가가 빠져나왔다… 2/3)가 표시돼요. 포획하면 파트너 선택의 전설의 포켓몬 탭에서 고를 수 있어요. 아르세우스는 나머지 22종을 모두 포획한 뒤 무한 모드에서만 잡을 수 있어요." },
          {
            pt: 'Lendários não evoluem: eles despertam no Nv 12 e no Nv 28, com Habilidade, mais força e uma carga de Esquecer. No segundo despertar, Kyogre e Groudon viram Primal e Rayquaza vira Mega; Latias, Latios e Mewtwo (Y) Mega Evoluem com o botão Mega, e o especial do Deoxys troca de Forma. Cada um começa com o seu golpe lendário e uma Habilidade inata sempre ativa: Drizzle traz a chuva, Drought o sol, Air Lock deixa o Rayquaza imune ao clima, Levitate faz os Latis flutuarem sobre a lava.',
            en: 'Legendaries don’t evolve: they awaken at Lv 12 and Lv 28, with an Ability, more power and a Forget charge. On the second awakening, Kyogre and Groudon turn Primal and Rayquaza turns Mega; Latias, Latios and Mewtwo (Y) Mega Evolve with the Mega button, and Deoxys’s special swaps its Forme. Each one opens with its legendary move and an innate Ability that’s always on: Drizzle brings the rain, Drought the sun, Air Lock makes Rayquaza immune to the weather, Levitate floats the Latis over lava.',
            es: 'Los legendarios no evolucionan: despiertan en el Nv 12 y en el Nv 28, con Habilidad, más fuerza y una carga de Olvidar. En el segundo despertar, Kyogre y Groudon se vuelven Primigenios y Rayquaza, Mega; Latias, Latios y Mewtwo (Y) megaevolucionan con el botón Mega, y el especial de Deoxys cambia su Forma. Cada uno empieza con su movimiento legendario y una Habilidad innata siempre activa: Drizzle trae la lluvia, Drought el sol, Air Lock vuelve a Rayquaza inmune al clima y Levitate hace flotar a los Latis sobre la lava.',
          ko: "전설의 포켓몬은 진화 대신 12·28레벨에 각성해 특성·능력치·잊기 횟수를 얻어요. 두 번째 각성에서 가이오가·그란돈은 원시회귀하고 레쿠쟈는 메가진화해요. 라티아스·라티오스·뮤츠Y는 메가 버튼을, 테오키스는 필살기로 폼체인지를 사용해요. 전용 기술과 항상 적용되는 고유 특성으로 시작하며, 잔비는 비를, 가뭄은 햇빛을 불러요. 에어록은 레쿠쟈를 날씨에서 보호하고 부유는 라티아스·라티오스를 용암 위로 띄워요." },
          {
            pt: 'A partida dura o mesmo tempo, as três dificuldades continuam valendo e a horda vem mais forte (Pressão). O modo tem um ranking só dele, o Lendário, separado por dificuldade: no ranking, troque entre Padrão e Lendário. E ninguém enfrenta a si mesmo: um Mewtwo encara o Mewtwo Clone no final.',
            en: 'A run lasts as long as ever, all three difficulties still apply and the horde comes in stronger (Pressure). The mode has a ranking of its own, Legendary, split by difficulty: on the rankings, switch between Standard and Legendary. And no one faces themselves: a Mewtwo takes on the Mewtwo Clone at the end.',
            es: 'La partida dura lo mismo, las tres dificultades siguen valiendo y la horda viene más fuerte (Presión). El modo tiene un ranking propio, el Legendario, separado por dificultad: en el ranking, cambia entre Estándar y Legendario. Y nadie se enfrenta a sí mismo: un Mewtwo se mide con el Mewtwo Clon al final.',
          ko: "판의 길이와 세 난이도는 유지되며, 프레셔로 더 강한 무리가 나와요. 전설 모드는 난이도별 전용 랭킹을 사용하며 일반·전설 순위표를 전환할 수 있어요. 같은 포켓몬끼리 싸우지 않도록 뮤츠의 마지막 상대는 뮤츠 복제체가 돼요." },
          {
            pt: '11 golpes lendários novos, um para cada membro dos trios, Mewtwo e Arceus: Snowscape, Electric Terrain, Overheat, Thunderclap, Burning Bulwark, Aqua Ring, Rock Wrecker, Glaciate, Metal Burst, Telekinesis e Judgment, que muda de tipo com o bioma.',
            en: '11 new legendary moves, one for each trio member, Mewtwo and Arceus: Snowscape, Electric Terrain, Overheat, Thunderclap, Burning Bulwark, Aqua Ring, Rock Wrecker, Glaciate, Metal Burst, Telekinesis and Judgment, which changes type with the biome.',
            es: '11 movimientos legendarios nuevos, uno para cada miembro de los tríos, Mewtwo y Arceus: Snowscape, Electric Terrain, Overheat, Thunderclap, Burning Bulwark, Aqua Ring, Rock Wrecker, Glaciate, Metal Burst, Telekinesis y Judgment, que cambia de tipo con el bioma.',
          ko: "전설 트리오·뮤츠·아르세우스의 전용 기술 11종을 추가했어요. 설경·일렉트릭필드·오버히트·질풍신뢰·화염의수호·아쿠아링·암석포·얼다세계·메탈버스트·텔레키네시스·심판의뭉치이며, 심판의뭉치는 지역에 따라 타입이 바뀌어요." },
        ],
      },
      {
        title: { pt: 'Fendas épicas', en: 'Epic rifts', es: 'Grietas épicas' , ko: "웅장해진 전설의 균열" },
        notes: [
          {
            pt: 'Agora são 2 fendas por partida, por volta de 4:00 e de 10:20, e o relógio da partida para lá dentro. Antes de cada uma, o lendário avisa: o clima dele toma o céu (chuva torrencial, sol abrasador, vendaval, tempestade, arco-íris, chuva de meteoros, o tempo tropeçando) e um rasgo enorme se abre no ar.',
            en: 'There are now 2 rifts per run, around 4:00 and 10:20, and the run clock stops inside. Before each one, the legendary gives a sign: its weather takes over the sky (pouring rain, harsh sun, a gale, a storm, a rainbow, a meteor shower, time stumbling) and a huge tear opens in the air.',
            es: 'Ahora hay 2 grietas por partida, alrededor de 4:00 y de 10:20, y el reloj de la partida se detiene adentro. Antes de cada una, el legendario avisa: su clima se adueña del cielo (lluvia torrencial, sol abrasador, vendaval, tormenta, arcoíris, lluvia de meteoros, el tiempo que tropieza) y se abre un desgarro enorme en el aire.',
          ko: "한 판에 약 4분과 10분 20초, 두 번 균열이 열리며 안에서는 판의 시간이 멈춰요. 열리기 전 폭우·강한 햇빛·돌풍·폭풍·무지개·유성우·시간의 흔들림이 전조로 나타나고 하늘에 거대한 틈이 열려요." },
          {
            pt: 'Cada lendário tem o seu domínio, maior que a tela, para atravessar com os Pokémon que o servem e uma ameaça vindo atrás: a maré na Caverna do Fundo do Mar (Kyogre), a lava na Caverna de Magma (Groudon), os andares desabando no Pilar Celeste (Rayquaza), os redemoinhos das Ilhas Redemoinho (Lugia), a Torre do Sino em chamas (Ho-Oh), os saltos no tempo do Pilar Lança (Dialga), a névoa de sonho da Ilha do Sul (Latias e Latios, juntos) e o Meteoro à Deriva se desfazendo no vazio (Deoxys).',
            en: 'Each legendary has its own domain, bigger than the screen, to cross past the Pokémon that serve it with a threat coming up behind: the tide in the Seafloor Cavern (Kyogre), lava in the Magma Cavern (Groudon), floors crumbling on the Sky Pillar (Rayquaza), the whirlpools of the Whirl Islands (Lugia), the Bell Tower on fire (Ho-Oh), time skipping on Spear Pillar (Dialga), the dream mist of Southern Island (Latias and Latios, together) and the Drifting Meteoroid coming apart in the void (Deoxys).',
            es: 'Cada legendario tiene su dominio, más grande que la pantalla, que cruzar entre los Pokémon que lo sirven con una amenaza que viene detrás: la marea en la Cueva Fondo Marino (Kyogre), la lava en la Caverna de Magma (Groudon), los pisos que se derrumban en el Pilar Celeste (Rayquaza), los remolinos de las Islas Remolino (Lugia), la Torre Campana en llamas (Ho-Oh), los saltos en el tiempo de la Columna Lanza (Dialga), la neblina de ensueño de la Isla Sur (Latias y Latios, juntos) y el Meteoroide a la Deriva que se deshace en el vacío (Deoxys).',
          ko: "화면보다 넓은 전설의 영역에서 시종 포켓몬을 지나 뒤쫓는 위협을 피하세요. 가이오가의 해저동굴에는 밀물, 그란돈의 마그마 동굴에는 용암, 레쿠쟈의 하늘기둥에는 무너지는 바닥이 있어요. 루기아의 소용돌이섬, 칠색조의 불타는 방울탑, 디아루가의 시간 도약이 있는 창기둥, 라티아스·라티오스의 꿈 안개에 싸인 남쪽의 외딴섬, 테오키스의 부서지는 운석도 만날 수 있어요." },
          {
            pt: 'No fim, o lendário chega com um card de título e o seu próprio tema, e a batalha tem 3 fases: cada uma transforma a arena e termina num golpe supremo, sempre com um lugar seguro marcado. Kyogre inunda a caverna e solta o Origin Pulse, Ho-Oh renasce das cinzas, o Roar of Time do Dialga congela os seus golpes no ar e o Deoxys troca de Forma a cada fase.',
            en: 'At the end the legendary arrives with a title card and its own theme, and the battle has 3 phases: each one transforms the arena and builds to an ultimate, always with a marked safe spot. Kyogre floods the cavern and unleashes Origin Pulse, Ho-Oh rises from its ashes, Dialga’s Roar of Time freezes your attacks in mid-air and Deoxys swaps Formes every phase.',
            es: 'Al final, el legendario llega con una tarjeta de título y su propio tema, y la batalla tiene 3 fases: cada una transforma la arena y termina en un golpe supremo, siempre con un lugar seguro marcado. Kyogre inunda la cueva y suelta el Origin Pulse, Ho-Oh renace de sus cenizas, el Roar of Time de Dialga congela tus ataques en el aire y Deoxys cambia de Forma en cada fase.',
          ko: "영역 끝에서 이름 연출과 전용 테마가 흐르며 3단계 전투가 시작돼요. 단계마다 아레나가 변하고 안전 지점을 표시하는 필살기로 이어져요. 가이오가는 동굴을 침수시키며 근원의파동을, 칠색조는 부활을, 디아루가는 공격을 공중에 멈추는 시간의포효를 사용하고 테오키스는 단계마다 폼이 바뀌어요." },
          {
            pt: 'Vencido, ele se ajoelha e a Poké Ball voa: balança três vezes e prende ou estoura, contando para a captura. Desmaiar lá dentro continua sem encerrar a partida: você volta ao mapa com 30% do HP.',
            en: 'Once beaten, it kneels and the Poké Ball flies: it shakes three times and either clicks or bursts open, counting toward the catch. Fainting inside still doesn’t end the run: you land back on the map with 30% HP.',
            es: 'Vencido, se arrodilla y vuela la Poké Ball: se sacude tres veces y lo atrapa o se abre, y cuenta para la captura. Desmayarte adentro sigue sin terminar la partida: vuelves al mapa con 30% del HP.',
          ko: "전설의 포켓몬을 쓰러뜨리면 몬스터볼이 날아가 세 번 흔들린 뒤 포획되거나 열리며 포획 횟수가 쌓여요. 안에서 기절해도 판은 끝나지 않고 HP 30%로 맵에 돌아와요." },
        ],
      },
      {
        title: { pt: 'Lendários do mapa em 3 fases', en: 'Map legendaries in 3 phases', es: 'Legendarios del mapa en 3 fases' , ko: "맵의 전설 보스도 3단계 전투" },
        notes: [
          {
            pt: 'O trio da partida, o mítico raro, Mewtwo e Arceus chegam com uma entrada: as aves descem do céu, as feras saltam, os Regis sobem do chão, um card mostra o nome e o epíteto (ZAPDOS · Senhor do Trovão) e cada trio tem o seu tema.',
            en: 'The run’s trio, the rare mythical, Mewtwo and Arceus make an entrance: the birds swoop down from the sky, the beasts leap in, the Regis rise from the ground, a card shows the name and epithet (ZAPDOS · Lord of Thunder) and each trio has its own theme.',
            es: 'El trío de la partida, el mítico raro, Mewtwo y Arceus llegan con una entrada: las aves bajan del cielo, las bestias saltan, los Regis salen del suelo, una tarjeta muestra el nombre y el epíteto (ZAPDOS · Señor del Trueno) y cada trío tiene su tema.',
          ko: "전설 트리오·희귀 환상 포켓몬·뮤츠·아르세우스에게 등장 연출을 추가했어요. 전설의 새는 급강하하고, 전설의 개는 뛰어들며, 레지들은 땅에서 솟아요. 이름과 이명(썬더 · 천둥의 군주)이 표시되고 트리오마다 전용 테마가 흘러요." },
          {
            pt: 'A luta tem 3 fases, marcadas na barra de HP: a segunda traz um jeito novo de se mover e a terceira, um golpe supremo com o golpe lendário de cada um (Snowscape, Electric Terrain, Psystrike, Judgment…), sempre com um lugar seguro marcado. O Judgment do Arceus muda de tipo com o bioma. Quando ele cai, uma captura rápida acontece ali mesmo, no mapa.',
            en: 'The fight has 3 phases, marked on the HP bar: the second brings a new way to move and the third an ultimate built on each one’s legendary move (Snowscape, Electric Terrain, Psystrike, Judgment…), always with a marked safe spot. Arceus’s Judgment changes type with the biome. When it falls, a quick capture plays right there on the map.',
            es: 'La pelea tiene 3 fases, marcadas en la barra de HP: la segunda trae una forma nueva de moverse y la tercera, un golpe supremo con el movimiento legendario de cada uno (Snowscape, Electric Terrain, Psystrike, Judgment…), siempre con un lugar seguro marcado. El Judgment de Arceus cambia de tipo con el bioma. Cuando cae, una captura rápida sucede ahí mismo, en el mapa.',
          ko: "HP 바에 표시되는 세 단계 중 두 번째에는 새로운 이동 방식, 세 번째에는 설경·일렉트릭필드·사이코브레이크·심판의뭉치 같은 전용 기술 필살기가 등장해요. 안전 지점은 항상 표시되며 아르세우스의 심판의뭉치는 지역에 따라 타입이 바뀌어요. 승리하면 맵에서 짧은 포획 연출이 재생돼요." },
        ],
      },
      {
        title: { pt: 'Pontos de interesse no mapa', en: 'Landmarks on the map', es: 'Puntos de interés en el mapa' , ko: "맵의 명소" },
        notes: [
          {
            pt: 'Ideia do @samael no mural de ideias, a mais votada: o mapa agora tem lugares fixos para descobrir, com a cara de cada bioma. Ao chegar perto, uma placa mostra o nome do lugar, como nos jogos.',
            en: 'An idea from @samael on the ideas board, the most voted one: the map now has fixed places to discover, dressed for each biome. As you come close, a sign shows the place’s name, like in the games.',
            es: 'Idea de @samael en el muro de ideas, la más votada: el mapa ahora tiene lugares fijos para descubrir, con el aspecto de cada bioma. Al acercarte, un cartel muestra el nombre del lugar, como en los juegos.',
          ko: "아이디어 게시판에서 가장 많은 표를 받은 @samael님의 제안으로 지역마다 다른 고정 명소를 추가했어요. 가까이 가면 원작처럼 표지판에 이름이 표시돼요." },
          {
            pt: 'Casa Abandonada: uma casa de pedra sem telhado, com janelas, lareira e um caixote esquecido lá dentro. Labirinto de Sebes: um baú no coração do labirinto. Ruínas Unown: um altar que acende os glifos e solta Exp. Candy. Acampamento Abandonado: a fogueira ainda acesa e uma mochila com Oran Berries.',
            en: 'Abandoned Cottage: a stone cottage without its roof, with windows, a fireplace and a crate left inside. Hedge Maze: a chest at its heart. Unown Ruins: an altar that lights up the glyphs and spills Exp. Candy. Abandoned Camp: the fire still burning and a backpack with Oran Berries.',
            es: 'Casa Abandonada: una casa de piedra sin techo, con ventanas, chimenea y una caja olvidada adentro. Laberinto de Setos: un cofre en su corazón. Ruinas Unown: un altar que enciende los glifos y suelta Exp. Candy. Campamento Abandonado: la fogata todavía encendida y una mochila con Oran Berries.',
          ko: "버려진 오두막에는 창문·벽난로·상자가, 생울타리 미로 중앙에는 상자가 있어요. 안농 유적의 제단은 문자를 밝히고 경험사탕을 내놓으며, 버려진 야영지에는 아직 타는 모닥불과 오랭열매가 든 배낭이 있어요." },
          {
            pt: 'Túnel da Mina: entre por uma boca e saia pela outra, do outro lado da montanha. A horda perde o seu rastro enquanto você está lá embaixo.',
            en: 'Mine Tunnel: go in one mouth and come out the other, on the far side of the ridge. The horde loses track of you while you’re down there.',
            es: 'Túnel de la Mina: entra por una boca y sal por la otra, del otro lado de la montaña. La horda te pierde el rastro mientras estás allá abajo.',
          ko: "광산 갱도의 한쪽 입구로 들어가면 산등성이 반대편으로 나와요. 지하에 있는 동안 무리가 추적을 놓쳐요." },
          {
            pt: 'Cada tesouro abre uma vez por partida, ficando um instante perto dele. Duas conquistas novas contam os tesouros abertos.',
            en: 'Each treasure opens once per run, by standing next to it for a moment. Two new achievements count the treasures opened.',
            es: 'Cada tesoro se abre una vez por partida, quedándote un instante junto a él. Dos logros nuevos cuentan los tesoros abiertos.',
          ko: "보물 옆에 잠시 서 있으면 열리며 판마다 한 번씩만 열 수 있어요. 연 보물 수를 세는 업적 두 개도 추가했어요." },
        ],
      },
      {
        title: { pt: 'Lugares para entrar', en: 'Places to step into', es: 'Lugares para entrar' , ko: "직접 들어가는 탐험 장소" },
        notes: [
          {
            pt: 'Algumas vezes por partida, a entrada de um lugar aparece no mapa, com uma seta apontando para ela. Fique na porta para entrar: lá dentro o mundo espera e o lugar tem seus próprios Pokémon, um objetivo e um limite de tempo.',
            en: 'A few times a run, the entrance to a place shows up on the map, with an arrow pointing at it. Stand in the doorway to go in: inside, the world waits and the place has its own Pokémon, a goal and a time limit.',
            es: 'Algunas veces por partida, la entrada de un lugar aparece en el mapa, con una flecha que apunta hacia ella. Quédate en la entrada para pasar: adentro el mundo espera y el lugar tiene sus propios Pokémon, un objetivo y un límite de tiempo.',
          ko: "판 중 몇 차례 탐험 장소 입구가 맵에 나타나고 화살표가 위치를 알려 줘요. 문 앞에 서 있으면 입장하며, 안에서는 무리가 멈추고 장소별 포켓몬·목표·제한시간이 적용돼요." },
          {
            pt: 'Caverna Escura, uma Mystery Dungeon: andares no escuro com escadas para achar, uma Casa de Monstros e um baú no fundo. Pokémon de Fogo e Elétricos iluminam mais longe, e o vento avisa antes de soprar você para fora.',
            en: 'Dark Cave, a Mystery Dungeon: floors in the dark with stairs to find, a Monster House and a chest at the bottom. Fire and Electric types light up farther, and the wind warns before it blows you out.',
            es: 'Cueva Oscura, un Mundo Misterioso: pisos a oscuras con escaleras que encontrar, una Casa de Monstruos y un cofre al fondo. Los Pokémon de Fuego y Eléctricos iluminan más lejos, y el viento avisa antes de sacarte de la cueva.',
          ko: "어두운 동굴은 계단을 찾으며 내려가는 던전이에요. 마지막 층에 몬스터 하우스와 상자가 있고 불꽃·전기 타입은 더 멀리 비춰요. 밖으로 밀려나기 전에 바람이 경고해요." },
          {
            pt: 'Cemitério Assombrado: só fantasmas, saindo das covas. Os espíritos deles despertam a Pedra Peculiar e, dela, Spiritomb, um chefe novo (que pode ser shiny). Vença antes do amanhecer.',
            en: 'Haunted Graveyard: ghosts only, rising from the graves. Their spirits stir the Odd Keystone, and out of it comes Spiritomb, a new boss (who can be shiny). Beat it before dawn.',
            es: 'Cementerio Embrujado: solo fantasmas, saliendo de las tumbas. Sus espíritus despiertan a la Piedra Espíritu y, de ella, a Spiritomb, un jefe nuevo (que puede ser shiny). Véncelo antes del amanecer.',
          ko: "유령 묘지에서는 고스트만 무덤에서 깨어나요. 영혼이 쐐기돌에 모이면 새로운 보스 화강돌이 나타나며 이로치일 수도 있어요. 날이 밝기 전에 쓰러뜨리세요." },
          {
            pt: 'Acima das Nuvens, só para quem voa: com um Pokémon do tipo Voador, uma corrente de ar leva você ao céu, onde só aparecem voadores, todos batendo as asas, e asas chegam com o vento. Cada asa melhora um atributo até o fim da partida.',
            en: 'Above the Clouds, for flyers only: with a Flying-type Pokémon, an updraft takes you up to the sky, where only flying Pokémon come, all flapping their wings, and wings drift in on the wind. Each wing raises a stat for the rest of the run.',
            es: 'Sobre las Nubes, solo para quien vuela: con un Pokémon de tipo Volador, una corriente de aire te lleva al cielo, donde solo aparecen voladores, todos batiendo las alas, y el viento trae plumas. Cada pluma mejora una estadística hasta el final de la partida.',
          ko: "구름 위 하늘은 비행 타입만 상승기류를 타고 갈 수 있어요. 날갯짓하는 비행 포켓몬만 나타나고 바람에 날개가 실려 와요. 주운 날개는 판이 끝날 때까지 능력치를 올려 줘요." },
          {
            pt: 'Três conquistas novas, uma delas com o título Explorador(a), para quem concluir os três lugares.',
            en: 'Three new achievements, one with the Explorer title, for clearing all three places.',
            es: 'Tres logros nuevos, uno con el título Explorador(a), para quien complete los tres lugares.',
          ko: "세 장소를 모두 완료하는 업적을 포함해 새 업적 세 개를 추가했어요. 탐험가 칭호도 얻을 수 있어요." },
        ],
      },
      {
        title: { pt: 'Um mapa mais vivo', en: 'A livelier map', es: 'Un mapa más vivo' , ko: "더 생생해진 맵" },
        notes: [
          {
            pt: 'Moitas (com flores ou frutinhas), troncos caídos e pedras e árvores soltas entre os bosques e as montanhas, cada bioma com o seu jeito: cogumelos que brilham na caverna, arbustos com neve na montanha e espinheiros no cemitério.',
            en: 'Bushes (with flowers or berries), fallen logs and lone rocks and trees between the groves and the mountains, each biome in its own way: glowing mushrooms in the cave, snowy shrubs on the mountain and thorns in the graveyard.',
            es: 'Arbustos (con flores o bayas), troncos caídos y rocas y árboles sueltos entre los bosques y las montañas, cada bioma a su manera: hongos que brillan en la cueva, arbustos nevados en la montaña y espinos en el cementerio.',
          ko: "숲과 산 사이에 꽃·열매 덤불, 쓰러진 통나무, 바위·나무를 추가했어요. 동굴의 빛나는 버섯, 산의 눈 덮인 관목, 묘지의 가시처럼 지역마다 모습이 달라요." },
        ],
      },
      {
        title: { pt: 'Ranking mais confiável', en: 'A more reliable ranking', es: 'Ranking más confiable' , ko: "더 정확해진 랭킹 검증" },
        notes: [
          {
            pt: 'A conferência das partidas do ranking tirava algumas partidas honestas: as jogadas numa versão anterior do jogo, depois de uma atualização que mudou as regras, e as que terminaram com a tela de level-up aberta. As duas coisas foram corrigidas, e agora o próprio jogo avisa a equipe antes que uma atualização mude as regras sem cuidado.',
            en: 'The check of ranked runs was taking some honest runs off: the ones played on an older version of the game after an update changed the rules, and the ones that ended with the level-up screen open. Both are fixed, and the game now warns the team before an update changes the rules by accident.',
            es: 'La revisión de las partidas del ranking sacaba algunas partidas honestas: las jugadas en una versión anterior del juego, después de una actualización que cambió las reglas, y las que terminaron con la pantalla de subida de nivel abierta. Las dos cosas están corregidas, y ahora el propio juego avisa al equipo antes de que una actualización cambie las reglas sin querer.',
          ko: "업데이트로 규칙이 바뀐 뒤 이전 버전에서 플레이한 판과 레벨업 화면이 열린 채 끝난 판이 정상 기록인데도 랭킹에서 제외되던 문제를 고쳤어요. 실수로 규칙이 바뀌는 업데이트도 팀에 미리 알려 줘요." },
          {
            pt: 'Com a data do aparelho errada, uma partida do ranking podia jogar o Surto de outro dia e sair do ranking. Agora o servidor diz ao jogo qual é o Surto de hoje.',
            en: "With the device's date wrong, a ranked run could play another day's Outbreak and leave the ranking. Now the server tells the game which Outbreak is today's.",
            es: 'Con la fecha del dispositivo mal, una partida del ranking podía jugar el Brote de otro día y salir del ranking. Ahora el servidor le dice al juego cuál es el Brote de hoy.',
          ko: "기기의 날짜가 틀리면 다른 날의 대량발생이 적용돼 랭킹에서 제외되던 문제를 고쳤어요. 이제 서버가 오늘의 대량발생을 알려 줘요." },
          {
            pt: 'Tentar de novo, tocado depois de abrir o ranking ou o cartão de compartilhar nos resultados, começava duas partidas de uma vez, e a que ficava saía do ranking. Agora começa uma só.',
            en: 'Try again, tapped after opening the ranking or the share card on the results, started two runs at once, and the one that stayed was off the ranking. Now it starts just one.',
            es: 'Reintentar, tocado después de abrir el ranking o la tarjeta para compartir en los resultados, empezaba dos partidas a la vez, y la que quedaba salía del ranking. Ahora empieza una sola.',
          ko: "결과 화면에서 랭킹이나 공유 카드를 연 뒤 다시 도전하면 두 판이 동시에 시작돼 남은 판이 랭킹에서 제외되던 문제를 고쳤어요. 이제 한 판만 시작돼요." },
        ],
      },
      {
        title: { pt: 'Denúncias', en: 'Reports', es: 'Denuncias' , ko: "신고 기능" },
        notes: [
          {
            pt: 'Com uma conta, cada linha do ranking (e do Desafio do dia) tem uma bandeira para denunciar aquela partida, e o perfil de outro treinador tem o botão Denunciar. Escolha o motivo (trapaça, nome ofensivo ou outro), deixe um comentário se quiser e pronto: ninguém fica sabendo quem denunciou.',
            en: "With an account, every line of the ranking (and of the Daily Challenge) has a flag to report that run, and another trainer's profile has a Report button. Pick the reason (cheating, offensive name or something else), leave a comment if you like and that's it: nobody finds out who reported.",
            es: 'Con una cuenta, cada línea del ranking (y del Desafío del día) tiene una bandera para denunciar esa partida, y el perfil de otro entrenador tiene el botón Denunciar. Elige el motivo (trampa, nombre ofensivo u otro), deja un comentario si quieres y listo: nadie se entera de quién denunció.',
          ko: "계정으로 로그인하면 랭킹·오늘의 챌린지 기록 옆 깃발과 다른 트레이너의 프로필에서 신고할 수 있어요. 부정행위·부적절한 이름·기타 이유를 고르고 원하면 설명을 남기세요. 신고자는 공개되지 않아요." },
          {
            pt: 'As partidas continuam entrando no ranking na hora. Só uma denúncia faz a equipe olhar: uma partida trapaceada sai do ranking, um save editado volta ao zero e uma conta banida não entra mais no ranking nem nos perfis (ela ainda pode jogar no aparelho, sem conta).',
            en: "Runs still join the ranking right away. Only a report gets the team to look: a cheated run leaves the ranking, an edited save goes back to zero, and a banned account no longer shows on the ranking or in profiles (it can still play on the device, without an account).",
            es: 'Las partidas siguen entrando al ranking al instante. Solo una denuncia hace que el equipo revise: una partida con trampa sale del ranking, una partida guardada editada vuelve a cero y una cuenta baneada ya no aparece en el ranking ni en los perfiles (aún puede jugar en el dispositivo, sin cuenta).',
          ko: "기록은 즉시 랭킹에 올라가며 신고된 내용만 팀이 검토해요. 부정 기록은 제외되고 조작한 저장 데이터는 초기화돼요. 차단된 계정은 랭킹과 프로필에 표시되지 않지만 기기에서 게스트로 플레이할 수 있어요." },
        ],
      },
      {
        title: { pt: 'Hall da Fama', en: 'Hall of Fame', es: 'Salón de la Fama' , ko: "명예의 전당" },
        notes: [
          {
            pt: 'O Hall da Fama conta todos os apoiadores, inclusive quem preferiu ficar fora do mural, então o número não cai mais quando alguém se esconde.',
            en: 'The Hall of Fame counts every supporter, including those who chose to stay off the wall, so the number no longer drops when someone hides.',
            es: 'El Salón de la Fama cuenta a todos los patrocinadores, incluso a quienes prefirieron quedar fuera del muro, así que el número ya no baja cuando alguien se oculta.',
          ko: "후원자 목록에서 숨김을 선택한 사람도 명예의 전당의 전체 후원자 수에 포함돼요. 숨겨도 인원수가 줄지 않아요." },
        ],
      },
    ],
  },
  {
    date: '2026-10-19',
    title: { pt: 'Modo difícil e convites', en: 'Hard mode and invites', es: 'Modo difícil e invitaciones' , ko: "더 어려워진 하드 모드와 친구 초대" },
    highlights: [
      { pt: 'Ficar parado não funciona mais: cuspidores de longe, Pokémon Alfa gigantes e o mapa atacando.', en: "Standing still doesn't work anymore: ranged spitters, giant Alpha Pokémon and a map that strikes back.", es: 'Quedarse quieto ya no funciona: escupidores a distancia, Pokémon Alfa gigantes y el mapa que ataca.' , ko: "이제 가만히 서 있으면 위험해요. 원거리 공격을 하는 적, 거대한 우두머리 포켓몬과 맵의 위협이 추가됐어요." },
      { pt: 'Missões de campo: defenda um ovo, junte Poké Balls e leve um Togepi perdido para casa.', en: 'Field missions: defend an egg, gather Poké Balls and lead a lost Togepi home.', es: 'Misiones de campo: defiende un huevo, junta Poké Balls y lleva a casa a un Togepi perdido.' , ko: "알을 지키고 몬스터볼을 모으며 길 잃은 토게피를 데려가는 필드 미션을 추가했어요." },
      { pt: 'Chefes mais espertos, que miram onde você vai e ganham um ataque novo na fúria.', en: "Smarter bosses that aim where you're going and gain a new attack when enraged.", es: 'Jefes más astutos, que apuntan adonde vas y ganan un ataque nuevo con la furia.' , ko: "이동 경로를 노리고 분노하면 새 공격을 쓰는 더 똑똑한 보스를 만나 보세요." },
      { pt: 'Servidor no Discord: conecte sua conta para entrar direto e ganhar um Noibat shiny.', en: 'A Discord server: link your account to join right away and get a shiny Noibat.', es: 'Servidor en Discord: conecta tu cuenta para entrar directo y ganar un Noibat shiny.' , ko: "Discord 계정을 연결해 서버에 참여하고 이로치 음뱃을 받을 수 있어요." },
      { pt: 'Convide amigos e ganhe ovos, um título e até um Dratini shiny.', en: 'Invite friends to earn eggs, a title and even a shiny Dratini.', es: 'Invita amigos y gana huevos, un título y hasta un Dratini shiny.' , ko: "친구를 초대하면 알·칭호·이로치 미뇽 등의 보상을 받아요." },
    ],
    changes: [
      {
        title: { pt: 'Modo difícil de verdade', en: 'Hard mode, for real', es: 'Modo difícil de verdad' , ko: "한층 더 어려워진 하드 모드" },
        notes: [
          {
            pt: 'Ficar parado não funciona mais. Cada fase tem uma espécie que cospe de longe: ela brilha antes e solta um disparo lento do seu tipo (bola de fogo, bolha, lodo que deixa poça, faísca, sementes) que passa pela aura. Basta dar um passo para o lado.',
            en: "Standing still doesn't work anymore. Each stage has a species that spits from afar: it glows first and fires a slow shot of its type (fireball, bubble, sludge that leaves a puddle, spark, seeds) that passes through your aura. One step aside is enough.",
            es: 'Quedarse quieto ya no funciona. Cada fase tiene una especie que escupe de lejos: brilla antes y suelta un disparo lento de su tipo (bola de fuego, burbuja, lodo que deja un charco, chispa, semillas) que atraviesa el aura. Basta con dar un paso al costado.',
          ko: "스테이지마다 멀리서 타입에 맞는 탄을 발사하는 종이 나타나요. 빛난 뒤 불덩이·물거품·웅덩이를 남기는 진흙·전격·씨앗을 쏘며 오라를 통과해요. 옆으로 한 걸음 비키면 피할 수 있어요." },
          {
            pt: 'Pokémon Alfa: gigantes de brilho vermelho entram na horda, não recuam com os golpes e investem numa linha vermelha que miram antes. Derrote um para ganhar EXP, ₽ e o Prêmio do Alfa, um level-up só de cartas raras. Conquistas novas: Primeiro Alfa, Rastreador de Alfas e Caçador de Alfas, que dá título.',
            en: "Alpha Pokémon: red-glowing giants join the horde, shrug off knockback and charge along a red lane they aim first. Beat one for EXP, ₽ and the Alpha's prize, a level-up of rare cards only. New achievements: First Alpha, Alpha Tracker and Alpha Hunter, which grants a title.",
            es: 'Pokémon Alfa: gigantes de brillo rojo se unen a la horda, no retroceden con los golpes y embisten por una línea roja que apuntan antes. Derrota a uno para ganar EXP, ₽ y el Premio del Alfa, una subida de nivel solo de cartas raras. Logros nuevos: Primer Alfa, Rastreador de Alfas y Cazador de Alfas, que da título.',
          ko: "붉게 빛나는 거대한 우두머리 포켓몬이 무리에 합류해요. 넉백을 버티며 미리 표시한 빨간 경로로 돌진해요. 쓰러뜨리면 경험치·포켓달러·희귀 카드만 나오는 레벨업 보상을 얻어요. 첫 우두머리·우두머리 추적자·우두머리 사냥꾼 업적과 칭호도 추가했어요." },
          {
            pt: 'O mapa ataca: mais para o fim da partida caem raios na chuva, granizo na neve, Rock Slide na tempestade de areia, chamas no sol e Stealth Rock ou Toxic Spikes no chão, sempre onde você está e sempre marcados no chão antes de cair.',
            en: 'The map strikes back: later in a run, Thunder falls in the rain, hail in the snow, Rock Slide in a sandstorm, flames in the sun, and Stealth Rock or Toxic Spikes cover the ground, always where you stand and always marked on the ground before they land.',
            es: 'El mapa ataca: más adelante en la partida caen rayos con lluvia, granizo con nieve, Rock Slide en la tormenta de arena, llamas con sol, y Stealth Rock o Toxic Spikes cubren el suelo, siempre donde estás y siempre marcados en el suelo antes de caer.',
          ko: "판 후반에는 비 속의 번개, 눈 속의 우박, 모래바람의 스톤샤워, 햇빛의 불꽃과 바닥의 스텔스록·독압정이 플레이어를 위협해요. 떨어지기 전에 위치가 항상 표시돼요." },
          {
            pt: 'Missões de campo: um ovo em perigo para defender no ninho, Poké Balls perdidas para juntar contra o relógio e um Togepi perdido para levar para casa. Aparecem longe de você e pagam ₽ e um level-up de cartas raras.',
            en: 'Field missions: an egg in danger to defend in its nest, lost Poké Balls to gather against the clock and a lost Togepi to lead home. They show up away from you and pay ₽ and a level-up of rare cards.',
            es: 'Misiones de campo: un huevo en peligro que defender en su nido, Poké Balls perdidas que juntar contra el reloj y un Togepi perdido que llevar a casa. Aparecen lejos de ti y pagan ₽ y una subida de nivel de cartas raras.',
          ko: "둥지의 알을 지키고, 제한시간 안에 잃어버린 몬스터볼을 모으고, 길 잃은 토게피를 집으로 데려가는 필드 미션이 멀리서 나타나요. 완료하면 포켓달러와 희귀 카드 레벨업을 얻어요." },
          {
            pt: 'Chefes mais espertos, sem ganhar HP: miram no caminho que você vai fazer, saltam em quem foge e liberam um ataque novo na fúria. No Pesadelo cada um tem um ataque a mais, e no Difícil e no Pesadelo o Mewtwo tem uma segunda fase.',
            en: "Smarter bosses, with no extra HP: they aim at the path you're taking, leap at you when you keep away and unlock a new attack when enraged. On Nightmare each gets an extra attack, and on Hard and Nightmare Mewtwo has a second phase.",
            es: 'Jefes más astutos, sin ganar PS: apuntan al camino que vas a tomar, saltan sobre quien huye y liberan un ataque nuevo con la furia. En Pesadilla cada uno tiene un ataque más, y en Difícil y Pesadilla Mewtwo tiene una segunda fase.',
          ko: "보스 HP를 늘리는 대신 행동을 똑똑하게 바꿨어요. 이동 경로를 조준하고, 멀리 있으면 뛰어들며, 분노하면 새 공격을 사용해요. 나이트메어에서는 추가 공격이 생기고 하드·나이트메어의 뮤츠는 두 번째 단계를 가져요." },
          {
            pt: 'A horda do fim da partida recua menos com os golpes e bate mais forte, Iron e Assault Vest tiram no máximo metade de cada golpe, e quem está dominando sem levar dano vê a horda chegar mais rápida e mais perto (no Pesadelo, bem mais). O Normal continua tranquilo para quem se mexe.',
            en: "Late hordes get knocked back less and hit harder, Iron and Assault Vest take off at most half of a hit, and a player who's dominating without getting hurt sees the horde come faster and closer (much more so on Nightmare). Normal stays relaxed for anyone who keeps moving.",
            es: 'La horda del final de la partida retrocede menos con los golpes y pega más fuerte, Iron y Assault Vest quitan como máximo la mitad de cada golpe, y quien está dominando sin recibir daño ve a la horda llegar más rápido y más cerca (en Pesadilla, mucho más). Normal sigue tranquilo para quien se mueve.',
          ko: "후반 무리는 넉백을 덜 받고 더 세게 때려요. 사포닌과 돌격조끼는 피해를 최대 절반까지만 줄이며, 피해를 받지 않고 압도하는 플레이어에게는 무리가 더 빠르고 가까이 다가와요. 나이트메어에서 더 강하게 적용돼요. 노말은 계속 움직이면 비교적 여유롭게 플레이할 수 있어요." },
        ],
      },
      {
        title: { pt: 'Ranking na hora', en: 'Instant ranking', es: 'Ranking al instante' , ko: "즉시 반영되는 랭킹" },
        notes: [
          {
            pt: 'A sua partida entra no ranking assim que termina, sem o "Conferindo…" que podia durar horas. O servidor ainda confere as partidas do topo e do Desafio do dia, e só tira do ranking uma partida que não chega ao resultado que mostrou.',
            en: 'Your run joins the ranking as soon as it ends, without the "Checking…" that could last hours. The server still checks the runs at the top and the Daily Challenge, and only takes a run off the ranking when it doesn\'t end where it said.',
            es: 'Tu partida entra al ranking en cuanto termina, sin el "Revisando…" que podía durar horas. El servidor todavía revisa las partidas de la cima y del Desafío del día, y solo saca del ranking una partida que no llega al resultado que mostró.',
          ko: "몇 시간씩 검증 중으로 기다리던 과정 없이 판이 끝나면 즉시 랭킹에 올라가요. 서버는 상위 기록과 오늘의 챌린지를 계속 검증하며 재현한 결과가 다를 때만 기록을 제외해요." },
          {
            pt: 'As fitas do Desafio do dia saem para todas as tentativas oficiais, sem esperar a conferência.',
            en: 'Daily Challenge ribbons go out for every official attempt, without waiting for the check.',
            es: 'Las cintas del Desafío del día salen para todos los intentos oficiales, sin esperar la revisión.',
          ko: "오늘의 챌린지 리본은 검증을 기다리지 않고 모든 공식 도전에 지급돼요." },
          {
            pt: 'Num computador com o relógio atrasado, o fim da partida dizia "Sem conexão" e ela não entrava no ranking, e o save também não sincronizava. Agora funciona com qualquer relógio, e as partidas que ficaram esperando entram no ranking na próxima vez que você abrir o jogo naquele navegador.',
            en: 'On a computer whose clock runs behind, the end of a run said "Offline" and the run never made the ranking, and the save didn\'t sync either. Now it works whatever the clock says, and runs left waiting make the ranking the next time you open the game in that browser.',
            es: 'En una computadora con el reloj atrasado, el final de la partida decía "Sin conexión" y no entraba al ranking, y la partida guardada tampoco se sincronizaba. Ahora funciona con cualquier reloj, y las partidas que quedaron esperando entran al ranking la próxima vez que abras el juego en ese navegador.',
          ko: "기기 시계가 느리면 판이 끝날 때 오프라인으로 표시되고 랭킹과 저장 동기화가 되지 않던 문제를 고쳤어요. 이제 시계와 관계없이 동작하며 대기하던 기록은 같은 브라우저에서 다음에 열 때 전송돼요." },
        ],
      },
      {
        title: { pt: 'O jogo não fecha mais no iPhone', en: 'No more closing on iPhone', es: 'El juego ya no se cierra en iPhone' , ko: "아이폰에서 갑자기 종료되던 문제 수정" },
        notes: [
          {
            pt: 'Em alguns iPhones o jogo fechava sozinho segundos depois de começar uma partida: ele preparava de uma vez o brilho de golpe de todos os Pokémon carregados e passava do limite de memória do aparelho. Agora cada um é preparado só quando leva o primeiro golpe, com bem menos memória.',
            en: "On some iPhones the game closed by itself seconds into a run: it prepared the hit flash of every loaded Pokémon at once and went past the device's memory limit. Now each one is prepared only when it takes its first hit, with far less memory.",
            es: 'En algunos iPhones el juego se cerraba solo segundos después de empezar una partida: preparaba de una vez el destello de golpe de todos los Pokémon cargados y pasaba el límite de memoria del aparato. Ahora cada uno se prepara solo cuando recibe su primer golpe, con mucha menos memoria.',
          ko: "일부 아이폰에서는 불러온 모든 포켓몬의 피격 효과를 한꺼번에 준비하다 메모리 한도를 넘겨 판이 시작된 지 몇 초 만에 종료됐어요. 이제 처음 맞을 때 각 효과를 준비해 메모리 사용량을 크게 줄였어요." },
        ],
      },
      {
        title: { pt: 'Os Exp. Candy não somem mais', en: 'Exp. Candies no longer vanish', es: 'Los Exp. Candy ya no desaparecen' , ko: "경험사탕이 사라지지 않아요" },
        notes: [
          {
            pt: 'Com muitos Exp. Candy esquecidos pelo mapa, os Pokémon derrotados paravam de soltar doces novos: a EXP ia para um doce antigo, longe de você. Agora todo Pokémon derrotado solta o seu doce, e o doce mais antigo do chão se junta a ele, sem perder EXP.',
            en: 'With lots of Exp. Candies left around the map, fainted Pokémon stopped dropping new ones: the EXP went into an old candy, far from you. Now every fainted Pokémon drops its candy, and the oldest candy on the ground joins it, with no EXP lost.',
            es: 'Con muchos Exp. Candy olvidados por el mapa, los Pokémon derrotados dejaban de soltar caramelos nuevos: la EXP iba a un caramelo antiguo, lejos de ti. Ahora todo Pokémon derrotado suelta su caramelo, y el caramelo más antiguo del suelo se une a él, sin perder EXP.',
          ko: "맵에 경험사탕이 많으면 새로 쓰러뜨린 포켓몬의 경험치가 멀리 있는 기존 사탕에 합쳐져 새 사탕이 나오지 않았어요. 이제 쓰러진 자리에 항상 사탕을 떨어뜨리고 가장 오래된 사탕을 그곳에 합쳐 경험치가 사라지지 않아요." },
        ],
      },
      {
        title: { pt: 'Convide amigos', en: 'Invite friends', es: 'Invita amigos' , ko: "친구 초대" },
        notes: [
          {
            pt: 'A tela inicial ganhou o card Convide amigos: ele mostra o seu link de convite, as recompensas (1 amigo: Ovo da Amizade; 3: título e moldura Embaixador(a); 5: Ovo ultra raro, novo; 10: Dratini shiny, no lugar do Munchlax shiny, que já sai do Ovo da Amizade) e cada amigo que entrou pelo seu link, com quantas partidas ele já jogou.',
            en: 'The home screen has a new Invite friends card: it shows your invite link, the rewards (1 friend: Friendship Egg; 3: Ambassador title and frame; 5: Ultra rare egg, new; 10: shiny Dratini, replacing the shiny Munchlax, which already hatches from the Friendship Egg) and every friend who joined through your link, with how many runs they have played.',
            es: 'La pantalla de inicio tiene la nueva tarjeta Invita amigos: muestra tu link de invitación, las recompensas (1 amigo: Huevo de la Amistad; 3: título y marco Embajador(a); 5: Huevo ultra raro, nuevo; 10: Dratini shiny, en lugar del Munchlax shiny, que ya sale del Huevo de la Amistad) y cada amigo que entró por tu link, con cuántas partidas lleva.',
          ko: "홈 화면의 친구 초대 카드에서 링크·보상·가입한 친구·플레이 횟수를 확인할 수 있어요. 친구 1명은 우정의 알, 3명은 홍보대사 칭호와 프레임, 5명은 새 초희귀 알, 10명은 이로치 미뇽을 줘요. 우정의 알에서 얻는 이로치 먹고자 보상은 미뇽으로 바뀌었어요." },
          {
            pt: 'Um convite agora conta assim que o seu amigo termina 3 partidas, sem esperar a verificação delas, que podia levar horas. Convites que já tinham chegado lá contam sozinhos, e quem já passou de 5 amigos recebe o novo Ovo ultra raro.',
            en: "An invite now counts as soon as your friend finishes 3 runs, without waiting for their check, which could take hours. Invites that already got there count on their own, and anyone past 5 friends gets the new Ultra rare egg.",
            es: 'Una invitación ahora cuenta en cuanto tu amigo termina 3 partidas, sin esperar su verificación, que podía tardar horas. Las invitaciones que ya habían llegado cuentan solas, y quien ya pasó de 5 amigos recibe el nuevo Huevo ultra raro.',
          ko: "친구가 세 판을 완료하면 몇 시간씩 검증을 기다리지 않고 즉시 초대로 인정돼요. 이미 조건을 달성한 초대도 자동 반영되고 친구가 5명을 넘으면 새 초희귀 알을 받아요." },
          {
            pt: 'O link de convite continua valendo quando o seu amigo o abre dentro do X ou do Instagram e passa para o navegador para entrar com o Google.',
            en: 'The invite link keeps working when your friend opens it inside X or Instagram and moves to the browser to sign in with Google.',
            es: 'El link de invitación sigue valiendo cuando tu amigo lo abre dentro de X o Instagram y pasa al navegador para entrar con Google.',
          ko: "친구가 X나 Instagram에서 초대 링크를 연 뒤 Google 로그인을 위해 브라우저로 이동해도 링크가 유지돼요." },
        ],
      },
      {
        title: { pt: 'Tutor de Golpes que combina com você', en: 'A Move Tutor that suits you', es: 'Un Tutor de Movimientos a tu medida' , ko: "타입에 맞는 기술 가르침" },
        notes: [
          {
            pt: 'O Tutor de Golpes agora ensina golpes que combinam com o tipo da forma em que você está, e não mais qualquer tipo que faltasse: um Grovyle ouve falar de Earthquake, Crunch, U-turn ou Sludge Bomb, mas nunca de Water Shuriken. Os golpes continuam sendo de fora do repertório da família.',
            en: "The Move Tutor now teaches moves that suit your current form's type instead of any type you lacked: a Grovyle hears about Earthquake, Crunch, U-turn or Sludge Bomb, but never Water Shuriken. The moves are still ones its family doesn't learn on its own.",
            es: 'El Tutor de Movimientos ahora enseña movimientos que van con el tipo de tu forma actual, en lugar de cualquier tipo que te faltara: un Grovyle oye hablar de Earthquake, Crunch, U-turn o Sludge Bomb, pero nunca de Water Shuriken. Siguen siendo movimientos que su familia no aprende por su cuenta.',
          ko: "기술 가르침은 없는 타입의 기술 대신 현재 모습의 타입에 맞는 기술을 알려 줘요. 나무돌이는 지진·깨물어부수기·유턴·오물폭탄 등을 배울 수 있지만 물수리검은 배우지 않아요. 원래 계열이 배우지 못하는 기술을 알려 주는 방식은 유지돼요." },
        ],
      },
      {
        title: { pt: 'Poké Balls que perguntam', en: 'Poké Balls that ask', es: 'Poké Balls que preguntan' , ko: "몬스터볼 보상 선택" },
        notes: [
          {
            pt: 'Quando uma Poké Ball traz um golpe ou item novo, que ocuparia um espaço, o jogo pausa e pergunta: Pegar ou Deixar. Se deixar, ele some. Melhorias do que você já tem continuam entrando sozinhas, e abrir uma Poké Ball agora tem um estalo e um brilho.',
            en: "When a Poké Ball holds a new move or item, one that would take a slot, the game pauses and asks: Take or Leave. Leave it and it's gone. Upgrades to what you already have still go in on their own, and opening a Poké Ball now pops and sparkles.",
            es: 'Cuando una Poké Ball trae un movimiento u objeto nuevo, que ocuparía un espacio, el juego se pausa y pregunta: Tomar o Dejar. Si lo dejas, desaparece. Las mejoras de lo que ya tienes siguen entrando solas, y abrir una Poké Ball ahora hace un chasquido y brilla.',
          ko: "새 칸을 차지하는 기술이나 물건이 몬스터볼에서 나오면 게임이 멈추고 가져가기·남기기를 물어요. 남긴 보상은 사라져요. 이미 가진 것의 강화는 자동 적용되며 몬스터볼을 열 때 반짝이는 연출도 추가했어요." },
        ],
      },
      {
        title: { pt: 'Novidades no lobby', en: "What's new, in the lobby", es: 'Novedades en el lobby' , ko: "로비의 새 소식" },
        notes: [
          {
            pt: 'O botão Novidades, no topo do lobby, pula com um "!" quando sai uma atualização e mostra os destaques dela. Ver tudo abre esta página, que agora vem organizada por atualização, com os destaques primeiro.',
            en: 'The What\'s new button, at the top of the lobby, hops with a "!" when an update comes out and shows its highlights. See everything opens this page, now organized by update, highlights first.',
            es: 'El botón Novedades, arriba en el lobby, salta con un "!" cuando sale una actualización y muestra sus destacados. Ver todo abre esta página, que ahora viene organizada por actualización, con los destacados primero.',
          ko: "업데이트가 나오면 로비 위 새 소식 버튼에 느낌표가 표시돼요. 주요 내용을 읽고 업데이트 내역 보기로 이동하면 업데이트별 요약과 전체 변경사항을 볼 수 있어요." },
        ],
      },
      {
        title: { pt: 'Presentes Misteriosos na caixa', en: 'Mystery Gifts in a box', es: 'Regalos Misteriosos en una caja' , ko: "상자에 모이는 이상한 소포" },
        notes: [
          {
            pt: 'Os Presentes Misteriosos agora esperam numa caixa ao lado do seu parceiro no lobby. Toque nela para abrir um de cada vez: um shiny choca na hora e o shiny à sua escolha abre direto a escolha, sem passar pelo Hall da Fama.',
            en: 'Mystery Gifts now wait in a box beside your partner in the lobby. Tap it to open them one at a time: a shiny hatches on the spot and a shiny of your choice opens its picker right away, no trip to the Hall of Fame.',
            es: 'Los Regalos Misteriosos ahora esperan en una caja junto a tu compañero en el lobby. Tócala para abrirlos de a uno: un shiny eclosiona en el momento y el shiny a tu elección abre la elección directo, sin pasar por el Salón de la Fama.',
          ko: "이상한 소포는 로비 파트너 옆 상자에 모여요. 터치하면 하나씩 열리며 이로치는 즉시 부화하고, 원하는 이로치를 고르는 보상은 명예의 전당에 갈 필요 없이 선택 화면이 바로 열려요." },
        ],
      },
      {
        title: { pt: 'Servidor no Discord', en: 'Discord server', es: 'Servidor en Discord' , ko: "디스코드 서버" },
        notes: [
          {
            pt: 'O jogo ganhou um servidor no Discord, com as novidades, o pódio do Desafio do dia, o Surto do dia e salas para cada idioma. O botão do Discord fica no topo do lobby.',
            en: 'The game has a Discord server now, with the news, the Daily Challenge podium, the daily outbreak and rooms for each language. The Discord button sits at the top of the lobby.',
            es: 'El juego tiene un servidor en Discord, con las novedades, el podio del Desafío del día, el Brote del día y salas para cada idioma. El botón de Discord está arriba en el lobby.',
          ko: "게임 소식·오늘의 챌린지 순위·대량발생·언어별 채널이 있는 Discord 서버를 추가했어요. 당시 로비 위쪽에 서버 버튼을 배치했어요." },
          {
            pt: 'Conecte seu Discord à conta, no botão do Discord ou no Cartão de Treinador, para entrar no servidor direto e ganhar o cargo de apoiador. Também dá para entrar no jogo com o Discord.',
            en: 'Link your Discord to your account, from the Discord button or the Trainer Card, to join the server right away and get your supporter role. You can also sign in to the game with Discord.',
            es: 'Conecta tu Discord a tu cuenta, desde el botón de Discord o la Tarjeta de Entrenador, para entrar al servidor directo y recibir tu rol de patrocinador. También puedes entrar al juego con Discord.',
          ko: "Discord 화면이나 트레이너 카드에서 계정을 연결하면 바로 서버에 참여하고 후원자 역할을 받을 수 있어요. Discord로 게임에 로그인할 수도 있어요." },
          {
            pt: 'Quem conecta o Discord e entra no servidor ganha um Noibat shiny de Presente Misterioso, uma vez por conta. Quem já tinha conectado também recebe o seu.',
            en: 'Linking your Discord and joining the server brings a shiny Noibat as a Mystery Gift, once per account. Players who linked already get theirs too.',
            es: 'Quien conecta su Discord y entra al servidor gana un Noibat shiny como Regalo Misterioso, una vez por cuenta. Quien ya lo había conectado también recibe el suyo.',
          ko: "Discord 계정을 연결하고 서버에 참여하면 계정당 한 번 이로치 음뱃을 이상한 소포로 받아요. 이미 연결한 플레이어도 받을 수 있어요." },
        ],
      },
      {
        title: { pt: 'TikTok oficial', en: 'Official TikTok', es: 'TikTok oficial' , ko: "공식 틱톡" },
        notes: [
          {
            pt: 'O jogo tem um TikTok oficial, @pokemonsurvivors. Ele fica embaixo do Discord no lobby (no topo, com o celular deitado) e em Ajustes → Sobre.',
            en: "The game has an official TikTok, @pokemonsurvivors. It sits under Discord in the lobby (at the top with your phone sideways) and in Settings → About.",
            es: 'El juego tiene un TikTok oficial, @pokemonsurvivors. Está debajo de Discord en el lobby (arriba con el celular acostado) y en Ajustes → Acerca de.',
          ko: "공식 TikTok 계정 @pokemonsurvivors를 추가했어요. 당시 로비의 Discord 아래, 가로 화면 상단과 설정의 정보 화면에 링크를 배치했어요." },
        ],
      },
      {
        title: { pt: 'YouTube oficial', en: 'Official YouTube', es: 'YouTube oficial' , ko: "공식 유튜브" },
        notes: [
          {
            pt: 'O canal oficial do jogo no YouTube é o @PokemonSurvivors, com o trailer, Shorts todo dia e um vídeo para cada atualização. Ele fica ao lado do TikTok no lobby e em Ajustes → Sobre.',
            en: "The game's official YouTube channel is @PokemonSurvivors, with the trailer, daily Shorts and a video for each update. It sits beside TikTok in the lobby and in Settings → About.",
            es: 'El canal oficial del juego en YouTube es @PokemonSurvivors, con el tráiler, Shorts todos los días y un video por cada actualización. Está junto al TikTok en el lobby y en Ajustes → Acerca de.',
          ko: "공식 YouTube 채널 @PokemonSurvivors에서 예고편·매일의 짧은 영상·업데이트별 영상을 공개해요. 당시 로비의 TikTok 옆과 설정의 정보 화면에 링크를 배치했어요." },
        ],
      },
      {
        title: { pt: 'Instagram oficial', en: 'Official Instagram', es: 'Instagram oficial' , ko: "공식 인스타그램" },
        notes: [
          {
            pt: 'O jogo também está no Instagram, @pokemonsurvivors, com Reels e carrosséis do jogo. Ele fica ao lado do TikTok e do YouTube no lobby e em Ajustes → Sobre.',
            en: 'The game is on Instagram too, @pokemonsurvivors, with Reels and carousels of the game. It sits beside TikTok and YouTube in the lobby and in Settings → About.',
            es: 'El juego también está en Instagram, @pokemonsurvivors, con Reels y carruseles del juego. Está junto a TikTok y YouTube en el lobby y en Ajustes → Acerca de.',
          ko: "Instagram의 @pokemonsurvivors 계정에서 게임 영상과 여러 장의 게시물을 공개해요. 당시 로비와 설정의 정보 화면에 링크를 배치했어요." },
        ],
      },
      {
        title: { pt: 'Normal ou Shiny, você escolhe', en: 'Normal or Shiny, your call', es: 'Normal o Shiny, tú eliges' , ko: "일반과 이로치 모습을 직접 선택" },
        notes: [
          {
            pt: 'Um Pokémon que nasceu shiny do ovo (ou que você escolheu como apoiador) agora também tem o seletor Normal/Shiny na escolha do Pokémon, como os iniciais. O shiny continua seu, na Pokédex e nas conquistas: só muda a cor com que você joga, e a escolha vale no lobby, no Cartão de Treinador e no Hall da Fama, em todos os seus aparelhos.',
            en: 'A Pokémon that hatched shiny (or that you picked as a supporter) now gets the Normal/Shiny picker on the Pokémon select too, like the starters. The shiny stays yours, in the Pokédex and the achievements: only the colors you play change, and the pick shows in the lobby, on the Trainer Card and in the Hall of Fame, on all your devices.',
            es: 'Un Pokémon que nació shiny del huevo (o que elegiste como patrocinador) ahora también tiene el selector Normal/Shiny en la elección del Pokémon, como los iniciales. El shiny sigue siendo tuyo, en la Pokédex y en los logros: solo cambian los colores con los que juegas, y la elección se ve en el lobby, en la Tarjeta de Entrenador y en el Salón de la Fama, en todos tus dispositivos.',
          ko: "알에서 이로치로 태어났거나 후원 보상으로 고른 포켓몬도 스타터처럼 선택 화면에서 일반·이로치 모습을 바꿀 수 있어요. 도감과 업적의 이로치 보유 기록은 유지되고 플레이 색상만 바뀌어요. 선택은 모든 기기의 로비·트레이너 카드·명예의 전당에 반영돼요." },
        ],
      },
      {
        title: { pt: 'Controle mais gostoso', en: 'Smoother gamepad play', es: 'Control más cómodo' , ko: "부드러워진 게임패드 조작" },
        notes: [
          {
            pt: 'O analógico do controle agora anda em qualquer direção, e com a velocidade que você inclina, como o joystick de toque. O direcional e o teclado continuam em 8 direções.',
            en: 'The gamepad stick now moves in any direction, at the speed you tilt it, like the touch joystick. The D-pad and the keyboard stay at 8 directions.',
            es: 'El stick del control ahora se mueve en cualquier dirección, con la velocidad con que lo inclinas, como el joystick táctil. La cruceta y el teclado siguen en 8 direcciones.',
          ko: "게임패드 스틱도 터치 조이스틱처럼 어느 방향으로든 움직이며 기울기에 따라 속도가 달라져요. 방향 패드와 키보드는 8방향 이동을 유지해요." },
          {
            pt: 'Apertar A (ou Espaço) para o especial na hora em que a partida acaba não começa outra sem querer: a tela de resultado espera uma pausa curta nos seus toques.',
            en: "Pressing A (or Space) for the special right as a run ends no longer starts another by accident: the results screen waits for a short pause in your presses.",
            es: 'Apretar A (o Espacio) para el especial justo cuando termina la partida ya no empieza otra sin querer: la pantalla de resultados espera una breve pausa en tus pulsaciones.',
          ko: "판이 끝나는 순간 필살기를 위해 A나 Space를 누르고 있어도 다음 판이 실수로 시작되지 않아요. 결과 화면은 입력이 잠시 멈춘 뒤 반응해요." },
        ],
      },
      {
        title: { pt: 'Level-up sem toque com tudo no máximo', en: 'No more tapping when everything is maxed', es: 'Subir de nivel sin tocar con todo al máximo' , ko: "모든 강화를 마친 뒤 자동 보상" },
        notes: [
          {
            pt: 'Com todos os golpes e itens no máximo, o level-up só tinha a Oran Berry para escolher. Agora ela é pega sozinha, sem abrir a tela, e um aviso rápido mostra o nível e quantas foram (com o Exp. Share, várias de uma vez).',
            en: 'With every move and item maxed out, a level-up only had the Oran Berry to pick. Now it takes itself without opening the screen, and a quick notice shows the level and how many you got (several at once with an Exp. Share).',
            es: 'Con todos los movimientos e ítems al máximo, subir de nivel solo ofrecía la Oran Berry. Ahora se toma sola, sin abrir la pantalla, y un aviso rápido muestra el nivel y cuántas fueron (con el Exp. Share, varias a la vez).',
          ko: "모든 기술·물건을 최대로 강화하면 오랭열매 하나를 고르기 위해 화면이 열렸어요. 이제 자동으로 받으며 레벨과 받은 개수를 짧게 표시해요. 학습장치로 여러 레벨이 올라도 한 번에 처리돼요." },
        ],
      },
      {
        title: { pt: 'Menos clarões, disparos mais visíveis', en: 'Fewer flashes, easier-to-see shots', es: 'Menos destellos, disparos más visibles' , ko: "번쩍임 감소와 선명한 적의 탄" },
        notes: [
          {
            pt: 'Nova opção em Ajustes → Jogo: Clarões Reduzidos. Some o clarão branco da tela (fúria dos chefes, fendas, Mega Evolução, evolução, ovos chocando), os Pokémon atingidos ficam com um tom vermelho escuro em vez de piscar em branco e nada pisca rápido.',
            en: 'New option in Settings → Game: Flashes Reduced. No more white screen flashes (enraged bosses, rifts, Mega Evolution, evolving, hatching eggs), Pokémon that get hit take a dark red tint instead of flashing white, and nothing flickers fast.',
            es: 'Nueva opción en Ajustes → Juego: Destellos Reducidos. Se van los destellos blancos de la pantalla (furia de los jefes, grietas, Megaevolución, evolución, huevos que eclosionan), los Pokémon golpeados toman un tono rojo oscuro en vez de parpadear en blanco y nada parpadea rápido.',
          ko: "설정 → 게임에 화면 번쩍임 줄임을 추가했어요. 보스 분노·균열·메가진화·진화·알 부화의 흰 화면 번쩍임을 줄이고, 피격 포켓몬은 흰색 대신 어두운 붉은색으로 표시해 빠르게 깜빡이지 않아요." },
          {
            pt: 'Os disparos inimigos (cuspidores, chefes e o próprio mapa) agora têm um contorno vermelho, para não se perderem no meio dos seus golpes.',
            en: 'Enemy shots (spitters, bosses and the map itself) now have a red outline, so they stand out among your own attacks.',
            es: 'Los disparos enemigos (escupidores, jefes y el propio mapa) ahora tienen un contorno rojo, para que no se pierdan entre tus ataques.',
          ko: "원거리 적·보스·맵이 발사하는 탄에 빨간 외곽선을 추가해 플레이어의 공격 속에서도 잘 보이게 했어요." },
        ],
      },
      {
        title: { pt: 'Troféu de zerado', en: 'Clear trophies', es: 'Trofeo de superado' , ko: "클리어 트로피" },
        notes: [
          {
            pt: 'Venceu o Mewtwo com um Pokémon? A linha evolutiva dele ganha um troféu na Pokédex e na escolha de parceiro: bronze no Normal, prata no Difícil e ouro no Pesadelo. A Pokédex conta quantos você já zerou, para tentar zerar com todos. Ideia de @havenlad no Mural de ideias.',
            en: 'Beat Mewtwo with a Pokémon? Its evolution line gets a trophy in the Pokédex and on the partner select: bronze on Normal, silver on Hard, gold on Nightmare. The Pokédex counts how many you cleared, so you can go for a clear with every one. An idea from @havenlad on the Ideas board.',
            es: '¿Venciste a Mewtwo con un Pokémon? Su línea evolutiva gana un trofeo en la Pokédex y en la elección de compañero: bronce en Normal, plata en Difícil y oro en Pesadilla. La Pokédex cuenta cuántos superaste, para intentar superarlo con todos. Idea de @havenlad en el Muro de ideas.',
          ko: "포켓몬으로 뮤츠를 쓰러뜨리면 진화 계열 전체에 도감·파트너 선택 트로피가 표시돼요. 노말은 동, 하드는 은, 나이트메어는 금이에요. 도감에서 클리어 계열 수를 확인하며 모든 포켓몬으로 도전할 수 있어요. @havenlad님의 제안이에요." },
          {
            pt: 'Vitórias de antes dos troféus também contam. Com conta, toda vitória que está no ranking ganha o troféu na próxima vez que o jogo sincronizar. Sem conta, valem as que o seu histórico prova (por exemplo, um inicial que é o único que você jogou da região). Antes, quem tinha vencido com vários Pokémon ficava sem troféu por essas vitórias; obrigado a @justwex pelo aviso.',
            en: "Wins from before trophies existed count too. With an account, every win on the ranking gets its trophy the next time the game syncs. Without one, the ones your records prove do (for example, a starter that's the only one you played from its region). Before, if you had won with several Pokémon, those wins got no trophy; thanks to @justwex for the report.",
            es: 'Las victorias de antes de los trofeos también cuentan. Con cuenta, toda victoria que está en el ranking gana su trofeo la próxima vez que el juego sincronice. Sin cuenta, valen las que tu historial prueba (por ejemplo, un inicial que es el único que jugaste de su región). Antes, si habías ganado con varios Pokémon, esas victorias no daban trofeo; gracias a @justwex por el aviso.',
          ko: "트로피가 생기기 전 승리도 인정돼요. 계정이 있으면 다음 동기화에서 랭킹의 모든 승리를 반영하고, 게스트는 특정 지방에서 한 스타터만 플레이한 경우처럼 기록으로 증명되는 승리를 반영해요. 여러 포켓몬으로 이긴 기록이 트로피로 인정되지 않던 문제를 고쳤어요. @justwex님의 제보에 감사드려요." },
        ],
      },
      {
        title: { pt: 'Tamanho da interface', en: 'UI size', es: 'Tamaño de la interfaz' , ko: "화면 요소 크기" },
        notes: [
          {
            pt: 'Em telas grandes, os menus e o HUD agora crescem junto com o mapa em vez de ficarem minúsculos. Em Ajustes → Jogo dá para escolher o tamanho, de 100% a 200%, ou deixar no Auto. No celular nada muda.',
            en: 'On big screens, the menus and the HUD now grow with the map instead of staying tiny. Pick the size in Settings → Game, from 100% to 200%, or leave it on Auto. Nothing changes on phones.',
            es: 'En pantallas grandes, los menús y el HUD ahora crecen junto con el mapa en vez de quedarse diminutos. En Ajustes → Juego puedes elegir el tamaño, de 100% a 200%, o dejarlo en Auto. En el celular no cambia nada.',
          ko: "큰 화면에서 메뉴와 HUD가 맵과 함께 커져 작게 보이지 않아요. 설정 → 게임에서 100~200% 또는 자동을 고를 수 있어요. 휴대폰 크기는 유지돼요." },
        ],
      },
      {
        title: { pt: 'Instale o jogo como app', en: 'Install the game as an app', es: 'Instala el juego como app' , ko: "앱으로 설치" },
        notes: [
          {
            pt: 'Ajustes → Sobre agora tem Instalar o app: no Android e no computador (Chrome, Edge) o jogo vira um ícone que abre em tela cheia, sem a barra do navegador. No iPhone e no iPad, o botão mostra como fazer pelo Safari: Compartilhar → Adicionar à Tela de Início.',
            en: "Settings → About now has Install the app: on Android and on computers (Chrome, Edge) the game becomes an icon that opens fullscreen, without the browser bar. On iPhone and iPad, the button shows how to do it in Safari: Share → Add to Home Screen.",
            es: 'Ajustes → Acerca de ahora tiene Instalar la app: en Android y en la computadora (Chrome, Edge) el juego se vuelve un ícono que abre en pantalla completa, sin la barra del navegador. En iPhone y iPad, el botón muestra cómo hacerlo en Safari: Compartir → Agregar a pantalla de inicio.',
          ko: "설정 → 정보의 앱 설치에서 Android·컴퓨터의 Chrome·Edge로 전체 화면 앱을 설치할 수 있어요. 아이폰·아이패드에서는 Safari의 공유 → 홈 화면에 추가 방법을 안내해요." },
        ],
      },
      {
        title: { pt: 'Reportar bug', en: 'Report a bug', es: 'Reportar un error' , ko: "오류 신고" },
        notes: [
          {
            pt: 'Achou um bug? Em Ajustes → Sobre, ou direto na pausa, conte o que aconteceu e mande, sem precisar de conta. Junto vão dados técnicos (versão, aparelho, tela e os últimos erros do jogo), que você pode desligar e ver antes de enviar.',
            en: "Found a bug? From Settings → About, or straight from the pause screen, tell us what happened and send it, no account needed. Technical info goes along (version, device, screen and the game's last errors), which you can turn off and look at before sending.",
            es: '¿Encontraste un error? En Ajustes → Acerca de, o directo en la pausa, cuenta lo que pasó y envíalo, sin necesitar cuenta. Van junto datos técnicos (versión, dispositivo, pantalla y los últimos errores del juego), que puedes apagar y ver antes de enviar.',
          ko: "설정 → 정보나 일시정지 화면에서 계정 없이도 오류를 신고할 수 있어요. 버전·기기·화면·최근 오류 등의 기술 정보를 함께 보낼 수 있고 전송 전에 확인하거나 제외할 수 있어요." },
          {
            pt: 'Se o jogo fechar sozinho no meio de uma partida, na próxima vez que você abrir ele pergunta se quer reportar, com o que deu para salvar da partida, para a gente achar o problema.',
            en: 'If the game closes by itself in the middle of a run, the next time you open it asks whether you want to report it, with what it could save about the run, so we can track the problem down.',
            es: 'Si el juego se cierra solo en medio de una partida, la próxima vez que lo abras pregunta si quieres reportarlo, con lo que pudo guardar de la partida, para que encontremos el problema.',
          ko: "판 중에 게임이 종료되면 다음 실행에서 신고할지 물어봐요. 저장할 수 있었던 판의 정보를 함께 보내 원인을 찾는 데 도움을 줄 수 있어요." },
        ],
      },
      {
        title: { pt: 'Sempre na versão nova', en: 'Always on the latest version', es: 'Siempre en la versión nueva' , ko: "최신 버전 자동 적용" },
        notes: [
          {
            pt: 'Quem deixava o jogo aberto enquanto saía uma atualização podia ficar sem abrir as Novidades. Agora o jogo percebe a versão nova e recarrega sozinho no menu, ou ao fim da partida se você estiver jogando. Seu progresso fica salvo.',
            en: "If the game stayed open while an update came out, What's new could fail to open. Now the game notices the new version and reloads on its own in the menus, or at the end of the run if you're playing. Your progress stays saved.",
            es: 'Si el juego quedaba abierto mientras salía una actualización, las Novedades podían no abrir. Ahora el juego detecta la versión nueva y se recarga solo en el menú, o al final de la partida si estás jugando. Tu progreso queda guardado.',
          ko: "게임을 열어 둔 동안 업데이트되면 새 소식이 열리지 않던 문제를 고쳤어요. 새 버전을 감지하면 메뉴에서 자동으로 새로고침하며, 플레이 중이면 판이 끝난 뒤 반영해요. 진행 상황은 저장돼요." },
        ],
      },
    ],
  },
  {
    date: '2026-10-18',
    title: { pt: 'Muito mais golpes', en: 'Many more moves', es: 'Muchos más movimientos' , ko: "더욱 다양해진 기술" },
    highlights: [
      { pt: '196 golpes, e cada família tem a sua assinatura.', en: '196 moves, and every family has its own signature.', es: '196 movimientos, y cada familia tiene su firma.' , ko: "기술 196종을 추가하고 모든 계열에 전용 기술을 마련했어요." },
      { pt: 'Todo golpe se divide em dois caminhos no Nv 4 e no Nv 7: cada partida joga de um jeito.', en: 'Every move splits into two paths at Lv 4 and Lv 7: no two runs play the same.', es: 'Todo movimiento se divide en dos caminos en el Nv. 4 y en el Nv. 7: cada partida se juega distinto.' , ko: "모든 기술이 4·7레벨에서 두 강화 방향으로 나뉘어 매 판 다르게 플레이할 수 있어요." },
      { pt: 'Habilidades: escolha 1 de 3 na primeira evolução, e o Eevee escolhe a sua eeveelution.', en: 'Abilities: pick 1 of 3 at your first evolution, and Eevee picks its eeveelution.', es: 'Habilidades: elige 1 de 3 en la primera evolución, y Eevee elige su eeveelución.' , ko: "첫 진화에서 특성 세 가지 중 하나를 고르고 이브이는 진화할 모습도 선택해요." },
      { pt: 'TMs dos chefes, Tutor de Golpes no mapa, golpes lendários e golpes em dupla.', en: 'TMs from bosses, a Move Tutor on the map, legendary moves and duo moves.', es: 'MT de los jefes, Tutor de Movimientos en el mapa, movimientos legendarios y en dúo.' , ko: "보스의 기술머신, 맵의 기술 가르침, 전설 기술과 합동 기술을 추가했어요." },
      { pt: 'A pausa mostra a sua ficha de status, e cada golpe tem a sua ficha.', en: 'The pause screen shows your stat sheet, and every move has its own card.', es: 'La pausa muestra tu ficha de estadísticas, y cada movimiento tiene su ficha.' , ko: "일시정지 화면에 능력치 표를 추가하고 모든 기술에 상세 카드를 마련했어요." },
    ],
    changes: [
      {
        title: { pt: 'Ficha de status na pausa', en: 'Stat sheet on the pause screen', es: 'Ficha de estadísticas en la pausa' , ko: "일시정지 화면의 능력치 표" },
        notes: [
          {
            pt: 'A pausa agora mostra a ficha completa da partida: vida máxima, dano, recarga, área, velocidade, regeneração, alcance de coleta e os bônus de tipo, status e dinheiro assim que você os tiver, cada um com quantas cartas de upgrade você já pegou para ele.',
            en: "The pause screen now shows the run's full stat sheet: max HP, damage, cooldown, area, speed, regen, pickup range and the type, status and money bonuses once you have them, each with how many upgrade cards you've taken for it.",
            es: 'La pausa ahora muestra la ficha completa de la partida: vida máxima, daño, recarga, área, velocidad, regeneración, alcance de recogida y los bonos de tipo, estado y dinero en cuanto los tengas, cada uno con cuántas cartas de mejora ya tomaste para él.',
          ko: "최대 HP·데미지·쿨타임·범위·이동속도·재생·습득 범위와 타입·상태 이상·돈 보너스를 일시정지 화면에서 확인할 수 있어요. 각 능력치를 강화한 카드 수도 표시해요." },
          {
            pt: 'Golpes e itens aparecem em listas separadas com o nível de cada um (MAX quando chegam ao topo), e no celular a ficha rola enquanto os botões ficam sempre à mão.',
            en: 'Moves and held items get their own lists with each level (MAX once they top out), and on phones the sheet scrolls while the buttons stay within reach.',
            es: 'Los movimientos y los objetos tienen listas propias con el nivel de cada uno (MAX cuando llegan al tope), y en el celular la ficha se desplaza mientras los botones quedan siempre a mano.',
          ko: "기술과 지닌 물건의 목록·레벨·최대 강화 표시를 추가했어요. 휴대폰에서는 표만 스크롤하고 버튼은 누르기 쉬운 위치에 유지돼요." },
        ],
      },
      {
        title: { pt: 'Ficha do golpe', en: 'Move cards', es: 'Ficha del movimiento' , ko: "기술 상세 카드" },
        notes: [
          {
            pt: 'Passe o mouse sobre um golpe na barra do topo, na pausa ou nas cartas de subida de nível (no celular, segure o dedo) para ver a ficha dele: dano e recarga já com os seus itens e bônus, projéteis, área, duração, perfuração e chance de status quando o golpe usa, o nível e do que ele precisa para evoluir.',
            en: 'Hover a move in the top bar, the pause menu or the level-up cards (on phones, hold your finger on it) to see its card: damage and cooldown with your items and bonuses applied, projectiles, area, duration, pierce and status chance when the move uses them, its level and what it needs to evolve.',
            es: 'Pasa el ratón por un movimiento en la barra superior, en la pausa o en las cartas de subida de nivel (en el celular, mantén el dedo encima) para ver su ficha: daño y recarga con tus objetos y bonificaciones, proyectiles, área, duración, perforación y probabilidad de estado cuando el movimiento los usa, su nivel y lo que necesita para evolucionar.',
          ko: "상단 바·일시정지 메뉴·레벨업에서 기술에 마우스를 올리거나 휴대폰에서 길게 누르면 상세 카드가 열려요. 도구와 보너스가 반영된 데미지·쿨타임·발사체·범위·지속시간·관통·상태 이상 확률·레벨·진화 조건을 확인할 수 있어요." },
          {
            pt: 'Nas cartas de subida de nível, a ficha mostra o antes e o depois de cada melhoria. Segurar a carta só abre a ficha: ela nunca escolhe a carta sem querer.',
            en: 'On level-up cards, the card shows each upgrade before and after. Holding a card only opens its details: it never picks the card by accident.',
            es: 'En las cartas de subida de nivel, la ficha muestra el antes y el después de cada mejora. Mantener pulsada la carta solo abre la ficha: nunca la elige sin querer.',
          ko: "레벨업 카드는 강화 전후를 보여 줘요. 길게 누르면 상세 정보만 열리고 실수로 카드를 선택하지 않아요." },
        ],
      },
      {
        title: { pt: 'Mega Evolução sem travar o jogo', en: 'Mega Evolution no longer freezes the game', es: 'La Megaevolución ya no congela el juego' , ko: "메가진화 중 멈추던 문제 수정" },
        notes: [
          {
            pt: 'Mega Evoluir enquanto o especial ainda carregava travava o jogo e a partida se perdia. Acontecia com os Megas cujo especial é uma sequência de investidas: Raichu X, Feraligatr, Scizor, Blaziken, Gallade, Banette e Greninja. Agora a carga é cancelada e o especial do Mega já vem pronto. Obrigado ao @DashtheBard pelo aviso!',
            en: 'Mega Evolving while your special was still charging froze the game and the run was lost. It happened with the Megas whose special is a chain of dashes: Raichu X, Feraligatr, Scizor, Blaziken, Gallade, Banette and Greninja. Now the charge is canceled and the Mega’s special comes ready. Thanks to @DashtheBard for the report!',
            es: 'Megaevolucionar mientras el especial aún se cargaba congelaba el juego y se perdía la partida. Pasaba con los Megas cuyo especial es una cadena de embestidas: Raichu X, Feraligatr, Scizor, Blaziken, Gallade, Banette y Greninja. Ahora la carga se cancela y el especial del Mega ya viene listo. ¡Gracias a @DashtheBard por el aviso!',
          ko: "필살기를 충전하는 중 연쇄 돌진형 메가진화를 쓰면 게임이 멈추고 판이 사라지던 문제를 고쳤어요. 라이츄X·장크로다일·핫삼·번치코·엘레이드·다크펫·개굴닌자에서 발생했어요. 이제 충전을 취소하고 메가 필살기를 바로 준비해요. @DashtheBard님의 제보에 감사드려요." },
        ],
      },
      {
        title: { pt: 'Golpes, golpes e mais golpes', en: 'Moves, moves and more moves', es: 'Movimientos, movimientos y más movimientos' , ko: "기술을 대폭 확장했어요" },
        notes: [
          {
            pt: 'A ideia mais votada do mural de ideias (71 votos) dizia que os golpes eram poucos e as partidas, todas iguais. Agora são 196 golpes, e cada família tem a sua assinatura: Brave Bird, Weather Ball, Spore, Fiery Dance, Gigaton Hammer, Moonblast e dezenas de outras, cada uma com um jeito próprio de jogar.',
            en: 'The top idea on the ideas board (71 votes) said moves were too few and every run felt the same. Now there are 196 moves, and every family has its own signature: Brave Bird, Weather Ball, Spore, Fiery Dance, Gigaton Hammer, Moonblast and dozens more, each one playing its own way.',
            es: 'La idea más votada del muro de ideas (71 votos) decía que había pocos movimientos y que todas las partidas eran iguales. Ahora son 196 movimientos, y cada familia tiene su firma: Brave Bird, Weather Ball, Spore, Fiery Dance, Gigaton Hammer, Moonblast y decenas más, cada una con su propia forma de jugar.',
          ko: "기술이 적어 매 판 비슷하다는 71표의 최다 제안을 반영했어요. 브레이브버드·웨더볼·버섯포자·불꽃춤·거대해머·문포스 등 각기 다르게 작동하는 기술 196종과 모든 계열의 전용 기술을 추가했어요." },
          {
            pt: 'Os golpes que um Pokémon aprende crescem a cada evolução, e a lista final tem mais golpes do que os 6 espaços: toda partida deixa alguns de fora. A partida começa com um draft do 2º golpe.',
            en: 'The moves a Pokémon learns grow with each evolution, and the final list has more moves than the 6 slots: every run leaves some out. A run starts with a draft for your 2nd move.',
            es: 'Los movimientos que aprende un Pokémon crecen con cada evolución, y la lista final tiene más movimientos que los 6 espacios: cada partida deja algunos fuera. La partida empieza con un draft de tu 2.º movimiento.',
          ko: "진화할수록 배울 수 있는 기술이 늘고 최종 목록은 여섯 칸보다 많아 매 판 일부를 골라야 해요. 시작할 때 두 번째 기술을 선택해요." },
          {
            pt: 'Todo golpe base se divide em dois caminhos no Nv 4 e no Nv 7, que mudam como ele joga (ricochetear, explodir, deixar rastro, ecoar…). Cards raros sobem 2 níveis, cards shiny são uma escolha grátis, e o botão Esquecer tira da partida o que você não quer ver.',
            en: 'Every base move splits into two paths at Lv 4 and Lv 7 that change how it plays (bouncing, exploding, leaving a trail, echoing…). Rare cards give 2 levels, shiny cards are a free pick, and the Forget button takes what you don’t want out of the run.',
            es: 'Todo movimiento base se divide en dos caminos en el Nv. 4 y en el Nv. 7, que cambian cómo juega (rebotar, explotar, dejar un rastro, hacer eco…). Las cartas raras suben 2 niveles, las shiny son una elección gratis, y el botón Olvidar saca de la partida lo que no quieres ver.',
          ko: "기본 기술은 4·7레벨에서 튕기기·폭발·흔적·메아리 같은 두 강화 방향으로 나뉘어요. 희귀 카드는 2레벨을 올리고 이로치 카드는 무료 선택이며, 잊기는 원치 않는 선택지를 이번 판에서 제외해요." },
          {
            pt: '91 Habilidades: na primeira evolução você escolhe 1 de 3, a Oculta incluída. Eevee escolhe entre as 8 eeveelutions, e Kirlia, Snorunt, Poliwhirl, Scyther e Charcadet também ramificam. Chegou a Mega Gallade: 38 Megas.',
            en: '91 Abilities: at the first evolution you pick 1 of 3, the Hidden one included. Eevee picks among its 8 eeveelutions, and Kirlia, Snorunt, Poliwhirl, Scyther and Charcadet branch too. Mega Gallade is here: 38 Megas.',
            es: '91 Habilidades: en la primera evolución eliges 1 de 3, la Oculta incluida. Eevee elige entre sus 8 eeveeluciones, y Kirlia, Snorunt, Poliwhirl, Scyther y Charcadet también se ramifican. Llegó Mega Gallade: 38 Megas.',
          ko: "특성 91종을 추가했어요. 첫 진화에서 숨겨진 특성을 포함한 세 가지 중 하나를 골라요. 이브이는 여덟 진화형을, 킬리아·눈꼬마·슈륙챙이·스라크·카르본도 분기 진화를 선택해요. 메가엘레이드를 더해 메가진화는 38종이에요." },
          {
            pt: 'Agora todo golpe comum evolui, com 7 itens de tipo novos (Black Belt, Metal Coat, Spell Tag, Black Glasses, Twisted Spoon, Soft Sand e Fairy Feather), e os golpes evoluídos mudam de forma e seguem subindo até o Nv 5.',
            en: 'Every regular move now evolves, with 7 new type items (Black Belt, Metal Coat, Spell Tag, Black Glasses, Twisted Spoon, Soft Sand and Fairy Feather), and evolved moves change shape and keep growing up to Lv 5.',
            es: 'Ahora todo movimiento común evoluciona, con 7 objetos de tipo nuevos (Black Belt, Metal Coat, Spell Tag, Black Glasses, Twisted Spoon, Soft Sand y Fairy Feather), y los movimientos evolucionados cambian de forma y siguen subiendo hasta el Nv. 5.',
          ko: "모든 일반 기술이 진화하며 검은띠·금속코트·저주의부적·검은안경·휘어진스푼·부드러운모래·요정의깃털 등 타입 물건 7종을 추가했어요. 진화한 기술은 형태가 바뀌고 5레벨까지 성장해요." },
          {
            pt: 'Golpes de fora do repertório: chefes derrotados deixam um TM (Rock Slide, Ice Beam, Psystrike…), o Tutor de Golpes arma a tenda no mapa, e vencer uma fenda oferece o golpe lendário do próprio lendário (Sacred Fire, Origin Pulse, Roar of Time…). Com os espaços cheios: "1, 2 e… Puf!".',
            en: 'Moves from outside the learnset: beaten bosses drop a TM (Rock Slide, Ice Beam, Psystrike…), the Move Tutor pitches a tent on the map, and clearing a rift offers the legendary’s own move (Sacred Fire, Origin Pulse, Roar of Time…). With every slot full: "1, 2 and… Poof!".',
            es: 'Movimientos de fuera de la lista: los jefes derrotados dejan una MT (Rock Slide, Ice Beam, Psystrike…), el Tutor de Movimientos arma su carpa en el mapa, y ganar una grieta ofrece el movimiento legendario del propio legendario (Sacred Fire, Origin Pulse, Roar of Time…). Con los espacios llenos: "1, 2 y… ¡Puf!".',
          ko: "보스가 떨어뜨리는 스톤샤워·냉동빔·사이코브레이크 등의 기술머신, 맵의 기술 가르침, 균열 승리 보상인 성스러운불꽃·근원의파동·시간의포효 등으로 원래 배우지 못하는 기술도 얻어요. 칸이 가득 차면 기존 기술을 잊어야 해요." },
          {
            pt: 'Golpes em dupla: dois golpes no máximo com os tipos certos se unem em Fire Pledge, Water Pledge, Grass Pledge, Fusion Flare, Fusion Bolt, Ion Deluge, Freeze-Dry ou Nightmare (um por partida). E baús trancados podem esconder um item amaldiçoado: Life Orb, Choice Band, Flame Orb ou Iron Ball, muito fortes, com um preço.',
            en: 'Duo moves: two maxed moves of the right types fuse into Fire Pledge, Water Pledge, Grass Pledge, Fusion Flare, Fusion Bolt, Ion Deluge, Freeze-Dry or Nightmare (one per run). And locked chests may hide a cursed item: Life Orb, Choice Band, Flame Orb or Iron Ball, very strong, at a price.',
            es: 'Movimientos en dúo: dos movimientos al máximo de los tipos correctos se unen en Fire Pledge, Water Pledge, Grass Pledge, Fusion Flare, Fusion Bolt, Ion Deluge, Freeze-Dry o Nightmare (uno por partida). Y los cofres cerrados pueden esconder un objeto maldito: Life Orb, Choice Band, Flame Orb o Iron Ball, muy fuertes, con un precio.',
          ko: "최대 강화한 알맞은 타입의 기술 두 개를 합쳐 불꽃의맹세·물의맹세·풀의맹세·크로스플레임·크로스썬더·플라스마샤워·프리즈드라이·악몽 중 합동 기술 하나를 만들 수 있어요. 잠긴 상자에는 강력한 효과와 대가를 가진 생명의구슬·구애머리띠·화염구슬·검은철구가 숨겨지기도 해요." },
        ],
      },
    ],
  },
  {
    date: '2026-10-17',
    title: { pt: 'Um lobby novo', en: 'A brand-new lobby', es: 'Un lobby nuevo' , ko: "새로워진 로비" },
    highlights: [
      { pt: 'O título virou um lobby, com o seu parceiro passeando pelo gramado.', en: 'The title screen became a lobby, with your partner strolling on the grass.', es: 'El título ahora es un lobby, con tu compañero paseando por el pasto.' , ko: "타이틀 화면을 파트너가 풀밭을 산책하는 로비로 바꿨어요." },
      { pt: 'Nova escolha de parceiro, com os 27 iniciais numa grade só.', en: 'A new partner select, with all 27 starters on a single grid.', es: 'Nueva selección de compañero, con los 27 iniciales en una sola cuadrícula.' , ko: "스타터 27마리를 한 그리드에서 고르는 새 파트너 선택 화면을 추가했어요." },
      { pt: 'Shinx, Roggenrola e Deino chegaram aos ovos.', en: 'Shinx, Roggenrola and Deino now hatch from eggs.', es: 'Shinx, Roggenrola y Deino ahora salen de los huevos.' , ko: "알에서 꼬링크·단굴·모노두도 부화해요." },
      { pt: 'Mural de ideias: peça e vote no que você quer ver no jogo.', en: 'Ideas board: ask for and vote on what you want in the game.', es: 'Muro de ideas: pide y vota lo que quieres ver en el juego.' , ko: "아이디어 게시판에서 원하는 기능을 제안하고 투표할 수 있어요." },
      { pt: 'Cair numa fenda não acaba mais a partida.', en: 'Falling in a rift no longer ends your run.', es: 'Caer en una grieta ya no termina la partida.' , ko: "균열에서 기절해도 판이 끝나지 않아요." },
    ],
    changes: [
      {
        title: { pt: 'Shinx chegou aos ovos', en: 'Shinx hatches from eggs', es: 'Shinx sale de los huevos' , ko: '알에서 꼬링크가 태어나요' },
        notes: [
          {
            pt: 'Shinx › Luxio › Luxray é a nova família do Ovo comum: um lince elétrico rápido que acerta em cadeia com Shock Wave, e o olhar do Luxray faz os choques paralisarem com mais frequência. São 55 famílias nos ovos e 82 Pokémon jogáveis.',
            en: 'Shinx › Luxio › Luxray is the new Common Egg family: a quick electric lynx that chains Shock Wave from foe to foe, and Luxray’s glare makes its shocks paralyze more often. That makes 55 egg families and 82 playable Pokémon.',
            es: 'Shinx › Luxio › Luxray es la nueva familia del Huevo común: un lince eléctrico rápido que encadena Shock Wave de enemigo en enemigo, y la mirada de Luxray hace que sus descargas paralicen más seguido. Son 55 familias en los huevos y 82 Pokémon jugables.',
          ko: '꼬링크 › 럭시오 › 렌트라가 일반 알의 새 계열이에요. 전격파를 적에서 적으로 연쇄시키는 날쌘 전기 스라소니로, 렌트라의 날카로운 눈빛 덕분에 전격이 더 자주 마비를 일으켜요. 이제 알 계열은 55개, 플레이할 수 있는 포켓몬은 82마리예요.' },
        ],
      },
      {
        title: { pt: 'Roggenrola chegou aos ovos', en: 'Roggenrola hatches from eggs', es: 'Roggenrola sale de los huevos' , ko: '알에서 단굴이 태어나요' },
        notes: [
          {
            pt: 'Roggenrola › Boldore › Gigalith é a nova família do Ovo comum, ao lado do Geodude: uma pedra de couraça grossa que derruba Rock Tomb nos inimigos, e os cristais do Gigalith fazem cada golpe pegar uma área maior. São 54 famílias nos ovos e 81 Pokémon jogáveis. Pedido do @RedmanRubels no X!',
            en: 'Roggenrola › Boldore › Gigalith is the new Common Egg family, alongside Geodude: a thick-armored rock that drops Rock Tomb on foes, and Gigalith’s crystals make every hit cover a wider area. That makes 54 egg families and 81 playable Pokémon. Requested by @RedmanRubels on X!',
            es: 'Roggenrola › Boldore › Gigalith es la nueva familia del Huevo común, junto a Geodude: una roca de coraza gruesa que deja caer Rock Tomb sobre los enemigos, y los cristales de Gigalith hacen que cada golpe cubra más área. Son 54 familias en los huevos y 81 Pokémon jugables. ¡Pedido de @RedmanRubels en X!',
          ko: '단굴 › 암트르 › 기가이어스가 꼬마돌과 함께 일반 알의 새 계열이 됐어요. 두꺼운 갑옷을 두른 바위로 적에게 암석봉인을 떨어뜨리고, 기가이어스의 결정 덕분에 모든 공격의 범위가 넓어져요. 이제 알 계열은 54개, 플레이할 수 있는 포켓몬은 81마리예요. X에서 @RedmanRubels님이 요청해 주셨어요!' },
        ],
      },
      {
        title: { pt: 'Cair numa fenda não acaba a partida', en: 'Falling in a rift no longer ends the run', es: 'Caer en una grieta ya no termina la partida' , ko: '균열에서 쓰러져도 판이 끝나지 않아요' },
        notes: [
          {
            pt: 'Se o seu HP chegar a zero na arena de uma fenda lendária, você não perde mais a partida: o seu Pokémon desmaia, a fenda o puxa de volta e você reaparece no mapa com 30% do HP, sem a recompensa da fenda. O Revive fica guardado para depois. Ideia do @holyfield no mural de ideias!',
            en: 'If your HP hits zero in a legendary rift’s arena, the run is no longer over: your Pokémon faints, the rift pulls it back and you land on the map with 30% HP, without the rift’s reward. Your Revive stays in the Bag for later. An idea from @holyfield on the ideas board!',
            es: 'Si tu HP llega a cero en la arena de una grieta legendaria, ya no pierdes la partida: tu Pokémon se debilita, la grieta lo jala de vuelta y reapareces en el mapa con 30% de HP, sin la recompensa de la grieta. Tu Revive queda guardado para después. ¡Idea de @holyfield en el muro de ideas!',
          ko: '전설의 균열 아레나에서 HP가 0이 되어도 더 이상 판이 끝나지 않아요. 포켓몬이 기절하면 균열이 밖으로 밀어내고, 균열 보상 없이 HP 30%로 맵에 돌아와요. 기력의조각은 나중을 위해 가방에 그대로 남아요. 아이디어 게시판에 올라온 @holyfield님의 아이디어예요!' },
        ],
      },
      {
        title: { pt: 'Hall da Fama sem pedestais vazios', en: 'No more empty pedestals in the Hall of Fame', es: 'Salón de la Fama sin pedestales vacíos' , ko: '명예의 전당에 더 이상 빈 받침대가 없어요' },
        notes: [
          {
            pt: 'Aberto pelo Cartão de Treinador, o Hall da Fama deixava os pedestais das Lendas vazios. Agora os Pokémon sempre aparecem, e enquanto carregam uma Poké Ball balança no lugar deles. Se um não carregar, a Poké Ball fica lá em vez de um espaço em branco.',
            en: 'Opened from the Trainer Card, the Hall of Fame left the Legends’ pedestals empty. Now the Pokémon always show up, and a Poké Ball wobbles in their place while they load. If one doesn’t load, the Poké Ball stays instead of a blank space.',
            es: 'Abierto desde la Tarjeta de Entrenador, el Salón de la Fama dejaba vacíos los pedestales de las Leyendas. Ahora los Pokémon siempre aparecen, y mientras cargan una Poké Ball se balancea en su lugar. Si uno no carga, la Poké Ball se queda en vez de un espacio en blanco.',
          ko: '트레이너 카드에서 명예의 전당을 열면 레전드의 받침대가 비어 있었어요. 이제 포켓몬이 항상 나타나고, 불러오는 동안에는 그 자리에서 몬스터볼이 흔들려요. 끝내 불러오지 못하면 빈칸 대신 몬스터볼이 남아 있어요.' },
        ],
      },
      {
        title: { pt: 'Mural de ideias', en: 'Ideas board', es: 'Muro de ideas' , ko: '아이디어 게시판' },
        notes: [
          {
            pt: 'Agora você pode pedir o que quer ver no jogo! Toque em Ideias no menu principal (ou abra pokemonsurvivors.com/?ideias): dá para ler as ideias de todo mundo, votar a favor ou contra com uma conta e mandar as suas (até 3 por dia). As mais votadas entram na fila, e as que chegam ao jogo aparecem na aba Feitas.',
            en: 'Now you can ask for what you want to see in the game! Tap Ideas in the main menu (or open pokemonsurvivors.com/?ideias): read everyone’s ideas, vote them up or down with an account and send your own (up to 3 a day). The most voted go in the queue, and the ones that make it into the game show up in the Shipped tab.',
            es: '¡Ahora puedes pedir lo que quieres ver en el juego! Toca Ideas en el menú principal (o abre pokemonsurvivors.com/?ideias): lee las ideas de todos, vota a favor o en contra con una cuenta y envía las tuyas (hasta 3 por día). Las más votadas entran en la fila, y las que llegan al juego aparecen en la pestaña Hechas.',
          ko: "메인 메뉴의 아이디어나 pokemonsurvivors.com/?ideias에서 다른 제안을 읽고 계정으로 찬반 투표하거나 하루 세 개까지 새 제안을 보낼 수 있어요. 표가 많은 제안은 작업 대기열에 오르고 구현되면 반영 완료 탭에 표시돼요." },
        ],
      },
      {
        title: { pt: 'O jogo reconhece o seu controle', en: 'The game recognizes your gamepad', es: 'El juego reconoce tu control' , ko: '게임이 게임패드를 제대로 인식해요' },
        notes: [
          {
            pt: 'Com mais de um controle ligado (Joy-Cons, um controle virtual), um botão segurado em um deles escondia o mesmo botão apertado no outro: o controle Xbox parecia não funcionar na tela de Controles. Agora cada controle conta sozinho.',
            en: 'With more than one gamepad on (Joy-Cons, a virtual controller), a button held on one hid the same button pressed on the other, so an Xbox controller seemed dead in the Controls screen. Now each gamepad counts on its own.',
            es: 'Con más de un control encendido (Joy-Cons, un control virtual), un botón presionado en uno escondía el mismo botón en el otro, y el control de Xbox parecía no funcionar en la pantalla de Controles. Ahora cada control cuenta por separado.',
          ko: '게임패드가 둘 이상 켜져 있으면(조이콘, 가상 컨트롤러 등) 한쪽에서 누르고 있는 버튼이 다른 쪽에서 누른 같은 버튼을 가려서, 조작 화면에서 Xbox 컨트롤러가 먹통처럼 보였어요. 이제 게임패드마다 따로 인식해요.' },
          {
            pt: 'A tela de Controles mostra o nome do controle conectado, ou o que fazer quando o navegador ainda não o vê, e os botões aparecem como no seu controle: A B X Y no Xbox, ✕ ○ □ △ no PlayStation e B A Y X no Nintendo. As setas ← → do direcional não aparecem mais como um traço.',
            en: 'The Controls screen names the gamepad connected, or says what to do while the browser doesn’t see it yet, and the buttons show as printed on your pad: A B X Y on Xbox, ✕ ○ □ △ on PlayStation and B A Y X on Nintendo. The D-pad’s ← → no longer show as a dash.',
            es: 'La pantalla de Controles muestra el nombre del control conectado, o qué hacer mientras el navegador todavía no lo ve, y los botones aparecen como en tu control: A B X Y en Xbox, ✕ ○ □ △ en PlayStation y B A Y X en Nintendo. Las flechas ← → de la cruceta ya no aparecen como un guion.',
          ko: '조작 화면에 연결된 게임패드의 이름이 표시되고, 브라우저가 아직 인식하지 못했다면 어떻게 하면 되는지 알려 줘요. 버튼도 게임패드에 적힌 그대로 보여요: Xbox는 A B X Y, PlayStation은 ✕ ○ □ △, Nintendo는 B A Y X. 방향 패드의 ← →가 더 이상 줄표로 보이지 않아요.' },
          {
            pt: 'Jogando com o controle, as dicas das telas e os botões do HUD mostram os botões do controle no lugar das teclas, e os atalhos que só existem no teclado saem da frente. Basta apertar uma tecla para voltar às dicas do teclado.',
            en: 'Playing with a gamepad, the screens’ hints and the HUD show its buttons instead of keys, and keyboard-only shortcuts step aside. Press any key to get the keyboard hints back.',
            es: 'Jugando con el control, las pistas de las pantallas y los botones del HUD muestran sus botones en lugar de las teclas, y los atajos que solo existen en el teclado se apartan. Presiona una tecla para volver a las pistas del teclado.',
          ko: '게임패드로 플레이하면 화면 안내와 HUD에 키 대신 게임패드 버튼이 표시되고, 키보드 전용 단축키는 숨겨져요. 아무 키나 누르면 키보드 안내로 돌아가요.' },
        ],
      },
      {
        title: { pt: 'Fim do rastro de imagens no celular', en: 'No more smeared images on phones', es: 'Adiós al rastro de imágenes en el celular' , ko: '휴대폰에서 화면이 번지지 않아요' },
        notes: [
          {
            pt: 'Em partidas longas no celular, o navegador às vezes reinicia a placa de vídeo para liberar memória. Quando isso acontecia, o chão sumia e os Pokémon passavam a deixar rastros pela tela, até virar um borrão. Agora o jogo redesenha tudo na hora e a partida segue normal. Obrigado ao @franbarquero pelo vídeo!',
            en: 'In long runs on phones, the browser sometimes resets the graphics card to free memory. When that happened, the ground vanished and the Pokémon left trails across the screen until it all turned into a smear. Now the game redraws everything right away and the run goes on normally. Thanks to @franbarquero for the video!',
            es: 'En partidas largas en el celular, el navegador a veces reinicia la tarjeta gráfica para liberar memoria. Cuando pasaba, el suelo desaparecía y los Pokémon dejaban rastros por la pantalla hasta volverse un borrón. Ahora el juego vuelve a dibujar todo al instante y la partida sigue normal. ¡Gracias a @franbarquero por el video!',
          ko: '휴대폰에서 판이 길어지면 브라우저가 메모리를 확보하려고 가끔 그래픽 카드를 초기화해요. 그러면 바닥이 사라지고 포켓몬이 화면에 잔상을 남기다가 결국 전부 번져 버렸어요. 이제 게임이 곧바로 모든 것을 다시 그려서 판이 정상적으로 이어져요. 영상을 보내 주신 @franbarquero님께 감사드려요!' },
        ],
      },
      {
        title: { pt: 'Remapear com o controle', en: 'Remapping with a gamepad', es: 'Reasignar con el control' , ko: '게임패드로 키 바꾸기' },
        notes: [
          {
            pt: 'Na tela de Controles, escolher uma ação com o botão A do controle ficava esperando uma tecla do teclado, e o controle parecia não ser detectado. Agora a troca aceita a tecla ou o botão que você apertar, venha do teclado ou do controle.',
            en: 'In the Controls screen, picking an action with the gamepad’s A button waited for a keyboard key, so the gamepad seemed undetected. Now it takes the key or button you press next, from the keyboard or the gamepad.',
            es: 'En la pantalla de Controles, elegir una acción con el botón A del control esperaba una tecla del teclado, y el control parecía no detectarse. Ahora acepta la tecla o el botón que presiones, del teclado o del control.',
          ko: '조작 화면에서 게임패드의 A 버튼으로 동작을 고르면 키보드 키만 기다려서, 게임패드가 인식되지 않는 것처럼 보였어요. 이제 키보드든 게임패드든 다음에 누르는 키나 버튼으로 바뀌어요.' },
        ],
      },
      {
        title: { pt: 'Passeie com seu parceiro no menu', en: 'Take your partner for a walk in the menu', es: 'Pasea con tu compañero en el menú' , ko: '메뉴에서 파트너와 산책해요' },
        notes: [
          {
            pt: 'No menu principal, seu parceiro agora pula do palco e passeia pelo gramado: use WASD no computador, ou toque na grama (ou arraste, como no joystick) no celular. Os Pokémon selvagens que passam por ali respondem ao oi com o próprio grito e um balão: alguns pulam de alegria, outros rodopiam, os tímidos fogem e alguns ficam tão felizes que seguem você por um tempo. Depois de um descanso, o parceiro volta sozinho para o palco.',
            en: 'In the main menu, your partner now hops off its stage and walks around the meadow: use WASD on a computer, or tap the grass (or drag, like the joystick) on a phone. The wild Pokémon wandering by answer its hello with their cry and a speech bubble: some hop with joy, some twirl, shy ones run off, and some are so happy they follow you for a while. After a rest, your partner walks back to its stage on its own.',
            es: 'En el menú principal, tu compañero ahora salta del escenario y pasea por el prado: usa WASD en la computadora, o toca el pasto (o arrastra, como el joystick) en el celular. Los Pokémon salvajes que pasan responden al saludo con su grito y un globo: algunos saltan de alegría, otros giran, los tímidos huyen y algunos se ponen tan contentos que te siguen un rato. Después de descansar, tu compañero vuelve solo al escenario.',
          ko: '이제 메인 메뉴에서 파트너가 무대에서 내려와 초원을 산책해요. 컴퓨터에서는 WASD를 쓰고, 휴대폰에서는 풀밭을 터치(또는 조이스틱처럼 드래그)하세요. 지나가던 야생 포켓몬이 울음소리와 말풍선으로 인사에 답해요. 기뻐서 폴짝 뛰는 포켓몬, 빙글빙글 도는 포켓몬, 수줍어서 달아나는 포켓몬도 있고, 너무 기뻐서 한동안 따라오는 포켓몬도 있어요. 한숨 돌리고 나면 파트너는 알아서 무대로 돌아가요.' },
        ],
      },
      {
        title: { pt: 'Teclas WASD no lugar do joystick no computador', en: 'WASD keys instead of the joystick on computers', es: 'Teclas WASD en lugar del joystick en la computadora' , ko: '컴퓨터에서는 조이스틱 대신 WASD 키' },
        notes: [
          {
            pt: 'Com o joystick fixo ligado, o computador mostrava o joystick de toque no canto da tela. Agora, com mouse e teclado, esse canto mostra as teclas de movimento (WASD, ou as que você remapeou), meio transparentes, que acendem enquanto são apertadas. No celular, o joystick fixo continua igual.',
            en: 'With the fixed joystick on, computers showed the touch joystick in the corner of the screen. Now, with a mouse and keyboard, that corner shows the movement keys (WASD, or the ones you remapped), semi-transparent, lighting up while held. On phones, the fixed joystick stays the same.',
            es: 'Con el joystick fijo activado, la computadora mostraba el joystick táctil en la esquina de la pantalla. Ahora, con mouse y teclado, esa esquina muestra las teclas de movimiento (WASD, o las que remapeaste), semitransparentes, que se iluminan mientras las presionas. En el celular, el joystick fijo sigue igual.',
          ko: '고정 조이스틱을 켜면 컴퓨터에서도 화면 구석에 터치 조이스틱이 보였어요. 이제 마우스와 키보드로 플레이하면 그 자리에 이동 키(WASD 또는 직접 바꾼 키)가 반투명하게 표시되고, 누르고 있는 동안 불이 들어와요. 휴대폰의 고정 조이스틱은 그대로예요.' },
        ],
      },
      {
        title: { pt: 'Deino chegou aos ovos', en: 'Deino hatches from eggs', es: 'Deino sale de los huevos' , ko: '알에서 모노두가 태어나요' },
        notes: [
          {
            pt: 'Deino › Zweilous › Hydreigon é a nova família do Ovo ultra raro, ao lado de Dratini, Gible e Bagon: um dragão sombrio que morde com Crunch, bate forte desde o ovo e, com as três cabeças do Hydreigon, dispara um projétil a mais. São 53 famílias nos ovos e 80 Pokémon jogáveis.',
            en: 'Deino › Zweilous › Hydreigon is the new Ultra Rare Egg family, alongside Dratini, Gible and Bagon: a dark dragon that bites with Crunch, hits hard from the start and, with its three heads as Hydreigon, fires one more projectile. That makes 53 egg families and 80 playable Pokémon.',
            es: 'Deino › Zweilous › Hydreigon es la nueva familia del Huevo ultrarraro, junto a Dratini, Gible y Bagon: un dragón siniestro que muerde con Crunch, pega fuerte desde el huevo y, con las tres cabezas de Hydreigon, dispara un proyectil más. Son 53 familias en los huevos y 80 Pokémon jugables.',
          ko: '모노두 › 디헤드 › 삼삼드래가 미뇽, 딥상어동, 아공이와 함께 울트라 레어 알의 새 계열이 됐어요. 깨물어부수기로 무는 악 타입 드래곤으로, 처음부터 강하게 때리고 삼삼드래가 되면 세 개의 머리로 투사체를 하나 더 쏴요. 이제 알 계열은 53개, 플레이할 수 있는 포켓몬은 80마리예요.' },
        ],
      },
      {
        title: { pt: 'Silhuetas na aba Ovos', en: 'Silhouettes in the Eggs tab', es: 'Siluetas en la pestaña Huevos' , ko: '알 탭의 실루엣' },
        notes: [
          {
            pt: 'Na escolha de parceiro, os Pokémon que ainda estão no ovo aparecem como uma silhueta preta no lugar do ovo, como no clássico "Quem é esse Pokémon?".',
            en: 'In the partner select, Pokémon still in their egg now show as a black silhouette instead of the egg, like the classic "Who\'s that Pokémon?".',
            es: 'En la selección de compañero, los Pokémon que siguen en su huevo aparecen como una silueta negra en lugar del huevo, como en el clásico "¿Quién es ese Pokémon?".',
          ko: '파트너 선택에서 아직 알 속에 있는 포켓몬이 알 대신 검은 실루엣으로 보여요. 그 유명한 "이 포켓몬은 누구일까요?"처럼요.' },
        ],
      },
      {
        title: { pt: 'Os apoiadores ganharam um Hall da Fama', en: 'Supporters got a Hall of Fame', es: 'Los patrocinadores tienen un Salón de la Fama' , ko: '후원자를 위한 명예의 전당' },
        notes: [
          {
            pt: 'A tela de Apoiadores virou o Hall da Fama: as Lendas (quem somou R$ 50 ou US$ 10) ficam em pedestais dourados sob um holofote, com o shiny que escolheram (ou o Pokémon que acompanham), e os outros apoiadores aparecem com seu avatar. Toque em qualquer um para ver o perfil.',
            en: 'The Supporters screen became the Hall of Fame: the Legends (R$ 50 or US$ 10 in all) stand on golden pedestals under a spotlight with the shiny they picked (or the Pokémon they walk with), and the other supporters show up with their avatar. Tap anyone to see their profile.',
            es: 'La pantalla de Patrocinadores se convirtió en el Salón de la Fama: las Leyendas (R$ 50 o US$ 10 en total) están en pedestales dorados bajo un reflector con el shiny que eligieron (o el Pokémon que los acompaña), y los demás patrocinadores aparecen con su avatar. Toca a cualquiera para ver su perfil.',
          ko: '후원자 화면이 명예의 전당으로 바뀌었어요. 레전드(누적 R$ 50 또는 US$ 10)는 스포트라이트 아래 황금 받침대 위에 자신이 고른 이로치(또는 함께 다니는 포켓몬)와 함께 서 있고, 다른 후원자는 아바타로 표시돼요. 누구든 터치하면 프로필을 볼 수 있어요.' },
          {
            pt: 'Embaixo (ou ao lado, na tela deitada) ficam as recompensas, todas cosméticas, e o botão Apoiar. Para quem já apoia, os mesmos ícones viram atalhos: escolher o shiny, o companheiro, a votação, resgatar um código e mostrar ou esconder seu nome.',
            en: 'Below (or beside it, on a wide screen) are the rewards, all cosmetic, and the Support button. If you already support the game, the same icons become shortcuts: pick your shiny, your companion, the poll, redeem a code and show or hide your name.',
            es: 'Abajo (o al lado, en pantalla horizontal) están las recompensas, todas cosméticas, y el botón Apoyar. Si ya apoyas el juego, los mismos íconos se vuelven atajos: elegir tu shiny, tu compañero, la votación, canjear un código y mostrar u ocultar tu nombre.',
          ko: '아래쪽(가로 화면에서는 옆쪽)에는 모두 꾸미기용인 보상과 후원 버튼이 있어요. 이미 후원하고 있다면 같은 아이콘이 바로가기가 돼요: 이로치 고르기, 동행 포켓몬 고르기, 투표, 코드 입력, 이름 표시·숨기기.' },
        ],
      },
      {
        title: { pt: 'Nova escolha de parceiro', en: 'A new partner select', es: 'Nueva selección de compañero' , ko: '새로워진 파트너 선택' },
        notes: [
          {
            pt: 'Os 27 iniciais aparecem todos de uma vez, numa grade de 9 regiões por Planta, Fogo e Água, sem abas de região. Os Pokémon dos ovos ficam na aba Ovos, e os que você já chocou também aparecem embaixo da grade.',
            en: 'All 27 starters show at once, in a grid of 9 regions by Grass, Fire and Water, with no region tabs. Egg Pokémon live in the Eggs tab, and the ones you hatched also show under the grid.',
            es: 'Los 27 iniciales aparecen todos a la vez, en una cuadrícula de 9 regiones por Planta, Fuego y Agua, sin pestañas de región. Los Pokémon de los huevos están en la pestaña Huevos, y los que ya eclosionaste también aparecen debajo de la cuadrícula.',
          ko: '스타팅 포켓몬 27마리가 지방 탭 없이 9개 지방 × 풀·불꽃·물 격자로 한 번에 보여요. 알 포켓몬은 알 탭에 있고, 부화시킨 포켓몬은 격자 아래에도 표시돼요.' },
          {
            pt: 'O parceiro escolhido aparece com seu papel, os principais status e a linha evolutiva; golpes, especial e Megas ficam no botão de detalhes (no celular, uma folha que sobe de baixo). Bolsa, dificuldade e o botão Começar dividem uma barra só, e o Começar muda de cor com a dificuldade.',
            en: 'Your pick shows its role, main stats and evolution line; moves, special and Megas sit behind the details button (a sheet that slides up on phones). Bag, difficulty and the Start button share one bar, and Start changes color with the difficulty.',
            es: 'Tu elegido muestra su rol, sus stats principales y su línea evolutiva; los movimientos, el especial y las Megas están en el botón de detalles (en el celular, una hoja que sube desde abajo). Mochila, dificultad y el botón Empezar comparten una sola barra, y Empezar cambia de color con la dificultad.',
          ko: '고른 포켓몬의 역할, 주요 능력치, 진화 계열이 표시되고, 기술과 필살기, 메가진화는 상세 버튼 안에 있어요(휴대폰에서는 아래에서 올라오는 시트). 가방, 난이도, 시작 버튼이 한 줄에 모였고, 시작 버튼은 난이도에 따라 색이 바뀌어요.' },
          {
            pt: 'No celular, nada fica mais escondido embaixo dos botões: a lista rola acima da barra. Para abrir o Poké Mart, toque na carteira no topo.',
            en: 'On phones nothing hides under the buttons anymore: the list scrolls above the bar. To open the Poké Mart, tap the wallet at the top.',
            es: 'En el celular ya nada queda escondido debajo de los botones: la lista se desplaza arriba de la barra. Para abrir el Poké Mart, toca la cartera arriba.',
          ko: '휴대폰에서 더 이상 버튼 아래에 가려지는 것이 없어요. 목록은 하단 바 위에서 스크롤돼요. 프렌들리숍은 위쪽의 소지금을 터치해서 열어요.' },
        ],
      },
      {
        title: { pt: 'Um título novo: o lobby', en: 'A new title screen: the lobby', es: 'Un título nuevo: el lobby' , ko: '새 타이틀 화면: 로비' },
        notes: [
          {
            pt: 'O menu em lista virou um lobby: seu último parceiro fica no meio do campo e o botão JOGAR abre a escolha de Pokémon com ele já selecionado (tocar no parceiro faz o mesmo). Pokédex, Ovos, Loja e Ranking ficam ao lado do JOGAR no computador e numa barra de abas embaixo no celular, com um aviso quando um ovo está pronto para chocar.',
            en: 'The list menu became a lobby: your last partner stands in the middle of the field and the PLAY button opens the Pokémon select with it already picked (tapping the partner does the same). Pokédex, Eggs, Shop and Ranking sit beside PLAY on computers and in a tab bar at the bottom on phones, with a badge when an egg is ready to hatch.',
            es: 'El menú en lista se volvió un lobby: tu último compañero queda en medio del campo y el botón JUGAR abre la elección de Pokémon con él ya seleccionado (tocar al compañero hace lo mismo). Pokédex, Huevos, Tienda y Ranking quedan junto a JUGAR en la computadora y en una barra de pestañas abajo en el celular, con un aviso cuando un huevo está listo para eclosionar.',
          ko: '목록형 메뉴가 로비로 바뀌었어요. 마지막 파트너가 들판 한가운데에 서 있고, 플레이 버튼을 누르면 그 포켓몬이 선택된 채로 포켓몬 선택이 열려요(파트너를 터치해도 같아요). 도감, 알, 상점, 랭킹은 컴퓨터에서는 플레이 옆에, 휴대폰에서는 아래쪽 탭 바에 있고, 부화할 알이 있으면 배지가 붙어요.' },
          {
            pt: 'Os cards de Hoje mostram o dia de relance: o Surto do dia andando (normal e shiny), se você já jogou o Desafio do dia e com que tempo, e as missões de hoje com barra de progresso. O novo card dourado do Hall da Fama mostra quem apoia o jogo e quem entrou por último, e abre a tela de apoiadores.',
            en: "The Today cards show the day at a glance: the day's Outbreak walking (normal and shiny), whether you've played the Daily Challenge and your time, and today's missions with a progress bar. The new golden Hall of Fame card shows who supports the game and who joined last, and opens the supporters screen.",
            es: 'Las tarjetas de Hoy muestran el día de un vistazo: el Brote del día caminando (normal y shiny), si ya jugaste el Desafío del día y con qué tiempo, y las misiones de hoy con barra de progreso. La nueva tarjeta dorada del Salón de la Fama muestra quién apoya el juego y quién entró último, y abre la pantalla de apoyadores.',
          ko: '오늘 카드에서 하루를 한눈에 볼 수 있어요: 걸어 다니는 오늘의 대량발생 포켓몬(일반과 이로치), 오늘의 챌린지 참여 여부와 기록, 진행 막대가 달린 오늘의 미션. 새로 생긴 황금빛 명예의 전당 카드에는 게임을 후원하는 사람과 가장 최근에 들어온 사람이 표시되고, 누르면 후원자 화면이 열려요.' },
          {
            pt: 'No teclado e no controle, as setas andam por tudo do lobby e o Enter começa pelo JOGAR. Atalhos: X Pokédex, O Ovos, L Loja, R Ranking, M Missões, H Hall da Fama e C Cartão de Treinador. Como jogar agora é o ? no topo, ao lado dos Ajustes.',
            en: 'On keyboard and gamepad, the arrows move across the whole lobby and Enter starts on PLAY. Shortcuts: X Pokédex, O Eggs, L Shop, R Ranking, M Missions, H Hall of Fame and C Trainer Card. How to play is now the ? at the top, next to Settings.',
            es: 'En teclado y control, las flechas recorren todo el lobby y Enter empieza en JUGAR. Atajos: X Pokédex, O Huevos, L Tienda, R Ranking, M Misiones, H Salón de la Fama y C Tarjeta de Entrenador. Cómo jugar ahora es el ? de arriba, junto a Ajustes.',
          ko: '키보드와 게임패드에서는 방향키로 로비 전체를 이동하고, Enter는 플레이에서 시작해요. 단축키: X 도감, O 알, L 상점, R 랭킹, M 미션, H 명예의 전당, C 트레이너 카드. 플레이 방법은 이제 위쪽 설정 옆의 ? 버튼이에요.' },
        ],
      },
      {
        title: { pt: 'Seu cartão de treinador e Ajustes em abas', en: 'Your Trainer Card and tabbed Settings', es: 'Tu tarjeta de entrenador y Ajustes en pestañas' , ko: '트레이너 카드와 탭으로 나뉜 설정' },
        notes: [
          {
            pt: 'O título ganhou uma barra no topo: seu treinador à esquerda (com seu Pokémon, nome e título; o Poké Ball de convidado com "Entrar"), e sua carteira e a engrenagem dos Ajustes à direita. Toque no treinador para abrir o Cartão de Treinador, com partidas, vitórias, Pokédex, shinies, medalhas e fitas, e atalhos para editar o perfil, compartilhar o cartão, missões e conquistas.',
            en: 'The title got a bar on top: your trainer on the left (with your Pokémon, name and title; a guest gets a Poké Ball and "Sign in"), and your wallet and the Settings gear on the right. Tap the trainer to open your Trainer Card, with runs, wins, Pokédex, shinies, medals and ribbons, and shortcuts to edit your profile, share the card, and missions and achievements.',
            es: 'El título ganó una barra arriba: tu entrenador a la izquierda (con tu Pokémon, nombre y título; un invitado recibe una Poké Ball y "Entrar"), y tu cartera y el engranaje de Ajustes a la derecha. Toca al entrenador para abrir tu Tarjeta de Entrenador, con partidas, victorias, Pokédex, shinies, medallas y cintas, y atajos para editar el perfil, compartir la tarjeta, y misiones y logros.',
          ko: '타이틀 화면 위쪽에 바가 생겼어요. 왼쪽에는 트레이너(포켓몬, 이름, 칭호가 표시되고, 게스트는 몬스터볼과 "로그인"), 오른쪽에는 소지금과 설정 톱니바퀴가 있어요. 트레이너를 터치하면 트레이너 카드가 열려요. 판 수, 승리, 도감, 이로치, 메달, 리본과 함께 프로필 편집, 카드 공유, 미션과 업적으로 가는 바로가기가 있어요.' },
          {
            pt: 'Os Ajustes agora têm abas: Som, Jogo, Controles e Sobre. A escolha de idioma (PT, EN, ES) foi para a aba Jogo, e os links de Legal e créditos e do GitHub foram para Sobre.',
            en: 'Settings now has tabs: Sound, Game, Controls and About. The language picker (PT, EN, ES) moved to the Game tab, and the Legal and credits and GitHub links moved to About.',
            es: 'Los Ajustes ahora tienen pestañas: Sonido, Juego, Controles y Acerca de. La elección de idioma (PT, EN, ES) pasó a la pestaña Juego, y los enlaces de Legal y créditos y de GitHub pasaron a Acerca de.',
          ko: '이제 설정에 사운드, 게임, 조작, 정보 탭이 있어요. 언어 선택(PT, EN, ES)은 게임 탭으로, 법적 고지 및 크레딧과 GitHub 링크는 정보 탭으로 옮겼어요.' },
        ],
      },
      {
        title: { pt: 'Runs legítimas voltam ao ranking', en: 'Legit runs are back on the leaderboards', es: 'Las partidas legítimas vuelven al ranking' , ko: '정상적인 판이 다시 랭킹에 올라가요' },
        notes: [
          {
            pt: 'Uma parte das runs era tirada do ranking na verificação mesmo sem nada de errado: quando o jogo subia de nível ou o Pokémon desmaiava num quadro em que o aparelho atrasava, o replay ganhava alguns instantes a mais e a re-simulação não chegava ao mesmo resultado. Isso acontecia mais em celulares. O jogo não grava mais esses instantes, o servidor passou a aceitar os replays antigos e as runs recusadas por isso foram verificadas de novo.',
            en: 'Some runs were dropped from the leaderboards at verification with nothing wrong: when a level-up or a faint landed on a frame where the device lagged, the replay got a few extra moments and the re-simulation didn\'t end where the run did. It happened more on phones. The game no longer records those moments, the server now accepts the older replays, and the runs turned away by it were checked again.',
            es: 'Una parte de las partidas salía del ranking en la verificación sin nada malo: cuando subías de nivel o el Pokémon se debilitaba en un cuadro en que el dispositivo se atrasaba, el replay ganaba unos instantes de más y la re-simulación no llegaba al mismo resultado. Pasaba más en celulares. El juego ya no graba esos instantes, el servidor ahora acepta los replays antiguos y las partidas rechazadas por eso se verificaron de nuevo.',
          ko: '아무 문제가 없는데도 검증 과정에서 랭킹에서 빠지는 판이 있었어요. 기기가 버벅이는 프레임에 레벨업이나 기절이 겹치면 리플레이에 몇 순간이 더 기록되어, 재시뮬레이션 결과가 실제 판과 달라졌거든요. 특히 휴대폰에서 자주 일어났어요. 이제 게임은 그 순간을 기록하지 않고, 서버는 예전 리플레이도 받아들이며, 이 문제로 거절된 판은 다시 검증했어요.' },
        ],
      },
    ],
  },
  {
    date: '2026-10-16',
    title: { pt: 'Desafio do dia e espanhol', en: 'Daily Challenge and Spanish', es: 'Desafío del día y español' , ko: "오늘의 챌린지와 스페인어" },
    highlights: [
      { pt: 'Desafio do dia: a mesma partida para todo mundo, com fitas para os melhores.', en: 'Daily Challenge: the same run for everyone, with ribbons for the best.', es: 'Desafío del día: la misma partida para todos, con cintas para los mejores.' , ko: "모두에게 같은 판이 주어지고 우수 기록에 리본을 주는 오늘의 챌린지를 추가했어요." },
      { pt: 'O jogo agora fala espanhol.', en: 'The game now speaks Spanish.', es: '¡El juego ahora habla español!' , ko: "스페인어를 지원해요." },
      { pt: 'Mais 11 Megas, de Mega Pidgeot a Mega Salamence.', en: '11 more Megas, from Mega Pidgeot to Mega Salamence.', es: '11 Megas más, de Mega Pidgeot a Mega Salamence.' , ko: "메가피죤투부터 메가보만다까지 메가진화 11종을 추가했어요." },
      { pt: 'Troque as teclas e os botões do controle como quiser.', en: 'Remap your keys and gamepad buttons however you like.', es: 'Cambia las teclas y los botones del control como quieras.' , ko: "키보드 키와 게임패드 버튼을 원하는 대로 바꿀 수 있어요." },
      { pt: 'Doe por Pix ou cartão e ganhe recompensas cosméticas.', en: 'Donate by card or Pix and get cosmetic rewards.', es: 'Dona con tarjeta o Pix y recibe recompensas cosméticas.' , ko: "카드나 Pix로 후원하고 꾸미기 보상을 받을 수 있어요." },
    ],
    changes: [
      {
        title: { pt: 'Runs longas no modo sem fim entram no ranking', en: 'Long endless runs make the leaderboards', es: 'Las partidas largas del modo sin fin entran al ranking' , ko: '무한 모드의 긴 판도 랭킹에 올라가요' },
        notes: [
          {
            pt: 'Runs de mais de uma hora no modo sem fim eram recusadas pelo ranking: o replay passava do tamanho aceito e a quantidade de derrotados parecia alta demais. Agora o limite de derrotados cresce com o tempo de partida e o replay pode ser bem maior, então as runs mais longas também contam.',
            en: 'Endless runs longer than an hour were turned away by the leaderboards: the replay was over the accepted size and the number of faints looked too high. Now the faint limit grows with the run time and the replay can be much larger, so the longest runs count too.',
            es: 'Las partidas de más de una hora en el modo sin fin eran rechazadas por el ranking: el replay superaba el tamaño aceptado y la cantidad de derrotados parecía demasiado alta. Ahora el límite de derrotados crece con el tiempo de partida y el replay puede ser mucho más grande, así que las partidas más largas también cuentan.',
          ko: '무한 모드에서 1시간이 넘는 판은 랭킹에서 거절됐어요. 리플레이가 허용 크기를 넘고, 쓰러뜨린 수가 지나치게 많아 보였거든요. 이제 쓰러뜨린 수의 한도가 판 시간에 따라 늘어나고 리플레이도 훨씬 커질 수 있어서, 아주 긴 판도 인정돼요.' },
        ],
      },
      {
        title: { pt: 'Troque as teclas e os botões do controle', en: 'Remap your keys and gamepad buttons', es: 'Cambia las teclas y los botones del control' , ko: '키와 게임패드 버튼을 바꿔 보세요' },
        notes: [
          {
            pt: 'Em Ajustes → Controles → Teclado e controle, cada ação (andar nas quatro direções, especial, Mega, bote, pausar, confirmar e voltar) tem uma tecla e um botão do controle que você escolhe: aperte a nova tecla ou botão, e o Esc cancela. Se ela já estiver em uso, as duas ações trocam e o jogo avisa. Restaurar padrão volta tudo como era.',
            en: 'In Settings → Controls → Keyboard and gamepad, every action (moving in the four directions, special, Mega, lunge, pause, confirm and back) has a key and a gamepad button of your choice: press the new key or button, and Esc cancels. If it is already taken, the two actions swap and the game tells you. Restore defaults puts everything back.',
            es: 'En Ajustes → Controles → Teclado y control, cada acción (moverse en las cuatro direcciones, especial, Mega, embestida, pausa, confirmar y volver) tiene una tecla y un botón del control que tú eliges: presiona la nueva tecla o botón, y Esc cancela. Si ya está en uso, las dos acciones se intercambian y el juego te avisa. Restaurar valores lo deja todo como antes.',
          ko: '설정 → 조작 → 키보드 및 게임패드에서 모든 동작(네 방향 이동, 필살기, 메가진화, 돌진, 일시정지, 확인, 뒤로)에 원하는 키와 게임패드 버튼을 지정할 수 있어요. 새 키나 버튼을 누르면 되고, Esc를 누르면 취소돼요. 이미 쓰고 있는 키라면 두 동작이 서로 바뀌고 게임이 알려 줘요. 기본값 복원을 누르면 모두 원래대로 돌아가요.' },
          {
            pt: 'O controle agora também move o Pokémon na partida, pelo D-pad ou pelo analógico esquerdo.',
            en: 'The gamepad now moves your Pokémon in a run too, with the D-pad or the left stick.',
            es: 'El control ahora también mueve al Pokémon durante la partida, con el D-pad o el stick izquierdo.',
          ko: '이제 판에서도 게임패드의 방향 패드나 왼쪽 스틱으로 포켓몬을 움직일 수 있어요.' },
        ],
      },
      {
        title: { pt: 'Recompensas para quem apoia', en: 'Rewards for supporters', es: 'Recompensas para quien apoya' , ko: '후원자를 위한 보상' },
        notes: [
          {
            pt: 'Doar com uma conta agora traz um agradecimento no jogo, como Presente Misterioso: o título e a moldura Apoiador(a), um selo ♥ ao lado do seu @ no ranking e no perfil, um shiny à sua escolha (qualquer inicial ou família dos ovos, que vem junto), um companheiro que te segue nas partidas, seu nome no mural e nos agradecimentos da vitória e voto no próximo Pokémon dos ovos. Com R$ 50 ou US$ 10 somados, vira Ouro: fundo, papel de parede e selo dourados. Tudo cosmético, nada muda uma partida.',
            en: 'Donating with an account now brings a thank-you in the game, as a Mystery Gift: the Supporter title and card frame, a ♥ badge by your @ on the ranking and your profile, a shiny of your choice (any starter, or an egg family, which comes with it), a companion that follows you in runs, your name on the wall and in the victory thanks, and a vote on the next egg Pokémon. R$ 50 or US$ 10 in all makes it Gold: a golden background, wallpaper and badge. All cosmetic, nothing changes a run.',
            es: 'Donar con una cuenta ahora trae un agradecimiento en el juego, como Regalo Misterioso: el título y el marco Patrocinador(a), un sello ♥ junto a tu @ en el ranking y en tu perfil, un shiny a tu elección (cualquier inicial o familia de huevo, que viene con él), un compañero que te sigue en las partidas, tu nombre en el mural y en los agradecimientos de la victoria y voto en el próximo Pokémon de los huevos. Con R$ 50 o US$ 10 en total, pasa a Oro: fondo, fondo de la caja y sello dorados. Todo cosmético, nada cambia una partida.',
          ko: '이제 계정으로 기부하면 게임 안에서 이상한 소포로 감사 선물을 받아요: 후원자 칭호와 카드 프레임, 랭킹과 프로필의 @ 옆에 붙는 ♥ 배지, 원하는 이로치 하나(스타팅 포켓몬 중 아무나, 또는 알 계열이라면 그 계열도 함께), 판에서 따라다니는 동행 포켓몬, 후원자 게시판과 승리 감사 인사에 실리는 이름, 다음 알 포켓몬 투표권까지요. 누적 R$ 50 또는 US$ 10이면 골드가 되어 황금 배경, 배경화면, 배지를 받아요. 모두 꾸미기용이라 판에는 아무 영향이 없어요.' },
          {
            pt: 'Na página Apoie o projeto, informe seu @ para as recompensas irem direto para a sua conta (ou para a de um amigo). Sem @, você recebe um código para resgatar no jogo, no ♥ do título.',
            en: 'On the Support the project page, enter your @ so the rewards go straight to your account (or a friend\'s). Without one, you get a code to redeem in the game, under the ♥ on the title.',
            es: 'En la página Apoya el proyecto, escribe tu @ para que las recompensas vayan directo a tu cuenta (o a la de un amigo). Sin @, recibes un código para canjear en el juego, en el ♥ del título.',
          ko: '프로젝트 후원하기 페이지에서 @를 입력하면 보상이 바로 내 계정(또는 친구 계정)으로 가요. 입력하지 않으면 타이틀 화면의 ♥에서 입력할 수 있는 코드를 받아요.' },
        ],
      },
      {
        title: { pt: 'Doe por Pix', en: 'Donate from anywhere, Pix included', es: 'Dona desde cualquier país, también con Pix' , ko: 'Pix를 포함해 어디서든 기부할 수 있어요' },
        notes: [
          {
            pt: 'O Ko-fi não aceitava vários cartões, inclusive brasileiros. As doações agora têm uma página própria: do Brasil, por Pix ou cartão em reais (AbacatePay), com valores prontos ou o valor que você quiser; de outros países, com cartão, Apple Pay ou Google Pay em dólares (Stripe). A página sugere o jeito certo pelo fuso horário do aparelho, não pelo idioma, e você pode escolher o outro. Doar continua não dando nada dentro do jogo.',
            en: "Ko-fi turned down many cards, Brazilian ones included. Donations now have their own page: from outside Brazil, by card, Apple Pay or Google Pay in US dollars (Stripe); from Brazil, by Pix or card in reais (AbacatePay), with preset amounts or any amount you like. The page suggests the right way from your device's time zone, not its language, and you can always pick the other. Donating still gives nothing in the game.",
            es: 'Ko-fi rechazaba muchas tarjetas, incluso las brasileñas. Las donaciones ahora tienen su propia página: desde fuera de Brasil, con tarjeta, Apple Pay o Google Pay en dólares (Stripe); desde Brasil, con Pix o tarjeta en reales (AbacatePay), con montos listos o el que quieras. La página sugiere la forma correcta según la zona horaria del dispositivo, no el idioma, y siempre puedes elegir la otra. Donar sigue sin dar nada dentro del juego.',
          ko: 'Ko-fi에서는 브라질 카드를 비롯해 많은 카드가 거절됐어요. 이제 기부 전용 페이지가 생겼어요. 브라질 밖에서는 카드, Apple Pay, Google Pay로 미국 달러(Stripe)로, 브라질에서는 Pix나 카드로 헤알(AbacatePay)로 기부할 수 있고, 정해진 금액이나 원하는 금액을 고를 수 있어요. 페이지는 언어가 아니라 기기의 시간대를 보고 알맞은 방법을 추천하며, 언제든 다른 방법을 고를 수 있어요. 기부해도 여전히 게임 안에서 받는 건 없어요.' },
        ],
      },
      {
        title: { pt: 'O ímã não deixa mais nada orbitando', en: 'The magnet no longer leaves pickups orbiting', es: 'El imán ya no deja nada orbitando' , ko: '자석에 끌린 아이템이 더 이상 맴돌지 않아요' },
        notes: [
          {
            pt: 'Exp. Candy, moedas e itens puxados pelo ímã às vezes ficavam girando em volta do seu Pokémon sem nunca chegar. Agora eles vêm direto até você, mesmo correndo em círculos. Valeu pelo aviso!',
            en: 'Exp. Candy, coins and items pulled in by the magnet could get stuck circling your Pokémon without ever landing. Now they come straight to you, even while you run in circles. Thanks for the report!',
            es: 'Los Exp. Candy, las monedas y los objetos atraídos por el imán a veces se quedaban girando alrededor de tu Pokémon sin llegar nunca. Ahora vienen directo a ti, incluso si corres en círculos. ¡Gracias por el aviso!',
          ko: '자석에 끌려온 경험사탕, 코인, 도구가 포켓몬 주위를 맴돌기만 하고 들어오지 않을 때가 있었어요. 이제 빙글빙글 뛰어다녀도 곧장 날아와요. 제보해 주셔서 감사해요!' },
        ],
      },
      {
        title: { pt: 'Joystick fixo no celular', en: 'Fixed joystick on phones', es: 'Joystick fijo en el celular' , ko: '휴대폰 고정 조이스틱' },
        notes: [
          {
            pt: 'Os Ajustes ganharam uma seção Controles. Nela, o joystick de toque pode continuar seguindo o dedo (o padrão) ou ficar fixo no canto inferior esquerdo, sempre no mesmo lugar e com a base à mostra.',
            en: 'Settings have a new Controls section. There, the touch joystick can keep following your finger (the default) or stay fixed in the bottom-left corner, always in the same spot with its base showing.',
            es: 'Los Ajustes tienen una nueva sección Controles. Ahí, el joystick táctil puede seguir tu dedo (lo predeterminado) o quedarse fijo en la esquina inferior izquierda, siempre en el mismo lugar y con la base a la vista.',
          ko: '설정에 조작 항목이 새로 생겼어요. 여기서 터치 조이스틱이 손가락을 따라가게 하거나(기본값), 왼쪽 아래 구석에 받침이 보이는 상태로 항상 같은 자리에 고정할 수 있어요.' },
        ],
      },
      {
        title: { pt: 'Apoie o projeto no Ko-fi', en: 'Support the project on Ko-fi', es: 'Apoya el proyecto en Ko-fi' , ko: 'Ko-fi에서 프로젝트를 후원하세요' },
        notes: [
          {
            pt: 'O jogo continua gratuito e sem nada à venda. Quem quiser ajudar a manter os servidores agora pode doar no Ko-fi (cartão, PayPal, Apple Pay e Google Pay, de qualquer país), pelo botão no canto superior direito do título e da escolha de Pokémon, na tela de vitória e no rodapé do site. Doar não dá nada dentro do jogo.',
            en: 'The game stays free, with nothing for sale. If you want to help keep the servers running, you can now donate on Ko-fi (card, PayPal, Apple Pay and Google Pay, from any country), from the button in the top-right corner of the title and Pokémon select screens, on the victory screen and in the site footer. Donating gives nothing in the game.',
            es: 'El juego sigue siendo gratis y sin nada a la venta. Si quieres ayudar a mantener los servidores, ahora puedes donar en Ko-fi (tarjeta, PayPal, Apple Pay y Google Pay, desde cualquier país), con el botón en la esquina superior derecha del título y de la elección de Pokémon, en la pantalla de victoria y al pie del sitio. Donar no da nada dentro del juego.',
          ko: '게임은 계속 무료이고 판매하는 것도 없어요. 서버 유지를 돕고 싶다면 이제 Ko-fi에서 기부할 수 있어요(카드, PayPal, Apple Pay, Google Pay, 모든 국가 가능). 타이틀 화면과 포켓몬 선택 화면 오른쪽 위의 버튼, 승리 화면, 사이트 하단에서 갈 수 있어요. 기부해도 게임 안에서 받는 건 없어요.' },
        ],
      },
      {
        title: { pt: 'Sem perder a partida por engano', en: 'No more losing a run by accident', es: 'Ya no pierdes la partida por error' , ko: '실수로 판을 날리지 않아요' },
        notes: [
          {
            pt: 'Fechar ou recarregar a aba no meio de uma partida (pausada ou escolhendo um golpe também) agora pede confirmação antes. Nos menus e nos resultados, nada muda. No iPhone e no iPad, o Safari não mostra esse aviso.',
            en: 'Closing or reloading the tab in the middle of a run (paused or picking a move too) now asks first. Menus and the results screen are unchanged. On iPhone and iPad, Safari does not show this prompt.',
            es: 'Cerrar o recargar la pestaña en medio de una partida (en pausa o eligiendo un movimiento también) ahora pide confirmación antes. En los menús y en los resultados, nada cambia. En iPhone y iPad, Safari no muestra este aviso.',
          ko: '판 도중(일시정지 중이거나 기술을 고르는 중에도) 탭을 닫거나 새로고침하면 이제 먼저 확인을 받아요. 메뉴와 결과 화면은 그대로예요. iPhone과 iPad의 Safari에서는 이 확인 창이 뜨지 않아요.' },
        ],
      },
      {
        title: { pt: 'O jogo agora fala espanhol', en: 'The game now speaks Spanish', es: '¡El juego ahora habla español!' , ko: '이제 게임이 스페인어를 지원해요' },
        notes: [
          {
            pt: 'Espanhol (América Latina) é o terceiro idioma: o jogo inteiro, o Pokédex, o guia e estas novidades. Quem usa o navegador em espanhol já começa nele, e dá para trocar no título (PT | EN | ES, ou a tecla I) e nos Ajustes.',
            en: 'Spanish (Latin America) is the third language: the whole game, the Pokédex, the guide and this changelog. Browsers set to Spanish start in it, and you can switch on the title screen (PT | EN | ES, or the I key) and in Settings.',
            es: 'El español (Latinoamérica) es el tercer idioma: todo el juego, la Pokédex, la guía y estas novedades. Si tu navegador está en español, el juego ya empieza así, y puedes cambiarlo en el título (PT | EN | ES, o la tecla I) y en Ajustes.',
          ko: '스페인어(라틴아메리카)가 세 번째 언어로 추가됐어요. 게임 전체, 도감, 가이드, 그리고 이 업데이트 내역까지요. 브라우저가 스페인어로 설정되어 있으면 스페인어로 시작하고, 타이틀 화면(PT | EN | ES 또는 I 키)과 설정에서 바꿀 수 있어요.' },
          {
            pt: 'O jogo em espanhol tem o seu próprio endereço, pokemonsurvivors.com/es/, para compartilhar com os amigos.',
            en: 'The Spanish game has its own address, pokemonsurvivors.com/es/, to share with friends.',
            es: 'El juego en español tiene su propia dirección, pokemonsurvivors.com/es/, para compartir con tus amigos.',
          ko: "스페인어판은 pokemonsurvivors.com/es/ 주소로 친구에게 공유할 수 있어요." },
        ],
      },
      {
        title: { pt: 'Mais 11 Megas para as famílias da Gen 1 à 3', en: '11 more Megas for the Gen 1–3 families', es: '11 Megas más para las familias de la Gen 1 a la 3' , ko: '1~3세대 계열에 메가진화 11종 추가' },
        notes: [
          {
            pt: 'Toda família de ovo que tem Mega Evolução agora Mega Evolui: chegam Mega Pidgeot, Gyarados, Ampharos, Scizor, Houndoom, Aggron, Manectric, Altaria, Banette, Glalie e Salamence, cada uma com status, especial, habilidade e grito próprios. São 37 Megas em 33 linhagens.',
            en: 'Every egg family with a Mega Evolution can now Mega Evolve: Mega Pidgeot, Gyarados, Ampharos, Scizor, Houndoom, Aggron, Manectric, Altaria, Banette, Glalie and Salamence join, each with its own stats, special, ability and cry. That makes 37 Megas across 33 lines.',
            es: 'Toda familia de huevo que tiene Megaevolución ahora megaevoluciona: llegan Mega Pidgeot, Gyarados, Ampharos, Scizor, Houndoom, Aggron, Manectric, Altaria, Banette, Glalie y Salamence, cada una con sus propias estadísticas, especial, habilidad y grito. Son 37 Megas en 33 líneas evolutivas.',
          ko: '메가진화가 있는 알 계열은 이제 모두 메가진화할 수 있어요. 메가피죤투, 메가갸라도스, 메가전룡, 메가핫삼, 메가헬가, 메가보스로라, 메가썬더볼트, 메가파비코리, 메가다크펫, 메가얼음귀신, 메가보만다가 추가됐고, 각자 고유한 능력치, 필살기, 특성, 울음소리를 가지고 있어요. 이제 33개 계열에 메가진화가 37종이에요.' },
          {
            pt: 'Destaques: Mega Scizor (Technician) ganha uma investida em cadeia de aço com recarga curta, Mega Manectric (Intimidate) desacelera quem chega perto e corre deixando faíscas, e Mega Altaria, Glalie e Salamence reforçam os golpes Normal junto com os de Fada, Gelo e Voador. Houndoom, Manectric, Altaria, Banette e Glalie já aparecem com o sprite da forma Mega.',
            en: 'Highlights: Mega Scizor (Technician) gets a steel chain dash on a short cooldown, Mega Manectric (Intimidate) slows whoever comes close and runs leaving sparks behind, and Mega Altaria, Glalie and Salamence power up Normal moves along with Fairy, Ice and Flying ones. Houndoom, Manectric, Altaria, Banette and Glalie already show their Mega sprite.',
            es: 'Destacados: Mega Scizor (Technician) gana una embestida en cadena de acero con poco tiempo de recarga, Mega Manectric (Intimidate) ralentiza a quien se acerca y corre dejando chispas, y Mega Altaria, Glalie y Salamence potencian los movimientos de tipo Normal junto con los de Hada, Hielo y Volador. Houndoom, Manectric, Altaria, Banette y Glalie ya aparecen con el sprite de su forma Mega.',
          ko: '주요 변화: 메가핫삼(테크니션)은 쿨타임이 짧은 강철 연쇄 대시를 얻고, 메가썬더볼트(위협)는 가까이 오는 적을 느리게 하며 스파크를 남기고 달려요. 메가파비코리, 메가얼음귀신, 메가보만다는 각각 페어리, 얼음, 비행 기술과 함께 노말 기술도 강화해요. 헬가, 썬더볼트, 파비코리, 다크펫, 얼음귀신은 이미 메가진화 스프라이트로 보여요.' },
        ],
      },
      {
        title: { pt: 'Competir: Desafio do dia e fitas', en: 'Compete: the Daily Challenge and ribbons', es: 'Competir: Desafío del día y cintas' , ko: '경쟁: 오늘의 챌린지와 리본' },
        notes: [
          {
            pt: 'Desafio do dia: uma partida por dia igual para todo mundo, com a mesma semente, o mesmo Pokémon (pode ser até uma família de ovo que você ainda não chocou) e a mesma dificuldade, sem melhorias da Poké Mart, Isca, Incenso ou Amuleto Brilhante. O surto do dia continua valendo. Fica no menu do título, com a contagem para o próximo.',
            en: "Daily Challenge: one run a day that is the same for everyone, with the same seed, the same Pokémon (even an egg family you haven't hatched yet) and the same difficulty, with no Poké Mart upgrades, Lure, Incense or Shiny Charm. Today's outbreak is still on. It's on the title menu, with a countdown to the next one.",
            es: 'Desafío del día: una partida al día igual para todo el mundo, con la misma semilla, el mismo Pokémon (puede ser hasta una familia de huevo que todavía no eclosionaste) y la misma dificultad, sin mejoras de la Poké Mart, Cebo, Incienso ni Amuleto Iris. El brote del día sigue activo. Está en el menú del título, con la cuenta regresiva para el próximo.',
          ko: '오늘의 챌린지: 하루 한 번, 모두에게 똑같은 판이에요. 같은 시드, 같은 포켓몬(아직 부화시키지 않은 알 계열일 수도 있어요), 같은 난이도로 진행되고, 프렌들리숍 강화, 벌레유인코롱, 향로, 빛나는부적은 쓸 수 없어요. 오늘의 대량발생은 그대로 적용돼요. 타이틀 메뉴에 있고, 다음 챌린지까지 남은 시간도 보여요.' },
          {
            pt: 'Só a sua primeira partida terminada do dia é a tentativa oficial e entra no ranking do desafio, que ganhou uma aba no Ranking (hoje e ontem). As outras são treino. O fim da partida mostra a sua posição, e o cartão para compartilhar também.',
            en: 'Only your first finished run of the day is the official attempt and goes on the challenge ranking, which has its own tab in the Ranking (today and yesterday). The rest are practice. The end of the run shows your place, and so does the card you share.',
            es: 'Solo tu primera partida terminada del día es el intento oficial y entra en el ranking del desafío, que ahora tiene su propia pestaña en el Ranking (hoy y ayer). Las demás son de práctica. El final de la partida muestra tu posición, y la tarjeta para compartir también.',
          ko: '그날 처음으로 끝까지 마친 판만 공식 기록이 되어 챌린지 랭킹에 올라가요. 챌린지 랭킹은 랭킹 화면에 전용 탭(오늘과 어제)이 생겼어요. 나머지 판은 연습이에요. 판이 끝나면 내 순위가 표시되고, 공유하는 카드에도 나와요.' },
          {
            pt: 'Fitas: depois que o dia fecha, todo mundo no ranking do desafio ganha uma fita como Presente Misterioso, de ouro para os 10% melhores, de prata para a metade de cima e de bronze para quem participou. Elas aparecem no seu perfil e no Cartão de Treinador.',
            en: 'Ribbons: once the day closes, everyone on the challenge ranking gets a ribbon as a Mystery Gift, gold for the top 10%, silver for the top half and bronze for taking part. They show on your profile and Trainer Card.',
            es: 'Cintas: cuando cierra el día, todos los del ranking del desafío reciben una cinta como Regalo Misterioso, de oro para el 10% mejor, de plata para la mitad de arriba y de bronce para quien participó. Aparecen en tu perfil y en la Tarjeta de Entrenador.',
          ko: '리본: 하루가 끝나면 챌린지 랭킹에 오른 모두가 이상한 소포로 리본을 받아요. 상위 10%는 금 리본, 상위 절반은 은 리본, 참가자는 동 리본이에요. 리본은 프로필과 트레이너 카드에 표시돼요.' },
        ],
      },
    ],
  },
  {
    date: '2026-10-15',
    title: { pt: 'Megas e lendários', en: 'Megas and legendaries', es: 'Megas y legendarios' , ko: "메가진화와 전설의 포켓몬" },
    highlights: [
      { pt: 'Mega Evolução: 26 Megas, ganhas vencendo os lendários das fendas.', en: 'Mega Evolution: 26 Megas, earned by beating the rift legendaries.', es: 'Megaevolución: 26 Megas, que se ganan venciendo a los legendarios de las grietas.' , ko: "균열의 전설의 포켓몬을 쓰러뜨려 얻는 메가진화 26종을 추가했어요." },
      { pt: 'Feras de Johto e Regis de Hoenn como chefes, e uma arena para cada lendário.', en: "Johto's beasts and Hoenn's Regis as bosses, and an arena for each legendary.", es: 'Las bestias de Johto y los Regis de Hoenn como jefes, y una arena para cada legendario.' , ko: "성도의 전설의 개와 호연의 레지 보스, 전설별 전용 아레나를 추가했어요." },
      { pt: '26 famílias novas nos ovos, e Kanto, Johto e Hoenn completos na horda.', en: '26 new egg families, and Kanto, Johto and Hoenn complete in the horde.', es: '26 familias nuevas en los huevos, y Kanto, Johto y Hoenn completos en la horda.' , ko: "알에서 태어나는 계열 26종을 추가하고 관동·성도·호연의 모든 일반 포켓몬을 야생 무리에 포함했어요." },
      { pt: 'O mapa ganhou relevo: pedras, bosques, montanhas, torres e lagos.', en: 'The map got terrain: rocks, woods, mountains, towers and lakes.', es: 'El mapa ganó relieve: rocas, bosques, montañas, torres y lagos.' , ko: "맵에 바위·숲·산·탑·호수 지형을 추가했어요." },
      { pt: 'Surto do dia, Poké Mart nova e um cartão para compartilhar a sua partida.', en: "Today's outbreak, a new Poké Mart and a card to share your run.", es: 'Brote del día, una Poké Mart nueva y una tarjeta para compartir tu partida.' , ko: "오늘의 대량발생, 새 프렌들리숍, 판 기록 공유 카드를 추가했어요." },
    ],
    changes: [
      {
        title: {
          pt: 'Traga amigos: convites, Presente Misterioso e Munchlax',
          en: 'Bring friends: invites, Mystery Gifts and Munchlax',
          es: 'Trae amigos: invitaciones, Regalo Misterioso y Munchlax',
        ko: '친구를 데려오세요: 초대, 이상한 소포, 먹고자' },
        notes: [
          {
            pt: 'Convide amigos: todo link que você compartilha leva o seu nome. Quem chega por ele vê "Fulano te convidou!" na tela de título, e ao criar a conta ganha um Ovo da Amizade. Vocês dois passam a se seguir.',
            en: 'Invite friends: every link you share carries your name. Whoever lands through it sees "So-and-so invited you!" on the title screen, and gets a Friendship Egg on signing up. You two follow each other.',
            es: 'Invita a tus amigos: cada enlace que compartes lleva tu nombre. Quien llega por él ve "¡Fulano te invitó!" en la pantalla de título y, al crear su cuenta, recibe un Huevo de la Amistad. Ustedes dos pasan a seguirse.',
          ko: '친구 초대: 내가 공유하는 모든 링크에는 내 이름이 담겨 있어요. 그 링크로 들어온 사람은 타이틀 화면에서 "○○님이 초대했어요!"를 보고, 가입하면 우정의 알을 받아요. 두 사람은 서로 팔로우하게 돼요.' },
          {
            pt: 'Quando o amigo joga 3 partidas verificadas no ranking, o convite conta para você e chega um Presente Misterioso: com 1 amigo, um Ovo da Amizade; com 3, o título Embaixador(a) e uma moldura exclusiva para o cartão; com 10, um Munchlax shiny. O seu perfil mostra quantos amigos você trouxe.',
            en: 'Once your friend plays 3 verified ranked runs, the invite counts for you and a Mystery Gift arrives: at 1 friend, a Friendship Egg; at 3, the Ambassador title and an exclusive card frame; at 10, a shiny Munchlax. Your profile shows how many friends you brought.',
            es: 'Cuando tu amigo juega 3 partidas verificadas en el ranking, la invitación cuenta para ti y llega un Regalo Misterioso: con 1 amigo, un Huevo de la Amistad; con 3, el título Embajador(a) y un marco exclusivo para la tarjeta; con 10, un Munchlax shiny. Tu perfil muestra cuántos amigos trajiste.',
          ko: '친구가 랭킹에서 검증된 판을 3번 플레이하면 초대가 인정되고 이상한 소포가 도착해요. 친구 1명이면 우정의 알, 3명이면 홍보대사 칭호와 전용 카드 프레임, 10명이면 이로치 먹고자예요. 프로필에 초대한 친구 수가 표시돼요.' },
          {
            pt: 'Família nova: Munchlax, que evolui em Snorlax no Nv 20. Um tanque guloso, com muita vida, defesa e regeneração, que abre caminho com Earthquake. Só sai do Ovo da Amizade.',
            en: 'New family: Munchlax, which evolves into Snorlax at Lv 20. A hungry tank with lots of HP, defense and regen that clears the way with Earthquake. It only hatches from the Friendship Egg.',
            es: 'Familia nueva: Munchlax, que evoluciona a Snorlax en el Nv. 20. Un tanque glotón, con mucha vida, defensa y regeneración, que abre camino con Earthquake. Solo sale del Huevo de la Amistad.',
          ko: '새 계열: 먹고자는 Lv 20에 잠만보로 진화해요. HP, 방어, 재생이 높은 먹보 탱커로, 지진으로 길을 뚫어요. 우정의 알에서만 부화해요.' },
        ],
      },
      {
        title: { pt: 'Hoje tem: Surto do dia e Poké Mart nova', en: "Today's outbreak and a new Poké Mart", es: 'Brote del día y una Poké Mart nueva' , ko: '오늘의 대량발생과 새로워진 프렌들리숍' },
        notes: [
          {
            pt: 'Surto do dia: todo dia (no horário de Brasília) uma espécie selvagem toma conta de todas as partidas, a mesma para todo mundo. Ela é o Pokémon mais comum da partida do começo ao fim, e por isso o shiny dela aparece umas duas vezes por partida. A tela de título mostra quem é o surto de hoje, e uma missão diária nova pede para derrotar os Pokémon do surto.',
            en: "Today's outbreak: every day (Brasília time) one wild species takes over every run, the same for everyone. It's the most common Pokémon of the run from start to finish, so its shiny shows up about twice a run. The title screen shows today's outbreak, and a new daily mission asks you to defeat it.",
            es: 'Brote del día: cada día (en hora de Brasilia) una especie salvaje se adueña de todas las partidas, la misma para todo el mundo. Es el Pokémon más común de la partida de principio a fin, y por eso su shiny aparece unas dos veces por partida. La pantalla de título muestra cuál es el brote de hoy, y una misión diaria nueva pide derrotar a los Pokémon del brote.',
          ko: '오늘의 대량발생: 매일(브라질리아 시간 기준) 야생 포켓몬 한 종이 모든 판을 점령해요. 모두에게 같은 종이에요. 판의 처음부터 끝까지 가장 흔한 포켓몬이라, 그 이로치도 판마다 두 번쯤 나타나요. 타이틀 화면에 오늘의 대량발생 포켓몬이 표시되고, 그 포켓몬을 쓰러뜨리는 새 일일 미션도 생겼어요.' },
          {
            pt: 'A Poké Mart ganhou três prateleiras. Melhorias tem o novo Amuleto Brilhante (Shiny Charm): três níveis que levam a chance de shiny selvagem de 1/450 a 1/225. O Balcão do dia muda à meia-noite, igual para todos, com estoque limitado: Isca (shinies 2× mais comuns na próxima partida), Incenso (chance de ovo 2× maior), um ovo à venda e um item em promoção. Estilo vende molduras do cartão (Poké, Great, Ultra e Master Ball), fundos dos cinco lugares do jogo e papéis de parede para a Caixa do PC.',
            en: "The Poké Mart has three shelves now. Upgrades has the new Shiny Charm: three levels that take the wild shiny odds from 1/450 to 1/225. Today's counter turns over at midnight, the same for everyone, with a daily stock: Lure (shinies twice as common next run), Incense (eggs twice as likely), an egg for sale and one item on sale. Style sells card frames (Poké, Great, Ultra and Master Ball), backgrounds from the game's five places and PC Box wallpapers.",
            es: 'La Poké Mart ahora tiene tres estantes. Mejoras tiene el nuevo Amuleto Iris (Shiny Charm): tres niveles que llevan la probabilidad de shiny salvaje de 1/450 a 1/225. El Mostrador del día cambia a medianoche, igual para todos, con existencias limitadas: Cebo (shinies 2× más comunes en la próxima partida), Incienso (probabilidad de huevo 2× mayor), un huevo a la venta y un objeto en oferta. Estilo vende marcos para la tarjeta (Poké, Great, Ultra y Master Ball), fondos de los cinco lugares del juego y fondos de pantalla para la Caja del PC.',
          ko: '프렌들리숍에 진열대가 세 개 생겼어요. 강화에는 새로운 빛나는부적이 있어요. 3단계에 걸쳐 야생 이로치 확률을 1/450에서 1/225까지 올려 줘요. 오늘의 판매대는 자정에 바뀌고 모두에게 같으며, 하루 재고가 정해져 있어요: 벌레유인코롱(다음 판에서 이로치 출현 2배), 향로(알 확률 2배), 판매용 알 하나, 할인 도구 하나. 스타일에서는 카드 프레임(몬스터볼, 슈퍼볼, 하이퍼볼, 마스터볼), 게임 속 다섯 장소의 배경, PC 박스 배경화면을 팔아요.' },
          {
            pt: 'Isca e Incenso vão para a Bolsa. Na escolha do Pokémon, ligue o que quiser usar (teclas C e V) e ele é gasto quando a partida começa. Algumas missões agora pagam uma Isca ou um Incenso junto com os ₽.',
            en: 'Lures and Incenses go into the Bag. On the select screen, turn on what you want to use (C and V keys) and it gets used up as the run starts. Some missions now pay a Lure or an Incense on top of the ₽.',
            es: 'El Cebo y el Incienso van a la Mochila. En la selección de Pokémon, activa lo que quieras usar (teclas C y V) y se gasta cuando empieza la partida. Algunas misiones ahora pagan un Cebo o un Incienso junto con los ₽.',
          ko: '벌레유인코롱과 향로는 가방에 들어가요. 선택 화면에서 쓰고 싶은 것을 켜면(C, V 키) 판이 시작될 때 소모돼요. 이제 일부 미션은 ₽ 외에 벌레유인코롱이나 향로도 줘요.' },
          {
            pt: 'No celular, os botões redondos da partida (especial, Mega e bote) não ficam mais por cima dos botões da tela de resultados e dos menus.',
            en: "On phones, the run's round buttons (special, Mega and lunge) no longer sit on top of the results screen's and the menus' buttons.",
            es: 'En el celular, los botones redondos de la partida (especial, Mega y embestida) ya no quedan encima de los botones de la pantalla de resultados ni de los menús.',
          ko: '휴대폰에서 판의 동그란 버튼(필살기, 메가진화, 돌진)이 더 이상 결과 화면과 메뉴의 버튼 위에 겹치지 않아요.' },
        ],
      },
      {
        title: { pt: 'Mostre sua coleção', en: 'Show off your collection', es: 'Muestra tu colección' , ko: '컬렉션을 자랑하세요' },
        notes: [
          {
            pt: 'Nova tela de resultados com o botão Compartilhar: o jogo desenha um cartão da run em pixel art, com o seu Pokémon, o tempo, o nível, os shinies que você pegou e os lendários que venceu. No celular ele abre o compartilhar do sistema; no computador, copia a imagem.',
            en: 'The results screen has a new Share button: the game draws a pixel art card of your run, with your Pokémon, time, level, the shinies you caught and the legendaries you beat. On phones it opens the share sheet; on computers it copies the image.',
            es: 'Nueva pantalla de resultados con el botón Compartir: el juego dibuja una tarjeta de la partida en pixel art, con tu Pokémon, el tiempo, el nivel, los shinies que atrapaste y los legendarios que venciste. En el celular abre el menú de compartir del sistema; en la computadora, copia la imagen.',
          ko: '결과 화면에 공유 버튼이 생겼어요. 게임이 포켓몬, 시간, 레벨, 잡은 이로치, 쓰러뜨린 전설의 포켓몬이 담긴 판 카드를 픽셀 아트로 그려 줘요. 휴대폰에서는 시스템 공유 창이 열리고, 컴퓨터에서는 이미지가 복사돼요.' },
          {
            pt: 'Caixa do PC: todo shiny que você pegou, em caixas de 30 como no PC dos jogos, com cada um se mexendo. Abra pela Pokédex. De lá (ou do seu perfil) sai o Cartão de Treinador, com suas medalhas, sua Pokédex, seu recorde e seus melhores shinies.',
            en: 'PC Box: every shiny you caught, in boxes of 30 like the PC in the games, each one moving. Open it from the Pokédex. From there (or your profile) comes your Trainer Card, with your medals, Pokédex, best time and best shinies.',
            es: 'Caja del PC: todos los shinies que atrapaste, en cajas de 30 como en el PC de los juegos, cada uno moviéndose. Ábrela desde la Pokédex. Desde ahí (o desde tu perfil) sale la Tarjeta de Entrenador, con tus medallas, tu Pokédex, tu récord y tus mejores shinies.',
          ko: 'PC 박스: 잡은 이로치가 모두 본가 게임의 PC처럼 30마리씩 박스에 담겨 저마다 움직여요. 도감에서 열 수 있어요. 거기서(또는 프로필에서) 메달, 도감, 최고 기록, 대표 이로치가 담긴 트레이너 카드를 볼 수 있어요.' },
          {
            pt: 'Tirou o seu inicial shiny (a chance de 1 em 64)? Agora ele fica liberado para sempre: na seleção, escolha Normal ou Shiny (tecla Z).',
            en: 'Rolled your starter shiny (the 1 in 64 chance)? It now stays unlocked for good: on the select screen, pick Normal or Shiny (Z key).',
            es: '¿Te salió tu inicial shiny (la probabilidad de 1 en 64)? Ahora queda desbloqueado para siempre: en la selección, elige Normal o Shiny (tecla Z).',
          ko: '스타팅 포켓몬이 이로치로 나왔나요(1/64 확률)? 이제 영구히 해금돼요. 선택 화면에서 일반 또는 이로치를 고르세요(Z 키).' },
        ],
      },
      {
        title: {
          pt: '26 famílias de Kanto, Johto e Hoenn nos ovos',
          en: '26 Kanto, Johto and Hoenn families in eggs',
          es: '26 familias de Kanto, Johto y Hoenn en los huevos',
        ko: '알에서 나오는 관동, 성도, 호연의 26개 계열' },
        notes: [
          {
            pt: 'Os ovos agora podem chocar 26 famílias novas da Gen 1 à 3, 51 no total (78 Pokémon jogáveis). Comuns: Pidgey, Zubat, Poliwag, Geodude, Mareep, Azurill, Shroomish, Swinub e Snorunt. Raros: Growlithe, Vulpix, Cubone, Scyther, Magikarp, Horsea, Kabuto, Houndour, Teddiursa, Aron, Trapinch, Swablu, Electrike e Shuppet. Ultra raros: Bagon, Slakoth e Feebas.',
            en: 'Eggs can now hatch 26 new families from Gen 1 to 3, 51 in all (78 playable Pokémon). Common: Pidgey, Zubat, Poliwag, Geodude, Mareep, Azurill, Shroomish, Swinub and Snorunt. Rare: Growlithe, Vulpix, Cubone, Scyther, Magikarp, Horsea, Kabuto, Houndour, Teddiursa, Aron, Trapinch, Swablu, Electrike and Shuppet. Ultra rare: Bagon, Slakoth and Feebas.',
            es: 'De los huevos ahora pueden salir 26 familias nuevas de la Gen 1 a la 3, 51 en total (78 Pokémon jugables). Comunes: Pidgey, Zubat, Poliwag, Geodude, Mareep, Azurill, Shroomish, Swinub y Snorunt. Raros: Growlithe, Vulpix, Cubone, Scyther, Magikarp, Horsea, Kabuto, Houndour, Teddiursa, Aron, Trapinch, Swablu, Electrike y Shuppet. Ultra raros: Bagon, Slakoth y Feebas.',
          ko: '이제 알에서 1~3세대의 새 계열 26개가 부화해요. 모두 51개 계열(플레이할 수 있는 포켓몬 78마리)이에요. 일반: 구구, 주뱃, 발챙이, 꼬마돌, 메리프, 루리리, 버섯꼬, 꾸꾸리, 눈꼬마. 레어: 가디, 식스테일, 탕구리, 스라크, 잉어킹, 쏘드라, 투구, 델빌, 깜지곰, 가보리, 톱치, 파비코, 썬더라이, 어둠대신. 울트라 레어: 아공이, 게을로, 빈티나.' },
          {
            pt: 'Cada uma tem seus status, golpe inicial e golpes. Magikarp e Feebas começam fraquíssimos e viram Gyarados e Milotic; Slakoth é lento para agir, mas bate muito forte. Swinub vai até Mamoswine (o único da Gen 4), para a linha ficar completa.',
            en: 'Each has its own stats, starting move and moves. Magikarp and Feebas start out very weak and become Gyarados and Milotic; Slakoth is slow to act but hits very hard. Swinub goes all the way to Mamoswine (the only Gen 4 member), so the line is complete.',
            es: 'Cada una tiene sus estadísticas, movimiento inicial y movimientos. Magikarp y Feebas empiezan debilísimos y se convierten en Gyarados y Milotic; Slakoth es lento para actuar, pero pega muy fuerte. Swinub llega hasta Mamoswine (el único de la Gen 4), para que la línea quede completa.',
          ko: '계열마다 고유한 능력치, 시작 기술, 기술이 있어요. 잉어킹과 빈티나는 아주 약하게 시작하지만 갸라도스와 밀로틱이 되고, 게을로는 행동이 느리지만 아주 세게 때려요. 꾸꾸리는 계열이 완성되도록 맘모꾸리(유일한 4세대)까지 진화해요.' },
          {
            pt: 'A caixa de ovos na escolha do Pokémon agora rola por dentro e mostra mais colunas, para caber todo mundo também no celular.',
            en: 'The egg box on the Pokémon select now scrolls on its own and shows more columns, so everyone fits on phones too.',
            es: 'La caja de huevos de la selección de Pokémon ahora se desplaza por dentro y muestra más columnas, para que quepan todos también en el celular.',
          ko: '포켓몬 선택의 알 상자가 이제 따로 스크롤되고 열도 더 많이 보여서, 휴대폰에서도 모두 들어가요.' },
        ],
      },
      {
        title: { pt: 'Golpes de Gelo, Pedra, Inseto e Dragão', en: 'Ice, Rock, Bug and Dragon moves', es: 'Movimientos de Hielo, Roca, Bicho y Dragón' , ko: '얼음, 바위, 벌레, 드래곤 기술' },
        notes: [
          {
            pt: 'Quatro golpes novos para os tipos que não tinham um: Ice Shard (estilhaços que se cravam no chão e desaceleram quem pisa), Rock Tomb (pedregulhos que caem nos inimigos mais próximos), Pin Missile (agulhas que fazem a curva até o alvo) e Dragon Breath (um cone de fogo dracônico).',
            en: 'Four new moves for the types that had none: Ice Shard (shards that stick in the ground and slow whoever steps on them), Rock Tomb (boulders that drop on the nearest foes), Pin Missile (needles that curve into their target) and Dragon Breath (a cone of dragon fire).',
            es: 'Cuatro movimientos nuevos para los tipos que no tenían uno: Ice Shard (esquirlas que se clavan en el suelo y ralentizan a quien las pisa), Rock Tomb (rocas que caen sobre los enemigos más cercanos), Pin Missile (agujas que hacen una curva hasta el objetivo) y Dragon Breath (un cono de fuego dracónico).',
          ko: '기술이 없던 타입에 새 기술 4개가 생겼어요: 얼음뭉치(땅에 박혀 밟은 적을 느리게 하는 얼음 조각), 암석봉인(가장 가까운 적들 위로 떨어지는 바위), 바늘미사일(휘어서 목표로 날아가는 바늘), 용의숨결(부채꼴로 뿜는 용의 불꽃).' },
          {
            pt: 'Cada um evolui com seu item: Ice Shard + Never-Melt Ice vira Blizzard, Rock Tomb + Hard Stone vira Stone Edge, Pin Missile + Silver Powder vira Megahorn e Dragon Breath + Dragon Fang vira Outrage.',
            en: 'Each one evolves with its item: Ice Shard + Never-Melt Ice becomes Blizzard, Rock Tomb + Hard Stone becomes Stone Edge, Pin Missile + Silver Powder becomes Megahorn and Dragon Breath + Dragon Fang becomes Outrage.',
            es: 'Cada uno evoluciona con su objeto: Ice Shard + Never-Melt Ice se vuelve Blizzard, Rock Tomb + Hard Stone se vuelve Stone Edge, Pin Missile + Silver Powder se vuelve Megahorn y Dragon Breath + Dragon Fang se vuelve Outrage.',
          ko: '각 기술은 짝이 되는 도구로 진화해요: 얼음뭉치 + 녹지않는얼음은 눈보라, 암석봉인 + 딱딱한돌은 스톤에지, 바늘미사일 + 은빛가루는 메가혼, 용의숨결 + 용의이빨은 역린이 돼요.' },
          {
            pt: 'Spheal, Rockruff, Larvitar, Grubbin, Larvesta, Noibat, Dratini, Gible e Dreepy agora podem aprendê-los.',
            en: 'Spheal, Rockruff, Larvitar, Grubbin, Larvesta, Noibat, Dratini, Gible and Dreepy can now learn them.',
            es: 'Spheal, Rockruff, Larvitar, Grubbin, Larvesta, Noibat, Dratini, Gible y Dreepy ahora pueden aprenderlos.',
          ko: '이제 대굴레오, 암멍이, 애버라스, 턱지충이, 활화르바, 음뱃, 미뇽, 딥상어동, 드라꼰이 이 기술들을 배울 수 있어요.' },
        ],
      },
      {
        title: { pt: 'Os lendários da Gen 1 à 3', en: 'The legendaries of Gens 1 to 3', es: 'Los legendarios de la Gen 1 a la 3' , ko: '1~3세대의 전설의 포켓몬' },
        notes: [
          {
            pt: 'As aves de Kanto agora dividem os horários das 7:00, 9:30 e 12:00 com as feras de Johto (Raikou, Entei e Suicune) e os Regis de Hoenn (Regirock, Regice e Registeel). Cada partida sorteia um trio, e cada um tem ataques próprios: Raikou deixa estática por onde corre, Entei faz chover fogo, Suicune solta ondas lentas e densas, Regirock derruba pedras, Regice congela o chão e Registeel fecha o caminho com anéis de aço.',
            en: "The Kanto birds now share the 7:00, 9:30 and 12:00 slots with the Johto beasts (Raikou, Entei and Suicune) and the Hoenn Regis (Regirock, Regice and Registeel). Each run draws one trio, and each member has its own attacks: Raikou leaves static where it runs, Entei rains fire, Suicune sends slow, dense waves, Regirock drops rocks, Regice freezes the ground and Registeel walls you in with steel rings.",
            es: 'Las aves de Kanto ahora comparten los horarios de las 7:00, 9:30 y 12:00 con las bestias de Johto (Raikou, Entei y Suicune) y los Regis de Hoenn (Regirock, Regice y Registeel). Cada partida sortea un trío, y cada uno tiene ataques propios: Raikou deja electricidad estática por donde corre, Entei hace llover fuego, Suicune lanza olas lentas y densas, Regirock derriba rocas, Regice congela el suelo y Registeel cierra el camino con anillos de acero.',
          ko: '이제 관동의 전설의 새들이 7:00, 9:30, 12:00 시간대를 성도의 전설의 야수(라이코, 앤테이, 스이쿤), 호연의 레지 삼총사(레지락, 레지아이스, 레지스틸)와 나눠 맡아요. 판마다 삼총사 하나가 뽑히고, 저마다 고유한 공격을 써요. 라이코는 달린 자리에 정전기를 남기고, 앤테이는 불비를 내리고, 스이쿤은 느리고 촘촘한 파도를 보내고, 레지락은 바위를 떨어뜨리고, 레지아이스는 땅을 얼리고, 레지스틸은 강철 고리로 길을 막아요.' },
          {
            pt: 'O HP, o dano e a velocidade são do horário, não do Pokémon: nenhum trio é mais fácil que outro.',
            en: 'HP, damage and speed belong to the time slot, not the Pokémon: no trio is easier than another.',
            es: 'El HP, el daño y la velocidad dependen del horario, no del Pokémon: ningún trío es más fácil que otro.',
          ko: 'HP, 데미지, 속도는 포켓몬이 아니라 시간대에 따라 정해져요. 어느 삼총사도 다른 삼총사보다 쉽지 않아요.' },
          {
            pt: 'Novas fendas lendárias: Latias e Latios na Ilha do Sul, uma ilha de areia com palmeiras para se proteger e uma arrebentação em volta que deixa lento, e Deoxys num meteoro no espaço, com aglomerados de cristal no caminho. Agora são 9 lendários de fenda, e a conquista Domador de Lendas pede os 9 (quem já tinha continua com ela).',
            en: 'New legendary rifts: Latias and Latios on Southern Island, a sandy island with palms for cover and surf around it that slows you down, and Deoxys on a meteor in space, with crystal clusters in the way. There are 9 rift legendaries now, and the Legend Tamer achievement asks for all 9 (if you already had it, you keep it).',
            es: 'Nuevas grietas legendarias: Latias y Latios en Isla Sur, una isla de arena con palmeras para cubrirse y un oleaje alrededor que ralentiza, y Deoxys en un meteorito en el espacio, con cúmulos de cristal en el camino. Ahora son 9 legendarios de grieta, y el logro Domador de Leyendas pide los 9 (quien ya lo tenía lo conserva).',
          ko: '새로운 전설의 균열: 라티아스와 라티오스는 남쪽 외딴섬에 있어요. 몸을 숨길 야자나무가 있는 모래섬으로, 둘레의 파도가 이동을 느리게 해요. 테오키스는 우주의 운석 위에 있고, 길목을 수정 덩어리가 막고 있어요. 이제 균열의 전설의 포켓몬은 9마리이고, 전설의 조련사 업적은 9마리 모두를 요구해요(이미 달성했다면 그대로 유지돼요).' },
          {
            pt: 'O chefe raro do fim pode ser Mew, Celebi ou Jirachi. A chance de aparecer continua 10%.',
            en: 'The rare boss at the end can be Mew, Celebi or Jirachi. The chance it shows up is still 10%.',
            es: 'El jefe raro del final puede ser Mew, Celebi o Jirachi. La probabilidad de que aparezca sigue siendo del 10%.',
          ko: '마지막에 나오는 희귀 보스는 뮤, 세레비, 지라치 중 하나예요. 등장 확률은 여전히 10%예요.' },
        ],
      },
      {
        title: { pt: 'Kanto, Johto e Hoenn completos na horda', en: 'Kanto, Johto and Hoenn complete in the horde', es: 'Kanto, Johto y Hoenn completos en la horda' , ko: '관동, 성도, 호연 포켓몬이 모두 무리에 등장' },
        notes: [
          {
            pt: '222 espécies da 1ª à 3ª geração entram na horda selvagem, de Metapod e Magikarp a Blissey, Slaking e Salamence. Agora todo Pokémon de Kanto, Johto e Hoenn que não é lendário nem mítico aparece no jogo (menos Unown e Castform, cujo visual depende da forma). A horda passa de 193 para 415 espécies e a Pokédex do jogo, de 334 para 556.',
            en: '222 species from generations 1 to 3 join the wild horde, from Metapod and Magikarp to Blissey, Slaking and Salamence. Every Kanto, Johto and Hoenn Pokémon that isn\'t legendary or mythical is now in the game (but Unown and Castform, whose look depends on their form). The horde grows from 193 to 415 species and the in-game Pokédex from 334 to 556.',
            es: '222 especies de la 1.ª a la 3.ª generación entran en la horda salvaje, de Metapod y Magikarp a Blissey, Slaking y Salamence. Ahora todos los Pokémon de Kanto, Johto y Hoenn que no son legendarios ni míticos aparecen en el juego (menos Unown y Castform, cuyo aspecto depende de la forma). La horda pasa de 193 a 415 especies y la Pokédex del juego, de 334 a 556.',
          ko: '1~3세대의 222종이 야생 무리에 합류해요. 단데기와 잉어킹부터 해피너스, 게을킹, 보만다까지요. 이제 전설의 포켓몬과 환상의 포켓몬을 제외한 관동, 성도, 호연의 모든 포켓몬이 게임에 나와요(폼에 따라 모습이 바뀌는 안농과 캐스퐁은 제외). 무리는 193종에서 415종으로, 게임 내 도감은 334종에서 556종으로 늘어났어요.' },
          {
            pt: 'Cada partida continua sorteando o seu elenco do mesmo jeito, então rostos das três primeiras gerações vão aparecer bem mais.',
            en: 'Each run still draws its cast the same way, so faces from the first three generations show up a lot more.',
            es: 'Cada partida sigue sorteando su elenco de la misma manera, así que las caras de las tres primeras generaciones van a aparecer mucho más.',
          ko: '판마다 등장 포켓몬을 뽑는 방식은 그대로라서, 1~3세대 포켓몬을 훨씬 자주 보게 될 거예요.' },
        ],
      },
      {
        title: { pt: 'Uma arena para cada lendário', en: 'An arena for each legendary', es: 'Una arena para cada legendario' , ko: '전설의 포켓몬마다 다른 아레나' },
        notes: [
          {
            pt: 'As fendas não levam mais para o mesmo círculo. Lugia espera num templo submerso, com ilhas em água rasa que deixa lento. Ho-Oh, num salão octogonal com pilares e o grande sino. Kyogre nada num poço cuja maré sobe e aperta o anel de pedra. Groudon fica numa caverna cortada por rios de lava (só se atravessa pelas pontes, a não ser que você seja do tipo Fogo). Rayquaza, num losango de jade cuja borda desaba durante a luta. E Dialga, numa nave de mármore com colunatas para se esconder do Roar of Time.',
            en: "Rifts no longer lead to the same circle. Lugia waits in a sunken temple, with islands in shallow water that slows you down. Ho-Oh, in an octagonal hall with pillars and the great bell. Kyogre swims in a pool whose tide rises and squeezes the stone ring. Groudon holds a cave split by lava rivers (cross on the bridges, unless you're a Fire type). Rayquaza, a jade diamond whose edge falls away during the fight. And Dialga, a marble nave with colonnades to hide from Roar of Time.",
            es: 'Las grietas ya no llevan al mismo círculo. Lugia espera en un templo sumergido, con islas en agua poco profunda que te ralentiza. Ho-Oh, en un salón octogonal con pilares y la gran campana. Kyogre nada en un pozo cuya marea sube y estrecha el anillo de piedra. Groudon está en una cueva cortada por ríos de lava (solo se cruza por los puentes, a menos que seas de tipo Fuego). Rayquaza, en un rombo de jade cuyo borde se derrumba durante la pelea. Y Dialga, en una nave de mármol con columnatas para esconderse del Roar of Time.',
          ko: '균열이 더 이상 같은 원형 아레나로 이어지지 않아요. 루기아는 물에 잠긴 신전에서 기다려요. 섬 사이의 얕은 물은 이동을 느리게 해요. 칠색조는 기둥과 큰 종이 있는 팔각형 전당에, 가이오가는 밀물이 차오르며 돌 고리를 좁혀 오는 웅덩이에 있어요. 그란돈은 용암 강으로 갈라진 동굴을 지켜요(불꽃 타입이 아니라면 다리로만 건널 수 있어요). 레쿠쟈는 싸우는 동안 가장자리가 무너지는 비취색 마름모에, 디아루가는 시간의포효를 피해 숨을 수 있는 열주가 늘어선 대리석 회랑에 있어요.' },
        ],
      },
      {
        title: {
          pt: 'Montanhas, árvores, torres e lagos no mapa',
          en: 'Mountains, trees, towers and lakes on the map',
          es: 'Montañas, árboles, torres y lagos en el mapa',
        ko: '맵에 산, 나무, 탑, 호수가 생겼어요' },
        notes: [
          {
            pt: 'O mapa ganhou relevo: pedras, bosques, montanhas em degraus, torres e lagos, que se vestem conforme o bioma (a colina da planície vira paredão na caverna e cripta na Torre). Quem anda não atravessa os sólidos, então dá para usar uma pedra de cobertura contra tiros ou fazer a horda dar a volta na montanha. Voadores, fantasmas e chefes passam por cima.',
            en: 'The map got some relief: rocks, groves, terraced mountains, towers and lakes, dressed for each biome (the meadow hill becomes a rock wall in the cave and a crypt at the Tower). Walkers can\'t go through solids, so a rock makes cover against shots and the horde has to go around a mountain. Flyers, ghosts and bosses go over it all.',
            es: 'El mapa ahora tiene relieve: rocas, bosquecillos, montañas escalonadas, torres y lagos, que se visten según el bioma (la colina de la pradera se vuelve un paredón en la cueva y una cripta en la Torre). Quien camina no atraviesa los sólidos, así que puedes usar una roca como cobertura contra los disparos o hacer que la horda rodee la montaña. Los voladores, los fantasmas y los jefes pasan por encima.',
          ko: '맵에 지형이 생겼어요: 바위, 작은 숲, 계단식 산, 탑, 호수가 지역에 맞게 꾸며져요(초원의 언덕은 동굴에서는 암벽이, 타워에서는 지하 묘지가 돼요). 걸어 다니는 포켓몬은 장애물을 통과하지 못하니, 바위를 엄폐물 삼아 공격을 막거나 무리가 산을 돌아오게 만들 수 있어요. 날아다니는 포켓몬, 고스트 포켓몬, 보스는 모두 위로 지나가요.' },
          {
            pt: 'Água deixa mais lento (Pokémon do tipo Água nadam sem perder velocidade) e o lago congelado da neve faz escorregar. Árvores, torres e montanhas ficam transparentes quando você passa atrás.',
            en: 'Water slows you down (Water types swim at full speed) and the frozen lakes in the snow make you slide. Trees, towers and mountains turn see-through when you walk behind them.',
            es: 'El agua te ralentiza (los Pokémon de tipo Agua nadan sin perder velocidad) y el lago congelado de la nieve te hace resbalar. Los árboles, las torres y las montañas se vuelven transparentes cuando pasas por detrás.',
          ko: '물에 들어가면 느려지고(물 타입은 속도 그대로 헤엄쳐요), 눈 지역의 얼어붙은 호수에서는 미끄러져요. 나무, 탑, 산 뒤로 지나가면 반투명해져요.' },
        ],
      },
      {
        title: { pt: 'Cadastro com Google destravado', en: 'Google sign up unstuck', es: 'Registro con Google destrabado' , ko: 'Google 가입 중 멈추는 문제 해결' },
        notes: [
          {
            pt: 'Quem começou a criar a conta e parou na verificação anti-robô ficava preso numa tela de "Verification didn\'t complete in time" em toda tentativa seguinte. Agora uma nova tentativa recomeça o cadastro do zero e entra normalmente.',
            en: 'If you started creating your account and stopped at the bot check, every later try got stuck on a "Verification didn\'t complete in time" screen. Now a new try starts the sign up over and gets you in.',
            es: 'Quien empezaba a crear su cuenta y se detenía en la verificación anti-bots quedaba atrapado en una pantalla de "Verification didn\'t complete in time" en cada intento siguiente. Ahora un nuevo intento empieza el registro desde cero y entra normalmente.',
          ko: '계정을 만들다가 봇 확인 단계에서 멈추면, 이후 시도할 때마다 "Verification didn\'t complete in time" 화면에 갇혔어요. 이제 다시 시도하면 가입을 처음부터 다시 시작해서 정상적으로 들어가요.' },
        ],
      },
      {
        title: { pt: 'Login com Google mais firme', en: 'Sturdier Google sign in', es: 'Inicio de sesión con Google más firme' , ko: '더 안정적인 Google 로그인' },
        notes: [
          {
            pt: 'Quando criar a conta pede uma etapa a mais depois do Google (uma verificação anti-robô ou um dado que faltou), o jogo agora te leva para a página da conta, termina por lá e te traz de volta, em vez de falhar o login.',
            en: 'When creating your account needs one more step after Google (a bot check or a missing detail), the game now takes you to the account page, finishes there and brings you back, instead of failing the sign in.',
            es: 'Cuando crear la cuenta pide un paso más después de Google (una verificación anti-bots o un dato que faltó), el juego ahora te lleva a la página de la cuenta, termina ahí y te trae de vuelta, en lugar de fallar el inicio de sesión.',
          ko: 'Google 로그인 뒤에 계정 생성 단계가 하나 더 필요할 때(봇 확인이나 빠진 정보), 이제 로그인에 실패하는 대신 게임이 계정 페이지로 데려가 거기서 마무리하고 다시 돌아와요.' },
        ],
      },
      {
        title: { pt: 'Quick Attack no seu comando', en: 'Quick Attack on your command', es: 'Quick Attack a tus órdenes' , ko: '원할 때 쓰는 전광석화' },
        notes: [
          {
            pt: 'Quick Attack e Extreme Speed não disparam mais sozinhos: como movem você, agora o bote sai quando você aperta Shift, X / □ no controle ou o novo botão redondo à esquerda do especial no celular. Sem inimigo por perto, o bote avança reto para a frente, bom para escapar de um cerco.',
            en: "Quick Attack and Extreme Speed no longer fire on their own: since they move you, the lunge now goes when you press Shift, X / □ on a gamepad or the new round button left of the special on phones. With no foe in reach it hops straight ahead, handy to slip out of a crowd.",
            es: 'Quick Attack y Extreme Speed ya no se disparan solos: como te mueven, ahora la embestida sale cuando presionas Shift, X / □ en el control o el nuevo botón redondo a la izquierda del especial en el celular. Sin enemigos cerca, la embestida avanza recto hacia adelante, ideal para escapar de un cerco.',
          ko: '전광석화와 신속이 더 이상 저절로 발동하지 않아요. 포켓몬을 움직이는 기술이라, 이제 Shift, 게임패드의 X / □, 또는 휴대폰에서 필살기 왼쪽에 새로 생긴 동그란 버튼을 누를 때 돌진해요. 닿는 범위에 적이 없으면 앞으로 곧장 뛰어나가서, 포위를 빠져나갈 때 편리해요.' },
        ],
      },
      {
        title: { pt: 'Todas as Megas', en: 'Every Mega', es: 'Todas las Megas' , ko: '모든 메가진화' },
        notes: [
          {
            pt: 'Agora toda linhagem do jogo que tem Mega Evolução Mega Evolui: são 26 Megas em 22 linhagens, com Venusaur, Blastoise, Charizard Y, Raichu X e Y, Dragonite, Meganium, Feraligatr, Sceptile, Blaziken, Swampert, Metagross, Staraptor, Garchomp e Garchomp Z, Lucario Z, Emboar, Chesnaught, Delphox e Greninja chegando agora, cada uma com status, especial, habilidade e grito próprios.',
            en: 'Every line in the game with a Mega Evolution can now Mega Evolve: 26 Megas across 22 lines, with Venusaur, Blastoise, Charizard Y, Raichu X and Y, Dragonite, Meganium, Feraligatr, Sceptile, Blaziken, Swampert, Metagross, Staraptor, Garchomp and Garchomp Z, Lucario Z, Emboar, Chesnaught, Delphox and Greninja joining now, each with its own stats, special, ability and cry.',
            es: 'Ahora todas las líneas del juego que tienen Megaevolución pueden megaevolucionar: son 26 Megas en 22 líneas, con Venusaur, Blastoise, Charizard Y, Raichu X e Y, Dragonite, Meganium, Feraligatr, Sceptile, Blaziken, Swampert, Metagross, Staraptor, Garchomp y Garchomp Z, Lucario Z, Emboar, Chesnaught, Delphox y Greninja llegando ahora, cada una con estadísticas, especial, habilidad y grito propios.',
          ko: '이제 게임에서 메가진화가 있는 모든 계열이 메가진화할 수 있어요. 22개 계열에 메가진화 26종으로, 이번에 이상해꽃, 거북왕, 리자몽 Y, 라이츄 X와 Y, 망나뇽, 메가니움, 장크로다일, 나무킹, 번치코, 대짱이, 메타그로스, 찌르호크, 한카리아스와 한카리아스 Z, 루카리오 Z, 염무왕, 브리가론, 마폭시, 개굴닌자가 추가됐어요. 각자 고유한 능력치, 필살기, 특성, 울음소리를 가지고 있어요.' },
          {
            pt: 'Charizard, Raichu, Garchomp e Lucario têm duas Megas: o lendário da fenda deixa as duas pedras no chão e a que você pegar decide a Mega. A outra se desfaz.',
            en: 'Charizard, Raichu, Garchomp and Lucario have two Megas: the rift legendary leaves both stones on the ground and the one you pick up decides the Mega. The other crumbles.',
            es: 'Charizard, Raichu, Garchomp y Lucario tienen dos Megas: el legendario de la grieta deja las dos piedras en el suelo y la que recojas decide la Mega. La otra se deshace.',
          ko: '리자몽, 라이츄, 한카리아스, 루카리오는 메가진화가 두 가지예요. 균열의 전설의 포켓몬이 메가스톤 두 개를 모두 떨어뜨리고, 주운 쪽에 따라 메가진화가 정해져요. 다른 하나는 부서져요.' },
          {
            pt: 'As Megas que ainda não têm sprite no PMD SpriteCollab aparecem com o sprite da evolução final e um contorno arco-íris enquanto a forma dura.',
            en: 'Megas that don\'t have a PMD SpriteCollab sprite yet show the final evolution\'s sprite with a rainbow outline while the form lasts.',
            es: 'Las Megas que todavía no tienen sprite en PMD SpriteCollab aparecen con el sprite de la evolución final y un contorno arcoíris mientras dura la forma.',
          ko: 'PMD SpriteCollab에 아직 스프라이트가 없는 메가진화는 메가진화가 유지되는 동안 최종 진화형의 스프라이트에 무지개색 테두리를 둘러 보여 줘요.' },
        ],
      },
      {
        title: { pt: 'Gritos das Megas', en: 'Mega cries', es: 'Gritos de las Megas' , ko: '메가진화 울음소리' },
        notes: [
          {
            pt: 'As Megas agora têm o próprio cry: o Pokémon solta o grito da forma Mega ao terminar a transformação, ao usar o especial e se cair enquanto ela dura.',
            en: 'Megas now have their own cry: the Pokémon lets out its Mega form\'s cry as the transformation lands, when it uses its special and if it faints while the form lasts.',
            es: 'Las Megas ahora tienen su propio grito: el Pokémon suelta el grito de la forma Mega al terminar la transformación, al usar el especial y si cae mientras dura.',
          ko: '이제 메가진화에 고유한 울음소리가 있어요. 변신이 끝날 때, 필살기를 쓸 때, 메가진화 중에 기절할 때 메가진화한 모습의 울음소리를 내요.' },
        ],
      },
      {
        title: { pt: 'Mega Evolução', en: 'Mega Evolution', es: 'Megaevolución' , ko: '메가진화' },
        notes: [
          {
            pt: 'Charmander, Abra, Gastly, Ralts, Riolu e Larvitar agora podem Mega Evoluir. Vença um lendário de fenda com um deles para ganhar a Mega Stone da linhagem e, na evolução final, aperte o botão MEGA (tecla E, ou Y no controle).',
            en: 'Charmander, Abra, Gastly, Ralts, Riolu and Larvitar can now Mega Evolve. Beat a rift legendary with one of them to get the line\'s Mega Stone, then press the MEGA button at the final evolution (E key, or Y on a gamepad).',
            es: 'Charmander, Abra, Gastly, Ralts, Riolu y Larvitar ahora pueden megaevolucionar. Vence a un legendario de grieta con uno de ellos para obtener la Mega Stone de la línea y, en la evolución final, presiona el botón MEGA (tecla E, o Y en el control).',
          ko: '이제 파이리, 캐이시, 고오스, 랄토스, 리오르, 애버라스가 메가진화할 수 있어요. 이 중 하나로 균열의 전설의 포켓몬을 쓰러뜨리면 그 계열의 메가스톤을 얻고, 최종 진화형에서 MEGA 버튼(E 키, 게임패드는 Y)을 누르면 돼요.' },
          {
            pt: 'A forma Mega dura 20 segundos e volta depois de 60. Ela começa com uma transformação com explosão de arco-íris que empurra a horda, ganha status, troca o especial por um mais forte e ativa a habilidade: o Dragon Flare em chamas azuis do Mega Charizard X, o Trace do Mega Alakazam (cada especial dispara dois dos seus golpes), o Shadow Tag do Mega Gengar (desacelera quem chega perto), o Pixilate do Mega Gardevoir, a cadeia de 6 saltos com Aura Spheres do Mega Lucario e a tempestade de areia do Mega Tyranitar.',
            en: "The Mega form lasts 20 seconds and comes back after 60. It starts with a transformation and a rainbow burst that pushes the horde back, gains stats, swaps the special for a stronger one and turns its ability on: Mega Charizard X's blue-flame Dragon Flare, Mega Alakazam's Trace (every special fires two of your moves), Mega Gengar's Shadow Tag (slows anyone who comes close), Mega Gardevoir's Pixilate, Mega Lucario's 6-jump chain dash with Aura Spheres and Mega Tyranitar's sandstorm.",
            es: 'La forma Mega dura 20 segundos y vuelve después de 60. Empieza con una transformación y una explosión arcoíris que empuja a la horda, gana estadísticas, cambia el especial por uno más fuerte y activa la habilidad: el Dragon Flare en llamas azules de Mega Charizard X, el Trace de Mega Alakazam (cada especial dispara dos de tus movimientos), el Shadow Tag de Mega Gengar (ralentiza a quien se acerca), el Pixilate de Mega Gardevoir, la embestida en cadena de 6 saltos con Aura Spheres de Mega Lucario y la tormenta de arena de Mega Tyranitar.',
          ko: '메가진화는 20초 동안 유지되고 60초 뒤에 다시 쓸 수 있어요. 변신과 함께 무지개빛 폭발이 일어나 무리를 밀어내고, 능력치가 오르고, 필살기가 더 강한 것으로 바뀌고, 특성이 발동해요: 메가리자몽X의 푸른 불꽃 드래곤플레어, 메가후딘의 트레이스(필살기마다 내 기술 2개를 발사), 메가팬텀의 그림자밟기(가까이 오는 적을 느리게 함), 메가가디안의 페어리스킨, 메가루카리오의 파동탄을 터뜨리는 6단 연쇄 대시, 메가마기라스의 모래바람.' },
          {
            pt: 'Duas conquistas novas: Laço Mega e Mestre Mega.',
            en: 'Two new achievements: Mega Bond and Mega Master.',
            es: 'Dos logros nuevos: Lazo Mega y Maestro Mega.',
          ko: '새 업적 2개: 메가 유대, 메가 마스터.' },
        ],
      },
      {
        title: { pt: 'Aegislash na Forma Lâmina', en: 'Aegislash in Blade Forme', es: 'Aegislash en Forma Filo' , ko: '블레이드폼 킬가르도' },
        notes: [
          {
            pt: 'Na Forma Lâmina, o Aegislash agora aparece com o sprite da Forma Lâmina (também na versão shiny), como nos jogos. O ícone sobre a cabeça saiu: o próprio sprite, o anel no chão e o botão do especial mostram a postura.',
            en: 'In Blade Forme, Aegislash now shows its Blade Forme sprite (shiny too), like in the games. The icon over its head is gone: the sprite itself, the ring at its feet and the special button show the stance.',
            es: 'En Forma Filo, Aegislash ahora aparece con el sprite de la Forma Filo (también en la versión shiny), como en los juegos. El ícono sobre su cabeza ya no está: el propio sprite, el anillo en el suelo y el botón del especial muestran la postura.',
          ko: '이제 블레이드폼 킬가르도가 본가 게임처럼 블레이드폼 스프라이트로 보여요(이로치도). 머리 위 아이콘은 없어졌어요. 스프라이트 자체와 발밑의 고리, 필살기 버튼이 현재 폼을 보여 줘요.' },
        ],
      },
    ],
  },
  {
    date: '2026-10-14',
    title: { pt: 'Contas, ranking e missões', en: 'Accounts, rankings and missions', es: 'Cuentas, ranking y misiones' , ko: "계정·랭킹·미션" },
    highlights: [
      { pt: 'Entre com o Google e guarde o seu progresso na nuvem.', en: 'Sign in with Google and keep your progress in the cloud.', es: 'Inicia sesión con Google y guarda tu progreso en la nube.' , ko: "Google로 로그인해 진행 상황을 클라우드에 보관할 수 있어요." },
      { pt: 'Ranking por dificuldade, perfis públicos e ranking dos amigos.', en: 'Rankings per difficulty, public profiles and a friends ranking.', es: 'Ranking por dificultad, perfiles públicos y ranking de amigos.' , ko: "난이도별 랭킹·공개 프로필·친구 랭킹을 추가했어요." },
      { pt: 'Missões diárias e semanais, conquistas e títulos.', en: 'Daily and weekly missions, achievements and titles.', es: 'Misiones diarias y semanales, logros y títulos.' , ko: "일일·주간 미션과 업적·칭호를 추가했어요." },
      { pt: 'Três dificuldades: Normal, Difícil e Pesadelo.', en: 'Three difficulties: Normal, Hard and Nightmare.', es: 'Tres dificultades: Normal, Difícil y Pesadilla.' , ko: "노말·하드·나이트메어 세 난이도를 지원해요." },
      { pt: 'Os 18 tipos ganharam ataque especial, e os chefes ficam furiosos.', en: 'All 18 types got a special attack, and bosses get enraged.', es: 'Los 18 tipos tienen ataque especial, y los jefes se enfurecen.' , ko: "18개 타입 모두 필살기를 가지며 보스가 분노 상태에 들어가요." },
    ],
    changes: [
      {
        title: { pt: 'Metronome e Power Herb', en: 'Metronome and Power Herb', es: 'Metronome y Power Herb' , ko: '메트로놈과 파워풀허브' },
        notes: [
          {
            pt: 'Novo item, Metronome: ao fim de cada salto da investida em cadeia, da investida de fogo ou de uma troca de postura (e ao soltar os outros especiais), dispara um dos seus golpes dali. No nível máximo, dois (numa cadeia, o segundo só no último salto).',
            en: 'New item, Metronome: at the end of every chain dash jump, fire dash or stance swap (and when other specials go off), it fires one of your moves from there. Two at max level (in a chain, the second only on the last jump).',
            es: 'Nuevo objeto, Metronome: al final de cada salto de la embestida en cadena, de la carga de fuego o de un cambio de postura (y al soltar los demás especiales), dispara uno de tus movimientos desde ahí. En el nivel máximo, dos (en una cadena, el segundo solo en el último salto).',
          ko: '새 도구 메트로놈: 연쇄 대시의 도약, 불꽃 대시, 폼 전환이 끝날 때마다(다른 필살기가 발동할 때도) 그 자리에서 내 기술 하나를 발사해요. 최대 레벨에서는 2개예요(연쇄 중에는 두 번째 기술이 마지막 도약에서만 나가요).' },
          {
            pt: 'Novo item, Power Herb: cada inimigo derrubado pelo especial, ou durante uma cadeia, corta 0,25 s da recarga dele (até 0,75 s no nível máximo). A recarga nunca fica abaixo do mínimo de 4 s.',
            en: 'New item, Power Herb: each foe the special defeats, or any defeated mid-chain, cuts 0.25 s off its cooldown (up to 0.75 s at max level). The cooldown never drops below the 4 s minimum.',
            es: 'Nuevo objeto, Power Herb: cada enemigo derribado por el especial, o durante una cadena, le quita 0.25 s a su recarga (hasta 0.75 s en el nivel máximo). La recarga nunca baja del mínimo de 4 s.',
          ko: '새 도구 파워풀허브: 필살기로 쓰러뜨린 적(연쇄 도중 쓰러뜨린 적 포함) 하나당 필살기 쿨타임이 0.25초 줄어요(최대 레벨에서는 0.75초). 쿨타임은 최소치인 4초 아래로는 내려가지 않아요.' },
        ],
      },
      {
        title: { pt: 'Investida em cadeia e Mudança de Postura', en: 'Chain dash and Stance Change', es: 'Carga en cadena y Cambio Táctico' , ko: '연쇄 대시와 배틀스위치' },
        notes: [
          {
            pt: 'Treecko, Sprigatito, Riolu, Gible, Starly e Honedge ganharam um especial novo: uma investida que corta até o inimigo mais próximo. Acertou? Aperte de novo em meio segundo para saltar ao próximo, até 3 saltos (4 na evolução final). A recarga só começa quando a cadeia acaba.',
            en: 'Treecko, Sprigatito, Riolu, Gible, Starly and Honedge get a new special: a dash that slashes through to the nearest foe. Landed a hit? Press again within half a second to jump to the next one, up to 3 jumps (4 at the final evolution). The cooldown only starts when the chain ends.',
            es: 'Treecko, Sprigatito, Riolu, Gible, Starly y Honedge tienen un especial nuevo: una carga que corta hasta el enemigo más cercano. ¿Acertaste? Presiona de nuevo en medio segundo para saltar al siguiente, hasta 3 saltos (4 en la evolución final). La recarga solo empieza cuando termina la cadena.',
          ko: '나무지기, 나오하, 리오르, 딥상어동, 찌르꼬, 단칼빙이 새 필살기를 얻었어요. 가장 가까운 적까지 베며 돌진하는 대시예요. 맞혔나요? 0.5초 안에 다시 누르면 다음 적에게 도약해요. 최대 3번(최종 진화형은 4번)까지 이어지고, 쿨타임은 연쇄가 끝나야 시작돼요.' },
          {
            pt: 'O Aegislash troca o especial pela Mudança de Postura: alterna entre a Forma Escudo (recebe 30% menos dano, golpes ×0,7) e a Forma Lâmina (golpes ×1,3). A forma atual aparece sobre a cabeça dele e no botão do especial.',
            en: 'Aegislash trades its special for Stance Change: it swaps between Shield Forme (takes 30% less damage, moves ×0.7) and Blade Forme (moves ×1.3). The current forme shows over its head and on the special button.',
            es: 'Aegislash cambia su especial por Cambio Táctico: alterna entre la Forma Escudo (recibe 30% menos daño, movimientos ×0.7) y la Forma Filo (movimientos ×1.3). La forma actual aparece sobre su cabeza y en el botón del especial.',
          ko: '킬가르도는 필살기 대신 배틀스위치를 써요. 실드폼(받는 데미지 30% 감소, 기술 ×0.7)과 블레이드폼(기술 ×1.3)을 오가요. 현재 폼은 머리 위와 필살기 버튼에 표시돼요.' },
        ],
      },
      {
        title: {
          pt: 'Cinco golpes novos: bote, corrente, minas e torres',
          en: 'Five new moves: lunges, chains, mines and turrets',
          es: 'Cinco movimientos nuevos: embestidas, cadenas, minas y torretas',
        ko: '새 기술 5개: 돌진, 연쇄, 지뢰, 포탑' },
        notes: [
          {
            pt: 'Quick Attack dá um bote curto contra o inimigo à frente, acerta tudo no caminho e deixa você invulnerável por um instante. Ele só avança na direção em que você já está andando e recarrega em no mínimo 1,5 s. Com Silk Scarf, evolui para Extreme Speed.',
            en: "Quick Attack lunges a short hop at the foe ahead, hits everything on the way and makes you invulnerable for an instant. It only lunges the way you're already walking and never recharges in under 1.5 s. With Silk Scarf it evolves into Extreme Speed.",
            es: 'Quick Attack da una embestida corta contra el enemigo de enfrente, golpea todo lo que hay en el camino y te deja invulnerable por un instante. Solo avanza en la dirección en la que ya estás caminando y se recarga en 1.5 s como mínimo. Con Silk Scarf, evoluciona a Extreme Speed.',
          ko: '전광석화는 앞에 있는 적에게 짧게 돌진해 지나는 길의 모든 적을 공격하고, 잠깐 무적이 돼요. 이미 걷고 있는 방향으로만 돌진하고, 다시 쓰기까지 최소 1.5초가 걸려요. 실크스카프가 있으면 신속으로 진화해요.' },
          {
            pt: 'Shock Wave salta de inimigo em inimigo, perdendo 15% de força a cada salto, e evolui para Thunderbolt com Magnet. Hex faz o mesmo e causa ×1,7 de dano em quem está com algum status (queimado, envenenado, paralisado…).',
            en: 'Shock Wave jumps from foe to foe, losing 15% power per jump, and evolves into Thunderbolt with Magnet. Hex does the same and deals ×1.7 damage to foes with a status condition (burned, poisoned, paralyzed…).',
            es: 'Shock Wave salta de enemigo en enemigo, perdiendo 15% de fuerza en cada salto, y evoluciona a Thunderbolt con Magnet. Hex hace lo mismo y causa ×1.7 de daño a quien tiene algún problema de estado (quemado, envenenado, paralizado…).',
          ko: '전격파는 적에서 적으로 튈 때마다 위력이 15%씩 줄어들며 연쇄하고, 자석이 있으면 10만볼트로 진화해요. 병상첨병도 똑같이 연쇄하며, 상태 이상(화상, 독, 마비 등)에 걸린 적에게 ×1.7 데미지를 줘요.' },
          {
            pt: 'Toxic Spikes deixa espinhos que explodem quando um inimigo pisa (ou com metade do dano quando acabam) e evolui para Barb Barrage com Poison Barb. Will-O-Wisp deixa para trás um fogo-fátuo que atira sozinho e evolui para Inferno com Charcoal.',
            en: 'Toxic Spikes leaves spikes that burst when a foe steps on them (or for half damage when they run out) and evolves into Barb Barrage with Poison Barb. Will-O-Wisp leaves a wisp behind that shoots on its own and evolves into Inferno with Charcoal.',
            es: 'Toxic Spikes deja púas que explotan cuando un enemigo las pisa (o con la mitad del daño cuando se acaban) y evoluciona a Barb Barrage con Poison Barb. Will-O-Wisp deja atrás un fuego fatuo que dispara solo y evoluciona a Inferno con Charcoal.',
          ko: '독압정은 적이 밟으면 터지는 압정을 깔고(시간이 다 되면 절반의 데미지로 터져요), 독바늘이 있으면 독침천발로 진화해요. 도깨비불은 스스로 공격하는 도깨비불을 뒤에 남기고, 목탄이 있으면 연옥으로 진화해요.' },
          {
            pt: 'Quem aprende: Pichu, Eevee, Starly, Riolu e Torchic (Quick Attack), Pichu, Toxel e Beldum (Shock Wave), Gastly, Dreepy, Honedge e Rowlet (Hex), Budew, Bulbasaur e Chespin (Toxic Spikes), Charmander, Cyndaquil, Fennekin, Litten e Charcadet (Will-O-Wisp).',
            en: 'Who learns them: Pichu, Eevee, Starly, Riolu and Torchic (Quick Attack), Pichu, Toxel and Beldum (Shock Wave), Gastly, Dreepy, Honedge and Rowlet (Hex), Budew, Bulbasaur and Chespin (Toxic Spikes), Charmander, Cyndaquil, Fennekin, Litten and Charcadet (Will-O-Wisp).',
            es: 'Quién los aprende: Pichu, Eevee, Starly, Riolu y Torchic (Quick Attack), Pichu, Toxel y Beldum (Shock Wave), Gastly, Dreepy, Honedge y Rowlet (Hex), Budew, Bulbasaur y Chespin (Toxic Spikes), Charmander, Cyndaquil, Fennekin, Litten y Charcadet (Will-O-Wisp).',
          ko: '배우는 포켓몬: 피츄, 이브이, 찌르꼬, 리오르, 아차모(전광석화), 피츄, 일레즌, 메탕(전격파), 고오스, 드라꼰, 단칼빙, 나몰빼미(병상첨병), 꼬몽울, 이상해씨, 도치마론(독압정), 파이리, 브케인, 푸호꼬, 냐오불, 카르본(도깨비불).' },
        ],
      },
      {
        title: { pt: 'Chefes furiosos, elites e corredores', en: 'Enraged bosses, elites and runners', es: 'Jefes furiosos, élites y corredores' , ko: '분노한 보스, 엘리트, 질주하는 적' },
        notes: [
          {
            pt: 'Os chefes do mapa agora alternam entre lutar de perto, avançando e batendo em área ao redor de si, e de longe, parados mirando em você. Abaixo da metade do HP eles ficam furiosos: contorno vermelho, cry, mais velocidade, menos pausa entre ataques e às vezes dois ataques seguidos.',
            en: 'Map bosses now switch between fighting up close, rushing in and slamming the area around them, and at range, standing back and aiming at you. Under half HP they enrage: red outline, a cry, more speed, shorter pauses between attacks and sometimes two attacks in a row.',
            es: 'Los jefes del mapa ahora alternan entre pelear de cerca, avanzando y golpeando el área a su alrededor, y de lejos, quietos y apuntándote. Por debajo de la mitad del HP se enfurecen: contorno rojo, grito, más velocidad, menos pausa entre ataques y a veces dos ataques seguidos.',
          ko: '이제 맵 보스는 근접전과 원거리전을 오가요. 가까이서는 달려들어 주변 범위를 내려치고, 멀리서는 물러선 채 나를 조준해요. HP가 절반 아래로 떨어지면 분노해요: 빨간 테두리, 울음소리, 더 빠른 속도, 짧아진 공격 간격, 그리고 가끔 연속 공격.' },
          {
            pt: 'No primeiro minuto de cada chefe nascem bem menos inimigos comuns, então a luta é com ele. Depois disso a horda volta, então não vale enrolar.',
            en: "For each boss's first minute far fewer regular enemies spawn, so the fight is with it. After that the horde comes back, so don't drag it out.",
            es: 'En el primer minuto de cada jefe aparecen muchos menos enemigos comunes, así que la pelea es con él. Después la horda vuelve, así que no te conviene alargarlo.',
          ko: '보스가 나오고 첫 1분 동안은 일반 적이 훨씬 적게 나와서 보스와의 싸움에 집중할 수 있어요. 그 뒤에는 무리가 다시 몰려오니 오래 끌지 마세요.' },
          {
            pt: 'Quando a horda quase enche, quem nasce vem como elite: contorno vermelho, mais HP, mais EXP e mais dano (menos na luta com o Mewtwo, que segue um duelo). E uma espécie nova de cada fase corre, com rastros de velocidade, e mira em onde você vai estar, então correr em círculos não despista mais.',
            en: "When the horde is nearly full, new arrivals come in as elites: red outline, more HP, more EXP and more damage (not during the Mewtwo fight, which stays a duel). And one new species each stage runs, with speed lines, aiming where you're going to be, so running in circles no longer shakes it.",
            es: 'Cuando la horda está casi llena, los que aparecen llegan como élites: contorno rojo, más HP, más EXP y más daño (menos en la pelea con Mewtwo, que sigue siendo un duelo). Y una especie nueva de cada fase corre, con estelas de velocidad, y apunta a donde vas a estar, así que correr en círculos ya no la despista.',
          ko: '무리가 거의 가득 차면 새로 나오는 적은 엘리트가 돼요: 빨간 테두리, 더 많은 HP, 더 많은 EXP, 더 높은 데미지(1대1 대결인 뮤츠전은 제외). 그리고 단계마다 새로 나오는 한 종은 속도선을 그리며 달려와 내가 갈 곳을 노려요. 이제 빙글빙글 돌기만 해서는 따돌릴 수 없어요.' },
        ],
      },
      {
        title: { pt: 'Fim de partida sem impasse', en: 'No more endgame stalemates', es: 'Fin de partida sin estancamientos' , ko: '지루하게 늘어지지 않는 후반전' },
        notes: [
          {
            pt: 'Os inimigos comuns não viram mais esponjas no fim da partida: o HP sobe mais devagar depois dos 8:00, e o Difícil e o Pesadelo agora apertam com hordas mais rápidas, mais cheias e que batem mais forte, em vez de HP de sobra. No fim, um inimigo do Pesadelo tem cerca de 2x o HP do Normal (antes eram 4,5x).',
            en: "Regular enemies no longer turn into sponges late in the run: their HP grows slower after 8:00, and Hard and Nightmare now press with faster, denser hordes that hit harder instead of piles of HP. Late on Nightmare an enemy has about 2x Normal's HP (it was 4.5x).",
            es: 'Los enemigos comunes ya no se vuelven esponjas al final de la partida: el HP sube más despacio después de las 8:00, y Difícil y Pesadilla ahora aprietan con hordas más rápidas, más llenas y que pegan más fuerte, en lugar de HP de sobra. Al final, un enemigo de Pesadilla tiene cerca de 2x el HP de Normal (antes era 4.5x).',
          ko: '판 후반에 일반 적이 더 이상 체력 덩어리가 되지 않아요. 8:00 이후에는 HP가 더 천천히 늘어나고, 하드와 나이트메어는 HP를 잔뜩 쌓는 대신 더 빠르고 빽빽하고 더 세게 때리는 무리로 압박해요. 후반 나이트메어의 적 HP는 노말의 약 2x예요(예전에는 4.5x).' },
          {
            pt: 'Cada chefe tem até o próximo chegar: se ainda estiver de pé quando o seguinte aparecer, ele foge sem deixar recompensa, em vez de se acumular na horda.',
            en: "Each boss has until the next one arrives: if it's still standing when the next boss shows up, it flees without a reward instead of piling up in the horde.",
            es: 'Cada jefe tiene hasta que llegue el siguiente: si sigue en pie cuando aparece el próximo, huye sin dejar recompensa, en lugar de acumularse en la horda.',
          ko: '각 보스는 다음 보스가 올 때까지만 머물러요. 다음 보스가 나타날 때까지 쓰러지지 않으면 무리에 쌓이는 대신 보상 없이 도망가요.' },
          {
            pt: 'O Mewtwo virou o clímax: ao chegar, ele empurra a horda para longe e, enquanto estiver de pé, quase não nascem inimigos comuns. A horda só passa a crescer sem parar depois dos 15:00 se você escolher o modo sem fim.',
            en: 'Mewtwo is now the climax: it blasts the horde away when it arrives and, while it stands, regular enemies barely spawn. The horde only keeps escalating past 15:00 once you choose endless mode.',
            es: 'Mewtwo ahora es el clímax: al llegar, empuja lejos a la horda y, mientras siga en pie, casi no aparecen enemigos comunes. La horda solo crece sin parar después de las 15:00 si eliges el modo infinito.',
          ko: '이제 뮤츠가 클라이맥스예요. 등장하면서 무리를 날려 버리고, 뮤츠가 버티는 동안에는 일반 적이 거의 나오지 않아요. 15:00 이후에도 무리가 계속 거세지는 건 무한 모드를 골랐을 때뿐이에요.' },
        ],
      },
      {
        title: {
          pt: 'Horda que se renova e menos números na tela',
          en: 'A horde that renews and fewer numbers on screen',
          es: 'Una horda que se renueva y menos números en pantalla',
        ko: '계속 바뀌는 무리와 줄어든 화면 속 숫자' },
        notes: [
          {
            pt: 'No fim da partida, a horda não vira mais um bloco parado: quando chega no limite, cada Pokémon novo toma o lugar do mais antigo fora da tela, e quem passa de um minuto fora da tela vai embora. Chefes, shinies, revoadas e quem está na tela nunca somem assim.',
            en: "Late in a run the horde no longer freezes into a still blob: at the cap, each new Pokémon takes the place of the oldest one off-screen, and anyone off-screen for over a minute leaves. Bosses, shinies, flocks and anything on screen never vanish this way.",
            es: 'Al final de la partida, la horda ya no se vuelve un bloque inmóvil: cuando llega al límite, cada Pokémon nuevo toma el lugar del más antiguo fuera de la pantalla, y quien pasa más de un minuto fuera de la pantalla se va. Los jefes, los shinies, las bandadas y lo que está en pantalla nunca desaparecen así.',
          ko: '판 후반에 무리가 더 이상 멈춘 덩어리가 되지 않아요. 한도에 다다르면 새 포켓몬이 화면 밖에서 가장 오래된 포켓몬의 자리를 차지하고, 화면 밖에 1분 넘게 있던 포켓몬은 떠나요. 보스, 이로치, 떼, 화면 안에 있는 포켓몬은 이렇게 사라지지 않아요.' },
          {
            pt: 'Números de dano agora têm três opções em Ajustes: Todos, Reduzidos (o novo padrão) e OFF. Em Reduzidos, com a tela cheia aparecem só os maiores acertos, mais os do chefe, e eles somem um pouco antes.',
            en: 'Damage numbers now have three options in Settings: All, Reduced (the new default) and OFF. On Reduced, a crowded screen only shows the biggest hits, plus the boss\'s, and they fade a little sooner.',
            es: 'Los números de daño ahora tienen tres opciones en Ajustes: Todos, Reducidos (el nuevo predeterminado) y OFF. En Reducidos, con la pantalla llena solo aparecen los golpes más grandes, más los del jefe, y desaparecen un poco antes.',
          ko: '이제 설정의 데미지 표시에 전부, 줄임(새 기본값), 끔의 세 가지 옵션이 있어요. 줄임에서는 화면이 붐빌 때 가장 큰 공격과 보스가 받은 공격의 숫자만 보이고, 조금 더 빨리 사라져요.' },
        ],
      },
      {
        title: { pt: 'Entrar ou jogar como convidado', en: 'Sign in or play as a guest', es: 'Iniciar sesión o jugar como invitado' , ko: '로그인하거나 게스트로 플레이' },
        notes: [
          {
            pt: 'Ao tocar em Jogar sem estar conectado, o jogo pergunta se você quer entrar com o Google (a conta é criada no primeiro acesso) ou jogar como convidado. Escolhendo convidado, ele não pergunta de novo até recarregar a página.',
            en: "Tapping Play while signed out now asks whether you want to sign in with Google (the account is created the first time) or play as a guest. Pick guest and it won't ask again until the page reloads.",
            es: 'Al tocar Jugar sin haber iniciado sesión, el juego pregunta si quieres entrar con Google (la cuenta se crea en el primer acceso) o jugar como invitado. Si eliges invitado, no vuelve a preguntar hasta que recargues la página.',
          ko: '로그인하지 않은 상태에서 플레이를 누르면 이제 Google로 로그인할지(처음이면 계정이 만들어져요), 게스트로 플레이할지 물어봐요. 게스트를 고르면 페이지를 새로고침할 때까지 다시 묻지 않아요.' },
          {
            pt: 'Depois de entrar com o Google, o jogo volta direto para o menu, sem a tela de "Aperte qualquer tecla".',
            en: 'After signing in with Google, the game comes back straight to the menu, skipping the "Press any key" screen.',
            es: 'Después de entrar con Google, el juego vuelve directo al menú, sin la pantalla de "Presiona cualquier tecla".',
          ko: 'Google로 로그인한 뒤에는 "아무 키나 누르세요" 화면을 건너뛰고 곧바로 메뉴로 돌아와요.' },
        ],
      },
      {
        title: { pt: 'Ranking conferido pelo servidor', en: 'A ranking the server checks', es: 'Ranking verificado por el servidor' , ko: '서버가 검증하는 랭킹' },
        notes: [
          {
            pt: 'Cada partida do ranking agora é jogada de novo pelo servidor, a partir do replay, e só fica no quadro se terminar igual. Enquanto isso, ela aparece como "Conferindo…".',
            en: 'Every ranked run is now played again by the server from its replay, and only stays on the board if it ends the same. Meanwhile it shows as "Checking…".',
            es: 'Cada partida del ranking ahora la vuelve a jugar el servidor a partir del replay, y solo queda en la tabla si termina igual. Mientras tanto, aparece como "Verificando…".',
          ko: '이제 랭킹에 오른 모든 판을 서버가 리플레이로 다시 플레이해 보고, 결과가 같을 때만 순위표에 남겨요. 그동안에는 "확인 중…"으로 표시돼요.' },
          {
            pt: 'O tamanho de cada Pokémon na hora de acertar e levar golpes agora vem pronto com o jogo. Antes, um inimigo que surgia antes do sprite baixar tinha um corpo diferente por alguns instantes.',
            en: 'Each Pokémon\'s hitbox now ships with the game. Before, an enemy that showed up before its sprite downloaded had a different body for a moment.',
            es: 'El tamaño de cada Pokémon a la hora de golpear y recibir golpes ahora viene listo con el juego. Antes, un enemigo que aparecía antes de que su sprite se descargara tenía un cuerpo distinto por unos instantes.',
          ko: '이제 포켓몬마다 히트박스가 게임에 미리 들어 있어요. 예전에는 스프라이트를 내려받기 전에 나타난 적의 몸 크기가 잠깐 동안 달랐어요.' },
        ],
      },
      {
        title: { pt: 'Ranking, perfis e amigos', en: 'Ranking, profiles and friends', es: 'Ranking, perfiles y amigos' , ko: '랭킹, 프로필, 친구' },
        notes: [
          {
            pt: 'Ranking por tempo sobrevivido na tela inicial, um para cada dificuldade, com as abas Hoje, Semana e Total. Dá para filtrar por Pokémon e ver só os amigos. Hoje e Semana viram à meia-noite de Brasília.',
            en: 'A ranking by time survived on the title screen, one per difficulty, with Today, Week and All time tabs. Filter it by Pokémon or show only your friends. Today and Week turn over at midnight Brasília time.',
            es: 'Ranking por tiempo sobrevivido en la pantalla de inicio, uno para cada dificultad, con las pestañas Hoy, Semana y Total. Puedes filtrar por Pokémon y ver solo a tus amigos. Hoy y Semana se reinician a medianoche, hora de Brasilia.',
          ko: '타이틀 화면에 생존 시간 랭킹이 생겼어요. 난이도마다 하나씩 있고, 오늘, 주간, 전체 탭이 있어요. 포켓몬별로 필터링하거나 친구만 볼 수 있어요. 오늘과 주간은 브라질리아 시간 자정에 초기화돼요.' },
          {
            pt: 'Com uma conta, cada partida entra no ranking sozinha, e o resumo do fim mostra sua posição do dia, da semana e geral. Sem internet, ela entra quando a conexão voltar.',
            en: 'With an account, every run joins the ranking on its own, and the results screen shows where you stand today, this week and all time. Offline, it joins once you are back online.',
            es: 'Con una cuenta, cada partida entra sola en el ranking, y el resumen del final muestra tu posición del día, de la semana y general. Sin internet, entra cuando vuelva la conexión.',
          ko: '계정이 있으면 모든 판이 자동으로 랭킹에 올라가고, 결과 화면에 오늘, 이번 주, 전체 순위가 표시돼요. 오프라인이면 다시 연결될 때 올라가요.' },
          {
            pt: 'Perfil público: escolha um nome e um nome de usuário e compartilhe o link. Ele mostra seu título, os recordes de cada dificuldade, a Pokédex e as partidas recentes. Siga outros treinadores para montar o ranking dos amigos.',
            en: 'Public profiles: pick a name and a username and share the link. It shows your title, your records on each difficulty, your Pokédex and your recent runs. Follow other trainers to build your friends ranking.',
            es: 'Perfil público: elige un nombre y un nombre de usuario y comparte el enlace. Muestra tu título, los récords de cada dificultad, la Pokédex y las partidas recientes. Sigue a otros entrenadores para armar el ranking de amigos.',
          ko: '공개 프로필: 이름과 사용자 이름을 정하고 링크를 공유하세요. 칭호, 난이도별 기록, 도감, 최근 판이 표시돼요. 다른 트레이너를 팔로우해서 친구 랭킹을 만들어 보세요.' },
        ],
      },
      {
        title: {
          pt: 'Dificuldades e um fim de partida que volta a assustar',
          en: 'Difficulty levels and an endgame that bites again',
          es: 'Dificultades y un final de partida que vuelve a asustar',
        ko: '난이도, 그리고 다시 무서워진 후반전' },
        notes: [
          {
            pt: 'Três níveis na tela de seleção do Pokémon: Normal, Difícil e Pesadelo. Todos já vêm liberados e a escolha fica salva. O Difícil traz hordas bem mais duras, que batem mais forte. O Pesadelo vai além e corta toda a cura pela metade.',
            en: 'Three levels on the Pokémon select screen: Normal, Hard and Nightmare. All of them are open from the start and your pick is saved. Hard brings much tougher hordes that hit harder. Nightmare goes further and halves every heal.',
            es: 'Tres niveles en la pantalla de selección de Pokémon: Normal, Difícil y Pesadilla. Todos vienen desbloqueados y la elección queda guardada. Difícil trae hordas mucho más duras, que pegan más fuerte. Pesadilla va más allá y reduce toda la curación a la mitad.',
          ko: '포켓몬 선택 화면에 노말, 하드, 나이트메어 세 가지 난이도가 생겼어요. 처음부터 모두 열려 있고, 고른 난이도는 저장돼요. 하드에서는 훨씬 단단하고 더 세게 때리는 무리가 나와요. 나이트메어는 한술 더 떠서 모든 회복량이 절반이 돼요.' },
          {
            pt: 'A dificuldade aparece na pausa e no resumo do fim da partida, e cada partida guarda a sua para o ranking que vem aí.',
            en: 'The difficulty shows in the pause menu and on the results screen, and every run keeps its own for the upcoming ranking.',
            es: 'La dificultad aparece en la pausa y en el resumen del final de la partida, y cada partida guarda la suya para el ranking que viene.',
          ko: '난이도는 일시정지 메뉴와 결과 화면에 표시되고, 곧 나올 랭킹을 위해 판마다 난이도가 기록돼요.' },
          {
            pt: 'No Normal, os últimos minutos voltaram a ser uma ameaça. A partir de 8:00 os inimigos ganham HP mais rápido e, de 10:00 em diante, aparecem mais deles. Antes, um time pronto limpava a tela antes de qualquer inimigo encostar.',
            en: 'On Normal, the last minutes are a threat again. From 8:00 enemies gain HP faster, and from 10:00 more of them show up. Before, a finished build cleared the screen before anything could touch you.',
            es: 'En Normal, los últimos minutos vuelven a ser una amenaza. A partir de las 8:00 los enemigos ganan HP más rápido y, de las 10:00 en adelante, aparecen más. Antes, un equipo armado limpiaba la pantalla antes de que cualquier enemigo te tocara.',
          ko: '노말에서 마지막 몇 분이 다시 위협적으로 바뀌었어요. 8:00부터 적의 HP가 더 빨리 늘고, 10:00부터는 더 많이 나와요. 예전에는 빌드가 완성되면 적이 닿기도 전에 화면이 정리됐어요.' },
        ],
      },
      {
        title: { pt: 'Contas: seu progresso na nuvem', en: 'Accounts: your progress in the cloud', es: 'Cuentas: tu progreso en la nube' , ko: '계정: 클라우드에 저장되는 진행 상황' },
        notes: [
          {
            pt: 'Entre com o Google pelo botão no canto da tela inicial para guardar o progresso na nuvem e continuar em qualquer aparelho. Jogar como convidado continua sendo o padrão, e nada muda para quem não entrar.',
            en: 'Sign in with Google from the button in the corner of the title screen to keep your progress in the cloud and pick it up on any device. Playing as a guest is still the default, and nothing changes if you don\'t sign in.',
            es: 'Entra con Google desde el botón en la esquina de la pantalla de inicio para guardar tu progreso en la nube y seguir en cualquier dispositivo. Jugar como invitado sigue siendo lo predeterminado, y nada cambia para quien no entre.',
          ko: '타이틀 화면 구석의 버튼으로 Google 로그인을 하면 진행 상황이 클라우드에 저장되어 어느 기기에서든 이어서 할 수 있어요. 기본은 여전히 게스트 플레이이고, 로그인하지 않아도 달라지는 건 없어요.' },
          {
            pt: 'Ao entrar, o que você conquistou como convidado vai junto: a Pokédex, os ovos, os Pokémon chocados e as conquistas se somam aos da conta, e cada melhoria, recorde e missão fica com o maior valor.',
            en: 'When you sign in, everything you got as a guest comes along: the Pokédex, eggs, hatched Pokémon and achievements join the account\'s, and every upgrade, record and mission keeps the higher value.',
            es: 'Al entrar, lo que conseguiste como invitado se va contigo: la Pokédex, los huevos, los Pokémon eclosionados y los logros se suman a los de la cuenta, y cada mejora, récord y misión se queda con el valor más alto.',
          ko: '로그인하면 게스트로 얻은 것도 모두 함께 가요. 도감, 알, 부화한 포켓몬, 업적은 계정의 것과 합쳐지고, 강화, 기록, 미션은 더 높은 값이 남아요.' },
          {
            pt: 'O progresso sincroniza no fim de cada partida. Sem internet, o jogo segue normal e sincroniza depois.',
            en: 'Progress syncs at the end of every run. Offline, the game plays as usual and syncs later.',
            es: 'El progreso se sincroniza al final de cada partida. Sin internet, el juego sigue normal y sincroniza después.',
          ko: '진행 상황은 판이 끝날 때마다 동기화돼요. 오프라인에서도 평소처럼 플레이하고 나중에 동기화해요.' },
        ],
      },
      {
        title: {
          pt: 'Um especial para cada tipo e números de dano legíveis',
          en: 'A special for every type and readable damage numbers',
          es: 'Un especial para cada tipo y números de daño legibles',
        ko: '타입마다 다른 필살기와 읽기 쉬운 데미지 숫자' },
        notes: [
          {
            pt: 'Os 18 tipos agora têm o seu ataque especial, que fica mais forte na evolução final: Thunderbolt → Bolt Strike, Dragon Pulse → Draco Meteor, Shadow Ball → Astral Barrage, Bulldoze → Precipice Blades, Air Cutter → Aeroblast e mais. Raios do céu, chuvas de meteoros e de gelo, anéis de projéteis, muralhas que avançam e rastros de veneno, cada um com a cor e o efeito do tipo.',
            en: 'All 18 types now have their own special attack, which grows stronger at the final evolution: Thunderbolt → Bolt Strike, Dragon Pulse → Draco Meteor, Shadow Ball → Astral Barrage, Bulldoze → Precipice Blades, Air Cutter → Aeroblast and more. Bolts from the sky, meteor and icicle showers, rings of projectiles, sweeping walls and poison trails, each with its type\'s color and effect.',
            es: 'Los 18 tipos ahora tienen su ataque especial, que se vuelve más fuerte en la evolución final: Thunderbolt → Bolt Strike, Dragon Pulse → Draco Meteor, Shadow Ball → Astral Barrage, Bulldoze → Precipice Blades, Air Cutter → Aeroblast y más. Rayos del cielo, lluvias de meteoros y de hielo, anillos de proyectiles, murallas que avanzan y estelas de veneno, cada uno con el color y el efecto de su tipo.',
          ko: '이제 18개 타입 모두에 고유한 필살기가 있고, 최종 진화형에서 더 강해져요: 10만볼트 → 뇌격, 용의파동 → 용성군, 섀도볼 → 아스트랄비트, 땅고르기 → 단애의칼, 에어커터 → 에어로블라스트 등. 하늘에서 떨어지는 번개, 유성과 고드름 비, 투사체 고리, 밀려오는 벽, 독의 자취까지, 저마다 타입의 색과 효과를 가지고 있어요.' },
          {
            pt: 'Os Pokémon dos ovos usam o especial do primeiro tipo deles. O Guia lista os 18 e quem usa cada um.',
            en: 'Egg Pokémon use their first type\'s special. The guide lists all 18 and who uses each one.',
            es: 'Los Pokémon de los huevos usan el especial de su primer tipo. La Guía lista los 18 y quién usa cada uno.',
          ko: '알 포켓몬은 첫 번째 타입의 필살기를 써요. 가이드에서 18개 필살기와 각각을 쓰는 포켓몬을 볼 수 있어요.' },
          {
            pt: 'Números de dano num mesmo alvo se somam num número que cresce, com no máximo três por alvo em posições fixas. Chefes sob muitos golpes não viram mais uma tira ilegível, e os acertos super efetivos continuam em amarelo e por cima.',
            en: 'Damage numbers on the same target add up into one growing number, at most three per target in fixed spots. Bosses under many moves no longer turn into an unreadable strip, and super-effective hits stay yellow and on top.',
            es: 'Los números de daño sobre un mismo objetivo se suman en un número que crece, con un máximo de tres por objetivo en posiciones fijas. Los jefes bajo muchos golpes ya no se vuelven una tira ilegible, y los golpes supereficaces siguen en amarillo y por encima.',
          ko: '같은 대상에 뜨는 데미지 숫자는 하나로 합쳐져 커지고, 대상마다 최대 3개까지 정해진 자리에 표시돼요. 여러 기술을 맞는 보스 위에 숫자가 읽을 수 없는 띠처럼 쌓이지 않고, 효과가 굉장한 공격은 여전히 노란색으로 맨 위에 보여요.' },
        ],
      },
      {
        title: { pt: 'Aviso de captura só na primeira vez', en: 'Catch notice only the first time', es: 'Aviso de captura solo la primera vez' , ko: '포획 알림은 처음 한 번만' },
        notes: [
          {
            pt: 'Derrotar um shiny de uma espécie que já é sua não mostra mais o aviso de captura. Ele aparece só quando o shiny é novo na sua Pokédex.',
            en: 'Defeating a shiny of a species you already own no longer shows the catch notice. It only shows when the shiny is new to your Pokédex.',
            es: 'Derrotar a un shiny de una especie que ya es tuya ya no muestra el aviso de captura. Solo aparece cuando el shiny es nuevo en tu Pokédex.',
          ko: '이미 가진 종의 이로치를 쓰러뜨리면 더 이상 포획 알림이 뜨지 않아요. 도감에 새로 등록되는 이로치일 때만 떠요.' },
        ],
      },
      {
        title: { pt: 'Ovos, Pokédex e missões juntos', en: 'Eggs, Pokédex and missions together', es: 'Huevos, Pokédex y misiones juntos' , ko: '알, 도감, 미션이 하나로' },
        notes: [
          {
            pt: 'O Pokémon que sai de um ovo entra na Pokédex como capturado, shiny se for o caso, e a linha evolutiva inteira dele conta como vista. Cada forma que você joga, inclusive as que alcança evoluindo, também conta como sua.',
            en: 'The Pokémon that comes out of an egg joins the Pokédex as caught, shiny if it is, and its whole evolution line counts as seen. Every form you play, the ones you evolve into included, counts as yours too.',
            es: 'El Pokémon que sale de un huevo entra en la Pokédex como atrapado, shiny si es el caso, y toda su línea evolutiva cuenta como vista. Cada forma que juegas, incluidas las que alcanzas evolucionando, también cuenta como tuya.',
          ko: '알에서 나온 포켓몬은 도감에 잡은 포켓몬으로 등록되고(이로치라면 이로치로), 진화 계열 전체가 본 포켓몬으로 기록돼요. 플레이한 모든 모습도 진화해서 도달한 모습까지 포함해 내 것으로 기록돼요.' },
          {
            pt: 'Quatro conquistas novas: veja 100 espécies, capture todas as formas dos 27 iniciais, choque o primeiro ovo e choque um shiny. Agora são 53.',
            en: 'Four new achievements: see 100 species, catch every form of the 27 starters, hatch your first egg and hatch a shiny. There are 53 now.',
            es: 'Cuatro logros nuevos: ve 100 especies, atrapa todas las formas de los 27 iniciales, eclosiona tu primer huevo y eclosiona un shiny. Ahora son 53.',
          ko: '새 업적 4개: 100종 보기, 스타팅 포켓몬 27마리의 모든 모습 잡기, 첫 알 부화시키기, 이로치 부화시키기. 이제 업적은 53개예요.' },
          {
            pt: 'Missões novas de andar, de ver espécies diferentes numa partida e de chocar ovos. Algumas semanais e toda medalha de ouro também dão um ovo, sem passar das 3 vagas da incubadora nem do limite de ovos por partida.',
            en: 'New missions to walk, to see different species in one run and to hatch eggs. Some weeklies and every gold medal also give an egg, within the incubator\'s 3 slots and the per-run egg limit.',
            es: 'Misiones nuevas de caminar, de ver especies distintas en una partida y de eclosionar huevos. Algunas semanales y todas las medallas de oro también dan un huevo, sin pasar de los 3 espacios de la incubadora ni del límite de huevos por partida.',
          ko: '걷기, 한 판에서 여러 종 보기, 알 부화시키기 미션이 새로 생겼어요. 일부 주간 미션과 모든 금 메달은 알도 줘요. 단, 부화기의 3칸과 판당 알 한도를 넘지는 않아요.' },
          {
            pt: 'O resultado da partida ficou mais enxuto: Pokédex, ovos e missões num bloco só, que cabe no celular em pé.',
            en: 'A tidier run result: Pokédex, eggs and missions in one block that fits a phone held upright.',
            es: 'El resultado de la partida quedó más compacto: Pokédex, huevos y misiones en un solo bloque, que cabe en el celular en vertical.',
          ko: '판 결과가 깔끔해졌어요. 도감, 알, 미션이 한 블록에 모여 세로로 든 휴대폰에도 들어가요.' },
          {
            pt: 'No computador, as abas de região da escolha de Pokémon quebram em duas linhas, então Paldea e a aba Ovos ficam sempre à vista.',
            en: 'On a computer, the region tabs of the Pokémon select wrap onto two lines, so Paldea and the Eggs tab are always in sight.',
            es: 'En la computadora, las pestañas de región de la selección de Pokémon se dividen en dos líneas, así que Paldea y la pestaña Huevos siempre quedan a la vista.',
          ko: '컴퓨터에서 포켓몬 선택의 지방 탭이 두 줄로 나뉘어, 팔데아와 알 탭이 항상 보여요.' },
          {
            pt: 'O Guia agora diz certo: os lendários das fendas podem ser shiny (1 em 8). Chefes do mapa, Mewtwo e Arceus nunca são.',
            en: 'The guide now gets it right: rift legendaries can be shiny (1 in 8). Map bosses, Mewtwo and Arceus never are.',
            es: 'La Guía ahora lo dice bien: los legendarios de las grietas pueden ser shiny (1 en 8). Los jefes del mapa, Mewtwo y Arceus nunca lo son.',
          ko: '가이드 내용을 바로잡았어요. 균열의 전설의 포켓몬은 이로치일 수 있어요(1/8). 맵 보스, 뮤츠, 아르세우스는 절대 이로치로 나오지 않아요.' },
        ],
      },
      {
        title: { pt: 'Missões, conquistas e títulos', en: 'Missions, achievements and titles', es: 'Misiones, logros y títulos' , ko: '미션, 업적, 칭호' },
        notes: [
          {
            pt: 'Missões no menu do título: três diárias e duas semanais, iguais para todo mundo no mesmo dia, com recompensa em Poké Dollars. Derrote Pokémon de um tipo ou na chuva, vença fendas, abra baús, pegue o Pay Day do Meowth e mais.',
            en: 'Missions in the title menu: three daily and two weekly ones, the same for everyone on the same day, paid in Poké Dollars. Defeat Pokémon of a type or in the rain, win rifts, open chests, grab Meowth\'s Pay Day and more.',
            es: 'Misiones en el menú del título: tres diarias y dos semanales, iguales para todo el mundo el mismo día, con recompensa en Poké Dollars. Derrota Pokémon de un tipo o bajo la lluvia, gana grietas, abre cofres, recoge el Pay Day de Meowth y más.',
          ko: '타이틀 메뉴에 미션이 생겼어요. 일일 미션 3개와 주간 미션 2개로, 같은 날에는 모두에게 똑같고 보상은 돈(₽)으로 받아요. 특정 타입의 포켓몬이나 비가 올 때 포켓몬 쓰러뜨리기, 균열에서 승리하기, 상자 열기, 나옹의 고양이돈받기 줍기 등이 있어요.' },
          {
            pt: '49 conquistas com medalhas de bronze, prata e ouro, de jogar a primeira partida a derrotar o Arceus. Cada medalha paga Poké Dollars.',
            en: '49 achievements with bronze, silver and gold medals, from playing your first run to defeating Arceus. Every medal pays Poké Dollars.',
            es: '49 logros con medallas de bronce, plata y oro, desde jugar tu primera partida hasta derrotar a Arceus. Cada medalla paga Poké Dollars.',
          ko: '첫 판 플레이부터 아르세우스 쓰러뜨리기까지, 동·은·금 메달이 있는 업적 49개가 생겼어요. 메달마다 돈(₽)을 받아요.' },
          {
            pt: 'Algumas conquistas dão um título, como Caçador de Shinies ou Domador de Lendas, que aparece na tela de título e no resultado da partida.',
            en: 'Some achievements grant a title, like Shiny Hunter or Legend Tamer, shown on the title screen and on the run results.',
            es: 'Algunos logros dan un título, como Cazador de Shinies o Domador de Leyendas, que aparece en la pantalla de título y en el resultado de la partida.',
          ko: '일부 업적은 이로치 헌터나 전설의 조련사 같은 칭호를 주고, 칭호는 타이틀 화면과 판 결과에 표시돼요.' },
          {
            pt: 'O resultado da partida mostra o progresso de cada missão e as medalhas novas. Durante a partida, nada de avisos extras.',
            en: 'The run results show every mission\'s progress and the new medals. No extra pop-ups during the run.',
            es: 'El resultado de la partida muestra el progreso de cada misión y las medallas nuevas. Durante la partida, nada de avisos extra.',
          ko: '판 결과에 각 미션의 진행도와 새 메달이 표시돼요. 판 도중에는 추가 알림이 뜨지 않아요.' },
        ],
      },
    ],
  },
  {
    date: '2026-10-13',
    title: { pt: 'Lançamento', en: 'Launch', es: 'Lanzamiento' , ko: "첫 공개" },
    highlights: [
      { pt: 'Sobreviva 15 minutos de hordas com os 27 iniciais, de Kanto a Paldea.', en: 'Survive 15 minutes of hordes with all 27 starters, from Kanto to Paldea.', es: 'Sobrevive 15 minutos de hordas con los 27 iniciales, de Kanto a Paldea.' , ko: "관동부터 팔데아까지 스타터 27마리로 15분간 무리를 버텨 보세요." },
      { pt: 'Ovos com 25 Pokémon novos para jogar e uma Pokédex dentro do jogo.', en: 'Eggs with 25 new Pokémon to play and an in-game Pokédex.', es: 'Huevos con 25 Pokémon nuevos para jugar y una Pokédex dentro del juego.' , ko: "플레이 가능한 포켓몬 25종이 알에서 태어나며 게임 속 도감을 추가했어요." },
      { pt: 'Fendas lendárias, modo sem fim e o Arceus caçando você.', en: 'Legendary rifts, endless mode and Arceus hunting you down.', es: 'Grietas legendarias, modo sin fin y Arceus cazándote.' , ko: "전설의 균열·무한 모드·플레이어를 추적하는 아르세우스를 추가했어요." },
      { pt: 'Cinco biomas com clima, shinies e chefes lendários.', en: 'Five biomes with weather, shinies and legendary bosses.', es: 'Cinco biomas con clima, shinies y jefes legendarios.' , ko: "날씨가 변하는 다섯 지역, 이로치와 전설 보스를 만나 보세요." },
      { pt: 'Poké Mart, evolução de golpes e versão para celular.', en: 'The Poké Mart, move evolutions and a mobile version.', es: 'Poké Mart, evolución de movimientos y versión para celular.' , ko: "프렌들리숍·기술 진화·모바일 버전을 추가했어요." },
    ],
    changes: [
      {
        title: { pt: 'Ovos e 25 Pokémon novos para jogar', en: 'Eggs and 25 new Pokémon to play', es: 'Huevos y 25 Pokémon nuevos para jugar' , ko: '알, 그리고 새로 플레이할 수 있는 포켓몬 25마리' },
        notes: [
          {
            pt: 'Chefes, baús trancados e fendas às vezes deixam um ovo. Ele vai para a incubadora (3 vagas) e choca com os passos que você dá nas partidas.',
            en: 'Bosses, locked chests and rifts sometimes leave an egg. It goes to the incubator (3 slots) and hatches with the steps you take in runs.',
            es: 'Los jefes, los cofres cerrados y las grietas a veces dejan un huevo. Va a la incubadora (3 espacios) y eclosiona con los pasos que das en las partidas.',
          ko: '보스, 잠긴 상자, 균열에서 가끔 알이 나와요. 알은 부화기(3칸)에 들어가고, 판에서 걷는 걸음 수만큼 부화에 가까워져요.' },
          {
            pt: '25 famílias jogáveis saem dos ovos, de todos os tipos e gerações: de Pichu, Eevee e Machop a Gastly, Riolu e Zorua, e os raros Dratini, Larvitar, Beldum, Gible e Dreepy. Cada uma com golpe, especial e evolução no meio da partida.',
            en: '25 playable families hatch from eggs, from every type and generation: from Pichu, Eevee and Machop to Gastly, Riolu and Zorua, plus the rare Dratini, Larvitar, Beldum, Gible and Dreepy. Each one with its own move, special and mid-run evolution.',
            es: '25 familias jugables salen de los huevos, de todos los tipos y generaciones: de Pichu, Eevee y Machop a Gastly, Riolu y Zorua, y los raros Dratini, Larvitar, Beldum, Gible y Dreepy. Cada una con movimiento, especial y evolución a mitad de la partida.',
          ko: '모든 타입과 세대에 걸친 플레이 가능한 계열 25개가 알에서 부화해요. 피츄, 이브이, 알통몬부터 고오스, 리오르, 조로아, 그리고 희귀한 미뇽, 애버라스, 메탕, 딥상어동, 드라꼰까지요. 계열마다 고유한 기술, 필살기, 판 도중 진화가 있어요.' },
          {
            pt: 'Chocar é um momento: o ovo balança, racha e o Pokémon aparece com o seu grito. 1% de chance de sair shiny, e aí ele é shiny em todas as partidas.',
            en: 'Hatching is a moment: the egg wobbles, cracks and the Pokémon pops out with its cry. A 1% chance to hatch shiny, and then it stays shiny in every run.',
            es: 'Eclosionar es todo un momento: el huevo se balancea, se agrieta y el Pokémon aparece con su grito. 1% de probabilidad de salir shiny, y entonces es shiny en todas las partidas.',
          ko: '부화는 특별한 순간이에요. 알이 흔들리고 금이 가더니 포켓몬이 울음소리와 함께 튀어나와요. 1% 확률로 이로치가 부화하고, 그러면 모든 판에서 이로치로 플레이해요.' },
          {
            pt: 'A escolha de parceiro ganhou a aba Ovos, com os chocados e as silhuetas dos que faltam. Repetidos e ovos sem vaga viram Poké Dollars.',
            en: 'The Pokémon select has a new Eggs tab with your hatchlings and silhouettes of the rest. Duplicates and eggs with no room become Poké Dollars.',
            es: 'La selección de compañero ahora tiene la pestaña Huevos, con los eclosionados y las siluetas de los que faltan. Los repetidos y los huevos sin espacio se convierten en Poké Dollars.',
          ko: '포켓몬 선택에 알 탭이 생겨, 부화한 포켓몬과 아직 남은 포켓몬의 실루엣이 보여요. 중복된 포켓몬과 자리가 없는 알은 돈(₽)으로 바뀌어요.' },
        ],
      },
      {
        title: { pt: 'Pokédex dentro do jogo', en: 'An in-game Pokédex', es: 'Pokédex dentro del juego' , ko: '게임 내 도감' },
        notes: [
          {
            pt: 'O botão Pokédex do título agora abre a Pokédex do jogo: todas as espécies, com as que você viu, quantas derrotou e quais capturou. As que faltam aparecem como "?".',
            en: 'The Pokédex button on the title now opens the in-game Pokédex: every species, with the ones you have seen, how many you defeated and which you caught. Missing ones show as "?".',
            es: 'El botón Pokédex del título ahora abre la Pokédex del juego: todas las especies, con las que viste, cuántas derrotaste y cuáles atrapaste. Las que faltan aparecen como "?".',
          ko: '타이틀 화면의 도감 버튼이 이제 게임 내 도감을 열어요. 모든 종과 함께 본 포켓몬, 쓰러뜨린 수, 잡은 포켓몬이 표시되고, 아직 못 본 포켓몬은 "?"로 보여요.' },
          {
            pt: 'Shiny derrotado vira seu: ele entra na Pokédex como capturado, com o brilho.',
            en: 'A defeated shiny is yours: it joins the Pokédex as caught, sparkle and all.',
            es: 'Un shiny derrotado es tuyo: entra en la Pokédex como atrapado, con su brillo.',
          ko: '쓰러뜨린 이로치는 내 것이 돼요. 반짝임까지 그대로 도감에 잡은 포켓몬으로 등록돼요.' },
          {
            pt: 'O fim da partida mostra o que entrou de novo, como "+3 espécies novas · 1 shiny capturado".',
            en: 'The end of a run shows what is new, like "+3 new species · 1 shiny caught".',
            es: 'El final de la partida muestra lo que entró de nuevo, como "+3 especies nuevas · 1 shiny atrapado".',
          ko: '판이 끝나면 "+3 새로운 종 · 이로치 1마리 포획"처럼 새로 등록된 것을 보여 줘요.' },
        ],
      },
      {
        title: { pt: 'Avisos em fila e 3 fendas por partida', en: 'Queued notices and 3 rifts per run', es: 'Avisos en fila y 3 grietas por partida' , ko: '차례로 뜨는 알림과 판마다 균열 3개' },
        notes: [
          {
            pt: 'Os avisos agora fazem fila numa coluna, sem cobrir um ao outro, o HUD ou o seu Pokémon. Eles esperam o menu de nível e a evolução terminarem, então nenhum se perde. No celular deitado, eles ficam no canto direito.',
            en: 'Notices now line up in a column, without covering each other, the HUD or your Pokémon. They wait for the level-up menu and evolutions to finish, so none get lost. On a phone held sideways, they sit on the right.',
            es: 'Los avisos ahora hacen fila en una columna, sin taparse entre sí ni tapar el HUD o tu Pokémon. Esperan a que terminen el menú de nivel y la evolución, así que ninguno se pierde. En el celular en horizontal, quedan en la esquina derecha.',
          ko: '이제 알림이 서로나 HUD, 포켓몬을 가리지 않고 한 줄로 쌓여요. 레벨업 메뉴와 진화가 끝날 때까지 기다리기 때문에 놓치는 알림이 없어요. 휴대폰을 가로로 들면 오른쪽에 표시돼요.' },
          {
            pt: 'A fenda lendária espera um chefe vivo cair por até 45 segundos e depois abre mesmo assim. Toda partida tem 3 fendas, mesmo quando os chefes demoram.',
            en: 'A legendary rift waits up to 45 seconds for a living boss to fall, then opens anyway. Every run gets 3 rifts, even when bosses take a while.',
            es: 'La grieta legendaria espera hasta 45 segundos a que caiga un jefe vivo y después se abre de todos modos. Cada partida tiene 3 grietas, aunque los jefes tarden.',
          ko: '전설의 균열은 살아 있는 보스가 쓰러지기를 최대 45초까지 기다렸다가, 그래도 쓰러지지 않으면 그냥 열려요. 보스전이 길어져도 판마다 균열이 3개 나와요.' },
          {
            pt: 'Ao sair de uma fenda, a troca de clima espera alguns segundos, para não chegar junto com o loot.',
            en: 'When you leave a rift, the weather waits a few seconds to change, so it doesn\'t arrive along with the loot.',
            es: 'Al salir de una grieta, el cambio de clima espera unos segundos, para no llegar junto con el botín.',
          ko: '균열에서 나오면 날씨는 몇 초 기다렸다가 바뀌어서, 전리품과 동시에 들이닥치지 않아요.' },
        ],
      },
      {
        title: { pt: 'Tudo junto: horda do bioma e Dragões', en: 'All together: biome hordes and Dragons', es: 'Todo junto: horda del bioma y Dragones' , ko: '모두 함께: 지역별 무리와 드래곤' },
        notes: [
          {
            pt: 'A horda segue o bioma: as espécies novas de cada fase puxam para os tipos do lugar (Planta e Inseto na floresta, Pedra e Terra na caverna, Fantasma e Psíquico na torre).',
            en: 'The horde follows the biome: each stage\'s new species lean towards the local types (Grass and Bug in the forest, Rock and Ground in the cave, Ghost and Psychic in the tower).',
            es: 'La horda sigue al bioma: las especies nuevas de cada fase tiran hacia los tipos del lugar (Planta y Bicho en el bosque, Roca y Tierra en la cueva, Fantasma y Psíquico en la torre).',
          ko: '무리가 지역을 따라가요. 단계마다 새로 나오는 종은 그 지역의 타입 위주예요(숲에서는 풀과 벌레, 동굴에서는 바위와 땅, 타워에서는 고스트와 에스퍼).' },
          {
            pt: 'O tipo Dragão chegou à horda com 15 espécies, de Dratini a Flygon. Dragões resistem a Fogo, Água, Planta e Elétrico e sofrem com Gelo, Dragão e Fada. A horda agora tem 193 espécies.',
            en: 'Dragon types join the horde with 15 species, from Dratini to Flygon. Dragons resist Fire, Water, Grass and Electric and fall to Ice, Dragon and Fairy. The horde now has 193 species.',
            es: 'El tipo Dragón llegó a la horda con 15 especies, de Dratini a Flygon. Los Dragones resisten Fuego, Agua, Planta y Eléctrico y sufren con Hielo, Dragón y Hada. La horda ahora tiene 193 especies.',
          ko: '미뇽부터 플라이곤까지 드래곤 타입 15종이 무리에 합류했어요. 드래곤은 불꽃, 물, 풀, 전기에 강하고 얼음, 드래곤, 페어리에 약해요. 이제 무리는 193종이에요.' },
          {
            pt: 'Pokémon com comportamento entram no sorteio da partida, no máximo um por fase a partir de 1:00. Bronzor, Drifloon, Lokix e Vikavolt também ganharam um.',
            en: 'Pokémon with a behavior join each run\'s draw, at most one per stage from 1:00. Bronzor, Drifloon, Lokix and Vikavolt got one too.',
            es: 'Los Pokémon con comportamiento entran en el sorteo de la partida, como máximo uno por fase a partir de 1:00. Bronzor, Drifloon, Lokix y Vikavolt también recibieron uno.',
          ko: '특수 행동을 하는 포켓몬도 판마다 뽑기에 들어가요. 1:00부터 단계마다 최대 한 종이에요. 동미러, 흔들풍손, 엑스레그, 투구뿌논에게도 특수 행동이 생겼어요.' },
          {
            pt: 'Dentro de uma fenda o clima e a troca de bioma esperam lá fora, e os lendários das fendas e o Arceus carregam em segundo plano.',
            en: 'Inside a rift, the weather and the biome change wait outside, and the rift legendaries and Arceus load in the background.',
            es: 'Dentro de una grieta, el clima y el cambio de bioma esperan afuera, y los legendarios de las grietas y Arceus cargan en segundo plano.',
          ko: '균열 안에 있는 동안 날씨와 지역 변경은 바깥에서 기다리고, 균열의 전설의 포켓몬과 아르세우스는 백그라운드에서 불러와요.' },
        ],
      },
      {
        title: { pt: 'Horda de todas as gerações', en: 'A horde from every generation', es: 'Una horda de todas las generaciones' , ko: '모든 세대가 모인 무리' },
        notes: [
          {
            pt: '171 Pokémon selvagens das 9 gerações. Cada partida sorteia o seu elenco, com poucas espécies novas por fase.',
            en: '171 wild Pokémon from all 9 generations. Every run draws its own cast, with only a few new species per stage.',
            es: '171 Pokémon salvajes de las 9 generaciones. Cada partida sortea su elenco, con pocas especies nuevas por fase.',
          ko: '9개 세대 전체에서 야생 포켓몬 171종이 나와요. 판마다 등장 포켓몬을 따로 뽑고, 단계마다 새로 나오는 종은 몇 종뿐이에요.' },
          {
            pt: 'Os inimigos são divididos em 5 faixas pelo total de status base: básicos no começo, evoluções no fim. Revoadas e cercos usam o elenco da partida.',
            en: 'Enemies are split into 5 tiers by base stat total: basic Pokémon early, evolved ones late. Swarms and rings use the run\'s cast.',
            es: 'Los enemigos se dividen en 5 rangos según el total de estadísticas base: básicos al principio, evoluciones al final. Las bandadas y los cercos usan el elenco de la partida.',
          ko: '적은 종족값 총합에 따라 5개 등급으로 나뉘어요. 초반에는 기본형, 후반에는 진화형이 나와요. 떼와 포위 공격도 그 판의 등장 포켓몬으로 이루어져요.' },
          {
            pt: 'A partida começa mais rápido: só o primeiro elenco é baixado antes, o resto chega em segundo plano.',
            en: 'Runs start faster: only the opening cast is downloaded up front, the rest streams in the background.',
            es: 'La partida empieza más rápido: solo el primer elenco se descarga antes, el resto llega en segundo plano.',
          ko: '판이 더 빨리 시작돼요. 처음 등장하는 포켓몬만 미리 내려받고, 나머지는 백그라운드에서 받아요.' },
          {
            pt: 'Pokédex com filtro por faixa e o Guia com a seção da horda selvagem.',
            en: 'A tier filter in the Pokédex and a wild horde section in the guide.',
            es: 'Pokédex con filtro por rango y la Guía con la sección de la horda salvaje.',
          ko: '도감에 등급 필터가, 가이드에 야생 무리 항목이 생겼어요.' },
        ],
      },
      {
        title: { pt: 'Fendas lendárias e modo sem fim', en: 'Legendary rifts and endless mode', es: 'Grietas legendarias y modo infinito' , ko: '전설의 균열과 무한 모드' },
        notes: [
          {
            pt: 'Algumas vezes por partida, uma fenda se abre no mapa. Entre nela para enfrentar Lugia, Ho-Oh, Kyogre, Groudon, Rayquaza ou Dialga numa arena fechada, com ataques próprios de cada lendário.',
            en: 'A few times per run, a rift opens on the map. Step in to face Lugia, Ho-Oh, Kyogre, Groudon, Rayquaza or Dialga in a walled arena, each with its own attacks.',
            es: 'Algunas veces por partida, una grieta se abre en el mapa. Entra en ella para enfrentar a Lugia, Ho-Oh, Kyogre, Groudon, Rayquaza o Dialga en una arena cerrada, con ataques propios de cada legendario.',
          ko: '판마다 몇 번씩 맵에 균열이 열려요. 들어가면 벽으로 막힌 아레나에서 루기아, 칠색조, 가이오가, 그란돈, 레쿠쟈, 디아루가 중 하나와 싸워요. 전설의 포켓몬마다 고유한 공격을 써요.' },
          {
            pt: 'Vencer paga muita EXP, Poké Dollars, Poké Balls, itens e cura. Às vezes o lendário é shiny e paga o dobro. Se o tempo acabar, a fenda colapsa e joga você de volta.',
            en: 'Winning pays lots of EXP, Poké Dollars, Poké Balls, items and a heal. Sometimes the legendary is shiny and pays double. If time runs out, the rift collapses and throws you back.',
            es: 'Ganar paga mucha EXP, Poké Dollars, Poké Balls, objetos y curación. A veces el legendario es shiny y paga el doble. Si se acaba el tiempo, la grieta colapsa y te devuelve afuera.',
          ko: '이기면 많은 EXP, 돈(₽), 몬스터볼, 도구, 회복을 얻어요. 가끔 이로치 전설의 포켓몬이 나오면 보상이 2배예요. 시간이 다 되면 균열이 무너지고 원래 세계로 튕겨 나와요.' },
          {
            pt: 'Depois de derrotar Mewtwo, continue no modo sem fim: a horda não para de crescer e Arceus vem caçar você às 20:00. Dá para derrotá-lo, se você for muito forte.',
            en: 'After beating Mewtwo, keep going in endless mode: the horde keeps growing and Arceus comes hunting at 20:00. It can be beaten, if you are strong enough.',
            es: 'Después de derrotar a Mewtwo, sigue en el modo infinito: la horda no deja de crecer y Arceus viene a cazarte a las 20:00. Se le puede derrotar, si eres muy fuerte.',
          ko: '뮤츠를 쓰러뜨린 뒤에는 무한 모드로 계속할 수 있어요. 무리는 끝없이 불어나고 20:00에는 아르세우스가 사냥하러 와요. 충분히 강하다면 쓰러뜨릴 수도 있어요.' },
          {
            pt: 'O tempo sobrevivido agora vale mais: cada minuto além de 15:00 rende Poké Dollars extras no fim da partida.',
            en: 'Time survived is worth more now: every minute past 15:00 pays extra Poké Dollars at the end of the run.',
            es: 'El tiempo sobrevivido ahora vale más: cada minuto después de las 15:00 da Poké Dollars extra al final de la partida.',
          ko: '이제 생존 시간의 가치가 커졌어요. 15:00을 넘긴 1분마다 판이 끝날 때 추가로 돈(₽)을 받아요.' },
        ],
      },
      {
        title: { pt: 'Biomas e clima', en: 'Biomes and weather', es: 'Biomas y clima' , ko: '지역과 날씨' },
        notes: [
          {
            pt: 'A partida agora atravessa cinco biomas: Rota 1, Floresta de Viridian, Monte Moon, Monte Prateado e Torre de Lavender, cada um com visual, itens quebráveis e música próprios.',
            en: 'A run now walks through five biomes: Route 1, Viridian Forest, Mt. Moon, Mt. Silver and Lavender Tower, each with its own look, breakables and music.',
            es: 'La partida ahora atraviesa cinco biomas: Ruta 1, Bosque Verde, Monte Moon, Monte Plateado y Torre Lavanda, cada uno con aspecto, objetos rompibles y música propios.',
          ko: '이제 판에서 1번도로, 상록숲, 달맞이산, 은빛산, 보라타워의 다섯 지역을 거쳐요. 지역마다 고유한 모습, 부술 수 있는 오브젝트, 음악이 있어요.' },
          {
            pt: 'Clima que muda durante a partida e vale para todos: sol forte (Fogo ×1,5, Água ×0,75), chuva (o inverso), tempestade de areia, neve e névoa.',
            en: 'Weather that changes during the run and applies to everyone: harsh sunlight (Fire ×1.5, Water ×0.75), rain (the opposite), sandstorm, snow and fog.',
            es: 'Clima que cambia durante la partida y vale para todos: sol intenso (Fuego ×1.5, Agua ×0.75), lluvia (al revés), tormenta de arena, nieve y niebla.',
          ko: '판 도중 날씨가 바뀌고 모두에게 적용돼요: 쾌청(불꽃 ×1.5, 물 ×0.75), 비(그 반대), 모래바람, 눈, 안개.' },
          {
            pt: 'Quatro temas novos na trilha sonora, um por bioma.',
            en: 'Four new soundtrack themes, one per biome.',
            es: 'Cuatro temas nuevos en la banda sonora, uno por bioma.',
          ko: '지역마다 하나씩, 새 배경 음악 테마 4곡.' },
        ],
      },
      {
        title: { pt: 'Inimigos com personalidade', en: 'Enemies with personality', es: 'Enemigos con personalidad' , ko: '개성 있는 적' },
        notes: [
          {
            pt: 'Seis comportamentos novos na horda: Chansey cura os aliados, Bronzong protege com um escudo que absorve dano, Nidoqueen chama Nidoran, Voltorb e Electrode explodem, Magnemite dispara raios e Hitmonlee salta sobre a horda.',
            en: 'Six new behaviors in the horde: Chansey heals its allies, Bronzong shields them with a ward that soaks damage, Nidoqueen calls in Nidoran, Voltorb and Electrode explode, Magnemite fires beams and Hitmonlee leaps over the horde.',
            es: 'Seis comportamientos nuevos en la horda: Chansey cura a sus aliados, Bronzong los protege con un escudo que absorbe daño, Nidoqueen llama a Nidoran, Voltorb y Electrode explotan, Magnemite dispara rayos y Hitmonlee salta sobre la horda.',
          ko: '무리에 새로운 행동 6가지가 생겼어요: 럭키는 아군을 회복시키고, 동탁군은 데미지를 흡수하는 방어막으로 아군을 지키고, 니드퀸은 니드런을 불러오고, 찌리리공과 붐볼은 폭발하고, 코일은 광선을 쏘고, 시라소몬은 무리 위로 뛰어올라요.' },
          {
            pt: 'Todo ataque avisa antes: círculo vermelho, linha ou sombra no chão, piscando mais rápido quando o golpe está perto. A explosão do Voltorb fere os inimigos também.',
            en: 'Every attack warns you first: a red circle, a line or a shadow on the ground, blinking faster as the hit gets close. Voltorb\'s blast hurts enemies too.',
            es: 'Todo ataque avisa antes: círculo rojo, línea o sombra en el suelo, que parpadea más rápido cuando el golpe está cerca. La explosión de Voltorb también hiere a los enemigos.',
          ko: '모든 공격은 미리 경고해요. 바닥에 빨간 원, 선, 그림자가 나타나고, 공격이 가까워질수록 더 빨리 깜빡여요. 찌리리공의 폭발은 적에게도 피해를 줘요.' },
          {
            pt: 'Um cerco de Voltorb aos 4:30 e uma seção nova no guia.',
            en: 'A ring of Voltorb at 4:30 and a new guide section.',
            es: 'Un cerco de Voltorb a las 4:30 y una sección nueva en la guía.',
          ko: '4:30에 찌리리공이 둘러싸는 포위 공격과 가이드의 새 항목.' },
        ],
      },
      {
        title: { pt: 'Eventos no mapa', en: 'Map events', es: 'Eventos en el mapa' , ko: '맵 이벤트' },
        notes: [
          {
            pt: 'Pontos de interesse surgem durante a partida e fazem você escolher para onde ir: altares de buff, fontes que curam e baús trancados que pedem 3 segundos dentro do anel enquanto uma emboscada fecha o cerco.',
            en: 'Points of interest show up during a run and make you choose where to go: buff altars, healing fountains and locked chests that need 3 seconds inside their ring while an ambush closes in.',
            es: 'Aparecen puntos de interés durante la partida que te hacen elegir adónde ir: altares de mejora, fuentes que curan y cofres cerrados que piden 3 segundos dentro del anillo mientras una emboscada cierra el cerco.',
          ko: '판 도중 관심 지점이 나타나서 어디로 갈지 고르게 해요: 버프를 주는 제단, 회복하는 샘, 그리고 기습이 조여 오는 동안 고리 안에서 3초를 버텨야 열리는 잠긴 상자.' },
          {
            pt: 'Armadilhas de espinhos e bombas ferem você e a horda: atraia os selvagens para cima delas.',
            en: 'Spike and bomb traps hurt you and the horde alike: lure the wild Pokémon onto them.',
            es: 'Las trampas de púas y las bombas te hieren a ti y a la horda: atrae a los salvajes hacia ellas.',
          ko: '가시 함정과 폭탄 함정은 나와 무리 모두에게 피해를 줘요. 야생 포켓몬을 그 위로 유인하세요.' },
          {
            pt: 'Um Meowth foge com moedas: cada golpe derruba uma, e se ele desmaiar vem o Pay Day.',
            en: 'A Meowth runs off with coins: every hit knocks one loose, and if it faints you get the Pay Day.',
            es: 'Un Meowth huye con monedas: cada golpe le hace soltar una, y si se debilita llega el Pay Day.',
          ko: '나옹이 코인을 들고 달아나요. 공격할 때마다 하나씩 떨어뜨리고, 기절시키면 고양이돈받기가 터져요.' },
          {
            pt: 'Setas na borda da tela apontam para os eventos importantes.',
            en: 'Arrows on the screen edge point to the important events.',
            es: 'Flechas en el borde de la pantalla apuntan a los eventos importantes.',
          ko: '화면 가장자리의 화살표가 중요한 이벤트를 가리켜요.' },
        ],
      },
      {
        title: {
          pt: 'Site: Pokédex, guia, novidades e página legal',
          en: 'Website: Pokédex, guide, changelog and legal page',
          es: 'Sitio: Pokédex, guía, novedades y página legal',
        ko: '사이트: 도감, 가이드, 업데이트 내역, 법적 고지' },
        notes: [
          {
            pt: 'Pokédex com todos os Pokémon do jogo, sprites animados, versão shiny, filtros por região, tipo e papel, e busca.',
            en: 'A Pokédex with every Pokémon in the game, animated sprites, shiny forms, region, type and role filters, and search.',
            es: 'Pokédex con todos los Pokémon del juego, sprites animados, versión shiny, filtros por región, tipo y rol, y búsqueda.',
          ko: '게임에 나오는 모든 포켓몬, 움직이는 스프라이트, 이로치 모습, 지방·타입·역할 필터, 검색 기능을 갖춘 도감.' },
          {
            pt: 'Guia completo de como jogar, com os números do próprio jogo.',
            en: 'A complete how-to-play guide, with the game\'s own numbers.',
            es: 'Guía completa de cómo jugar, con los números del propio juego.',
          ko: '게임의 실제 수치를 담은 완전한 플레이 가이드.' },
          {
            pt: 'Esta página de novidades e uma página de legal, privacidade e créditos.',
            en: 'This changelog and a legal, privacy and credits page.',
            es: 'Esta página de novedades y una página legal, de privacidad y de créditos.',
          ko: '이 업데이트 내역 페이지와 법적 고지, 개인정보, 크레딧 페이지.' },
        ],
      },
      {
        title: { pt: 'Nova tela de título', en: 'New title screen', es: 'Nueva pantalla de título' , ko: '새 타이틀 화면' },
        notes: [
          {
            pt: 'Tela de título com um campo vivo ao fundo, logo em pixel art e menu: Jogar, Pokédex, Como jogar e Ajustes.',
            en: 'A title screen with a living meadow behind it, a pixel-art logo and a menu: Play, Pokédex, How to play and Settings.',
            es: 'Pantalla de título con un campo vivo de fondo, logo en pixel art y menú: Jugar, Pokédex, Cómo jugar y Ajustes.',
          ko: '살아 움직이는 초원을 배경으로 픽셀 아트 로고와 메뉴(플레이, 도감, 플레이 방법, 설정)가 있는 타이틀 화면.' },
          {
            pt: 'Os menus agora funcionam no controle: D-pad ou analógico esquerdo para navegar, A confirma, B volta e Start pausa.',
            en: 'Menus now work on a gamepad: D-pad or left stick to navigate, A confirms, B goes back and Start pauses.',
            es: 'Los menús ahora funcionan con control: D-pad o stick izquierdo para navegar, A confirma, B vuelve y Start pausa.',
          ko: '이제 게임패드로 메뉴를 조작할 수 있어요. 방향 패드나 왼쪽 스틱으로 이동하고, A로 확인, B로 뒤로, Start로 일시정지해요.' },
        ],
      },
      {
        title: { pt: 'Trilha chiptune original e Ajustes', en: 'Original chiptune soundtrack and Settings', es: 'Banda sonora chiptune original y Ajustes' , ko: '오리지널 칩튠 배경 음악과 설정' },
        notes: [
          {
            pt: 'Trilha sonora original composta em código e sintetizada ao vivo: tema de vila nos menus, marcha na partida e tema de chefe.',
            en: 'An original soundtrack composed in code and synthesized live: a village theme in the menus, a march for the run and a boss theme.',
            es: 'Banda sonora original compuesta en código y sintetizada en vivo: tema de pueblo en los menús, marcha en la partida y tema de jefe.',
          ko: '코드로 작곡하고 실시간으로 합성하는 오리지널 배경 음악: 메뉴의 마을 테마, 판의 행진곡, 보스 테마.' },
          {
            pt: 'Tela de Ajustes, no título e na pausa: volume da música e dos efeitos, som, números de dano, tremor de tela e idioma.',
            en: 'A Settings screen, on the title screen and in the pause menu: music and effects volume, sound, damage numbers, screen shake and language.',
            es: 'Pantalla de Ajustes, en el título y en la pausa: volumen de la música y de los efectos, sonido, números de daño, vibración de pantalla e idioma.',
          ko: '타이틀 화면과 일시정지 메뉴에서 여는 설정 화면: 음악과 효과음 볼륨, 사운드, 데미지 표시, 화면 흔들림, 언어.' },
        ],
      },
      {
        title: {
          pt: 'Páginas em português e inglês para buscadores',
          en: 'Portuguese and English pages for search engines',
          es: 'Páginas en portugués e inglés para buscadores',
        ko: '검색 엔진을 위한 포르투갈어·영어 페이지' },
        notes: [
          {
            pt: 'Uma URL por idioma (/ e /en/), com descrição do jogo legível por buscadores e IAs.',
            en: 'One URL per language (/ and /en/), with a game description that search engines and AI assistants can read.',
            es: 'Una URL por idioma (/ y /en/), con una descripción del juego legible por buscadores e IA.',
          ko: '언어마다 URL 하나(/와 /en/), 그리고 검색 엔진과 AI 어시스턴트가 읽을 수 있는 게임 설명.' },
          {
            pt: 'Sitemap, robots.txt, llms.txt e dados estruturados.',
            en: 'Sitemap, robots.txt, llms.txt and structured data.',
            es: 'Sitemap, robots.txt, llms.txt y datos estructurados.',
          ko: '사이트맵, robots.txt, llms.txt, 구조화된 데이터.' },
        ],
      },
      {
        title: { pt: 'Inglês e português', en: 'English and Portuguese', es: 'Inglés y portugués' , ko: '영어와 포르투갈어' },
        notes: [
          {
            pt: 'O jogo inteiro em português e inglês: menus, HUD, golpes, itens e Poké Mart. Nomes de Pokémon, golpes e itens seguem os oficiais em inglês.',
            en: 'The whole game in English and Portuguese: menus, HUD, moves, items and the Poké Mart. Pokémon, move and item names keep their official English names.',
            es: 'Todo el juego en portugués e inglés: menús, HUD, movimientos, objetos y Poké Mart. Los nombres de Pokémon, movimientos y objetos siguen los oficiales en inglés.',
          ko: '메뉴, HUD, 기술, 도구, 프렌들리숍까지 게임 전체를 영어와 포르투갈어로 즐길 수 있어요. 포켓몬, 기술, 도구 이름은 공식 영어 이름을 따라요.' },
          {
            pt: 'O idioma vem do navegador e pode ser trocado no título (PT | EN ou tecla I) e na pausa.',
            en: 'The language follows your browser and can be switched on the title screen (PT | EN or the I key) and in the pause menu.',
            es: 'El idioma se toma del navegador y se puede cambiar en el título (PT | EN o tecla I) y en la pausa.',
          ko: '언어는 브라우저 설정을 따르고, 타이틀 화면(PT | EN 또는 I 키)과 일시정지 메뉴에서 바꿀 수 있어요.' },
        ],
      },
      {
        title: { pt: 'Código aberto', en: 'Open source', es: 'Código abierto' , ko: '오픈 소스' },
        notes: [
          {
            pt: 'O código está no GitHub sob a licença MIT, com créditos para cada artista dos sprites.',
            en: 'The code is on GitHub under the MIT license, with credit for every sprite artist.',
            es: 'El código está en GitHub bajo la licencia MIT, con créditos para cada artista de los sprites.',
          ko: '코드는 MIT 라이선스로 GitHub에 공개되어 있고, 스프라이트 아티스트 한 분 한 분의 크레딧을 표기해요.' },
          { pt: 'Avisos legais de fan game não oficial.', en: 'Legal notices for an unofficial fan game.', es: 'Avisos legales de fan game no oficial.' , ko: '비공식 팬 게임 법적 고지.' },
        ],
      },
      {
        title: { pt: 'Poké Dollars e Poké Mart', en: 'Poké Dollars and the Poké Mart', es: 'Poké Dollars y Poké Mart' , ko: '돈(₽)과 프렌들리숍' },
        notes: [
          {
            pt: 'Inimigos soltam Poké Dollars (₽), e chefes soltam uma chuva deles. No fim da partida entra um bônus por tempo, derrotados e vitória.',
            en: 'Enemies drop Poké Dollars (₽), and bosses shower them. A bonus for time, fainted foes and winning comes at the end of the run.',
            es: 'Los enemigos sueltan Poké Dollars (₽), y los jefes sueltan una lluvia de ellos. Al final de la partida entra un bono por tiempo, derrotados y victoria.',
          ko: '적은 돈(₽)을 떨어뜨리고, 보스는 돈을 비처럼 쏟아 내요. 판이 끝나면 시간, 쓰러뜨린 적, 승리에 따른 보너스가 들어와요.' },
          {
            pt: 'Poké Mart com melhorias permanentes: HP Up, Protein, Iron, Carbos, Calcium, Zinc, PP Up, Exp. Charm, Amulet Coin, Ability Capsule e Escape Rope.',
            en: 'A Poké Mart with permanent upgrades: HP Up, Protein, Iron, Carbos, Calcium, Zinc, PP Up, Exp. Charm, Amulet Coin, Ability Capsule and Escape Rope.',
            es: 'Poké Mart con mejoras permanentes: HP Up, Protein, Iron, Carbos, Calcium, Zinc, PP Up, Exp. Charm, Amulet Coin, Ability Capsule y Escape Rope.',
          ko: '영구 강화를 파는 프렌들리숍: 맥스업, 타우린, 사포닌, 알칼로이드, 리보플라빈, 키토산, 포인트업, 경험부적, 부적금화, 특성캡슐, 동굴탈출로프.' },
          { pt: 'Trocar e Pular ofertas ao subir de nível.', en: 'Reroll and Skip on level up.', es: 'Cambiar y Saltar ofertas al subir de nivel.' , ko: '레벨업 때 다시 뽑기와 건너뛰기.' },
        ],
      },
      {
        title: { pt: 'Evolução de golpes', en: 'Move evolutions', es: 'Evolución de movimientos' , ko: '기술 진화' },
        notes: [
          {
            pt: 'Golpe no nível máximo + o item certo = um golpe evoluído, como Ember + Charcoal → Flamethrower.',
            en: 'A maxed move plus the right item becomes an evolved move, like Ember + Charcoal → Flamethrower.',
            es: 'Movimiento en el nivel máximo + el objeto correcto = un movimiento evolucionado, como Ember + Charcoal → Flamethrower.',
          ko: '최대 레벨 기술에 짝이 되는 도구를 더하면 진화한 기술이 돼요. 예: 불꽃세례 + 목탄 → 화염방사.' },
          {
            pt: '10 evoluções e 7 itens de tipo novos (Charcoal, Mystic Water, Miracle Seed, Silk Scarf, Magnet, Poison Barb e Sharp Beak).',
            en: '10 evolutions and 7 new type items (Charcoal, Mystic Water, Miracle Seed, Silk Scarf, Magnet, Poison Barb and Sharp Beak).',
            es: '10 evoluciones y 7 objetos de tipo nuevos (Charcoal, Mystic Water, Miracle Seed, Silk Scarf, Magnet, Poison Barb y Sharp Beak).',
          ko: '기술 진화 10종과 새 타입 강화 도구 7종(목탄, 신비의물방울, 기적의씨, 실크스카프, 자석, 독바늘, 예리한부리).' },
        ],
      },
      {
        title: { pt: 'Shinies e chefes lendários', en: 'Shinies and legendary bosses', es: 'Shinies y jefes legendarios' , ko: '이로치와 전설의 보스' },
        notes: [
          {
            pt: 'Pokémon selvagens shiny (1 em 450) viram elites que soltam Poké Ball, e o seu inicial pode ser shiny (1 em 64).',
            en: 'Shiny wild Pokémon (1 in 450) become elites that drop a Poké Ball, and your starter can be shiny (1 in 64).',
            es: 'Los Pokémon salvajes shiny (1 en 450) se vuelven élites que sueltan una Poké Ball, y tu inicial puede ser shiny (1 en 64).',
          ko: '야생 이로치(1/450)는 몬스터볼을 떨어뜨리는 엘리트가 되고, 스타팅 포켓몬도 이로치로 나올 수 있어요(1/64).' },
          {
            pt: 'Articuno, Zapdos, Moltres e Mewtwo como chefes com ataques próprios. Às vezes Mew aparece no final.',
            en: 'Articuno, Zapdos, Moltres and Mewtwo as bosses with their own attacks. Sometimes Mew shows up at the end.',
            es: 'Articuno, Zapdos, Moltres y Mewtwo como jefes con ataques propios. A veces Mew aparece al final.',
          ko: '프리져, 썬더, 파이어, 뮤츠가 고유한 공격을 쓰는 보스로 등장해요. 가끔 마지막에 뮤가 나타나요.' },
        ],
      },
      {
        title: { pt: 'Os 27 iniciais', en: 'All 27 starters', es: 'Los 27 iniciales' , ko: '스타팅 포켓몬 27마리' },
        notes: [
          {
            pt: 'O trio inicial de todas as regiões, de Kanto a Paldea, com as 3 evoluções (Nv 12 e Nv 28), status e golpes próprios.',
            en: 'The starter trio of every region, Kanto to Paldea, with all 3 stages (Lv 12 and Lv 28), their own stats and moves.',
            es: 'El trío inicial de todas las regiones, de Kanto a Paldea, con las 3 evoluciones (Nv. 12 y Nv. 28), estadísticas y movimientos propios.',
          ko: '관동부터 팔데아까지 모든 지방의 스타팅 포켓몬 3마리가 3단계 진화(Lv 12와 Lv 28), 고유한 능력치와 기술을 갖추고 등장해요.' },
          {
            pt: '13 golpes novos e os tipos Aço, Sombrio e Fada.',
            en: '13 new moves and the Steel, Dark and Fairy types.',
            es: '13 movimientos nuevos y los tipos Acero, Siniestro y Hada.',
          ko: '새 기술 13개와 강철, 악, 페어리 타입.' },
          {
            pt: 'Nova escolha de inicial com abas por região e painel de inspeção.',
            en: 'A new starter select with region tabs and an inspect panel.',
            es: 'Nueva selección de inicial con pestañas por región y panel de inspección.',
          ko: '지방별 탭과 상세 정보 패널이 있는 새로운 스타팅 포켓몬 선택 화면.' },
        ],
      },
      {
        title: { pt: 'Itens no mapa', en: 'Map items', es: 'Objetos en el mapa' , ko: '맵 곳곳의 도구' },
        notes: [
          {
            pt: 'Item Balls, Berry Trees e mato alto pelo mapa. Quebre para pegar Potion, Rare Candy, Exp. Share, Poké Flute, Max Repel, Voltorb, X Attack, X Speed e Revive.',
            en: 'Item Balls, Berry Trees and tall grass around the map. Break them for Potions, Rare Candies, Exp. Share, the Poké Flute, Max Repel, Voltorb, X Attack, X Speed and Revive.',
            es: 'Item Balls, Berry Trees y hierba alta por el mapa. Rómpelos para conseguir Potion, Rare Candy, Exp. Share, Poké Flute, Max Repel, Voltorb, X Attack, X Speed y Revive.',
          ko: '맵 곳곳에 아이템볼, 나무열매 나무, 풀숲이 있어요. 부수면 상처약, 이상한사탕, 학습장치, 포켓몬피리, 골드스프레이, 찌리리공, 플러스파워, 스피드업, 기력의조각이 나와요.' },
        ],
      },
      {
        title: { pt: 'Condições de status', en: 'Status conditions', es: 'Problemas de estado' , ko: '상태 이상' },
        notes: [
          {
            pt: 'Queimadura, veneno e paralisia, como nos jogos. Novos itens King\'s Rock e Toxic Orb.',
            en: 'Burn, poison and paralysis, like on the handhelds. New held items: King\'s Rock and Toxic Orb.',
            es: "Quemadura, veneno y parálisis, como en los juegos. Nuevos objetos King's Rock y Toxic Orb.",
          ko: '본가 게임처럼 화상, 독, 마비가 있어요. 새 지닌 물건: 왕의징표석, 맹독구슬.' },
        ],
      },
      {
        title: { pt: 'Ataque especial', en: 'Special attack', es: 'Ataque especial' , ko: '필살기' },
        notes: [
          {
            pt: 'Um ataque manual com recarga (Espaço, botão na tela ou A / ✕ do controle): Flare Blitz, Hydro Pump e Grass Knot, que viram Blast Burn, Hydro Cannon e Frenzy Plant na evolução final.',
            en: 'A manual attack on a cooldown (Space, the on-screen button or the gamepad A / ✕): Flare Blitz, Hydro Pump and Grass Knot, which become Blast Burn, Hydro Cannon and Frenzy Plant at the final evolution.',
            es: 'Un ataque manual con recarga (Espacio, botón en pantalla o A / ✕ del control): Flare Blitz, Hydro Pump y Grass Knot, que se vuelven Blast Burn, Hydro Cannon y Frenzy Plant en la evolución final.',
          ko: '쿨타임이 있는 수동 공격(Space, 화면 버튼, 게임패드의 A / ✕): 플레어드라이브, 하이드로펌프, 풀묶기가 있고, 최종 진화형에서는 각각 블라스트번, 하이드로캐논, 하드플랜트가 돼요.' },
        ],
      },
      {
        title: { pt: 'Versão para celular', en: 'Mobile version', es: 'Versión para celular' , ko: '모바일 버전' },
        notes: [
          {
            pt: 'Joystick de toque flutuante, botão de pausa na tela e layout para retrato e paisagem.',
            en: 'A floating touch joystick, an on-screen pause button and layouts for portrait and landscape.',
            es: 'Joystick táctil flotante, botón de pausa en pantalla y diseño para vertical y horizontal.',
          ko: '어디서나 나타나는 터치 조이스틱, 화면 일시정지 버튼, 세로·가로 화면 레이아웃.' },
          { pt: 'Dá para instalar como app em tela cheia.', en: 'Installable as a fullscreen app.', es: 'Se puede instalar como app a pantalla completa.' , ko: '전체 화면 앱으로 설치할 수 있어요.' },
        ],
      },
      {
        title: { pt: 'Primeira versão', en: 'First release', es: 'Primera versión' , ko: '첫 버전' },
        notes: [
          {
            pt: 'Sobreviva 15 minutos de hordas com Charmander, Squirtle ou Bulbasaur: golpes automáticos, níveis, evolução no meio da partida e chefes.',
            en: 'Survive 15 minutes of hordes with Charmander, Squirtle or Bulbasaur: automatic moves, level ups, mid-run evolution and bosses.',
            es: 'Sobrevive 15 minutos de hordas con Charmander, Squirtle o Bulbasaur: movimientos automáticos, niveles, evolución a mitad de partida y jefes.',
          ko: '파이리, 꼬부기, 이상해씨 중 하나로 15분 동안 무리를 버텨 내세요. 자동 기술, 레벨업, 판 도중 진화, 보스까지 담았어요.' },
        ],
      },
    ],
  },
]
