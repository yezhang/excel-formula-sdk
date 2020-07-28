const antlr4 = require('antlr4');

const FormulaParser = require('../../out/ReportFormulaParser').ReportFormulaParser;
const FormulaLexer = require('../../out/ReportFormulaLexer').ReportFormulaLexer;

const FormulaVisitor = require('./FormulaVisitor').FormulaVisitor;
const ParserErrorListener = require('../error/ParserErrorListener');
const LexerErrorListener = require('../error/LexerErrorListener');



const EditorErrorHandler = require('../contrib/errorHandler/EditorErrorHandler');

/**
 * 公式引擎核心，解析公式并计算
 */

function FormulaCore(errorHandler) {
  this.formulaVisitor = new FormulaVisitor()
  this.setErrorHandler(errorHandler);
}

FormulaCore.prototype.setErrorHandler = function setErrorHandler(errorHandler) {
  this.sharedErrorHandler = errorHandler;

  return this;
}

FormulaCore.prototype.removeErrorHandler = function removeErrorHandler() {
  this.sharedErrorHandler = null;

  return this;
}

FormulaCore.prototype.createErrorListener = function createErrorListener(errorHandler) {
  const defaultLexerErrListener = new LexerErrorListener();
  const defaultParserErrListener = new ParserErrorListener();

  defaultLexerErrListener.setErrorHandler(errorHandler);
  defaultParserErrListener.setErrorHandler(errorHandler);

  return {
    lexerErrorListener: defaultLexerErrListener,
    parserErrorListener: defaultParserErrListener
  }
}

FormulaCore.prototype.calc = function calc(input) {

  var errorListenerObj = this.createErrorListener(this.sharedErrorHandler);


  var chars = new antlr4.InputStream(input);
  var lexer = new FormulaLexer(chars);

  lexer.removeErrorListeners();
  lexer.addErrorListener(errorListenerObj.lexerErrorListener);

  var tokens = new antlr4.CommonTokenStream(lexer);
  var parser = new FormulaParser(tokens);

  // 在创建解析器后，执行解析器前定义错误监听。
  parser.removeErrorListeners(); // 移除默认的 ConsoleErrorListener
  parser.addErrorListener(errorListenerObj.parserErrorListener);

  var tree = parser.formulaExpr(); // 启动公式解析，遇到错误会触发 ErrorListener。

  try {
    return tree.accept(this.formulaVisitor);
  } catch (e) {
    this.sharedErrorHandler.handleRuntimeError(e);
  }
}

const INSTANCE = new FormulaCore(new EditorErrorHandler());
FormulaCore.INSTANCE = INSTANCE;

module.exports = FormulaCore;