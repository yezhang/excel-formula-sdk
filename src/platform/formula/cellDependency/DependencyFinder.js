const {SimpleCellAddress} = require('platform/formula/cellAddressParts/common/CellAddressParts');

/**
 * 从依赖图中取值。
 */
class DependencyFinder {
  constructor(depGraph) {
    this.depGraph = depGraph;
  }

  /**
   * @param {String} activeSheetName 活动单元格名称
   * @param {Object} cellAddr 单元格地址对象 {column:<1..n>, row:<1..n>}
   */
  getCellFormula(activeSheetName, cellAddr){
    let simpleAddr = SimpleCellAddress.build(activeSheetName, cellAddr.column, cellAddr.row);
    return this.depGraph.getCellFormula(activeSheetName, simpleAddr);
  }
}

exports.DependencyFinder = DependencyFinder;