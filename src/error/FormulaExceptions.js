function FormulaException() {
  Error.call(this);
  return this;
}

FormulaException.prototype = Object.create(Error.prototype);
FormulaException.prototype.constructor = FormulaException;

/**
 * 语法解析错误
 */
function ParseException(input, line, column, message) {
  FormulaException.call(this);

  this.input = input;
  this.line = line;
  this.column = column;
  this.message = message;

  return this;
}

ParseException.prototype = Object.create(FormulaException.prototype);
ParseException.prototype.constructor = ParseException;

function CalculationException() {
  FormulaException.call(this);
  return this;
}

CalculationException.prototype = Object.create(FormulaException.prototype);
CalculationException.prototype.constructor = CalculationException;




exports.FormulaException = FormulaException;
exports.ParseException = ParseException;
exports.CalculationException = CalculationException;