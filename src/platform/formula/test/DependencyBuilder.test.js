/**
 * 依赖图构建测试。
 */

const expect = require('chai').expect;
const CellDependencyBuilder = require('platform/formula/cellDependency/DependencyBuilder').DependencyBuilder;
const { CyclicDependencyError, DependencyGraph } = require('platform/formula/cellDependency/DependencyGraph');
const { CellAddressIdentifier, A1ReferenceIdentifier, SheetNameIdentifier,
  CellRangeIdentifier,
  AbsoluteColumnIdentifier, RelativeColumnIdentifier,
  AbsoluteRowIdentifier, RelativeRowIdentifier
} = require('platform/formula/core/SingleFormulaAST');

const { SimpleCellAddress, SimpleCellRange } = require('platform/formula/cellAddressParts/common/CellAddressParts');


describe('依赖图的构建', function () {

  function buildRelativeAddressAST(sheetName, columnText, rowLine) {
    return new CellAddressIdentifier(new SheetNameIdentifier(sheetName), new A1ReferenceIdentifier(
      new RelativeColumnIdentifier(columnText), new RelativeRowIdentifier(rowLine)
    ));
  }

  // 构建语法树节点
  function buildRelativeRangeAST(sheetName, columnText1, rowLine1, columnText2, rowLine2) {
    let startRef = new A1ReferenceIdentifier(
      new RelativeColumnIdentifier(columnText1), new RelativeRowIdentifier(rowLine1)
    );

    let endRef = new A1ReferenceIdentifier(
      new RelativeColumnIdentifier(columnText2), new RelativeRowIdentifier(rowLine2)
    );

    return new CellRangeIdentifier(new SheetNameIdentifier(sheetName), startRef, endRef);
  }

  function buildAbsoluteColumnAddressAST(sheetName, columnText, rowLine) {
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
    if (existingDepGraph) {
      depGraph = existingDepGraph;
    } else {
      depGraph = new DependencyGraph();
    }

    const builder = new CellDependencyBuilder(depGraph);

    // B1 = A1 + $A1 + A1 + C1
    let B1 = SimpleCellAddress.build(activeSheetName, 2, 1);

    let A1 = buildRelativeAddressAST(null, 'A', 1);
    let $A1 = buildAbsoluteColumnAddressAST(null, 'A', 1);
    let A1_2 = A1.clone();
    let C1 = buildRelativeAddressAST(null, 'C', 1);

    builder.addOrUpdateDependencies(B1, [A1, $A1, A1_2, C1]);
    return builder.getDependencyGraph();
  }

  function findIndex(simpleCellAddr, array) {
    return array.findIndex(function (cellData) {
      return cellData.cellAddress.equals(simpleCellAddr);
    })
  }

  it('新建依赖关系', function () {
    let activeSheetName = 'sheet1';
    let depGraph = genDepGraph(activeSheetName);

    let nodes = depGraph.cellList();

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

    let A1 = buildRelativeAddressAST(null, 'A', 1);
    let $A1 = buildAbsoluteColumnAddressAST(null, 'A', 1);
    let D2 = buildRelativeAddressAST(activeSheetName, 'D', 2);

    // 更新后的公式，B1 = A1 + $A1 + D2
    builder.addOrUpdateDependencies(B1, [A1, $A1, D2]);

    let nodes = depGraph.cellList();
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
    // 用例描述：
    // Step1, B1 = A1 + $A1 + A1 + C1
    // Step2, C1 = B1
    // expect: 在 Step2 报错。

    let activeSheetName = 'sheet1';
    // Step1
    let depGraph = genDepGraph(activeSheetName);
    let builder = new CellDependencyBuilder(depGraph);
    let C1 = SimpleCellAddress.build(activeSheetName, 3, 1);
    let B1 = buildRelativeAddressAST(null, 'B', 1);

    expect(function () {
      builder.addOrUpdateDependencies(C1, [B1]);
    }).to.throw(CyclicDependencyError, '单元格地址之间循环依赖');
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
    let D1 = buildRelativeAddressAST(null, 'D', 1);
    let E2 = buildRelativeAddressAST(null, 'E', 2);
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

  it('删除工作表', function() {
    expect.fail();
  });

  it('单元格范围依赖', function () {
    // 当设置单元格范围内的某个单元格公式时，可以建立单元格范围到该单元格地址的依赖
    // 用例描述：
    // Step1, A1 = SUM(B2:C3)，形成 2 个顶点 A1, B2:C3
    // Step2, B2 = D5，形成 2 个顶点 B2，D5；
    // 在 Step2 完成时，形成一条从 'B2:C3' 到 'B2' 的边
    let activeSheetName = 'sheet1';
    let A1 = SimpleCellAddress.build(activeSheetName, 'A', 1);
    let B2_C3 = buildRelativeRangeAST(activeSheetName, 'B', 2, 'C', 3);

    let depGraph = new DependencyGraph();
    const builder = new CellDependencyBuilder(depGraph);
    builder.addOrUpdateDependencies(A1, [B2_C3]);
    let sorted = depGraph.sort();
    expect(sorted).to.has.lengthOf(2);

    let B2 = SimpleCellAddress.build(activeSheetName, 'B', 2);
    let D5 = buildRelativeAddressAST(activeSheetName, 'D', 5);
    builder.addOrUpdateDependencies(B2, [D5]);

    // 预期的依赖效果：
    // ┌────┐   ┌───────┐
    // │ A1 │──▶│ B2:C3 │
    // └────┘   └───────┘
    //              │
    //              ▼
    //          ┌───────┐   ┌────┐
    //          │   B2  │──▶│ D5 │
    //          └───────┘   └────┘

    // 越是优先计算的，索引越小。
    sorted = depGraph.sort();
    expect(sorted).to.has.lengthOf(4);

    let B2_C3Index = findIndex(SimpleCellRange.build(activeSheetName, 'B', 2, 'C', 3), sorted);
    let B2Index = findIndex(SimpleCellAddress.build(activeSheetName, 'B', 2), sorted);

    expect(B2_C3Index > B2Index).to.be.true;
  });
})