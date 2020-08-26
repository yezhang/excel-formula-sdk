// Generated from /Users/zhangye/Documents/code/code_yonyou/FormulaTextArea/src/platform/formula/grammar/CellAddress.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var CellAddressListener = require('./CellAddressListener').CellAddressListener;
var CellAddressVisitor = require('./CellAddressVisitor').CellAddressVisitor;

var grammarFileName = "CellAddress.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\b8\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004\b",
    "\t\b\u0004\t\t\t\u0003\u0002\u0005\u0002\u0014\n\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0005\u0002\u001a\n\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0005\u0002!\n\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0005\u0004",
    "(\n\u0004\u0003\u0005\u0003\u0005\u0005\u0005,\n\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0002\u0002\n\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0002\u0002\u00024\u0002 \u0003\u0002\u0002\u0002\u0004\"\u0003\u0002",
    "\u0002\u0002\u0006\'\u0003\u0002\u0002\u0002\b+\u0003\u0002\u0002\u0002",
    "\n-\u0003\u0002\u0002\u0002\f/\u0003\u0002\u0002\u0002\u000e2\u0003",
    "\u0002\u0002\u0002\u00104\u0003\u0002\u0002\u0002\u0012\u0014\u0007",
    "\u0003\u0002\u0002\u0013\u0012\u0003\u0002\u0002\u0002\u0013\u0014\u0003",
    "\u0002\u0002\u0002\u0014\u0015\u0003\u0002\u0002\u0002\u0015\u0016\u0005",
    "\u0004\u0003\u0002\u0016\u0017\u0007\u0002\u0002\u0003\u0017!\u0003",
    "\u0002\u0002\u0002\u0018\u001a\u0007\u0003\u0002\u0002\u0019\u0018\u0003",
    "\u0002\u0002\u0002\u0019\u001a\u0003\u0002\u0002\u0002\u001a\u001b\u0003",
    "\u0002\u0002\u0002\u001b\u001c\u0005\u0004\u0003\u0002\u001c\u001d\u0007",
    "\u0006\u0002\u0002\u001d\u001e\u0005\u0004\u0003\u0002\u001e\u001f\u0007",
    "\u0002\u0002\u0003\u001f!\u0003\u0002\u0002\u0002 \u0013\u0003\u0002",
    "\u0002\u0002 \u0019\u0003\u0002\u0002\u0002!\u0003\u0003\u0002\u0002",
    "\u0002\"#\u0005\u0006\u0004\u0002#$\u0005\b\u0005\u0002$\u0005\u0003",
    "\u0002\u0002\u0002%(\u0005\n\u0006\u0002&(\u0005\f\u0007\u0002\'%\u0003",
    "\u0002\u0002\u0002\'&\u0003\u0002\u0002\u0002(\u0007\u0003\u0002\u0002",
    "\u0002),\u0005\u000e\b\u0002*,\u0005\u0010\t\u0002+)\u0003\u0002\u0002",
    "\u0002+*\u0003\u0002\u0002\u0002,\t\u0003\u0002\u0002\u0002-.\u0007",
    "\u0004\u0002\u0002.\u000b\u0003\u0002\u0002\u0002/0\u0007\u0007\u0002",
    "\u000201\u0007\u0004\u0002\u00021\r\u0003\u0002\u0002\u000223\u0007",
    "\u0005\u0002\u00023\u000f\u0003\u0002\u0002\u000245\u0007\u0007\u0002",
    "\u000256\u0007\u0005\u0002\u00026\u0011\u0003\u0002\u0002\u0002\u0007",
    "\u0013\u0019 \'+"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, "':'", "'$'", "'!'" ];

var symbolicNames = [ null, "WorkSheetPrefix", "CellColumnAddress", "CellRowAddress", 
                      "Colon", "Dollar", "ExclamationMark" ];

var ruleNames =  [ "cellReference", "a1Reference", "a1Column", "a1Row", 
                   "a1RelativeColumn", "a1AbsoluteColumn", "a1RelativeRow", 
                   "a1AbsoluteRow" ];

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
CellAddressParser.WorkSheetPrefix = 1;
CellAddressParser.CellColumnAddress = 2;
CellAddressParser.CellRowAddress = 3;
CellAddressParser.Colon = 4;
CellAddressParser.Dollar = 5;
CellAddressParser.ExclamationMark = 6;

