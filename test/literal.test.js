const assert = require('assert');
const antlr4 = require('antlr4');
const punycode = require('punycode');

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

function assertList(list) {
  if (!list) {
    return;
  }
  list.forEach(function (item) {
    var result = calc(item.rawValue);
    assert.equal(item.expected, result);
  })
}

describe('一般常量', function () {
  it('识别:字符串', function () {
    assertList([
      {
        rawValue: "\"OK\"",
        expected: "OK"
      },
      {
        rawValue: "\"\"",
        expected: ""
      },
      {
        rawValue: "\"\\\"\"",
        expected: "\""
      }
    ]);
  });


  it('识别:布尔', function () {

  });

  it('识别:数字', function () {

  });

  it('识别:空', function () {

  });

});