// Generated from /Users/zhangye/Documents/code/code_yonyou/FormulaTextArea/src/platform/formula/grammar/CellAddress.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\by\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0003\u0002\u0006\u0002#\n\u0002\r\u0002\u000e\u0002$\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0005\u0003*\n\u0003\u0003\u0003\u0003\u0003\u0007",
    "\u0003.\n\u0003\f\u0003\u000e\u00031\u000b\u0003\u0003\u0004\u0005\u0004",
    "4\n\u0004\u0003\u0004\u0003\u0004\u0007\u00048\n\u0004\f\u0004\u000e",
    "\u0004;\u000b\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007E\n\u0007",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\bL\n\b\u0003\t\u0003",
    "\t\u0005\tP\n\t\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0006\fc\n\f\r\f\u000e\fd\u0003\f\u0003\f",
    "\u0005\fi\n\f\u0003\r\u0003\r\u0003\r\u0006\rn\n\r\r\r\u000e\ro\u0003",
    "\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010",
    "\u0003\u0010\u0002\u0002\u0011\u0003\u0003\u0005\u0004\u0007\u0005\t",
    "\u0006\u000b\u0007\r\b\u000f\u0002\u0011\u0002\u0013\u0002\u0015\u0002",
    "\u0017\u0002\u0019\u0002\u001b\u0002\u001d\u0002\u001f\u0002\u0003\u0002",
    "\n\u0003\u0002C\\\u0003\u00023;\u0003\u00022;\u0005\u0002\f\f\u000f",
    "\u000f^^\u0005\u0002\f\f\u000f\u000f\u202a\u202b\u000b\u0002$$))^^d",
    "dhhppttvvxx\u000e\u0002\f\f\u000f\u000f$$))2;^^ddhhppttvxzz\u0006\u0002",
    "2;CHaach\u0002~\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003",
    "\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003",
    "\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003",
    "\u0002\u0002\u0002\u0003\"\u0003\u0002\u0002\u0002\u0005)\u0003\u0002",
    "\u0002\u0002\u00073\u0003\u0002\u0002\u0002\t<\u0003\u0002\u0002\u0002",
    "\u000b>\u0003\u0002\u0002\u0002\rD\u0003\u0002\u0002\u0002\u000fK\u0003",
    "\u0002\u0002\u0002\u0011O\u0003\u0002\u0002\u0002\u0013Q\u0003\u0002",
    "\u0002\u0002\u0015T\u0003\u0002\u0002\u0002\u0017h\u0003\u0002\u0002",
    "\u0002\u0019j\u0003\u0002\u0002\u0002\u001bs\u0003\u0002\u0002\u0002",
    "\u001du\u0003\u0002\u0002\u0002\u001fw\u0003\u0002\u0002\u0002!#\u0005",
    "\r\u0007\u0002\"!\u0003\u0002\u0002\u0002#$\u0003\u0002\u0002\u0002",
    "$\"\u0003\u0002\u0002\u0002$%\u0003\u0002\u0002\u0002%&\u0003\u0002",
    "\u0002\u0002&\'\u0007#\u0002\u0002\'\u0004\u0003\u0002\u0002\u0002(",
    "*\u0007&\u0002\u0002)(\u0003\u0002\u0002\u0002)*\u0003\u0002\u0002\u0002",
    "*+\u0003\u0002\u0002\u0002+/\t\u0002\u0002\u0002,.\t\u0002\u0002\u0002",
    "-,\u0003\u0002\u0002\u0002.1\u0003\u0002\u0002\u0002/-\u0003\u0002\u0002",
    "\u0002/0\u0003\u0002\u0002\u00020\u0006\u0003\u0002\u0002\u00021/\u0003",
    "\u0002\u0002\u000224\u0007&\u0002\u000232\u0003\u0002\u0002\u000234",
    "\u0003\u0002\u0002\u000245\u0003\u0002\u0002\u000259\t\u0003\u0002\u0002",
    "68\t\u0004\u0002\u000276\u0003\u0002\u0002\u00028;\u0003\u0002\u0002",
    "\u000297\u0003\u0002\u0002\u00029:\u0003\u0002\u0002\u0002:\b\u0003",
    "\u0002\u0002\u0002;9\u0003\u0002\u0002\u0002<=\u0007<\u0002\u0002=\n",
    "\u0003\u0002\u0002\u0002>?\u0007#\u0002\u0002?\f\u0003\u0002\u0002\u0002",
    "@E\n\u0005\u0002\u0002AB\u0007^\u0002\u0002BE\u0005\u000f\b\u0002CE",
    "\u0005\u0013\n\u0002D@\u0003\u0002\u0002\u0002DA\u0003\u0002\u0002\u0002",
    "DC\u0003\u0002\u0002\u0002E\u000e\u0003\u0002\u0002\u0002FL\u0005\u0011",
    "\t\u0002GL\u00072\u0002\u0002HL\u0005\u0015\u000b\u0002IL\u0005\u0017",
    "\f\u0002JL\u0005\u0019\r\u0002KF\u0003\u0002\u0002\u0002KG\u0003\u0002",
    "\u0002\u0002KH\u0003\u0002\u0002\u0002KI\u0003\u0002\u0002\u0002KJ\u0003",
    "\u0002\u0002\u0002L\u0010\u0003\u0002\u0002\u0002MP\u0005\u001b\u000e",
    "\u0002NP\u0005\u001d\u000f\u0002OM\u0003\u0002\u0002\u0002ON\u0003\u0002",
    "\u0002\u0002P\u0012\u0003\u0002\u0002\u0002QR\u0007^\u0002\u0002RS\t",
    "\u0006\u0002\u0002S\u0014\u0003\u0002\u0002\u0002TU\u0007z\u0002\u0002",
    "UV\u0005\u001f\u0010\u0002VW\u0005\u001f\u0010\u0002W\u0016\u0003\u0002",
    "\u0002\u0002XY\u0007w\u0002\u0002YZ\u0005\u001f\u0010\u0002Z[\u0005",
    "\u001f\u0010\u0002[\\\u0005\u001f\u0010\u0002\\]\u0005\u001f\u0010\u0002",
    "]i\u0003\u0002\u0002\u0002^_\u0007w\u0002\u0002_`\u0007}\u0002\u0002",
    "`b\u0005\u001f\u0010\u0002ac\u0005\u001f\u0010\u0002ba\u0003\u0002\u0002",
    "\u0002cd\u0003\u0002\u0002\u0002db\u0003\u0002\u0002\u0002de\u0003\u0002",
    "\u0002\u0002ef\u0003\u0002\u0002\u0002fg\u0007\u007f\u0002\u0002gi\u0003",
    "\u0002\u0002\u0002hX\u0003\u0002\u0002\u0002h^\u0003\u0002\u0002\u0002",
    "i\u0018\u0003\u0002\u0002\u0002jk\u0007w\u0002\u0002km\u0007}\u0002",
    "\u0002ln\u0005\u001f\u0010\u0002ml\u0003\u0002\u0002\u0002no\u0003\u0002",
    "\u0002\u0002om\u0003\u0002\u0002\u0002op\u0003\u0002\u0002\u0002pq\u0003",
    "\u0002\u0002\u0002qr\u0007\u007f\u0002\u0002r\u001a\u0003\u0002\u0002",
    "\u0002st\t\u0007\u0002\u0002t\u001c\u0003\u0002\u0002\u0002uv\n\b\u0002",
    "\u0002v\u001e\u0003\u0002\u0002\u0002wx\t\t\u0002\u0002x \u0003\u0002",
    "\u0002\u0002\u000e\u0002$)/39DKOdho\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function CellAddressLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

