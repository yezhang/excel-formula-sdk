/** 
 * 变更单元格结构测试。
 */
const expect = require('chai').expect;
const { SimpleCellAddress, SimpleCellRange } = require('platform/formula/cellAddressParts/common/CellAddressParts');
const { DependencyTransformer } = require('platform/formula/cellDependency/DependencyTransformer');
const { DependencyBuilder } = require('platform/formula/cellDependency/DependencyBuilder');
const { DependencyGraph, CellData } = require('platform/formula/cellDependency/DependencyGraph');

const { buildRelativeRangeAST } = require('platform/formula/test/TestUtilsASTNodeBuilder');

describe('[DependencyTransformer] 变更单元格结构', function () {
  describe('单元格地址', function () {
    beforeEach(function () {

    });

    afterEach(function () {

    });


    it('插入行', function () {
      expect.fail();
    })

    it('删除行', function () {
      expect.fail();
    })

    it('插入列', function () {
      expect.fail();
    })

    it('删除列', function () {
      expect.fail();
    })
  })

  describe('单元格范围', function () {
    let depGraph = undefined;
    let builder = undefined;
    let transformer = undefined;
    beforeEach(function () {
      depGraph = new DependencyGraph();
      builder = new DependencyBuilder(depGraph);
      transformer = new DependencyTransformer(depGraph);
    });

    afterEach(function () {

    });

    it('插入行', function () {
      expect.fail();

      // 测试用例描述:
      // 1) C2 = SUM(A1:B2)
      // 2) 选择第 1 行，向上增加 1 行
      // 3) 期待 C3 = SUM(A2:B3)


    });

    it('删除行', function () {

      // 测试用例描述：
      // 1) C2 = SUM(A1:B3);
      // 2) 选择第 3 行，删除 1 行
      // 3) 预期：C2 = SUM(A1:B2)，即依赖图中包括两个节点，C2 节点、A1:B2 节点。
      const activeSheetName = 'sheet1';

      // 准备数据
      let C2 = SimpleCellAddress.build(activeSheetName, 3, 2);
      let astNode_A1_B3 = buildRelativeRangeAST(activeSheetName, 'A', 1, 'B', 3);
      builder.addOrUpdateDependencies(C2, [astNode_A1_B3]);
      transformer.removeRows(activeSheetName, 3, 1);

      let range_A1_B2 = SimpleCellRange.build(activeSheetName, 'A', 1, 'B', 2);
      // 验证依赖图的结构, depGraph 
      let node = depGraph.lookupCell(new CellData(range_A1_B2));
      expect(node).to.not.be.undefined;
    });

    it('插入列', function () {
      expect.fail();
    });

    it('删除列', function () {
      expect.fail();
    });
  })
})