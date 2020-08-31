const assert = require('assert').strict;
const sinon = require('sinon');

const antlr4 = require('antlr4');

const SingleFormulaCore = require('platform/formula/core/SingleFormulaCore').SingleFormulaCore;
const SingleFormulaAST = require('platform/formula/core/SingleFormulaAST').SingleFormulaAST;

describe('语法树测试', function() {
  let FORMULA_TEXT = '';
  beforeEach(function () {
    FORMULA_TEXT = '=MIN(ROUND($G$5*E14,2), D14)';
  });

  it('应成功构建语法树', function() {
    let core = new SingleFormulaCore();
    let parseTree = core.parse(FORMULA_TEXT);
    let ast = new SingleFormulaAST(parseTree);
    console.log(JSON.stringify(ast.content, null, ' '));
  });
});

