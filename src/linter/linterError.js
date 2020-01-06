export default class LinterError {

  constructor(code = '', error = '', astLocation) {
    this.error = error;
    this.code = code;

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