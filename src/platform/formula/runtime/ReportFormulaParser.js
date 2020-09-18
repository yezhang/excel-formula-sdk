// Generated from /Users/zhangye/Documents/code/code_yonyou/FormulaTextArea/src/platform/formula/grammar/ReportFormulaParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ReportFormulaParserListener = require('./ReportFormulaParserListener').ReportFormulaParserListener;
var ReportFormulaParserVisitor = require('./ReportFormulaParserVisitor').ReportFormulaParserVisitor;

var grammarFileName = "ReportFormulaParser.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u00037\u00e6\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0003\u0002\u0005\u0002",
    ".\n\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005D\n\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0007\u0005f\n\u0005\f\u0005\u000e\u0005i\u000b\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006o\n\u0006\f\u0006",
    "\u000e\u0006r\u000b\u0006\u0003\u0006\u0005\u0006u\n\u0006\u0005\u0006",
    "w\n\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0005\u0007",
    "}\n\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0007\b\u0083\n\b\f\b\u000e",
    "\b\u0086\u000b\b\u0005\b\u0088\n\b\u0003\b\u0005\b\u008b\n\b\u0003\b",
    "\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0007\n\u0094\n\n\f",
    "\n\u000e\n\u0097\u000b\n\u0003\n\u0005\n\u009a\n\n\u0003\n\u0006\n\u009d",
    "\n\n\r\n\u000e\n\u009e\u0003\n\u0007\n\u00a2\n\n\f\n\u000e\n\u00a5\u000b",
    "\n\u0003\n\u0007\n\u00a8\n\n\f\n\u000e\n\u00ab\u000b\n\u0003\u000b\u0003",
    "\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0005\f\u00b9\n\f\u0003\r\u0003\r\u0003\r\u0003\r",
    "\u0003\r\u0003\r\u0003\r\u0005\r\u00c2\n\r\u0003\u000e\u0003\u000e\u0005",
    "\u000e\u00c6\n\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0005\u000f\u00cc\n\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u00d5\n\u0011",
    "\u0003\u0012\u0003\u0012\u0005\u0012\u00d9\n\u0012\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0005\u0014\u00e0\n\u0014",
    "\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0002\u0003",
    "\b\u0017\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018",
    "\u001a\u001c\u001e \"$&(*\u0002\u0007\u0003\u0002\u0018\u001a\u0003",
    "\u0002\u0015\u0016\u0003\u0002\u001c\u001f\u0003\u0002 !\u0003\u0003",
    "\u000b\u000b\u0002\u00fa\u0002-\u0003\u0002\u0002\u0002\u00042\u0003",
    "\u0002\u0002\u0002\u00064\u0003\u0002\u0002\u0002\bC\u0003\u0002\u0002",
    "\u0002\nj\u0003\u0002\u0002\u0002\f|\u0003\u0002\u0002\u0002\u000e~",
    "\u0003\u0002\u0002\u0002\u0010\u008e\u0003\u0002\u0002\u0002\u0012\u0095",
    "\u0003\u0002\u0002\u0002\u0014\u00ac\u0003\u0002\u0002\u0002\u0016\u00b8",
    "\u0003\u0002\u0002\u0002\u0018\u00c1\u0003\u0002\u0002\u0002\u001a\u00c5",
    "\u0003\u0002\u0002\u0002\u001c\u00cb\u0003\u0002\u0002\u0002\u001e\u00cd",
    "\u0003\u0002\u0002\u0002 \u00d4\u0003\u0002\u0002\u0002\"\u00d8\u0003",
    "\u0002\u0002\u0002$\u00da\u0003\u0002\u0002\u0002&\u00df\u0003\u0002",
    "\u0002\u0002(\u00e1\u0003\u0002\u0002\u0002*\u00e3\u0003\u0002\u0002",
    "\u0002,.\u0007\r\u0002\u0002-,\u0003\u0002\u0002\u0002-.\u0003\u0002",
    "\u0002\u0002./\u0003\u0002\u0002\u0002/0\u0005\u0004\u0003\u000201\u0007",
    "\u0002\u0002\u00031\u0003\u0003\u0002\u0002\u000223\u0005\u0006\u0004",
    "\u00023\u0005\u0003\u0002\u0002\u000245\u0005\b\u0005\u00025\u0007\u0003",
    "\u0002\u0002\u000267\b\u0005\u0001\u000278\u0007\u0015\u0002\u00028",
    "D\u0005\b\u0005\u00129:\u0007\u0016\u0002\u0002:D\u0005\b\u0005\u0011",
    ";D\u0005\u001c\u000f\u0002<D\u0005 \u0011\u0002=D\u0005\u0010\t\u0002",
    ">D\u0005\u000e\b\u0002?@\u0007\u0005\u0002\u0002@A\u0005\u0006\u0004",
    "\u0002AB\u0007\u0006\u0002\u0002BD\u0003\u0002\u0002\u0002C6\u0003\u0002",
    "\u0002\u0002C9\u0003\u0002\u0002\u0002C;\u0003\u0002\u0002\u0002C<\u0003",
    "\u0002\u0002\u0002C=\u0003\u0002\u0002\u0002C>\u0003\u0002\u0002\u0002",
    "C?\u0003\u0002\u0002\u0002Dg\u0003\u0002\u0002\u0002EF\f\u0010\u0002",
    "\u0002FG\u0007\u001b\u0002\u0002Gf\u0005\b\u0005\u0010HI\f\u000f\u0002",
    "\u0002IJ\t\u0002\u0002\u0002Jf\u0005\b\u0005\u0010KL\f\u000e\u0002\u0002",
    "LM\t\u0003\u0002\u0002Mf\u0005\b\u0005\u000fNO\f\r\u0002\u0002OP\t\u0004",
    "\u0002\u0002Pf\u0005\b\u0005\u000eQR\f\f\u0002\u0002RS\t\u0005\u0002",
    "\u0002Sf\u0005\b\u0005\rTU\f\u000b\u0002\u0002UV\u0007\"\u0002\u0002",
    "Vf\u0005\b\u0005\fWX\f\n\u0002\u0002XY\u0007#\u0002\u0002Yf\u0005\b",
    "\u0005\u000bZ[\f\t\u0002\u0002[\\\u0007\u000e\u0002\u0002\\]\u0005\b",
    "\u0005\u0002]^\u0007\u000f\u0002\u0002^_\u0005\b\u0005\n_f\u0003\u0002",
    "\u0002\u0002`a\f\b\u0002\u0002ab\u0007\r\u0002\u0002bf\u0005\b\u0005",
    "\bcd\f\u0013\u0002\u0002df\u0005\n\u0006\u0002eE\u0003\u0002\u0002\u0002",
    "eH\u0003\u0002\u0002\u0002eK\u0003\u0002\u0002\u0002eN\u0003\u0002\u0002",
    "\u0002eQ\u0003\u0002\u0002\u0002eT\u0003\u0002\u0002\u0002eW\u0003\u0002",
    "\u0002\u0002eZ\u0003\u0002\u0002\u0002e`\u0003\u0002\u0002\u0002ec\u0003",
    "\u0002\u0002\u0002fi\u0003\u0002\u0002\u0002ge\u0003\u0002\u0002\u0002",
    "gh\u0003\u0002\u0002\u0002h\t\u0003\u0002\u0002\u0002ig\u0003\u0002",
    "\u0002\u0002jv\u0007\u0005\u0002\u0002kp\u0005\f\u0007\u0002lm\u0007",
    "\f\u0002\u0002mo\u0005\f\u0007\u0002nl\u0003\u0002\u0002\u0002or\u0003",
    "\u0002\u0002\u0002pn\u0003\u0002\u0002\u0002pq\u0003\u0002\u0002\u0002",
    "qt\u0003\u0002\u0002\u0002rp\u0003\u0002\u0002\u0002su\u0007\f\u0002",
    "\u0002ts\u0003\u0002\u0002\u0002tu\u0003\u0002\u0002\u0002uw\u0003\u0002",
    "\u0002\u0002vk\u0003\u0002\u0002\u0002vw\u0003\u0002\u0002\u0002wx\u0003",
    "\u0002\u0002\u0002xy\u0007\u0006\u0002\u0002y\u000b\u0003\u0002\u0002",
    "\u0002z}\u0005\b\u0005\u0002{}\u0005\u001c\u000f\u0002|z\u0003\u0002",
    "\u0002\u0002|{\u0003\u0002\u0002\u0002}\r\u0003\u0002\u0002\u0002~\u0087",
    "\u0007\t\u0002\u0002\u007f\u0084\u0005\u0016\f\u0002\u0080\u0081\u0007",
    "\f\u0002\u0002\u0081\u0083\u0005\u0016\f\u0002\u0082\u0080\u0003\u0002",
    "\u0002\u0002\u0083\u0086\u0003\u0002\u0002\u0002\u0084\u0082\u0003\u0002",
    "\u0002\u0002\u0084\u0085\u0003\u0002\u0002\u0002\u0085\u0088\u0003\u0002",
    "\u0002\u0002\u0086\u0084\u0003\u0002\u0002\u0002\u0087\u007f\u0003\u0002",
    "\u0002\u0002\u0087\u0088\u0003\u0002\u0002\u0002\u0088\u008a\u0003\u0002",
    "\u0002\u0002\u0089\u008b\u0007\f\u0002\u0002\u008a\u0089\u0003\u0002",
    "\u0002\u0002\u008a\u008b\u0003\u0002\u0002\u0002\u008b\u008c\u0003\u0002",
    "\u0002\u0002\u008c\u008d\u0007\n\u0002\u0002\u008d\u000f\u0003\u0002",
    "\u0002\u0002\u008e\u008f\u0007\u0007\u0002\u0002\u008f\u0090\u0005\u0012",
    "\n\u0002\u0090\u0091\u0007\b\u0002\u0002\u0091\u0011\u0003\u0002\u0002",
    "\u0002\u0092\u0094\u0007\f\u0002\u0002\u0093\u0092\u0003\u0002\u0002",
    "\u0002\u0094\u0097\u0003\u0002\u0002\u0002\u0095\u0093\u0003\u0002\u0002",
    "\u0002\u0095\u0096\u0003\u0002\u0002\u0002\u0096\u0099\u0003\u0002\u0002",
    "\u0002\u0097\u0095\u0003\u0002\u0002\u0002\u0098\u009a\u0005\u0014\u000b",
    "\u0002\u0099\u0098\u0003\u0002\u0002\u0002\u0099\u009a\u0003\u0002\u0002",
    "\u0002\u009a\u00a3\u0003\u0002\u0002\u0002\u009b\u009d\u0007\f\u0002",
    "\u0002\u009c\u009b\u0003\u0002\u0002\u0002\u009d\u009e\u0003\u0002\u0002",
    "\u0002\u009e\u009c\u0003\u0002\u0002\u0002\u009e\u009f\u0003\u0002\u0002",
    "\u0002\u009f\u00a0\u0003\u0002\u0002\u0002\u00a0\u00a2\u0005\u0014\u000b",
    "\u0002\u00a1\u009c\u0003\u0002\u0002\u0002\u00a2\u00a5\u0003\u0002\u0002",
    "\u0002\u00a3\u00a1\u0003\u0002\u0002\u0002\u00a3\u00a4\u0003\u0002\u0002",
    "\u0002\u00a4\u00a9\u0003\u0002\u0002\u0002\u00a5\u00a3\u0003\u0002\u0002",
    "\u0002\u00a6\u00a8\u0007\f\u0002\u0002\u00a7\u00a6\u0003\u0002\u0002",
    "\u0002\u00a8\u00ab\u0003\u0002\u0002\u0002\u00a9\u00a7\u0003\u0002\u0002",
    "\u0002\u00a9\u00aa\u0003\u0002\u0002\u0002\u00aa\u0013\u0003\u0002\u0002",
    "\u0002\u00ab\u00a9\u0003\u0002\u0002\u0002\u00ac\u00ad\u0005\b\u0005",
    "\u0002\u00ad\u0015\u0003\u0002\u0002\u0002\u00ae\u00af\u0005\u0018\r",
    "\u0002\u00af\u00b0\u0007\u000f\u0002\u0002\u00b0\u00b1\u0005\b\u0005",
    "\u0002\u00b1\u00b9\u0003\u0002\u0002\u0002\u00b2\u00b3\u0007\u0007\u0002",
    "\u0002\u00b3\u00b4\u0005\b\u0005\u0002\u00b4\u00b5\u0007\b\u0002\u0002",
    "\u00b5\u00b6\u0007\u000f\u0002\u0002\u00b6\u00b7\u0005\b\u0005\u0002",
    "\u00b7\u00b9\u0003\u0002\u0002\u0002\u00b8\u00ae\u0003\u0002\u0002\u0002",
    "\u00b8\u00b2\u0003\u0002\u0002\u0002\u00b9\u0017\u0003\u0002\u0002\u0002",
    "\u00ba\u00c2\u0005\u001a\u000e\u0002\u00bb\u00c2\u00074\u0002\u0002",
    "\u00bc\u00c2\u0005\"\u0012\u0002\u00bd\u00be\u0007\u0007\u0002\u0002",
    "\u00be\u00bf\u0005\b\u0005\u0002\u00bf\u00c0\u0007\b\u0002\u0002\u00c0",
    "\u00c2\u0003\u0002\u0002\u0002\u00c1\u00ba\u0003\u0002\u0002\u0002\u00c1",
    "\u00bb\u0003\u0002\u0002\u0002\u00c1\u00bc\u0003\u0002\u0002\u0002\u00c1",
    "\u00bd\u0003\u0002\u0002\u0002\u00c2\u0019\u0003\u0002\u0002\u0002\u00c3",
    "\u00c6\u0005\u001c\u000f\u0002\u00c4\u00c6\u0005&\u0014\u0002\u00c5",
    "\u00c3\u0003\u0002\u0002\u0002\u00c5\u00c4\u0003\u0002\u0002\u0002\u00c6",
    "\u001b\u0003\u0002\u0002\u0002\u00c7\u00cc\u0005\u001e\u0010\u0002\u00c8",
    "\u00cc\u0007(\u0002\u0002\u00c9\u00cc\u0007\'\u0002\u0002\u00ca\u00cc",
    "\u00073\u0002\u0002\u00cb\u00c7\u0003\u0002\u0002\u0002\u00cb\u00c8",
    "\u0003\u0002\u0002\u0002\u00cb\u00c9\u0003\u0002\u0002\u0002\u00cb\u00ca",
    "\u0003\u0002\u0002\u0002\u00cc\u001d\u0003\u0002\u0002\u0002\u00cd\u00ce",
    "\u0007\u0011\u0002\u0002\u00ce\u00cf\u00073\u0002\u0002\u00cf\u001f",
    "\u0003\u0002\u0002\u0002\u00d0\u00d5\u0007&\u0002\u0002\u00d1\u00d5",
    "\u0007%\u0002\u0002\u00d2\u00d5\u00074\u0002\u0002\u00d3\u00d5\u0005",
    "\"\u0012\u0002\u00d4\u00d0\u0003\u0002\u0002\u0002\u00d4\u00d1\u0003",
    "\u0002\u0002\u0002\u00d4\u00d2\u0003\u0002\u0002\u0002\u00d4\u00d3\u0003",
    "\u0002\u0002\u0002\u00d5!\u0003\u0002\u0002\u0002\u00d6\u00d9\u0005",
    "$\u0013\u0002\u00d7\u00d9\u0007)\u0002\u0002\u00d8\u00d6\u0003\u0002",
    "\u0002\u0002\u00d8\u00d7\u0003\u0002\u0002\u0002\u00d9#\u0003\u0002",
    "\u0002\u0002\u00da\u00db\u0007)\u0002\u0002\u00db\u00dc\u0007\u001a",
    "\u0002\u0002\u00dc%\u0003\u0002\u0002\u0002\u00dd\u00e0\u0005(\u0015",
    "\u0002\u00de\u00e0\u0007%\u0002\u0002\u00df\u00dd\u0003\u0002\u0002",
    "\u0002\u00df\u00de\u0003\u0002\u0002\u0002\u00e0\'\u0003\u0002\u0002",
    "\u0002\u00e1\u00e2\u0007$\u0002\u0002\u00e2)\u0003\u0002\u0002\u0002",
    "\u00e3\u00e4\t\u0006\u0002\u0002\u00e4+\u0003\u0002\u0002\u0002\u0019",
    "-Cegptv|\u0084\u0087\u008a\u0095\u0099\u009e\u00a3\u00a9\u00b8\u00c1",
    "\u00c5\u00cb\u00d4\u00d8\u00df"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, "'('", "')'", "'['", "']'", "'{'", 
                     "'}'", "';'", "','", "'='", "'?'", "':'", "'$'", "'@'", 
                     "'.'", "'++'", "'--'", "'+'", "'-'", "'!'", "'*'", 
                     "'/'", "'%'", "'**'", "'<'", "'>'", "'<='", "'>='", 
                     "'=='", "'!='", "'&&'", "'||'", "'if'", null, "'null'" ];

