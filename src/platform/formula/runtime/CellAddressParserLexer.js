// Generated from /Users/zhangye/Documents/code/code_yonyou/FormulaTextArea/src/platform/formula/grammar/CellAddressParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0007u\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0006\u0003#\n\u0003\r\u0003\u000e\u0003$\u0003",
    "\u0003\u0003\u0003\u0003\u0004\u0005\u0004*\n\u0004\u0003\u0004\u0003",
    "\u0004\u0007\u0004.\n\u0004\f\u0004\u000e\u00041\u000b\u0004\u0003\u0005",
    "\u0005\u00054\n\u0005\u0003\u0005\u0003\u0005\u0007\u00058\n\u0005\f",
    "\u0005\u000e\u0005;\u000b\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0005\u0006A\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0005\u0007H\n\u0007\u0003\b\u0003\b\u0005",
    "\bL\n\b\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0006\u000b_\n\u000b\r\u000b",
    "\u000e\u000b`\u0003\u000b\u0003\u000b\u0005\u000be\n\u000b\u0003\f\u0003",
    "\f\u0003\f\u0006\fj\n\f\r\f\u000e\fk\u0003\f\u0003\f\u0003\r\u0003\r",
    "\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0002\u0002\u0010\u0003",
    "\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\u0002\u000f\u0002",
    "\u0011\u0002\u0013\u0002\u0015\u0002\u0017\u0002\u0019\u0002\u001b\u0002",
    "\u001d\u0002\u0003\u0002\n\u0003\u0002C\\\u0003\u00023;\u0003\u0002",
    "2;\u0005\u0002\f\f\u000f\u000f^^\u0005\u0002\f\f\u000f\u000f\u202a\u202b",
    "\u000b\u0002$$))^^ddhhppttvvxx\u000e\u0002\f\f\u000f\u000f$$))2;^^d",
    "dhhppttvxzz\u0006\u00022;CHaach\u0002z\u0002\u0003\u0003\u0002\u0002",
    "\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002",
    "\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002",
    "\u0002\u0003\u001f\u0003\u0002\u0002\u0002\u0005\"\u0003\u0002\u0002",
    "\u0002\u0007)\u0003\u0002\u0002\u0002\t3\u0003\u0002\u0002\u0002\u000b",
    "@\u0003\u0002\u0002\u0002\rG\u0003\u0002\u0002\u0002\u000fK\u0003\u0002",
    "\u0002\u0002\u0011M\u0003\u0002\u0002\u0002\u0013P\u0003\u0002\u0002",
    "\u0002\u0015d\u0003\u0002\u0002\u0002\u0017f\u0003\u0002\u0002\u0002",
    "\u0019o\u0003\u0002\u0002\u0002\u001bq\u0003\u0002\u0002\u0002\u001d",
    "s\u0003\u0002\u0002\u0002\u001f \u0007<\u0002\u0002 \u0004\u0003\u0002",
    "\u0002\u0002!#\u0005\u000b\u0006\u0002\"!\u0003\u0002\u0002\u0002#$",
    "\u0003\u0002\u0002\u0002$\"\u0003\u0002\u0002\u0002$%\u0003\u0002\u0002",
    "\u0002%&\u0003\u0002\u0002\u0002&\'\u0007#\u0002\u0002\'\u0006\u0003",
    "\u0002\u0002\u0002(*\u0007&\u0002\u0002)(\u0003\u0002\u0002\u0002)*",
    "\u0003\u0002\u0002\u0002*+\u0003\u0002\u0002\u0002+/\t\u0002\u0002\u0002",
    ",.\t\u0002\u0002\u0002-,\u0003\u0002\u0002\u0002.1\u0003\u0002\u0002",
    "\u0002/-\u0003\u0002\u0002\u0002/0\u0003\u0002\u0002\u00020\b\u0003",
    "\u0002\u0002\u00021/\u0003\u0002\u0002\u000224\u0007&\u0002\u000232",
    "\u0003\u0002\u0002\u000234\u0003\u0002\u0002\u000245\u0003\u0002\u0002",
    "\u000259\t\u0003\u0002\u000268\t\u0004\u0002\u000276\u0003\u0002\u0002",
    "\u00028;\u0003\u0002\u0002\u000297\u0003\u0002\u0002\u00029:\u0003\u0002",
    "\u0002\u0002:\n\u0003\u0002\u0002\u0002;9\u0003\u0002\u0002\u0002<A",
    "\n\u0005\u0002\u0002=>\u0007^\u0002\u0002>A\u0005\r\u0007\u0002?A\u0005",
    "\u0011\t\u0002@<\u0003\u0002\u0002\u0002@=\u0003\u0002\u0002\u0002@",
    "?\u0003\u0002\u0002\u0002A\f\u0003\u0002\u0002\u0002BH\u0005\u000f\b",
    "\u0002CH\u00072\u0002\u0002DH\u0005\u0013\n\u0002EH\u0005\u0015\u000b",
    "\u0002FH\u0005\u0017\f\u0002GB\u0003\u0002\u0002\u0002GC\u0003\u0002",
    "\u0002\u0002GD\u0003\u0002\u0002\u0002GE\u0003\u0002\u0002\u0002GF\u0003",
    "\u0002\u0002\u0002H\u000e\u0003\u0002\u0002\u0002IL\u0005\u0019\r\u0002",
    "JL\u0005\u001b\u000e\u0002KI\u0003\u0002\u0002\u0002KJ\u0003\u0002\u0002",
    "\u0002L\u0010\u0003\u0002\u0002\u0002MN\u0007^\u0002\u0002NO\t\u0006",
    "\u0002\u0002O\u0012\u0003\u0002\u0002\u0002PQ\u0007z\u0002\u0002QR\u0005",
    "\u001d\u000f\u0002RS\u0005\u001d\u000f\u0002S\u0014\u0003\u0002\u0002",
    "\u0002TU\u0007w\u0002\u0002UV\u0005\u001d\u000f\u0002VW\u0005\u001d",
    "\u000f\u0002WX\u0005\u001d\u000f\u0002XY\u0005\u001d\u000f\u0002Ye\u0003",
    "\u0002\u0002\u0002Z[\u0007w\u0002\u0002[\\\u0007}\u0002\u0002\\^\u0005",
    "\u001d\u000f\u0002]_\u0005\u001d\u000f\u0002^]\u0003\u0002\u0002\u0002",
    "_`\u0003\u0002\u0002\u0002`^\u0003\u0002\u0002\u0002`a\u0003\u0002\u0002",
    "\u0002ab\u0003\u0002\u0002\u0002bc\u0007\u007f\u0002\u0002ce\u0003\u0002",
    "\u0002\u0002dT\u0003\u0002\u0002\u0002dZ\u0003\u0002\u0002\u0002e\u0016",
    "\u0003\u0002\u0002\u0002fg\u0007w\u0002\u0002gi\u0007}\u0002\u0002h",
    "j\u0005\u001d\u000f\u0002ih\u0003\u0002\u0002\u0002jk\u0003\u0002\u0002",
    "\u0002ki\u0003\u0002\u0002\u0002kl\u0003\u0002\u0002\u0002lm\u0003\u0002",
    "\u0002\u0002mn\u0007\u007f\u0002\u0002n\u0018\u0003\u0002\u0002\u0002",
    "op\t\u0007\u0002\u0002p\u001a\u0003\u0002\u0002\u0002qr\n\b\u0002\u0002",
    "r\u001c\u0003\u0002\u0002\u0002st\t\t\u0002\u0002t\u001e\u0003\u0002",
    "\u0002\u0002\u000e\u0002$)/39@GK`dk\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function CellAddressParserLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

