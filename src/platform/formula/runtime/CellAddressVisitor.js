// Generated from /Users/zhangye/Documents/code/code_yonyou/FormulaTextArea/src/platform/formula/grammar/CellAddress.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by CellAddressParser.

function CellAddressVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

CellAddressVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
CellAddressVisitor.prototype.constructor = CellAddressVisitor;

// Visit a parse tree produced by CellAddressParser#cellAddressExpress.
CellAddressVisitor.prototype.visitCellAddressExpress = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CellAddressParser#cellRangeExpr.
CellAddressVisitor.prototype.visitCellRangeExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CellAddressParser#cellAddressExpr.
CellAddressVisitor.prototype.visitCellAddressExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CellAddressParser#cellColumnAddressExpr.
CellAddressVisitor.prototype.visitCellColumnAddressExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CellAddressParser#cellRowAddressExpr.
CellAddressVisitor.prototype.visitCellRowAddressExpr = function(ctx) {
  return this.visitChildren(ctx);
};



exports.CellAddressVisitor = CellAddressVisitor;