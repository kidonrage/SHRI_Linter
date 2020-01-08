import chai from 'chai';
import lint from '../../src/index';

const testInputs = [
  {
    json: `{
      "block": "page",
      "content": [
        {
          "block": "text",
          "mods": { "type": "h3" }
        },
        {
          "block": "text",
          "mods": { "type": "h2" }
        }
      ]
    }`,
    expectedErrors: 1
  },
  {
    json: `{
      "block": "page",
      "content": [
        {
          "block": "text",
          "mods": { "type": "h2" }
        },
        {
          "block": "text",
          "mods": { "type": "h3" }
        }
      ]
    }`,
    expectedErrors: 0
  }
]

export default function h3Position() {
  testInputs.forEach((input) => {
    const result = lint(input.json);
    chai.assert.equal(result.length, input.expectedErrors);
  });
};