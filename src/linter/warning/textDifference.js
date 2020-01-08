import LinterError from '../errors/linterError';
import warningErrors from '../errors/warning';
import {convertTreeToList} from '../../services/blocksService';

function checkTextDifference(warningBlock) {
  const nodes = convertTreeToList(warningBlock);

  const textBlocks = nodes.filter((node) => {
    return node.block === 'text';
  });
  // Если в блоке нет текста
  if (textBlocks.length === 0) {
    return null;
  }

  const textSizes = textBlocks.map((block) => {
    return block.mods.size;
  })

  const isSizesEqual = textSizes.every( size => size === textSizes[0] )

  if (!isSizesEqual) {
    const error = new LinterError(
      warningErrors.textSize,
      warningBlock.location
    );
  
    return error;
  }

  return null;
}

export default checkTextDifference;