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

const { SimpleCellAddress } = require('platform/formula/cellAddressParts/common/CellAddressParts');


describe('依赖图的构建', function () {

  function buildRelativeAddress(sheetName, columnText, rowLine) {
    return new CellAddressIdentifier(sheetName, new A1ReferenceIdentifier(
      new RelativeColumnIdentifier(columnText), new RelativeRowIdentifier(rowLine)
    ));
  }
  function buildAbsoluteColumnAddress(sheetName, columnText, rowLine){
    return new CellAddressIdentifier(sheetName, new A1ReferenceIdentifier(
      new AbsoluteColumnIdentifier(columnText), new RelativeRowIdentifier(rowLine)
    ));
  }
  /**
   * 生成一个依赖图。
   * 
   * B1 = A1 + $A1 + A1 + C1
   */
  function genDepGraph(activeSheetName) {
    let depGraph = new DependencyGraph();
    const builder = new CellDependencyBuilder(depGraph);

    // B1 = A1 + $A1 + A1 + C1
    let B1 = SimpleCellAddress.build(activeSheetName, 2, 1);

    
    let A1 = buildRelativeAddress(null, 'A', 1);
    let $A1 = buildAbsoluteColumnAddress(null, 'A', 1);
    let A1_2 = A1.clone();
    let C1 = buildRelativeAddress(null, 'C', 1);

    let cellRefNodes = [A1, $A1, A1_2, C1];

    builder.addOrUpdateDependencies(B1, cellRefNodes);

    return builder.getDependencyGraph();
  }

  function findIndex(simpleCellAddr, array) {
    return array.findIndex(function (v) {
      return v.equals(simpleCellAddr);
    })
  }

  it('新建依赖关系', function () {
    let activeSheetName = 'sheet1';
    let depGraph = genDepGraph(activeSheetName);

    let nodes = depGraph.simpleCellAddressList();

    // 包括 B1->A1, C1
    expect(nodes).to.have.lengthOf(3);

    let sorted = depGraph.sort();

    // 验证数组中元素的先后关系
    // A1 在 B1 前，C1 在 B1 签名
    let B1Index = findIndex(SimpleCellAddress.build(activeSheetName, 2, 1), sorted);
    let A1Index = findIndex(SimpleCellAddress.build(activeSheetName, 1, 1), sorted);
    let C1Index = findIndex(SimpleCellAddress.build(activeSheetName, 3, 1), sorted);

    expect(A1Index < B1Index, 'A1, B1 依赖错误');
    expect(C1Index < B1Index, 'C1, B1 依赖错误');
  })

  it('更新依赖关系', function () {
    let activeSheetName = 'sheet1';
    let depGraph = genDepGraph(activeSheetName);

    const builder = new CellDependencyBuilder(depGraph);
    let B1 = SimpleCellAddress.build(activeSheetName, 2, 1);

    let A1 = buildRelativeAddress(null, 'A', 1);
    let $A1 = buildAbsoluteColumnAddress(null, 'A', 1);
    let D2 = buildRelativeAddress(activeSheetName, 'D', 2);
    let cellRefNodes = [A1, $A1, D2];

    // 更新后的公式，B1 = A1 + $A1 + D2
    builder.addOrUpdateDependencies(B1, cellRefNodes);

    let nodes = depGraph.simpleCellAddressList();
    // 包括 B1->A1, D2
    expect(nodes).to.have.lengthOf(3);

    let sorted = depGraph.sort();

    // 验证数组中元素的先后关系
    // A1 在 B1 前，D2 在 B1 前
    let B1Index = findIndex(SimpleCellAddress.build(activeSheetName, 2, 1), sorted);
    let A1Index = findIndex(SimpleCellAddress.build(activeSheetName, 1, 1), sorted);
    let D2Index = findIndex(SimpleCellAddress.build(activeSheetName, 4, 1), sorted);

    expect(A1Index < B1Index, 'A1, B1 依赖错误');
    expect(D2Index < B1Index, 'D2, B1 依赖错误');
  });

  it('删除顶点', function () {
    // 当用户删除某个单元格的公式时，删除依赖关系
    let activeSheetName = 'sheet1';
    let depGraph = genDepGraph(activeSheetName);

    const builder = new CellDependencyBuilder(depGraph);
    let B1 = {
      column: 2,
      row: 1
    };
    builder.clear(activeSheetName, B1);

    let sorted = depGraph.sort();

    expect(sorted).to.has.lengthOf(0);
  });

  it('单元格范围依赖', function () {

  });
})