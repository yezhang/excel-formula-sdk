/**
 * 依赖图构建测试。
 */

const expect = require('chai').expect;
const CellDependencyBuilder = require('platform/formula/cellDependency/DependencyBuilder').CellDependencyBuilder;
const DependencyGraph = require('platform/formula/cellDependency/DependencyGraph').DependencyGraph;
const { CellAddressIdentifier, A1ReferenceIdentifier,
  AbsoluteColumnIdentifier, RelativeColumnIdentifier,
  AbsoluteRowIdentifier, RelativeRowIdentifier
} = require('platform/formula/core/SingleFormulaAST');
// const A1ReferenceIdentifier
// const AbsoluteColumnIdentifier
// const RelativeColumnIdentifier
// const AbsoluteRowIdentifier
// const RelativeRowIdentifier

describe('依赖图的构建', function () {
  it('新建依赖关系', function () {
    let depGraph = new DependencyGraph();

    const builder = new CellDependencyBuilder(depGraph);
    let activeSheetName = 'sheet1';
    // B1 = A1 + $A1 + A1 + C1
    let cellAddr = {
      column: 2,
      row: 1
    };

    let A1 = new CellAddressIdentifier(null, new A1ReferenceIdentifier(
      new RelativeColumnIdentifier('A'), new RelativeRowIdentifier(1)
    ));

    let $A1 = new CellAddressIdentifier(null, new A1ReferenceIdentifier(
      new AbsoluteColumnIdentifier('A'), new RelativeRowIdentifier(1)
    ));

    let A1_2 = A1.clone();

    let C1 = new CellAddressIdentifier(null, new A1ReferenceIdentifier(
      new RelativeColumnIdentifier('C'), new RelativeRowIdentifier(1)
    ));

    let cellRefNodes = [A1, $A1, A1_2, C1];

    builder.addOrUpdateDependencies(activeSheetName, cellAddr, cellRefNodes);

    let nodes = depGraph.simpleCellAddressList();
    expect(nodes).to.have.lengthOf(3);
  })

  it('更新依赖关系', function () {

  })

  it('删除顶点', function () {

  })

  it('单元格范围依赖', function () {

  })
})