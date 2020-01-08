import chai from 'chai';
import lint from '../../src/index';

const testInputs = [
  {
    // json: `[
    //   {
    //       "block": "text",
    //       "mods": { "type": "h1" }
    //   },
    //   {
    //       "block": "text",
    //       "mods": { "type": "h1" }
    //   }
    // ]`,
    json: `{
      "block": "page",
      "content": [
        {
            "block": "text",
            "mods": { "type": "h1" }
        },
        {
            "block": "text",
            "mods": { "type": "h1" }
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
            "mods": { "type": "h1" }
        }
      ]
    }`,
    expectedErrors: 0
  }
]

export default function h1Several() {
  testInputs.forEach((input) => {
    const result = lint(input.json);
    chai.assert.equal(result.length, input.expectedErrors);
  });
};