/**
 * 存储单元格依赖关系；支持拓扑排序；支持单元格地址的引用变更；支持序列化存储。 
 */
const types = require('base/common/types');
const Graph = require('platform/formula/cellDependency/common/Graph').Graph;
const Search = require('platform/formula/cellDependency/common/ElementaryCircuitsSearch').ElementaryCircuitsSearch;
const SimpleCellRange = require('platform/formula/cellAddressParts/common/CellAddressParts').SimpleCellRange;

class CyclicDependencyError extends Error {
  constructor(graph) {
    super('单元格地址之间循环依赖');
    this.detail = graph.toString();
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
  /**
   * @param {SimpleCellAddress | SimpleCellRange} cellAddress
   */
  constructor(cellAddress, ast) {
    this.cellAddress = cellAddress; //单元格的地址对象
    this.ast = ast;
  }

  /**
   * 浅拷贝，只拷贝单元地址，不拷贝单元格持有的语法树。
   */
  shallowClone() {
    return new CellData(this.cellAddress.clone(), null);
  }

  // 返回最新的单元格地址。
  getFormula() {
    return this.ast.toString();
  }

  getFormulaAST() {
    return this.ast;
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
    let hashFn = function (nodeData) {
      return nodeData.cellAddress.hashcode();
    }
    this.graph = new Graph(hashFn);
    this._hashFn = hashFn;
  }

  toString() {
    return this.graph.toString();
  }

  __DEBUG_Print() {
    return this.graph.toString();
  }

  /**
   * 根据给定的单元格地址，查找所有入度的节点。
   * 对形成的子图做拓扑排序后分别求值。
   * 
   * @param {SimpleCellAddress} cellAddress 图中的出发节点。
   */
  sortSubgraph(cellAddress) {
    const that = this;
    const subgraphList = this._copyFilteredSubgraph(cellAddress);
    if (subgraphList && types.isArray(subgraphList)) {
      return subgraphList.map(function (subgraph) {
        return that._sortGraph(subgraph);
      })
    }

    return [];
  }

  /**
   * TODO: 与函数 addCellDependencies 存在部分重复的逻辑。
   * @param {SimpleCellAddress} cellAddress
   */
  _lookupCellRangeNode(cellAddress) {
    const foundNodes = [];
    let existingNodes = this.graph.nodes(); //nodes(); nodeDatas
    if (existingNodes) {
      for (let i = 0; i < existingNodes.length; i++) {
        let cellData = existingNodes[i].data;
        let n = cellData.cellAddress;
        // 如果不是当前工作表的范围，直接跳过
        if (n.sheet !== cellAddress.sheet) {
          continue;
        }
        if (this._isCellRange(n) && this._isInRange(n, cellAddress)) {
          foundNodes.push(existingNodes[i]);
        }
      }
    }

    return foundNodes;
  }
  /**
   * 根据起始顶点的 [入度] 提炼依赖关系子图。
   * 
   * @param {SimpleCellAddress} cellAddress 图中的出发节点。
   */
  _copyFilteredSubgraph(cellAddress) {
    const that = this;
    const startNode = this.graph.lookup(new CellData(cellAddress));
    const subgraphList = [];
    let startNodeList = [];
    if (startNode) {
      startNodeList.push(startNode);

    } else {
      // 检查是否有满足条件的单元格范围顶点
      let ranges = this._lookupCellRangeNode(cellAddress);
      if (ranges.length <= 0) {
        return undefined;
      }

      startNodeList = ranges;
    }

    startNodeList.forEach(function (startNode) {
      const subgraph = new Graph(that._hashFn);
      that._copySearchedNode(startNode, subgraph);
      subgraphList.push(subgraph);
    })


    return subgraphList;
  }

  /**
   * DFS，深度优先搜索。
   * @param {*} node 
   * @param {*} toGraph 
   */
  _copySearchedNode(node, toGraph) {
    const incomingMap = node.incoming.values();
    for (let { fromNode, props } of incomingMap) {
      toGraph.insertEdge(fromNode.data, node.data, props);
      this._copySearchedNode(fromNode, toGraph);
    }
  }

  /**
   * 算法描述：Kahn 算法（卡恩算法）
   * L <- 包含所有排序元素的列表，初始为 []
   * S <- 出度为 0 的顶点集合。（在标准算法中，使用了入度，在单元格地址依赖关系中，使用出度）。
   * while S 非空 do
   *    从 S 中移除一个节点 n
   *    将 n 放入 L
   *    for 每个节点 m（存在从 m 到 n 的一条边 e） do
   *        从图中移除边 e
   *        if m 没有出度 then  
   *            把 m 放入 S
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
   * @return {*} 排序后的顶点数组，数组元素类型是 SimpleCellAddress。索引越小，计算优先级越高。
   */
  _sortGraph(graph) {
    if (!graph) {
      return undefined;
    }
    const copy = graph.clone();
    const L = [];
    while (true) {
      let S = copy.roots();
      if (S.length === 0) {
        if (!copy.isEmpty()) {
          throw new CyclicDependencyError(copy);
        }
        break;
      }

      S.forEach(function (node) {
        L.push(node.data);
        copy.removeNode(node.data);
      })
    }

    return L;
  }

  sort() {
    return this._sortGraph(this.graph);
  }

  // 查找循环依赖，并打印出循环依赖中的各个单元格地址数组（Array）
  // 地址数组是一个二维数组，结构样例为：
  // 样例中，单元格地址依赖关系是 c1 -> c2 -> c3 -> c1
  // c2 -> c4 -> c5 -> c2
  // [
  //  [c1, c2, c3],
  //  [c2, c4, c5],
  //  [...]
  // ]
  //
  // 算法来源《FINDING ALL THE ELEMENTARY CIRCUITS OF A DIRECTED GRAPH》（DONALD B. JOHNSON, 1975）
  // https://www.cs.tufts.edu/comp/150GA/homeworks/hw1/Johnson%2075.PDF
  // 算法复杂度：时间复杂度 O((n+e)(c+1)), 空间复杂度 O(n+e), n 表示顶点数，e 表示边数，c 表示基本环路数
  findAllCyclicDependency() {
    let search = new Search(this.graph);
    return search.run();
  }

  /**
   * 删除单元格地址时，清除没有任何依赖的孤立节点。
   */
  removeCellAddress(cellAddress) {
    this.graph.removeNode(new CellData(cellAddress));
    this.graph.clearIsolatedNodes();
  }

  /**
   * 只移除单元格地址的出度，当前节点不移除。
   */
  removeCellDependencies(cellAddress) {
    this.graph.removeNodeOutgoings(new CellData(cellAddress));
    this.graph.clearIsolatedNodes();
  }

  _isCellRange(cellRef) {
    return cellRef instanceof SimpleCellRange;
  }

  /**
   * @param {SimpleCellRange} cellRefRange 单元格范围
   * @param {SimpleCellAddress} cellRefAddress 单元格地址
   * @return 如果 cell 是 range 的一个单元格，则返回 true；否则返回 false。
   */
  _isInRange(cellRefRange, cellRefAddress) {
    return cellRefRange.includes(cellRefAddress);
  }

  /**
   * 如果 cellAddress 是单元格范围或者 dependencyMap 中包含单元格范围时，考虑对于单元格范围的处理。
   * @param {SimpleCellAddress} cellAddress
   * @param {} formulaAst
   */
  addCellDependencies(cellAddress, formulaAst, dependencyMap) {
    const that = this;

    if (dependencyMap) {
      // 处理范围的依赖：
      // 如果当前工作单元格 cellAddress 处在某个范围顶点内，
      // 需要建立该单元格范围到本顶点的依赖。
      let existingNodes = this.graph.nodeDatas();
      if (existingNodes) {
        existingNodes.forEach(function (cellData) {
          let n = cellData.cellAddress;
          if (that._isCellRange(n) && that._isInRange(n, cellAddress)) {
            that.graph.insertEdge(cellData, new CellData(cellAddress));
          }
        })
      }

      // 建立本单元格对其他单元格的依赖关系
      let deps = Object.keys(dependencyMap);
      deps.forEach(function (dep) {
        let depDetail = dependencyMap[dep];
        that.graph.insertEdge(new CellData(cellAddress), new CellData(depDetail.simple), depDetail.deps);
        that.graph.updateNode(new CellData(cellAddress, formulaAst)); //将当前单元格的最新公式更新到节点中。
      })
    }
  }

  /**
   * 在修改图中节点对应的单元格地址后，需要同步刷新底层图的索引。
   * DependencyTransformer 需要。
   */
  _syncCellAddress() {
    this.graph.refreshNodes();
  }

  removeSheets(unusedSheetNames) {
    const that = this;
    let namesSet = {};
    if (unusedSheetNames) {
      unusedSheetNames.forEach(function (name) {
        namesSet[name] = name;
      });

      let cellDatas = this.graph.nodeDatas();
      cellDatas.forEach(function (data) {
        let cellAddress = data.cellAddress;
        let sheetName = cellAddress.sheet;
        if (namesSet.hasOwnProperty(sheetName)) {
          // 需要删除该节点
          that.graph.removeNode(data);
        }
      })
    }
  }

  /**
   * 返回所有顶点。
   */
  cellList() {
    return this.graph.nodes();
  }

  /**
   * 获取某个单元格最新的公式。
   * @param {SimpleCellAddress} cellAddress
   */
  getCellFormula(activeSheetName, cellAddress) {
    let ast = this.getCellFormulaAST(activeSheetName, cellAddress);
    return ast ? ast.toString() : '';
  }

  /**
   * @param {SimpleCellAddress} cellAddress
   */
  getCellFormulaAST(activeSheetName, cellAddress) {
    let node = this.graph.lookup(new CellData(cellAddress));
    if (!node) {
      return undefined; // 当前单元格不存在
    }
    let cellData = node.data;
    return cellData.ast;
  }
}

exports.CyclicDependencyError = CyclicDependencyError;
exports.DependencyGraph = DependencyGraph;
