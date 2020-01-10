import chai from 'chai';
import lint from '../../src/index';

const testInputs = [
  {
    json: `{
      "block": "grid",
      "mods": {
          "m-columns": "10"
      },
      "content": [
          {
              "block": "grid",
              "elem": "fraction",
              "elemMods": {
                  "m-col": "8"
              },
              "content": [
                  {
                      "block": "payment"
                  }
              ]
          },
          {
              "block": "grid",
              "elem": "fraction",
              "elemMods": {
                  "m-col": "2"
              },
              "content": [
                  {
                      "block": "offer"
                  }
              ]
          }
      ]
    }`,
    expectedErrors: 0
  },
  {
    json: `{
      "block": "grid",
      "mods": {
          "m-columns": "10"
      },
      "content": [
        {
            "block": "grid",
            "elem": "fraction",
            "elemMods": {
                "m-col": "2"
            },
            "content": [
                {
                    "block": "payment"
                }
            ]
        },
        {
            "block": "grid",
            "elem": "fraction",
            "elemMods": {
                "m-col": "8"
            },
            "content": [
                {
                    "block": "offer"
                }
            ]
        }
      ]
    }`,
    expectedErrors: 1
  },
]

export default function h2Position() {
  testInputs.forEach((input) => {
    const result = lint(input.json);
    chai.assert.equal(result.length, input.expectedErrors);
  });
};