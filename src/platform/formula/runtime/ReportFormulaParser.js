// Generated from /Users/zhangye/Documents/code/code_yonyou/FormulaTextArea/src/platform/formula/grammar/ReportFormulaParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ReportFormulaParserListener = require('./ReportFormulaParserListener').ReportFormulaParserListener;
var ReportFormulaParserVisitor = require('./ReportFormulaParserVisitor').ReportFormulaParserVisitor;

var grammarFileName = "ReportFormulaParser.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003:\u00f5\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
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
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0005\u0005k\n\u0005\u0003\u0005\u0003\u0005\u0005\u0005o\n\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0007\u0005t\n\u0005\f\u0005\u000e\u0005",
    "w\u000b\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0007",
    "\u0006}\n\u0006\f\u0006\u000e\u0006\u0080\u000b\u0006\u0003\u0006\u0005",
    "\u0006\u0083\n\u0006\u0005\u0006\u0085\n\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0007\u0003\u0007\u0005\u0007\u008b\n\u0007\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0007\b\u0091\n\b\f\b\u000e\b\u0094\u000b\b\u0005\b\u0096",
    "\n\b\u0003\b\u0005\b\u0099\n\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\n\u0007\n\u00a2\n\n\f\n\u000e\n\u00a5\u000b\n\u0003",
    "\n\u0005\n\u00a8\n\n\u0003\n\u0006\n\u00ab\n\n\r\n\u000e\n\u00ac\u0003",
    "\n\u0007\n\u00b0\n\n\f\n\u000e\n\u00b3\u000b\n\u0003\n\u0007\n\u00b6",
    "\n\n\f\n\u000e\n\u00b9\u000b\n\u0003\u000b\u0003\u000b\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005",
    "\f\u00c7\n\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r",
    "\u0005\r\u00d0\n\r\u0003\u000e\u0003\u000e\u0005\u000e\u00d4\n\u000e",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000f",
    "\u00db\n\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u00e4\n\u0011\u0003\u0012",
    "\u0003\u0012\u0005\u0012\u00e8\n\u0012\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0014\u0003\u0014\u0005\u0014\u00ef\n\u0014\u0003\u0015",
    "\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0002\u0003\b\u0017",
    "\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c",
    "\u001e \"$&(*\u0002\u0007\u0003\u0002\u0018\u001a\u0003\u0002\u0015",
    "\u0016\u0003\u0002\u001d \u0003\u0002!\"\u0003\u0003\u000b\u000b\u0002",
    "\u010e\u0002-\u0003\u0002\u0002\u0002\u00042\u0003\u0002\u0002\u0002",
    "\u00064\u0003\u0002\u0002\u0002\bC\u0003\u0002\u0002\u0002\nx\u0003",
    "\u0002\u0002\u0002\f\u008a\u0003\u0002\u0002\u0002\u000e\u008c\u0003",
    "\u0002\u0002\u0002\u0010\u009c\u0003\u0002\u0002\u0002\u0012\u00a3\u0003",
    "\u0002\u0002\u0002\u0014\u00ba\u0003\u0002\u0002\u0002\u0016\u00c6\u0003",
    "\u0002\u0002\u0002\u0018\u00cf\u0003\u0002\u0002\u0002\u001a\u00d3\u0003",
    "\u0002\u0002\u0002\u001c\u00da\u0003\u0002\u0002\u0002\u001e\u00dc\u0003",
    "\u0002\u0002\u0002 \u00e3\u0003\u0002\u0002\u0002\"\u00e7\u0003\u0002",
    "\u0002\u0002$\u00e9\u0003\u0002\u0002\u0002&\u00ee\u0003\u0002\u0002",
    "\u0002(\u00f0\u0003\u0002\u0002\u0002*\u00f2\u0003\u0002\u0002\u0002",
    ",.\u0007\r\u0002\u0002-,\u0003\u0002\u0002\u0002-.\u0003\u0002\u0002",
    "\u0002./\u0003\u0002\u0002\u0002/0\u0005\u0004\u0003\u000201\u0007\u0002",
    "\u0002\u00031\u0003\u0003\u0002\u0002\u000223\u0005\u0006\u0004\u0002",
    "3\u0005\u0003\u0002\u0002\u000245\u0005\b\u0005\u00025\u0007\u0003\u0002",
    "\u0002\u000267\b\u0005\u0001\u000278\u0007\u0015\u0002\u00028D\u0005",
    "\b\u0005\u00129:\u0007\u0016\u0002\u0002:D\u0005\b\u0005\u0011;D\u0005",
    "\u001c\u000f\u0002<D\u0005 \u0011\u0002=D\u0005\u0010\t\u0002>D\u0005",
    "\u000e\b\u0002?@\u0007\u0005\u0002\u0002@A\u0005\u0006\u0004\u0002A",
    "B\u0007\u0006\u0002\u0002BD\u0003\u0002\u0002\u0002C6\u0003\u0002\u0002",
    "\u0002C9\u0003\u0002\u0002\u0002C;\u0003\u0002\u0002\u0002C<\u0003\u0002",
    "\u0002\u0002C=\u0003\u0002\u0002\u0002C>\u0003\u0002\u0002\u0002C?\u0003",
    "\u0002\u0002\u0002Du\u0003\u0002\u0002\u0002EF\f\u0010\u0002\u0002F",
    "G\u0007\u001b\u0002\u0002Gt\u0005\b\u0005\u0010HI\f\u000f\u0002\u0002",
    "IJ\t\u0002\u0002\u0002Jt\u0005\b\u0005\u0010KL\f\u000e\u0002\u0002L",
    "M\t\u0003\u0002\u0002Mt\u0005\b\u0005\u000fNO\f\r\u0002\u0002OP\t\u0004",
    "\u0002\u0002Pt\u0005\b\u0005\u000eQR\f\f\u0002\u0002RS\t\u0005\u0002",
    "\u0002St\u0005\b\u0005\rTU\f\u000b\u0002\u0002UV\u0007#\u0002\u0002",
    "Vt\u0005\b\u0005\fWX\f\n\u0002\u0002XY\u0007$\u0002\u0002Yt\u0005\b",
    "\u0005\u000bZ[\f\t\u0002\u0002[\\\u0007\u000e\u0002\u0002\\]\u0005\b",
    "\u0005\u0002]^\u0007\u000f\u0002\u0002^_\u0005\b\u0005\n_t\u0003\u0002",
    "\u0002\u0002`a\f\b\u0002\u0002ab\u0007\r\u0002\u0002bt\u0005\b\u0005",
    "\bcd\f\u0015\u0002\u0002de\u0007\u0007\u0002\u0002ef\u0005\u0006\u0004",
    "\u0002fg\u0007\b\u0002\u0002gt\u0003\u0002\u0002\u0002hj\f\u0014\u0002",
    "\u0002ik\u0007\u000e\u0002\u0002ji\u0003\u0002\u0002\u0002jk\u0003\u0002",
    "\u0002\u0002kl\u0003\u0002\u0002\u0002ln\u0007\u0012\u0002\u0002mo\u0007",
    "\u001c\u0002\u0002nm\u0003\u0002\u0002\u0002no\u0003\u0002\u0002\u0002",
    "op\u0003\u0002\u0002\u0002pt\u0005\u001a\u000e\u0002qr\f\u0013\u0002",
    "\u0002rt\u0005\n\u0006\u0002sE\u0003\u0002\u0002\u0002sH\u0003\u0002",
    "\u0002\u0002sK\u0003\u0002\u0002\u0002sN\u0003\u0002\u0002\u0002sQ\u0003",
    "\u0002\u0002\u0002sT\u0003\u0002\u0002\u0002sW\u0003\u0002\u0002\u0002",
    "sZ\u0003\u0002\u0002\u0002s`\u0003\u0002\u0002\u0002sc\u0003\u0002\u0002",
    "\u0002sh\u0003\u0002\u0002\u0002sq\u0003\u0002\u0002\u0002tw\u0003\u0002",
    "\u0002\u0002us\u0003\u0002\u0002\u0002uv\u0003\u0002\u0002\u0002v\t",
    "\u0003\u0002\u0002\u0002wu\u0003\u0002\u0002\u0002x\u0084\u0007\u0005",
    "\u0002\u0002y~\u0005\f\u0007\u0002z{\u0007\f\u0002\u0002{}\u0005\f\u0007",
    "\u0002|z\u0003\u0002\u0002\u0002}\u0080\u0003\u0002\u0002\u0002~|\u0003",
    "\u0002\u0002\u0002~\u007f\u0003\u0002\u0002\u0002\u007f\u0082\u0003",
    "\u0002\u0002\u0002\u0080~\u0003\u0002\u0002\u0002\u0081\u0083\u0007",
    "\f\u0002\u0002\u0082\u0081\u0003\u0002\u0002\u0002\u0082\u0083\u0003",
    "\u0002\u0002\u0002\u0083\u0085\u0003\u0002\u0002\u0002\u0084y\u0003",
    "\u0002\u0002\u0002\u0084\u0085\u0003\u0002\u0002\u0002\u0085\u0086\u0003",
    "\u0002\u0002\u0002\u0086\u0087\u0007\u0006\u0002\u0002\u0087\u000b\u0003",
    "\u0002\u0002\u0002\u0088\u008b\u0005\b\u0005\u0002\u0089\u008b\u0005",
    "\u001c\u000f\u0002\u008a\u0088\u0003\u0002\u0002\u0002\u008a\u0089\u0003",
    "\u0002\u0002\u0002\u008b\r\u0003\u0002\u0002\u0002\u008c\u0095\u0007",
    "\t\u0002\u0002\u008d\u0092\u0005\u0016\f\u0002\u008e\u008f\u0007\f\u0002",
    "\u0002\u008f\u0091\u0005\u0016\f\u0002\u0090\u008e\u0003\u0002\u0002",
    "\u0002\u0091\u0094\u0003\u0002\u0002\u0002\u0092\u0090\u0003\u0002\u0002",
    "\u0002\u0092\u0093\u0003\u0002\u0002\u0002\u0093\u0096\u0003\u0002\u0002",
    "\u0002\u0094\u0092\u0003\u0002\u0002\u0002\u0095\u008d\u0003\u0002\u0002",
    "\u0002\u0095\u0096\u0003\u0002\u0002\u0002\u0096\u0098\u0003\u0002\u0002",
    "\u0002\u0097\u0099\u0007\f\u0002\u0002\u0098\u0097\u0003\u0002\u0002",
    "\u0002\u0098\u0099\u0003\u0002\u0002\u0002\u0099\u009a\u0003\u0002\u0002",
    "\u0002\u009a\u009b\u0007\n\u0002\u0002\u009b\u000f\u0003\u0002\u0002",
    "\u0002\u009c\u009d\u0007\u0007\u0002\u0002\u009d\u009e\u0005\u0012\n",
    "\u0002\u009e\u009f\u0007\b\u0002\u0002\u009f\u0011\u0003\u0002\u0002",
    "\u0002\u00a0\u00a2\u0007\f\u0002\u0002\u00a1\u00a0\u0003\u0002\u0002",
    "\u0002\u00a2\u00a5\u0003\u0002\u0002\u0002\u00a3\u00a1\u0003\u0002\u0002",
    "\u0002\u00a3\u00a4\u0003\u0002\u0002\u0002\u00a4\u00a7\u0003\u0002\u0002",
    "\u0002\u00a5\u00a3\u0003\u0002\u0002\u0002\u00a6\u00a8\u0005\u0014\u000b",
    "\u0002\u00a7\u00a6\u0003\u0002\u0002\u0002\u00a7\u00a8\u0003\u0002\u0002",
    "\u0002\u00a8\u00b1\u0003\u0002\u0002\u0002\u00a9\u00ab\u0007\f\u0002",
    "\u0002\u00aa\u00a9\u0003\u0002\u0002\u0002\u00ab\u00ac\u0003\u0002\u0002",
    "\u0002\u00ac\u00aa\u0003\u0002\u0002\u0002\u00ac\u00ad\u0003\u0002\u0002",
    "\u0002\u00ad\u00ae\u0003\u0002\u0002\u0002\u00ae\u00b0\u0005\u0014\u000b",
    "\u0002\u00af\u00aa\u0003\u0002\u0002\u0002\u00b0\u00b3\u0003\u0002\u0002",
    "\u0002\u00b1\u00af\u0003\u0002\u0002\u0002\u00b1\u00b2\u0003\u0002\u0002",
    "\u0002\u00b2\u00b7\u0003\u0002\u0002\u0002\u00b3\u00b1\u0003\u0002\u0002",
    "\u0002\u00b4\u00b6\u0007\f\u0002\u0002\u00b5\u00b4\u0003\u0002\u0002",
    "\u0002\u00b6\u00b9\u0003\u0002\u0002\u0002\u00b7\u00b5\u0003\u0002\u0002",
    "\u0002\u00b7\u00b8\u0003\u0002\u0002\u0002\u00b8\u0013\u0003\u0002\u0002",
    "\u0002\u00b9\u00b7\u0003\u0002\u0002\u0002\u00ba\u00bb\u0005\b\u0005",
    "\u0002\u00bb\u0015\u0003\u0002\u0002\u0002\u00bc\u00bd\u0005\u0018\r",
    "\u0002\u00bd\u00be\u0007\u000f\u0002\u0002\u00be\u00bf\u0005\b\u0005",
    "\u0002\u00bf\u00c7\u0003\u0002\u0002\u0002\u00c0\u00c1\u0007\u0007\u0002",
    "\u0002\u00c1\u00c2\u0005\b\u0005\u0002\u00c2\u00c3\u0007\b\u0002\u0002",
    "\u00c3\u00c4\u0007\u000f\u0002\u0002\u00c4\u00c5\u0005\b\u0005\u0002",
    "\u00c5\u00c7\u0003\u0002\u0002\u0002\u00c6\u00bc\u0003\u0002\u0002\u0002",
    "\u00c6\u00c0\u0003\u0002\u0002\u0002\u00c7\u0017\u0003\u0002\u0002\u0002",
    "\u00c8\u00d0\u0005\u001a\u000e\u0002\u00c9\u00d0\u00077\u0002\u0002",
    "\u00ca\u00d0\u0005\"\u0012\u0002\u00cb\u00cc\u0007\u0007\u0002\u0002",
    "\u00cc\u00cd\u0005\b\u0005\u0002\u00cd\u00ce\u0007\b\u0002\u0002\u00ce",
    "\u00d0\u0003\u0002\u0002\u0002\u00cf\u00c8\u0003\u0002\u0002\u0002\u00cf",
    "\u00c9\u0003\u0002\u0002\u0002\u00cf\u00ca\u0003\u0002\u0002\u0002\u00cf",
    "\u00cb\u0003\u0002\u0002\u0002\u00d0\u0019\u0003\u0002\u0002\u0002\u00d1",
    "\u00d4\u0005\u001c\u000f\u0002\u00d2\u00d4\u0005&\u0014\u0002\u00d3",
    "\u00d1\u0003\u0002\u0002\u0002\u00d3\u00d2\u0003\u0002\u0002\u0002\u00d4",
    "\u001b\u0003\u0002\u0002\u0002\u00d5\u00db\u0005\u001e\u0010\u0002\u00d6",
    "\u00db\u0007+\u0002\u0002\u00d7\u00db\u0007)\u0002\u0002\u00d8\u00db",
    "\u0007*\u0002\u0002\u00d9\u00db\u00076\u0002\u0002\u00da\u00d5\u0003",
    "\u0002\u0002\u0002\u00da\u00d6\u0003\u0002\u0002\u0002\u00da\u00d7\u0003",
    "\u0002\u0002\u0002\u00da\u00d8\u0003\u0002\u0002\u0002\u00da\u00d9\u0003",
    "\u0002\u0002\u0002\u00db\u001d\u0003\u0002\u0002\u0002\u00dc\u00dd\u0007",
    "\u0011\u0002\u0002\u00dd\u00de\u00076\u0002\u0002\u00de\u001f\u0003",
    "\u0002\u0002\u0002\u00df\u00e4\u0007(\u0002\u0002\u00e0\u00e4\u0007",
    "\'\u0002\u0002\u00e1\u00e4\u00077\u0002\u0002\u00e2\u00e4\u0005\"\u0012",
    "\u0002\u00e3\u00df\u0003\u0002\u0002\u0002\u00e3\u00e0\u0003\u0002\u0002",
    "\u0002\u00e3\u00e1\u0003\u0002\u0002\u0002\u00e3\u00e2\u0003\u0002\u0002",
    "\u0002\u00e4!\u0003\u0002\u0002\u0002\u00e5\u00e8\u0005$\u0013\u0002",
    "\u00e6\u00e8\u0007,\u0002\u0002\u00e7\u00e5\u0003\u0002\u0002\u0002",
    "\u00e7\u00e6\u0003\u0002\u0002\u0002\u00e8#\u0003\u0002\u0002\u0002",
    "\u00e9\u00ea\u0007,\u0002\u0002\u00ea\u00eb\u0007\u001a\u0002\u0002",
    "\u00eb%\u0003\u0002\u0002\u0002\u00ec\u00ef\u0005(\u0015\u0002\u00ed",
    "\u00ef\u0007\'\u0002\u0002\u00ee\u00ec\u0003\u0002\u0002\u0002\u00ee",
    "\u00ed\u0003\u0002\u0002\u0002\u00ef\'\u0003\u0002\u0002\u0002\u00f0",
    "\u00f1\u0007&\u0002\u0002\u00f1)\u0003\u0002\u0002\u0002\u00f2\u00f3",
    "\t\u0006\u0002\u0002\u00f3+\u0003\u0002\u0002\u0002\u001b-Cjnsu~\u0082",
    "\u0084\u008a\u0092\u0095\u0098\u00a3\u00a7\u00ac\u00b1\u00b7\u00c6\u00cf",
    "\u00d3\u00da\u00e3\u00e7\u00ee"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, "'('", "')'", "'['", "']'", "'{'", 
                     "'}'", "';'", "','", "'='", "'?'", "':'", "'$'", "'@'", 
                     "'.'", "'++'", "'--'", "'+'", "'-'", "'!'", "'*'", 
                     "'/'", "'%'", "'**'", "'#'", "'<'", "'>'", "'<='", 
                     "'>='", "'=='", "'!='", "'&&'", "'||'", "'->'", "'if'", 
                     null, "'null'" ];

