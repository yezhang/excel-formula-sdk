function BaseErrorHandler() {
}

/**
 * 处理公式的运行时错误
 * @param {Error} e 运行时异常信息
 */
BaseErrorHandler.prototype.handleRuntimeError = function handleRuntimeError(e) {
  /** noop */
}

/**
 * 处理公式解析的语法错误
 */
BaseErrorHandler.prototype.handle = function handle(input, line, column, message) {
  /** noop */
}


module.exports = BaseErrorHandler;