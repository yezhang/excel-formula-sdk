/**
 * 强连通组件
 */
class SCCResult {
  /**
   * @param {Array[Array]} adjList
   */
  constructor(adjList, lowestNodeId) {
    this.adjList = adjList;
    this.lowestNodeId = lowestNodeId;
    this.nodeIDsOfSCC = {}; // ID 的集合
    if (this.adjList) {
      for (let i = this.lowestNodeId; i < this.adjList.length; i++) {
        if (this.adjList[i].length > 0) {
          this.nodeIDsOfSCC[i] = i;
        }
      }
    }
  }

  getAdjList() {
    return this.adjList;
  }

  getLowestNodeId() {
    return this.lowestNodeId;
  }
}



class StrongConnectedComponents {
  constructor(adjListOriginal) {
    this.adjListOriginal = adjListOriginal;
    this.adjList = undefined; //当前可视子图的的邻接表
    this.visited = undefined; // 辅助属性, [boolean]
    this.stack = undefined; // 辅助属性, []
    this.lowlink = undefined; //辅助属性 [int]
    this.number = undefined; // 辅助属性 []
    this.sccCounter = 0; // 辅助属性
    this.currentSCCs = undefined; //辅助属性 []
  }



  /**
   * 本函数返回强连通分量的邻接表结构，该强连通分量包含子图的最少顶点数。
   * 顶点分别为 {s, s + 1, ..., n}，s 是给定顶点。
   * 注意，只有一个顶点的的强连通分量无法返回。 
   * TODO: 考虑如何处理只有一个顶点的情况。
   * @param {int} node s，顶点 s
   * @return SCCResult
   */
  getAdjacencyList(node) {
    let nodeNum = this.adjListOriginal.length;
    this.visited = new Array(nodeNum);
    this.lowlink = new Array(nodeNum);
    this.number = new Array(nodeNum);
    this.stack = [];
    this.currentSCCs = [];

    this.makeAdjListSubgraph(node);

    for (let i = node; i < nodeNum; i++) {
      if (!this.visited[i]) {
        this.getStrongConnectedComponents(i);
        let nodes = this.getLowestIdComponent();
        if (nodes && nodes.indexOf(node) == -1 && nodes.indexOf(node + 1) == -1) {
          return this.getAdjacencyList(node + 1);
        }

        let adjacencyList = this.getAdjList(nodes);
        if (adjacencyList) {
          for (let j = 0; j < nodeNum; j++) {
            if (adjacencyList[j].length > 0) {
              return new SCCResult(adjacencyList, j);
            }
          }
        }
      }
    }

    return undefined;
  }

  /**
   * 根据包含指定顶点的子图构建邻接表。
   * 指定顶点都 >= 给定的顶点索引。
   */
  makeAdjListSubgraph(node) {
    this.adjList = new Array(this.adjListOriginal.length);
    for (let i = 0; i < this.adjList.length; i++) {
      this.adjList[i] = [];
    }

    for (let i = node; i < this.adjList.length; i++) {
      let successors = [];
      for (let j = 0; j < this.adjListOriginal[i].length; j++) {
        if (this.adjListOriginal[i][j] >= node) {
          successors.push(this.adjListOriginal[i][j]);
        }
      }
      if (successors.length > 0) {
        this.adjList[i] = successors;
      }
    }
  }

  /**
   * 从给定节点搜索强连通分量
   * @param {int} root 开始搜索的顶点
   */
  getStrongConnectedComponents(root) {
    this.sccCounter++;
    this.lowlink[root] = this.sccCounter;
    this.number[root] = this.sccCounter
    this.visited[root] = true;
    this.stack.push(root);

    for (let i = 0; i < this.adjList[root].length; i++) {
      let w = this.adjList[root][i];
      if (!this.visited[w]) {
        this.getStrongConnectedComponents(w);
        this.lowlink[root] = Math.min(this.lowlink[root], this.lowlink[w]);
      } else if ((this.stack.indexOf(w) != -1) && this.number[w] < this.lowlink[root]) {
          this.lowlink[root] = this.number[w];
      }
    }

    // 找到强连通分量
    if ((this.lowlink[root] === this.number[root]) && this.stack.length > 0) {
      let next = -1;
      let scc = [];
      do {
        next = this.stack.pop();
        scc.push(next);
      } while (this.number[next] > this.number[root]);

      // 只有一个节点的简单连通分量不会被添加
      if (scc.length > 1) {
        this.currentSCCs.push(scc);
      }
    }
  }

  /**
   * 根据联通分量集合，计算“包含最小顶点索引”的强连通分量。
   */
  getLowestIdComponent() {
    let min = this.adjList.length;
    let currScc = undefined;
    for (let i = 0; i < this.currentSCCs.length; i++) {
      let scc = this.currentSCCs[i];
      for (let j = 0; j < scc.length; j++) {
        let node = scc[j];
        if (node < min) {
          currScc = scc;
          min = node;
        }
      }
    }
    return currScc;
  }

  /**
   * 返回强连通分量的邻接表 
   */
  getAdjList(nodes) {
    let lowestIdAdjacencyList = undefined;
    if (nodes) {
      lowestIdAdjacencyList = new Array(this.adjList.length);
      for (let i = 0; i < lowestIdAdjacencyList.length; i++) {
        lowestIdAdjacencyList[i] = [];
      }
      for (let i = 0; i < nodes.length; i++) {
        let node = nodes[i];
        for (let j = 0; j < this.adjList[node].length; j++) {
          let succ = this.adjList[node][j];
          if (nodes.indexOf(succ) != -1) {
            lowestIdAdjacencyList[node].push(succ);
          }
        }
      }
    }

    return lowestIdAdjacencyList
  }
}

module.exports = StrongConnectedComponents;