const antlr4 = require('antlr4');
const CellAddressLexer = require('platform/formula/runtime/CellAddressLexer').CellAddressLexer;
const CellAddressParser = require('platform/formula/runtime/CellAddressParser').CellAddressParser;
const CellAddressVisitor = require('platform/formula/runtime/CellAddressVisitor').CellAddressVisitor;
// const CellAddressVisitor = require('platform/formula/cellAddressParts/common/CelladdressPartsVisitor').CellAddressLiteralVisitor;

const Syntax = require('./syntax').Syntax;
const ReportFormulaParserVisitor = require('platform/formula/runtime/ReportFormulaParserVisitor').ReportFormulaParserVisitor;


class CellAddressLiteralVisitor extends CellAddressVisitor {
  constructor() {
    super();
  }

  // 规则入口 1
  visitCellAddress(ctx) {
    let prefix = ctx.WorkSheetPrefix();
    let sheetName = null;
    if(prefix) {
      sheetName = new SheetNameIdentifier(prefix.substring(0, -1));
    }
    let a1Reference = ctx.a1Reference().accept(this);

    return new CellAddressIdentifier(sheetName, a1Reference);
  }

  // 规则入口 2
  visitCellRange(ctx) {
    let prefix = ctx.WorkSheetPrefix();
    let sheetName = null;
    if(prefix) {
      sheetName = new SheetNameIdentifier(prefix.substring(0, -1));
    }
    let startRef = ctx.startRef().accept(this);
    let endRef = ctx.endRef().accept(this);

    return new CellRangeIdentifier(sheetName, startRef, endRef);
  }

  visitA1Reference(ctx) {
    let col = ctx.a1Column().accept(this);
    let row = ctx.a1Row().accept(this);

    return new A1ReferenceIdentifier(col, row);
  }

  visitA1Column(ctx) {
    return ctx.children[0].accept(this);
  }

  visitA1Row(ctx) {
    return ctx.children[0].accept(this);
  }

  visitA1RelativeColumn(ctx) {
    let text = ctx.CellColumnAddress().getText();
    return new RelativeColumnIdentifier(text);
  }

  visitA1AbsoluteColumn(ctx) {
    let text = ctx.CellColumnAddress().getText();
    return new AbsoluteColumnIdentifier(text);
  }

  visitA1RelativeRow(ctx) {
    let line = ctx.CellRowAddress().getText();
    return new RelativeRowIdentifier(parseInt(line));
  }

  visitA1AbsoluteRow(ctx) {
    let line = ctx.CellRowAddress().getText();
    return new AbsoluteRowIdentifier(parseInt(line));
  }
}

function buildCellAddress(input) {
  class ErrorTokenListener extends antlr4.error.ErrorListener {
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
      
    }
  }
  
  const chars = new antlr4.InputStream(input);
  const lexer = new CellAddressLexer(chars);

  lexer.removeErrorListeners();
  lexer.addErrorListener(new ErrorTokenListener());

  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new CellAddressParser(tokens);

  parser.removeErrorListeners(); // 移除默认的 ConsoleErrorListener
  parser.addErrorListener(new ErrorTokenListener());

  var tree = parser.cellReference(); // 启动公式解析，遇到错误会触发 ErrorListener。

  return tree.accept(new CellAddressLiteralVisitor());
}


class ASTVisitor extends ReportFormulaParserVisitor {
  visitFormulaExpr(ctx) {
    let body = ctx.expressionStatement().accept(this);
    return new FormulaProgram(body);
  }

  visitExpressionStatement(ctx) {
    let sequence = ctx.expressionSequence().accept(this);
    return new ExpressionStatement(sequence);
  }

  visitExpressionSequence(ctx) {
    return ctx.singleExpression().accept(this);
    // return new SequenceExpression([singleExpression]);
  }

  visitArgumentsExpression(ctx) {
    let fnName = ctx.singleExpression().accept(this);
    let args = ctx.arguments().accept(this);
    return new CallExpression(fnName, args);
  }

  visitIdentifierExpression(ctx) {
    return ctx.identifier().accept(this);
  }

  visitIdentifierPlainText(ctx) {
    let name = ctx.getText();
    return new PlainTextIdentifier(name);
  }

  visitIdentifierRefItemCode(ctx) {
    return ctx.refItemCode().accept(this);
  }

  visitRefItemCode(ctx) {
    let name = ctx.Identifier().text;
    return new RefItemIdentifier(name);
  }

  visitIdentifierCellAddress(ctx) {
    let addr = ctx.getText();
    return buildCellAddress(addr);
  }

  visitIdentifierCellRange(ctx) {
    let rangeAddr = ctx.getText();
    return buildCellAddress(rangeAddr);
  }

  // 返回数组
  visitArguments(ctx) {
    const that = this;
    return ctx.argument().map(function(arg){
      return arg.accept(that);
    });
  }

  visitArgument(ctx) {
    return ctx.children[0].accept(this);
  }

  visitUnaryPlusExpression(ctx) {
    let arg = ctx.singleExpression().accept(this);
    return new UnaryExpression('+', arg);
  }

  visitUnaryMinusExpression(ctx) {
    let arg = ctx.singleExpression().accept(this);
    return new UnaryExpression('-', arg);
  }

  _makeBinaryExpression(ctx) {
    let op = ctx.op.text;
    let left = ctx.singleExpression(0).accept(this);
    let right = ctx.singleExpression(1).accept(this);
    return new BinaryExpression(op, left, right);
  }
  visitPowerExpression(ctx) {
    return this._makeBinaryExpression(ctx);
  }

  visitMultiplicativeExpression(ctx) {
    return this._makeBinaryExpression(ctx);
  }

  visitAdditiveExpression(ctx) {
    return this._makeBinaryExpression(ctx);
  }

  visitRelationalExpression(ctx){
    return this._makeBinaryExpression(ctx);
  }

  visitEqualityExpression(ctx) {
    return this._makeBinaryExpression(ctx);
  }

  visitLogicalAndExpression(ctx) {
    let left = ctx.singleExpression(0).accept(this);
    let right = ctx.singleExpression(1).accept(this);
    return new LogicalExpression('&&', left, right);
  }

  visitLogicalOrExpression(ctx) {
    let left = ctx.singleExpression(0).accept(this);
    let right = ctx.singleExpression(1).accept(this);
    return new LogicalExpression('||', left, right);
  }

  visitTernaryExpression(ctx) {
    let test = ctx.singleExpression(0).accept(this);
    let consequent = ctx.singleExpression(1).accept(this);
    let alternate = ctx.singleExpression(2).accept(this);
    return new ConditionalExpression(test, consequent, alternate);
  }

  visitAssignmentExpression(ctx) {
    let left = ctx.singleExpression(0).accept(this);
    let right = ctx.singleExpression(1).accept(this);
    return new AssignmentExpression('=', left, right);
  }


}
/**
 * 语法树
 */
function SingleFormulaAST(parseTree) {
  this.parseTree = parseTree;
  this.content = parseTree.accept(new ASTVisitor());

  return this;
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
  constructor(callee, args) {
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

exports.SingleFormulaAST = SingleFormulaAST;