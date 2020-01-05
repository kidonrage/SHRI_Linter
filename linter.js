const json = `
{
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
}`;

class Linter {

  constructor() {}

  warning() {
    let code = "WARNING.TEXT_SIZES_SHOULD_BE_EQUAL";
    let text = "Тексты в блоке warning должны быть одного размера";
    let location = {
      start: { column: 1, line: 1 },
      end: { column: 2, line: 22 }
    }
    let error = new LinterError(code, text, location);

    return error;
  }

  getErrorsFor(blockName) {
    if (!this[blockName]) {
      return [];
    }

    return this[blockName]();
  }

}

async function lint(lintedString) {
  let blockStructure = await JSON.parse(lintedString);

  let linter = new Linter();

  let errors = linter.getErrorsFor('blockStructure.block');

  return errors;
}

class LinterError {

  constructor(code = '', error = '', location) {
    if (!location.start || !location.end) {
      this.location = {start: '', end: ''}
    }

    this.error = error;
    this.code = code;
    this.location = location;
  }

}

lint(json).then((errors) => {
  console.log(errors);
});