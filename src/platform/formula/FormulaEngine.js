const SingleFormulaCoreInst = require('./core/SingleFormulaCore').INSTANCE;
const CellDependencyBuilder = require('./cellDependency/DependencyBuilder');
const CellDependencyFinder = require('./cellDependency/DependencyFinder');
const DependencyGraph = require('./cellDependency/DependencyGraph').DependencyGraph;

/**
 * 操作全部的公式。
 */

class WorkBookContext {
  constructor() {
    this.activeSheetName = null;
  }

  setActiveSheetName(sheetName) {
    this.activeSheetName = sheetName;
  }
}
class FormulaEngine {
  constructor() {
    this.depGraph = new DependencyGraph();

    // 存储单元格的所有设置的公式
    // key: cellAddress
    // value: formula 文本
    this.formulas = {}; 
  }

  /**
   * 用户删除一个公式时调用。
   */
  clearCellFormula(workBookContext, cellAddr) {

  }

  /**
   * 用户输入一个公式后调用。
   * @param {WorkBookContext} workBookContext 工作簿上下文，包含当前激活的工作表sheet。
   */
  setCellFormula(workBookContext, cellAddr, formula) {
    const activeSheetName = workBookContext.activeSheetName;
    const formulaParseTree = SingleFormulaCoreInst.parse(formula);
    const dependencies = SingleFormulaCoreInst.collectCellAddresses(formulaParseTree);

    const builder = new CellDependencyBuilder(this.depGraph);
    builder.updateDependencies(activeSheetName, cellAddr, dependencies);
  }

  getCellFormula(workBookContext, cellAddr) {
    const activeSheetName = workBookContext.activeSheetName;
    const finder = new CellDependencyFinder(this.depGraph);
    return finder.getCellFormula(activeSheetName, cellAddr);
  }
 
  /**
   * 用户调整表结构：增加行
   */
  addRow(sheetName, columnRowIndex) {

  }

  /**
   * 用户调整表结构：删除行
   */
  removeRow(sheetName, columnRowIndex) {

  }

  /**
   * 用户调整表结构：增加列
   */
  addColumn(sheetName, columnRowIndex) {

  }

  /**
   * 用户调整表结构：删除列
   */
  removeColumn(sheetName, columnRowIndex) {

  }
  /**
   * 用户调整表结构：移动列
   */
  moveColumn(sheetName, column, toColumn) {

  }
  /**
   * 用户调整表结构：移动行
   */
  moveRow(sheetName, row, toRow) {

  }
}