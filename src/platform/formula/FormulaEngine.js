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
  }
  /**
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


}