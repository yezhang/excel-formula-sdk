const { SheetNameIdentifier,
  CellRangeIdentifier, CellAddressIdentifier,
  A1ReferenceIdentifier,
  AbsoluteColumnIdentifier, RelativeColumnIdentifier,
  AbsoluteRowIdentifier, RelativeRowIdentifier
} = require('platform/formula/core/SingleFormulaAST');

// 构建语法树节点
exports.buildRelativeRangeAST = function buildRelativeRangeAST(sheetName, columnText1, rowLine1, columnText2, rowLine2) {
  let startRef = new A1ReferenceIdentifier(
    new RelativeColumnIdentifier(columnText1), new RelativeRowIdentifier(rowLine1)
  );

  let endRef = new A1ReferenceIdentifier(
    new RelativeColumnIdentifier(columnText2), new RelativeRowIdentifier(rowLine2)
  );

  return new CellRangeIdentifier(new SheetNameIdentifier(sheetName), startRef, endRef);
}