var symbolicNames = [ null, "MultiLineComment", "SingleLineComment", "OpenParen", 
                      "CloseParen", "OpenBracket", "CloseBracket", "OpenBrace", 
                      "CloseBrace", "SemiColon", "Comma", "Assign", "QuestionMark", 
                      "Colon", "Dollar", "At", "Dot", "PlusPlus", "MinusMinus", 
                      "Plus", "Minus", "Not", "Multiply", "Divide", "Modulus", 
                      "Power", "LessThan", "MoreThan", "LessThanEquals", 
                      "GreaterThanEquals", "Equals_", "NotEquals", "And", 
                      "Or", "If", "BooleanLiteral", "NullLiteral", "CellRangeLiteral", 
                      "CellAddressLiteral", "BasicNumberLiteral", "DecimalLiteral", 
                      "HexIntegerLiteral", "OctalIntegerLiteral", "OctalIntegerLiteral2", 
                      "BinaryIntegerLiteral", "BigHexIntegerLiteral", "BigOctalIntegerLiteral", 
                      "BigBinaryIntegerLiteral", "BigDecimalIntegerLiteral", 
                      "Identifier", "StringLiteral", "WhiteSpaces", "LineTerminator", 
                      "UnexpectedCharacter" ];

var ruleNames =  [ "formulaExpr", "expressionStatement", "expressionSequence", 
                   "singleExpression", "arguments", "argument", "objectLiteral", 
                   "arrayLiteral", "elementList", "arrayElement", "propertyAssignment", 
                   "propertyName", "identifierName", "identifier", "refItemCode", 
                   "literal", "numericLiteral", "percentageLiteral", "reservedWord", 
                   "keyword", "eos" ];

function ReportFormulaParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

ReportFormulaParser.prototype = Object.create(antlr4.Parser.prototype);
ReportFormulaParser.prototype.constructor = ReportFormulaParser;

