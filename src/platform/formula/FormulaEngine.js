const assert = require('base/common/assert');

const SingleFormulaCoreInst = require('./core/SingleFormulaCore').INSTANCE;
const SingleFormulaAST = require('platform/formula/core/SingleFormulaAST').SingleFormulaAST;
const CellDependencyBuilder = require('./cellDependency/DependencyBuilder').DependencyBuilder;
const CellDependencyFinder = require('./cellDependency/DependencyFinder').DependencyFinder;
const DependencyTransformer = require('platform/formula/cellDependency/DependencyTransformer').DependencyTransformer;
const Evaluator = require('platform/formula/cellEvaluation/Evaluator').Evaluator;
const AutoFillTransformer = require('platform/formula/generation/AutoFillTransformer').AutoFillTransformer;

const DependencyGraph = require('./cellDependency/DependencyGraph').DependencyGraph;

const AutoFixFormulaTool = require('platform/formula/autofix/AutoFixFormulaTool').AutoFixFormulaTool;

/**
 * 操作全部的公式。
 */

class WorkBookContext {
  constructor(sheetName) {
    this.activeSheetName = sheetName;
  }

  setActiveSheetName(sheetName) {
    this.activeSheetName = sheetName;
  }
}
/**
 * 处理单元格中的公式，以及单元之间的依赖关系。
 * 
 */
class FormulaEngine {
  constructor() {
    this.depGraph = new DependencyGraph();

    // 存储单元格的所有设置的公式
    // key: cellAddress
    // value: formula 文本
    this.formulas = {}; 

    /**
     * 当本公式引擎与表格组件配合使用时，需要提供表格数据采集器。
     * 用于从表格的数据模型中获取值、设置值。
     */
    this.tableCellValueProvider = undefined;
  }

  __DEBUG_Print() {
    return this.depGraph.__DEBUG_Print();
  }

  /**
   * 开始对表格求值。
   * 当公式引擎与表格组件配合使用时，需要调用本函数。
   */
  prepareToEvaluateTable(cellValueProvider) {
    this.tableCellValueProvider = cellValueProvider;
  }

  /**
   * 用户删除一个公式时调用。
   */
  clearCellFormula(workBookContext, cellAddr) {
    const activeSheetName = workBookContext.activeSheetName;
    const builder = new CellDependencyBuilder(this.depGraph);
    builder.clear(activeSheetName, cellAddr);
  }

  removeSheets(workBookContext, sheets) {
    const activeSheetName = workBookContext.activeSheetName;
    const builder = new CellDependencyBuilder(this.depGraph);
    builder.clear(activeSheetName, sheets);
  }

  /**
   * 用户输入一个公式后调用。
   * @param {WorkBookContext} workBookContext 工作簿上下文，包含当前激活的工作表sheet。
   * @param {Object} cellAddr 单元格地址对象 {column:<1..n>, row:<1..n>}
   * @param {String} formula 公式文本（包含=）
   */
  setCellFormula(workBookContext, cellAddr, formula) {
    const activeSheetName = workBookContext.activeSheetName;
    const parseTree = SingleFormulaCoreInst.parse(formula);
    if(SingleFormulaCoreInst.hasErrors()) {
      throw new Error('输入的公式存在错误');
    }
    const ast = new SingleFormulaAST(parseTree, activeSheetName);

    // 调整 Range 的 start.end 顺序
    const fixer = new AutoFixFormulaTool();
    fixer.fixCellRangeInPlace(activeSheetName, ast);

    const builder = new CellDependencyBuilder(this.depGraph);
    builder.setFormulaAST(ast);
    builder.build(activeSheetName, cellAddr);
  }

  /**
   * 获取最新的单元格公式。
   * @param {WorkBookContext} workBookContext 工作簿上下文，包含当前激活的工作表sheet。
   * @param {Object} cellAddr 单元格地址对象 {column:<1..n>, row:<1..n>}
   */
  getCellFormula(workBookContext, cellAddr) {
    const activeSheetName = workBookContext.activeSheetName;
    const finder = new CellDependencyFinder(this.depGraph);
    return finder.getCellFormula(activeSheetName, cellAddr);
  }

