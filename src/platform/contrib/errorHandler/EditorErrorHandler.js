const BaseErrorHandler = require('./BaseErrorHandler');

function EditorErrorHandler () {
  BaseErrorHandler.call(this);
  this._errors = [];
  return this;
}

EditorErrorHandler.prototype = Object.create(BaseErrorHandler.prototype);
EditorErrorHandler.prototype.constructor = EditorErrorHandler;

EditorErrorHandler.prototype.handleEvaluateError = function(e) {

}

EditorErrorHandler.prototype.handleParseError = function handleParseError(input, line, column, message){
  console.error('识别错误', message);
}

/**
 * 将收集到的错误返回。
 */
EditorErrorHandler.prototype.getErrors = function getErrors() {

}

/**
 * 清空错误缓存
 */
EditorErrorHandler.prototype.clearErrors = function clearErrors() {
  this._errors = [];
}


module.exports = EditorErrorHandler;