/**
 * 存储单元格依赖关系；支持拓扑排序；支持单元格地址的引用变更；支持序列化存储。 
 */
const Graph = require('./common/Graph').Graph;

/**
 * 拓扑排序策略
 */
class TopologicalSortStrategy{

}

class CyclicDependencyError extends Error {
	constructor(graph) {
		super('单元格地址之间循环依赖');
		this.message = graph.toString();
	}
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
 * 如果单元格 A1 依赖单元格 B1，则存在一条从 A1 指向 B1 边。
 * 此时，B1 为根节点。
 */
class DependencyGraph {
  constructor() {
    let hashFn = function(nodeData) {
      return nodeData.hashcode();
    }
    this.graph = new Graph(hashFn);
  }

  /**
   * 算法描述：Kahn 算法（卡恩算法）
   * L <- 包含所有排序元素的列表，初始为 []
   * S <- 所有没有出度的顶点。（在标准算法中，使用了入度，在单元格地址依赖关系中，使用出度）。
   * while S 非空 do
   *    从 S 中移除一个节点 n
   *    将 n 放入 L
   *    for 每个节点 m（存在从 m 到 n 的一条边 e） do
   *        从图中移除边 e
   *        if m 没有出度 then  
   *            把 m 放入 L
   * if 图中存在边 then
   *    return error（图中至少存在一个环）
   * else
   *    return L（一个拓扑排序）
   * 
   * 算法2：（来自 VSCode）
   * L <- 包含所有排序元素的列表，初始为 []
   * 
   * while true do
   *    S <- 从图中查询所有没有出度的顶点。
   *    if S 为空 then
   *        if 图中存在顶点 then
   *          return error（图中存在循环）
   *        break;
   *    for S 中的每个顶点 n
   *        将 n 放入 L
   *        从图中移除节点 n
   * return L
   * 
   * @return {*} 排序后的顶点数组，数组元素类型是 SimpleCellAddress。
   */
  sort() {
    const copy = this.graph.clone();
    const L = [];
    while(true) {
      let S = copy.roots();
      if(S.length === 0) {
        if(!copy.isEmpty()) {
          throw new CyclicDependencyError(copy);
        }
        break;
      }

      S.forEach(function(node) {
        L.push(node.data);
        copy.removeNode(node.data);
      })
    }

    return L;
  }

  /**
   * 删除单元格地址时，清除没有任何依赖的孤立节点。
   */
  removeCellAddress(cellAddress) {
    this.graph.removeNode(cellAddress);
    this.graph.clearIsolatedNodes();
  }

  /**
   * 只移除单元格地址的出度，当前节点不移除。
   */
  removeCellDependencies(cellAddress) {
    this.graph.removeNodeOutgoings(cellAddress);
    this.graph.clearIsolatedNodes();
  }

  addCellDependencies(cellAddress, dependencyMap) {
    const that = this;
    if(dependencyMap){
      let deps = Object.keys(dependencyMap);
      deps.forEach(function(dep) {
        let depDetail = dependencyMap[dep];
        that.graph.insertEdge(cellAddress, depDetail.simple, depDetail.deps);
      })
    }
    
  }

  /**
   * 返回所有顶点。
   */
  simpleCellAddressList() {
    return this.graph.nodes();
  }

  getCellFormula(activeSheetName, simpleCellAddr){

  }
}

exports.DependencyGraph = DependencyGraph;