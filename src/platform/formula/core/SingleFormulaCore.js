const antlr4 = require('antlr4');

const FormulaParser = require('../runtime/ReportFormulaParser').ReportFormulaParser;
const FormulaLexer = require('../runtime/ReportFormulaLexer').ReportFormulaLexer;

const ValueEvaluationVisitor = require('./ValueEvaluationVisitor').ValueEvaluationVisitor;
const EditorTokensVisitor = require('./EditorTokensVisitor').EditorTokensVisitor;

const ParserErrorListener = require('../error/ParserErrorListener');
const LexerErrorListener = require('../error/LexerErrorListener');

const FormulaErrs = require('../error/FormulaExceptions');
const CalculationException = FormulaErrs.CalculationException;
const ParseException = FormulaErrs.ParseException;

const EditorErrorHandler = require('../../contrib/errorHandler/EditorErrorHandler');

function SingleFormulaState() {
  this._tokenList = [];
}

SingleFormulaState.prototype.push = function (token) {
  this._tokenList.push(token);
}

SingleFormulaState.prototype.clear = function () {
  this._tokenList = [];
}

SingleFormulaState.prototype.getTokenList = function () {
  return this._tokenList;
}

/**
 * 公式引擎核心，解析公式并计算
 */

function SingleFormulaCore(errorHandler, cellValueProvider) {
  this.evaluateVisitor = new ValueEvaluationVisitor()
  this.setErrorHandler(errorHandler);
  this.setCellValueProvider(cellValueProvider);

  this._tokenSink = new SingleFormulaState();
  this.tokenVisitor = new EditorTokensVisitor(this._tokenSink);
}

SingleFormulaCore.FnTokenType = 'fnIdentifier';

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

/**
 * @param {caretColumn} - caretColumn = 0..n-1
 */
SingleFormulaCore.prototype.findTokenOnLeftOfPosition = function (line, caretColumn) {
  // caret column 表示光标右侧的列，需要减 1。
  return this.tokenVisitor.findTerminalNodeAtCaret(line, caretColumn - 1);
}

SingleFormulaCore.prototype.findArgumentRuleOnLeftOfPosition = function(line, caretColumn) {
  let leftNode = this.findTokenOnLeftOfPosition(line, caretColumn);
  let ret = leftNode;
  if(!ret){
    return undefined;
  }

  while(ret.parentCtx){
    if(ret.getText() === ')') {
      ret = ret.parentCtx;
      continue;
    }
    if(ret.parentCtx instanceof FormulaParser.ArgumentsContext) {
      break;
    }
    ret = ret.parentCtx;
  }

  return ret.parentCtx ? ret : leftNode;
}

function getFunctionName(argumentsRule) {
  let argumentsExpr = argumentsRule.parentCtx;
  let fnName = argumentsExpr.singleExpression().getText();
  return fnName;
}
function getArgumentList(argumentsRule) {
  let argumentsList = argumentsRule.children;
  let endIndex = argumentsList.length;
  if(argumentsList[argumentsList.length-1].getText() === ')') {
    endIndex--;
  }
  if(endIndex <= 1) {
    return [];
  }
  // 第一个元素是“开括号”
  return argumentsList.slice(1, endIndex);
}

// 查找 startingNode 左侧的逗号数量，根据非逗号数量，判断当前的活动参数
function getArgumentIndex(argumentsList, node) {
  var argumentIndex = 0;
  for (var _i = 0, _a = argumentsList; _i < _a.length; _i++) {
    var child = _a[_i];
    if (child === node) {
      break;
    }
    if (child.getText() !== ',' /* CommaToken */) {
      argumentIndex++;
    }
  }
  return argumentIndex;
}

// 根据解析树，一直向上查找，直到找到一个参数节点。
function getArgumentsRule(startingNode) {
  let n = startingNode;
  do{
    if(n instanceof FormulaParser.ArgumentsContext) {
      return n;
    }
    n = n.parentCtx;
  }while(n);

  return undefined;
}

SingleFormulaCore.prototype.getContainingArgumentInfo = function (startingNode) {

  let argumentsRuleNode = getArgumentsRule(startingNode);

  if (argumentsRuleNode) {
    let fnName = getFunctionName(argumentsRuleNode);
    
    
    let argumentIndex = getArgumentIndex(getArgumentList(argumentsRuleNode), startingNode);
    console.log('参数索引', argumentIndex);

    return {
      fnName: fnName,
      argumentIndex: argumentIndex
    };
  }

  return {
    fnName: '<UNKNOWN>', //函数名称
    argumentIndex: 0 //参数索引位置 0..n-1
  };
}

/**
 * 收集所有的 token，用于支持语法高亮。
 * 支持输入为多行文本。
 * @param {SingleFormulaContext} ctx
 * @return {{line,startIndex,stopIndex,text,tokenTypeName}[]} tokenList - token 清单
 */
SingleFormulaCore.prototype.collectTokens = function (input, ctx) {
  let tokenTree = this.parse(input);
  if (!tokenTree) {
    return [];
  }

  this._tokenSink = new SingleFormulaState();
  this.tokenVisitor = new EditorTokensVisitor(this._tokenSink);

  let tokenList = this._tokenSink.getTokenList();
  tokenTree.accept(this.tokenVisitor);

  
  return tokenList.map(function (token) {
    return {
      line: token.line,
      text: token.text,
      startIndex: token.column,
      stopIndex: token.column + token.text.length - 1,
      tokenTypeName: FormulaLexer.prototype.symbolicNames[token.type]
    }
  });
}

/**
 * 生成的解析树中，允许包括错误。
 */
SingleFormulaCore.prototype.parse = function parse(input, context) {
  const errorListenerObj = this.createErrorListener(this.sharedErrorHandler);

  const chars = new antlr4.InputStream(input);
  const lexer = new FormulaLexer(chars);
  lexer.removeErrorListeners();
  lexer.addErrorListener(errorListenerObj.lexerErrorListener);

  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new FormulaParser(tokens);
  // 在创建解析器后，执行解析器前定义错误监听。
  parser.removeErrorListeners(); // 移除默认的 ConsoleErrorListener
  parser.addErrorListener(errorListenerObj.parserErrorListener);

  // 启动公式解析，遇到错误会触发 ErrorListener。
  const tree = parser.formulaExpr(); 

  return tree;
}

/**
 * 计算公式
 * 
 */
SingleFormulaCore.prototype.calc = function calc(input, context) {
  var ast = this.parse(input);
  if (!ast) {
    return;
  }

  try {
    return ast.accept(this.evaluateVisitor);
  } catch (e) {
    if (e instanceof ParseException) {
      this.sharedErrorHandler.handleParseError(e.input, e.line, e.column, e.message);
    } else {
      this.sharedErrorHandler.handleEvaluateError(e);
    }
  }
}

SingleFormulaCore.createInstance = function () {
  return new SingleFormulaCore(new EditorErrorHandler());
}

SingleFormulaCore.INSTANCE = SingleFormulaCore.createInstance();

exports.SingleFormulaCore = SingleFormulaCore;