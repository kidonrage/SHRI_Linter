import LinterError from '../errors/linterError';
import textErrors from '../errors/text';
import {findRootBlocksWithModValue} from '../../services/nodeSearchService';

function checkH1Severalty(rootNode) {
  const h1Headers = findRootBlocksWithModValue(rootNode, 'text', 'type', 'h1');
  
  const isHeadersValid = h1Headers.length < 2;  

  if (isHeadersValid) {
    return [];
  }

  return LinterError.getErrorsForBlocks(textErrors.severalH1, h1Headers.slice(1))  
}

export default checkH1Severalty;