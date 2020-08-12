const FormulaCore = require('./core/SingleFormulaCore').SingleFormulaCore;
const FormulaSignatureList = require('./formulaSignatureHelp').FormulaSignatureList;

const formulaCoreInst = FormulaCore.INSTANCE;

/**
 * 为公式编辑器提供语言服务：代码高亮、错误检查、自动补全。
 */
class FormulaLanguageService {
  constructor() {
    this._inputTokensCache = {};
  }

  /**
   * 根据当前光标位置，返回签名的提示信息：活动签名、活动参数等。
   * @param {position} 光标位置
   */
  getSignatureHelpItems(input, position) {
    let tokens = this.provideTokensFromCache(input);

    /// position.column = 1..n
    let token = formulaCoreInst.findArgumentRuleOnLeftOfPosition(position.lineNumber, position.column - 1);
    console.log('光标左侧的 token', token);

    // 如果没有参数信息，则返回 undefined。
    if(token.getText() === ')') {
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

  

  setCache(input, tokens) {
    this._inputTokensCache.input = input;
    this._inputTokensCache.tokens = tokens;
  }
  /**
   * 用于语法高亮使用
   * 返回一个数组：[{
   *  tokenType,
   *  startColumn
   * }]
   */
  provideTokens(input) {
    let tokens = formulaCoreInst.collectTokens(input);

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

    this.setCache(input, editorTokens);
    return editorTokens;
  }

  provideTokensFromCache(input) {
    if (this._inputTokensCache.input === input) {
      return this._inputTokensCache.tokens;
    }

    return this.provideTokens(input);
  }
}

FormulaLanguageService.INSTANCE = new FormulaLanguageService();

exports.FormulaLanguageService = FormulaLanguageService;