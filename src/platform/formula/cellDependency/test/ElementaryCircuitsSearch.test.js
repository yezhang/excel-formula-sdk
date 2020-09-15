const expect = require('chai').expect;
const Graph = require('platform/formula/cellDependency/common/Graph').Graph;
const Search = require('platform/formula/cellDependency/common/ElementaryCircuitsSearch').ElementaryCircuitsSearch;


describe('有向图算法', function () {
  let graph = undefined;

  function fillEdges(edges, g) {
    if (!edges) {
      return;
    }

    edges.forEach(function (e) {
      g.insertEdge(e[0], e[1]);
    })
  }

  beforeEach(function () {
    graph = new Graph(function (v) {
      return v;
    })
  })
  it('应找到一个环路', function () {
    // ┌───┐         ┌───┐          ┌───┐
    // │ 1 │◀────────│ 2 │─────────▶│ 3 │
    // └───┘         └───┘          └───┘
    //   │             ▲
    //   │             │
    //   ▼             │
    // ┌───┐         ┌───┐
    // │ 4 │────────▶│ 5 │
    // └───┘         └───┘
    fillEdges([
      [1, 4],
      [2, 1], [2, 3],
      [4, 5],
      [5, 2]
    ], graph);

    let search = new Search(graph);
    let ret = search.run();
    expect(ret).to.has.lengthOf(1);
  });

  // 用于处理 A1=A1 的循环引用
  it('应找到指向自己的环路（A1=A1）', function () {
    //   ┌────┐
    //   │    │
    //   ▼    │
    // ┌───┐  │
    // │ 1 │──┘
    // └───┘
    fillEdges([
      [1, 1]
    ], graph);

    let search = new Search(graph);
    let ret = search.run();
    expect(ret).to.has.lengthOf(1);
  });

  it('应找到全部环路', function () {
    // ┌───┐         ┌───┐          ┌───┐
    // │ 1 │◀────────│ 2 │─────────▶│ 3 │
    // └───┘         └───┘          └───┘
    //   │             ▲              │
    //   │             │              │
    //   ▼             │              ▼
    // ┌───┐         ┌───┐          ┌───┐
    // │ 4 │────────▶│ 5 │◀─────────│ 6 │
    // └───┘         └───┘          └───┘
    //   ▲             │              ▲
    //   │             │              │
    //   │             ▼              │
    // ┌───┐         ┌───┐          ┌───┐
    // │ 7 │◀────────│ 8 │─────────▶│ 9 │
    // └───┘         └───┘          └───┘

    fillEdges([
      [1, 4],
      [2, 1], [2, 3],
      [3, 6],
      [4, 5],
      [5, 2], [5, 8],
      [6, 5],
      [7, 4],
      [8, 7], [8, 9],
      [9, 6]
    ], graph);

    let search = new Search(graph);
    let ret = search.run();
    expect(ret).to.has.lengthOf(4);
  });

  it('应找到一个环路(A1=B1, B1=A1)', function () {
    //   ┌──────────┐
    //   ▼          │
    // ┌───┐      ┌───┐
    // │ 1 │      │ 2 │
    // └───┘      └───┘
    //   │          ▲
    //   └──────────┘
    fillEdges([
      [1, 2],
      [2, 1]
    ], graph);

    let search = new Search(graph);
    let ret = search.run();
    expect(ret).to.has.lengthOf(1);
  });

  it('应找不到环路', function () {

    // ┌───┐         ┌───┐          ┌───┐
    // │ 0 │◀────────│ 2 │─────────▶│ 3 │
    // └───┘         └───┘          └───┘
    //   │
    //   │
    //   ▼
    // ┌───┐
    // │ 1 │
    // └───┘

    fillEdges([
      [0, 1],
      [2, 0],
      [2, 3]
    ], graph);

    let search = new Search(graph);
    let ret = search.run();
    expect(ret).to.has.lengthOf(0);
  });
})