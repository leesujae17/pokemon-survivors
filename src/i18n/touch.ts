import type { Locale } from '.'

/** The same touch controls are available alongside keyboard and gamepad input. */
export const TOUCH_CONTROLS = {
  ko: {
    title: '모바일', move: '이동', moveHint: '드래그해서 이동',
    intro: '키보드나 게임패드 없이 플레이할 수 있어요. 이동하면서 오른쪽 버튼을 함께 누를 수 있어요.',
    rows: [
      '화면 왼쪽을 누른 채 원하는 방향으로 드래그하세요. 일반 공격은 자동이에요.',
      '오른쪽 아래 필살기 버튼을 누르세요. 충전이 끝나면 다시 사용할 수 있어요.',
      '메가스톤을 얻으면 메가 버튼이 나타나요. 최종 진화 후 충전되면 누르세요.',
      '전광석화 같은 돌진 기술을 배우면 돌진 버튼이 나타나요.',
      '오른쪽 위 일시정지 버튼을 누르세요. 계속하기를 누르면 재개해요.',
      '화면의 카드나 선택지, 시작·확인 버튼을 터치하세요.',
      '화면의 뒤로·닫기 버튼을 터치하세요.',
    ],
    note: '설정의 조이스틱에서 손가락 따라감·고정을 고를 수 있어요. 메가진화와 돌진 버튼은 사용할 조건을 갖췄을 때 표시돼요.',
    hint: '화면 버튼으로 플레이할 수 있어요',
  },
  en: {
    title: 'Touch', move: 'Move', moveHint: 'Drag to move',
    intro: 'No keyboard or gamepad needed. You can move and press the action buttons at the same time.',
    rows: ['Hold and drag the left side of the screen. Normal attacks are automatic.', 'Tap Special at the bottom right. Use it again when charged.', 'Mega appears after finding a Mega Stone. Tap it when fully evolved and charged.', 'Lunge appears when you learn a manual dash move such as Quick Attack.', 'Tap Pause at the top right, then Resume to continue.', 'Tap cards, choices and Start or Confirm buttons.', 'Tap the Back or Close button.'],
    note: 'Choose a floating or fixed joystick in Settings. Mega and Lunge appear when their requirements are met.', hint: 'Play using the on-screen buttons',
  },
  pt: {
    title: 'Toque', move: 'Mover', moveHint: 'Arraste para mover',
    intro: 'Jogue sem teclado ou controle. Mova e aperte os botões de ação ao mesmo tempo.',
    rows: ['Segure e arraste o lado esquerdo da tela. Os ataques comuns são automáticos.', 'Toque em Especial no canto inferior direito. Use de novo quando carregar.', 'Mega aparece após encontrar uma Mega Pedra. Toque quando evoluir por completo e carregar.', 'Bote aparece ao aprender um golpe manual como Ataque Rápido.', 'Toque em Pausar no canto superior direito e em Continuar para voltar.', 'Toque nas cartas, opções e botões de começar ou confirmar.', 'Toque em Voltar ou Fechar.'],
    note: 'Escolha joystick flutuante ou fixo nas configurações. Mega e Bote aparecem ao cumprir os requisitos.', hint: 'Jogue com os botões da tela',
  },
  es: {
    title: 'Móvil', move: 'Mover', moveHint: 'Arrastra para moverte',
    intro: 'Juega sin teclado ni mando. Puedes moverte y pulsar los botones de acción a la vez.',
    rows: ['Mantén pulsado y arrastra el lado izquierdo. Los ataques normales son automáticos.', 'Toca Especial abajo a la derecha. Úsalo otra vez cuando se cargue.', 'Mega aparece al encontrar una Megapiedra. Toca tras evolucionar por completo y cargar.', 'Embestida aparece al aprender un movimiento manual como Ataque Rápido.', 'Toca Pausa arriba a la derecha y Continuar para volver.', 'Toca las cartas, opciones y botones de empezar o confirmar.', 'Toca Volver o Cerrar.'],
    note: 'Elige joystick flotante o fijo en Ajustes. Mega y Embestida aparecen al cumplir sus requisitos.', hint: 'Juega con los botones de la pantalla',
  },
} satisfies Record<Locale, { title: string; move: string; moveHint: string; intro: string; rows: readonly string[]; note: string; hint: string }>
