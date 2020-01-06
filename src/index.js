import parse from 'json-to-ast';

export default function lint(jsonString) {
  const settings = {
    loc: true,
  };

  // return parse(jsonString, settings)
  return [
    {
        code: "WARNING.TEXT_SIZES_SHOULD_BE_EQUAL",
        error: "Тексты в блоке warning должны быть одного размера",
        location: {
            start: { column: 1, line: 1 },
            end: { column: 2, line: 22 }
        }
    }
  ]
}