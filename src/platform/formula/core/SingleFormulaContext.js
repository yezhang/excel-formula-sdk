/**
 * 单个单元格公式的上下文信息，包括活动表格、活动单元格信息等。
 */

class SingleFormulaContext {
  constructor() {
    this.activeSheetName = undefined;
  }

  setActiveSheetName(activeSheetName) {
    this.activeSheetName = activeSheetName;
  }
}

exports.SingleFormulaContext = SingleFormulaContext;