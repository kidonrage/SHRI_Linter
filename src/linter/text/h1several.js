import LinterError from '../errors/linterError';
import textErrors from '../errors/text';
import {findRootBlocksWithModValue} from '../../services/graphService';

function checkH1Severalty(graph) {
  const h1Headers = findRootBlocksWithModValue(graph, 'text', 'type', 'h1');

  if (h1Headers.length < 1) {
    return []
  }

  const isHeadersValid = h1Headers.length === 1;

  if (!isHeadersValid) {
    const errors = h1Headers.slice(1).map((invalidHeader) => {
      const error = new LinterError(
        textErrors.severalH1,
        invalidHeader
      );
    
      return error;
    })
    
    return errors;
  }

  return [];
}

export default checkH1Severalty;