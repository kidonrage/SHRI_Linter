const textModRecognizer = (block, modName, modValue) => {
  if (!block.mods) {
    return false;
  }

  return block.block === 'text' && block.mods[modName] === modValue
}

export const h1HeaderRecognizer = (block) => textModRecognizer(block, 'type', 'h1');
export const h2HeaderRecognizer = (block) => textModRecognizer(block, 'type', 'h2');
export const h3HeaderRecognizer = (block) => textModRecognizer(block, 'type', 'h3');