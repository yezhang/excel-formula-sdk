const BaseErrorHandler = require('./BaseErrorHandler');

function EditorErrorHandler () {
  BaseErrorHandler.call(this);
  return this;
}

EditorErrorHandler.prototype = Object.create(BaseErrorHandler.prototype);
EditorErrorHandler.prototype.constructor = EditorErrorHandler;

EditorErrorHandler.prototype.handleEvaluateError = function(e) {

}

EditorErrorHandler.prototype.handleParseError = function handleParseError(input, line, column, message){
  console.error('识别错误', message);
}

module.exports = EditorErrorHandler;