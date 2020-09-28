const types = require('base/common/types');
const ArrayUtils = require('base/ArrayUtils');
const { SimpleCellAddress } = require('platform/formula/cellAddressParts/common/CellAddressParts');

/**
 * 对依赖图做结构变换：增行、减行、增列、减列。
 * 
 * 当发生增行：
 * 在依赖图中寻找所有需要变更的顶点集合。
 * 针对每个待变更节点，调整其地址位置、变更所有对于本单元格的引用文本、
 */
class DependencyTransformer {
  constructor(depGraph) {
    this.depGraph = depGraph;
  }

  _findDirtyCells(filterFn) {
    let cellList = this.depGraph.cellList();
    let affectedCellList = [];
    cellList.forEach(function (node) {
      let cellData = node.data;

      let addr = cellData.cellAddress;
      // 如果地址受影响，则执行移动；如果地址没有受到影响，不进行处理。
      if (filterFn(addr)) {
        affectedCellList.push(node);
      }
    })
    return affectedCellList;
  }

  /**
   * 
   * @param {*} affectedCellList 
   * @param {*} addrSelfActionFn 当前单元格地址自身的行为函数
   * @param {*} depActionFn 当前单元格所依赖的单元格的行为函数
   * @return 受到影响的公式单元格的地址列表。
   */
  _doTransformation(affectedCellList, addrSelfActionFn, depActionFn) {

    const updatedFormulaAddressNodes = []; // “公式内容”受到影响的单元格的新地址
    affectedCellList.forEach(function (node) {
      let cellData = node.data;
      let addrSelf = cellData.cellAddress;

      // 变更自身位置
      addrSelfActionFn(addrSelf, node);

      // 变更受影响的公式
      let depmap = node.incoming;
      for (let { fromNode, props } of depmap.values()) {
        let carryList = props; // props 的具体值，是 DependencyBuilder.addOrUpdateDependencies 设置的。

        // 对于从 [单元格范围 -> 具体单元格] 的边，是没有 ast 节点属性的。
        if (!types.isArray(carryList)) {
          continue;
        }

        carryList.forEach(function (cellCarry) {
          depActionFn(cellCarry, addrSelf);
        });

        // 记录依赖 addrSelf 的公式单元格地址
        // 当 fromNode 也依赖于其他单元格地址时，fromNode 可能已经在 updatedFormulaAddress 中存在。
        updatedFormulaAddressNodes.push(fromNode);
      }
    });

    // 更新依赖图中的索引
    this.depGraph._syncCellAddress();

    let updatedFormulaAddress = updatedFormulaAddressNodes.filter(function (node) {
      let { data: { cellAddress } } = node;
      return (cellAddress.isLost() === false);
    }).map(function (node) {
      let cellData = node.data;
      return cellData.cellAddress;
    });

    // updatedFormulaAddress 去重
    updatedFormulaAddress = ArrayUtils.uniqueArray(updatedFormulaAddress, SimpleCellAddress.defaultHashFn);
    return updatedFormulaAddress;
  }

  renameSheet(activeSheetName, oldSheetName, newSheetName) {

    let affectedCellList = this._findDirtyCells(function (cellAddress) {
      return oldSheetName === cellAddress.sheet;
    });

    return this._doTransformation(affectedCellList,
      function (addrSelf) {
        addrSelf.setSheet(newSheetName);
      },
      function (cellCarry) {
        cellCarry.setSheetName(newSheetName);
      });
  }

  /**
   * @return 需要更新公式的单元格的新地址。
   * 返回更新地址后的单元格列表，这些单元格可以用于外部表格组件更新公式使用。
   */
  insertRows(activeSheetName, beforeWhich, numberOfRows) {
    let affectedCellList = this._findDirtyCells(function (addr) {
      return addr.isAffactedByInsertingRows(activeSheetName, beforeWhich, numberOfRows);
    });

    return this._doTransformation(affectedCellList,
      function (addrSelf) {
        // 变更自身位置
        addrSelf.insertRows(activeSheetName, beforeWhich, numberOfRows);
      },
      function (cellCarry) {
        // 变更每个依赖本单元格的公式语法树节点
        cellCarry.insertRows(beforeWhich, numberOfRows);
      }
    );

  }

  removeRows(activeSheetName, startFrom, numberOfRows) {
    let affectedCellList = this._findDirtyCells(function (simpleCellAddress) {
      return simpleCellAddress.isAffactedByRemovingRows(activeSheetName, startFrom, numberOfRows);
    });
    return this._doTransformation(affectedCellList,
      function (addrSelf) {
        if (addrSelf.willBeRemovedWhenRemovingRows(activeSheetName, startFrom, numberOfRows)) {
          addrSelf.lost();
          return;
        }

        addrSelf.removeRows(activeSheetName, startFrom, numberOfRows);
      },
      function (cellCarry, addrSelf) {
        if (addrSelf.isLost()) {
          cellCarry.lost();
          return;
        }

        cellCarry.removeRows(startFrom, numberOfRows);
      }
    );
  }

  insertColumns(activeSheetName, beforeWhich, numberOfColumns) {
    let affectedCellList = this._findDirtyCells(function (addr) {
      return addr.isAffactedByInsertingColumns(activeSheetName, beforeWhich, numberOfColumns);
    });

    return this._doTransformation(affectedCellList,
      function (addrSelf) {
        // 变更自身位置
        addrSelf.insertColumns(activeSheetName, beforeWhich, numberOfColumns);
      },
      function (cellCarry) {
        // 变更每个依赖本单元格的公式语法树节点
        cellCarry.insertColumns(beforeWhich, numberOfColumns);
      }
    );
  }

  removeColumns(activeSheetName, startFrom, numberOfColumns) {
    let affectedCellList = this._findDirtyCells(function (simpleCellAddress) {
      return simpleCellAddress.isAffactedByRemovingColumns(activeSheetName, startFrom, numberOfColumns);
    });
    return this._doTransformation(affectedCellList,
      function (addrSelf) {
        if (addrSelf.willBeRemovedWhenRemovingColumns(activeSheetName, startFrom, numberOfColumns)) {
          addrSelf.lost();
          return;
        }

        addrSelf.removeColumns(activeSheetName, startFrom, numberOfColumns);
      },
      function (cellCarry, addrSelf) {
        if (addrSelf.isLost()) {
          cellCarry.lost();
          return;
        }

        cellCarry.removeColumns(startFrom, numberOfColumns);
      }
    );
  }
}

exports.DependencyTransformer = DependencyTransformer;
