function BaseErrorHandler() {
}

/**
 *  
 * 处理公式的运行时错误
 * @param {CalculationException} e 运行时异常信息
 */
BaseErrorHandler.prototype.handleEvaluateError = function handleEvaluateError(e) {
  /** noop */
}

/**
 * 处理公式解析的语法错误
 * TODO: 调整参数为 e
 */
BaseErrorHandler.prototype.handleParseError = function handleParseError(input, line, column, message) {
  /** noop */
}


module.exports = BaseErrorHandler;