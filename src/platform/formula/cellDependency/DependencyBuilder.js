const ArrayUtils = require('../../../base/ArrayUtils');
const CellAddress = require('../cellAddressParts/common/CellAddressParts').CellAddress;
/**
 * 单元格依赖关系收集，生成依赖图。
 */


class CyclicDependencyError extends Error {
  constructor(graph) {
    super('单元格之间发生了循环依赖');
    this.message = graph.toString();
  }
}

class CellDependencyBuilder {
  constructor(depGraph) {
    this.depGraph = depGraph;
  }


  /**
   * 每次遇到一个单元格的公式，将公式放置到图结构中。
   * 对单元格地址格式进行规范化处理。
   * 
   * 如果传入重复的 workingCellAddress，则执行覆盖，并更新图的关系。
   */
  updateDependencies(activeSheetName, workingCellRef, dependenciesList){
    const _this = this;
    let workingCell = this._normalizeCellAddress(activeSheetName, workingCellRef);
    let simpleCellAddress = workingCell.toSimpleAddress();
    let simpleDependencies = dependenciesList.map(function(dep){
      return _this._normalizeCellAddress(activeSheetName, dep).toSimpleAddress();
    });

    let distinctDependencies = ArrayUtils.uniqueArray(simpleDependencies, function(dep) {
      return dep.hashcode();
    });

    this._removeDependencies(simpleCellAddress);
    this._addDependencies(simpleCellAddress, distinctDependencies);
  }

  _removeDependencies(cellAddress) {

  }


  _addDependencies(cellAddress, simpleDependencies) {

  }

  // 将单元格地址转化为标准对象
  _normalizeCellAddress(sheetName, cellAddressOrCellRange) {
    return new CellAddress(sheetName, cellAddressOrCellRange);
  }

  getDependencyGraph() {

  }

}


exports.CellDependencyBuilder = CellDependencyBuilder;