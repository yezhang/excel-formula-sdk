const antlr4 = require('antlr4');
const { ParseCancellationException } = require('antlr4/error/Errors');

class SyntaxErrorItem {
  constructor(symbol, line, column, message, e) {
    this.offendingSymbol = symbol;
    this.line = line;
    this.column = column;
    this.message = message;
    this.exception = e;
  }
}
class BaseErrorListener extends antlr4.error.ErrorListener {
  constructor(){
    super();

    this.errorItems = [];
  }

  setErrorHandler(errorHandler) {
    this.errorHandler = errorHandler;
  }

  removeErrorHandler() {
    this.errorHandler = {
      handleParseError: function(){/** noop */},
      handleEvaluateError: function(){/** noop */}
    }
  }

  getErrorHandler() {
    return this.errorHandler;
  }

  recordError(recognizer, symbol, line, column, message, exception) {
    this.errorItems.push(new SyntaxErrorItem(symbol, line, column, message, exception));
  }
  /**
     * 检查文法错误
     *
     * @param {object} recognizer 必要的解析支持代码. 大多时候是错误恢复内容。
     * @param {object} symbol 非法符号
     * @param {int} line 非法符号的行号
     * @param {int} column 非法符号的列号
     * @param {string} message 错误信息
     * @param {RecognitionException} exception 异常信息
     */
  syntaxError(recognizer, symbol, line, column, message, exception) {
    this.recordError(recognizer, symbol, line, column, message, exception);
    
    var tokens = recognizer.getInputStream();
    var rawText = tokens.tokenSource.inputStream.toString();

    var errHandler = this.getErrorHandler();
    if(errHandler && errHandler.handleParseError instanceof Function) {
      errHandler.handleParseError(rawText, symbol, line, column, message);
    }
  }

  hasErrors() {
    return this.errorItems.length > 0;
  }

  clearErrors() {
    this.errorItems = [];
  }
}

module.exports = BaseErrorListener;