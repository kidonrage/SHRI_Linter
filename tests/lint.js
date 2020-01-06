import mocha from 'mocha';

import warningTests from './warning';

const {warningTextSize} = warningTests;

describe("lint", function() {

  it("Проверяет размеры текста для warning", warningTextSize);

});