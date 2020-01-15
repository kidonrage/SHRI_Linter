import LinterError from '../errors/linterError';
import textErrors from '../errors/text';
import {h2HeaderRecognizer, h3HeaderRecognizer} from './recognizers';
import {findChildBlocksPlacedBeforeOtherBlocks} from '../../services/nodeSearchService';

function checkH3Position(rootNode) {
  const invalidH3Headers = findChildBlocksPlacedBeforeOtherBlocks(rootNode, h3HeaderRecognizer, h2HeaderRecognizer);
  
  const isPositionValid = invalidH3Headers.length === 0;
  
  if (isPositionValid) {
    return [];
  }

  return LinterError.getErrorsForBlocks(textErrors.h3Position, invalidH3Headers);
}

export default checkH3Position;