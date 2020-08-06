const FormulaCore = require('./core/SingleFormulaCore').SingleFormulaCore;

const formulaCoreInst = FormulaCore.INSTANCE;

/**
 * 为公式编辑器提供语言服务：代码高亮、错误检查、自动补全。
 */
class FormulaLanguageService {
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
        tokenType: token.tokenTypeName,
        startColumn: token.column
      });
    });
    return editorTokens;
  }
}

exports.FormulaLanguageService = FormulaLanguageService;