CellAddressLexer.prototype = Object.create(antlr4.Lexer.prototype);
CellAddressLexer.prototype.constructor = CellAddressLexer;

Object.defineProperty(CellAddressLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

CellAddressLexer.EOF = antlr4.Token.EOF;
CellAddressLexer.SheetAddress = 1;
CellAddressLexer.CellColumnAddress = 2;
CellAddressLexer.CellRowAddress = 3;
CellAddressLexer.Colon = 4;
CellAddressLexer.ExclamationMark = 5;
CellAddressLexer.StringCharacter = 6;

CellAddressLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

CellAddressLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

CellAddressLexer.prototype.literalNames = [ null, null, null, null, "':'", 
                                            "'!'" ];

CellAddressLexer.prototype.symbolicNames = [ null, "SheetAddress", "CellColumnAddress", 
                                             "CellRowAddress", "Colon", 
                                             "ExclamationMark", "StringCharacter" ];

CellAddressLexer.prototype.ruleNames = [ "SheetAddress", "CellColumnAddress", 
                                         "CellRowAddress", "Colon", "ExclamationMark", 
                                         "StringCharacter", "EscapeSequence", 
                                         "CharacterEscapeSequence", "LineContinuation", 
                                         "HexEscapeSequence", "UnicodeEscapeSequence", 
                                         "ExtendedUnicodeEscapeSequence", 
                                         "SingleEscapeCharacter", "NonEscapeCharacter", 
                                         "HexDigit" ];

CellAddressLexer.prototype.grammarFileName = "CellAddress.g4";


exports.CellAddressLexer = CellAddressLexer;

