/**
 * 自动修复公式中的单元格范围
 */
const {SimpleCellRange} = require('platform/formula/cellAddressParts/common/CellAddressParts');
const {A1ReferenceIdentifier} = require('platform/formula/core/SingleFormulaAST');

class AutoFixFormulaTool {

  /**
   * 在语法树中修复单元格范围的表达方式。
   * 修正为左上角、右下角的表达方式。
   * 
   * 支持级联调用。
   * 
   * 本函数需要了解语法树的节点结构。
   * @see SingleFormulaAST
   * 
   * 例如, 
   * 将 A5:A1 修正为 A1:A5；
   * 将 B3:A1 修正为 A1:B3
   * 将 E4:G2 修正为 E2:G4
   */
  fixCellRangeInPlace(activeSheetName, formulaAST) {
    let cellRefRangeNodes = formulaAST.findAllCellRefNodes().rangeNodes;

    /**
     * 
     * @param {CellRangeIdentifier} rangeNode 
     */
    function _fixRange(rangeNode){
      const range = SimpleCellRange.buildFromASTNode(activeSheetName, rangeNode);
      
      const startRefId = rangeNode.startRef;
      const column1Id = startRefId.columnRef;
      const row1Id = startRefId.rowRef;

      const endRefId  = rangeNode.endRef;
      const column2Id = endRefId.columnRef;
      const row2Id = endRefId.rowRef;

      const topLeft = {
        columnRef: range.start.column <= range.end.column ? column1Id : column2Id,
        rowRef: range.start.row <= range.end.row ? row1Id : row2Id
      }

      const bottomRight = {
        columnRef: range.start.column > range.end.column ? column1Id : column2Id,
        rowRef: range.start.row > range.end.row ? row1Id : row2Id
      }

      // 重新排列组合
      const fixStartRefId = new A1ReferenceIdentifier(topLeft.columnRef, topLeft.rowRef);
      const fixEndRefId = new A1ReferenceIdentifier(bottomRight.columnRef, bottomRight.rowRef);

      rangeNode.startRef = fixStartRefId;
      rangeNode.endRef = fixEndRefId;
    }
    cellRefRangeNodes.forEach(_fixRange);
    return this;
  }
}

exports.AutoFixFormulaTool = AutoFixFormulaTool;