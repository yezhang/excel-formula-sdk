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

// Enter a parse tree produced by CellAddressParser#cellAddressExpress.
CellAddressListener.prototype.enterCellAddressExpress = function(ctx) {
};

// Exit a parse tree produced by CellAddressParser#cellAddressExpress.
CellAddressListener.prototype.exitCellAddressExpress = function(ctx) {
};


// Enter a parse tree produced by CellAddressParser#cellRangeExpr.
CellAddressListener.prototype.enterCellRangeExpr = function(ctx) {
};

// Exit a parse tree produced by CellAddressParser#cellRangeExpr.
CellAddressListener.prototype.exitCellRangeExpr = function(ctx) {
};


// Enter a parse tree produced by CellAddressParser#cellAddressExpr.
CellAddressListener.prototype.enterCellAddressExpr = function(ctx) {
};

// Exit a parse tree produced by CellAddressParser#cellAddressExpr.
CellAddressListener.prototype.exitCellAddressExpr = function(ctx) {
};


// Enter a parse tree produced by CellAddressParser#plainCellAddressExpr.
CellAddressListener.prototype.enterPlainCellAddressExpr = function(ctx) {
};

// Exit a parse tree produced by CellAddressParser#plainCellAddressExpr.
CellAddressListener.prototype.exitPlainCellAddressExpr = function(ctx) {
};


// Enter a parse tree produced by CellAddressParser#cellColumnAddressExpr.
CellAddressListener.prototype.enterCellColumnAddressExpr = function(ctx) {
};

// Exit a parse tree produced by CellAddressParser#cellColumnAddressExpr.
CellAddressListener.prototype.exitCellColumnAddressExpr = function(ctx) {
};


// Enter a parse tree produced by CellAddressParser#cellRowAddressExpr.
CellAddressListener.prototype.enterCellRowAddressExpr = function(ctx) {
};

// Exit a parse tree produced by CellAddressParser#cellRowAddressExpr.
CellAddressListener.prototype.exitCellRowAddressExpr = function(ctx) {
};



exports.CellAddressListener = CellAddressListener;