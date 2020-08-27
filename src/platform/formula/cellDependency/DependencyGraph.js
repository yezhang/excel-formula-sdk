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
 * 依赖图的顶点数据。
 * 当前顶点所表示的地址。
 * 本单元格的公式文本。
 * 本单元格的解析树。
 * 本单元格的语法树。
 */
class CellData {
  constructor(cellAddress, formulaParseTree) {
    this.cellAddress = cellAddress; //单元格的地址对象
    this.f = formulaParseTree.getText(); //原始公式文本
    this.parseTree = formulaParseTree;//公式的解析树
    this.ast = convertToAst(formulaparseTree);
  }

  /**
   * 使用变更后的单元格地址，更新原有单元格地址。
   * 更新语法树；更新单元格公式文本；更新解析树。
   */
  updateReferences(oldCellRef, cellRef) {

  }
}

/**
 * 单元格依赖边的数据。
 * 本边的 from 节点所持有的单元格引用。单元格引用使用语法树节点数组表示。
 */
class DependencyEdgeData {
  constructor(deps) {
    this.references = deps;
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