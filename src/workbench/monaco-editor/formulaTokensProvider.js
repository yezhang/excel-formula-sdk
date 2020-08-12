const FormulaLanguageService = require('../../platform/formula/FormulaLanguageService').FormulaLanguageService;

const langService = FormulaLanguageService.INSTANCE;

class FormulaLineState {
  clone() {
    return new FormulaLineState();
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
  constructor(tokens) {
    this.endState = new FormulaLineState();
    this.tokens = tokens;
  }
}


class FormulaTokensProvider {
  constructor() {
    this.lineTokens = null;
  }
  getInitialState() {
    return new FormulaLineState();
  }

  tokenize(line, state) {
    // 由于性能原因，忽略状态
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