  /**
   * 生成自动向下填充的公式。
   * 注意：在自动填充过程中，公式中的相对单元格地址会自动生长，绝对地址不会自动生长。
   * @param {*} workBookContext 工作簿上下文
   * @param {String} formula 公式文本
   * @param {int} step 填充步数
   * @return 自动向下填充后的公式。如果 formula 参数非法，则抛出异常。
   */
  autofillDown(workBookContext, formula, step) {
    const activeSheetName = workBookContext.activeSheetName;
    const parseTree = SingleFormulaCoreInst.parse(formula);
    if(SingleFormulaCoreInst.hasErrors()) {
      throw new Error('输入的公式存在错误');
    }
    const ast = new SingleFormulaAST(parseTree, activeSheetName);
    const transform = new AutoFillTransformer(ast, activeSheetName);
    return transform.getFormulaAfterFillingDown(step);
  }

  autofillUp(workBookContext, formula, step) {

  }

  autofillLeft(workBookContext, formula, step) {

  }

  autofillRight(workBookContext, formula, step) {

  }

  /**
   * 对指定单元格的公式求值；
   * 如果指定单元格处没有公式，则直接从单元格处取值。
   * @param {WorkBookContext} workBookContext 
   * @param {Object} cellAddr 单元格地址对象 {column:<1..n>, row:<1..n>}
   */
  evaluate(workBookContext, cellAddr) {
    const activeSheetName = workBookContext.activeSheetName;
    const evaluator = new Evaluator(this.depGraph, this.tableCellValueProvider);
    return evaluator.evaluate(activeSheetName, cellAddr);
  }

  /**
   * 当单元格的数值变更后，自动执行重算。
   * 只重算受到影响的单元格。
   * @param {Object} fromCellAddr 发生数值变更/公式变更的单元格地址对象 {column:<1..n>, row:<1..n>}
   */
  reEvaluateAll(workBookContext, fromCellAddr) {
    this._assertCellValueProvider(this._assertCellValueProvider);

    const activeSheetName = workBookContext.activeSheetName;
    const evaluator = new Evaluator(this.depGraph, this.tableCellValueProvider);
    return evaluator.reEvaluateAll(activeSheetName, fromCellAddr);
  }

  _assertCellValueProvider(provider) {
    assert.ok(provider, '需要调用 prepareToEvaluateTable 方法, 提供 tableCellValueProvider');
  }

  evaluateAll(workBookContext) {
    // const activeSheetName = workBookContext.activeSheetName;
    this._assertCellValueProvider(this._assertCellValueProvider);

    const evaluator = new Evaluator(this.depGraph, this.tableCellValueProvider);
    return evaluator.evaluateAll();
  }
 
  /**
   * 用户调整表结构：增加行
   */
  addRows(workBookContext, columnRowIndex, rowCount) {
    const activeSheetName = workBookContext.activeSheetName;
    const transform = new DependencyTransformer(this.depGraph);
    return transform.insertRows(activeSheetName, columnRowIndex, rowCount);
  }

  /**
   * 用户调整表结构：删除行
   */
  removeRows(workBookContext, columnRowIndex, rowCount) {
    const activeSheetName = workBookContext.activeSheetName;
    const transform = new DependencyTransformer(this.depGraph);
    return transform.removeRows(activeSheetName, columnRowIndex, rowCount);
  }

  /**
   * 用户调整表结构：增加列
   */
  addColumns(workBookContext, columnRowIndex, columnCount) {
    const activeSheetName = workBookContext.activeSheetName;
    const transform = new DependencyTransformer(this.depGraph);
    return transform.insertColumns(activeSheetName, columnRowIndex, columnCount);
  }

  /**
   * 用户调整表结构：删除列
   */
  removeColumns(workBookContext, columnRowIndex, columnCount) {
    const activeSheetName = workBookContext.activeSheetName;
    const transform = new DependencyTransformer(this.depGraph);
    return transform.removeColumns(activeSheetName, columnRowIndex, columnCount);
  }
  /**
   * 用户调整表结构：移动列
   */
  moveColumn(workBookContext, column, toColumn) {
    const activeSheetName = workBookContext.activeSheetName;
  }
  /**
   * 用户调整表结构：移动行
   */
  moveRow(workBookContext, row, toRow) {
    const activeSheetName = workBookContext.activeSheetName;
  }
}

exports.WorkBookContext = WorkBookContext;
exports.FormulaEngine = FormulaEngine;