Object.defineProperty(ReportFormulaParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

ReportFormulaParser.EOF = antlr4.Token.EOF;
ReportFormulaParser.MultiLineComment = 1;
ReportFormulaParser.SingleLineComment = 2;
ReportFormulaParser.OpenParen = 3;
ReportFormulaParser.CloseParen = 4;
ReportFormulaParser.OpenBracket = 5;
ReportFormulaParser.CloseBracket = 6;
ReportFormulaParser.OpenBrace = 7;
ReportFormulaParser.CloseBrace = 8;
ReportFormulaParser.SemiColon = 9;
ReportFormulaParser.Comma = 10;
ReportFormulaParser.Assign = 11;
ReportFormulaParser.QuestionMark = 12;
ReportFormulaParser.Colon = 13;
ReportFormulaParser.Dollar = 14;
ReportFormulaParser.At = 15;
ReportFormulaParser.Dot = 16;
ReportFormulaParser.PlusPlus = 17;
ReportFormulaParser.MinusMinus = 18;
ReportFormulaParser.Plus = 19;
ReportFormulaParser.Minus = 20;
ReportFormulaParser.Not = 21;
ReportFormulaParser.Multiply = 22;
ReportFormulaParser.Divide = 23;
ReportFormulaParser.Modulus = 24;
ReportFormulaParser.Power = 25;
ReportFormulaParser.LessThan = 26;
ReportFormulaParser.MoreThan = 27;
ReportFormulaParser.LessThanEquals = 28;
ReportFormulaParser.GreaterThanEquals = 29;
ReportFormulaParser.Equals_ = 30;
ReportFormulaParser.NotEquals = 31;
ReportFormulaParser.And = 32;
ReportFormulaParser.Or = 33;
ReportFormulaParser.If = 34;
ReportFormulaParser.BooleanLiteral = 35;
ReportFormulaParser.NullLiteral = 36;
ReportFormulaParser.CellRangeLiteral = 37;
ReportFormulaParser.CellAddressLiteral = 38;
ReportFormulaParser.BasicNumberLiteral = 39;
ReportFormulaParser.DecimalLiteral = 40;
ReportFormulaParser.HexIntegerLiteral = 41;
ReportFormulaParser.OctalIntegerLiteral = 42;
ReportFormulaParser.OctalIntegerLiteral2 = 43;
ReportFormulaParser.BinaryIntegerLiteral = 44;
ReportFormulaParser.BigHexIntegerLiteral = 45;
ReportFormulaParser.BigOctalIntegerLiteral = 46;
ReportFormulaParser.BigBinaryIntegerLiteral = 47;
ReportFormulaParser.BigDecimalIntegerLiteral = 48;
ReportFormulaParser.Identifier = 49;
ReportFormulaParser.StringLiteral = 50;
ReportFormulaParser.WhiteSpaces = 51;
ReportFormulaParser.LineTerminator = 52;
ReportFormulaParser.UnexpectedCharacter = 53;

ReportFormulaParser.RULE_formulaExpr = 0;
ReportFormulaParser.RULE_expressionStatement = 1;
ReportFormulaParser.RULE_expressionSequence = 2;
ReportFormulaParser.RULE_singleExpression = 3;
ReportFormulaParser.RULE_arguments = 4;
ReportFormulaParser.RULE_argument = 5;
ReportFormulaParser.RULE_objectLiteral = 6;
ReportFormulaParser.RULE_arrayLiteral = 7;
ReportFormulaParser.RULE_elementList = 8;
ReportFormulaParser.RULE_arrayElement = 9;
ReportFormulaParser.RULE_propertyAssignment = 10;
ReportFormulaParser.RULE_propertyName = 11;
ReportFormulaParser.RULE_identifierName = 12;
ReportFormulaParser.RULE_identifier = 13;
ReportFormulaParser.RULE_refItemCode = 14;
ReportFormulaParser.RULE_literal = 15;
ReportFormulaParser.RULE_numericLiteral = 16;
ReportFormulaParser.RULE_percentageLiteral = 17;
ReportFormulaParser.RULE_reservedWord = 18;
ReportFormulaParser.RULE_keyword = 19;
ReportFormulaParser.RULE_eos = 20;


function FormulaExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReportFormulaParser.RULE_formulaExpr;
    return this;
}

FormulaExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormulaExprContext.prototype.constructor = FormulaExprContext;

FormulaExprContext.prototype.expressionStatement = function() {
    return this.getTypedRuleContext(ExpressionStatementContext,0);
};

FormulaExprContext.prototype.EOF = function() {
    return this.getToken(ReportFormulaParser.EOF, 0);
};

FormulaExprContext.prototype.Assign = function() {
    return this.getToken(ReportFormulaParser.Assign, 0);
};

FormulaExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.enterFormulaExpr(this);
	}
};

FormulaExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.exitFormulaExpr(this);
	}
};

FormulaExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ReportFormulaParserVisitor ) {
        return visitor.visitFormulaExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ReportFormulaParser.FormulaExprContext = FormulaExprContext;

ReportFormulaParser.prototype.formulaExpr = function() {

    var localctx = new FormulaExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, ReportFormulaParser.RULE_formulaExpr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 43;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ReportFormulaParser.Assign) {
            this.state = 42;
            this.match(ReportFormulaParser.Assign);
        }

        this.state = 45;
        this.expressionStatement();
        this.state = 46;
        this.match(ReportFormulaParser.EOF);
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


function ExpressionStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReportFormulaParser.RULE_expressionStatement;
    return this;
}

ExpressionStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionStatementContext.prototype.constructor = ExpressionStatementContext;

ExpressionStatementContext.prototype.expressionSequence = function() {
    return this.getTypedRuleContext(ExpressionSequenceContext,0);
};

ExpressionStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.enterExpressionStatement(this);
	}
};

ExpressionStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.exitExpressionStatement(this);
	}
};

ExpressionStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ReportFormulaParserVisitor ) {
        return visitor.visitExpressionStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ReportFormulaParser.ExpressionStatementContext = ExpressionStatementContext;

ReportFormulaParser.prototype.expressionStatement = function() {

    var localctx = new ExpressionStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, ReportFormulaParser.RULE_expressionStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 48;
        this.expressionSequence();
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


function ExpressionSequenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReportFormulaParser.RULE_expressionSequence;
    return this;
}

ExpressionSequenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionSequenceContext.prototype.constructor = ExpressionSequenceContext;

ExpressionSequenceContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

ExpressionSequenceContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.enterExpressionSequence(this);
	}
};

ExpressionSequenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.exitExpressionSequence(this);
	}
};

ExpressionSequenceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ReportFormulaParserVisitor ) {
        return visitor.visitExpressionSequence(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ReportFormulaParser.ExpressionSequenceContext = ExpressionSequenceContext;

ReportFormulaParser.prototype.expressionSequence = function() {

    var localctx = new ExpressionSequenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, ReportFormulaParser.RULE_expressionSequence);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 50;
        this.singleExpression(0);
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


function SingleExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReportFormulaParser.RULE_singleExpression;
    return this;
}

SingleExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SingleExpressionContext.prototype.constructor = SingleExpressionContext;


 
SingleExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function ParenthesizedExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParenthesizedExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
ParenthesizedExpressionContext.prototype.constructor = ParenthesizedExpressionContext;

ReportFormulaParser.ParenthesizedExpressionContext = ParenthesizedExpressionContext;

ParenthesizedExpressionContext.prototype.OpenParen = function() {
    return this.getToken(ReportFormulaParser.OpenParen, 0);
};

ParenthesizedExpressionContext.prototype.expressionSequence = function() {
    return this.getTypedRuleContext(ExpressionSequenceContext,0);
};

ParenthesizedExpressionContext.prototype.CloseParen = function() {
    return this.getToken(ReportFormulaParser.CloseParen, 0);
};
ParenthesizedExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.enterParenthesizedExpression(this);
	}
};

ParenthesizedExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.exitParenthesizedExpression(this);
	}
};

ParenthesizedExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ReportFormulaParserVisitor ) {
        return visitor.visitParenthesizedExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AdditiveExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    this.op = null; // Token;
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AdditiveExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
AdditiveExpressionContext.prototype.constructor = AdditiveExpressionContext;

ReportFormulaParser.AdditiveExpressionContext = AdditiveExpressionContext;

AdditiveExpressionContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};

AdditiveExpressionContext.prototype.Plus = function() {
    return this.getToken(ReportFormulaParser.Plus, 0);
};

AdditiveExpressionContext.prototype.Minus = function() {
    return this.getToken(ReportFormulaParser.Minus, 0);
};
AdditiveExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.enterAdditiveExpression(this);
	}
};

AdditiveExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.exitAdditiveExpression(this);
	}
};

AdditiveExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ReportFormulaParserVisitor ) {
        return visitor.visitAdditiveExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function RelationalExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    this.op = null; // Token;
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RelationalExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
RelationalExpressionContext.prototype.constructor = RelationalExpressionContext;

ReportFormulaParser.RelationalExpressionContext = RelationalExpressionContext;

RelationalExpressionContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};

RelationalExpressionContext.prototype.LessThan = function() {
    return this.getToken(ReportFormulaParser.LessThan, 0);
};

RelationalExpressionContext.prototype.MoreThan = function() {
    return this.getToken(ReportFormulaParser.MoreThan, 0);
};

RelationalExpressionContext.prototype.LessThanEquals = function() {
    return this.getToken(ReportFormulaParser.LessThanEquals, 0);
};

RelationalExpressionContext.prototype.GreaterThanEquals = function() {
    return this.getToken(ReportFormulaParser.GreaterThanEquals, 0);
};
RelationalExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.enterRelationalExpression(this);
	}
};

RelationalExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.exitRelationalExpression(this);
	}
};

RelationalExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ReportFormulaParserVisitor ) {
        return visitor.visitRelationalExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function TernaryExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TernaryExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
TernaryExpressionContext.prototype.constructor = TernaryExpressionContext;

ReportFormulaParser.TernaryExpressionContext = TernaryExpressionContext;

TernaryExpressionContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};

TernaryExpressionContext.prototype.QuestionMark = function() {
    return this.getToken(ReportFormulaParser.QuestionMark, 0);
};

TernaryExpressionContext.prototype.Colon = function() {
    return this.getToken(ReportFormulaParser.Colon, 0);
};
TernaryExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.enterTernaryExpression(this);
	}
};

TernaryExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.exitTernaryExpression(this);
	}
};

TernaryExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ReportFormulaParserVisitor ) {
        return visitor.visitTernaryExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LogicalAndExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LogicalAndExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
LogicalAndExpressionContext.prototype.constructor = LogicalAndExpressionContext;

ReportFormulaParser.LogicalAndExpressionContext = LogicalAndExpressionContext;

LogicalAndExpressionContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};

LogicalAndExpressionContext.prototype.And = function() {
    return this.getToken(ReportFormulaParser.And, 0);
};
LogicalAndExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.enterLogicalAndExpression(this);
	}
};

LogicalAndExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.exitLogicalAndExpression(this);
	}
};

LogicalAndExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ReportFormulaParserVisitor ) {
        return visitor.visitLogicalAndExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PowerExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    this.op = null; // Token;
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PowerExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
PowerExpressionContext.prototype.constructor = PowerExpressionContext;

ReportFormulaParser.PowerExpressionContext = PowerExpressionContext;

PowerExpressionContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};

PowerExpressionContext.prototype.Power = function() {
    return this.getToken(ReportFormulaParser.Power, 0);
};
PowerExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.enterPowerExpression(this);
	}
};

PowerExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.exitPowerExpression(this);
	}
};

PowerExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ReportFormulaParserVisitor ) {
        return visitor.visitPowerExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ObjectLiteralExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ObjectLiteralExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
ObjectLiteralExpressionContext.prototype.constructor = ObjectLiteralExpressionContext;

ReportFormulaParser.ObjectLiteralExpressionContext = ObjectLiteralExpressionContext;

ObjectLiteralExpressionContext.prototype.objectLiteral = function() {
    return this.getTypedRuleContext(ObjectLiteralContext,0);
};
ObjectLiteralExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.enterObjectLiteralExpression(this);
	}
};

ObjectLiteralExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.exitObjectLiteralExpression(this);
	}
};

ObjectLiteralExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ReportFormulaParserVisitor ) {
        return visitor.visitObjectLiteralExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LiteralExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LiteralExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
LiteralExpressionContext.prototype.constructor = LiteralExpressionContext;

ReportFormulaParser.LiteralExpressionContext = LiteralExpressionContext;

LiteralExpressionContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};
LiteralExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.enterLiteralExpression(this);
	}
};

LiteralExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.exitLiteralExpression(this);
	}
};

LiteralExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ReportFormulaParserVisitor ) {
        return visitor.visitLiteralExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LogicalOrExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LogicalOrExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
LogicalOrExpressionContext.prototype.constructor = LogicalOrExpressionContext;

ReportFormulaParser.LogicalOrExpressionContext = LogicalOrExpressionContext;

LogicalOrExpressionContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};

LogicalOrExpressionContext.prototype.Or = function() {
    return this.getToken(ReportFormulaParser.Or, 0);
};
LogicalOrExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.enterLogicalOrExpression(this);
	}
};

LogicalOrExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.exitLogicalOrExpression(this);
	}
};

LogicalOrExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ReportFormulaParserVisitor ) {
        return visitor.visitLogicalOrExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ArrayLiteralExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ArrayLiteralExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
ArrayLiteralExpressionContext.prototype.constructor = ArrayLiteralExpressionContext;

ReportFormulaParser.ArrayLiteralExpressionContext = ArrayLiteralExpressionContext;

ArrayLiteralExpressionContext.prototype.arrayLiteral = function() {
    return this.getTypedRuleContext(ArrayLiteralContext,0);
};
ArrayLiteralExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.enterArrayLiteralExpression(this);
	}
};

ArrayLiteralExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.exitArrayLiteralExpression(this);
	}
};

ArrayLiteralExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ReportFormulaParserVisitor ) {
        return visitor.visitArrayLiteralExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IdentifierExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdentifierExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
IdentifierExpressionContext.prototype.constructor = IdentifierExpressionContext;

ReportFormulaParser.IdentifierExpressionContext = IdentifierExpressionContext;

IdentifierExpressionContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};
IdentifierExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.enterIdentifierExpression(this);
	}
};

IdentifierExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.exitIdentifierExpression(this);
	}
};

IdentifierExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ReportFormulaParserVisitor ) {
        return visitor.visitIdentifierExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ArgumentsExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ArgumentsExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
ArgumentsExpressionContext.prototype.constructor = ArgumentsExpressionContext;

ReportFormulaParser.ArgumentsExpressionContext = ArgumentsExpressionContext;

ArgumentsExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

ArgumentsExpressionContext.prototype.arguments = function() {
    return this.getTypedRuleContext(ArgumentsContext,0);
};
ArgumentsExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.enterArgumentsExpression(this);
	}
};

ArgumentsExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.exitArgumentsExpression(this);
	}
};

ArgumentsExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ReportFormulaParserVisitor ) {
        return visitor.visitArgumentsExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function UnaryMinusExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UnaryMinusExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
UnaryMinusExpressionContext.prototype.constructor = UnaryMinusExpressionContext;

ReportFormulaParser.UnaryMinusExpressionContext = UnaryMinusExpressionContext;

UnaryMinusExpressionContext.prototype.Minus = function() {
    return this.getToken(ReportFormulaParser.Minus, 0);
};

UnaryMinusExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};
UnaryMinusExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.enterUnaryMinusExpression(this);
	}
};

UnaryMinusExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.exitUnaryMinusExpression(this);
	}
};

UnaryMinusExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ReportFormulaParserVisitor ) {
        return visitor.visitUnaryMinusExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AssignmentExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AssignmentExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
AssignmentExpressionContext.prototype.constructor = AssignmentExpressionContext;

ReportFormulaParser.AssignmentExpressionContext = AssignmentExpressionContext;

AssignmentExpressionContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};

AssignmentExpressionContext.prototype.Assign = function() {
    return this.getToken(ReportFormulaParser.Assign, 0);
};
AssignmentExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.enterAssignmentExpression(this);
	}
};

AssignmentExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.exitAssignmentExpression(this);
	}
};

AssignmentExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ReportFormulaParserVisitor ) {
        return visitor.visitAssignmentExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function UnaryPlusExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UnaryPlusExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
UnaryPlusExpressionContext.prototype.constructor = UnaryPlusExpressionContext;

ReportFormulaParser.UnaryPlusExpressionContext = UnaryPlusExpressionContext;

UnaryPlusExpressionContext.prototype.Plus = function() {
    return this.getToken(ReportFormulaParser.Plus, 0);
};

UnaryPlusExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};
UnaryPlusExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.enterUnaryPlusExpression(this);
	}
};

UnaryPlusExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.exitUnaryPlusExpression(this);
	}
};

UnaryPlusExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ReportFormulaParserVisitor ) {
        return visitor.visitUnaryPlusExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function EqualityExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    this.op = null; // Token;
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EqualityExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
EqualityExpressionContext.prototype.constructor = EqualityExpressionContext;

ReportFormulaParser.EqualityExpressionContext = EqualityExpressionContext;

EqualityExpressionContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};

EqualityExpressionContext.prototype.Equals_ = function() {
    return this.getToken(ReportFormulaParser.Equals_, 0);
};

EqualityExpressionContext.prototype.NotEquals = function() {
    return this.getToken(ReportFormulaParser.NotEquals, 0);
};
EqualityExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.enterEqualityExpression(this);
	}
};

EqualityExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.exitEqualityExpression(this);
	}
};

EqualityExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ReportFormulaParserVisitor ) {
        return visitor.visitEqualityExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MultiplicativeExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    this.op = null; // Token;
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MultiplicativeExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
MultiplicativeExpressionContext.prototype.constructor = MultiplicativeExpressionContext;

ReportFormulaParser.MultiplicativeExpressionContext = MultiplicativeExpressionContext;

MultiplicativeExpressionContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};

MultiplicativeExpressionContext.prototype.Multiply = function() {
    return this.getToken(ReportFormulaParser.Multiply, 0);
};

MultiplicativeExpressionContext.prototype.Divide = function() {
    return this.getToken(ReportFormulaParser.Divide, 0);
};

MultiplicativeExpressionContext.prototype.Modulus = function() {
    return this.getToken(ReportFormulaParser.Modulus, 0);
};
MultiplicativeExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.enterMultiplicativeExpression(this);
	}
};

MultiplicativeExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.exitMultiplicativeExpression(this);
	}
};

MultiplicativeExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ReportFormulaParserVisitor ) {
        return visitor.visitMultiplicativeExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};



