import mocha from 'mocha';

import warningTests from './warning';

describe("lint", function() {

  // Тесты блока warning
  it("Проверяет размеры текста для warning", warningTests.warningTextSize);
  it("Проверяет размеры кнопок для warning", warningTests.warningButtonSize);

});