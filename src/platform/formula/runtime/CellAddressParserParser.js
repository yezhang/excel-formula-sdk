// Generated from /Users/zhangye/Documents/code/code_yonyou/FormulaTextArea/src/platform/formula/grammar/CellAddressParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var CellAddressParserListener = require('./CellAddressParserListener').CellAddressParserListener;
var CellAddressParserVisitor = require('./CellAddressParserVisitor').CellAddressParserVisitor;

var grammarFileName = "CellAddressParser.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0007\u001f\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0003\u0002",
    "\u0005\u0002\u000f\n\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0004\u0005\u0004\u0016\n\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0002\u0002\u0007\u0002\u0004\u0006\b\n\u0002\u0002\u0002\u001b\u0002",
    "\u000e\u0003\u0002\u0002\u0002\u0004\u0010\u0003\u0002\u0002\u0002\u0006",
    "\u0015\u0003\u0002\u0002\u0002\b\u001a\u0003\u0002\u0002\u0002\n\u001c",
    "\u0003\u0002\u0002\u0002\f\u000f\u0005\u0006\u0004\u0002\r\u000f\u0005",
    "\u0004\u0003\u0002\u000e\f\u0003\u0002\u0002\u0002\u000e\r\u0003\u0002",
    "\u0002\u0002\u000f\u0003\u0003\u0002\u0002\u0002\u0010\u0011\u0005\u0006",
    "\u0004\u0002\u0011\u0012\u0007\u0003\u0002\u0002\u0012\u0013\u0005\u0006",
    "\u0004\u0002\u0013\u0005\u0003\u0002\u0002\u0002\u0014\u0016\u0007\u0004",
    "\u0002\u0002\u0015\u0014\u0003\u0002\u0002\u0002\u0015\u0016\u0003\u0002",
    "\u0002\u0002\u0016\u0017\u0003\u0002\u0002\u0002\u0017\u0018\u0005\b",
    "\u0005\u0002\u0018\u0019\u0005\n\u0006\u0002\u0019\u0007\u0003\u0002",
    "\u0002\u0002\u001a\u001b\u0007\u0005\u0002\u0002\u001b\t\u0003\u0002",
    "\u0002\u0002\u001c\u001d\u0007\u0006\u0002\u0002\u001d\u000b\u0003\u0002",
    "\u0002\u0002\u0004\u000e\u0015"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "':'" ];

var symbolicNames = [ null, null, "SheetAddress", "CellColumnAddress", "CellRowAddress", 
                      "StringCharacter" ];

var ruleNames =  [ "cellAddressExpress", "cellRangeExpr", "cellAddressExpr", 
                   "cellColumnAddressExpr", "cellRowAddressExpr" ];

function CellAddressParserParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

CellAddressParserParser.prototype = Object.create(antlr4.Parser.prototype);
CellAddressParserParser.prototype.constructor = CellAddressParserParser;

Object.defineProperty(CellAddressParserParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

CellAddressParserParser.EOF = antlr4.Token.EOF;
CellAddressParserParser.T__0 = 1;
CellAddressParserParser.SheetAddress = 2;
CellAddressParserParser.CellColumnAddress = 3;
CellAddressParserParser.CellRowAddress = 4;
CellAddressParserParser.StringCharacter = 5;

CellAddressParserParser.RULE_cellAddressExpress = 0;
CellAddressParserParser.RULE_cellRangeExpr = 1;
CellAddressParserParser.RULE_cellAddressExpr = 2;
CellAddressParserParser.RULE_cellColumnAddressExpr = 3;
CellAddressParserParser.RULE_cellRowAddressExpr = 4;


function CellAddressExpressContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CellAddressParserParser.RULE_cellAddressExpress;
    return this;
}

CellAddressExpressContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CellAddressExpressContext.prototype.constructor = CellAddressExpressContext;

CellAddressExpressContext.prototype.cellAddressExpr = function() {
    return this.getTypedRuleContext(CellAddressExprContext,0);
};

CellAddressExpressContext.prototype.cellRangeExpr = function() {
    return this.getTypedRuleContext(CellRangeExprContext,0);
};

CellAddressExpressContext.prototype.enterRule = function(listener) {
    if(listener instanceof CellAddressParserListener ) {
        listener.enterCellAddressExpress(this);
	}
};

CellAddressExpressContext.prototype.exitRule = function(listener) {
    if(listener instanceof CellAddressParserListener ) {
        listener.exitCellAddressExpress(this);
	}
};

CellAddressExpressContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CellAddressParserVisitor ) {
        return visitor.visitCellAddressExpress(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CellAddressParserParser.CellAddressExpressContext = CellAddressExpressContext;

CellAddressParserParser.prototype.cellAddressExpress = function() {

    var localctx = new CellAddressExpressContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, CellAddressParserParser.RULE_cellAddressExpress);
    try {
        this.state = 12;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 10;
            this.cellAddressExpr();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 11;
            this.cellRangeExpr();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CellRangeExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CellAddressParserParser.RULE_cellRangeExpr;
    return this;
}

CellRangeExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CellRangeExprContext.prototype.constructor = CellRangeExprContext;

CellRangeExprContext.prototype.cellAddressExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CellAddressExprContext);
    } else {
        return this.getTypedRuleContext(CellAddressExprContext,i);
    }
};

CellRangeExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof CellAddressParserListener ) {
        listener.enterCellRangeExpr(this);
	}
};

CellRangeExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof CellAddressParserListener ) {
        listener.exitCellRangeExpr(this);
	}
};

CellRangeExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CellAddressParserVisitor ) {
        return visitor.visitCellRangeExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CellAddressParserParser.CellRangeExprContext = CellRangeExprContext;

CellAddressParserParser.prototype.cellRangeExpr = function() {

    var localctx = new CellRangeExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, CellAddressParserParser.RULE_cellRangeExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 14;
        this.cellAddressExpr();
        this.state = 15;
        this.match(CellAddressParserParser.T__0);
        this.state = 16;
        this.cellAddressExpr();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CellAddressExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CellAddressParserParser.RULE_cellAddressExpr;
    return this;
}

CellAddressExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CellAddressExprContext.prototype.constructor = CellAddressExprContext;

CellAddressExprContext.prototype.cellColumnAddressExpr = function() {
    return this.getTypedRuleContext(CellColumnAddressExprContext,0);
};

CellAddressExprContext.prototype.cellRowAddressExpr = function() {
    return this.getTypedRuleContext(CellRowAddressExprContext,0);
};

CellAddressExprContext.prototype.SheetAddress = function() {
    return this.getToken(CellAddressParserParser.SheetAddress, 0);
};

CellAddressExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof CellAddressParserListener ) {
        listener.enterCellAddressExpr(this);
	}
};

CellAddressExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof CellAddressParserListener ) {
        listener.exitCellAddressExpr(this);
	}
};

CellAddressExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CellAddressParserVisitor ) {
        return visitor.visitCellAddressExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CellAddressParserParser.CellAddressExprContext = CellAddressExprContext;

CellAddressParserParser.prototype.cellAddressExpr = function() {

    var localctx = new CellAddressExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, CellAddressParserParser.RULE_cellAddressExpr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 19;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===CellAddressParserParser.SheetAddress) {
            this.state = 18;
            this.match(CellAddressParserParser.SheetAddress);
        }

        this.state = 21;
        this.cellColumnAddressExpr();
        this.state = 22;
        this.cellRowAddressExpr();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CellColumnAddressExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CellAddressParserParser.RULE_cellColumnAddressExpr;
    return this;
}

CellColumnAddressExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CellColumnAddressExprContext.prototype.constructor = CellColumnAddressExprContext;

CellColumnAddressExprContext.prototype.CellColumnAddress = function() {
    return this.getToken(CellAddressParserParser.CellColumnAddress, 0);
};

CellColumnAddressExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof CellAddressParserListener ) {
        listener.enterCellColumnAddressExpr(this);
	}
};

CellColumnAddressExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof CellAddressParserListener ) {
        listener.exitCellColumnAddressExpr(this);
	}
};

CellColumnAddressExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CellAddressParserVisitor ) {
        return visitor.visitCellColumnAddressExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CellAddressParserParser.CellColumnAddressExprContext = CellColumnAddressExprContext;

CellAddressParserParser.prototype.cellColumnAddressExpr = function() {

    var localctx = new CellColumnAddressExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, CellAddressParserParser.RULE_cellColumnAddressExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 24;
        this.match(CellAddressParserParser.CellColumnAddress);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CellRowAddressExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CellAddressParserParser.RULE_cellRowAddressExpr;
    return this;
}

CellRowAddressExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CellRowAddressExprContext.prototype.constructor = CellRowAddressExprContext;

CellRowAddressExprContext.prototype.CellRowAddress = function() {
    return this.getToken(CellAddressParserParser.CellRowAddress, 0);
};

CellRowAddressExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof CellAddressParserListener ) {
        listener.enterCellRowAddressExpr(this);
	}
};

CellRowAddressExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof CellAddressParserListener ) {
        listener.exitCellRowAddressExpr(this);
	}
};

CellRowAddressExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CellAddressParserVisitor ) {
        return visitor.visitCellRowAddressExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CellAddressParserParser.CellRowAddressExprContext = CellRowAddressExprContext;

CellAddressParserParser.prototype.cellRowAddressExpr = function() {

    var localctx = new CellRowAddressExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, CellAddressParserParser.RULE_cellRowAddressExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 26;
        this.match(CellAddressParserParser.CellRowAddress);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.CellAddressParserParser = CellAddressParserParser;
