/**
 * 用于表格自动填充公式时，生成填充后的公式。
 */
const types = require('base/common/types');
const {buildRelativeCellRefCarrier} = require('platform/formula/cellAddressParts/common/CellAddressParts');
const SingleFormulaContext = require('platform/formula/core/SingleFormulaContext').SingleFormulaContext;


class AutoFillTransformer {
  constructor(ast, activeSheetName) {
    this.formulaAST = ast;

    const that = this;
    // 收集受影响的单元格
    // Array[ CellAddressIdentifier|CellRangeIdentifier]
    let dependenciesList = this.formulaAST.findAllCellRefNodes();
    const cellRefCarriers = [];
    dependenciesList.forEach(function (dep) {
      cellRefCarriers.push(that._buildCellAddress(activeSheetName, dep));
    });

    this._cellRefs = cellRefCarriers;
  }

  // 将单元格地址转化为标准对象
  _buildCellAddress(sheetName, cellAddressOrCellRange) {
    let cellRef = buildRelativeCellRefCarrier(cellAddressOrCellRange);
    let context = new SingleFormulaContext();
    context.activeSheetName = sheetName;
    cellRef.setWorkingContext(context);
    return cellRef;
  }

  _doFormulaTranslate(translateDirectionFn) {
    if(types.isArray(this._cellRefs)){
      this._cellRefs.forEach(function(cellRefCarry){
        translateDirectionFn(cellRefCarry);
      });
    }
    return this.formulaAST.toString();
  }

  getFormulaAfterFillingDown(step){
    return this._doFormulaTranslate(function(cellRefCarry){
      cellRefCarry.translateDown(step);
    });
  }

  getFormulaAfterFillingUp(step){
    return this._doFormulaTranslate(function(cellRefCarry){
      cellRefCarry.translateUp(step);
    });
  }

  getFormulaAfterFillingLeft(step){
    return this._doFormulaTranslate(function(cellRefCarry){
      cellRefCarry.translateLeft(step);
    });
  }

  getFormulaAfterFillingRight(step){
    return this._doFormulaTranslate(function(cellRefCarry){
      cellRefCarry.translateRight(step);
    });
  }
}

exports.AutoFillTransformer = AutoFillTransformer;