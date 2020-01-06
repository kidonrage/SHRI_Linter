const { json } = require('./json');

let columnsInRows = [];
let columnsCount = 0;
for (const char of json) {
  columnsCount++;

  if (char === '\n') {
    columnsInRows.push(columnsCount);
    columnsCount = 0;
  }
}

const jsonWithoutSpaces = json.replace(/(\r\n|\n|\r)/gm, '').replace(/\s\s+/g, '').replace(/ /g, '');

function getContentOfBlock(blockName = '') {
  return jsonWithoutSpaces.indexOf("\"block\":\"" + blockName + "\"");
}

const allEqual = arr => arr.every( v => v === arr[0] )

function contentModsEquation(blocks = [], checkedBlocksName = '', checkedModName = '') {
  const checkedBlocks = blocks.filter((block) => block.block === checkedBlocksName);

  const checkedProperties = checkedBlocks.map((block) => {
    return block.mods[checkedModName];
  })
}

class Linter {

  constructor() {}

  warning(content) {
    let code = "WARNING.TEXT_SIZES_SHOULD_BE_EQUAL";
    let text = "Тексты в блоке warning должны быть одного размера";
    let location = {
      start: { column: 1, line: 1 },
      end: { column: 2, line: 22 }
    }
    let error = new LinterError(code, text, location);

    return error;
  }

  getErrorsFor(block) {
    const blockName = block.block;
    const blockContent = block.content;

    if (!this[blockName]) {
      return [];
    }

    return this[blockName](blockContent);
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