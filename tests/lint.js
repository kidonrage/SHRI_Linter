import warningTests from './warning';
import textTests from './text';
import gridTests from './grid';

describe("lint", function() {

  // Тесты блока warning
  // it("Проверяет размеры текста для warning", warningTests.textSize);
  // it("Проверяет размеры кнопок для warning", warningTests.buttonSize);
  // it("Проверяет относительное положение кнопок относительно placeholder в блоке warning", warningTests.buttonPosition);
  // it("Проверяет размеры для блока placeholder в блоке warning", warningTests.placeholderSize);

  // // Тесты для заголовков
  // it("Проверяет единственность заголовка первого уровня", textTests.h1Several);
  it("Проверяет положение заголовка второго уровня", textTests.h2Position);
  // it("Проверяет положение заголовка третьего уровня", textTests.h3Position);

  // it("Проверяет что маркетинговые блоки занимают не больше половины от всех колонок блока grid", gridTests.advertisements);

});