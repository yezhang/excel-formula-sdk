/**
 * 依赖图构建测试。
 */

const expect = require('chai').expect;
const CellDependencyBuilder = require('platform/formula/cellDependency/DependencyBuilder').CellDependencyBuilder;
const DependencyGraph = require('platform/formula/cellDependency/DependencyGraph').DependencyGraph;
const { CellAddressIdentifier, A1ReferenceIdentifier, SheetNameIdentifier,
  AbsoluteColumnIdentifier, RelativeColumnIdentifier,
  AbsoluteRowIdentifier, RelativeRowIdentifier
} = require('platform/formula/core/SingleFormulaAST');

const { SimpleCellAddress } = require('platform/formula/cellAddressParts/common/CellAddressParts');


describe('依赖图的构建', function () {

  function buildRelativeAddress(sheetName, columnText, rowLine) {
    return new CellAddressIdentifier(new SheetNameIdentifier(sheetName), new A1ReferenceIdentifier(
      new RelativeColumnIdentifier(columnText), new RelativeRowIdentifier(rowLine)
    ));
  }
  function buildAbsoluteColumnAddress(sheetName, columnText, rowLine) {
    return new CellAddressIdentifier(new SheetNameIdentifier(sheetName), new A1ReferenceIdentifier(
      new AbsoluteColumnIdentifier(columnText), new RelativeRowIdentifier(rowLine)
    ));
  }
  /**
   * 生成一个依赖图。
   * 
   * B1 = A1 + $A1 + A1 + C1
   */
  function genDepGraph(activeSheetName, existingDepGraph) {
    let depGraph = undefined;
    if(existingDepGraph) {
      depGraph = existingDepGraph;
    }else {
      depGraph = new DependencyGraph();
    }

    const builder = new CellDependencyBuilder(depGraph);

    // B1 = A1 + $A1 + A1 + C1
    let B1 = SimpleCellAddress.build(activeSheetName, 2, 1);

    let A1 = buildRelativeAddress(null, 'A', 1);
    let $A1 = buildAbsoluteColumnAddress(null, 'A', 1);
    let A1_2 = A1.clone();
    let C1 = buildRelativeAddress(null, 'C', 1);

    builder.addOrUpdateDependencies(B1, [A1, $A1, A1_2, C1]);
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

    // 更新后的公式，B1 = A1 + $A1 + D2
    builder.addOrUpdateDependencies(B1, [A1, $A1, D2]);

    let nodes = depGraph.simpleCellAddressList();
    // 包括 B1->A1, D2
    expect(nodes).to.have.lengthOf(3);

    let sorted = depGraph.sort();

    // 验证数组中元素的先后关系
    // A1 在 B1 前，D2 在 B1 前
    let B1Index = findIndex(SimpleCellAddress.build(activeSheetName, 2, 1), sorted);
    let A1Index = findIndex(SimpleCellAddress.build(activeSheetName, 1, 1), sorted);
    let D2Index = findIndex(SimpleCellAddress.build(activeSheetName, 4, 1), sorted);

    expect(A1Index < B1Index, 'A1, B1 依赖错误').to.be.true;
    expect(D2Index < B1Index, 'D2, B1 依赖错误').to.be.true;
  });

  it('循环依赖检测', function () {
    expect.fail();
  });

  it('删除顶点', function () {
    // 当用户删除某个单元格的公式时，删除依赖关系
    // 用例描述：
    // Step1, B1 = A1 + $A1 + A1 + C1
    // Step2, delete B1
    // Step3, B1 = A1 + $A1 + A1 + C1
    // Step4, C1 = D1 + E2
    // Step5, delete B1

    let activeSheetName = 'sheet1';

    // step1
    let depGraph = genDepGraph(activeSheetName);

    let builder = new CellDependencyBuilder(depGraph);
    let B1 = { column: 2, row: 1 };
    // step2
    builder.clear(activeSheetName, B1);

    let sorted = depGraph.sort();
    expect(sorted).to.has.lengthOf(0);
    
    // step3 B1 = A1 + $A1 + A1 + C1
    depGraph = genDepGraph(activeSheetName, depGraph);
    sorted = depGraph.sort();
    expect(sorted).to.has.lengthOf(3);

    // step4 C1 = D1 + E2
    builder = new CellDependencyBuilder(depGraph);
    let C1 = SimpleCellAddress.build(activeSheetName, 3, 1);
    let D1 = buildRelativeAddress(null, 'D', 1);
    let E2 = buildRelativeAddress(null, 'E', 2);
    builder.addOrUpdateDependencies(C1, [D1, E2]);

    // 此时，预期的依赖关系图是：
    //                ┌──────┐
    //     ┌─────────▶│  A1  │
    //     │          └──────┘
    // ┌──────┐                         ┌──────┐
    // │  B1  │           ┌────────────▶│  D1  │
    // └──────┘           │             └──────┘
    //     │          ┌──────┐
    //     └─────────▶│  C1  │
    //                └──────┘
    //                    │             ┌──────┐
    //                    └────────────▶│  E1  │
    //                                  └──────┘

    sorted = depGraph.sort();
    expect(sorted).to.has.lengthOf(5);

    let D1Index = findIndex(SimpleCellAddress.build(activeSheetName, 4, 1), sorted);
    let E1Index = findIndex(SimpleCellAddress.build(activeSheetName, 5, 1), sorted);
    let C1Index = findIndex(SimpleCellAddress.build(activeSheetName, 3, 1), sorted);
    let A1Index = findIndex(SimpleCellAddress.build(activeSheetName, 1, 1), sorted);
    let B1Index = findIndex(SimpleCellAddress.build(activeSheetName, 2, 1), sorted);

    expect(B1Index > A1Index).to.be.true;
    expect(B1Index > C1Index).to.be.true;
    expect(C1Index > D1Index).to.be.true;
    expect(C1Index > E1Index).to.be.true;
  });

  it('单元格范围依赖', function () {
    expect.fail();
  });
})