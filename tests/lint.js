import warningTests from './warning';

describe("lint", function() {

  // Тесты блока warning
  it("Проверяет размеры текста для warning", warningTests.textSize);
  it("Проверяет размеры кнопок для warning", warningTests.buttonSize);
  it("Проверяет относительное положение кнопок относительно placeholder в блоке warning", warningTests.buttonPosition);
  it("Проверяет размеры для блока placeholder в блоке warning", warningTests.placeholderSize);

});