CellAddressParserLexer.prototype = Object.create(antlr4.Lexer.prototype);
CellAddressParserLexer.prototype.constructor = CellAddressParserLexer;

Object.defineProperty(CellAddressParserLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

CellAddressParserLexer.EOF = antlr4.Token.EOF;
CellAddressParserLexer.T__0 = 1;
CellAddressParserLexer.SheetAddress = 2;
CellAddressParserLexer.CellColumnAddress = 3;
CellAddressParserLexer.CellRowAddress = 4;
CellAddressParserLexer.StringCharacter = 5;

CellAddressParserLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

CellAddressParserLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

CellAddressParserLexer.prototype.literalNames = [ null, "':'" ];

CellAddressParserLexer.prototype.symbolicNames = [ null, null, "SheetAddress", 
                                                   "CellColumnAddress", 
                                                   "CellRowAddress", "StringCharacter" ];

CellAddressParserLexer.prototype.ruleNames = [ "T__0", "SheetAddress", "CellColumnAddress", 
                                               "CellRowAddress", "StringCharacter", 
                                               "EscapeSequence", "CharacterEscapeSequence", 
                                               "LineContinuation", "HexEscapeSequence", 
                                               "UnicodeEscapeSequence", 
                                               "ExtendedUnicodeEscapeSequence", 
                                               "SingleEscapeCharacter", 
                                               "NonEscapeCharacter", "HexDigit" ];

CellAddressParserLexer.prototype.grammarFileName = "CellAddressParser.g4";


exports.CellAddressParserLexer = CellAddressParserLexer;

