import LinterError from '../errors/linterError';
import warningErrors from '../errors/warning';
import {findChildBlocksPlacedBeforeOtherBlocks} from '../../services/nodeSearchService';

const buttonRecognizer = (block) => {
  return block.block === 'button'
}

const placeholderRecognizer = (block) => {
  return block.block === 'placeholder'
}

function checkButtonPosition(warningBlock) {
  const invalidButtons = findChildBlocksPlacedBeforeOtherBlocks(warningBlock, buttonRecognizer, placeholderRecognizer);

  const isButtonsValid = invalidButtons.length === 0;
  
  if (isButtonsValid) {
    return [];
  }

  return LinterError.getErrorsForBlocks(warningErrors.buttonPosition, invalidButtons);
}

export default checkButtonPosition;