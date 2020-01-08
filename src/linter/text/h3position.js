import LinterError from '../errors/linterError';
import textErrors from '../errors/text';

function checkH3Position(blocks) {
  const h3Headers = blocks.filter((block) => {
    return block.block === 'text' && block.mods.type === 'h3';
  });
  const h2Header = blocks.find((block) => {
    return block.block === 'text' && block.mods.type === 'h2';
  });

  if (h3Headers.length === 0 || !h2Header) {
    return []
  }

  const h2Index = blocks.indexOf(h2Header);
  const invalidh3Headers = h3Headers.filter((h3Header) => {
    const h3Index = blocks.indexOf(h3Header);
    return h3Index < h2Index;
  })

  const isPositionValid = invalidh3Headers.length === 0;
  
  if (!isPositionValid) {
    const errors = invalidh3Headers.map((invalidHeader) => {
      const error = new LinterError(
        textErrors.h3Position,
        invalidHeader.location
      );
    
      return error;
    })

    return errors;
  }

  return [];
}

export default checkH3Position;