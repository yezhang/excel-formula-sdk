/**
 * 对于所有公开 API 的测试。
 */
const expect = require('chai').expect;
const _ = require('lodash');
const { WorkBookContext, FormulaEngine } = require('platform/formula/FormulaEngine');

/**
 * 测试常见场景：
 * (1) 表内公式
 * (2) 表间公式
 */
describe('编辑器', function () {
  describe('设计态-编辑器文本内容变化 - onDidContentChange', function () {
    // 公式单元格高亮
    // 变量高亮、公式自动补全、错误提示

  });
})

describe('公式引擎-常用场景', function () {
  describe('设计态', function () {
    let engine;
    beforeEach(function () {
      engine = new FormulaEngine();
    });

    afterEach(function () {
      delete engine;
    });

    it('设计态-单元格输入错误的公式', function () {
      let context = new WorkBookContext('sheet1');
      let A1CellRef = { column: 1, row: 1 }; // A1 = B1
      let A1FormulaText = '=B1+';

      expect(function () {
        engine.setCellFormula(context, A1CellRef, A1FormulaText);
      }).to.throw('输入的公式存在错误');
    });

    it('重复设置公式+插入列', function () {
      // 测试用例说明：
      // 1) B2 = A1 + B1 + C1
      // 2) 选择 A 列，向右 增加 1 列。insert column: beforeWhich = 2
      // 3) 期待: C2 = A1 + C1 + D1
      // 4) 重新设置 C2 = A1 + C1 + D1;
      // 5) 期待: C2 = A1 + C1 + D1

      let context = new WorkBookContext('sheet1');
      const B2CellRef = { column: 2, row: 2 };
      // B2 = A1 + B1 + C1
      engine.setCellFormula(context, B2CellRef, '= A1 + B1 + C1');
      let affactedCells = engine.addColumns(context, 2, 1);
      expect(affactedCells).to.have.lengthOf(1);

      const C2CellRef = { column: 3, row: 2 };
      const expectedC2Formula = '=A1+C1+D1';
      let C2Fromula = engine.getCellFormula(context, C2CellRef);
      expect(C2Fromula).to.equal(expectedC2Formula);

      engine.setCellFormula(context, C2CellRef, expectedC2Formula);
      C2Fromula = engine.getCellFormula(context, C2CellRef);
      expect(C2Fromula).to.equal(expectedC2Formula);
    });

    it('重复设置公式+插入行', function () {
      // 测试用例说明：
      // 1) B2 = A1 + B1 + C1
      // 2) 选择第一行，向上 增加 1 行。insert row: beforeWhich = 1
      // 3) 期待: B3 = A2 + B2 + C2
      // 4) 重新设置 B3 = A2 + B2 + C2
      // 5) 期待: B3 = A2 + B2 + C2

      let context = new WorkBookContext('sheet1');
      const B2CellRef = { column: 2, row: 2 };
      // B2 = A1 + B1 + C1
      engine.setCellFormula(context, B2CellRef, '= A1 + B1 + C1');
      let affactedCells = engine.addRows(context, 1, 1);
      expect(affactedCells).to.have.lengthOf(1);

      const B3 = { column: 2, row: 3 };
      const expectedC2Formula = '=A2+B2+C2';
      let f = engine.getCellFormula(context, B3);
      expect(f).to.equal(expectedC2Formula);

      engine.setCellFormula(context, B3, expectedC2Formula);
      f = engine.getCellFormula(context, B3);
      expect(f).to.equal(expectedC2Formula);
    });

    it('公式自动填充', function () {
      let context = new WorkBookContext('sheet1');
      let f = '=SUM(A1:B2)';
      let other = engine.autofillDown(context, f, 1);
      expect(other).to.equal('=SUM(A2:B3)');
    });

    it('设计态-携带括号的公式', function () {
      let context = new WorkBookContext('sheet1');
      // 用例：带括号的公式
      // 设置公式 I6  =(E6*F6-G6)*H6
      let I6 = { c: 'I', r: '6' };
      let I6_f = '=(E6*F6-G6)*H6';
      engine.setCellFormula(context, I6, I6_f);
      innerFormula = engine.getCellFormula(context, I6);
      expect(innerFormula).to.equal(I6_f);

    })
    it('设计态-单元格输入公式完毕（纯单元格地址）', function () {
      let context = new WorkBookContext('sheet1');
      let A1CellRef = { column: 1, row: 1 }; // A1 = B1
      let A1FormulaText = '=B1';
      engine.setCellFormula(context, A1CellRef, A1FormulaText);

      let innerFormula = engine.getCellFormula(context, A1CellRef);
      expect(innerFormula).to.equal(A1FormulaText);


      let C1CellRef = { column: 3, row: 1 }; // C1 = D1
      let C1FormulaText = '=D1';
      engine.setCellFormula(context, C1CellRef, C1FormulaText);

      innerFormula = engine.getCellFormula(context, C1CellRef);
      expect(innerFormula).to.equal(C1FormulaText);


      let B1CellRef = { column: 2, row: 1 }; // B1 = C1 * 0.5
      let B1FormulaText = '=C1 * 0.5';
      engine.setCellFormula(context, B1CellRef, B1FormulaText);

      innerFormula = engine.getCellFormula(context, B1CellRef);
      // 获取到的公式会重新被格式化，移除不必要的空格
      expect(innerFormula).to.equal(B1FormulaText.replace(/\s/g, ''));
    });

    it('设计态-单元格输入公式完毕（单元格范围）', function () {
      let context = new WorkBookContext('sheet1');
      let A1CellRef = { column: 1, row: 1 }; // A1
      engine.setCellFormula(context, A1CellRef, '=B1');
    });

    it('设计态-调整表结构-插入行', function () {
      // 测试用例：
      // 调整表结构后，受影响的单元格公式需要更新，指向新的单元格地址。
      // 验证调整后受影响的单元格公式

      let context = new WorkBookContext('sheet1');
      let A1CellRef = { column: 1, row: 1 }; // A1 = B1
      let A1FormulaText = '=B1';
      engine.setCellFormula(context, A1CellRef, A1FormulaText);

      // 插入行，1 行前面插入 1 行
      let updatedCellAddressList = engine.addRows(context, 1, 1);

      let A2CellRef = { column: 1, row: 2 }; // A2 = B2
      let A2FormulaTextUpdated = '=B2';
      let innerFormula = engine.getCellFormula(context, A2CellRef);
      expect(innerFormula).to.equal(A2FormulaTextUpdated);

      expect(updatedCellAddressList[0]).to.have.property('column', 1);
      expect(updatedCellAddressList[0]).to.have.property('row', 2);
    });

    it('设计态-调整表结果-插入行（单元格范围)', function () {
      // 测试用例描述:
      // 1) C2 = SUM(A1:B2)
      // 2) 选择第 1 行，向上增加 1 行
      // 3) 期待 C3 = SUM(A2:B3)

      let context = new WorkBookContext('sheet1');
      let C2 = { column: 3, row: 2 }; // C2 = SUM(A1:B2)
      let f = '= SUM(A1:B2)'
      engine.setCellFormula(context, C2, f);

      let updatedCellAddressList = engine.addRows(context, 1, 1);
      let C3 = { column: 3, row: 3 };
      let innerFormula = engine.getCellFormula(context, C3);
      expect(innerFormula).to.equal('=SUM(A2:B3)');

      expect(updatedCellAddressList[0]).to.have.property('column', 3);
      expect(updatedCellAddressList[0]).to.have.property('row', 3);
    })

    it('设计态-调整表结构-删除行（单元格范围）', function () {
      // 测试用例描述：
      // 1) C2 = SUM(A1:B3)
      // 2) 选择第三行，删除一行
      // 3) 期待：C2 = SUM(A1:B2); 依赖图中包含 2 个节点，一个 C2，一个 A1:B2

      let context = new WorkBookContext('sheet1');
      let C2 = { column: 3, row: 2 }; // C2 =SUM(A1:B3)
      engine.setCellFormula(context, C2, '=SUM(A1:B3)');

      engine.removeRows(context, 3, 1);

      let innerFormula = engine.getCellFormula(context, C2);
      expect(innerFormula).to.equal('=SUM(A1:B2)');

    })

    it('设计态-调整表结构-删除行（没有删除单元格）', function () {
      // 测试用例：
      // 调整表结构后，受影响的单元格公式需要更新，指向新的单元格地址。
      // 验证调整后受影响的单元格公式
      let context = new WorkBookContext('sheet1');
      let A2CellRef = { column: 1, row: 2 }; // A2 = B2
      let A2FormulaText = '=B2';
      engine.setCellFormula(context, A2CellRef, A2FormulaText);

      // 删除行，从 1 行开始，删除 1 行
      let updatedCellAddressList = engine.removeRows(context, 1, 1);

      let A1CellRef = { column: 1, row: 1 }; // A1 = B1
      let A1FormulaTextUpdated = '=B1';
      let innerFormula = engine.getCellFormula(context, A1CellRef);
      expect(innerFormula).to.equal(A1FormulaTextUpdated);

      expect(updatedCellAddressList[0]).to.have.property('column', 1);
      expect(updatedCellAddressList[0]).to.have.property('row', 1);

    });

    it('设计态-调整表结构-删除行（删除了单元格）', function () {
      // 测试用例：
      // 调整表结构后，单元格被删除
      // 验证调整后依赖图中没有节点

      let context = new WorkBookContext('sheet1');
      let A2CellRef = { column: 1, row: 2 }; // A2 = B2
      let A2FormulaText = '=B2';
      engine.setCellFormula(context, A2CellRef, A2FormulaText);

      // 删除行，从 1 行开始，删除 1 行
      let updatedCellAddressList = engine.removeRows(context, 1, 2);
      expect(updatedCellAddressList).to.have.lengthOf(0);

      // 再次设置公式
      engine.setCellFormula(context, A2CellRef, A2FormulaText);
      // 删除后没有影响单元格
      updatedCellAddressList = engine.removeRows(context, 3, 2);

      let innerFormula = engine.getCellFormula(context, A2CellRef);
      expect(innerFormula).to.equal(A2FormulaText);
    });

    it('设计态-调整表结构-删除浮动行', function () {
      // （1）设置公式 A1 = SUM(A2->A3)，B2 = A2，B3 = A3，B4 = A4，其中第2、3行为浮动行。
      // （2）选中第 3 行，执行删除浮动行，删除一行，调用 shrinkFloatRows 方法执行删除浮动行动作。
      // （3）受影响公式单元格为 A1，B3，期待 A1 = SUM(A2->A2)，B3(原B4) = A3。
      let context = new WorkBookContext('sheet1');
      let A1CellRef = { column: 1, row: 1 }; // A1
      let A1FormulaText = '=SUM(A2->A3)';
      let B2CellRef = { column: 2, row: 2 }; // B2
      let B2FormulaText = '=A2';
      let B3CellRef = { column: 2, row: 3 }; // B3
      let B3FormulaText = '=A3';
      let B4CellRef = { column: 2, row: 4 }; // B4
      let B4FormulaText = '=A4';
      engine.setCellFormula(context, A1CellRef, A1FormulaText);
      engine.setCellFormula(context, B2CellRef, B2FormulaText);
      engine.setCellFormula(context, B3CellRef, B3FormulaText);
      engine.setCellFormula(context, B4CellRef, B4FormulaText);

      // 删除1行，从 3 行开始，删除 1 行
      let updatedCellAddressList = engine.shrinkFloatRows(context, 3, 1);
      expect(updatedCellAddressList).to.have.lengthOf(2);

      let A1f = engine.getCellFormula(context, A1CellRef);
      console.log("🚀 ~ file: FormulaEngine.test.js ~ line 270 ~ A1f", A1f)
      expect(A1f).to.equal('=SUM(A2->A2)');

      let B3f = engine.getCellFormula(context, B3CellRef);
      console.log("🚀 ~ file: FormulaEngine.test.js ~ line 274 ~ B3f", B3f)
      expect(B3f).to.equal('=A3');

    });

    it('设计态-调整表结构-插入列', function () {
      // 测试用例：
      // 调整表结构后，受影响的单元格公式需要更新，指向新的单元格地址。
      // 验证调整后受影响的单元格公式
      let context = new WorkBookContext('sheet1');
      let A2CellRef = { column: 1, row: 2 }; // A2 = B2
      let A2FormulaText = '=B2';
      engine.setCellFormula(context, A2CellRef, A2FormulaText);

      // 插入行，B 列前面插入 1 列
      let updatedCellAddressList = engine.addColumns(context, 2, 1);
      expect(updatedCellAddressList[0]).to.include({
        column: 1, row: 2
      });

      let f = engine.getCellFormula(context, updatedCellAddressList[0]);
      expect(f).to.equal('=C2');

    });

    it('设计态-调整表结构-删除列', function () {
      // 测试用例：
      // 调整表结构后，受影响的单元格公式需要更新，指向新的单元格地址。
      // 验证调整后受影响的单元格公式

      let context = new WorkBookContext('sheet1');
      let C1CellRef = { column: 3, row: 1 }; // C1 = B1
      let C1FormulaText = '=B1';
      engine.setCellFormula(context, C1CellRef, C1FormulaText);

      // 从 A 列开始，删除 1 列
      // 公式变为 B1 = A1
      const affactedCells = engine.removeColumns(context, 1, 1);

      expect(affactedCells).to.have.lengthOf(1);

      let formula = engine.getCellFormula(context, affactedCells[0]);
      expect(formula).to.equal('=A1');
    });

    it('设计态-调整表结构-表名重命名', function () {
      // 测试用例描绘：
      // (1), 活动工作表, sheet1
      // (2), 设置公式 A1 = sheet2!B1 * 2
      // (3), sheet2!B1 = 3;
      // (4), 期待 A1 = 6.
      // (5), 重命名 sheet2 为 sheet3
      // (6), 期待 A1 公式变更为 sheet3!B1 * 2
      // (7)，重命名 sheet1 为 sheet2
      // (8), 期待 sheet2!A1 的公式为 sheet3!B1 * 2

      let context = new WorkBookContext('sheet1');
      let A1 = { column: 1, row: 1 }; // A1 = sheet2!B1 * 2
      let f = '= sheet2!B1 * 2';
      engine.setCellFormula(context, A1, f);

      // sheet1
      // sheet2 --> sheet3
      engine.renameSheet(context, 'sheet2', 'sheet3');
      const updateF1 = engine.getCellFormula(context, A1);

      const expectedF = '=sheet3!B1*2';
      expect(updateF1).to.equal(expectedF);

      engine.renameSheet(context, 'sheet1', 'sheet2');
      context = new WorkBookContext('sheet2');

      const updateF2 = engine.getCellFormula(context, A1);
      expect(updateF2).to.equal(expectedF);
    })
  });

  describe('运行态', function () {
    let engine;
    let context = undefined;
    function SimpleEngine() { }

    function rebuildSimpleEngine() {
      let innerEngine = new FormulaEngine();
      SimpleEngine.prototype = innerEngine;
      innerEngine.constructor = SimpleEngine;

      function _parseCellAddrWhenString(cellAddr) {
        let fullCellAddr = undefined;
        if (typeof cellAddr === 'string') {
          const rx = /([a-zA-Z]+)(\d+)/g;
          const groups = rx.exec(cellAddr);
          const c = groups[1];
          const r = groups[2];

          fullCellAddr = {
            column: c, row: r
          };
        } else {
          fullCellAddr = cellAddr;
        }


        return fullCellAddr;
      }
      SimpleEngine.prototype.setf = function setCellFormula(workBookContext, cellAddr, formula) {
        let fullCellAddr = _parseCellAddrWhenString(cellAddr);
        return SimpleEngine.prototype.setCellFormula.call(this, workBookContext, fullCellAddr, formula);
      }
      SimpleEngine.prototype.getf = function getCellFormula(workBookContext, cellAddr) {
        let fullCellAddr = _parseCellAddrWhenString(cellAddr);
        return SimpleEngine.prototype.getCellFormula.call(this, workBookContext, fullCellAddr);
      }

    }
    beforeEach(function () {
      rebuildSimpleEngine();

      engine = new SimpleEngine();

      context = new WorkBookContext('sheet1');
    });

    it('公式求值-正确求值', function () {
      const cellValueProvider = {
        getCellValue: function (cell) {
          // C7 = 5, column = 3, row = 7
          if (cell.column === 3) {
            return 5;
          }

          // D7 = 6, column = 4, row = 7
          if (cell.column === 4) {
            return 6;
          }

          // E7 = 7, column = 5, row = 7
          if (cell.column === 5) {
            return 7;
          }
        },
        getCellRangeValues: function (cellRange) {

        }
      };
      const A1CellRef = {
        column: 1,
        row: 1
      }

      // A1=IF(C7<E7,MIN(ABS(E7-C7),D7),0)
      engine.setCellFormula(context, A1CellRef, '=IF(C7<E7,MIN(ABS(E7-C7),D7),0)');

      let ret = undefined;

      try {
        engine.prepareToEvaluateTable(cellValueProvider);
        ret = engine.evaluate(context, A1CellRef);
      } catch (e) {
        ret = e.getResult();
      }

      expect(ret).to.equal(2);
    });

    it('公式求值-全部单元格自动求值', function () {
      // 测试用例描述：
      // Step1. 设置公式 A2 = A1
      // Step2, set A1 = 1;
      // 全部重新计算
      const cellValueProvider = {
        getCellValue: function (cell) {
          // A1, column = 1, row = 1
          if (cell.row == 1) {
            return 1;
          }
        },
        getCellRangeValues: function (cellRange) {

        },
        setCellValue: function (cell, value) {

        }
      };
      const A2CellRef = { column: 1, row: 2 };
      // A2=A1
      engine.setCellFormula(context, A2CellRef, '=A1');

      engine.prepareToEvaluateTable(cellValueProvider);
      engine.evaluateAll(context); // 执行全部公式的重算。
    });

    it('只计算受影响的单元格', function () {
      // 测试用例描述：
      // 1) 设置公式 A1 = B1; B1 = C1; B2 = C2;
      // 2) 设置 C1 的值
      // 3) 期待：只计算 B1, A1 单元格处的公式, B2 不应该计算。

      const cellValueProvider = {
        getCellValue: function (cell) {
          if (cell.column === 2 && cell.row === 2) {
            expect.fail('B2 发生了计算');
          }

          if (cell.column === 3 && cell.row === 1) {
            // C1
            return 1;
          }

          if (cell.column === 2 && cell.row === 1) {
            // B1
            return 1;
          }
        },
        getCellRangeValues: function (cellRange) {

        },
        setCellValue: function (cell, value) {

        }
      };

      // A1 = B1; B1 = C1; B2 = C2;
      const A1 = { column: 1, row: 1 };
      engine.setCellFormula(context, A1, '=B1');

      const B1 = { column: 2, row: 1 };
      engine.setCellFormula(context, B1, '=C1');

      const B2 = { column: 2, row: 2 };
      engine.setCellFormula(context, B2, '=C2');

      // set C1
      const C1 = { column: 3, row: 1 };
      engine.prepareToEvaluateTable(cellValueProvider);
      engine.reEvaluateAll(context, C1);
    });

    it('公式求值-计算错误-除数为0', function () {
      // 常见的公式错误有：src/platform/formula/cellEvaluation/EvaluationErrors.js
      // 
      // 测试用例描述:
      // 1) A1 = 1 / B2;
      // 2) 设置 B2 = 0
      // 3) 计算 A1 出错。
      const A1 = { column: 1, row: 1 };

      const cellValueProvider = {
        getCellValue: function (cell) {
          if (cell.column === 2 && cell.row === 2) {
            return 0;
          }
        }
      };

      engine.setCellFormula(context, A1, '= 1/B2');
      engine.prepareToEvaluateTable(cellValueProvider);
      let ret = undefined;
      expect(function () {
        try {
          ret = engine.evaluate(context, A1);
        } catch (e) {
          ret = e.getResult();
          throw e;
        };
      }).to.throw();

      expect(ret).to.equal("#DIV/0!");

    });

    it('公式求值-浮动单元格的值', function () {
      // 测试用例描述
      // 1) 设置公式 B1 = SUM(A7->A7)
      // 2) 设置浮动单元格范围是 A7:A8
      // 3) 填写浮动单元格的值，A7 = 1, A8 = 2
      // 期待：B1 的值为 =SUM([1, 2]) = 3;
      const cellValueProvider = {
        getCellFloatRangeValues(cellRange) {
          let start = cellRange.start;
          let end = cellRange.end;
          expect(start.column).to.equal(1);
          expect(start.row).to.equal(7);
          return [1, 2];
        }
      };

      const B1 = { column: 2, row: 1 };
      engine.setCellFormula(context, B1, '=SUM(A7->A7)');
      engine.prepareToEvaluateTable(cellValueProvider);
      let ret = engine.evaluate(context, B1);
      expect(ret).to.equal(3);
    })

    it('运行态-调整表结构-增加浮动行（浮动行有普通公式）', function () {
      // 测试用例描述：
      // 1) 设置公式 B1 =SUM(B2->B2), D1 =B1+C1
      // 2) 设置公式 D2 =B2+C2
      // 3) 设置公式 B3 =SUM(B4->B4), D3 =B3+C3
      // 3) 选中第二行，增加 1 个浮动行，即目的是 B2->B2 变更为 B2->B3
      // 预期：B1 =SUM(B2->B3), B4 =SUM(B5->B5), D4 =B4+C4; 
      // D1 处公式不变，为 =B1+C1, D2 =B2+C2

      engine.setf(context, 'B1', '=SUM(B2->B2)');
      engine.setf(context, 'D1', '=B1+C1');
      engine.setf(context, 'D2', '=B2+C2');
      engine.setf(context, 'B3', '=SUM(B4->B4)');
      engine.setf(context, 'D3', '=B3+C3');

      let affactedCells = engine.expandFloatRows(context, 2, 1);

      // B1/B4/D4 地址受到影响，需要重算。
      expect(affactedCells).to.have.lengthOf(3);

      expect(engine.getf(context, 'B1')).to.equal('=SUM(B2->B3)');
      expect(engine.getf(context, 'B4')).to.equal('=SUM(B5->B5)');
      expect(engine.getf(context, 'D4')).to.equal('=B4+C4');

      expect(engine.getf(context, 'D1')).to.equal('=B1+C1');
      expect(engine.getf(context, 'D2')).to.equal('=B2+C2');


    });

    it('运行态-调整表结构-增加浮动行', function () {
      // 测试用例描述：
      // 1) 设置公式 B1 =SUM(A1->A1)+SUM(A1:A1)
      // 2) 设置公式 B2 =SUM(A5->A5)
      // 3) 在第二行增加浮动行的范围，即 A1->A1 变更为 A1->A2
      // 预期：B1 =SUM(A1->A2)+SUM(A1:A1), B3 =SUM(A6->A6)

      const B1 = { column: 2, row: 1 };
      engine.setCellFormula(context, B1, '=SUM(A1->A1)+SUM(A1:A1)');

      const B2 = { column: 2, row: 2 };
      engine.setCellFormula(context, B2, '=SUM(A5->A5)');

      // 选中浮动区域中的一行
      let affactedCells = engine.expandFloatRows(context, 1, 1);
      expect(affactedCells[0]).to.include(B1);

      // 判断数组中至少要包含元素 B1、B2
      expect(_.some(affactedCells, B1)).to.be.true;
      let innerFormula = engine.getCellFormula(context, B1);
      expect(innerFormula).to.equal('=SUM(A1->A2)+SUM(A1:A1)');

      const B3 = { column: 2, row: 3 };
      expect(_.some(affactedCells, B3)).to.be.true;
      innerFormula = engine.getCellFormula(context, B3);
      expect(innerFormula).to.equal('=SUM(A6->A6)');
    })

    it('运行态-调整表结构-移除浮动行', function () {
      // 测试用例描述：
      // 1) 设置公式 B1 =SUM(A2->A3)+SUM(A1:A1)
      // 2) 设置公式 B2 =SUM(A8->A8)
      // 3) 在第 3 行移除 2 行的浮动行范围，即 A2->A3 变更为 A2->A2
      // 预期：B1 =SUM(A2->A2)+SUM(A1:A1), B2 =SUM(A6->A6)

      const B1 = { column: 2, row: 1 };
      engine.setCellFormula(context, B1, '=SUM(A2->A3)+SUM(A1:A1)');

      const B2 = { column: 2, row: 2 };
      engine.setCellFormula(context, B2, '=SUM(A8->A8)');

      // 选中浮动区域中的一行
      engine.shrinkFloatRows(context, 3, 2);

      let innerFormula = engine.getCellFormula(context, B1);
      expect(innerFormula).to.equal('=SUM(A2->A2)+SUM(A1:A1)');

      innerFormula = engine.getCellFormula(context, B2);
      expect(innerFormula).to.equal('=SUM(A6->A6)');

    })
    it('公式求值-浮动单元格的值-重算', function () {

    })
  })


  describe('表内公式', function () {

    let engine;
    let context
    beforeEach(function () {
      engine = new FormulaEngine();
      context = new WorkBookContext('sheet1');
    });

    it('自动填充公式-上、下、左、右', function () {
      // f = C3 + D3 + SUM(C3:D3)
      let f = '= C3 + D3 + SUM(C3:D3) + MIN($C3:D$3)';
      let context = new WorkBookContext('sheet1');

      // UP
      // f = C2 + D2 + SUM(C2:D2) + MIN($C2:D$3)
      const upF = '=C2+D2+SUM(C2:D2)+MIN($C2:D$3)';
      let upRet = engine.autofillUp(context, f, 1)
      expect(upRet).to.equal(upF);

      // DOWN
      // f = C4 + D4 + SUM(C4:D4) + MIN($C4:D$3)
      const downF = '=C4+D4+SUM(C4:D4)+MIN($C4:D$3)';
      let downRet = engine.autofillDown(context, f, 1);
      expect(downRet).to.equal(downF);

      // LEFT
      // f = B3 + C3 + SUM(B3:C3) + MIN($C3:C$3)
      const leftF = '=B3+C3+SUM(B3:C3)+MIN($C3:C$3)';
      let leftRet = engine.autofillLeft(context, f, 1);
      expect(leftRet).to.equal(leftF);

      // RIGHT
      // r = D3 + E3 + SUM(D3:E3) + MIN($C3:E$3)
      const rightF = '=D3+E3+SUM(D3:E3)+MIN($C3:E$3)';
      let rightRet = engine.autofillRight(context, f, 1);
      expect(rightRet).to.equal(rightF);
    })

    it('函数调用', function () {
      // 测试用例描述：
      // 1) B1 = SUM(A1+A2), A1 = 1, A2 = 2;
      // 2) 计算 B1 的值


      let B1Ret = undefined;
      const cellValueProvider = {
        datas: [[1, 2]],
        getCellValue: function (cell) {
          return this.datas[cell.column - 1][cell.row - 1];
        },
        getCellRangeValues: function (cellRange) {
          return this.datas[cellRange.start.column - 1];
        },
        setCellValue: function (cell, value) {
          B1Ret = value;
        }
      };

      // B1 = SUM(A1+A2)
      const B1 = { column: 2, row: 1 };
      engine.setCellFormula(context, B1, '= SUM(A1:A2)');
      engine.prepareToEvaluateTable(cellValueProvider);
      B1Ret = engine.evaluate(context, B1);
      expect(B1Ret).to.equal(3)

      // 测试自动重新计算
      // 设置 A1 = 3;
      // 期待 B1 = 5;
      const A1 = { column: 1, row: 1 };
      cellValueProvider.datas[A1.column - 1][A1.row - 1] = 3;
      engine.reEvaluateAll(context, A1);

      expect(B1Ret).to.equal(5);
    });

    it('无依赖关系的单元格', function () {
      // 测试用例描述：
      // 1) 设置 A3 = A1 + A2;
      // 2) 编辑单元格 A1，期待公式正确计算
      // 3) 编辑单元格 A4，期待公式不计算

      let context = new WorkBookContext('sheet1');
      let A3Ret = undefined;
      const cellValueProvider = {
        datas: [[1, 2]],
        getCellValue: function (cell) {
          return this.datas[cell.column - 1][cell.row - 1];
        },
        getCellRangeValues: function (cellRange) {
          return this.datas[cellRange.start.column - 1];
        },
        setCellValue: function (cell, value) {
          A3Ret = value;
        }
      };

      // A3 = A1 + A2
      const A3 = { column: 1, row: 3 };
      engine.setCellFormula(context, A3, '=A1 + A2');
      engine.prepareToEvaluateTable(cellValueProvider);
      A3Ret = engine.evaluate(context, A3);
      expect(A3Ret).to.equal(3)

      const A4 = { column: 1, row: 4 };
      expect(function () {
        engine.reEvaluateAll(context, A4);
      }).to.not.throw();

    })

    it('公式单元格支持用户输入', function () {
      // 测试用例描述：
      // 1) A1 =SUM(A2->A2)
      // 2) C1 =A1+B1
      // 3) 修改 A2 的值，执行联动计算，A1、C1 被计算
      // 4) 修改 A1 的值，执行联动计算，C1 被计算，A1 不被计算。

      engine.setCellFormula(context, { c: 'A', r: '1' }, '=SUM(A2->A2)');
      engine.setCellFormula(context, { c: 'C', r: '1' }, '=A1+B1');

      let fetchOperationCount = 0;
      let fetchOperationCellList = [];
      const cellValueProvider = {
        getCellValue: function (cell) {
          fetchOperationCount++;
          fetchOperationCellList.push(cell);
          return 0;
        },
        getCellRangeValues: function (cellRange) {
          fetchOperationCount++;
          fetchOperationCellList.push(cellRange);
          return [0]
        },
        getCellFloatRangeValues: function (cellRange) {
          fetchOperationCount++;
          fetchOperationCellList.push(cellRange);
          return [0];
        },
        setCellValue: function (cell, value) {

        }
      };

      engine.prepareToEvaluateTable(cellValueProvider);


      // 修改 A2
      fetchOperationCount = 0;
      fetchOperationCellList = [];
      engine.reEvaluateAll(context, { c: 1, r: 2 });
      expect(fetchOperationCount).to.equal(3);


      // 修改 A1
      fetchOperationCount = 0;
      fetchOperationCellList = [];
      engine.reEvaluateAll(context, { c: 1, r: 1 });
      expect(fetchOperationCount).to.equal(2);

    })
    it('浮动行联动计算', function () {
      //           A              B              C
      //    ┌──────────────┬──────────────┬─────────────┐
      // 1  │ =SUM(A2->A2) │ =SUM(B2->B2) │  =A1+B1     │
      //    ├──────────────┼──────────────┼─────────────┤
      // 2  │      **      │              │  =A2+B2     │
      //    ├──────────────┼──────────────┼─────────────┤
      // 3  │              │              │             │
      //    └──────────────┴──────────────┴─────────────┘

      // 测试用例步骤：
      // 1) 输入 A2 = 1
      // 2) 期待：联动计算 A1 公式、C2 公式、C1 公式。


      const A1 = { column: 1, row: 1 };
      const B1 = { column: 2, row: 1 };
      const C1 = { column: 3, row: 1 };
      const C2 = { column: 3, row: 2 };
      engine.setCellFormula(context, A1, '=SUM(A2->A2)');
      engine.setCellFormula(context, B1, '=SUM(B2->B2)');
      engine.setCellFormula(context, C1, '=A1+B1');
      engine.setCellFormula(context, C2, '=A2+B2');

      const A2_Input = { column: 1, row: 2 };
      const updatedCellList = [];

      const cellValueProvider = {
        getCellValue: function (cell) {
          return 1;
        },
        getCellRangeValues: function (cellRange) {
          return [1];
        },
        getCellFloatRangeValues: function (cellRange) {
          return [1];
        },
        setCellValue: function (cell, value) {
          // 联动时，调用该方法设置单元格的值。
          // 在本测试用例中，A1、C2、C1 单元格会被调用。
          updatedCellList.push(cell);
        }
      };

      engine.prepareToEvaluateTable(cellValueProvider);

      engine.reEvaluateAll(context, A2_Input);
      expect(updatedCellList).to.have.lengthOf(3);
    })

    it('浮动行删除操作', function () {
      //           A              B
      //    ┌──────────────┬──────────────┐
      // 1  │ =SUM(A2->A3) │              │
      //    ├──────────────┼──────────────┤
      // 2  │              │     =A2      │──▶ float
      //    ├──────────────┼──────────────┤
      // 3  │      **      │     =A3      │──▶ float
      //    ├──────────────┼──────────────┤
      // 4  │              │     =A4      │
      //    └──────────────┴──────────────┘

      // 测试用例描述：
      // 
    })

    it('同时依赖：单元格范围 + 单元格', function () {
      // 测试用例描述：
      // 1) A4 = SUM(A2:A3), B2 = A2
      // 2) 修改 A2 的值
      // 预期结果：
      // B2 重算，A4 重算

      const A4 = { column: 1, row: 4 };
      const B2 = { column: 2, row: 2 };

      engine.setCellFormula(context, B2, '=A2');
      engine.setCellFormula(context, A4, '=SUM(A2:A3)');

      let newValueContainers = [];
      const cellValueProvider = {
        getCellValue: function (cell) {
          return 1;
        },
        getCellRangeValues: function (cellRange) {
          return [1];
        },
        setCellValue: function (cell, value) {
          newValueContainers.push(cell);
        }
      };

      engine.prepareToEvaluateTable(cellValueProvider);

      const A2_Input = { column: 1, row: 2 }; // A2 单元格发生了输入。
      engine.reEvaluateAll(context, A2_Input);

      expect(newValueContainers).to.have.lengthOf(2);

      function includes(array, cell) {
        return -1 !== array.findIndex((addr) => {
          return addr.column === cell.column && addr.row === cell.row;
        });
      }
      console.log(newValueContainers);
      expect(includes(newValueContainers, B2)).to.be.true;
      expect(includes(newValueContainers, A4)).to.be.true;
    })
  });

  describe('表间公式', function () {

  });

});