const antlr4 = require('antlr4');

const FormulaParser = require('../../out/ReportFormulaParser').ReportFormulaParser;
const FormulaLexer = require('../../out/ReportFormulaLexer').ReportFormulaLexer;

const FormulaVisitor = require('./FormulaVisitor').FormulaVisitor;
const ParserErrorListener = require('../error/ParserErrorListener');
const LexerErrorListener = require('../error/LexerErrorListener');

const defaultLexerErrListener = new LexerErrorListener();
const defaultParserErrListener = new ParserErrorListener();

const EditorErrorHandler = require('../contrib/errorHandler/EditorErrorHandler');

/**
 * 公式引擎核心，解析公式并计算
 */

 function FormulaCore(errorHandler) {
  this.lexerErrListener = defaultLexerErrListener;
  this.parserErrListener = defaultParserErrListener;

  this.setErrorHandler(errorHandler);
 }

 FormulaCore.prototype.setErrorHandler = function setErrorHandler(errorHandler) {
  this.lexerErrListener.setErrorHandler(errorHandler);
  this.parserErrListener.setErrorHandler(errorHandler);

  return this;
 }

 FormulaCore.prototype.removeErrorHandler = function removeErrorHandler() {
  this.lexerErrListener.removeErrorHandler();
  this.parserErrListener.removeErrorHandler();

  return this;
 }


 FormulaCore.prototype.calc = function calc(input) {
  var chars = new antlr4.InputStream(input);
  var lexer = new FormulaLexer(chars);

  lexer.removeErrorListeners();
  lexer.addErrorListener(this.lexerErrListener);
  
  var tokens = new antlr4.CommonTokenStream(lexer);
  var parser = new FormulaParser(tokens);

  // 在创建解析器后，执行解析器前定义错误监听。
  parser.removeErrorListeners(); // 移除默认的 ConsoleErrorListener
  parser.addErrorListener(this.parserErrListener); 

  var tree = parser.formulaExpr();

  return tree.accept(new FormulaVisitor());
}

const INSTANCE = new FormulaCore(new EditorErrorHandler());

 FormulaCore.INSTANCE = INSTANCE;

 module.exports = FormulaCore;