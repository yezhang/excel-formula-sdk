// Generated from /Users/zhangye/Documents/code/code_yonyou/FormulaTextArea/src/grammar/ReportFormulaLexer.g4 by ANTLR 4.8
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class ReportFormulaLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		MultiLineComment=1, SingleLineComment=2, OpenParen=3, CloseParen=4, OpenBracket=5, 
		CloseBracket=6, OpenBrace=7, CloseBrace=8, Comma=9, Assign=10, QuestionMark=11, 
		Colon=12, Dollar=13, At=14, Dot=15, PlusPlus=16, MinusMinus=17, Plus=18, 
		Minus=19, Not=20, Multiply=21, Divide=22, Modulus=23, Power=24, LessThan=25, 
		MoreThan=26, LessThanEquals=27, GreaterThanEquals=28, Equals_=29, NotEquals=30, 
		And=31, Or=32, If=33, BooleanLiteral=34, NullLiteral=35, Identifier=36, 
		StringLiteral=37, WhiteSpaces=38, LineTerminator=39, CellRangeLiteral=40, 
		CellAddressLiteral=41, SheetAddress=42, BasicNumberLiteral=43, DecimalLiteral=44, 
		HexIntegerLiteral=45, OctalIntegerLiteral=46, OctalIntegerLiteral2=47, 
		BinaryIntegerLiteral=48, BigHexIntegerLiteral=49, BigOctalIntegerLiteral=50, 
		BigBinaryIntegerLiteral=51, BigDecimalIntegerLiteral=52;
	public static final int
		ERROR=2;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN", "ERROR"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"MultiLineComment", "SingleLineComment", "OpenParen", "CloseParen", "OpenBracket", 
			"CloseBracket", "OpenBrace", "CloseBrace", "Comma", "Assign", "QuestionMark", 
			"Colon", "Dollar", "At", "Dot", "PlusPlus", "MinusMinus", "Plus", "Minus", 
			"Not", "Multiply", "Divide", "Modulus", "Power", "LessThan", "MoreThan", 
			"LessThanEquals", "GreaterThanEquals", "Equals_", "NotEquals", "And", 
			"Or", "If", "BooleanLiteral", "NullLiteral", "Identifier", "StringLiteral", 
			"WhiteSpaces", "LineTerminator", "CellRangeLiteral", "CellAddressLiteral", 
			"SheetAddress", "BasicNumberLiteral", "DecimalLiteral", "HexIntegerLiteral", 
			"OctalIntegerLiteral", "OctalIntegerLiteral2", "BinaryIntegerLiteral", 
			"BigHexIntegerLiteral", "BigOctalIntegerLiteral", "BigBinaryIntegerLiteral", 
			"BigDecimalIntegerLiteral", "StringCharacter", "DoubleStringCharacter", 
			"SingleStringCharacter", "EscapeSequence", "CharacterEscapeSequence", 
			"HexEscapeSequence", "ExtendedUnicodeEscapeSequence", "IdentifierPart", 
			"IdentifierStart", "UnicodeLetter", "UnicodeCombiningMark", "UnicodeDigit", 
			"UnicodeConnectorPunctuation", "UnicodeEscapeSequence", "HexDigit", "LineContinuation", 
			"SingleEscapeCharacter", "NonEscapeCharacter", "DecimalIntegerLiteral", 
			"ExponentPart"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, "'('", "')'", "'['", "']'", "'{'", "'}'", "','", "'='", 
			"'?'", "':'", "'$'", "'@'", "'.'", "'++'", "'--'", "'+'", "'-'", "'!'", 
			"'*'", "'/'", "'%'", "'**'", "'<'", "'>'", "'<='", "'>='", "'=='", "'!='", 
			"'&&'", "'||'", "'if'", null, "'null'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "MultiLineComment", "SingleLineComment", "OpenParen", "CloseParen", 
			"OpenBracket", "CloseBracket", "OpenBrace", "CloseBrace", "Comma", "Assign", 
			"QuestionMark", "Colon", "Dollar", "At", "Dot", "PlusPlus", "MinusMinus", 
			"Plus", "Minus", "Not", "Multiply", "Divide", "Modulus", "Power", "LessThan", 
			"MoreThan", "LessThanEquals", "GreaterThanEquals", "Equals_", "NotEquals", 
			"And", "Or", "If", "BooleanLiteral", "NullLiteral", "Identifier", "StringLiteral", 
			"WhiteSpaces", "LineTerminator", "CellRangeLiteral", "CellAddressLiteral", 
			"SheetAddress", "BasicNumberLiteral", "DecimalLiteral", "HexIntegerLiteral", 
			"OctalIntegerLiteral", "OctalIntegerLiteral2", "BinaryIntegerLiteral", 
			"BigHexIntegerLiteral", "BigOctalIntegerLiteral", "BigBinaryIntegerLiteral", 
			"BigDecimalIntegerLiteral"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public ReportFormulaLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "ReportFormulaLexer.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\66\u0224\b\1\4\2"+
		"\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4"+
		"\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22"+
		"\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31"+
		"\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t"+
		" \4!\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t"+
		"+\4,\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64"+
		"\t\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t"+
		"=\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\4"+
		"I\tI\3\2\3\2\3\2\3\2\7\2\u0098\n\2\f\2\16\2\u009b\13\2\3\2\3\2\3\2\3\2"+
		"\3\2\3\3\3\3\3\3\3\3\7\3\u00a6\n\3\f\3\16\3\u00a9\13\3\3\3\3\3\3\4\3\4"+
		"\3\5\3\5\3\6\3\6\3\7\3\7\3\b\3\b\3\t\3\t\3\n\3\n\3\13\3\13\3\f\3\f\3\r"+
		"\3\r\3\16\3\16\3\17\3\17\3\20\3\20\3\21\3\21\3\21\3\22\3\22\3\22\3\23"+
		"\3\23\3\24\3\24\3\25\3\25\3\26\3\26\3\27\3\27\3\30\3\30\3\31\3\31\3\31"+
		"\3\32\3\32\3\33\3\33\3\34\3\34\3\34\3\35\3\35\3\35\3\36\3\36\3\36\3\37"+
		"\3\37\3\37\3 \3 \3 \3!\3!\3!\3\"\3\"\3\"\3#\3#\3#\3#\3#\3#\3#\3#\3#\5"+
		"#\u00fe\n#\3$\3$\3$\3$\3$\3%\3%\7%\u0107\n%\f%\16%\u010a\13%\3&\3&\7&"+
		"\u010e\n&\f&\16&\u0111\13&\3&\3&\3&\7&\u0116\n&\f&\16&\u0119\13&\3&\5"+
		"&\u011c\n&\3\'\6\'\u011f\n\'\r\'\16\'\u0120\3\'\3\'\3(\3(\3(\3(\3)\3)"+
		"\3)\3)\3*\5*\u012e\n*\3*\5*\u0131\n*\3*\3*\7*\u0135\n*\f*\16*\u0138\13"+
		"*\3*\5*\u013b\n*\3*\3*\7*\u013f\n*\f*\16*\u0142\13*\3+\6+\u0145\n+\r+"+
		"\16+\u0146\3+\3+\3,\3,\3,\3,\3,\5,\u0150\n,\3-\3-\3-\3-\7-\u0156\n-\f"+
		"-\16-\u0159\13-\3-\5-\u015c\n-\3-\3-\3-\7-\u0161\n-\f-\16-\u0164\13-\3"+
		"-\5-\u0167\n-\3-\3-\5-\u016b\n-\5-\u016d\n-\3.\3.\3.\3.\7.\u0173\n.\f"+
		".\16.\u0176\13.\3/\3/\6/\u017a\n/\r/\16/\u017b\3\60\3\60\3\60\3\60\7\60"+
		"\u0182\n\60\f\60\16\60\u0185\13\60\3\61\3\61\3\61\3\61\7\61\u018b\n\61"+
		"\f\61\16\61\u018e\13\61\3\62\3\62\3\62\3\62\7\62\u0194\n\62\f\62\16\62"+
		"\u0197\13\62\3\62\3\62\3\63\3\63\3\63\3\63\7\63\u019f\n\63\f\63\16\63"+
		"\u01a2\13\63\3\63\3\63\3\64\3\64\3\64\3\64\7\64\u01aa\n\64\f\64\16\64"+
		"\u01ad\13\64\3\64\3\64\3\65\3\65\3\65\3\66\3\66\3\66\3\66\5\66\u01b8\n"+
		"\66\3\67\3\67\3\67\3\67\5\67\u01be\n\67\38\38\38\38\58\u01c4\n8\39\39"+
		"\39\39\39\59\u01cb\n9\3:\3:\5:\u01cf\n:\3;\3;\3;\3;\3<\3<\3<\6<\u01d8"+
		"\n<\r<\16<\u01d9\3<\3<\3=\3=\3=\3=\3=\5=\u01e3\n=\3>\3>\3>\3>\5>\u01e9"+
		"\n>\3?\5?\u01ec\n?\3@\5@\u01ef\n@\3A\5A\u01f2\nA\3B\5B\u01f5\nB\3C\3C"+
		"\3C\3C\3C\3C\3C\3C\3C\3C\6C\u0201\nC\rC\16C\u0202\3C\3C\5C\u0207\nC\3"+
		"D\3D\3E\3E\3E\3F\3F\3G\3G\3H\3H\3H\7H\u0215\nH\fH\16H\u0218\13H\5H\u021a"+
		"\nH\3I\3I\5I\u021e\nI\3I\6I\u0221\nI\rI\16I\u0222\3\u0099\2J\3\3\5\4\7"+
		"\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33\17\35\20\37\21!\22"+
		"#\23%\24\'\25)\26+\27-\30/\31\61\32\63\33\65\34\67\359\36;\37= ?!A\"C"+
		"#E$G%I&K\'M(O)Q*S+U,W-Y.[/]\60_\61a\62c\63e\64g\65i\66k\2m\2o\2q\2s\2"+
		"u\2w\2y\2{\2}\2\177\2\u0081\2\u0083\2\u0085\2\u0087\2\u0089\2\u008b\2"+
		"\u008d\2\u008f\2\u0091\2\3\2\35\5\2\f\f\17\17\u202a\u202b\6\2\13\13\r"+
		"\16\"\"\u00a2\u00a2\3\2C\\\3\2\63;\3\2\62;\4\2\62;aa\4\2ZZzz\5\2\62;C"+
		"Hch\3\2\629\4\2QQqq\4\2\629aa\4\2DDdd\3\2\62\63\4\2\62\63aa\5\2\f\f\17"+
		"\17^^\6\2\f\f\17\17$$^^\6\2\f\f\17\17))^^\4\2&&aa\u0101\2C\\c|\u00ac\u00ac"+
		"\u00b7\u00b7\u00bc\u00bc\u00c2\u00d8\u00da\u00f8\u00fa\u0221\u0224\u0235"+
		"\u0252\u02af\u02b2\u02ba\u02bd\u02c3\u02d2\u02d3\u02e2\u02e6\u02f0\u02f0"+
		"\u037c\u037c\u0388\u0388\u038a\u038c\u038e\u038e\u0390\u03a3\u03a5\u03d0"+
		"\u03d2\u03d9\u03dc\u03f5\u0402\u0483\u048e\u04c6\u04c9\u04ca\u04cd\u04ce"+
		"\u04d2\u04f7\u04fa\u04fb\u0533\u0558\u055b\u055b\u0563\u0589\u05d2\u05ec"+
		"\u05f2\u05f4\u0623\u063c\u0642\u064c\u0673\u06d5\u06d7\u06d7\u06e7\u06e8"+
		"\u06fc\u06fe\u0712\u0712\u0714\u072e\u0782\u07a7\u0907\u093b\u093f\u093f"+
		"\u0952\u0952\u095a\u0963\u0987\u098e\u0991\u0992\u0995\u09aa\u09ac\u09b2"+
		"\u09b4\u09b4\u09b8\u09bb\u09de\u09df\u09e1\u09e3\u09f2\u09f3\u0a07\u0a0c"+
		"\u0a11\u0a12\u0a15\u0a2a\u0a2c\u0a32\u0a34\u0a35\u0a37\u0a38\u0a3a\u0a3b"+
		"\u0a5b\u0a5e\u0a60\u0a60\u0a74\u0a76\u0a87\u0a8d\u0a8f\u0a8f\u0a91\u0a93"+
		"\u0a95\u0aaa\u0aac\u0ab2\u0ab4\u0ab5\u0ab7\u0abb\u0abf\u0abf\u0ad2\u0ad2"+
		"\u0ae2\u0ae2\u0b07\u0b0e\u0b11\u0b12\u0b15\u0b2a\u0b2c\u0b32\u0b34\u0b35"+
		"\u0b38\u0b3b\u0b3f\u0b3f\u0b5e\u0b5f\u0b61\u0b63\u0b87\u0b8c\u0b90\u0b92"+
		"\u0b94\u0b97\u0b9b\u0b9c\u0b9e\u0b9e\u0ba0\u0ba1\u0ba5\u0ba6\u0baa\u0bac"+
		"\u0bb0\u0bb7\u0bb9\u0bbb\u0c07\u0c0e\u0c10\u0c12\u0c14\u0c2a\u0c2c\u0c35"+
		"\u0c37\u0c3b\u0c62\u0c63\u0c87\u0c8e\u0c90\u0c92\u0c94\u0caa\u0cac\u0cb5"+
		"\u0cb7\u0cbb\u0ce0\u0ce0\u0ce2\u0ce3\u0d07\u0d0e\u0d10\u0d12\u0d14\u0d2a"+
		"\u0d2c\u0d3b\u0d62\u0d63\u0d87\u0d98\u0d9c\u0db3\u0db5\u0dbd\u0dbf\u0dbf"+
		"\u0dc2\u0dc8\u0e03\u0e32\u0e34\u0e35\u0e42\u0e48\u0e83\u0e84\u0e86\u0e86"+
		"\u0e89\u0e8a\u0e8c\u0e8c\u0e8f\u0e8f\u0e96\u0e99\u0e9b\u0ea1\u0ea3\u0ea5"+
		"\u0ea7\u0ea7\u0ea9\u0ea9\u0eac\u0ead\u0eaf\u0eb2\u0eb4\u0eb5\u0ebf\u0ec6"+
		"\u0ec8\u0ec8\u0ede\u0edf\u0f02\u0f02\u0f42\u0f6c\u0f8a\u0f8d\u1002\u1023"+
		"\u1025\u1029\u102b\u102c\u1052\u1057\u10a2\u10c7\u10d2\u10f8\u1102\u115b"+
		"\u1161\u11a4\u11aa\u11fb\u1202\u1208\u120a\u1248\u124a\u124a\u124c\u124f"+
		"\u1252\u1258\u125a\u125a\u125c\u125f\u1262\u1288\u128a\u128a\u128c\u128f"+
		"\u1292\u12b0\u12b2\u12b2\u12b4\u12b7\u12ba\u12c0\u12c2\u12c2\u12c4\u12c7"+
		"\u12ca\u12d0\u12d2\u12d8\u12da\u12f0\u12f2\u1310\u1312\u1312\u1314\u1317"+
		"\u131a\u1320\u1322\u1348\u134a\u135c\u13a2\u13f6\u1403\u1678\u1683\u169c"+
		"\u16a2\u16ec\u1782\u17b5\u1822\u1879\u1882\u18aa\u1e02\u1e9d\u1ea2\u1efb"+
		"\u1f02\u1f17\u1f1a\u1f1f\u1f22\u1f47\u1f4a\u1f4f\u1f52\u1f59\u1f5b\u1f5b"+
		"\u1f5d\u1f5d\u1f5f\u1f5f\u1f61\u1f7f\u1f82\u1fb6\u1fb8\u1fbe\u1fc0\u1fc0"+
		"\u1fc4\u1fc6\u1fc8\u1fce\u1fd2\u1fd5\u1fd8\u1fdd\u1fe2\u1fee\u1ff4\u1ff6"+
		"\u1ff8\u1ffe\u2081\u2081\u2104\u2104\u2109\u2109\u210c\u2115\u2117\u2117"+
		"\u211b\u211f\u2126\u2126\u2128\u2128\u212a\u212a\u212c\u212f\u2131\u2133"+
		"\u2135\u213b\u2162\u2185\u3007\u3009\u3023\u302b\u3033\u3037\u303a\u303c"+
		"\u3043\u3096\u309f\u30a0\u30a3\u30fc\u30fe\u3100\u3107\u312e\u3133\u3190"+
		"\u31a2\u31b9\u3402\u4dc1\u4e02\ua48e\uac02\uac02\ud7a5\ud7a5\uf902\ufa2f"+
		"\ufb02\ufb08\ufb15\ufb19\ufb1f\ufb1f\ufb21\ufb2a\ufb2c\ufb38\ufb3a\ufb3e"+
		"\ufb40\ufb40\ufb42\ufb43\ufb45\ufb46\ufb48\ufbb3\ufbd5\ufd3f\ufd52\ufd91"+
		"\ufd94\ufdc9\ufdf2\ufdfd\ufe72\ufe74\ufe76\ufe76\ufe78\ufefe\uff23\uff3c"+
		"\uff43\uff5c\uff68\uffc0\uffc4\uffc9\uffcc\uffd1\uffd4\uffd9\uffdc\uffde"+
		"f\2\u0302\u0350\u0362\u0364\u0485\u0488\u0593\u05a3\u05a5\u05bb\u05bd"+
		"\u05bf\u05c1\u05c1\u05c3\u05c4\u05c6\u05c6\u064d\u0657\u0672\u0672\u06d8"+
		"\u06de\u06e1\u06e6\u06e9\u06ea\u06ec\u06ef\u0713\u0713\u0732\u074c\u07a8"+
		"\u07b2\u0903\u0905\u093e\u093e\u0940\u094f\u0953\u0956\u0964\u0965\u0983"+
		"\u0985\u09be\u09c6\u09c9\u09ca\u09cd\u09cf\u09d9\u09d9\u09e4\u09e5\u0a04"+
		"\u0a04\u0a3e\u0a3e\u0a40\u0a44\u0a49\u0a4a\u0a4d\u0a4f\u0a72\u0a73\u0a83"+
		"\u0a85\u0abe\u0abe\u0ac0\u0ac7\u0ac9\u0acb\u0acd\u0acf\u0b03\u0b05\u0b3e"+
		"\u0b3e\u0b40\u0b45\u0b49\u0b4a\u0b4d\u0b4f\u0b58\u0b59\u0b84\u0b85\u0bc0"+
		"\u0bc4\u0bc8\u0bca\u0bcc\u0bcf\u0bd9\u0bd9\u0c03\u0c05\u0c40\u0c46\u0c48"+
		"\u0c4a\u0c4c\u0c4f\u0c57\u0c58\u0c84\u0c85\u0cc0\u0cc6\u0cc8\u0cca\u0ccc"+
		"\u0ccf\u0cd7\u0cd8\u0d04\u0d05\u0d40\u0d45\u0d48\u0d4a\u0d4c\u0d4f\u0d59"+
		"\u0d59\u0d84\u0d85\u0dcc\u0dcc\u0dd1\u0dd6\u0dd8\u0dd8\u0dda\u0de1\u0df4"+
		"\u0df5\u0e33\u0e33\u0e36\u0e3c\u0e49\u0e50\u0eb3\u0eb3\u0eb6\u0ebb\u0ebd"+
		"\u0ebe\u0eca\u0ecf\u0f1a\u0f1b\u0f37\u0f37\u0f39\u0f39\u0f3b\u0f3b\u0f40"+
		"\u0f41\u0f73\u0f86\u0f88\u0f89\u0f92\u0f99\u0f9b\u0fbe\u0fc8\u0fc8\u102e"+
		"\u1034\u1038\u103b\u1058\u105b\u17b6\u17d5\u18ab\u18ab\u20d2\u20de\u20e3"+
		"\u20e3\u302c\u3031\u309b\u309c\ufb20\ufb20\ufe22\ufe25\26\2\62;\u0662"+
		"\u066b\u06f2\u06fb\u0968\u0971\u09e8\u09f1\u0a68\u0a71\u0ae8\u0af1\u0b68"+
		"\u0b71\u0be9\u0bf1\u0c68\u0c71\u0ce8\u0cf1\u0d68\u0d71\u0e52\u0e5b\u0ed2"+
		"\u0edb\u0f22\u0f2b\u1042\u104b\u136b\u1373\u17e2\u17eb\u1812\u181b\uff12"+
		"\uff1b\t\2aa\u2041\u2042\u30fd\u30fd\ufe35\ufe36\ufe4f\ufe51\uff41\uff41"+
		"\uff67\uff67\6\2\62;CHaach\13\2$$))^^ddhhppttvvxx\16\2\f\f\17\17$$))\62"+
		";^^ddhhppttvxzz\4\2GGgg\4\2--//\2\u0247\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3"+
		"\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2"+
		"\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35"+
		"\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)"+
		"\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2\2"+
		"\65\3\2\2\2\2\67\3\2\2\2\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3\2\2\2\2"+
		"A\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2\2G\3\2\2\2\2I\3\2\2\2\2K\3\2\2\2\2M\3"+
		"\2\2\2\2O\3\2\2\2\2Q\3\2\2\2\2S\3\2\2\2\2U\3\2\2\2\2W\3\2\2\2\2Y\3\2\2"+
		"\2\2[\3\2\2\2\2]\3\2\2\2\2_\3\2\2\2\2a\3\2\2\2\2c\3\2\2\2\2e\3\2\2\2\2"+
		"g\3\2\2\2\2i\3\2\2\2\3\u0093\3\2\2\2\5\u00a1\3\2\2\2\7\u00ac\3\2\2\2\t"+
		"\u00ae\3\2\2\2\13\u00b0\3\2\2\2\r\u00b2\3\2\2\2\17\u00b4\3\2\2\2\21\u00b6"+
		"\3\2\2\2\23\u00b8\3\2\2\2\25\u00ba\3\2\2\2\27\u00bc\3\2\2\2\31\u00be\3"+
		"\2\2\2\33\u00c0\3\2\2\2\35\u00c2\3\2\2\2\37\u00c4\3\2\2\2!\u00c6\3\2\2"+
		"\2#\u00c9\3\2\2\2%\u00cc\3\2\2\2\'\u00ce\3\2\2\2)\u00d0\3\2\2\2+\u00d2"+
		"\3\2\2\2-\u00d4\3\2\2\2/\u00d6\3\2\2\2\61\u00d8\3\2\2\2\63\u00db\3\2\2"+
		"\2\65\u00dd\3\2\2\2\67\u00df\3\2\2\29\u00e2\3\2\2\2;\u00e5\3\2\2\2=\u00e8"+
		"\3\2\2\2?\u00eb\3\2\2\2A\u00ee\3\2\2\2C\u00f1\3\2\2\2E\u00fd\3\2\2\2G"+
		"\u00ff\3\2\2\2I\u0104\3\2\2\2K\u011b\3\2\2\2M\u011e\3\2\2\2O\u0124\3\2"+
		"\2\2Q\u0128\3\2\2\2S\u012d\3\2\2\2U\u0144\3\2\2\2W\u014f\3\2\2\2Y\u016c"+
		"\3\2\2\2[\u016e\3\2\2\2]\u0177\3\2\2\2_\u017d\3\2\2\2a\u0186\3\2\2\2c"+
		"\u018f\3\2\2\2e\u019a\3\2\2\2g\u01a5\3\2\2\2i\u01b0\3\2\2\2k\u01b7\3\2"+
		"\2\2m\u01bd\3\2\2\2o\u01c3\3\2\2\2q\u01ca\3\2\2\2s\u01ce\3\2\2\2u\u01d0"+
		"\3\2\2\2w\u01d4\3\2\2\2y\u01e2\3\2\2\2{\u01e8\3\2\2\2}\u01eb\3\2\2\2\177"+
		"\u01ee\3\2\2\2\u0081\u01f1\3\2\2\2\u0083\u01f4\3\2\2\2\u0085\u0206\3\2"+
		"\2\2\u0087\u0208\3\2\2\2\u0089\u020a\3\2\2\2\u008b\u020d\3\2\2\2\u008d"+
		"\u020f\3\2\2\2\u008f\u0219\3\2\2\2\u0091\u021b\3\2\2\2\u0093\u0094\7\61"+
		"\2\2\u0094\u0095\7,\2\2\u0095\u0099\3\2\2\2\u0096\u0098\13\2\2\2\u0097"+
		"\u0096\3\2\2\2\u0098\u009b\3\2\2\2\u0099\u009a\3\2\2\2\u0099\u0097\3\2"+
		"\2\2\u009a\u009c\3\2\2\2\u009b\u0099\3\2\2\2\u009c\u009d\7,\2\2\u009d"+
		"\u009e\7\61\2\2\u009e\u009f\3\2\2\2\u009f\u00a0\b\2\2\2\u00a0\4\3\2\2"+
		"\2\u00a1\u00a2\7\61\2\2\u00a2\u00a3\7\61\2\2\u00a3\u00a7\3\2\2\2\u00a4"+
		"\u00a6\n\2\2\2\u00a5\u00a4\3\2\2\2\u00a6\u00a9\3\2\2\2\u00a7\u00a5\3\2"+
		"\2\2\u00a7\u00a8\3\2\2\2\u00a8\u00aa\3\2\2\2\u00a9\u00a7\3\2\2\2\u00aa"+
		"\u00ab\b\3\2\2\u00ab\6\3\2\2\2\u00ac\u00ad\7*\2\2\u00ad\b\3\2\2\2\u00ae"+
		"\u00af\7+\2\2\u00af\n\3\2\2\2\u00b0\u00b1\7]\2\2\u00b1\f\3\2\2\2\u00b2"+
		"\u00b3\7_\2\2\u00b3\16\3\2\2\2\u00b4\u00b5\7}\2\2\u00b5\20\3\2\2\2\u00b6"+
		"\u00b7\7\177\2\2\u00b7\22\3\2\2\2\u00b8\u00b9\7.\2\2\u00b9\24\3\2\2\2"+
		"\u00ba\u00bb\7?\2\2\u00bb\26\3\2\2\2\u00bc\u00bd\7A\2\2\u00bd\30\3\2\2"+
		"\2\u00be\u00bf\7<\2\2\u00bf\32\3\2\2\2\u00c0\u00c1\7&\2\2\u00c1\34\3\2"+
		"\2\2\u00c2\u00c3\7B\2\2\u00c3\36\3\2\2\2\u00c4\u00c5\7\60\2\2\u00c5 \3"+
		"\2\2\2\u00c6\u00c7\7-\2\2\u00c7\u00c8\7-\2\2\u00c8\"\3\2\2\2\u00c9\u00ca"+
		"\7/\2\2\u00ca\u00cb\7/\2\2\u00cb$\3\2\2\2\u00cc\u00cd\7-\2\2\u00cd&\3"+
		"\2\2\2\u00ce\u00cf\7/\2\2\u00cf(\3\2\2\2\u00d0\u00d1\7#\2\2\u00d1*\3\2"+
		"\2\2\u00d2\u00d3\7,\2\2\u00d3,\3\2\2\2\u00d4\u00d5\7\61\2\2\u00d5.\3\2"+
		"\2\2\u00d6\u00d7\7\'\2\2\u00d7\60\3\2\2\2\u00d8\u00d9\7,\2\2\u00d9\u00da"+
		"\7,\2\2\u00da\62\3\2\2\2\u00db\u00dc\7>\2\2\u00dc\64\3\2\2\2\u00dd\u00de"+
		"\7@\2\2\u00de\66\3\2\2\2\u00df\u00e0\7>\2\2\u00e0\u00e1\7?\2\2\u00e18"+
		"\3\2\2\2\u00e2\u00e3\7@\2\2\u00e3\u00e4\7?\2\2\u00e4:\3\2\2\2\u00e5\u00e6"+
		"\7?\2\2\u00e6\u00e7\7?\2\2\u00e7<\3\2\2\2\u00e8\u00e9\7#\2\2\u00e9\u00ea"+
		"\7?\2\2\u00ea>\3\2\2\2\u00eb\u00ec\7(\2\2\u00ec\u00ed\7(\2\2\u00ed@\3"+
		"\2\2\2\u00ee\u00ef\7~\2\2\u00ef\u00f0\7~\2\2\u00f0B\3\2\2\2\u00f1\u00f2"+
		"\7k\2\2\u00f2\u00f3\7h\2\2\u00f3D\3\2\2\2\u00f4\u00f5\7v\2\2\u00f5\u00f6"+
		"\7t\2\2\u00f6\u00f7\7w\2\2\u00f7\u00fe\7g\2\2\u00f8\u00f9\7h\2\2\u00f9"+
		"\u00fa\7c\2\2\u00fa\u00fb\7n\2\2\u00fb\u00fc\7u\2\2\u00fc\u00fe\7g\2\2"+
		"\u00fd\u00f4\3\2\2\2\u00fd\u00f8\3\2\2\2\u00feF\3\2\2\2\u00ff\u0100\7"+
		"p\2\2\u0100\u0101\7w\2\2\u0101\u0102\7n\2\2\u0102\u0103\7n\2\2\u0103H"+
		"\3\2\2\2\u0104\u0108\5{>\2\u0105\u0107\5y=\2\u0106\u0105\3\2\2\2\u0107"+
		"\u010a\3\2\2\2\u0108\u0106\3\2\2\2\u0108\u0109\3\2\2\2\u0109J\3\2\2\2"+
		"\u010a\u0108\3\2\2\2\u010b\u010f\7$\2\2\u010c\u010e\5m\67\2\u010d\u010c"+
		"\3\2\2\2\u010e\u0111\3\2\2\2\u010f\u010d\3\2\2\2\u010f\u0110\3\2\2\2\u0110"+
		"\u0112\3\2\2\2\u0111\u010f\3\2\2\2\u0112\u011c\7$\2\2\u0113\u0117\7)\2"+
		"\2\u0114\u0116\5o8\2\u0115\u0114\3\2\2\2\u0116\u0119\3\2\2\2\u0117\u0115"+
		"\3\2\2\2\u0117\u0118\3\2\2\2\u0118\u011a\3\2\2\2\u0119\u0117\3\2\2\2\u011a"+
		"\u011c\7)\2\2\u011b\u010b\3\2\2\2\u011b\u0113\3\2\2\2\u011cL\3\2\2\2\u011d"+
		"\u011f\t\3\2\2\u011e\u011d\3\2\2\2\u011f\u0120\3\2\2\2\u0120\u011e\3\2"+
		"\2\2\u0120\u0121\3\2\2\2\u0121\u0122\3\2\2\2\u0122\u0123\b\'\2\2\u0123"+
		"N\3\2\2\2\u0124\u0125\t\2\2\2\u0125\u0126\3\2\2\2\u0126\u0127\b(\2\2\u0127"+
		"P\3\2\2\2\u0128\u0129\5S*\2\u0129\u012a\7<\2\2\u012a\u012b\5S*\2\u012b"+
		"R\3\2\2\2\u012c\u012e\5U+\2\u012d\u012c\3\2\2\2\u012d\u012e\3\2\2\2\u012e"+
		"\u0130\3\2\2\2\u012f\u0131\7&\2\2\u0130\u012f\3\2\2\2\u0130\u0131\3\2"+
		"\2\2\u0131\u0132\3\2\2\2\u0132\u0136\t\4\2\2\u0133\u0135\t\4\2\2\u0134"+
		"\u0133\3\2\2\2\u0135\u0138\3\2\2\2\u0136\u0134\3\2\2\2\u0136\u0137\3\2"+
		"\2\2\u0137\u013a\3\2\2\2\u0138\u0136\3\2\2\2\u0139\u013b\7&\2\2\u013a"+
		"\u0139\3\2\2\2\u013a\u013b\3\2\2\2\u013b\u013c\3\2\2\2\u013c\u0140\t\5"+
		"\2\2\u013d\u013f\t\6\2\2\u013e\u013d\3\2\2\2\u013f\u0142\3\2\2\2\u0140"+
		"\u013e\3\2\2\2\u0140\u0141\3\2\2\2\u0141T\3\2\2\2\u0142\u0140\3\2\2\2"+
		"\u0143\u0145\5k\66\2\u0144\u0143\3\2\2\2\u0145\u0146\3\2\2\2\u0146\u0144"+
		"\3\2\2\2\u0146\u0147\3\2\2\2\u0147\u0148\3\2\2\2\u0148\u0149\7#\2\2\u0149"+
		"V\3\2\2\2\u014a\u0150\5Y-\2\u014b\u0150\5[.\2\u014c\u0150\5]/\2\u014d"+
		"\u0150\5_\60\2\u014e\u0150\5a\61\2\u014f\u014a\3\2\2\2\u014f\u014b\3\2"+
		"\2\2\u014f\u014c\3\2\2\2\u014f\u014d\3\2\2\2\u014f\u014e\3\2\2\2\u0150"+
		"X\3\2\2\2\u0151\u0152\5\u008fH\2\u0152\u0153\7\60\2\2\u0153\u0157\t\6"+
		"\2\2\u0154\u0156\t\7\2\2\u0155\u0154\3\2\2\2\u0156\u0159\3\2\2\2\u0157"+
		"\u0155\3\2\2\2\u0157\u0158\3\2\2\2\u0158\u015b\3\2\2\2\u0159\u0157\3\2"+
		"\2\2\u015a\u015c\5\u0091I\2\u015b\u015a\3\2\2\2\u015b\u015c\3\2\2\2\u015c"+
		"\u016d\3\2\2\2\u015d\u015e\7\60\2\2\u015e\u0162\t\6\2\2\u015f\u0161\t"+
		"\7\2\2\u0160\u015f\3\2\2\2\u0161\u0164\3\2\2\2\u0162\u0160\3\2\2\2\u0162"+
		"\u0163\3\2\2\2\u0163\u0166\3\2\2\2\u0164\u0162\3\2\2\2\u0165\u0167\5\u0091"+
		"I\2\u0166\u0165\3\2\2\2\u0166\u0167\3\2\2\2\u0167\u016d\3\2\2\2\u0168"+
		"\u016a\5\u008fH\2\u0169\u016b\5\u0091I\2\u016a\u0169\3\2\2\2\u016a\u016b"+
		"\3\2\2\2\u016b\u016d\3\2\2\2\u016c\u0151\3\2\2\2\u016c\u015d\3\2\2\2\u016c"+
		"\u0168\3\2\2\2\u016dZ\3\2\2\2\u016e\u016f\7\62\2\2\u016f\u0170\t\b\2\2"+
		"\u0170\u0174\t\t\2\2\u0171\u0173\5\u0087D\2\u0172\u0171\3\2\2\2\u0173"+
		"\u0176\3\2\2\2\u0174\u0172\3\2\2\2\u0174\u0175\3\2\2\2\u0175\\\3\2\2\2"+
		"\u0176\u0174\3\2\2\2\u0177\u0179\7\62\2\2\u0178\u017a\t\n\2\2\u0179\u0178"+
		"\3\2\2\2\u017a\u017b\3\2\2\2\u017b\u0179\3\2\2\2\u017b\u017c\3\2\2\2\u017c"+
		"^\3\2\2\2\u017d\u017e\7\62\2\2\u017e\u017f\t\13\2\2\u017f\u0183\t\n\2"+
		"\2\u0180\u0182\t\f\2\2\u0181\u0180\3\2\2\2\u0182\u0185\3\2\2\2\u0183\u0181"+
		"\3\2\2\2\u0183\u0184\3\2\2\2\u0184`\3\2\2\2\u0185\u0183\3\2\2\2\u0186"+
		"\u0187\7\62\2\2\u0187\u0188\t\r\2\2\u0188\u018c\t\16\2\2\u0189\u018b\t"+
		"\17\2\2\u018a\u0189\3\2\2\2\u018b\u018e\3\2\2\2\u018c\u018a\3\2\2\2\u018c"+
		"\u018d\3\2\2\2\u018db\3\2\2\2\u018e\u018c\3\2\2\2\u018f\u0190\7\62\2\2"+
		"\u0190\u0191\t\b\2\2\u0191\u0195\t\t\2\2\u0192\u0194\5\u0087D\2\u0193"+
		"\u0192\3\2\2\2\u0194\u0197\3\2\2\2\u0195\u0193\3\2\2\2\u0195\u0196\3\2"+
		"\2\2\u0196\u0198\3\2\2\2\u0197\u0195\3\2\2\2\u0198\u0199\7p\2\2\u0199"+
		"d\3\2\2\2\u019a\u019b\7\62\2\2\u019b\u019c\t\13\2\2\u019c\u01a0\t\n\2"+
		"\2\u019d\u019f\t\f\2\2\u019e\u019d\3\2\2\2\u019f\u01a2\3\2\2\2\u01a0\u019e"+
		"\3\2\2\2\u01a0\u01a1\3\2\2\2\u01a1\u01a3\3\2\2\2\u01a2\u01a0\3\2\2\2\u01a3"+
		"\u01a4\7p\2\2\u01a4f\3\2\2\2\u01a5\u01a6\7\62\2\2\u01a6\u01a7\t\r\2\2"+
		"\u01a7\u01ab\t\16\2\2\u01a8\u01aa\t\17\2\2\u01a9\u01a8\3\2\2\2\u01aa\u01ad"+
		"\3\2\2\2\u01ab\u01a9\3\2\2\2\u01ab\u01ac\3\2\2\2\u01ac\u01ae\3\2\2\2\u01ad"+
		"\u01ab\3\2\2\2\u01ae\u01af\7p\2\2\u01afh\3\2\2\2\u01b0\u01b1\5\u008fH"+
		"\2\u01b1\u01b2\7p\2\2\u01b2j\3\2\2\2\u01b3\u01b8\n\20\2\2\u01b4\u01b5"+
		"\7^\2\2\u01b5\u01b8\5q9\2\u01b6\u01b8\5\u0089E\2\u01b7\u01b3\3\2\2\2\u01b7"+
		"\u01b4\3\2\2\2\u01b7\u01b6\3\2\2\2\u01b8l\3\2\2\2\u01b9\u01be\n\21\2\2"+
		"\u01ba\u01bb\7^\2\2\u01bb\u01be\5q9\2\u01bc\u01be\5\u0089E\2\u01bd\u01b9"+
		"\3\2\2\2\u01bd\u01ba\3\2\2\2\u01bd\u01bc\3\2\2\2\u01ben\3\2\2\2\u01bf"+
		"\u01c4\n\22\2\2\u01c0\u01c1\7^\2\2\u01c1\u01c4\5q9\2\u01c2\u01c4\5\u0089"+
		"E\2\u01c3\u01bf\3\2\2\2\u01c3\u01c0\3\2\2\2\u01c3\u01c2\3\2\2\2\u01c4"+
		"p\3\2\2\2\u01c5\u01cb\5s:\2\u01c6\u01cb\7\62\2\2\u01c7\u01cb\5u;\2\u01c8"+
		"\u01cb\5\u0085C\2\u01c9\u01cb\5w<\2\u01ca\u01c5\3\2\2\2\u01ca\u01c6\3"+
		"\2\2\2\u01ca\u01c7\3\2\2\2\u01ca\u01c8\3\2\2\2\u01ca\u01c9\3\2\2\2\u01cb"+
		"r\3\2\2\2\u01cc\u01cf\5\u008bF\2\u01cd\u01cf\5\u008dG\2\u01ce\u01cc\3"+
		"\2\2\2\u01ce\u01cd\3\2\2\2\u01cft\3\2\2\2\u01d0\u01d1\7z\2\2\u01d1\u01d2"+
		"\5\u0087D\2\u01d2\u01d3\5\u0087D\2\u01d3v\3\2\2\2\u01d4\u01d5\7w\2\2\u01d5"+
		"\u01d7\7}\2\2\u01d6\u01d8\5\u0087D\2\u01d7\u01d6\3\2\2\2\u01d8\u01d9\3"+
		"\2\2\2\u01d9\u01d7\3\2\2\2\u01d9\u01da\3\2\2\2\u01da\u01db\3\2\2\2\u01db"+
		"\u01dc\7\177\2\2\u01dcx\3\2\2\2\u01dd\u01e3\5{>\2\u01de\u01e3\5\177@\2"+
		"\u01df\u01e3\5\u0081A\2\u01e0\u01e3\5\u0083B\2\u01e1\u01e3\4\u200e\u200f"+
		"\2\u01e2\u01dd\3\2\2\2\u01e2\u01de\3\2\2\2\u01e2\u01df\3\2\2\2\u01e2\u01e0"+
		"\3\2\2\2\u01e2\u01e1\3\2\2\2\u01e3z\3\2\2\2\u01e4\u01e9\5}?\2\u01e5\u01e9"+
		"\t\23\2\2\u01e6\u01e7\7^\2\2\u01e7\u01e9\5\u0085C\2\u01e8\u01e4\3\2\2"+
		"\2\u01e8\u01e5\3\2\2\2\u01e8\u01e6\3\2\2\2\u01e9|\3\2\2\2\u01ea\u01ec"+
		"\t\24\2\2\u01eb\u01ea\3\2\2\2\u01ec~\3\2\2\2\u01ed\u01ef\t\25\2\2\u01ee"+
		"\u01ed\3\2\2\2\u01ef\u0080\3\2\2\2\u01f0\u01f2\t\26\2\2\u01f1\u01f0\3"+
		"\2\2\2\u01f2\u0082\3\2\2\2\u01f3\u01f5\t\27\2\2\u01f4\u01f3\3\2\2\2\u01f5"+
		"\u0084\3\2\2\2\u01f6\u01f7\7w\2\2\u01f7\u01f8\5\u0087D\2\u01f8\u01f9\5"+
		"\u0087D\2\u01f9\u01fa\5\u0087D\2\u01fa\u01fb\5\u0087D\2\u01fb\u0207\3"+
		"\2\2\2\u01fc\u01fd\7w\2\2\u01fd\u01fe\7}\2\2\u01fe\u0200\5\u0087D\2\u01ff"+
		"\u0201\5\u0087D\2\u0200\u01ff\3\2\2\2\u0201\u0202\3\2\2\2\u0202\u0200"+
		"\3\2\2\2\u0202\u0203\3\2\2\2\u0203\u0204\3\2\2\2\u0204\u0205\7\177\2\2"+
		"\u0205\u0207\3\2\2\2\u0206\u01f6\3\2\2\2\u0206\u01fc\3\2\2\2\u0207\u0086"+
		"\3\2\2\2\u0208\u0209\t\30\2\2\u0209\u0088\3\2\2\2\u020a\u020b\7^\2\2\u020b"+
		"\u020c\t\2\2\2\u020c\u008a\3\2\2\2\u020d\u020e\t\31\2\2\u020e\u008c\3"+
		"\2\2\2\u020f\u0210\n\32\2\2\u0210\u008e\3\2\2\2\u0211\u021a\7\62\2\2\u0212"+
		"\u0216\t\5\2\2\u0213\u0215\t\7\2\2\u0214\u0213\3\2\2\2\u0215\u0218\3\2"+
		"\2\2\u0216\u0214\3\2\2\2\u0216\u0217\3\2\2\2\u0217\u021a\3\2\2\2\u0218"+
		"\u0216\3\2\2\2\u0219\u0211\3\2\2\2\u0219\u0212\3\2\2\2\u021a\u0090\3\2"+
		"\2\2\u021b\u021d\t\33\2\2\u021c\u021e\t\34\2\2\u021d\u021c\3\2\2\2\u021d"+
		"\u021e\3\2\2\2\u021e\u0220\3\2\2\2\u021f\u0221\t\7\2\2\u0220\u021f\3\2"+
		"\2\2\u0221\u0222\3\2\2\2\u0222\u0220\3\2\2\2\u0222\u0223\3\2\2\2\u0223"+
		"\u0092\3\2\2\2\61\2\u0099\u00a7\u00fd\u0108\u010f\u0117\u011b\u0120\u012d"+
		"\u0130\u0136\u013a\u0140\u0146\u014f\u0157\u015b\u0162\u0166\u016a\u016c"+
		"\u0174\u017b\u0183\u018c\u0195\u01a0\u01ab\u01b7\u01bd\u01c3\u01ca\u01ce"+
		"\u01d9\u01e2\u01e8\u01eb\u01ee\u01f1\u01f4\u0202\u0206\u0216\u0219\u021d"+
		"\u0222\3\2\3\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}