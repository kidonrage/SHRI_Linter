export default class LinterError {

  constructor(errorInfo, errorBlock) {
    const {desc, code} = errorInfo;

    this.code = code;
    this.error = desc;
    this.location = errorBlock.location;
  }

  static getErrorsForBlocks(errorInfo, errorBlocksArr){
    return errorBlocksArr.map((errorBlock) => {
      const error = new LinterError(
        errorInfo,
        errorBlock
      );
    
      return error;
    })
  }

}