ReportFormulaParser.prototype.singleExpression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new SingleExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 6;
    this.enterRecursionRule(localctx, 6, ReportFormulaParser.RULE_singleExpression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 65;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ReportFormulaParser.Plus:
            localctx = new UnaryPlusExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 53;
            this.match(ReportFormulaParser.Plus);
            this.state = 54;
            this.singleExpression(16);
            break;
        case ReportFormulaParser.Minus:
            localctx = new UnaryMinusExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 55;
            this.match(ReportFormulaParser.Minus);
            this.state = 56;
            this.singleExpression(15);
            break;
        case ReportFormulaParser.At:
        case ReportFormulaParser.CellRangeLiteral:
        case ReportFormulaParser.CellAddressLiteral:
        case ReportFormulaParser.Identifier:
            localctx = new IdentifierExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 57;
            this.identifier();
            break;
        case ReportFormulaParser.BooleanLiteral:
        case ReportFormulaParser.NullLiteral:
        case ReportFormulaParser.BasicNumberLiteral:
        case ReportFormulaParser.StringLiteral:
            localctx = new LiteralExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 58;
            this.literal();
            break;
        case ReportFormulaParser.OpenBracket:
            localctx = new ArrayLiteralExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 59;
            this.arrayLiteral();
            break;
        case ReportFormulaParser.OpenBrace:
            localctx = new ObjectLiteralExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 60;
            this.objectLiteral();
            break;
        case ReportFormulaParser.OpenParen:
            localctx = new ParenthesizedExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 61;
            this.match(ReportFormulaParser.OpenParen);
            this.state = 62;
            this.expressionSequence();
            this.state = 63;
            this.match(ReportFormulaParser.CloseParen);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 101;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 99;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new PowerExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ReportFormulaParser.RULE_singleExpression);
                    this.state = 67;
                    if (!( this.precpred(this._ctx, 14))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                    }
                    this.state = 68;
                    localctx.op = this.match(ReportFormulaParser.Power);
                    this.state = 69;
                    this.singleExpression(14);
                    break;

                case 2:
                    localctx = new MultiplicativeExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ReportFormulaParser.RULE_singleExpression);
                    this.state = 70;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 71;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ReportFormulaParser.Multiply) | (1 << ReportFormulaParser.Divide) | (1 << ReportFormulaParser.Modulus))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 72;
                    this.singleExpression(14);
                    break;

                case 3:
                    localctx = new AdditiveExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ReportFormulaParser.RULE_singleExpression);
                    this.state = 73;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 74;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===ReportFormulaParser.Plus || _la===ReportFormulaParser.Minus)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 75;
                    this.singleExpression(13);
                    break;

                case 4:
                    localctx = new RelationalExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ReportFormulaParser.RULE_singleExpression);
                    this.state = 76;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 77;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ReportFormulaParser.LessThan) | (1 << ReportFormulaParser.MoreThan) | (1 << ReportFormulaParser.LessThanEquals) | (1 << ReportFormulaParser.GreaterThanEquals))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 78;
                    this.singleExpression(12);
                    break;

                case 5:
                    localctx = new EqualityExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ReportFormulaParser.RULE_singleExpression);
                    this.state = 79;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 80;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===ReportFormulaParser.Equals_ || _la===ReportFormulaParser.NotEquals)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 81;
                    this.singleExpression(11);
                    break;

                case 6:
                    localctx = new LogicalAndExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ReportFormulaParser.RULE_singleExpression);
                    this.state = 82;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 83;
                    this.match(ReportFormulaParser.And);
                    this.state = 84;
                    this.singleExpression(10);
                    break;

                case 7:
                    localctx = new LogicalOrExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ReportFormulaParser.RULE_singleExpression);
                    this.state = 85;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 86;
                    this.match(ReportFormulaParser.Or);
                    this.state = 87;
                    this.singleExpression(9);
                    break;

                case 8:
                    localctx = new TernaryExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ReportFormulaParser.RULE_singleExpression);
                    this.state = 88;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 89;
                    this.match(ReportFormulaParser.QuestionMark);
                    this.state = 90;
                    this.singleExpression(0);
                    this.state = 91;
                    this.match(ReportFormulaParser.Colon);
                    this.state = 92;
                    this.singleExpression(8);
                    break;

                case 9:
                    localctx = new AssignmentExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ReportFormulaParser.RULE_singleExpression);
                    this.state = 94;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 95;
                    this.match(ReportFormulaParser.Assign);
                    this.state = 96;
                    this.singleExpression(6);
                    break;

                case 10:
                    localctx = new ArgumentsExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ReportFormulaParser.RULE_singleExpression);
                    this.state = 97;
                    if (!( this.precpred(this._ctx, 17))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
                    }
                    this.state = 98;
                    this.arguments();
                    break;

                } 
            }
            this.state = 103;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function ArgumentsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReportFormulaParser.RULE_arguments;
    return this;
}

ArgumentsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgumentsContext.prototype.constructor = ArgumentsContext;

ArgumentsContext.prototype.OpenParen = function() {
    return this.getToken(ReportFormulaParser.OpenParen, 0);
};

ArgumentsContext.prototype.CloseParen = function() {
    return this.getToken(ReportFormulaParser.CloseParen, 0);
};

ArgumentsContext.prototype.argument = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ArgumentContext);
    } else {
        return this.getTypedRuleContext(ArgumentContext,i);
    }
};

ArgumentsContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ReportFormulaParser.Comma);
    } else {
        return this.getToken(ReportFormulaParser.Comma, i);
    }
};


ArgumentsContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.enterArguments(this);
	}
};

ArgumentsContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.exitArguments(this);
	}
};

ArgumentsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ReportFormulaParserVisitor ) {
        return visitor.visitArguments(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ReportFormulaParser.ArgumentsContext = ArgumentsContext;

ReportFormulaParser.prototype.arguments = function() {

    var localctx = new ArgumentsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, ReportFormulaParser.RULE_arguments);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 104;
        this.match(ReportFormulaParser.OpenParen);
        this.state = 116;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ReportFormulaParser.OpenParen) | (1 << ReportFormulaParser.OpenBracket) | (1 << ReportFormulaParser.OpenBrace) | (1 << ReportFormulaParser.At) | (1 << ReportFormulaParser.Plus) | (1 << ReportFormulaParser.Minus))) !== 0) || ((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & ((1 << (ReportFormulaParser.BooleanLiteral - 35)) | (1 << (ReportFormulaParser.NullLiteral - 35)) | (1 << (ReportFormulaParser.CellRangeLiteral - 35)) | (1 << (ReportFormulaParser.CellAddressLiteral - 35)) | (1 << (ReportFormulaParser.BasicNumberLiteral - 35)) | (1 << (ReportFormulaParser.Identifier - 35)) | (1 << (ReportFormulaParser.StringLiteral - 35)))) !== 0)) {
            this.state = 105;
            this.argument();
            this.state = 110;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 106;
                    this.match(ReportFormulaParser.Comma);
                    this.state = 107;
                    this.argument(); 
                }
                this.state = 112;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
            }

            this.state = 114;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ReportFormulaParser.Comma) {
                this.state = 113;
                this.match(ReportFormulaParser.Comma);
            }

        }

        this.state = 118;
        this.match(ReportFormulaParser.CloseParen);
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


function ArgumentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReportFormulaParser.RULE_argument;
    return this;
}

ArgumentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgumentContext.prototype.constructor = ArgumentContext;

ArgumentContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

ArgumentContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

ArgumentContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.enterArgument(this);
	}
};

ArgumentContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.exitArgument(this);
	}
};

ArgumentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ReportFormulaParserVisitor ) {
        return visitor.visitArgument(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ReportFormulaParser.ArgumentContext = ArgumentContext;

ReportFormulaParser.prototype.argument = function() {

    var localctx = new ArgumentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, ReportFormulaParser.RULE_argument);
    try {
        this.state = 122;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 120;
            this.singleExpression(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 121;
            this.identifier();
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


function ObjectLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReportFormulaParser.RULE_objectLiteral;
    return this;
}

ObjectLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObjectLiteralContext.prototype.constructor = ObjectLiteralContext;

ObjectLiteralContext.prototype.OpenBrace = function() {
    return this.getToken(ReportFormulaParser.OpenBrace, 0);
};

ObjectLiteralContext.prototype.CloseBrace = function() {
    return this.getToken(ReportFormulaParser.CloseBrace, 0);
};

ObjectLiteralContext.prototype.propertyAssignment = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PropertyAssignmentContext);
    } else {
        return this.getTypedRuleContext(PropertyAssignmentContext,i);
    }
};

ObjectLiteralContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ReportFormulaParser.Comma);
    } else {
        return this.getToken(ReportFormulaParser.Comma, i);
    }
};


ObjectLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.enterObjectLiteral(this);
	}
};

ObjectLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.exitObjectLiteral(this);
	}
};

ObjectLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ReportFormulaParserVisitor ) {
        return visitor.visitObjectLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ReportFormulaParser.ObjectLiteralContext = ObjectLiteralContext;

ReportFormulaParser.prototype.objectLiteral = function() {

    var localctx = new ObjectLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, ReportFormulaParser.RULE_objectLiteral);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 124;
        this.match(ReportFormulaParser.OpenBrace);
        this.state = 133;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ReportFormulaParser.OpenBracket || _la===ReportFormulaParser.At || ((((_la - 34)) & ~0x1f) == 0 && ((1 << (_la - 34)) & ((1 << (ReportFormulaParser.If - 34)) | (1 << (ReportFormulaParser.BooleanLiteral - 34)) | (1 << (ReportFormulaParser.CellRangeLiteral - 34)) | (1 << (ReportFormulaParser.CellAddressLiteral - 34)) | (1 << (ReportFormulaParser.BasicNumberLiteral - 34)) | (1 << (ReportFormulaParser.Identifier - 34)) | (1 << (ReportFormulaParser.StringLiteral - 34)))) !== 0)) {
            this.state = 125;
            this.propertyAssignment();
            this.state = 130;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 126;
                    this.match(ReportFormulaParser.Comma);
                    this.state = 127;
                    this.propertyAssignment(); 
                }
                this.state = 132;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
            }

        }

        this.state = 136;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ReportFormulaParser.Comma) {
            this.state = 135;
            this.match(ReportFormulaParser.Comma);
        }

        this.state = 138;
        this.match(ReportFormulaParser.CloseBrace);
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


function ArrayLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReportFormulaParser.RULE_arrayLiteral;
    return this;
}

ArrayLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayLiteralContext.prototype.constructor = ArrayLiteralContext;

ArrayLiteralContext.prototype.OpenBracket = function() {
    return this.getToken(ReportFormulaParser.OpenBracket, 0);
};

ArrayLiteralContext.prototype.elementList = function() {
    return this.getTypedRuleContext(ElementListContext,0);
};

ArrayLiteralContext.prototype.CloseBracket = function() {
    return this.getToken(ReportFormulaParser.CloseBracket, 0);
};

ArrayLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.enterArrayLiteral(this);
	}
};

ArrayLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.exitArrayLiteral(this);
	}
};

ArrayLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ReportFormulaParserVisitor ) {
        return visitor.visitArrayLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ReportFormulaParser.ArrayLiteralContext = ArrayLiteralContext;

ReportFormulaParser.prototype.arrayLiteral = function() {

    var localctx = new ArrayLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, ReportFormulaParser.RULE_arrayLiteral);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 140;
        this.match(ReportFormulaParser.OpenBracket);
        this.state = 141;
        this.elementList();
        this.state = 142;
        this.match(ReportFormulaParser.CloseBracket);
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


function ElementListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReportFormulaParser.RULE_elementList;
    return this;
}

ElementListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementListContext.prototype.constructor = ElementListContext;

ElementListContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ReportFormulaParser.Comma);
    } else {
        return this.getToken(ReportFormulaParser.Comma, i);
    }
};


ElementListContext.prototype.arrayElement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ArrayElementContext);
    } else {
        return this.getTypedRuleContext(ArrayElementContext,i);
    }
};

ElementListContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.enterElementList(this);
	}
};

ElementListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.exitElementList(this);
	}
};

ElementListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ReportFormulaParserVisitor ) {
        return visitor.visitElementList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ReportFormulaParser.ElementListContext = ElementListContext;

ReportFormulaParser.prototype.elementList = function() {

    var localctx = new ElementListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, ReportFormulaParser.RULE_elementList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 147;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 144;
                this.match(ReportFormulaParser.Comma); 
            }
            this.state = 149;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
        }

        this.state = 151;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ReportFormulaParser.OpenParen) | (1 << ReportFormulaParser.OpenBracket) | (1 << ReportFormulaParser.OpenBrace) | (1 << ReportFormulaParser.At) | (1 << ReportFormulaParser.Plus) | (1 << ReportFormulaParser.Minus))) !== 0) || ((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & ((1 << (ReportFormulaParser.BooleanLiteral - 35)) | (1 << (ReportFormulaParser.NullLiteral - 35)) | (1 << (ReportFormulaParser.CellRangeLiteral - 35)) | (1 << (ReportFormulaParser.CellAddressLiteral - 35)) | (1 << (ReportFormulaParser.BasicNumberLiteral - 35)) | (1 << (ReportFormulaParser.Identifier - 35)) | (1 << (ReportFormulaParser.StringLiteral - 35)))) !== 0)) {
            this.state = 150;
            this.arrayElement();
        }

        this.state = 161;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 154; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    this.state = 153;
                    this.match(ReportFormulaParser.Comma);
                    this.state = 156; 
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while(_la===ReportFormulaParser.Comma);
                this.state = 158;
                this.arrayElement(); 
            }
            this.state = 163;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
        }

        this.state = 167;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ReportFormulaParser.Comma) {
            this.state = 164;
            this.match(ReportFormulaParser.Comma);
            this.state = 169;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
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


function ArrayElementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReportFormulaParser.RULE_arrayElement;
    return this;
}

ArrayElementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayElementContext.prototype.constructor = ArrayElementContext;

ArrayElementContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

ArrayElementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.enterArrayElement(this);
	}
};

ArrayElementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.exitArrayElement(this);
	}
};

ArrayElementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ReportFormulaParserVisitor ) {
        return visitor.visitArrayElement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ReportFormulaParser.ArrayElementContext = ArrayElementContext;

ReportFormulaParser.prototype.arrayElement = function() {

    var localctx = new ArrayElementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, ReportFormulaParser.RULE_arrayElement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 170;
        this.singleExpression(0);
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


function PropertyAssignmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReportFormulaParser.RULE_propertyAssignment;
    return this;
}

PropertyAssignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropertyAssignmentContext.prototype.constructor = PropertyAssignmentContext;


 
PropertyAssignmentContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function PropertyExpressionAssignmentContext(parser, ctx) {
	PropertyAssignmentContext.call(this, parser);
    PropertyAssignmentContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PropertyExpressionAssignmentContext.prototype = Object.create(PropertyAssignmentContext.prototype);
PropertyExpressionAssignmentContext.prototype.constructor = PropertyExpressionAssignmentContext;

ReportFormulaParser.PropertyExpressionAssignmentContext = PropertyExpressionAssignmentContext;

PropertyExpressionAssignmentContext.prototype.propertyName = function() {
    return this.getTypedRuleContext(PropertyNameContext,0);
};

PropertyExpressionAssignmentContext.prototype.Colon = function() {
    return this.getToken(ReportFormulaParser.Colon, 0);
};

PropertyExpressionAssignmentContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};
PropertyExpressionAssignmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.enterPropertyExpressionAssignment(this);
	}
};

PropertyExpressionAssignmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.exitPropertyExpressionAssignment(this);
	}
};

PropertyExpressionAssignmentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ReportFormulaParserVisitor ) {
        return visitor.visitPropertyExpressionAssignment(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ComputedPropertyExpressionAssignmentContext(parser, ctx) {
	PropertyAssignmentContext.call(this, parser);
    PropertyAssignmentContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ComputedPropertyExpressionAssignmentContext.prototype = Object.create(PropertyAssignmentContext.prototype);
ComputedPropertyExpressionAssignmentContext.prototype.constructor = ComputedPropertyExpressionAssignmentContext;

ReportFormulaParser.ComputedPropertyExpressionAssignmentContext = ComputedPropertyExpressionAssignmentContext;

ComputedPropertyExpressionAssignmentContext.prototype.OpenBracket = function() {
    return this.getToken(ReportFormulaParser.OpenBracket, 0);
};

ComputedPropertyExpressionAssignmentContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};

ComputedPropertyExpressionAssignmentContext.prototype.CloseBracket = function() {
    return this.getToken(ReportFormulaParser.CloseBracket, 0);
};

ComputedPropertyExpressionAssignmentContext.prototype.Colon = function() {
    return this.getToken(ReportFormulaParser.Colon, 0);
};
ComputedPropertyExpressionAssignmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.enterComputedPropertyExpressionAssignment(this);
	}
};

ComputedPropertyExpressionAssignmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.exitComputedPropertyExpressionAssignment(this);
	}
};

ComputedPropertyExpressionAssignmentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ReportFormulaParserVisitor ) {
        return visitor.visitComputedPropertyExpressionAssignment(this);
    } else {
        return visitor.visitChildren(this);
    }
};



ReportFormulaParser.PropertyAssignmentContext = PropertyAssignmentContext;

ReportFormulaParser.prototype.propertyAssignment = function() {

    var localctx = new PropertyAssignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, ReportFormulaParser.RULE_propertyAssignment);
    try {
        this.state = 182;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
        switch(la_) {
        case 1:
            localctx = new PropertyExpressionAssignmentContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 172;
            this.propertyName();
            this.state = 173;
            this.match(ReportFormulaParser.Colon);
            this.state = 174;
            this.singleExpression(0);
            break;

        case 2:
            localctx = new ComputedPropertyExpressionAssignmentContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 176;
            this.match(ReportFormulaParser.OpenBracket);
            this.state = 177;
            this.singleExpression(0);
            this.state = 178;
            this.match(ReportFormulaParser.CloseBracket);
            this.state = 179;
            this.match(ReportFormulaParser.Colon);
            this.state = 180;
            this.singleExpression(0);
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


function PropertyNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReportFormulaParser.RULE_propertyName;
    return this;
}

PropertyNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropertyNameContext.prototype.constructor = PropertyNameContext;

PropertyNameContext.prototype.identifierName = function() {
    return this.getTypedRuleContext(IdentifierNameContext,0);
};

PropertyNameContext.prototype.StringLiteral = function() {
    return this.getToken(ReportFormulaParser.StringLiteral, 0);
};

PropertyNameContext.prototype.numericLiteral = function() {
    return this.getTypedRuleContext(NumericLiteralContext,0);
};

PropertyNameContext.prototype.OpenBracket = function() {
    return this.getToken(ReportFormulaParser.OpenBracket, 0);
};

PropertyNameContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

PropertyNameContext.prototype.CloseBracket = function() {
    return this.getToken(ReportFormulaParser.CloseBracket, 0);
};

PropertyNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.enterPropertyName(this);
	}
};

PropertyNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.exitPropertyName(this);
	}
};

PropertyNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ReportFormulaParserVisitor ) {
        return visitor.visitPropertyName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ReportFormulaParser.PropertyNameContext = PropertyNameContext;

ReportFormulaParser.prototype.propertyName = function() {

    var localctx = new PropertyNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, ReportFormulaParser.RULE_propertyName);
    try {
        this.state = 191;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ReportFormulaParser.At:
        case ReportFormulaParser.If:
        case ReportFormulaParser.BooleanLiteral:
        case ReportFormulaParser.CellRangeLiteral:
        case ReportFormulaParser.CellAddressLiteral:
        case ReportFormulaParser.Identifier:
            this.enterOuterAlt(localctx, 1);
            this.state = 184;
            this.identifierName();
            break;
        case ReportFormulaParser.StringLiteral:
            this.enterOuterAlt(localctx, 2);
            this.state = 185;
            this.match(ReportFormulaParser.StringLiteral);
            break;
        case ReportFormulaParser.BasicNumberLiteral:
            this.enterOuterAlt(localctx, 3);
            this.state = 186;
            this.numericLiteral();
            break;
        case ReportFormulaParser.OpenBracket:
            this.enterOuterAlt(localctx, 4);
            this.state = 187;
            this.match(ReportFormulaParser.OpenBracket);
            this.state = 188;
            this.singleExpression(0);
            this.state = 189;
            this.match(ReportFormulaParser.CloseBracket);
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


function IdentifierNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReportFormulaParser.RULE_identifierName;
    return this;
}

IdentifierNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentifierNameContext.prototype.constructor = IdentifierNameContext;

IdentifierNameContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

IdentifierNameContext.prototype.reservedWord = function() {
    return this.getTypedRuleContext(ReservedWordContext,0);
};

IdentifierNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.enterIdentifierName(this);
	}
};

IdentifierNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.exitIdentifierName(this);
	}
};

IdentifierNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ReportFormulaParserVisitor ) {
        return visitor.visitIdentifierName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ReportFormulaParser.IdentifierNameContext = IdentifierNameContext;

ReportFormulaParser.prototype.identifierName = function() {

    var localctx = new IdentifierNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, ReportFormulaParser.RULE_identifierName);
    try {
        this.state = 195;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ReportFormulaParser.At:
        case ReportFormulaParser.CellRangeLiteral:
        case ReportFormulaParser.CellAddressLiteral:
        case ReportFormulaParser.Identifier:
            this.enterOuterAlt(localctx, 1);
            this.state = 193;
            this.identifier();
            break;
        case ReportFormulaParser.If:
        case ReportFormulaParser.BooleanLiteral:
            this.enterOuterAlt(localctx, 2);
            this.state = 194;
            this.reservedWord();
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


function IdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReportFormulaParser.RULE_identifier;
    return this;
}

IdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentifierContext.prototype.constructor = IdentifierContext;


 
IdentifierContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function IdentifierCellAddressContext(parser, ctx) {
	IdentifierContext.call(this, parser);
    IdentifierContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdentifierCellAddressContext.prototype = Object.create(IdentifierContext.prototype);
IdentifierCellAddressContext.prototype.constructor = IdentifierCellAddressContext;

ReportFormulaParser.IdentifierCellAddressContext = IdentifierCellAddressContext;

IdentifierCellAddressContext.prototype.CellAddressLiteral = function() {
    return this.getToken(ReportFormulaParser.CellAddressLiteral, 0);
};
IdentifierCellAddressContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.enterIdentifierCellAddress(this);
	}
};

IdentifierCellAddressContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.exitIdentifierCellAddress(this);
	}
};

IdentifierCellAddressContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ReportFormulaParserVisitor ) {
        return visitor.visitIdentifierCellAddress(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IdentifierRefItemCodeContext(parser, ctx) {
	IdentifierContext.call(this, parser);
    IdentifierContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdentifierRefItemCodeContext.prototype = Object.create(IdentifierContext.prototype);
IdentifierRefItemCodeContext.prototype.constructor = IdentifierRefItemCodeContext;

ReportFormulaParser.IdentifierRefItemCodeContext = IdentifierRefItemCodeContext;

IdentifierRefItemCodeContext.prototype.refItemCode = function() {
    return this.getTypedRuleContext(RefItemCodeContext,0);
};
IdentifierRefItemCodeContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.enterIdentifierRefItemCode(this);
	}
};

IdentifierRefItemCodeContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.exitIdentifierRefItemCode(this);
	}
};

IdentifierRefItemCodeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ReportFormulaParserVisitor ) {
        return visitor.visitIdentifierRefItemCode(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IdentifierCellRangeContext(parser, ctx) {
	IdentifierContext.call(this, parser);
    IdentifierContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdentifierCellRangeContext.prototype = Object.create(IdentifierContext.prototype);
IdentifierCellRangeContext.prototype.constructor = IdentifierCellRangeContext;

ReportFormulaParser.IdentifierCellRangeContext = IdentifierCellRangeContext;

IdentifierCellRangeContext.prototype.CellRangeLiteral = function() {
    return this.getToken(ReportFormulaParser.CellRangeLiteral, 0);
};
IdentifierCellRangeContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.enterIdentifierCellRange(this);
	}
};

IdentifierCellRangeContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.exitIdentifierCellRange(this);
	}
};

IdentifierCellRangeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ReportFormulaParserVisitor ) {
        return visitor.visitIdentifierCellRange(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IdentifierPlainTextContext(parser, ctx) {
	IdentifierContext.call(this, parser);
    IdentifierContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdentifierPlainTextContext.prototype = Object.create(IdentifierContext.prototype);
IdentifierPlainTextContext.prototype.constructor = IdentifierPlainTextContext;

ReportFormulaParser.IdentifierPlainTextContext = IdentifierPlainTextContext;

IdentifierPlainTextContext.prototype.Identifier = function() {
    return this.getToken(ReportFormulaParser.Identifier, 0);
};
IdentifierPlainTextContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.enterIdentifierPlainText(this);
	}
};

IdentifierPlainTextContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.exitIdentifierPlainText(this);
	}
};

IdentifierPlainTextContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ReportFormulaParserVisitor ) {
        return visitor.visitIdentifierPlainText(this);
    } else {
        return visitor.visitChildren(this);
    }
};



ReportFormulaParser.IdentifierContext = IdentifierContext;

ReportFormulaParser.prototype.identifier = function() {

    var localctx = new IdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, ReportFormulaParser.RULE_identifier);
    try {
        this.state = 201;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ReportFormulaParser.At:
            localctx = new IdentifierRefItemCodeContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 197;
            this.refItemCode();
            break;
        case ReportFormulaParser.CellAddressLiteral:
            localctx = new IdentifierCellAddressContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 198;
            this.match(ReportFormulaParser.CellAddressLiteral);
            break;
        case ReportFormulaParser.CellRangeLiteral:
            localctx = new IdentifierCellRangeContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 199;
            this.match(ReportFormulaParser.CellRangeLiteral);
            break;
        case ReportFormulaParser.Identifier:
            localctx = new IdentifierPlainTextContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 200;
            this.match(ReportFormulaParser.Identifier);
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


function RefItemCodeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReportFormulaParser.RULE_refItemCode;
    return this;
}

RefItemCodeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RefItemCodeContext.prototype.constructor = RefItemCodeContext;

RefItemCodeContext.prototype.At = function() {
    return this.getToken(ReportFormulaParser.At, 0);
};

RefItemCodeContext.prototype.Identifier = function() {
    return this.getToken(ReportFormulaParser.Identifier, 0);
};

RefItemCodeContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.enterRefItemCode(this);
	}
};

RefItemCodeContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.exitRefItemCode(this);
	}
};

RefItemCodeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ReportFormulaParserVisitor ) {
        return visitor.visitRefItemCode(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ReportFormulaParser.RefItemCodeContext = RefItemCodeContext;

ReportFormulaParser.prototype.refItemCode = function() {

    var localctx = new RefItemCodeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, ReportFormulaParser.RULE_refItemCode);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 203;
        this.match(ReportFormulaParser.At);
        this.state = 204;
        this.match(ReportFormulaParser.Identifier);
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


function LiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReportFormulaParser.RULE_literal;
    return this;
}

LiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteralContext.prototype.constructor = LiteralContext;


 
LiteralContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function NumericLiteralExpressionContext(parser, ctx) {
	LiteralContext.call(this, parser);
    LiteralContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NumericLiteralExpressionContext.prototype = Object.create(LiteralContext.prototype);
NumericLiteralExpressionContext.prototype.constructor = NumericLiteralExpressionContext;

ReportFormulaParser.NumericLiteralExpressionContext = NumericLiteralExpressionContext;

NumericLiteralExpressionContext.prototype.numericLiteral = function() {
    return this.getTypedRuleContext(NumericLiteralContext,0);
};
NumericLiteralExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.enterNumericLiteralExpression(this);
	}
};

NumericLiteralExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.exitNumericLiteralExpression(this);
	}
};

NumericLiteralExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ReportFormulaParserVisitor ) {
        return visitor.visitNumericLiteralExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StringLiteralExpressionContext(parser, ctx) {
	LiteralContext.call(this, parser);
    LiteralContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StringLiteralExpressionContext.prototype = Object.create(LiteralContext.prototype);
StringLiteralExpressionContext.prototype.constructor = StringLiteralExpressionContext;

ReportFormulaParser.StringLiteralExpressionContext = StringLiteralExpressionContext;

StringLiteralExpressionContext.prototype.StringLiteral = function() {
    return this.getToken(ReportFormulaParser.StringLiteral, 0);
};
StringLiteralExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.enterStringLiteralExpression(this);
	}
};

StringLiteralExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.exitStringLiteralExpression(this);
	}
};

StringLiteralExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ReportFormulaParserVisitor ) {
        return visitor.visitStringLiteralExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BooleanLiteralExpressionContext(parser, ctx) {
	LiteralContext.call(this, parser);
    LiteralContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BooleanLiteralExpressionContext.prototype = Object.create(LiteralContext.prototype);
BooleanLiteralExpressionContext.prototype.constructor = BooleanLiteralExpressionContext;

ReportFormulaParser.BooleanLiteralExpressionContext = BooleanLiteralExpressionContext;

BooleanLiteralExpressionContext.prototype.BooleanLiteral = function() {
    return this.getToken(ReportFormulaParser.BooleanLiteral, 0);
};
BooleanLiteralExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.enterBooleanLiteralExpression(this);
	}
};

BooleanLiteralExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.exitBooleanLiteralExpression(this);
	}
};

BooleanLiteralExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ReportFormulaParserVisitor ) {
        return visitor.visitBooleanLiteralExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NullLiteralExpressionContext(parser, ctx) {
	LiteralContext.call(this, parser);
    LiteralContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NullLiteralExpressionContext.prototype = Object.create(LiteralContext.prototype);
NullLiteralExpressionContext.prototype.constructor = NullLiteralExpressionContext;

ReportFormulaParser.NullLiteralExpressionContext = NullLiteralExpressionContext;

NullLiteralExpressionContext.prototype.NullLiteral = function() {
    return this.getToken(ReportFormulaParser.NullLiteral, 0);
};
NullLiteralExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.enterNullLiteralExpression(this);
	}
};

NullLiteralExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.exitNullLiteralExpression(this);
	}
};

NullLiteralExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ReportFormulaParserVisitor ) {
        return visitor.visitNullLiteralExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};



ReportFormulaParser.LiteralContext = LiteralContext;

ReportFormulaParser.prototype.literal = function() {

    var localctx = new LiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, ReportFormulaParser.RULE_literal);
    try {
        this.state = 210;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ReportFormulaParser.NullLiteral:
            localctx = new NullLiteralExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 206;
            this.match(ReportFormulaParser.NullLiteral);
            break;
        case ReportFormulaParser.BooleanLiteral:
            localctx = new BooleanLiteralExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 207;
            this.match(ReportFormulaParser.BooleanLiteral);
            break;
        case ReportFormulaParser.StringLiteral:
            localctx = new StringLiteralExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 208;
            this.match(ReportFormulaParser.StringLiteral);
            break;
        case ReportFormulaParser.BasicNumberLiteral:
            localctx = new NumericLiteralExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 209;
            this.numericLiteral();
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


function NumericLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReportFormulaParser.RULE_numericLiteral;
    return this;
}

NumericLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumericLiteralContext.prototype.constructor = NumericLiteralContext;


 
NumericLiteralContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function BasicNumberLiteralExpressionContext(parser, ctx) {
	NumericLiteralContext.call(this, parser);
    NumericLiteralContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BasicNumberLiteralExpressionContext.prototype = Object.create(NumericLiteralContext.prototype);
BasicNumberLiteralExpressionContext.prototype.constructor = BasicNumberLiteralExpressionContext;

ReportFormulaParser.BasicNumberLiteralExpressionContext = BasicNumberLiteralExpressionContext;

BasicNumberLiteralExpressionContext.prototype.BasicNumberLiteral = function() {
    return this.getToken(ReportFormulaParser.BasicNumberLiteral, 0);
};
BasicNumberLiteralExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.enterBasicNumberLiteralExpression(this);
	}
};

BasicNumberLiteralExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.exitBasicNumberLiteralExpression(this);
	}
};

BasicNumberLiteralExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ReportFormulaParserVisitor ) {
        return visitor.visitBasicNumberLiteralExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PercentageLiteralExpressionContext(parser, ctx) {
	NumericLiteralContext.call(this, parser);
    NumericLiteralContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PercentageLiteralExpressionContext.prototype = Object.create(NumericLiteralContext.prototype);
PercentageLiteralExpressionContext.prototype.constructor = PercentageLiteralExpressionContext;

ReportFormulaParser.PercentageLiteralExpressionContext = PercentageLiteralExpressionContext;

PercentageLiteralExpressionContext.prototype.percentageLiteral = function() {
    return this.getTypedRuleContext(PercentageLiteralContext,0);
};
PercentageLiteralExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.enterPercentageLiteralExpression(this);
	}
};

PercentageLiteralExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.exitPercentageLiteralExpression(this);
	}
};

PercentageLiteralExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ReportFormulaParserVisitor ) {
        return visitor.visitPercentageLiteralExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};



ReportFormulaParser.NumericLiteralContext = NumericLiteralContext;

ReportFormulaParser.prototype.numericLiteral = function() {

    var localctx = new NumericLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, ReportFormulaParser.RULE_numericLiteral);
    try {
        this.state = 214;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
        switch(la_) {
        case 1:
            localctx = new PercentageLiteralExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 212;
            this.percentageLiteral();
            break;

        case 2:
            localctx = new BasicNumberLiteralExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 213;
            this.match(ReportFormulaParser.BasicNumberLiteral);
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


function PercentageLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReportFormulaParser.RULE_percentageLiteral;
    return this;
}

PercentageLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PercentageLiteralContext.prototype.constructor = PercentageLiteralContext;

PercentageLiteralContext.prototype.BasicNumberLiteral = function() {
    return this.getToken(ReportFormulaParser.BasicNumberLiteral, 0);
};

PercentageLiteralContext.prototype.Modulus = function() {
    return this.getToken(ReportFormulaParser.Modulus, 0);
};

PercentageLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.enterPercentageLiteral(this);
	}
};

PercentageLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.exitPercentageLiteral(this);
	}
};

PercentageLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ReportFormulaParserVisitor ) {
        return visitor.visitPercentageLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ReportFormulaParser.PercentageLiteralContext = PercentageLiteralContext;

ReportFormulaParser.prototype.percentageLiteral = function() {

    var localctx = new PercentageLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, ReportFormulaParser.RULE_percentageLiteral);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 216;
        this.match(ReportFormulaParser.BasicNumberLiteral);
        this.state = 217;
        this.match(ReportFormulaParser.Modulus);
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


function ReservedWordContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReportFormulaParser.RULE_reservedWord;
    return this;
}

ReservedWordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReservedWordContext.prototype.constructor = ReservedWordContext;

ReservedWordContext.prototype.keyword = function() {
    return this.getTypedRuleContext(KeywordContext,0);
};

ReservedWordContext.prototype.BooleanLiteral = function() {
    return this.getToken(ReportFormulaParser.BooleanLiteral, 0);
};

ReservedWordContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.enterReservedWord(this);
	}
};

ReservedWordContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.exitReservedWord(this);
	}
};

ReservedWordContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ReportFormulaParserVisitor ) {
        return visitor.visitReservedWord(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ReportFormulaParser.ReservedWordContext = ReservedWordContext;

ReportFormulaParser.prototype.reservedWord = function() {

    var localctx = new ReservedWordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, ReportFormulaParser.RULE_reservedWord);
    try {
        this.state = 221;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ReportFormulaParser.If:
            this.enterOuterAlt(localctx, 1);
            this.state = 219;
            this.keyword();
            break;
        case ReportFormulaParser.BooleanLiteral:
            this.enterOuterAlt(localctx, 2);
            this.state = 220;
            this.match(ReportFormulaParser.BooleanLiteral);
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


function KeywordContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReportFormulaParser.RULE_keyword;
    return this;
}

KeywordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
KeywordContext.prototype.constructor = KeywordContext;

KeywordContext.prototype.If = function() {
    return this.getToken(ReportFormulaParser.If, 0);
};

KeywordContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.enterKeyword(this);
	}
};

KeywordContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.exitKeyword(this);
	}
};

KeywordContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ReportFormulaParserVisitor ) {
        return visitor.visitKeyword(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ReportFormulaParser.KeywordContext = KeywordContext;

ReportFormulaParser.prototype.keyword = function() {

    var localctx = new KeywordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, ReportFormulaParser.RULE_keyword);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 223;
        this.match(ReportFormulaParser.If);
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


function EosContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReportFormulaParser.RULE_eos;
    return this;
}

EosContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EosContext.prototype.constructor = EosContext;

EosContext.prototype.SemiColon = function() {
    return this.getToken(ReportFormulaParser.SemiColon, 0);
};

EosContext.prototype.EOF = function() {
    return this.getToken(ReportFormulaParser.EOF, 0);
};

EosContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.enterEos(this);
	}
};

EosContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.exitEos(this);
	}
};

EosContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ReportFormulaParserVisitor ) {
        return visitor.visitEos(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ReportFormulaParser.EosContext = EosContext;

ReportFormulaParser.prototype.eos = function() {

    var localctx = new EosContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, ReportFormulaParser.RULE_eos);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 225;
        _la = this._input.LA(1);
        if(!(_la===ReportFormulaParser.EOF || _la===ReportFormulaParser.SemiColon)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
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


ReportFormulaParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 3:
			return this.singleExpression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

ReportFormulaParser.prototype.singleExpression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 14);
		case 1:
			return this.precpred(this._ctx, 13);
		case 2:
			return this.precpred(this._ctx, 12);
		case 3:
			return this.precpred(this._ctx, 11);
		case 4:
			return this.precpred(this._ctx, 10);
		case 5:
			return this.precpred(this._ctx, 9);
		case 6:
			return this.precpred(this._ctx, 8);
		case 7:
			return this.precpred(this._ctx, 7);
		case 8:
			return this.precpred(this._ctx, 6);
		case 9:
			return this.precpred(this._ctx, 17);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.ReportFormulaParser = ReportFormulaParser;
