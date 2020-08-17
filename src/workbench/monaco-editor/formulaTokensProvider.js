const FormulaLanguageService = require('../../platform/formula/FormulaLanguageService').FormulaLanguageService;

const langService = FormulaLanguageService.INSTANCE;

/**
 * 根据 https://microsoft.github.io/monaco-editor/api/interfaces/monaco.languages.istate.html 描述，
 * state 可以用于多行记录。
 */
class FormulaTokensState {
  clone() {
    return new FormulaTokensState();
  }

  equals(other) {
    return true;
  }
}

class FormulaToken {
  constructor(ruleName, startIndex) {
    this.scopes = ruleName.toLowerCase() + ".formula";
    this.startIndex = startIndex;
  }
}

class FormulaLineTokens {
  constructor(tokens, state) {
    this.endState = new FormulaTokensState();
    this.tokens = tokens;
  }
}


class FormulaTokensProvider {
  constructor() {
    this.lineTokens = null;
  }
  getInitialState() {
    return new FormulaTokensState();
  }

  tokenize(line, state) {
    this.lineTokens = this.tokensForLine(line);
    return this.lineTokens;
  }

  tokensForLine(input) {
    let tokens = langService.provideTokensFromCache(input);
    let lineTokenList = [];
    tokens.forEach(function(token){
      lineTokenList.push(new FormulaToken(token.tokenType + '.formula', token.startColumn));
    });
  
    return new FormulaLineTokens(lineTokenList);
  }
}

exports.FormulaTokensProvider = FormulaTokensProvider;