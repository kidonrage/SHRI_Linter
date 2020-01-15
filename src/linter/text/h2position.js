import LinterError from '../errors/linterError';
import textErrors from '../errors/text';
import {h1HeaderRecognizer, h2HeaderRecognizer} from './recognizers';
import {findChildBlocksPlacedBeforeOtherBlocks} from '../../services/nodeSearchService';

function checkH2Position(rootNode) {
  const invalidH2Headers = findChildBlocksPlacedBeforeOtherBlocks(rootNode, h2HeaderRecognizer, h1HeaderRecognizer);

  const isPositionValid = invalidH2Headers.length === 0;
  
  if (isPositionValid) {
    return [];
  }

  return LinterError.getErrorsForBlocks(textErrors.h2Position, invalidH2Headers);
}

export default checkH2Position;