CellAddressParser.RULE_cellReference = 0;
CellAddressParser.RULE_a1Reference = 1;
CellAddressParser.RULE_a1Column = 2;
CellAddressParser.RULE_a1Row = 3;
CellAddressParser.RULE_a1RelativeColumn = 4;
CellAddressParser.RULE_a1AbsoluteColumn = 5;
CellAddressParser.RULE_a1RelativeRow = 6;
CellAddressParser.RULE_a1AbsoluteRow = 7;


function CellReferenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CellAddressParser.RULE_cellReference;
    return this;
}

CellReferenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CellReferenceContext.prototype.constructor = CellReferenceContext;


 
CellReferenceContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function CellAddressContext(parser, ctx) {
	CellReferenceContext.call(this, parser);
    CellReferenceContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CellAddressContext.prototype = Object.create(CellReferenceContext.prototype);
CellAddressContext.prototype.constructor = CellAddressContext;

CellAddressParser.CellAddressContext = CellAddressContext;

CellAddressContext.prototype.a1Reference = function() {
    return this.getTypedRuleContext(A1ReferenceContext,0);
};

CellAddressContext.prototype.EOF = function() {
    return this.getToken(CellAddressParser.EOF, 0);
};

CellAddressContext.prototype.WorkSheetPrefix = function() {
    return this.getToken(CellAddressParser.WorkSheetPrefix, 0);
};
CellAddressContext.prototype.enterRule = function(listener) {
    if(listener instanceof CellAddressListener ) {
        listener.enterCellAddress(this);
	}
};

CellAddressContext.prototype.exitRule = function(listener) {
    if(listener instanceof CellAddressListener ) {
        listener.exitCellAddress(this);
	}
};

CellAddressContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CellAddressVisitor ) {
        return visitor.visitCellAddress(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function CellRangeContext(parser, ctx) {
	CellReferenceContext.call(this, parser);
    CellReferenceContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CellRangeContext.prototype = Object.create(CellReferenceContext.prototype);
CellRangeContext.prototype.constructor = CellRangeContext;

CellAddressParser.CellRangeContext = CellRangeContext;

CellRangeContext.prototype.a1Reference = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(A1ReferenceContext);
    } else {
        return this.getTypedRuleContext(A1ReferenceContext,i);
    }
};

CellRangeContext.prototype.Colon = function() {
    return this.getToken(CellAddressParser.Colon, 0);
};

CellRangeContext.prototype.EOF = function() {
    return this.getToken(CellAddressParser.EOF, 0);
};

CellRangeContext.prototype.WorkSheetPrefix = function() {
    return this.getToken(CellAddressParser.WorkSheetPrefix, 0);
};
CellRangeContext.prototype.enterRule = function(listener) {
    if(listener instanceof CellAddressListener ) {
        listener.enterCellRange(this);
	}
};

CellRangeContext.prototype.exitRule = function(listener) {
    if(listener instanceof CellAddressListener ) {
        listener.exitCellRange(this);
	}
};

CellRangeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CellAddressVisitor ) {
        return visitor.visitCellRange(this);
    } else {
        return visitor.visitChildren(this);
    }
};



CellAddressParser.CellReferenceContext = CellReferenceContext;

CellAddressParser.prototype.cellReference = function() {

    var localctx = new CellReferenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, CellAddressParser.RULE_cellReference);
    var _la = 0; // Token type
    try {
        this.state = 30;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            localctx = new CellAddressContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 17;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===CellAddressParser.WorkSheetPrefix) {
                this.state = 16;
                this.match(CellAddressParser.WorkSheetPrefix);
            }

            this.state = 19;
            this.a1Reference();
            this.state = 20;
            this.match(CellAddressParser.EOF);
            break;

        case 2:
            localctx = new CellRangeContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 23;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===CellAddressParser.WorkSheetPrefix) {
                this.state = 22;
                this.match(CellAddressParser.WorkSheetPrefix);
            }

            this.state = 25;
            this.a1Reference();
            this.state = 26;
            this.match(CellAddressParser.Colon);
            this.state = 27;
            this.a1Reference();
            this.state = 28;
            this.match(CellAddressParser.EOF);
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


function A1ReferenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CellAddressParser.RULE_a1Reference;
    return this;
}

A1ReferenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
A1ReferenceContext.prototype.constructor = A1ReferenceContext;

