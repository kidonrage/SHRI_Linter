export default class LinterError {

  constructor(errorInfo, astLocation) {
    const {desc, code} = errorInfo;

    this.code = code;
    this.error = desc;

    const {line: startLine, column: startColumn} = astLocation.start;
    const {line: endLine, column: endColumn} = astLocation.end;

    this.location = {
      start: {
        column: startColumn,
        line: startLine
      },
      end: {
        column: endColumn,
        line: endLine
      }
    };
  }

}