var symbolicNames = [ null, "MultiLineComment", "SingleLineComment", "OpenParen", 
                      "CloseParen", "OpenBracket", "CloseBracket", "OpenBrace", 
                      "CloseBrace", "SemiColon", "Comma", "Assign", "QuestionMark", 
                      "Colon", "Dollar", "At", "Dot", "PlusPlus", "MinusMinus", 
                      "Plus", "Minus", "Not", "Multiply", "Divide", "Modulus", 
                      "Power", "Hashtag", "LessThan", "MoreThan", "LessThanEquals", 
                      "GreaterThanEquals", "Equals_", "NotEquals", "And", 
                      "Or", "ArrowRight", "If", "BooleanLiteral", "NullLiteral", 
                      "CellRangeLiteral", "CellFloatRangeLiteral", "CellAddressLiteral", 
                      "BasicNumberLiteral", "DecimalLiteral", "HexIntegerLiteral", 
                      "OctalIntegerLiteral", "OctalIntegerLiteral2", "BinaryIntegerLiteral", 
                      "BigHexIntegerLiteral", "BigOctalIntegerLiteral", 
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
ReportFormulaParser.Hashtag = 26;
ReportFormulaParser.LessThan = 27;
ReportFormulaParser.MoreThan = 28;
ReportFormulaParser.LessThanEquals = 29;
ReportFormulaParser.GreaterThanEquals = 30;
ReportFormulaParser.Equals_ = 31;
ReportFormulaParser.NotEquals = 32;
ReportFormulaParser.And = 33;
ReportFormulaParser.Or = 34;
ReportFormulaParser.ArrowRight = 35;
ReportFormulaParser.If = 36;
ReportFormulaParser.BooleanLiteral = 37;
ReportFormulaParser.NullLiteral = 38;
ReportFormulaParser.CellRangeLiteral = 39;
ReportFormulaParser.CellFloatRangeLiteral = 40;
ReportFormulaParser.CellAddressLiteral = 41;
ReportFormulaParser.BasicNumberLiteral = 42;
ReportFormulaParser.DecimalLiteral = 43;
ReportFormulaParser.HexIntegerLiteral = 44;
ReportFormulaParser.OctalIntegerLiteral = 45;
ReportFormulaParser.OctalIntegerLiteral2 = 46;
ReportFormulaParser.BinaryIntegerLiteral = 47;
ReportFormulaParser.BigHexIntegerLiteral = 48;
ReportFormulaParser.BigOctalIntegerLiteral = 49;
ReportFormulaParser.BigBinaryIntegerLiteral = 50;
ReportFormulaParser.BigDecimalIntegerLiteral = 51;
ReportFormulaParser.Identifier = 52;
ReportFormulaParser.StringLiteral = 53;
ReportFormulaParser.WhiteSpaces = 54;
ReportFormulaParser.LineTerminator = 55;
ReportFormulaParser.UnexpectedCharacter = 56;

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


function MemberDotExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MemberDotExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
MemberDotExpressionContext.prototype.constructor = MemberDotExpressionContext;

ReportFormulaParser.MemberDotExpressionContext = MemberDotExpressionContext;

MemberDotExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

MemberDotExpressionContext.prototype.Dot = function() {
    return this.getToken(ReportFormulaParser.Dot, 0);
};

MemberDotExpressionContext.prototype.identifierName = function() {
    return this.getTypedRuleContext(IdentifierNameContext,0);
};

MemberDotExpressionContext.prototype.QuestionMark = function() {
    return this.getToken(ReportFormulaParser.QuestionMark, 0);
};

MemberDotExpressionContext.prototype.Hashtag = function() {
    return this.getToken(ReportFormulaParser.Hashtag, 0);
};
MemberDotExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.enterMemberDotExpression(this);
	}
};

MemberDotExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.exitMemberDotExpression(this);
	}
};

MemberDotExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ReportFormulaParserVisitor ) {
        return visitor.visitMemberDotExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MemberIndexExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MemberIndexExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
MemberIndexExpressionContext.prototype.constructor = MemberIndexExpressionContext;

ReportFormulaParser.MemberIndexExpressionContext = MemberIndexExpressionContext;

MemberIndexExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

MemberIndexExpressionContext.prototype.OpenBracket = function() {
    return this.getToken(ReportFormulaParser.OpenBracket, 0);
};

MemberIndexExpressionContext.prototype.expressionSequence = function() {
    return this.getTypedRuleContext(ExpressionSequenceContext,0);
};

MemberIndexExpressionContext.prototype.CloseBracket = function() {
    return this.getToken(ReportFormulaParser.CloseBracket, 0);
};
MemberIndexExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.enterMemberIndexExpression(this);
	}
};

MemberIndexExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.exitMemberIndexExpression(this);
	}
};

MemberIndexExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ReportFormulaParserVisitor ) {
        return visitor.visitMemberIndexExpression(this);
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
        case ReportFormulaParser.CellFloatRangeLiteral:
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
        this.state = 115;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 113;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
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
                    localctx = new MemberIndexExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ReportFormulaParser.RULE_singleExpression);
                    this.state = 97;
                    if (!( this.precpred(this._ctx, 19))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 19)");
                    }
                    this.state = 98;
                    this.match(ReportFormulaParser.OpenBracket);
                    this.state = 99;
                    this.expressionSequence();
                    this.state = 100;
                    this.match(ReportFormulaParser.CloseBracket);
                    break;

                case 11:
                    localctx = new MemberDotExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ReportFormulaParser.RULE_singleExpression);
                    this.state = 102;
                    if (!( this.precpred(this._ctx, 18))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
                    }
                    this.state = 104;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if(_la===ReportFormulaParser.QuestionMark) {
                        this.state = 103;
                        this.match(ReportFormulaParser.QuestionMark);
                    }

                    this.state = 106;
                    this.match(ReportFormulaParser.Dot);
                    this.state = 108;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if(_la===ReportFormulaParser.Hashtag) {
                        this.state = 107;
                        this.match(ReportFormulaParser.Hashtag);
                    }

                    this.state = 110;
                    this.identifierName();
                    break;

                case 12:
                    localctx = new ArgumentsExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ReportFormulaParser.RULE_singleExpression);
                    this.state = 111;
                    if (!( this.precpred(this._ctx, 17))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
                    }
                    this.state = 112;
                    this.arguments();
                    break;

                } 
            }
            this.state = 117;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
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
        this.state = 118;
        this.match(ReportFormulaParser.OpenParen);
        this.state = 130;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ReportFormulaParser.OpenParen) | (1 << ReportFormulaParser.OpenBracket) | (1 << ReportFormulaParser.OpenBrace) | (1 << ReportFormulaParser.At) | (1 << ReportFormulaParser.Plus) | (1 << ReportFormulaParser.Minus))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (ReportFormulaParser.BooleanLiteral - 37)) | (1 << (ReportFormulaParser.NullLiteral - 37)) | (1 << (ReportFormulaParser.CellRangeLiteral - 37)) | (1 << (ReportFormulaParser.CellFloatRangeLiteral - 37)) | (1 << (ReportFormulaParser.CellAddressLiteral - 37)) | (1 << (ReportFormulaParser.BasicNumberLiteral - 37)) | (1 << (ReportFormulaParser.Identifier - 37)) | (1 << (ReportFormulaParser.StringLiteral - 37)))) !== 0)) {
            this.state = 119;
            this.argument();
            this.state = 124;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 120;
                    this.match(ReportFormulaParser.Comma);
                    this.state = 121;
                    this.argument(); 
                }
                this.state = 126;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
            }

            this.state = 128;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ReportFormulaParser.Comma) {
                this.state = 127;
                this.match(ReportFormulaParser.Comma);
            }

        }

        this.state = 132;
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
        this.state = 136;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 134;
            this.singleExpression(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 135;
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
        this.state = 138;
        this.match(ReportFormulaParser.OpenBrace);
        this.state = 147;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ReportFormulaParser.OpenBracket || _la===ReportFormulaParser.At || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (ReportFormulaParser.If - 36)) | (1 << (ReportFormulaParser.BooleanLiteral - 36)) | (1 << (ReportFormulaParser.CellRangeLiteral - 36)) | (1 << (ReportFormulaParser.CellFloatRangeLiteral - 36)) | (1 << (ReportFormulaParser.CellAddressLiteral - 36)) | (1 << (ReportFormulaParser.BasicNumberLiteral - 36)) | (1 << (ReportFormulaParser.Identifier - 36)) | (1 << (ReportFormulaParser.StringLiteral - 36)))) !== 0)) {
            this.state = 139;
            this.propertyAssignment();
            this.state = 144;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 140;
                    this.match(ReportFormulaParser.Comma);
                    this.state = 141;
                    this.propertyAssignment(); 
                }
                this.state = 146;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
            }

        }

        this.state = 150;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ReportFormulaParser.Comma) {
            this.state = 149;
            this.match(ReportFormulaParser.Comma);
        }

        this.state = 152;
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
        this.state = 154;
        this.match(ReportFormulaParser.OpenBracket);
        this.state = 155;
        this.elementList();
        this.state = 156;
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
        this.state = 161;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 158;
                this.match(ReportFormulaParser.Comma); 
            }
            this.state = 163;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
        }

        this.state = 165;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ReportFormulaParser.OpenParen) | (1 << ReportFormulaParser.OpenBracket) | (1 << ReportFormulaParser.OpenBrace) | (1 << ReportFormulaParser.At) | (1 << ReportFormulaParser.Plus) | (1 << ReportFormulaParser.Minus))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (ReportFormulaParser.BooleanLiteral - 37)) | (1 << (ReportFormulaParser.NullLiteral - 37)) | (1 << (ReportFormulaParser.CellRangeLiteral - 37)) | (1 << (ReportFormulaParser.CellFloatRangeLiteral - 37)) | (1 << (ReportFormulaParser.CellAddressLiteral - 37)) | (1 << (ReportFormulaParser.BasicNumberLiteral - 37)) | (1 << (ReportFormulaParser.Identifier - 37)) | (1 << (ReportFormulaParser.StringLiteral - 37)))) !== 0)) {
            this.state = 164;
            this.arrayElement();
        }

        this.state = 175;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 168; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    this.state = 167;
                    this.match(ReportFormulaParser.Comma);
                    this.state = 170; 
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while(_la===ReportFormulaParser.Comma);
                this.state = 172;
                this.arrayElement(); 
            }
            this.state = 177;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
        }

        this.state = 181;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ReportFormulaParser.Comma) {
            this.state = 178;
            this.match(ReportFormulaParser.Comma);
            this.state = 183;
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
        this.state = 184;
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
        this.state = 196;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
        switch(la_) {
        case 1:
            localctx = new PropertyExpressionAssignmentContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 186;
            this.propertyName();
            this.state = 187;
            this.match(ReportFormulaParser.Colon);
            this.state = 188;
            this.singleExpression(0);
            break;

        case 2:
            localctx = new ComputedPropertyExpressionAssignmentContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 190;
            this.match(ReportFormulaParser.OpenBracket);
            this.state = 191;
            this.singleExpression(0);
            this.state = 192;
            this.match(ReportFormulaParser.CloseBracket);
            this.state = 193;
            this.match(ReportFormulaParser.Colon);
            this.state = 194;
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
        this.state = 205;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ReportFormulaParser.At:
        case ReportFormulaParser.If:
        case ReportFormulaParser.BooleanLiteral:
        case ReportFormulaParser.CellRangeLiteral:
        case ReportFormulaParser.CellFloatRangeLiteral:
        case ReportFormulaParser.CellAddressLiteral:
        case ReportFormulaParser.Identifier:
            this.enterOuterAlt(localctx, 1);
            this.state = 198;
            this.identifierName();
            break;
        case ReportFormulaParser.StringLiteral:
            this.enterOuterAlt(localctx, 2);
            this.state = 199;
            this.match(ReportFormulaParser.StringLiteral);
            break;
        case ReportFormulaParser.BasicNumberLiteral:
            this.enterOuterAlt(localctx, 3);
            this.state = 200;
            this.numericLiteral();
            break;
        case ReportFormulaParser.OpenBracket:
            this.enterOuterAlt(localctx, 4);
            this.state = 201;
            this.match(ReportFormulaParser.OpenBracket);
            this.state = 202;
            this.singleExpression(0);
            this.state = 203;
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
        this.state = 209;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ReportFormulaParser.At:
        case ReportFormulaParser.CellRangeLiteral:
        case ReportFormulaParser.CellFloatRangeLiteral:
        case ReportFormulaParser.CellAddressLiteral:
        case ReportFormulaParser.Identifier:
            this.enterOuterAlt(localctx, 1);
            this.state = 207;
            this.identifier();
            break;
        case ReportFormulaParser.If:
        case ReportFormulaParser.BooleanLiteral:
            this.enterOuterAlt(localctx, 2);
            this.state = 208;
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


function IdentifierCellFloatRangeContext(parser, ctx) {
	IdentifierContext.call(this, parser);
    IdentifierContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdentifierCellFloatRangeContext.prototype = Object.create(IdentifierContext.prototype);
IdentifierCellFloatRangeContext.prototype.constructor = IdentifierCellFloatRangeContext;

ReportFormulaParser.IdentifierCellFloatRangeContext = IdentifierCellFloatRangeContext;

IdentifierCellFloatRangeContext.prototype.CellFloatRangeLiteral = function() {
    return this.getToken(ReportFormulaParser.CellFloatRangeLiteral, 0);
};
IdentifierCellFloatRangeContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.enterIdentifierCellFloatRange(this);
	}
};

IdentifierCellFloatRangeContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReportFormulaParserListener ) {
        listener.exitIdentifierCellFloatRange(this);
	}
};

IdentifierCellFloatRangeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ReportFormulaParserVisitor ) {
        return visitor.visitIdentifierCellFloatRange(this);
    } else {
        return visitor.visitChildren(this);
    }
};



ReportFormulaParser.IdentifierContext = IdentifierContext;

ReportFormulaParser.prototype.identifier = function() {

    var localctx = new IdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, ReportFormulaParser.RULE_identifier);
    try {
        this.state = 216;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ReportFormulaParser.At:
            localctx = new IdentifierRefItemCodeContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 211;
            this.refItemCode();
            break;
        case ReportFormulaParser.CellAddressLiteral:
            localctx = new IdentifierCellAddressContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 212;
            this.match(ReportFormulaParser.CellAddressLiteral);
            break;
        case ReportFormulaParser.CellRangeLiteral:
            localctx = new IdentifierCellRangeContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 213;
            this.match(ReportFormulaParser.CellRangeLiteral);
            break;
        case ReportFormulaParser.CellFloatRangeLiteral:
            localctx = new IdentifierCellFloatRangeContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 214;
            this.match(ReportFormulaParser.CellFloatRangeLiteral);
            break;
        case ReportFormulaParser.Identifier:
            localctx = new IdentifierPlainTextContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 215;
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
        this.state = 218;
        this.match(ReportFormulaParser.At);
        this.state = 219;
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
        this.state = 225;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ReportFormulaParser.NullLiteral:
            localctx = new NullLiteralExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 221;
            this.match(ReportFormulaParser.NullLiteral);
            break;
        case ReportFormulaParser.BooleanLiteral:
            localctx = new BooleanLiteralExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 222;
            this.match(ReportFormulaParser.BooleanLiteral);
            break;
        case ReportFormulaParser.StringLiteral:
            localctx = new StringLiteralExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 223;
            this.match(ReportFormulaParser.StringLiteral);
            break;
        case ReportFormulaParser.BasicNumberLiteral:
            localctx = new NumericLiteralExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 224;
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
        this.state = 229;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
        switch(la_) {
        case 1:
            localctx = new PercentageLiteralExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 227;
            this.percentageLiteral();
            break;

        case 2:
            localctx = new BasicNumberLiteralExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 228;
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
        this.state = 231;
        this.match(ReportFormulaParser.BasicNumberLiteral);
        this.state = 232;
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
        this.state = 236;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ReportFormulaParser.If:
            this.enterOuterAlt(localctx, 1);
            this.state = 234;
            this.keyword();
            break;
        case ReportFormulaParser.BooleanLiteral:
            this.enterOuterAlt(localctx, 2);
            this.state = 235;
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
        this.state = 238;
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
        this.state = 240;
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
			return this.precpred(this._ctx, 19);
		case 10:
			return this.precpred(this._ctx, 18);
		case 11:
			return this.precpred(this._ctx, 17);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.ReportFormulaParser = ReportFormulaParser;
