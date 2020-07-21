const assert = require('assert');
const antlr4 = require('antlr4');

const FormulaParser = require('../out/ReportFormulaParser.js').ReportFormulaParser;
const FormulaLexer = require('../out/ReportFormulaLexer.js').ReportFormulaLexer;

// var MyGrammarListener = require('./MyGrammarListener').MyGrammarListener;
const FormulaVisitor = require('../src/FormulaVisitor').FormulaVisitor;

function calc(input) {
  var chars = new antlr4.InputStream(input);
  var lexer = new FormulaLexer(chars);
  var tokens = new antlr4.CommonTokenStream(lexer);
  var parser = new FormulaParser(tokens);
  // parser.buildParseTrees = true;
  var tree = parser.formulaExpr();

  return tree.accept(new FormulaVisitor());
}
describe('加法测试', function () {
  it('1 + 1 + 1 = 3', function () {
    var input = "1 + 1 + 1"
    var result = calc(input);

    assert.equal(3, result);
  });

  it('should ', function() {

  });

});