import LinterError from '../errors/linterError';
import textErrors from '../errors/text';

function checkH1Severalty(blocks) {
  const h1Headers = blocks.filter((block) => {
    return block.block === 'text' && block.mods.type === 'h1';
  });

  if (h1Headers.length < 1) {
    return []
  }

  const isHeadersValid = h1Headers.length === 1;

  if (!isHeadersValid) {
    const errors = h1Headers.slice(1).map((invalidHeader) => {
      const error = new LinterError(
        textErrors.severalH1,
        invalidHeader.location
      );
    
      return error;
    })
    
    return errors;
  }

  return [];
}

export default checkH1Severalty;