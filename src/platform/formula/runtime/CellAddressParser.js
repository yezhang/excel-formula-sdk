// Generated from /Users/zhangye/Documents/code/code_yonyou/FormulaTextArea/src/platform/formula/grammar/CellAddress.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var CellAddressListener = require('./CellAddressListener').CellAddressListener;
var CellAddressVisitor = require('./CellAddressVisitor').CellAddressVisitor;

var grammarFileName = "CellAddress.g4";


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

function CellAddressParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

CellAddressParser.prototype = Object.create(antlr4.Parser.prototype);
CellAddressParser.prototype.constructor = CellAddressParser;

Object.defineProperty(CellAddressParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

CellAddressParser.EOF = antlr4.Token.EOF;
CellAddressParser.T__0 = 1;
CellAddressParser.SheetAddress = 2;
CellAddressParser.CellColumnAddress = 3;
CellAddressParser.CellRowAddress = 4;
CellAddressParser.StringCharacter = 5;

CellAddressParser.RULE_cellAddressExpress = 0;
CellAddressParser.RULE_cellRangeExpr = 1;
CellAddressParser.RULE_cellAddressExpr = 2;
CellAddressParser.RULE_cellColumnAddressExpr = 3;
CellAddressParser.RULE_cellRowAddressExpr = 4;


function CellAddressExpressContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CellAddressParser.RULE_cellAddressExpress;
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
    if(listener instanceof CellAddressListener ) {
        listener.enterCellAddressExpress(this);
	}
};

CellAddressExpressContext.prototype.exitRule = function(listener) {
    if(listener instanceof CellAddressListener ) {
        listener.exitCellAddressExpress(this);
	}
};

CellAddressExpressContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CellAddressVisitor ) {
        return visitor.visitCellAddressExpress(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CellAddressParser.CellAddressExpressContext = CellAddressExpressContext;

CellAddressParser.prototype.cellAddressExpress = function() {

    var localctx = new CellAddressExpressContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, CellAddressParser.RULE_cellAddressExpress);
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
    this.ruleIndex = CellAddressParser.RULE_cellRangeExpr;
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
    if(listener instanceof CellAddressListener ) {
        listener.enterCellRangeExpr(this);
	}
};

CellRangeExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof CellAddressListener ) {
        listener.exitCellRangeExpr(this);
	}
};

CellRangeExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CellAddressVisitor ) {
        return visitor.visitCellRangeExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CellAddressParser.CellRangeExprContext = CellRangeExprContext;

CellAddressParser.prototype.cellRangeExpr = function() {

    var localctx = new CellRangeExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, CellAddressParser.RULE_cellRangeExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 14;
        this.cellAddressExpr();
        this.state = 15;
        this.match(CellAddressParser.T__0);
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
    this.ruleIndex = CellAddressParser.RULE_cellAddressExpr;
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
    return this.getToken(CellAddressParser.SheetAddress, 0);
};

CellAddressExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof CellAddressListener ) {
        listener.enterCellAddressExpr(this);
	}
};

CellAddressExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof CellAddressListener ) {
        listener.exitCellAddressExpr(this);
	}
};

CellAddressExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CellAddressVisitor ) {
        return visitor.visitCellAddressExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CellAddressParser.CellAddressExprContext = CellAddressExprContext;

CellAddressParser.prototype.cellAddressExpr = function() {

    var localctx = new CellAddressExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, CellAddressParser.RULE_cellAddressExpr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 19;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===CellAddressParser.SheetAddress) {
            this.state = 18;
            this.match(CellAddressParser.SheetAddress);
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
    this.ruleIndex = CellAddressParser.RULE_cellColumnAddressExpr;
    return this;
}

CellColumnAddressExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CellColumnAddressExprContext.prototype.constructor = CellColumnAddressExprContext;

CellColumnAddressExprContext.prototype.CellColumnAddress = function() {
    return this.getToken(CellAddressParser.CellColumnAddress, 0);
};

CellColumnAddressExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof CellAddressListener ) {
        listener.enterCellColumnAddressExpr(this);
	}
};

CellColumnAddressExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof CellAddressListener ) {
        listener.exitCellColumnAddressExpr(this);
	}
};

CellColumnAddressExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CellAddressVisitor ) {
        return visitor.visitCellColumnAddressExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CellAddressParser.CellColumnAddressExprContext = CellColumnAddressExprContext;

CellAddressParser.prototype.cellColumnAddressExpr = function() {

    var localctx = new CellColumnAddressExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, CellAddressParser.RULE_cellColumnAddressExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 24;
        this.match(CellAddressParser.CellColumnAddress);
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
    this.ruleIndex = CellAddressParser.RULE_cellRowAddressExpr;
    return this;
}

CellRowAddressExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CellRowAddressExprContext.prototype.constructor = CellRowAddressExprContext;

CellRowAddressExprContext.prototype.CellRowAddress = function() {
    return this.getToken(CellAddressParser.CellRowAddress, 0);
};

CellRowAddressExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof CellAddressListener ) {
        listener.enterCellRowAddressExpr(this);
	}
};

CellRowAddressExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof CellAddressListener ) {
        listener.exitCellRowAddressExpr(this);
	}
};

CellRowAddressExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CellAddressVisitor ) {
        return visitor.visitCellRowAddressExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CellAddressParser.CellRowAddressExprContext = CellRowAddressExprContext;

CellAddressParser.prototype.cellRowAddressExpr = function() {

    var localctx = new CellRowAddressExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, CellAddressParser.RULE_cellRowAddressExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 26;
        this.match(CellAddressParser.CellRowAddress);
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


exports.CellAddressParser = CellAddressParser;
