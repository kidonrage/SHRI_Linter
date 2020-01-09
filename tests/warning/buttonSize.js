import chai from 'chai';
import lint from '../../src/index';

const testInputs = [
  {
    json: `{
      "block": "warning",
      "content": [
          { "block": "text", "mods": { "size": "l" } },
          { "block": "button", "mods": { "size": "s" } }
      ]
    }`,
    expectedErrors: 1
  },
  {
    json: `{
      "block": "warning",
      "content": [
          { "block": "text", "mods": { "size": "l" } },
          { "block": "button", "mods": { "size": "s" } },
          { "block": "button", "mods": { "size": "m" } }
      ]
    }`,
    expectedErrors: 2
  },
  {
    json: `{
      "block": "warning",
      "content": [
          { "block": "text", "mods": { "size": "l" } },
          { "block": "button", "mods": { "size": "xl" } }
      ]
    }`,
    expectedErrors: 0
  }
]

export default function buttonSize() {
  testInputs.forEach((input) => {
    const result = lint(input.json);
    chai.assert.equal(result.length, input.expectedErrors);
  });
};