/**
 * 图数据结构测试。
 */
const expect = require('chai').expect;
const Graph = require('platform/formula/cellDependency/common/Graph').Graph;

describe('图', function () {
  it('应正确构造一个图', function () {
    let g = new Graph(function(v){
      return v;
    });

    // 1 -> 2
    // 2 -> 3
    // 2 -> 4
    // 3 -> 4
    g.insertEdge(1, 2);
    g.insertEdge(2, 3);
    g.insertEdge(2, 4);
    g.insertEdge(3, 4);

    let nodes = g.nodes(); // expect 1, 2, 3, 4
    let roots = g.roots(); // expect 4

    expect(nodes).to.has.lengthOf(4);
    expect(roots).to.has.lengthOf(1);
    expect(roots[0].data).to.equal(4);
  })
});