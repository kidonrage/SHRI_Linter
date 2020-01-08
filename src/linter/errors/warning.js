const warning = {
  textSize: {
    code: 'WARNING.TEXT_SIZES_SHOULD_BE_EQUAL',
    desc: 'Тексты в блоке warning должны быть одного размера.'
  },
  buttonSize: {
    code: 'WARNING.INVALID_BUTTON_SIZE',
    desc: 'Размер кнопки блока warning должен быть на 1 шаг больше эталонного.'
  },
  buttonPosition: {
    code: 'WARNING.INVALID_BUTTON_POSITION',
    desc: 'Блок button в блоке warning не может находиться перед блоком placeholder на том же или более глубоком уровне вложенности.'
  },
  placeholderSize: {
    code: 'WARNING.INVALID_PLACEHOLDER_SIZE',
    desc: 'Допустимые размеры для блока placeholder в блоке warning: s, m, l.'
  }
}

export default warning;