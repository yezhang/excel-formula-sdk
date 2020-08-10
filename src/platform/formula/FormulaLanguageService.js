const FormulaCore = require('./core/SingleFormulaCore').SingleFormulaCore;

const formulaCoreInst = FormulaCore.INSTANCE;

/**
 * 为公式编辑器提供语言服务：代码高亮、错误检查、自动补全。
 */
class FormulaLanguageService {
  constructor() {
    this._inputTokensCache = {};
  }

  setCache(input, tokens) {
    this._inputTokensCache.input = input;
    this._inputTokensCache.tokens = tokens;
  }
  /**
   * 返回一个数组：[{
   *  tokenType,
   *  startColumn
   * }]
   */
  provideTokens(input) {
    let tokens = formulaCoreInst.collectTokens(input);
    

    let editorTokens = [];
    tokens.forEach(function (token){
      editorTokens.push({
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
    if(this._inputTokensCache.input === input) {
      return this._inputTokensCache.tokens;
    }

    return this.provideTokens(input);
  }
}

FormulaLanguageService.INSTANCE = new FormulaLanguageService();

exports.FormulaLanguageService = FormulaLanguageService;