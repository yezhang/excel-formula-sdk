const FormulaCore = require('./core/SingleFormulaCore').SingleFormulaCore;
const FormulaSignatureList = require('./formulaSignatureHelp').FormulaSignatureList;

const formulaCoreInst = FormulaCore.INSTANCE;

function LangInputModel(versionId, value) {
  this._versionId = versionId;
  this._value = value;
}

LangInputModel.build = function build(versionId, value) {
  return new LangInputModel(versionId,value);
}

LangInputModel.prototype.getVersionId = function getVersionId() {
  return this._versionId;
}

LangInputModel.prototype.getValue = function getValue() {
  return this._value;
}


class ILanguageService {
  /**
   * 获取句法诊断信息，包括错误。
   */
  getSyntacticDiagnostics() {}
  /**
   * 获取语义诊断信息，包括错误。
   */
  getSemanticDiagnostics() {}
  /**
   * 获取函数签名辅助信息
   */
  getSignatureHelpItems() {}
  /**
   * 获取自动补全信息
   */
  getCompletionsAtPosition() {}
  /**
   * 获取快速提示信息（Hover）
   */
  getQuickInfoAtPosition() {}

  /**
   * 获取所有的单元格地址/单元格范围的列表。
   * 可用于支持单元格地址高亮。
   */
  getCellAddressHighlights() {}

  /**
   * 代码错误修复
   */
  getCodeFixesAtPosition() {}
  dispose(){}
}

const DiagnosticCategory = {
  Warning : 0,
  Error : 1,
  Suggestion : 2,
  Message : 3
};

class ParseResult {
  constructor(parseTree, parseErrors){
    this._parseTree = parseTree;
    this._parseErrors = parseErrors;
  }

  getParseTree() {
    return this._parseTree;
  }

  getParseErrors() {
    return this._parseErrors;
  }
}

class ParseResultCache {
  constructor(version, parseResult) {
    this._version = version;
    this._parseResult = parseResult;
  }

  getParseResult() {
    return this._parseResult;
  }
  // 得到解析树
  getParseTree() {
    return this._parseResult.getParseTree();
  }

  getVersion() {
    return this._version;
  }

  getErrors() {
    return this._parseResult.getParseErrors();
  }
}

/**
 * 为公式编辑器提供语言服务：代码高亮、错误检查、自动补全。
 */
class FormulaLanguageService {
  constructor() {
    this._parseTreeCache = undefined;
  }

  getParseTreeCache() {
    return this._parseTreeCache;
  }

  setParseTreeCache(version, tree, errors) {
    this._parseTreeCache = new ParseResultCache(version, tree, errors);
  }

  _forceParseInput(inputText) {
    const errors = [];
    formulaCoreInst.setErrorHandler({
      handleEvaluateError: function(e) {

      },
      handleParseError: function(rawInput, symbol, line, column, message){
        let charOffset = symbol.start;
        
        errors.push({
          category: DiagnosticCategory.Error,
          start: charOffset,
          length: symbol.text ? symbol.text.length : 0,
          messageText: message
        });
      }
    });
    let tree = formulaCoreInst.parse(inputText);

    return new ParseResult(tree, errors);
  }

  /**
   * 支持从缓存读取数据。
   */
  parseInputModel(inputModel) {
    let versionId = inputModel.getVersionId();
    let cache = this.getParseTreeCache();
    if(cache && cache.getVersion() && cache.getVersion() === versionId) {
      return cache.getParseResult();
    }

    let inputText = inputModel.getValue();
    let ret = this._forceParseInput(inputText);
    this.setParseTreeCache(versionId, ret);

    return ret;
  }
  /**
   * 获取句法诊断
   * @return {Diagnostic}
   * 
   * Diagnostic {
   * category: DiagnosticCategory;
   * code: number;
   * file: SourceFile | undefined;
   * start: number | undefined;
   * length: number | undefined;
   * messageText: string | DiagnosticMessageChain;
   * }
   */
  getSyntacticDiagnostics(inputModel, position) {
    let ret = this.parseInputModel(inputModel);
    return ret.getParseErrors();
  }

  /**
   * 获取语义诊断
   * @param {*} input 
   * @param {*} position 
   */
  getSemanticDiagnostics(inputModel, position) {

  }

  /**
   * 根据当前光标位置，返回签名的提示信息：活动签名、活动参数等。
   * @param {position} - 光标位置。position.column = 1..n
   */
  getSignatureHelpItems(inputModel, position) {
    let ret = this.parseInputModel(inputModel);
    let token = formulaCoreInst.findArgumentRuleOnLeftOfPosition(ret.getParseTree(), position.lineNumber, position.column - 1);

    // 如果没有参数信息，则返回 undefined。
    if(!token || token.getText() === ')') {
      // 当返回 undefined 时，提示窗口消失。
      return undefined;
    }

    let argumentInfo = formulaCoreInst.getContainingArgumentInfo(token);

    // token.tokenType = fnIdentifier
    let fnName = argumentInfo.fnName;

    const retItems = {
      selectedItemIndex: 0,
      argumentIndex: argumentInfo.argumentIndex,
      items: []
    };

    // 查询函数的签名数据
    if(FormulaSignatureList.hasOwnProperty(fnName)){
      retItems.items.push(FormulaSignatureList[fnName]);
    }

    return retItems;
  }

  findFnIdentifierToken(inputTokens, siblingToken) {
    let fnNameToken = undefined;
    for (let i = siblingToken.tokenIndex; i >= 0; i--) {
      const token = inputTokens[i];
      if (token.tokenType === FormulaCore.FnTokenType) {
        fnNameToken = token;
        break;
      }
    }

    return fnNameToken;
  }
  
  /**
   * 用于语法高亮使用
   * 返回一个数组：[{
   *  tokenType,
   *  startColumn
   * }]
   */
  provideTokens(inputModel) {
    let ret = this.parseInputModel(inputModel);
    let tokens = formulaCoreInst.collectTokens(ret.getParseTree());

    let editorTokens = [];
    tokens.forEach(function (token, index) {
      editorTokens.push({
        tokenIndex: index,
        lineNumber: token.line,
        tokenType: token.tokenTypeName,
        startColumn: token.startIndex,
        stopColumn: token.stopIndex,
        text: token.text
      });
    });

    return editorTokens;
  }

  provideTokensFromCache(inputModel) {
    return this.provideTokens(inputModel);
  }
}


FormulaLanguageService.INSTANCE = new FormulaLanguageService();

exports.FormulaLanguageService = FormulaLanguageService;
exports.LangInputModel = LangInputModel;

