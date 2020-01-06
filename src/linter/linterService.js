export function getContentOf(block) {
  const contentValue = getChildValue(block, 'content');
  return contentValue.children;
}

export function getModValuesOf(blocks, modName) {
  const values = blocks.map((block) => {
    const mods = getChildValue(block, 'mods');
    const resultMod = mods.children.find((mod) => mod.key.value === modName);
    return resultMod.value.value;
  })

  return values;
}

function getChildValue(block, childKey) {
  const childIndex = block.children.map((child) => child.key.value).indexOf(childKey);
  return block.children[childIndex].value;
}