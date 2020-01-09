import chai from 'chai';
import lint from '../../src/index';

const testInputs = [
  {
    json: `{
      "block": "warning",
      "content": [
        { "block": "placeholder", "mods": { "size": "xl" }}
      ]
    }`,
    expectedErrors: 1
  },
  {
    json: `{
      "block": "warning",
      "content": [
        { "block": "placeholder", "mods": { "size": "xl" }},
        { "block": "placeholder", "mods": { "size": "xl" }}
      ]
    }`,
    expectedErrors: 2
  },
  {
    json: `{
      "block": "warning",
      "content": [
        { "block": "placeholder", "mods": { "size": "m" }}
      ]
    }`,
    expectedErrors: 0
  }
]

export default function placeholderSize() {
  testInputs.forEach((input) => {
    const result = lint(input.json);
    chai.assert.equal(result.length, input.expectedErrors);
  });
};