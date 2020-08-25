/**
 * 图结构: 有向图
 */

class Node {
  constructor(data) {
    this.data = data;

    this.incoming = new Map();
    this.outgoing = new Map();
  }
}

class Graph {
  constructor(hashFn) {
    // noop
    this._hashFn = hashFn;
    this._nodes = new Map();
  }

  roots() {
    const ret = [];
    for(let node of this._nodes.values()) {
      if(node.outgoing.size === 0) {
        ret.push(node);
      }
    }

    return ret;
  }

  insertEdge(from, to) {
    const fromNode = this.lookupOrInsertNode(from);
    const toNode = this.lookupOrInsertNode(to);

    fromNode.outgoing.set(this._hashFn(to), toNode);
    toNode.incoming.set(this._hashFn(from), fromNode);
  }

  removeNode(data) {
    const key = this._hashFn(data);
    this._nodes.delete(key);
    for (let node of this._nodes.values()) {
      node.outgoing.delete(key);
      node.incoming.delete(key);
    }
  }

  lookupOrInsertNode(data) {
    const key = this._hashFn(data);
    let node = this._nodes.get(key);

    if(!node) {
      node = new Node(data);
      this._nodes.set(key, node);
    }

    return node;
  }

  lookup(data) {
    return this._nodes.get(this._hashFn(data));
  }

  isEmpty() {
    this._nodes.size === 0;
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
}

exports.Node = Node;
exports.Graph = Graph;

