const assert = require('assert').strict;
const sinon = require('sinon');

const antlr4 = require('antlr4');
const FormulaLexer = require('../runtime/ReportFormulaLexer').ReportFormulaLexer;
const FormulaParser = require('../runtime/ReportFormulaParser').ReportFormulaParser;
const EditorTokensVisitor = require('../core/EditorTokensVisitor').EditorTokensVisitor;

describe('公式语法解析', function() {
  it('收集语法 token', function() {
    let input = 'SUM(A1)';

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

    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new FormulaParser(tokens);

    parser.removeErrorListeners(); // 移除默认的 ConsoleErrorListener
    parser.addErrorListener(new ErrorTokenListener());

    var tree = parser.formulaExpr(); // 启动公式解析，遇到错误会触发 ErrorListener。
  
    var tokenContainer = [];
    tree.accept(new EditorTokensVisitor(tokenContainer));

    let tokenList = [];
    do {
      let token = lexer.nextToken();
      if (!token || token.type == EOF) {
        break;
      }
  
      let tokenTypeName = lexer.symbolicNames[token.type];
      tokenList.push({ tokenTypeName, column: token.column });
    } while (true);
    
    errorStartingColumns.forEach(function (errTokenColumn) {
      tokenList.push({ tokenTypeName: 'error', column: errTokenColumn });
    });
  });
});