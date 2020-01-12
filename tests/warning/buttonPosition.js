import chai from 'chai';
import lint from '../../src/index';

const testInputs = [
  {
    json: `{
      "block": "warning",
      "content": [
        [
          [
            { "block": "button", "mods": { "size": "m" } },
            { "block": "placeholder", "mods": { "size": "m" } }
          ]
        ]
      ]
    }`,
    expectedErrors: 1
  },
  {
    json: `{
      "block": "warning",
      "content": [
          { "block": "button", "mods": { "size": "m" } },
          { "block": "placeholder", "mods": { "size": "m" } }
      ]
    }`,
    expectedErrors: 1
  },
  {
    json: `{
      "block": "warning",
      "content": [
        { "block": "button", "mods": { "size": "m" } },
        {
          "block": "something",
          "content": [
            { "block": "placeholder", "mods": { "size": "m" } }
          ]
        },
        { "block": "button", "mods": { "size": "m" } }
      ]
    }`,
    expectedErrors: 1
  },
  {
    json: `{
      "block": "warning",
      "content": [
          { "block": "placeholder", "mods": { "size": "m" } },
          { "block": "button", "mods": { "size": "m" } }
      ]
    }`,
    expectedErrors: 0
  },
  {
    json: `{
      "block": "warning",
      "content": [
        { "block": "button", "mods": { "size": "m" } },
        {
          "block": "something",
          "content": [
            { "block": "placeholder", "mods": { "size": "m" } }
          ]
        }
      ]
    }`,
    expectedErrors: 1
  }
]

export default function buttonPosition() {
  testInputs.forEach((input) => {
    const result = lint(input.json);
    chai.assert.equal(result.length, input.expectedErrors);
  });
};