A1ReferenceContext.prototype.a1Column = function() {
    return this.getTypedRuleContext(A1ColumnContext,0);
};

A1ReferenceContext.prototype.a1Row = function() {
    return this.getTypedRuleContext(A1RowContext,0);
};

A1ReferenceContext.prototype.enterRule = function(listener) {
    if(listener instanceof CellAddressListener ) {
        listener.enterA1Reference(this);
	}
};

A1ReferenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof CellAddressListener ) {
        listener.exitA1Reference(this);
	}
};

A1ReferenceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CellAddressVisitor ) {
        return visitor.visitA1Reference(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CellAddressParser.A1ReferenceContext = A1ReferenceContext;

CellAddressParser.prototype.a1Reference = function() {

    var localctx = new A1ReferenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, CellAddressParser.RULE_a1Reference);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 32;
        this.a1Column();
        this.state = 33;
        this.a1Row();
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


function A1ColumnContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CellAddressParser.RULE_a1Column;
    return this;
}

A1ColumnContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
A1ColumnContext.prototype.constructor = A1ColumnContext;

A1ColumnContext.prototype.a1RelativeColumn = function() {
    return this.getTypedRuleContext(A1RelativeColumnContext,0);
};

A1ColumnContext.prototype.a1AbsoluteColumn = function() {
    return this.getTypedRuleContext(A1AbsoluteColumnContext,0);
};

A1ColumnContext.prototype.enterRule = function(listener) {
    if(listener instanceof CellAddressListener ) {
        listener.enterA1Column(this);
	}
};

A1ColumnContext.prototype.exitRule = function(listener) {
    if(listener instanceof CellAddressListener ) {
        listener.exitA1Column(this);
	}
};

A1ColumnContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CellAddressVisitor ) {
        return visitor.visitA1Column(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CellAddressParser.A1ColumnContext = A1ColumnContext;

CellAddressParser.prototype.a1Column = function() {

    var localctx = new A1ColumnContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, CellAddressParser.RULE_a1Column);
    try {
        this.state = 37;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CellAddressParser.CellColumnAddress:
            this.enterOuterAlt(localctx, 1);
            this.state = 35;
            this.a1RelativeColumn();
            break;
        case CellAddressParser.Dollar:
            this.enterOuterAlt(localctx, 2);
            this.state = 36;
            this.a1AbsoluteColumn();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
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


function A1RowContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CellAddressParser.RULE_a1Row;
    return this;
}

A1RowContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
A1RowContext.prototype.constructor = A1RowContext;

A1RowContext.prototype.a1RelativeRow = function() {
    return this.getTypedRuleContext(A1RelativeRowContext,0);
};

A1RowContext.prototype.a1AbsoluteRow = function() {
    return this.getTypedRuleContext(A1AbsoluteRowContext,0);
};

A1RowContext.prototype.enterRule = function(listener) {
    if(listener instanceof CellAddressListener ) {
        listener.enterA1Row(this);
	}
};

A1RowContext.prototype.exitRule = function(listener) {
    if(listener instanceof CellAddressListener ) {
        listener.exitA1Row(this);
	}
};

A1RowContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CellAddressVisitor ) {
        return visitor.visitA1Row(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CellAddressParser.A1RowContext = A1RowContext;

CellAddressParser.prototype.a1Row = function() {

    var localctx = new A1RowContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, CellAddressParser.RULE_a1Row);
    try {
        this.state = 41;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CellAddressParser.CellRowAddress:
            this.enterOuterAlt(localctx, 1);
            this.state = 39;
            this.a1RelativeRow();
            break;
        case CellAddressParser.Dollar:
            this.enterOuterAlt(localctx, 2);
            this.state = 40;
            this.a1AbsoluteRow();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
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


function A1RelativeColumnContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CellAddressParser.RULE_a1RelativeColumn;
    return this;
}

A1RelativeColumnContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
A1RelativeColumnContext.prototype.constructor = A1RelativeColumnContext;

A1RelativeColumnContext.prototype.CellColumnAddress = function() {
    return this.getToken(CellAddressParser.CellColumnAddress, 0);
};

A1RelativeColumnContext.prototype.enterRule = function(listener) {
    if(listener instanceof CellAddressListener ) {
        listener.enterA1RelativeColumn(this);
	}
};

A1RelativeColumnContext.prototype.exitRule = function(listener) {
    if(listener instanceof CellAddressListener ) {
        listener.exitA1RelativeColumn(this);
	}
};

A1RelativeColumnContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CellAddressVisitor ) {
        return visitor.visitA1RelativeColumn(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CellAddressParser.A1RelativeColumnContext = A1RelativeColumnContext;

CellAddressParser.prototype.a1RelativeColumn = function() {

    var localctx = new A1RelativeColumnContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, CellAddressParser.RULE_a1RelativeColumn);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 43;
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


function A1AbsoluteColumnContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CellAddressParser.RULE_a1AbsoluteColumn;
    return this;
}

A1AbsoluteColumnContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
A1AbsoluteColumnContext.prototype.constructor = A1AbsoluteColumnContext;

A1AbsoluteColumnContext.prototype.Dollar = function() {
    return this.getToken(CellAddressParser.Dollar, 0);
};

A1AbsoluteColumnContext.prototype.CellColumnAddress = function() {
    return this.getToken(CellAddressParser.CellColumnAddress, 0);
};

A1AbsoluteColumnContext.prototype.enterRule = function(listener) {
    if(listener instanceof CellAddressListener ) {
        listener.enterA1AbsoluteColumn(this);
	}
};

A1AbsoluteColumnContext.prototype.exitRule = function(listener) {
    if(listener instanceof CellAddressListener ) {
        listener.exitA1AbsoluteColumn(this);
	}
};

A1AbsoluteColumnContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CellAddressVisitor ) {
        return visitor.visitA1AbsoluteColumn(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CellAddressParser.A1AbsoluteColumnContext = A1AbsoluteColumnContext;

CellAddressParser.prototype.a1AbsoluteColumn = function() {

    var localctx = new A1AbsoluteColumnContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, CellAddressParser.RULE_a1AbsoluteColumn);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 45;
        this.match(CellAddressParser.Dollar);
        this.state = 46;
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


function A1RelativeRowContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CellAddressParser.RULE_a1RelativeRow;
    return this;
}

A1RelativeRowContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
A1RelativeRowContext.prototype.constructor = A1RelativeRowContext;

A1RelativeRowContext.prototype.CellRowAddress = function() {
    return this.getToken(CellAddressParser.CellRowAddress, 0);
};

A1RelativeRowContext.prototype.enterRule = function(listener) {
    if(listener instanceof CellAddressListener ) {
        listener.enterA1RelativeRow(this);
	}
};

A1RelativeRowContext.prototype.exitRule = function(listener) {
    if(listener instanceof CellAddressListener ) {
        listener.exitA1RelativeRow(this);
	}
};

A1RelativeRowContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CellAddressVisitor ) {
        return visitor.visitA1RelativeRow(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CellAddressParser.A1RelativeRowContext = A1RelativeRowContext;

CellAddressParser.prototype.a1RelativeRow = function() {

    var localctx = new A1RelativeRowContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, CellAddressParser.RULE_a1RelativeRow);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 48;
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


function A1AbsoluteRowContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CellAddressParser.RULE_a1AbsoluteRow;
    return this;
}

A1AbsoluteRowContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
A1AbsoluteRowContext.prototype.constructor = A1AbsoluteRowContext;

A1AbsoluteRowContext.prototype.Dollar = function() {
    return this.getToken(CellAddressParser.Dollar, 0);
};

A1AbsoluteRowContext.prototype.CellRowAddress = function() {
    return this.getToken(CellAddressParser.CellRowAddress, 0);
};

A1AbsoluteRowContext.prototype.enterRule = function(listener) {
    if(listener instanceof CellAddressListener ) {
        listener.enterA1AbsoluteRow(this);
	}
};

A1AbsoluteRowContext.prototype.exitRule = function(listener) {
    if(listener instanceof CellAddressListener ) {
        listener.exitA1AbsoluteRow(this);
	}
};

A1AbsoluteRowContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CellAddressVisitor ) {
        return visitor.visitA1AbsoluteRow(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CellAddressParser.A1AbsoluteRowContext = A1AbsoluteRowContext;

CellAddressParser.prototype.a1AbsoluteRow = function() {

    var localctx = new A1AbsoluteRowContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, CellAddressParser.RULE_a1AbsoluteRow);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 50;
        this.match(CellAddressParser.Dollar);
        this.state = 51;
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
