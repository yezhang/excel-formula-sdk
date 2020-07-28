const antlr4 = require('antlr4');
const { ParseCancellationException } = require('antlr4/error/Errors');

class BaseErrorListener extends antlr4.error.ErrorListener {

  setErrorHandler(errorHandler) {
    this.errorHandler = errorHandler;
  }

  removeErrorHandler() {
    this.errorHandler = function() {/** noop */};
  }

  getErrorHandler() {
    return this.errorHandler;
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
    var tokens = recognizer.getInputStream();
    var rawText = tokens.tokenSource.inputStream.toString();

    var errHandler = this.getErrorHandler();
    if(errHandler && errHandler.handle instanceof Function) {
      errHandler.handle(rawText, line, column, '无法识别的符号');
    }
  }
}

module.exports = BaseErrorListener;