/**
 * 对于所有公开 API 的测试。
 */
const expect = require('chai').expect;
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
  let engine;
  beforeEach(function () {
    engine = new FormulaEngine();
  });

  it('设计态-单元格输入错误的公式', function(){
    let context = new WorkBookContext('sheet1');
    let A1CellRef = { column: 1, row: 1 }; // A1 = B1
    let A1FormulaText = '=B1+';
    
    expect(function(){
      engine.setCellFormula(context, A1CellRef, A1FormulaText);
    }).to.throw('输入的公式存在错误');
    

  });

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

    let A2CellRef = { column: 1, row: 2}; // A2 = B2
    let A2FormulaTextUpdated = '=B2';
    let innerFormula = engine.getCellFormula(context, A2CellRef);
    expect(innerFormula).to.equal(A2FormulaTextUpdated);

    expect(updatedCellAddressList[0]).to.have.property('column', 1);
    expect(updatedCellAddressList[0]).to.have.property('row', 2);
  });

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

    let A1CellRef = { column: 1, row: 1}; // A1 = B1
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

  it('设计态-调整表结构-插入列', function () {
    // 测试用例：
    // 调整表结构后，受影响的单元格公式需要更新，指向新的单元格地址。
    // 验证调整后受影响的单元格公式
    let context = new WorkBookContext('sheet1');
    let A2CellRef = { column: 1, row: 2 }; // A2 = B2
    let A2FormulaText = '=B2';
    engine.setCellFormula(context, A2CellRef, A2FormulaText);

    expect.fail();
  });

  it('设计态-调整表结构-删除列', function () {
    // 测试用例：
    // 调整表结构后，受影响的单元格公式需要更新，指向新的单元格地址。
    // 验证调整后受影响的单元格公式
    expect.fail();
  });

  describe('运行态', function() {
    it('公式求值-正确求值', function () {
      let context = new WorkBookContext('sheet1');
      const cellValueProvider = {
        getCellValue: function (cell) {
          // C7 = 5, column = 3, row = 7
          if(cell.column === 3) {
            return 5;
          }

          // D7 = 6, column = 4, row = 7
          if(cell.column === 4) {
            return 6;
          }

          // E7 = 7, column = 5, row = 7
          if(cell.column === 5) {
            return 7;
          }
        },
        getCellRangeValues: function(cellRange) {

        }
      };
      const A1CellRef = {
        column: 1,
        row: 1
      }

      // A1=IF(C7<E7,MIN(ABS(E7-C7),D7),0)
      engine.setCellFormula(context, A1CellRef, '=IF(C7<E7,MIN(ABS(E7-C7),D7),0)');
  
      let ret = undefined;
      try{
        engine.prepareToEvaluateTable(cellValueProvider);
        ret = engine.evaluate(context, A1CellRef);
      }catch(e){
        ret = e.getResult();
      }
  
      expect(ret).to.equal(2);
    });
  
    it('公式求值-全部单元格自动求值', function(){
      // engine.evaluateAll(context); // 执行全部公式的重算。
    });

    it('公式求值-计算错误', function(){

    });

    
  })
  

  describe('表内公式', function () {
    it('增值税纳税申报表主表:17=12+13-14-15+16', function () {

    })
  });

  describe('表间公式', function () {

  });
});