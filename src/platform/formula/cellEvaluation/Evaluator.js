/**
 * 公式求值器，计算公式的具体数值。
 */
const types = require('base/common/types');
const CellValueProviderProxy = require('platform/formula/cellEvaluation/CellValueProviderProxy');
const FormulaEvaluationVisitor = require('platform/formula/cellEvaluation/FormulaEvaluationVisitor').FormulaEvaluationVisitor;

class Evaluator {
  constructor(depGraph, tableCellValueProvider) {
    this.depGraph = depGraph;
    this.cellValueProxy = new CellValueProviderProxy(tableCellValueProvider);
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