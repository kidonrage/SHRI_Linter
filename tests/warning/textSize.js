import chai from 'chai';
import lint from '../../src/index';

const warningTextSizeJSON = `{
  "block": "warning",
  "content": [
      { "block": "text", "mods": { "size": "l" } },
      { "block": "text", "mods": { "size": "m" } }
  ]
}`

const warningTextSizeErrors = [
  {
    code: "WARNING.TEXT_SIZES_SHOULD_BE_EQUAL",
    error: "Тексты в блоке warning должны быть одного размера",
    location: {
        start: { column: 1, line: 1 },
        end: { column: 2, line: 22 }
    }
  }
]

export default function textSize() {
  chai.assert.equal(lint(warningTextSizeJSON).length, warningTextSizeErrors.length);
};