/**
 * 公式求值器，计算公式的具体数值。
 */
const types = require('base/common/types');
const CellValueProviderProxy = require('platform/formula/cellEvaluation/CellValueProviderProxy');
const FormulaEvaluationVisitor = require('platform/formula/cellEvaluation/FormulaEvaluationVisitor').FormulaEvaluationVisitor;
const {SimpleCellAddress} = require('platform/formula/cellAddressParts/common/CellAddressParts');

/**
 * 根据依赖图对单元格求值。
 */
class Evaluator {
  constructor(depGraph, tableCellValueProvider) {
    this.depGraph = depGraph;
    this.cellValueProxy = new CellValueProviderProxy(tableCellValueProvider);
  }

  /**
   * 对某个单元格的公式求值。
   * @param {String} activeSheetName 工作表名称
   * @param {Object} cellAddr 单元格地址对象 {column:<1..n>, row:<1..n>}
   */
  evaluate(activeSheetName, cellAddr) {
    let simpleAddr = SimpleCellAddress.build(activeSheetName, cellAddr.column, cellAddr.row);
    let formulaAST = this.depGraph.getCellFormulaAST(activeSheetName, simpleAddr);
    return this.evaluateAST(formulaAST);
  }

  evaluateAST(formulaAST) {
    return formulaAST.accept(new FormulaEvaluationVisitor(this.cellValueProxy));
  }

  evaluateAll() {
    let that = this;
    let sorted = this.depGraph.sort();
    if (types.isArray(sorted)) {
      sorted.forEach(function (node) {
        let cellData = node.data;

        // 根据语法树求值
        let formula = cellData.getFormulaAST();
        let visitor = new FormulaEvaluationVisitor(that.cellValueProxy);

        // 在求值过程中，会同步调用 cellValueProxy 获取单元格数据
        let ret = formula.accept(visitor);
        // 在求值完毕后，会同步调用 cellValueProxy 设置单元格值，因为后续单元格会依赖该值的计算
        that.cellValueProxy.setCellValue(cellData.cellAddress, ret);
      })
    }
  }
}


exports.Evaluator = Evaluator;