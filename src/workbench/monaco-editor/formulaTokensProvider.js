const FormulaLanguageService = require('../../platform/formula/FormulaLanguageService').FormulaLanguageService;

const langService = new FormulaLanguageService();

class FormulaState {
  clone() {
    return new FormulaState();
  }

  equals(other) {
    return true;
  }
}

class FormulaTokensProvider {
  getInitialState() {
    return new FormulaState();
  }

  tokenize(line, state) {
    // So far we ignore the state, which is not great for performance reasons
    return tokensForLine(line);
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
    this.endState = new FormulaState();
    this.tokens = tokens;
  }
}

function tokensForLine(input) {
  let tokens = langService.provideTokens(input);
  let lineTokenList = [];
  tokens.forEach(function(token){
    lineTokenList.push(new FormulaToken(token.tokenType, token.startColumn));
  });

  return new FormulaLineTokens(lineTokenList);
}

exports.FormulaTokensProvider = FormulaTokensProvider;