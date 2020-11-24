const Map = require('core-js-pure/features/map');

/**
 * 图结构: 有向图
 */

class Node {
  constructor(data) {
    this.data = data;

    this.incoming = new Map(); //TODO: 考虑 Map 类型的兼容性
    this.outgoing = new Map();
  }

  clone() {
    function cloneMap(map) {
      const copy = new Map();
      map.forEach(function (v, k) {
        copy.set(k, v);
      });

      return copy;
    }
    let copy = new Node(this.data);
    copy.incoming = cloneMap(this.incoming);
    copy.outgoing = cloneMap(this.outgoing);
    return copy;
  }
}



class Graph {
  constructor(hashFn) {
    // noop
    this._hashFn = hashFn;
    this._nodes = new Map();
  }

  clone() {
    /**
     * 拷贝 key，拷贝 value（value中保存着 Node）
     */
    function cloneNodes(map) {
      let copy = new Map();
      map.forEach(function (v, k) {
        if (v instanceof Node) {
          copy.set(k, v.clone());
        }
      });
      return copy;
    }
    let copy = new Graph(this._hashFn);
    copy._nodes = cloneNodes(this._nodes);
    return copy;
  }

  roots() {
    const ret = [];
    for (let node of this._nodes.values()) {
      if (node.outgoing.size === 0) {
        ret.push(node);
      }
    }

    return ret;
  }

  /**
   * 返回所有顶点
   */
  nodes() {
    const ret = [];
    for (let node of this._nodes.values()) {
      ret.push(node);
    }

    return ret;
  }

  /**
   * 返回所有顶点的 key
   */
  nodeKeys() {
    const ret = [];
    for (let node of this._nodes.keys()) {
      ret.push(node);
    }

    return ret;
  }

  /**
   * 返回所有顶点的原始数据
   */
  nodeDatas() {
    const ret = [];
    for (let node of this._nodes.values()) {
      ret.push(node.data);
    }

    return ret;
  }

  // 边上可以携带属性 props 对象。
  insertEdge(from, to, props) {
    const fromNode = this.lookupOrInsertNode(from);

    const toNode = this.lookupOrInsertNode(to);

    fromNode.outgoing.set(this._hashFn(to), { toNode, props });
    toNode.incoming.set(this._hashFn(from), { fromNode, props });
  }


  _refreshNodeEdges(node) {
    const that = this;
    function _valueList(map) {
      const ret = [];
      for (let v of map.values()) {
        ret.push(v);
      }

      return ret;
    }


    // 刷新入度
    const incomingList = _valueList(node.incoming);
    const syncedInComing = new Map();
    incomingList.forEach(function (incoming) {
      let fromNode = incoming.fromNode;
      syncedInComing.set(that._hashFn(fromNode.data), incoming);
    })

    node.incoming.clear();
    node.incoming = syncedInComing;

    // 刷新出度
    const outgoingList = _valueList(node.outgoing);
    const syncedOutgoing = new Map();
    outgoingList.forEach(function (outgoing) {
      let toNode = outgoing.toNode;
      syncedOutgoing.set(that._hashFn(toNode.data), outgoing);
    })

    node.outgoing.clear();
    node.outgoing = syncedOutgoing;
  }

  /**
   * 刷新图的状态：用于根据图中的节点，更新图的 hashkey。
   * 
   * 假设图中节点持有的数据都已经更新。
   */
  refreshNodes() {
    const that = this;
    let nodes = this.nodes();
    let syncedNodes = new Map();
    nodes.forEach(function (node) {
      syncedNodes.set(that._hashFn(node.data), node);

      // 刷新节点的入度、出度
      that._refreshNodeEdges(node);
    });

    this._nodes.clear();
    this._nodes = syncedNodes;
  }

  /**
   * 当 data 对象的部分数据域发生变更时，需要更新这部分数据。
   * @param {*} data 
   */
  updateNode(data) {
    let node = this.lookup(data);
    if (node) {
      node.data = data;
      return true;
    }

    return false;
  }

  /**
   * 移除 oldKey 位置处的数据，移动到新位置。
   * 
   * 当节点的数据发生更新后，图中节点的 key 由于会受到 data 的影响，也需要更新。
   * 此时，使用本方法移动节点。在移动后，节点的真实数据不变。
   * @param {Object} oldData 节点的旧数据 
   * @param {Object} data 节点数据
   */
  moveNode(oldData, data) {
    let oldNode = this.lookup(oldData);
    let oldKey = this.lookupKey(oldData);
    this._nodes.delete(oldKey);

    const newKey = this._hashFn(data);
    this._nodes.set(newKey, oldNode);
  }

  removeNode(data) {
    const key = this._hashFn(data);
    this._nodes.delete(key);
    for (let node of this._nodes.values()) {
      node.outgoing.delete(key);
      node.incoming.delete(key);
    }
  }

  /**
   * 移除从 data 节点出发的所有有向边
   */
  removeNodeOutgoings(data) {
    const node = this.lookup(data);
    if (!node) {
      return;
    }
    const fromKey = this._hashFn(data);
    const outgoings = node.outgoing;
    for (let { toNode } of outgoings.values()) {
      toNode.incoming.delete(fromKey);
      const toKey = this._hashFn(toNode.data);
      node.outgoing.delete(toKey);
    }
  }

  /**
   * 移除孤立节点：没有入度、没有出度。
   */
  clearIsolatedNodes() {
    // 如果生成了孤立节点，则移除孤立的节点
    let nodes = this.nodes();
    for (let i = 0; i < nodes.length; i++) {
      let n = nodes[i];
      if (n.outgoing.size === 0 && n.incoming.size === 0) {
        this.removeNode(n.data);
      }
    }
  }

  lookupOrInsertNode(data) {
    const key = this._hashFn(data);
    let node = this._nodes.get(key);

    if (!node) {
      node = new Node(data);
      this._nodes.set(key, node);
    }

    return node;
  }

  lookup(data) {
    return this._nodes.get(this._hashFn(data));
  }

  lookupKey(data) {
    return this._hashFn(data);
  }

  isEmpty() {
    return this._nodes.size === 0;
  }

  toString() {
    let data = [];
    for (const entry of this._nodes) {
      let key = entry[0];
      let value = entry[1];
      data.push(`${key}, (incoming)[${[...value.incoming.keys()].join(', ')}], (outgoing)[${[...value.outgoing.keys()].join(', ')}]`)
    }

    return data.join('\n');
  }

  /**
   * 输出 DOT 语言的有向图结构。
   * @see https://graphviz.org/doc/info/lang.html
   * @see https://dreampuf.github.io/GraphvizOnline/
   */
  toDotString() {
    let edges = [];
    for (const entry of this._nodes) {
      let fromkey = entry[0];
      let value = entry[1];
      let outgoing = value.outgoing.keys();
      for (const going of outgoing) {
        edges.push(`\"${fromkey}\" -> \"${going}\"`);
      }
    }
    return `digraph g {` +
      `${edges.join(';')}` +
      `}`;
  }
}

exports.Node = Node;
exports.Graph = Graph;

