import chai from 'chai';
import lint from '../../src/index';

const testInputs = [
  { 
    json: `{
      "block": "warning",
      "content": [
        {
          "block": "placeholder",
          "mods": { "size": "m" }
        },
        {
          "elem": "content",
          "content": [
            {
                "block": "text",
                "mods": { "size": "m" }
            },
            {
                "block": "text",
                "mods": { "size": "l" }
            }
          ]
        }
      ]
    }`,
    expectedErrors: 1
  },
  {
    json: `{
      "block": "warning",
      "content": [
          { "block": "text", "mods": { "size": "l" } },
          { "block": "text", "mods": { "size": "m" } }
      ]
    }`,
    expectedErrors: 1
  },
  {
    json: `{
      "block": "warning",
      "content": [
          { "block": "text", "mods": { "size": "l" } },
          { "block": "text", "mods": { "size": "l" } }
      ]
    }`,
    expectedErrors: 0
  }
]

export default function textSize() {
  testInputs.forEach((input) => {
    chai.assert.equal(lint(input.json).length, input.expectedErrors);
  });
};