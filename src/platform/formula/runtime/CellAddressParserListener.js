// Generated from /Users/zhangye/Documents/code/code_yonyou/FormulaTextArea/src/platform/formula/grammar/CellAddressParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by CellAddressParserParser.
function CellAddressParserListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

CellAddressParserListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
CellAddressParserListener.prototype.constructor = CellAddressParserListener;

// Enter a parse tree produced by CellAddressParserParser#cellAddressExpress.
CellAddressParserListener.prototype.enterCellAddressExpress = function(ctx) {
};

// Exit a parse tree produced by CellAddressParserParser#cellAddressExpress.
CellAddressParserListener.prototype.exitCellAddressExpress = function(ctx) {
};


// Enter a parse tree produced by CellAddressParserParser#cellRangeExpr.
CellAddressParserListener.prototype.enterCellRangeExpr = function(ctx) {
};

// Exit a parse tree produced by CellAddressParserParser#cellRangeExpr.
CellAddressParserListener.prototype.exitCellRangeExpr = function(ctx) {
};


// Enter a parse tree produced by CellAddressParserParser#cellAddressExpr.
CellAddressParserListener.prototype.enterCellAddressExpr = function(ctx) {
};

// Exit a parse tree produced by CellAddressParserParser#cellAddressExpr.
CellAddressParserListener.prototype.exitCellAddressExpr = function(ctx) {
};


// Enter a parse tree produced by CellAddressParserParser#cellColumnAddressExpr.
CellAddressParserListener.prototype.enterCellColumnAddressExpr = function(ctx) {
};

// Exit a parse tree produced by CellAddressParserParser#cellColumnAddressExpr.
CellAddressParserListener.prototype.exitCellColumnAddressExpr = function(ctx) {
};


// Enter a parse tree produced by CellAddressParserParser#cellRowAddressExpr.
CellAddressParserListener.prototype.enterCellRowAddressExpr = function(ctx) {
};

// Exit a parse tree produced by CellAddressParserParser#cellRowAddressExpr.
CellAddressParserListener.prototype.exitCellRowAddressExpr = function(ctx) {
};



exports.CellAddressParserListener = CellAddressParserListener;