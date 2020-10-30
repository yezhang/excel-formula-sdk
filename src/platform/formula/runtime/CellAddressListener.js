// Generated from /Users/zhangye/Documents/code/code_yonyou/FormulaTextArea/src/platform/formula/grammar/CellAddress.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by CellAddressParser.
function CellAddressListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

CellAddressListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
CellAddressListener.prototype.constructor = CellAddressListener;

// Enter a parse tree produced by CellAddressParser#CellAddress.
CellAddressListener.prototype.enterCellAddress = function(ctx) {
};

// Exit a parse tree produced by CellAddressParser#CellAddress.
CellAddressListener.prototype.exitCellAddress = function(ctx) {
};


// Enter a parse tree produced by CellAddressParser#CellRange.
CellAddressListener.prototype.enterCellRange = function(ctx) {
};

// Exit a parse tree produced by CellAddressParser#CellRange.
CellAddressListener.prototype.exitCellRange = function(ctx) {
};


// Enter a parse tree produced by CellAddressParser#CellFloatRange.
CellAddressListener.prototype.enterCellFloatRange = function(ctx) {
};

// Exit a parse tree produced by CellAddressParser#CellFloatRange.
CellAddressListener.prototype.exitCellFloatRange = function(ctx) {
};


// Enter a parse tree produced by CellAddressParser#a1Reference.
CellAddressListener.prototype.enterA1Reference = function(ctx) {
};

// Exit a parse tree produced by CellAddressParser#a1Reference.
CellAddressListener.prototype.exitA1Reference = function(ctx) {
};


// Enter a parse tree produced by CellAddressParser#a1Column.
CellAddressListener.prototype.enterA1Column = function(ctx) {
};

// Exit a parse tree produced by CellAddressParser#a1Column.
CellAddressListener.prototype.exitA1Column = function(ctx) {
};


// Enter a parse tree produced by CellAddressParser#a1Row.
CellAddressListener.prototype.enterA1Row = function(ctx) {
};

// Exit a parse tree produced by CellAddressParser#a1Row.
CellAddressListener.prototype.exitA1Row = function(ctx) {
};


// Enter a parse tree produced by CellAddressParser#a1RelativeColumn.
CellAddressListener.prototype.enterA1RelativeColumn = function(ctx) {
};

// Exit a parse tree produced by CellAddressParser#a1RelativeColumn.
CellAddressListener.prototype.exitA1RelativeColumn = function(ctx) {
};


// Enter a parse tree produced by CellAddressParser#a1AbsoluteColumn.
CellAddressListener.prototype.enterA1AbsoluteColumn = function(ctx) {
};

// Exit a parse tree produced by CellAddressParser#a1AbsoluteColumn.
CellAddressListener.prototype.exitA1AbsoluteColumn = function(ctx) {
};


// Enter a parse tree produced by CellAddressParser#a1RelativeRow.
CellAddressListener.prototype.enterA1RelativeRow = function(ctx) {
};

// Exit a parse tree produced by CellAddressParser#a1RelativeRow.
CellAddressListener.prototype.exitA1RelativeRow = function(ctx) {
};


// Enter a parse tree produced by CellAddressParser#a1AbsoluteRow.
CellAddressListener.prototype.enterA1AbsoluteRow = function(ctx) {
};

// Exit a parse tree produced by CellAddressParser#a1AbsoluteRow.
CellAddressListener.prototype.exitA1AbsoluteRow = function(ctx) {
};



exports.CellAddressListener = CellAddressListener;