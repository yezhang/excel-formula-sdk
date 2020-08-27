const Syntax = require('./syntax').Syntax;

/**
 * 语法树
 */
class SingleFormulaAST {
  constructor(parseTree) {

  }
}

class FormulaProgram {
  constructor(body) {
    this.type = Syntax.FormulaProgram;
    this.body = body;
  }
}

class Identifier {
  constructor(name) {
    this.type = Syntax.Identifier;
    this.name = name;
  }
}

class RefItemIdentifier {
  constructor(name) {
    this.type = Syntax.RefItemIdentifier;
    this.name = name;
  }
}

class CellAddressIdentifier {
  constructor(sheetName, a1Reference) {
    this.type = Syntax.CellAddressIdentifier;
    this.sheetName = sheetName;
    this.a1Reference = a1Reference;
  }
}

class SheetNameIdentifier {
  constructor(sheetName) {
    this.type = Syntax.SheetNameIdentifier;
    this.name = sheetName;
  }
}

class A1ReferenceIdentifier {
  constructor(columnRef, rowRef) {
    this.type = Syntax.A1ReferenceIdentifier;
    this.columnRef = columnRef;
    this.rowRef = rowRef;
  }
}

class AbsoluteColumnIdentifier {
  constructor(text) {
    this.type = Syntax.AbsoluteColumnIdentifier;
    this.text = text;
  }
}

class RelativeColumnIdentifier {
  constructor(text) {
    this.type = Syntax.RelativeColumnIdentifier;
    this.text = text;
  }
}

class AbsoluteRowIdentifier {
  constructor(line) {
    this.type = Syntax.AbsoluteRowIdentifier;
    this.line = line;
  }
}

class RelativeRowIdentifier {
  constructor(line) {
    this.type = Syntax.RelativeRowIdentifier;
    this.line = line;
  }
}

class CellRangeIdentifier {
  constructor(sheetName, startRef, endRef) {
    this.type = Syntax.CellRangeIdentifier;
    this.sheetName = sheetName;
    this.startRef = startRef;
    this.endRef = endRef;
  }
}

class PlainTextIdentifier {
  constructor(name) {
    this.type = Syntax.PlainTextIdentifier;
    this.name = name;
  }
}

class Literal {
  constructor(value) {
    this.type = Syntax.Literal;
    this.value = value;
  }
}

class ExpressionStatement {
  constructor(expression) {
    this.type = Syntax.ExpressionStatement;
    this.expression = expression;
  }
}

class ArrayExpression {
  constructor(elements) {
    this.type = Syntax.ArrayExpression;
    this.elements = elements;
  }
}

class ObjectExpression {
  constructor(properties) {
    this.type = Syntax.ObjectExpression;
    this.properties = properties;
  }
}

class Property {
  constructor(key, value, kind) {
    this.type = Syntax.Property;
    this.key = key;
    this.value = value;
    this.kind = kind;
  }
}

class UnaryExpression {
  constructor(operator, argument) {
    this.type = Syntax.UnaryExpression;
    this.prefix = true;
    this.operator = operator;
    this.argument = argument;
  }
}

class BinaryExpression {
  constructor(operator, left, right) {
    this.type = Syntax.BinaryExpression;
    this.operator = operator;
    this.left = left;
    this.right = right;
  }
}

class AssignmentExpression {
  constructor(operator, left, right) {
    this.type = Syntax.AssignmentExpression;
    this.operator = operator;
    this.left = left;
    this.right = right;
  }
}

class LogicalExpression {
  constructor(operator, left, right) {
    this.type = Syntax.LogicalExpression;
    this.operator = operator;
    this.left = left;
    this.right = right;
  }
}

class ConditionalExpression {
  constructor(test, consequent, alternate) {
    this.type = Syntax.ConditionalExpression;
    this.test = test;
    this.consequent = consequent;
    this.alternate = alternate;
  }
}

class CallExpression {
  constructor(callee, args){
    this.type = Syntax.CallExpression;
    this.callee = callee;
    this.arguments = args;
  }
}

class SequenceExpression {
  constructor(expressions) {
    this.type = Syntax.SequenceExpression;
    this.expressions = expressions;
  }
}

