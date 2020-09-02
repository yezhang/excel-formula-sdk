const assert = require('assert').strict;
const sinon = require('sinon');

const antlr4 = require('antlr4');

const SingleFormulaCore = require('platform/formula/core/SingleFormulaCore').SingleFormulaCore;
const SingleFormulaAST = require('platform/formula/core/SingleFormulaAST').SingleFormulaAST;

describe('语法树测试', function () {

  let FORMULA_LIST = [];
  // 在A列左侧插入一列后的公式，所有公式右移1列
  let FORMULA_TEXT_TRANSLATE_RIGHT_1_COL = [];

  // 删除A列后的公式，所有公式左移1列
  let FORMULA_TEXT_TRANSLATE_LEFT_1_COL = [];

  // 删除第一行数据，所有公式向上移动 1 行
  let FORMULA_TEXT_TRANSLATE_TOP_1_ROW = [];

  // 在第一行上方插入一行，所有的公式向下移动 1 行
  let FORMULA_TEXT_TRANSLATE_DOWN_1_ROW = [];

  beforeEach(function () {
    FORMULA_LIST = [
      '=IF(C7<E7,MIN(ABS(E7-C7),D7),0)',
      '=MIN(ROUND($G$5*E14,2), D14)',
      '=MAX(C33-D33,0)',
      '=MIN(A001主表!A1:B5)',
      '=ROUNDUP(MIN(C19*0.6,A101010一般企业收入明细表!C4*0.005),2)',
      '=IF(A105060广告费和业务宣传费跨年度纳税调整明细表!C15>0, 0, ABS(A105060广告费和业务宣传费跨年度纳税调整明细表!C15))'
    ];

    FORMULA_TEXT_TRANSLATE_RIGHT_1_COL = [
      '=IF(D7<F7,MIN(ABS(F7-D7),E7),0)',
      '=MIN(ROUND($H$5*F14,2), E14)',
      '=MAX(D33-F33,0)',
      '=MIN(A001主表!B1:C5)',
      '=ROUNDUP(MIN(D19*0.6,A101010一般企业收入明细表!D4*0.005),2)',
      '=IF(A105060广告费和业务宣传费跨年度纳税调整明细表!D15>0, 0, ABS(A105060广告费和业务宣传费跨年度纳税调整明细表!D15))'
    ];

    FORMULA_TEXT_TRANSLATE_LEFT_1_COL = [
      '=IF(B7<D7,MIN(ABS(D7-B7),C7),0)',
      '=MIN(ROUND($F$5*D14,2), C14)',
      '=MAX(B33-C33,0)',
      '=#REF!', // =#REF! ，=MIN(A001主表!A1:B5)
      '=ROUNDUP(MIN(B19*0.6,A101010一般企业收入明细表!B4*0.005),2)',
      '=IF(A105060广告费和业务宣传费跨年度纳税调整明细表!B15>0, 0, ABS(A105060广告费和业务宣传费跨年度纳税调整明细表!B15))'
    ];

    FORMULA_TEXT_TRANSLATE_TOP_1_ROW = [
      '=IF(C6<E6,MIN(ABS(E6-C6),D6),0)',
      '=MIN(ROUND($G$4*E13,2), D13)',
      '=MAX(C32-D32,0)',
      '=MIN(A001主表!A1:B4)', //TODO: =#REF!
      '=ROUNDUP(MIN(C18*0.6,A101010一般企业收入明细表!C3*0.005),2)',
      '=IF(A105060广告费和业务宣传费跨年度纳税调整明细表!C14>0, 0, ABS(A105060广告费和业务宣传费跨年度纳税调整明细表!C14))'
    ];

    FORMULA_TEXT_TRANSLATE_DOWN_1_ROW = [

      '=IF(C8<E8,MIN(ABS(E8-C8),D8),0)',
      '=MIN(ROUND($G$6*E15,2), D15)',
      '=MAX(C34-D34,0)',
      '=MIN(A001主表!A2:B6)',
      '=ROUNDUP(MIN(C20*0.6,A101010一般企业收入明细表!C5*0.005),2)',
      '=IF(A105060广告费和业务宣传费跨年度纳税调整明细表!C16>0, 0, ABS(A105060广告费和业务宣传费跨年度纳税调整明细表!C16))'
    ]

  });

  function assertTree(parseTree, ast) {
    let parsedStr = parseTree.getText();
    assert.strictEqual(parsedStr.substring(0, parsedStr.length - 5), ast.content.toString());
  }

  it('应成功构建语法树', function () {
    FORMULA_LIST.forEach(function (f) {
      let core = new SingleFormulaCore();
      let parseTree = core.parse(f);
      let ast = new SingleFormulaAST(parseTree);
      assertTree(parseTree, ast);
    })
  });

  describe('应变更单元格地址', function () {
    // 测试行地址的增加、删除
    it('insert 行地址', function () {
      let f = '=A1';
      let expected = '=B1'
      let core = new SingleFormulaCore();
      let parseTree = core.parse(f);
      let ast = new SingleFormulaAST(parseTree);

      
    });

    it('remove 行地址', function () {

    });

    // 测试列地址的增加、删除
    it('insert 列地址', function () {

    });

    it('remove 列地址', function () {

    });
  })


  describe('正确变更单元格范围', function () {
    it('插入行：在左上角之前插入行', function () {

    })

    it('插入行：在右下角之后插入行', function () {

    })

    it('插入行：在范围之间插入行', function () {

    })

    it('删除行', function () {

    })

    it('插入列：在左上角之前插入列', function () {

    })

    it('插入列：在右下角之后插入列', function () {

    })

    it('插入列：在范围之间插入列', function () {

    })

    it('删除列', function () {

    })
  })

});

