// Generated from /Users/zhangye/Documents/code/code_yonyou/FormulaTextArea/src/platform/formula/grammar/CellAddressParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by CellAddressParserParser.

function CellAddressParserVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

CellAddressParserVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
CellAddressParserVisitor.prototype.constructor = CellAddressParserVisitor;

// Visit a parse tree produced by CellAddressParserParser#cellAddressExpress.
CellAddressParserVisitor.prototype.visitCellAddressExpress = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CellAddressParserParser#cellRangeExpr.
CellAddressParserVisitor.prototype.visitCellRangeExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CellAddressParserParser#cellAddressExpr.
CellAddressParserVisitor.prototype.visitCellAddressExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CellAddressParserParser#cellColumnAddressExpr.
CellAddressParserVisitor.prototype.visitCellColumnAddressExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CellAddressParserParser#cellRowAddressExpr.
CellAddressParserVisitor.prototype.visitCellRowAddressExpr = function(ctx) {
  return this.visitChildren(ctx);
};



exports.CellAddressParserVisitor = CellAddressParserVisitor;