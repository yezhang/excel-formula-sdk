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
  
  it('设计态-单元格输入公式完毕（纯单元格地址）', function () {
    let context = new WorkBookContext('sheet1');
    let A1CellRef = { column: 1, row: 1 }; // A1
    let formulaText = '=B1';
    engine.setCellFormula(context, A1CellRef, formulaText);

    let innerFormula = engine.getCellFormula(context, A1CellRef);
    expect(innerFormula).to.be.equal(formulaText);
  });

  it('设计态-单元格输入公式完毕（单元格范围）', function () {
    let context = new WorkBookContext('sheet1');
    let A1CellRef = { column: 1, row: 1 }; // A1
    engine.setCellFormula(context, A1CellRef, '=B1');
  });

  it('设计态-调整表结构-插入行', function(){
    // 测试用例：
    // 调整表结构后，受影响的单元格公式需要更新，指向新的单元格地址。
    // 验证调整后受影响的单元格公式
  });

  it('设计态-调整表结构-删除行', function(){
    // 测试用例：
    // 调整表结构后，受影响的单元格公式需要更新，指向新的单元格地址。
    // 验证调整后受影响的单元格公式
  });

  it('设计态-调整表结构-插入列', function(){
    // 测试用例：
    // 调整表结构后，受影响的单元格公式需要更新，指向新的单元格地址。
    // 验证调整后受影响的单元格公式
  });

  it('设计态-调整表结构-删除列', function(){
    // 测试用例：
    // 调整表结构后，受影响的单元格公式需要更新，指向新的单元格地址。
    // 验证调整后受影响的单元格公式
  });

  it('运行态-报表公式求值', function () {
    let context = new WorkBookContext('sheet1');
    engine.evaluateAll(context); // 执行全部公式的重算。
  });

  describe('表内公式', function () {
    it('增值税纳税申报表主表:17=12+13-14-15+16', function () {

    })
  });

  describe('表间公式', function () {

  });
});