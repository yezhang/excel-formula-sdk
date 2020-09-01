const assert = require('assert').strict;
const sinon = require('sinon');

const antlr4 = require('antlr4');

const SingleFormulaCore = require('platform/formula/core/SingleFormulaCore').SingleFormulaCore;
const SingleFormulaAST = require('platform/formula/core/SingleFormulaAST').SingleFormulaAST;

describe('语法树测试', function() {
  let FORMULA_TEXT = '';
  let FORMULA_LIST = [];
  beforeEach(function () {
    FORMULA_TEXT = '=MIN(ROUND($G$5*E14,2), D14)';

    FORMULA_LIST  = [
      '=IF(C7<E7,MIN(ABS(E7-C7),D7),0)',
      '=MIN(ROUND($G$5*E14,2), D14)',
      '=MAX(C33-D33,0)',
      '=ROUNDUP(MIN(C19*0.6,A101010一般企业收入明细表!C4*0.005),2)',
      '=IF(A105060广告费和业务宣传费跨年度纳税调整明细表!C15>0, 0, ABS(A105060广告费和业务宣传费跨年度纳税调整明细表!C15))'
    ];
  });

  function assertTree(parseTree, ast) {
    let parsedStr = parseTree.getText();
    assert.strictEqual(parsedStr.substring(0, parsedStr.length-5), ast.content.toString());
  }

  it('应成功构建语法树', function() {
    FORMULA_LIST.forEach(function(f){
      let core = new SingleFormulaCore();
      let parseTree = core.parse(f);
      let ast = new SingleFormulaAST(parseTree);
      assertTree(parseTree, ast);
    })
    
  });
});

