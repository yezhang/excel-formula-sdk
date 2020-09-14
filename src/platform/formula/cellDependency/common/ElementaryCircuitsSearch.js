/**
 * 寻找连通图
 */
const StrongConnectedComponents = require('./StrongConnectedComponents');

/**
 * 给图中的所有顶点生成一个整数索引，方便图的搜索算法。
 * 顶点索引 从 0 开始。
 * @param {Graph} graph
 */
function GenIdForGraph(graph) {
  if (!graph) {
    return;
  }

  let nodes = graph.nodes();
  for (let i = 0; i < nodes.length; i++) {
    nodes[i].id = i;
  }
}

/**
 * 将图结构转换为邻接表的表示法
 */
function _convertGraph(graph) {
  let adjListOrigin = [];
  let nodes = graph.nodes();
  for (let i = 0; nodes.length; i++) {
    const vAdjList = [];
    for (const { toNode } of nodes[i].outgoing.values()) {
      vAdjList.push(toNode.id);
    }
    adjListOrigin[nodes[i].id] = vAdjList;
  }
  return adjListOrigin;
}


/**
 * 在有向图中查找所有基本环路。
 * 具体的算法实现与图的结构实现无关，只需要一个邻接表表示图中的各边即可。
 * 图中的节点在算法中采用整数表示索引。节点索引是大于等于 0 的。
 * 搜索算法返回一个列表，列表的元素表示一个环。每个环表示为一个数组，数组中的元素是顶点索引。
 *
 * 本算法实现使用了 Donald B. Johnson 提出的搜索基本环路的算法。
 * 原文见：Donald B. Johnson: Finding All the Elementary Circuits of a Directed Graph.
 * SIAM Journal on Computing. Volumne 4, Nr. 1 (1975), pp. 77-84.
 * https://www.cs.tufts.edu/comp/150GA/homeworks/hw1/Johnson%2075.PDF
 * 
 * Johnson 算法的是基于强连通分量搜索的。强连通分量的搜索参考：
 * Robert Tarjan: Depth-first search and linear graph algorithms.
 * In: SIAM Journal on Computing. Volume 1, Nr. 2 (1972), pp. 146-160.
 * 
 * 对有向图的表示方式（邻接矩阵、或邻接表）进行剥离，保留算法结构。
 * 
 * @author zhangyef_at_yonyou_dot_com
 */
class ElementaryCircuitsSearch {
  constructor(graphData) {
    this.graphData = graphData; // 存储原始业务数据节点

    this.B = {};
    this.blockedTags = {};
    this.s = undefined;

    this.stack = [];

    this.circuits = [];
  }

  unblock(u, blockedTags) {
    const that = this;
    blockedTags[u] = false;
    let elementsFromB = this.B[u];
    while (elementsFromB.length > 0) {
      let w = elementsFromB[0];
      elementsFromB.shift();
      if (blockedTags[w]) {
        that.unblock(w, blockedTags);
      }
    }
  }


  /**
   * v 表示顶点
   * @return 找到环路，返回 true；否则返回 false。
   */
  findCircuit(v, s, adjList) {
    const that = this;
    let f = false;

    this.stack.push(v);
    this.blockedTags[v] = true;
    adjList[v].forEach(function (w) {
      if (w === s) {
        // output circuit
        let cycle = [];
        for (let j = 0; j < that.stack.length; j++) {
          cycle.push(this.stack[j]); //TODO 存放索引，也可以变更为存储真实的节点
        }
        that.circuits.push(cycle);

        f = true;
      } else if (!that.blockedTags[w]) {
        if (that.findCircuit(w, s, adjList)) {
          f = true;
        }
      }
    });
    if (f) {
      this.unblock(v);
    } else {
      adjList[v].forEach(function (w) {
        if (that.B[w].indexOf(v) == -1) {
          that.B[w].push(v);
        }
      });
    }

    this.stack.pop();

    return f;
  }

  /**
   * 算法的入口
   */
  run() {
    this.stack = [];
    this.circuits = [];
    this.adjList = _convertGraph(this.graphData);
    this.blockedTags = new Array(this.adjList.length);
    this.B = new Array(this.adjList.length);

    GenIdForGraph(this.graphData);
    let sccs = new StrongConnectedComponents(this.adjList);

    let s = 0;
    while (true) {
      let sccResult = sccs.getAdjacencyList(s);
      if (sccResult && sccResult.getAdjList()) {
        let scc = sccResult.getAdjList();
        s = sccResult.getLowestNodeId();
        for (let j = 0; j < scc.length; j++) {
          if (scc[j] && scc[j].length > 0) {
            this.blockedTags[j] = false;
            this.B[j] = [];
          }
        }

        this.findCircuit(s, s, scc);
        s++;
        continue;
      }
      break;
    }

    return this.circuits;
  }

}