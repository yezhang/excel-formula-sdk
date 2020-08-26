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

// Visit a parse tree produced by CellAddressParser#CellAddress.
CellAddressVisitor.prototype.visitCellAddress = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CellAddressParser#CellRange.
CellAddressVisitor.prototype.visitCellRange = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CellAddressParser#a1Reference.
CellAddressVisitor.prototype.visitA1Reference = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CellAddressParser#a1Column.
CellAddressVisitor.prototype.visitA1Column = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CellAddressParser#a1Row.
CellAddressVisitor.prototype.visitA1Row = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CellAddressParser#a1RelativeColumn.
CellAddressVisitor.prototype.visitA1RelativeColumn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CellAddressParser#a1AbsoluteColumn.
CellAddressVisitor.prototype.visitA1AbsoluteColumn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CellAddressParser#a1RelativeRow.
CellAddressVisitor.prototype.visitA1RelativeRow = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CellAddressParser#a1AbsoluteRow.
CellAddressVisitor.prototype.visitA1AbsoluteRow = function(ctx) {
  return this.visitChildren(ctx);
};



exports.CellAddressVisitor = CellAddressVisitor;