// Generated from /Users/zhangye/Documents/code/code_yonyou/FormulaTextArea/src/platform/formula/grammar/CellAddress.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\b\u00a1\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0007\u00031\n\u0003\f\u0003\u000e\u0003",
    "4\u000b\u0003\u0003\u0004\u0003\u0004\u0007\u00048\n\u0004\f\u0004\u000e",
    "\u0004;\u000b\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0007\u0003\u0007\u0003\b\u0006\bD\n\b\r\b\u000e\bE\u0003\b\u0005",
    "\bI\n\b\u0003\t\u0003\t\u0007\tM\n\t\f\t\u000e\tP\u000b\t\u0003\t\u0003",
    "\t\u0003\t\u0007\tU\n\t\f\t\u000e\tX\u000b\t\u0003\t\u0005\t[\n\t\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0005\na\n\n\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0005\u000bg\n\u000b\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0005\fm\n\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0005\rt\n\r",
    "\u0003\u000e\u0003\u000e\u0005\u000ex\n\u000e\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0006\u0011\u008b\n\u0011\r\u0011",
    "\u000e\u0011\u008c\u0003\u0011\u0003\u0011\u0005\u0011\u0091\n\u0011",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0006\u0012\u0096\n\u0012\r\u0012",
    "\u000e\u0012\u0097\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003",
    "\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0002\u0002\u0016\u0003\u0003",
    "\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\u0002\u0011\u0002",
    "\u0013\u0002\u0015\u0002\u0017\u0002\u0019\u0002\u001b\u0002\u001d\u0002",
    "\u001f\u0002!\u0002#\u0002%\u0002\'\u0002)\u0002\u0003\u0002\f\u0004",
    "\u0002C\\c|\u0003\u00023;\u0003\u00022;\u0006\u0002\f\f\u000f\u000f",
    "$$^^\u0006\u0002\f\f\u000f\u000f))^^\n\u0002\f\f\u000f\u000f#$)),-/",
    "/11]_\u0005\u0002\f\f\u000f\u000f\u202a\u202b\u000b\u0002$$))^^ddhh",
    "ppttvvxx\u000e\u0002\f\f\u000f\u000f$$))2;^^ddhhppttvxzz\u0006\u0002",
    "2;CHaach\u0002\u00a7\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005",
    "\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t",
    "\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r",
    "\u0003\u0002\u0002\u0002\u0003+\u0003\u0002\u0002\u0002\u0005.\u0003",
    "\u0002\u0002\u0002\u00075\u0003\u0002\u0002\u0002\t<\u0003\u0002\u0002",
    "\u0002\u000b>\u0003\u0002\u0002\u0002\r@\u0003\u0002\u0002\u0002\u000f",
    "H\u0003\u0002\u0002\u0002\u0011Z\u0003\u0002\u0002\u0002\u0013`\u0003",
    "\u0002\u0002\u0002\u0015f\u0003\u0002\u0002\u0002\u0017l\u0003\u0002",
    "\u0002\u0002\u0019s\u0003\u0002\u0002\u0002\u001bw\u0003\u0002\u0002",
    "\u0002\u001dy\u0003\u0002\u0002\u0002\u001f|\u0003\u0002\u0002\u0002",
    "!\u0090\u0003\u0002\u0002\u0002#\u0092\u0003\u0002\u0002\u0002%\u009b",
    "\u0003\u0002\u0002\u0002\'\u009d\u0003\u0002\u0002\u0002)\u009f\u0003",
    "\u0002\u0002\u0002+,\u0005\u000f\b\u0002,-\u0007#\u0002\u0002-\u0004",
    "\u0003\u0002\u0002\u0002.2\t\u0002\u0002\u0002/1\t\u0002\u0002\u0002",
    "0/\u0003\u0002\u0002\u000214\u0003\u0002\u0002\u000220\u0003\u0002\u0002",
    "\u000223\u0003\u0002\u0002\u00023\u0006\u0003\u0002\u0002\u000242\u0003",
    "\u0002\u0002\u000259\t\u0003\u0002\u000268\t\u0004\u0002\u000276\u0003",
    "\u0002\u0002\u00028;\u0003\u0002\u0002\u000297\u0003\u0002\u0002\u0002",
    "9:\u0003\u0002\u0002\u0002:\b\u0003\u0002\u0002\u0002;9\u0003\u0002",
    "\u0002\u0002<=\u0007<\u0002\u0002=\n\u0003\u0002\u0002\u0002>?\u0007",
    "&\u0002\u0002?\f\u0003\u0002\u0002\u0002@A\u0007#\u0002\u0002A\u000e",
    "\u0003\u0002\u0002\u0002BD\u0005\u0017\f\u0002CB\u0003\u0002\u0002\u0002",
    "DE\u0003\u0002\u0002\u0002EC\u0003\u0002\u0002\u0002EF\u0003\u0002\u0002",
    "\u0002FI\u0003\u0002\u0002\u0002GI\u0005\u0011\t\u0002HC\u0003\u0002",
    "\u0002\u0002HG\u0003\u0002\u0002\u0002I\u0010\u0003\u0002\u0002\u0002",
    "JN\u0007$\u0002\u0002KM\u0005\u0013\n\u0002LK\u0003\u0002\u0002\u0002",
    "MP\u0003\u0002\u0002\u0002NL\u0003\u0002\u0002\u0002NO\u0003\u0002\u0002",
    "\u0002OQ\u0003\u0002\u0002\u0002PN\u0003\u0002\u0002\u0002Q[\u0007$",
    "\u0002\u0002RV\u0007)\u0002\u0002SU\u0005\u0015\u000b\u0002TS\u0003",
    "\u0002\u0002\u0002UX\u0003\u0002\u0002\u0002VT\u0003\u0002\u0002\u0002",
    "VW\u0003\u0002\u0002\u0002WY\u0003\u0002\u0002\u0002XV\u0003\u0002\u0002",
    "\u0002Y[\u0007)\u0002\u0002ZJ\u0003\u0002\u0002\u0002ZR\u0003\u0002",
    "\u0002\u0002[\u0012\u0003\u0002\u0002\u0002\\a\n\u0005\u0002\u0002]",
    "^\u0007^\u0002\u0002^a\u0005\u0019\r\u0002_a\u0005\u001d\u000f\u0002",
    "`\\\u0003\u0002\u0002\u0002`]\u0003\u0002\u0002\u0002`_\u0003\u0002",
    "\u0002\u0002a\u0014\u0003\u0002\u0002\u0002bg\n\u0006\u0002\u0002cd",
    "\u0007^\u0002\u0002dg\u0005\u0019\r\u0002eg\u0005\u001d\u000f\u0002",
    "fb\u0003\u0002\u0002\u0002fc\u0003\u0002\u0002\u0002fe\u0003\u0002\u0002",
    "\u0002g\u0016\u0003\u0002\u0002\u0002hm\n\u0007\u0002\u0002ij\u0007",
    "^\u0002\u0002jm\u0005\u0019\r\u0002km\u0005\u001d\u000f\u0002lh\u0003",
    "\u0002\u0002\u0002li\u0003\u0002\u0002\u0002lk\u0003\u0002\u0002\u0002",
    "m\u0018\u0003\u0002\u0002\u0002nt\u0005\u001b\u000e\u0002ot\u00072\u0002",
    "\u0002pt\u0005\u001f\u0010\u0002qt\u0005!\u0011\u0002rt\u0005#\u0012",
    "\u0002sn\u0003\u0002\u0002\u0002so\u0003\u0002\u0002\u0002sp\u0003\u0002",
    "\u0002\u0002sq\u0003\u0002\u0002\u0002sr\u0003\u0002\u0002\u0002t\u001a",
    "\u0003\u0002\u0002\u0002ux\u0005%\u0013\u0002vx\u0005\'\u0014\u0002",
    "wu\u0003\u0002\u0002\u0002wv\u0003\u0002\u0002\u0002x\u001c\u0003\u0002",
    "\u0002\u0002yz\u0007^\u0002\u0002z{\t\b\u0002\u0002{\u001e\u0003\u0002",
    "\u0002\u0002|}\u0007z\u0002\u0002}~\u0005)\u0015\u0002~\u007f\u0005",
    ")\u0015\u0002\u007f \u0003\u0002\u0002\u0002\u0080\u0081\u0007w\u0002",
    "\u0002\u0081\u0082\u0005)\u0015\u0002\u0082\u0083\u0005)\u0015\u0002",
    "\u0083\u0084\u0005)\u0015\u0002\u0084\u0085\u0005)\u0015\u0002\u0085",
    "\u0091\u0003\u0002\u0002\u0002\u0086\u0087\u0007w\u0002\u0002\u0087",
    "\u0088\u0007}\u0002\u0002\u0088\u008a\u0005)\u0015\u0002\u0089\u008b",
    "\u0005)\u0015\u0002\u008a\u0089\u0003\u0002\u0002\u0002\u008b\u008c",
    "\u0003\u0002\u0002\u0002\u008c\u008a\u0003\u0002\u0002\u0002\u008c\u008d",
    "\u0003\u0002\u0002\u0002\u008d\u008e\u0003\u0002\u0002\u0002\u008e\u008f",
    "\u0007\u007f\u0002\u0002\u008f\u0091\u0003\u0002\u0002\u0002\u0090\u0080",
    "\u0003\u0002\u0002\u0002\u0090\u0086\u0003\u0002\u0002\u0002\u0091\"",
    "\u0003\u0002\u0002\u0002\u0092\u0093\u0007w\u0002\u0002\u0093\u0095",
    "\u0007}\u0002\u0002\u0094\u0096\u0005)\u0015\u0002\u0095\u0094\u0003",
    "\u0002\u0002\u0002\u0096\u0097\u0003\u0002\u0002\u0002\u0097\u0095\u0003",
    "\u0002\u0002\u0002\u0097\u0098\u0003\u0002\u0002\u0002\u0098\u0099\u0003",
    "\u0002\u0002\u0002\u0099\u009a\u0007\u007f\u0002\u0002\u009a$\u0003",
    "\u0002\u0002\u0002\u009b\u009c\t\t\u0002\u0002\u009c&\u0003\u0002\u0002",
    "\u0002\u009d\u009e\n\n\u0002\u0002\u009e(\u0003\u0002\u0002\u0002\u009f",
    "\u00a0\t\u000b\u0002\u0002\u00a0*\u0003\u0002\u0002\u0002\u0012\u0002",
    "29EHNVZ`flsw\u008c\u0090\u0097\u0002"].join("");


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
CellAddressLexer.WorkSheetPrefix = 1;
CellAddressLexer.CellColumnAddress = 2;
CellAddressLexer.CellRowAddress = 3;
CellAddressLexer.Colon = 4;
CellAddressLexer.Dollar = 5;
CellAddressLexer.ExclamationMark = 6;

CellAddressLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

CellAddressLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

CellAddressLexer.prototype.literalNames = [ null, null, null, null, "':'", 
                                            "'$'", "'!'" ];

CellAddressLexer.prototype.symbolicNames = [ null, "WorkSheetPrefix", "CellColumnAddress", 
                                             "CellRowAddress", "Colon", 
                                             "Dollar", "ExclamationMark" ];

CellAddressLexer.prototype.ruleNames = [ "WorkSheetPrefix", "CellColumnAddress", 
                                         "CellRowAddress", "Colon", "Dollar", 
                                         "ExclamationMark", "SheetName", 
                                         "StringLiteral", "DoubleStringCharacter", 
                                         "SingleStringCharacter", "SheetNameCharacter", 
                                         "EscapeSequence", "CharacterEscapeSequence", 
                                         "LineContinuation", "HexEscapeSequence", 
                                         "UnicodeEscapeSequence", "ExtendedUnicodeEscapeSequence", 
                                         "SingleEscapeCharacter", "NonEscapeCharacter", 
                                         "HexDigit" ];

CellAddressLexer.prototype.grammarFileName = "CellAddress.g4";


exports.CellAddressLexer = CellAddressLexer;

