const antlr4 = require('antlr4');
const CellAddressLexer = require('platform/formula/runtime/CellAddressLexer').CellAddressLexer;
const CellAddressParser = require('platform/formula/runtime/CellAddressParser').CellAddressParser;
const CellAddressVisitor = require('platform/formula/runtime/CellAddressVisitor').CellAddressVisitor;
// const CellAddressVisitor = require('platform/formula/cellAddressParts/common/CelladdressPartsVisitor').CellAddressLiteralVisitor;

const Syntax = require('./syntax').Syntax;
const ReportFormulaParserVisitor = require('platform/formula/runtime/ReportFormulaParserVisitor').ReportFormulaParserVisitor;

const ASTWalker = require('platform/formula/core/ASTWalker');


/**
 * 生成单元格地址、单元格范围的 AST 节点。
 */
class CellAddressLiteralVisitor extends CellAddressVisitor {
  constructor() {
    super();
  }

  // 规则入口 1 - 单元格地址
  visitCellAddress(ctx) {
    let prefix = ctx.WorkSheetPrefix();
    let sheetName = null;
    if (prefix) {
      let prefixStr = prefix.getText();
      // 移除字符串最后的 ! 符号
      sheetName = new SheetNameIdentifier(prefixStr.substring(0, prefixStr.length - 1));
    }
    let a1Reference = ctx.a1Reference().accept(this);

    return new CellAddressIdentifier(sheetName, a1Reference);
  }

