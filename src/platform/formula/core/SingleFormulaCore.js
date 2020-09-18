const antlr4 = require('antlr4');

const FormulaParser = require('../runtime/ReportFormulaParser').ReportFormulaParser;
const FormulaLexer = require('../runtime/ReportFormulaLexer').ReportFormulaLexer;

const EditorTokensVisitor = require('./EditorTokensVisitor').EditorTokensVisitor;

const ParserErrorListener = require('../error/ParserErrorListener');
const LexerErrorListener = require('../error/LexerErrorListener');

const EditorErrorHandler = require('../../contrib/errorHandler/EditorErrorHandler');

class NotImplementedError extends Error {
  constructor(){
    super('未实现的功能');
  }

}
/**
 * 公式引擎核心，解析公式并计算
 */

function SingleFormulaCore(errorHandler, cellValueProvider) {
  this.setErrorHandler(errorHandler);
  this.setCellValueProvider(cellValueProvider);
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
SingleFormulaCore.prototype.findTokenOnLeftOfPosition = function (tokenTree, line, caretColumn) {
  let tokenVisitor = new EditorTokensVisitor();
  tokenTree.accept(tokenVisitor);

  // caret column 表示光标右侧的列，需要减 1。
  return tokenVisitor.findTerminalNodeAtCaret(line, caretColumn - 1);
}

SingleFormulaCore.prototype.findArgumentRuleOnLeftOfPosition = function(tokenTree, line, caretColumn) {
  let leftNode = this.findTokenOnLeftOfPosition(tokenTree, line, caretColumn);
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
 * @param {*} tokenTree 解析树
 * @return {{line,startIndex,stopIndex,text,tokenTypeName}[]} tokenList - token 清单
 */
SingleFormulaCore.prototype.collectTokens = function (tokenTree) {
  if (!tokenTree) {
    return [];
  }
  let tokenVisitor = new EditorTokensVisitor();
  tokenTree.accept(tokenVisitor);
  let tokenList = tokenVisitor.getTokenList();

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
 * @param {String} input 输入字符串
 * @return {Object} 解析树（ParseTree）
 */
SingleFormulaCore.prototype.parse = function parse(input) {
  const parser = this.buildParser(input);
  // 启动公式解析，遇到错误会触发 ErrorListener。
  return parser.formulaExpr(); 
}

/**
 * 构建解析器
 */
SingleFormulaCore.prototype.buildParser = function parser(input) {
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

  return parser;
}

/**
 * 将所有单元格地址字面量提取出来。
 * @return 单元格地址，或者单元格范围。
 */
SingleFormulaCore.prototype.collectCellAddresses = function(parseTree) {
  throw new NotImplementedError();
}


SingleFormulaCore.createInstance = function () {
  return new SingleFormulaCore(new EditorErrorHandler());
}

SingleFormulaCore.INSTANCE = SingleFormulaCore.createInstance();

exports.SingleFormulaCore = SingleFormulaCore;
exports.INSTANCE = SingleFormulaCore.INSTANCE;