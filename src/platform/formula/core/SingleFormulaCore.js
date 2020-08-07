const antlr4 = require('antlr4');

const FormulaParser = require('../runtime/ReportFormulaParser').ReportFormulaParser;
const FormulaLexer = require('../runtime/ReportFormulaLexer').ReportFormulaLexer;

const ValueEvaluationVisitor = require('./ValueEvaluationVisitor').ValueEvaluationVisitor;
const ParserErrorListener = require('../error/ParserErrorListener');
const LexerErrorListener = require('../error/LexerErrorListener');

const FormulaErrs = require('../error/FormulaExceptions');
const CalculationException = FormulaErrs.CalculationException;
const ParseException = FormulaErrs.ParseException;

const EditorErrorHandler = require('../../contrib/errorHandler/EditorErrorHandler');

/**
 * 公式引擎核心，解析公式并计算
 */

function SingleFormulaCore(errorHandler, cellValueProvider) {
  this.formulaVisitor = new ValueEvaluationVisitor()
  this.setErrorHandler(errorHandler);
  this.setCellValueProvider(cellValueProvider);
}

SingleFormulaCore.prototype.setErrorHandler = function setErrorHandler(errorHandler) {
  this.sharedErrorHandler = errorHandler;

  return this;
}

SingleFormulaCore.prototype.removeErrorHandler = function removeErrorHandler() {
  this.sharedErrorHandler = null;

  return this;
}

SingleFormulaCore.prototype.setCellValueProvider = function setCellValueProvider(valueProvider) {
  if (!valueProvider) {
    return this;
  }

  this.cellValueProvider = valueProvider;

  return this;
}

SingleFormulaCore.prototype.getCellValueProvider = function getCellValueProvider() {
  return this.cellValueProvider;
}

SingleFormulaCore.prototype.removeCellValueProvider = function removeCellValueProvider() {
  this.cellValueProvider = null;
  return this;
}

SingleFormulaCore.prototype.createErrorListener = function createErrorListener(errorHandler) {
  const defaultLexerErrListener = new LexerErrorListener();
  const defaultParserErrListener = new ParserErrorListener();

  defaultLexerErrListener.setErrorHandler(errorHandler);
  defaultParserErrListener.setErrorHandler(errorHandler);

  return {
    lexerErrorListener: defaultLexerErrListener,
    parserErrorListener: defaultParserErrListener
  }
}

/**
 * 解析单元格地址的值
 */
SingleFormulaCore.prototype.evaluateCellAddress = function (cellAddress) {
  // 第一步，解析单元格地址为地址对象

  // 第二部，根据地址对象，获取单元格的值
  return 0;
}

SingleFormulaCore.prototype.collectTokens = function (input, context) {
  const errorStartingColumns = [];
  const EOF = -1;

  class ErrorTokenListener extends antlr4.error.ErrorListener {
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
      errorStartingColumns.push(column)
    }
  }
  const chars = new antlr4.InputStream(input);
  const lexer = new FormulaLexer(chars);

  lexer.removeErrorListeners();
  lexer.addErrorListener(new ErrorTokenListener());

  let tokenList = [];
  do {
    let token = lexer.nextToken();
    if (!token || token.type == EOF) {
      break;
    }

    let tokenTypeName = lexer.symbolicNames[token.type];
    tokenList.push({ column: token.column, tokenTypeName });
  } while (true);

  // 处理函数调用的标识符
  tokenList.forEach(function (token, index, allTokens) {
    let lastIndex = allTokens.length;
    let identifierName = lexer.symbolicNames[FormulaLexer.Identifier];
    let openParenName = lexer.symbolicNames[FormulaLexer.OpenParen];
    let whiteSpacesName = lexer.symbolicNames[FormulaLexer.WhiteSpaces]
    if(token.tokenTypeName === identifierName) {
      if(index + 1 < lastIndex) {
        let tokenType = allTokens[index + 1].tokenTypeName;
        if(tokenType === openParenName) {
          token.tokenTypeName = 'fnIdentifier';
        }else if(tokenType === whiteSpacesName){
          if(index + 2 < lastIndex) {
            tokenType = allTokens[index + 2].tokenTypeName;
            if(tokenType === openParenName) {
              token.tokenTypeName = 'fnIdentifier';
            }
          }
        }
      }
    }
  });

  errorStartingColumns.forEach(function (errTokenColumn) {
    tokenList.push({ column: errTokenColumn, tokenTypeName: 'error' });
  });

  return tokenList;
}

SingleFormulaCore.prototype.parse = function parse(input, context) {
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
  // 如果已经形成语法错误，则不再执行公式
  if (errorListenerObj.lexerErrorListener.hasErrors()
    || errorListenerObj.parserErrorListener.hasErrors()) {
    return null;
  }

  return tree;
}



SingleFormulaCore.prototype.calc = function calc(input, context) {

  var ast = this.parse(input);
  if (!ast) {
    return;
  }

  try {
    return ast.accept(this.formulaVisitor);
  } catch (e) {
    if (e instanceof ParseException) {
      this.sharedErrorHandler.handle(e.input, e.line, e.column, e.message);
    } else {
      this.sharedErrorHandler.handleRuntimeError(e);
    }
  }
}

SingleFormulaCore.createInstance = function () {
  return new SingleFormulaCore(new EditorErrorHandler());
}

const INSTANCE = new SingleFormulaCore(new EditorErrorHandler());
SingleFormulaCore.INSTANCE = INSTANCE;

exports.SingleFormulaCore = SingleFormulaCore;