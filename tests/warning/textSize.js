import chai from 'chai';
import lint from '../../src/index';

const warningTextDifference = {
  failure: `{
    "block": "warning",
    "content": [
        { "block": "text", "mods": { "size": "l" } },
        { "block": "text", "mods": { "size": "m" } }
    ]
  }`,
  success: `{
    "block": "warning",
    "content": [
        { "block": "text", "mods": { "size": "l" } },
        { "block": "text", "mods": { "size": "l" } }
    ]
  }`
}

export default function textSize() {
  chai.assert.equal(lint(warningTextDifference.failure).length, 1);
  chai.assert.equal(lint(warningTextDifference.success).length, 0);
};