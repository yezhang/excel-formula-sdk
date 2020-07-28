const BaseErrorHandler = require('./BaseErrorHandler');

function EditorErrorHandler () {
  BaseErrorHandler.call(this);
  return this;
}

EditorErrorHandler.prototype = Object.create(BaseErrorHandler.prototype);
EditorErrorHandler.prototype.constructor = EditorErrorHandler;



module.exports = EditorErrorHandler;