  // 规则入口 2 - 单元格范围
  visitCellRange(ctx) {
    let prefix = ctx.WorkSheetPrefix();
    let sheetName = null;
    if (prefix) {
      let prefixStr = prefix.getText();

      // 移除 "!" 后缀，例如 "sheet!" 修正为 "sheet"。
      sheetName = new SheetNameIdentifier(prefixStr.substring(0, prefixStr.length - 1));
    }
    let startRef = ctx.startRef.accept(this);
    let endRef = ctx.endRef.accept(this);

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
      // noop
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

  visitLiteralExpression(ctx) {
    return ctx.literal().accept(this);
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
    return ctx.argument().map(function (arg) {
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

  visitRelationalExpression(ctx) {
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

  visitNullLiteralExpression(ctx) {
    return new Literal(null);
  }

  visitBooleanLiteralExpression(ctx) {
    let value = ctx.getText() === 'true';
    return new Literal(value);
  }

  visitStringLiteralExpression(ctx) {
    return new Literal(ctx.getText());
  }

  // NumericLiteralExpression 规则本身，不产生 AST 节点
  visitNumericLiteralExpression(ctx) {
    return ctx.children[0].accept(this);
  }

  visitPercentageLiteralExpression(ctx) {
    return ctx.percentageLiteral().accept(this);
  }

  visitPercentageLiteral(ctx) {
    return new PercentageLiteral(Number(ctx.BasicNumberLiteral().getText()))
  }

  visitBasicNumberLiteralExpression(ctx) {
    return new Literal(Number(ctx.getText()));
  }


}

/**
 * 语法树
 */
function SingleFormulaAST(parseTree, ownerSheetName) {
  this.parseTree = parseTree;
  this.content = parseTree.accept(new ASTVisitor());
  this.ownerSheetName = ownerSheetName;
  return this;
}

SingleFormulaAST.prototype.accept = function accept(visitor) {
  return this.content.accept(visitor);
}

SingleFormulaAST.prototype.toString = function toString() {
  return this.content.toString();
}


/**
 * 查找全部的单元格引用节点
 */
SingleFormulaAST.prototype.findAllCellRefNodes = function () {
  let cellRefNodes = [];
  ASTWalker.traverse(this.content, function (node) {
    switch (node.type) {
      case Syntax.CellAddressIdentifier:
      case Syntax.CellRangeIdentifier:
        cellRefNodes.push(node);
        return ASTWalker.OPTIONS.BREAK;
      default:
        return ASTWalker.OPTIONS.CONTINUE;
    }
  });

  return cellRefNodes;
}

/**
 * 用于支持语法树节点的访问。
 */
class IAccessableType {
  accept(visitor) {
    let fnName = 'visit' + this.type;
    if(fnName in visitor){
      return visitor[fnName](this);
    }

    return undefined;
  }
}

/**
 * 语法树节点的定义参考：
 * https://github.com/estree/estree
 * https://github.com/estree/estree/blob/master/es5.md
 */
class FormulaProgram extends IAccessableType{
  constructor(body) {
    super();
    this.type = Syntax.FormulaProgram;
    this.body = body;
  }

  toString() {
    return '=' + this.body.toString();
  }
}

class Identifier extends IAccessableType{
  constructor(name) {
    super();
    this.type = Syntax.Identifier;
    this.name = name;
  }

  toString() {
    return this.name;
  }
}

class RefItemIdentifier extends IAccessableType{
  constructor(name) {
    super();
    this.type = Syntax.RefItemIdentifier;
    this.name = name;
  }

  toString() {
    return '@' + this.name;
  }
}

class CellAddressIdentifier extends IAccessableType{
  /**
   * @param {SheetNameIdentifier} sheetName
   */
  constructor(sheetName, a1Reference) {
    super();
    this.type = Syntax.CellAddressIdentifier;
    this.sheetName = sheetName;
    this.a1Reference = a1Reference;
  }

  lost() {
    this._isLost = true;
    this.a1Reference.lost();
  }

  isLost() {
    return this._isLost === true || this.a1Reference.isLost();
  }

  toString() {
    if (this.a1Reference.isLost()) {
      return Syntax.REF_ERROR;
    }
    let sheetName = this.sheetName ? this.sheetName.toString() + '!' : '';
    return `${sheetName}${this.a1Reference.toString()}`;
  }

  clone() {
    let a1ReferenceID = this.a1Reference.clone();
    let sheetNameID = this.sheetName ? this.sheetName.clone() : undefined;
    return new CellAddressIdentifier(sheetNameID, a1ReferenceID);
  }
}

class SheetNameIdentifier extends IAccessableType{
  constructor(sheetName) {
    super();
    this.type = Syntax.SheetNameIdentifier;
    this.name = sheetName;
  }

  toString() {
    return this.name;
  }

  clone() {
    if(this.name) {
      return new SheetNameIdentifier(this.name.slice());
    }
    return new SheetNameIdentifier(undefined);
  }
}

class A1ReferenceIdentifier extends IAccessableType{
  constructor(columnRef, rowRef) {
    super();
    this.type = Syntax.A1ReferenceIdentifier;
    this.columnRef = columnRef;
    this.rowRef = rowRef;
  }

  /**
   * 标记本单元格引用的位置的值发生丢失
   */
  lost() {
    this._isLost = true;
  }

  isLost() {
    return this._isLost === true;
  }

  toString() {
    if (this.isLost()) {
      return Syntax.REF_ERROR;
    }
    return `${this.columnRef.toString()}${this.rowRef.toString()}`;
  }

  clone() {
    let columnRefID = this.columnRef.clone();
    let rowRefID = this.rowRef.clone();
    return new A1ReferenceIdentifier(columnRefID, rowRefID);
  }
}

class AbsoluteColumnIdentifier extends IAccessableType{
  constructor(text) {
    super();
    this.type = Syntax.AbsoluteColumnIdentifier;
    this.text = text;
  }

  toString() {
    return '$' + this.text;
  }

  clone() {
    return new AbsoluteColumnIdentifier(this.text.slice());
  }
}

class RelativeColumnIdentifier extends IAccessableType{
  constructor(text) {
    super();
    this.type = Syntax.RelativeColumnIdentifier;
    this.text = text;
  }

  toString() {
    return this.text;
  }

  clone() {
    return new RelativeColumnIdentifier(this.text.slice());
  }
}

class AbsoluteRowIdentifier extends IAccessableType{
  constructor(line) {
    super();
    this.type = Syntax.AbsoluteRowIdentifier;
    this.line = line;
  }

  toString() {
    return '$' + this.line;
  }

  clone() {
    return new AbsoluteRowIdentifier(this.line);
  }
}

class RelativeRowIdentifier extends IAccessableType{
  constructor(line) {
    super();
    this.type = Syntax.RelativeRowIdentifier;
    this.line = line;
  }

  toString() {
    return `${this.line}`;
  }

  clone() {
    return new AbsoluteRowIdentifier(this.line);
  }
}

class CellRangeIdentifier extends IAccessableType{
  constructor(sheetName, startRef, endRef) {
    super();
    this.type = Syntax.CellRangeIdentifier;
    this.sheetName = sheetName;
    this.startRef = startRef;
    this.endRef = endRef;
  }

  lost() {
    this._isLost = true;
  }

  isLost() {
    return this._isLost === true;
  }

  toString() {
    if (this.isLost()) {
      return Syntax.REF_ERROR;
    }

    let sheetName = this.sheetName ? this.sheetName.toString() + '!' : '';
    return `${sheetName}${this.startRef.toString()}:${this.endRef.toString()}`;
  }
}

class PlainTextIdentifier extends IAccessableType{
  constructor(name) {
    super();
    this.type = Syntax.PlainTextIdentifier;
    this.name = name;
  }

  toString() {
    return this.name;
  }
}

class Literal extends IAccessableType{
  constructor(value) {
    super();
    this.type = Syntax.Literal;
    this.value = value;
  }

  toString() {
    return this.value;
  }
}

class PercentageLiteral extends IAccessableType{
  constructor(value) {
    super();
    this.type = Syntax.PercentageLiteral;
    this.value = value;
  }

  toString() {
    return this.value + '%';
  }
}

class ExpressionStatement extends IAccessableType{
  constructor(expression) {
    super();
    this.type = Syntax.ExpressionStatement;
    this.expression = expression;
  }

  toString() {
    return this.expression.toString();
  }
}

class ArrayExpression extends IAccessableType{
  constructor(elements) {
    super();
    this.type = Syntax.ArrayExpression;
    this.elements = elements;
  }

  toString() {
    let arrStr = undefined;
    arrStr = this.elements.map(function (e) {
      return e.toString();
    });

    return `[${arrStr.join(',')}]`;
  }
}

class ObjectExpression extends IAccessableType{
  constructor(properties) {
    super();
    this.type = Syntax.ObjectExpression;
    this.properties = properties;
  }

  toString() {
    let obj = {};

    this.properties.forEach(function (p) {
      obj[p.key] = p.value;
    });

    return JSON.stringify(obj);
  }
}

class Property extends IAccessableType{
  constructor(key, value, kind) {
    super();
    this.type = Syntax.Property;
    this.key = key;
    this.value = value;
    this.kind = kind;
  }
}

class UnaryExpression extends IAccessableType{
  constructor(operator, argument) {
    super();
    this.type = Syntax.UnaryExpression;
    this.prefix = true;
    this.operator = operator;
    this.argument = argument;
  }

  toString() {
    return this.operator + this.argument.toString();
  }
}

class BinaryExpression extends IAccessableType{
  constructor(operator, left, right) {
    super();
    this.type = Syntax.BinaryExpression;
    this.operator = operator;
    this.left = left;
    this.right = right;
  }

  toString() {
    return this.left.toString() + this.operator.toString() + this.right.toString();
  }
}

class AssignmentExpression extends IAccessableType{
  constructor(operator, left, right) {
    super();
    this.type = Syntax.AssignmentExpression;
    this.operator = operator;
    this.left = left;
    this.right = right;
  }

  toString() {
    return this.left.toString() + this.operator.toString() + this.right.toString();
  }
}

class LogicalExpression extends IAccessableType{
  constructor(operator, left, right) {
    super();
    this.type = Syntax.LogicalExpression;
    this.operator = operator;
    this.left = left;
    this.right = right;
  }

  toString() {
    return this.left.toString() + this.operator.toString() + this.right.toString();
  }
}

class ConditionalExpression extends IAccessableType{
  constructor(test, consequent, alternate) {
    super();
    this.type = Syntax.ConditionalExpression;
    this.test = test;
    this.consequent = consequent;
    this.alternate = alternate;
  }

  toString() {
    return this.test.toString() + '?'
      + this.consequent.toString() + ':'
      + this.alternate.toString();
  }
}

class CallExpression extends IAccessableType{
  constructor(callee, args) {
    super();
    this.type = Syntax.CallExpression;
    this.callee = callee;
    this.arguments = args;
  }

  toString() {
    let argsStr = undefined;
    argsStr = this.arguments.map(function (arg) {
      return arg.toString();
    });

    argsStr = '(' + argsStr.join(',') + ')';

    return this.callee.toString() + argsStr;
  }
}

class SequenceExpression extends IAccessableType{
  constructor(expressions) {
    super();
    this.type = Syntax.SequenceExpression;
    this.expressions = expressions;
  }

  toString() {
    let exprList = this.expressions.forEach(function (expr) {
      return expr.toString();
    })

    return exprList.join(',');
  }
}

exports.SheetNameIdentifier = SheetNameIdentifier;
exports.A1ReferenceIdentifier = A1ReferenceIdentifier;

exports.AbsoluteColumnIdentifier = AbsoluteColumnIdentifier;
exports.RelativeColumnIdentifier = RelativeColumnIdentifier;
exports.AbsoluteRowIdentifier = AbsoluteRowIdentifier;
exports.RelativeRowIdentifier = RelativeRowIdentifier;

exports.CellAddressIdentifier = CellAddressIdentifier;
exports.CellRangeIdentifier = CellRangeIdentifier;
exports.SingleFormulaAST = SingleFormulaAST;
exports.buildCellAddress = buildCellAddress;