const { SimpleCellAddress, SimpleCellRange } = require('platform/formula/cellAddressParts/common/CellAddressParts');


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

  _doTransformation(affectedCellList, addrSelfActionFn, depActionFn) {
    const that = this;
    affectedCellList.forEach(function (node) {
      let cellData = node.data;
      let addrSelf = cellData.cellAddress;
      let oldAddr = addrSelf.clone();

      // 变更自身位置
      addrSelfActionFn(addrSelf);

      that.depGraph.updateCellAddress(oldAddr, addrSelf);

      // 变更受影响的公式
      let depmap = node.incoming;
      for (let { props } of depmap.values()) {
        let carryList = props; // props 的具体值，是 DependencyBuilder.addOrUpdateDependencies 设置的。
        carryList.forEach(function (cellCarry) {
          depActionFn(cellCarry, addrSelf);
        });
      }
    });
  }

  insertRows(activeSheetName, beforeWhich, numberOfRows) {
    let affectedCellList = this._findDirtyCells(function (addr) {
      return addr.isAffactedByInsertingRows(activeSheetName, beforeWhich, numberOfRows);
    });

    this._doTransformation(affectedCellList,
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
    this._doTransformation(affectedCellList,
      function (addrSelf) {
        if(addrSelf.willBeRemovedWhenRemovingRows(activeSheetName, startFrom, numberOfRows)){
          addrSelf.lost();
          return;
        }

        addrSelf.removeRows(activeSheetName, startFrom, numberOfRows);
      },
      function (cellCarry, addrSelf) {
        if(addrSelf.isLost()) {
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

    this._doTransformation(affectedCellList,
      function (addrSelf) {
        // 变更自身位置
        addrSelf.insertColumns(activeSheetName, beforeWhich, numberOfRows);
      },
      function (cellCarry) {
        // 变更每个依赖本单元格的公式语法树节点
        cellCarry.insertColumns(beforeWhich, numberOfRows);
      }
    );
  }

  removeColumns(activeSheetName, startFrom, numberOfColumns) {
    let affectedCellList = this._findDirtyCells(function (simpleCellAddress) {
      return simpleCellAddress.isAffactedByRemovingColumns(activeSheetName, startFrom, numberOfColumns);
    });
    this._doTransformation(affectedCellList,
      function (addrSelf) {
        if(addrSelf.willBeRemovedWhenRemovingRows(activeSheetName, startFrom, numberOfColumns)){
          addrSelf.lost();
          return;
        }

        addrSelf.removeColumns(activeSheetName, startFrom, numberOfColumns);
      },
      function (cellCarry, addrSelf) {
        if(addrSelf.isLost()) {
          cellCarry.lost();
          return;
        }

        cellCarry.removeColumns(startFrom, numberOfColumns);
      }
    );
  }

}

exports.DependencyTransformer = DependencyTransformer;
