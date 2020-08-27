/**
 * 存储单元格依赖关系；支持拓扑排序；支持单元格地址的引用变更；支持序列化存储。 
 */
const Graph = require('./common/Graph').Graph;

/**
 * 拓扑排序策略
 */
class TopologicalSortStrategy{

}

/**
 * 将解析树转换为语法树
 */
function convertToAst(tree) {

}

/**
 * 图的顶点数据
 */
class CellData {
  constructor(cellAddress, formula, formulaParseTree) {
    this.cellAddress = cellAddress; //单元格的地址对象
    this.f = formula; //原始公式文本
    this.parseTree = formulaParseTree;//公式的解析树
    this.ast = convertToAst(formulaparseTree);
  }
}

/**
 * 如果单元格 A1 依赖单元格 B1，则存在一条从 A1 指向 B1 边。
 * 此时，B1 为根节点。
 */
class DependencyGraph {
  constructor() {
    this.graph = new Graph();
  }

  /**
   * @return {*} 排序后的数组。
   */
  sort(sortStrategy) {

  }

  /**
   * 
   */
  removeCellAddress(cellAddress) {

  }

  addCellDependencies(cellAddress, dependencies) {

  }

  getCellFormula(activeSheetName, simpleCellAddr){

  }
}

exports.DependencyGraph = DependencyGraph;