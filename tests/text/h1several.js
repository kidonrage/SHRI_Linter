import chai from 'chai';
import lint from '../../src/index';
import indexJSON from './indexpage';
import productJSON from './productpage';

const testInputs = [
  {
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
      "content": {
        "block": "text",
        "mods": { "type": "h1" }
      }
    }`,
    expectedErrors: 0
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
  },
  {
    json: `[
      {
          "block": "text",
          "mods": { "type": "h1" }
      },
      {
          "block": "text",
          "mods": { "type": "h1" }
      },
      {
          "block": "text",
          "mods": { "type": "h1" }
      }
    ]`,
    expectedErrors: 2
  },
  {
    json: `[
    {
      "block": "header",
      "content": {
        "block": "header",
        "elem": "content",
        "content": [
            {
              "block": "header",
              "elem": "logo"
            },
            {
              "block": "text",
              "mods": { "type": "h1" }
            },
            {
              "block": "text",
              "mods": { "type": "h1" }
            },
            [
              {
                "block": "onoffswitch",
                "mods": {
                  "checked": true
                },
                "content": [
                  {
                      "block": "onoffswitch",
                      "elem": "button"
                  }
                ]
              }
            ]
          ]
        }
      },
      {
        "block": "header",
        "elem": "content",
        "content": [
            {
                "block": "header",
                "elem": "logo"
            },
            {
              "block": "text",
              "mods": { "type": "h1" }
            }
        ]
      }
    ]`,
    expectedErrors: 2
  },
  {
    json: indexJSON,
    expectedErrors: 1
  },
  {
    json: productJSON,
    expectedErrors: 0
  }
]

export default function h1Several() {
  testInputs.forEach((input) => {
    const result = lint(input.json);
    chai.assert.equal(result.length, input.expectedErrors);
  });
};