const assert = require('assert').strict;
const sinon = require('sinon');

const antlr4 = require('antlr4');
const { transform } = require('lodash');

const SingleFormulaCore = require('platform/formula/core/SingleFormulaCore').SingleFormulaCore;
const SingleFormulaAST = require('platform/formula/core/SingleFormulaAST').SingleFormulaAST;

const buildCellRefDecorator = require('platform/formula/cellAddressParts/common/CellAddressParts').buildCellRefDecorator;

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
      '=#REF!', //TODO: =#REF! =MIN(A001主表!A1:B5)
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

  function transform(formula, expected, operation, args) {

    let core = new SingleFormulaCore();
    let parseTree = core.parse(formula);

    let ast = new SingleFormulaAST(parseTree);

    // 收集受影响的单元格
    let cellRefNodes = ast.findAllCellRefNodes();

    let translatorList = cellRefNodes.map(function (cellRef) {
      return buildCellRefDecorator(cellRef);
    });

    // 修改单元格地址(在实际使用过程中，可能只有部分单元格地址需要更新)
    // 此处，假设所有单元格都需要更新。
    try {
      translatorList.forEach(function (translator) {
        if (Array.isArray(args)) {
          translator[operation].apply(translator, args);
        } else {
          translator[operation](args);
        }

      });
    } catch (e) {
      if (typeof expected === "string") {
        assert.strictEqual(e.message, expected);
      } else if (typeof expected === "function") {
        expected(e);
      }
      return;
    }

    // 引用方单元格公式自动更新
    let update = ast.toString();

    if (typeof expected === "string") {
      assert.strictEqual(update, expected);
    }

    if (typeof expected === "function") {
      expected(update);
    }
  }

  describe('应变更单元格地址', function () {
    /**
     * @param {String} operator 'translateUp', 'translateDown', 'translateLeft', 'translateRight'
     */

    // 测试行地址的增加、删除
    // 测试目的：验证单元格地址可以正确执行对应的移动。
    // 注意：对于某个单元格地址是否应发生变化，本测试用例不验证。假设公式中的所有单元格地址都收到影响并发生移动。
    // 测试期望：当变更 AST Node 上的节点时，其对应的文本表示可以正确更新。
    it('insert 行地址', function () {

      //
      // 引用方单元格公式定义（B1=A1）
      //           A         B         C
      // ────▶┌─────────┬─────────┬─────────┐
      //   1  │    *    │   =A1   │         │
      //      ├─────────┼─────────┼─────────┤
      //   2  │         │         │         │
      //      └─────────┴─────────┴─────────┘
      //
      //
      // 插入行之后：
      //           A         B         C
      //      ┌─────────┬─────────┬─────────┐
      //   1  │         │         │         │
      //      ├─────────┼─────────┼─────────┤
      //   2  │    *    │   =A2   │         │
      //      ├─────────┼─────────┼─────────┤
      //   3  │         │         │         │
      //      └─────────┴─────────┴─────────┘
      // 插入新行后，单元格 B1 变更为 B2, B2 应用的公式变更为 A2
      //
      let f = '=A1';
      let expected = '=A2'; // B2=A2
      transform(f, expected, 'translateDown', 1);
    });

    it('remove 行地址', function () {
      transform('=A2', '=A1', 'translateUp', 1);

      transform('=A1', function (err) {
        assert.throws(function () {
          throw err;
        }, {
          name: 'TranslateError',
          message: '已经是第一行，无法向上移动'
        });
      }, 'translateUp', 1);
    });

    // 测试列地址的增加、删除
    it('insert 列地址', function () {
      transform('=A2', '=B2', 'translateRight', 1);
    });

    it('remove 列地址', function () {
      transform('=B2', '=A2', 'translateLeft', 1);

      transform('=A2', function (err) {
        assert.throws(function () {
          throw err;
        }, {
          name: 'TranslateError',
          message: '已经是最左侧列，无法向左移动'
        });
      }, 'translateLeft', 1);
    });
  })


  describe('正确变更单元格范围', function () {

    it('插入行：在左上角之前插入行', function () {
      transform('=A1:B3', '=A2:B4', 'translateDown', 1);
    });

    it('插入行：在右下角之后插入行', function () {
      transform('=A1:B3', '=A1:B3', 'translateDown', 0);
    });

    it('插入行：在范围之间插入行', function () {

      //           A         B           C
      //      ┌─────────┬─────────┬─────────────┐
      //   1  │    *    │    *    │             │
      //      ├─────────┼─────────┼─────────────┤
      //   2  │    *    │    *    │ =SUM(A1:B3) │
      // ────▶├─────────┼─────────┼─────────────┤
      //   3  │    *    │    *    │             │
      //      └─────────┴─────────┴─────────────┘
      //
      //           A         B           C
      //      ┌─────────┬─────────┬─────────────┐
      //   1  │    *    │    *    │             │
      //      ├─────────┼─────────┼─────────────┤
      //   2  │    *    │    *    │ =SUM(A1:B4) │
      //      ├─────────┼─────────┼─────────────┤
      //   3* │   ***   │   ***   │             │
      //      ├─────────┼─────────┼─────────────┤
      //   4  │    *    │    *    │             │
      //      └─────────┴─────────┴─────────────┘
      // 移动范围的右下角单元格引用
      transform('=A1:B3', '=A1:B4', 'insertRows', [3, 1]);

      transform('=A1:B3', '=A1:B5', 'insertRows', [2, 2]);
    });

    it('删除行', function () {
      //         A         B           C
      //    ┌─────────┬─────────┬─────────────┐
      // 1  │         │         │             │
      //    ├─────────┼─────────┼─────────────┤
      // 2  │    *    │    *    │             │
      //    ├─────────┼─────────┼─────────────┤
      // 3  │    *    │    *    │             │
      //    ├─────────┼─────────┼─────────────┤
      // 4  │    *    │    *    │             │
      //    ├─────────┼─────────┼─────────────┤
      // 5  │         │         │ =SUM(A2:B4) │
      //    └─────────┴─────────┴─────────────┘

      // 移除范围 [startRow = 1, num = 1]
      transform('=SUM(A2:B4)', '=SUM(A1:B3)', 'removeRows', [1, 1]);
      // 移除范围 [startRow = 2, num = 1]
      transform('=SUM(A2:B4)', '=SUM(A2:B3)', 'removeRows', [2, 1]);
      // 移除范围 [startRow = 3, num = 1]
      transform('=SUM(A2:B4)', '=SUM(A2:B3)', 'removeRows', [3, 1]);
      // 移除范围 [startRow = 4, num = 1]
      transform('=SUM(A2:B4)', '=SUM(A2:B3)', 'removeRows', [4, 1]);
      // 移除范围 [startRow = 5, num = 1], 单元格范围不受影响
      transform('=SUM(A2:B4)', '=SUM(A2:B4)', 'removeRows', [5, 1]);

      // 移除范围 [startRow = 1, num = 2]
      transform('=SUM(A2:B4)', '=SUM(A1:B2)', 'removeRows', [1, 2]);
      // 移除范围 [startRow = 2, num = 2]
      transform('=SUM(A2:B4)', '=SUM(A2:B2)', 'removeRows', [2, 2]);
      // 移除范围 [startRow = 3, num = 2]
      transform('=SUM(A2:B4)', '=SUM(A2:B2)', 'removeRows', [3, 2]);
      // 移除范围 [startRow = 4, num = 2]
      transform('=SUM(A2:B4)', '=SUM(A2:B3)', 'removeRows', [4, 2]);


      // 移除范围 [startRow = 1, num = 3]
      transform('=SUM(A2:B4)', '=SUM(A1:B1)', 'removeRows', [1, 3]);
      // 移除范围 [startRow = 2, num = 3]
      transform('=SUM(A2:B4)', function(excep){
        assert.throws(function() {throw excep;}, {
          name: 'TranslateError',
          message: '单元格范围将被删除'
        });
      }, 'removeRows', [2, 3]);

      // 移除范围 [startRow = 3, num = 3]
      transform('=SUM(A2:B4)', '=SUM(A2:B2)', 'removeRows', [3, 3]);
      // 移除范围 [startRow = 4, num = 3]
      transform('=SUM(A2:B4)', '=SUM(A2:B3)', 'removeRows', [4, 3]);
      // 移除范围 [startRow = 5, num = 3], 单元格范围不受影响
      transform('=SUM(A2:B4)', '=SUM(A2:B4)', 'removeRows', [5, 3]);
    });

    it('插入列：在左上角之前插入列', function () {
      //
      //    │
      //    │
      //    ▼    A         B           C
      //    ┌─────────┬─────────┬─────────────┐
      // 1  │    *    │    *    │             │
      //    ├─────────┼─────────┼─────────────┤
      // 2  │    *    │    *    │ =SUM(A1:B3) │
      //    ├─────────┼─────────┼─────────────┤
      // 3  │    *    │    *    │             │
      //    └─────────┴─────────┴─────────────┘
      //

      // 插入范围 [beforeWhich='A', num=1]
      transform('=SUM(A1:B3)', '=SUM(B1:C3)', 'insertColumns', [1, 1]);
      transform('=SUM(A1:B3)', '=SUM(B1:C3)', 'insertColumns', ['A', 1]);

      // 插入范围 [beforeWhich='A', num=3]
      transform('=SUM(A1:B3)', '=SUM(D1:E3)', 'insertColumns', [1, 3]);
      transform('=SUM(A1:B3)', '=SUM(D1:E3)', 'insertColumns', ['A', 3]);

      // 插入范围 [beforeWhich='B', num=1]
      transform('=SUM(A1:B3)', '=SUM(A1:C3)', 'insertColumns', [2, 1]);
      transform('=SUM(A1:B3)', '=SUM(A1:C3)', 'insertColumns', ['B', 1]);

      // 插入范围 [beforeWhich='B', num=2]
      transform('=SUM(A1:B3)', '=SUM(A1:D3)', 'insertColumns', [2, 2]);
      transform('=SUM(A1:B3)', '=SUM(A1:D3)', 'insertColumns', ['B', 2]);

      // 插入范围 [beforeWhich='C', num=1], 没有影响
      transform('=SUM(A1:B3)', '=SUM(A1:B3)', 'insertColumns', [3, 1]);
      transform('=SUM(A1:B3)', '=SUM(A1:B3)', 'insertColumns', ['C', 1]);
    });

    it('删除列', function () {
      //
      //         A         B         C           D
      //    ┌─────────┬─────────┬─────────┬─────────────┐
      // 1  │         │         │         │             │
      //    ├─────────┼─────────┼─────────┼─────────────┤
      // 2  │         │    *    │    *    │             │
      //    ├─────────┼─────────┼─────────┼─────────────┤
      // 3  │         │    *    │    *    │             │
      //    ├─────────┼─────────┼─────────┼─────────────┤
      // 4  │         │    *    │    *    │             │
      //    ├─────────┼─────────┼─────────┼─────────────┤
      // 5  │         │         │         │ =SUM(B2:C4) │
      //    └─────────┴─────────┴─────────┴─────────────┘
      //

      // 插入范围 [startColumn='A', num=1]
      transform('=SUM(B2:C4)', '=SUM(A2:B4)', 'removeColumns', [1, 1]);
      transform('=SUM(B2:C4)', '=SUM(A2:B4)', 'removeColumns', ['A', 1]);
    });
  })

});

