// Generated from /Users/zhangye/Documents/code/code_yonyou/FormulaTextArea/src/platform/formula/grammar/CellAddress.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var CellAddressListener = require('./CellAddressListener').CellAddressListener;
var CellAddressVisitor = require('./CellAddressVisitor').CellAddressVisitor;

var grammarFileName = "CellAddress.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\b&\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0003\u0002",
    "\u0003\u0002\u0005\u0002\u0011\n\u0002\u0003\u0003\u0005\u0003\u0014",
    "\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0005\u0004\u001b\n\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0002\u0002\b\u0002\u0004\u0006\b\n\f\u0002\u0002\u0002\"\u0002",
    "\u0010\u0003\u0002\u0002\u0002\u0004\u0013\u0003\u0002\u0002\u0002\u0006",
    "\u001a\u0003\u0002\u0002\u0002\b\u001e\u0003\u0002\u0002\u0002\n!\u0003",
    "\u0002\u0002\u0002\f#\u0003\u0002\u0002\u0002\u000e\u0011\u0005\u0006",
    "\u0004\u0002\u000f\u0011\u0005\u0004\u0003\u0002\u0010\u000e\u0003\u0002",
    "\u0002\u0002\u0010\u000f\u0003\u0002\u0002\u0002\u0011\u0003\u0003\u0002",
    "\u0002\u0002\u0012\u0014\u0007\u0003\u0002\u0002\u0013\u0012\u0003\u0002",
    "\u0002\u0002\u0013\u0014\u0003\u0002\u0002\u0002\u0014\u0015\u0003\u0002",
    "\u0002\u0002\u0015\u0016\u0005\b\u0005\u0002\u0016\u0017\u0007\u0006",
    "\u0002\u0002\u0017\u0018\u0005\b\u0005\u0002\u0018\u0005\u0003\u0002",
    "\u0002\u0002\u0019\u001b\u0007\u0003\u0002\u0002\u001a\u0019\u0003\u0002",
    "\u0002\u0002\u001a\u001b\u0003\u0002\u0002\u0002\u001b\u001c\u0003\u0002",
    "\u0002\u0002\u001c\u001d\u0005\b\u0005\u0002\u001d\u0007\u0003\u0002",
    "\u0002\u0002\u001e\u001f\u0005\n\u0006\u0002\u001f \u0005\f\u0007\u0002",
    " \t\u0003\u0002\u0002\u0002!\"\u0007\u0004\u0002\u0002\"\u000b\u0003",
    "\u0002\u0002\u0002#$\u0007\u0005\u0002\u0002$\r\u0003\u0002\u0002\u0002",
    "\u0005\u0010\u0013\u001a"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, "':'", "'!'" ];

var symbolicNames = [ null, "SheetAddress", "CellColumnAddress", "CellRowAddress", 
                      "Colon", "ExclamationMark", "StringCharacter" ];

var ruleNames =  [ "cellAddressExpress", "cellRangeExpr", "cellAddressExpr", 
                   "plainCellAddressExpr", "cellColumnAddressExpr", "cellRowAddressExpr" ];

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
CellAddressParser.SheetAddress = 1;
CellAddressParser.CellColumnAddress = 2;
CellAddressParser.CellRowAddress = 3;
CellAddressParser.Colon = 4;
CellAddressParser.ExclamationMark = 5;
CellAddressParser.StringCharacter = 6;

CellAddressParser.RULE_cellAddressExpress = 0;
CellAddressParser.RULE_cellRangeExpr = 1;
CellAddressParser.RULE_cellAddressExpr = 2;
CellAddressParser.RULE_plainCellAddressExpr = 3;
CellAddressParser.RULE_cellColumnAddressExpr = 4;
CellAddressParser.RULE_cellRowAddressExpr = 5;


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
        this.state = 14;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 12;
            this.cellAddressExpr();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 13;
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

CellRangeExprContext.prototype.plainCellAddressExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PlainCellAddressExprContext);
    } else {
        return this.getTypedRuleContext(PlainCellAddressExprContext,i);
    }
};

CellRangeExprContext.prototype.Colon = function() {
    return this.getToken(CellAddressParser.Colon, 0);
};

CellRangeExprContext.prototype.SheetAddress = function() {
    return this.getToken(CellAddressParser.SheetAddress, 0);
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
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 17;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===CellAddressParser.SheetAddress) {
            this.state = 16;
            this.match(CellAddressParser.SheetAddress);
        }

        this.state = 19;
        this.plainCellAddressExpr();
        this.state = 20;
        this.match(CellAddressParser.Colon);
        this.state = 21;
        this.plainCellAddressExpr();
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

CellAddressExprContext.prototype.plainCellAddressExpr = function() {
    return this.getTypedRuleContext(PlainCellAddressExprContext,0);
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
        this.state = 24;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===CellAddressParser.SheetAddress) {
            this.state = 23;
            this.match(CellAddressParser.SheetAddress);
        }

        this.state = 26;
        this.plainCellAddressExpr();
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


function PlainCellAddressExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CellAddressParser.RULE_plainCellAddressExpr;
    return this;
}

PlainCellAddressExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PlainCellAddressExprContext.prototype.constructor = PlainCellAddressExprContext;

PlainCellAddressExprContext.prototype.cellColumnAddressExpr = function() {
    return this.getTypedRuleContext(CellColumnAddressExprContext,0);
};

PlainCellAddressExprContext.prototype.cellRowAddressExpr = function() {
    return this.getTypedRuleContext(CellRowAddressExprContext,0);
};

PlainCellAddressExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof CellAddressListener ) {
        listener.enterPlainCellAddressExpr(this);
	}
};

PlainCellAddressExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof CellAddressListener ) {
        listener.exitPlainCellAddressExpr(this);
	}
};

PlainCellAddressExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CellAddressVisitor ) {
        return visitor.visitPlainCellAddressExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CellAddressParser.PlainCellAddressExprContext = PlainCellAddressExprContext;

CellAddressParser.prototype.plainCellAddressExpr = function() {

    var localctx = new PlainCellAddressExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, CellAddressParser.RULE_plainCellAddressExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 28;
        this.cellColumnAddressExpr();
        this.state = 29;
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
    this.enterRule(localctx, 8, CellAddressParser.RULE_cellColumnAddressExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 31;
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
    this.enterRule(localctx, 10, CellAddressParser.RULE_cellRowAddressExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 33;
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
