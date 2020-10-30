// Generated from /Users/zhangye/Documents/code/code_yonyou/FormulaTextArea/src/platform/formula/grammar/ReportFormulaParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by ReportFormulaParser.

function ReportFormulaParserVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

ReportFormulaParserVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
ReportFormulaParserVisitor.prototype.constructor = ReportFormulaParserVisitor;

// Visit a parse tree produced by ReportFormulaParser#formulaExpr.
ReportFormulaParserVisitor.prototype.visitFormulaExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ReportFormulaParser#expressionStatement.
ReportFormulaParserVisitor.prototype.visitExpressionStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ReportFormulaParser#expressionSequence.
ReportFormulaParserVisitor.prototype.visitExpressionSequence = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ReportFormulaParser#ParenthesizedExpression.
ReportFormulaParserVisitor.prototype.visitParenthesizedExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ReportFormulaParser#AdditiveExpression.
ReportFormulaParserVisitor.prototype.visitAdditiveExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ReportFormulaParser#RelationalExpression.
ReportFormulaParserVisitor.prototype.visitRelationalExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ReportFormulaParser#TernaryExpression.
ReportFormulaParserVisitor.prototype.visitTernaryExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ReportFormulaParser#LogicalAndExpression.
ReportFormulaParserVisitor.prototype.visitLogicalAndExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ReportFormulaParser#PowerExpression.
ReportFormulaParserVisitor.prototype.visitPowerExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ReportFormulaParser#ObjectLiteralExpression.
ReportFormulaParserVisitor.prototype.visitObjectLiteralExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ReportFormulaParser#LiteralExpression.
ReportFormulaParserVisitor.prototype.visitLiteralExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ReportFormulaParser#LogicalOrExpression.
ReportFormulaParserVisitor.prototype.visitLogicalOrExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ReportFormulaParser#ArrayLiteralExpression.
ReportFormulaParserVisitor.prototype.visitArrayLiteralExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ReportFormulaParser#IdentifierExpression.
ReportFormulaParserVisitor.prototype.visitIdentifierExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ReportFormulaParser#ArgumentsExpression.
ReportFormulaParserVisitor.prototype.visitArgumentsExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ReportFormulaParser#UnaryMinusExpression.
ReportFormulaParserVisitor.prototype.visitUnaryMinusExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ReportFormulaParser#AssignmentExpression.
ReportFormulaParserVisitor.prototype.visitAssignmentExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ReportFormulaParser#UnaryPlusExpression.
ReportFormulaParserVisitor.prototype.visitUnaryPlusExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ReportFormulaParser#EqualityExpression.
ReportFormulaParserVisitor.prototype.visitEqualityExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ReportFormulaParser#MultiplicativeExpression.
ReportFormulaParserVisitor.prototype.visitMultiplicativeExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ReportFormulaParser#arguments.
ReportFormulaParserVisitor.prototype.visitArguments = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ReportFormulaParser#argument.
ReportFormulaParserVisitor.prototype.visitArgument = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ReportFormulaParser#objectLiteral.
ReportFormulaParserVisitor.prototype.visitObjectLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ReportFormulaParser#arrayLiteral.
ReportFormulaParserVisitor.prototype.visitArrayLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ReportFormulaParser#elementList.
ReportFormulaParserVisitor.prototype.visitElementList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ReportFormulaParser#arrayElement.
ReportFormulaParserVisitor.prototype.visitArrayElement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ReportFormulaParser#PropertyExpressionAssignment.
ReportFormulaParserVisitor.prototype.visitPropertyExpressionAssignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ReportFormulaParser#ComputedPropertyExpressionAssignment.
ReportFormulaParserVisitor.prototype.visitComputedPropertyExpressionAssignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ReportFormulaParser#propertyName.
ReportFormulaParserVisitor.prototype.visitPropertyName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ReportFormulaParser#identifierName.
ReportFormulaParserVisitor.prototype.visitIdentifierName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ReportFormulaParser#IdentifierRefItemCode.
ReportFormulaParserVisitor.prototype.visitIdentifierRefItemCode = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ReportFormulaParser#IdentifierCellAddress.
ReportFormulaParserVisitor.prototype.visitIdentifierCellAddress = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ReportFormulaParser#IdentifierCellRange.
ReportFormulaParserVisitor.prototype.visitIdentifierCellRange = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ReportFormulaParser#IdentifierCellFloatRange.
ReportFormulaParserVisitor.prototype.visitIdentifierCellFloatRange = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ReportFormulaParser#IdentifierPlainText.
ReportFormulaParserVisitor.prototype.visitIdentifierPlainText = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ReportFormulaParser#refItemCode.
ReportFormulaParserVisitor.prototype.visitRefItemCode = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ReportFormulaParser#NullLiteralExpression.
ReportFormulaParserVisitor.prototype.visitNullLiteralExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ReportFormulaParser#BooleanLiteralExpression.
ReportFormulaParserVisitor.prototype.visitBooleanLiteralExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ReportFormulaParser#StringLiteralExpression.
ReportFormulaParserVisitor.prototype.visitStringLiteralExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ReportFormulaParser#NumericLiteralExpression.
ReportFormulaParserVisitor.prototype.visitNumericLiteralExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ReportFormulaParser#PercentageLiteralExpression.
ReportFormulaParserVisitor.prototype.visitPercentageLiteralExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ReportFormulaParser#BasicNumberLiteralExpression.
ReportFormulaParserVisitor.prototype.visitBasicNumberLiteralExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ReportFormulaParser#percentageLiteral.
ReportFormulaParserVisitor.prototype.visitPercentageLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ReportFormulaParser#reservedWord.
ReportFormulaParserVisitor.prototype.visitReservedWord = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ReportFormulaParser#keyword.
ReportFormulaParserVisitor.prototype.visitKeyword = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ReportFormulaParser#eos.
ReportFormulaParserVisitor.prototype.visitEos = function(ctx) {
  return this.visitChildren(ctx);
};



exports.ReportFormulaParserVisitor = ReportFormulaParserVisitor;