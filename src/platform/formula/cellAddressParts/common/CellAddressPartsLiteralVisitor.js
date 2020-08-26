const CellAddressVisitor = require('platform/formula/runtime/CellAddressVisitor').CellAddressVisitor;

class CellAddressLiteralVisitor extends CellAddressVisitor {
  // TODO: delete this ?
  constructor() {
    super();
  }

  visitCellAddress(ctx) {

  }

  visitCellRange(ctx) {

  }
  
  visitCellAddressExpr(ctx) {
    const sheet = ctx.SheetAddress();
    
    return {
      sheet: sheet ? sheet.getText() : null,
      row: ctx.cellRowAddressExpr().accept(this),
      column: ctx.cellColumnAddressExpr().accept(this)
    }
  }

  visitCellColumnAddressExpr(ctx) {
    return ctx.getText();
  }

  visitCellRowAddressExpr(ctx) {
    return ctx.getText();
  }
}

exports.CellAddressLiteralVisitor = CellAddressLiteralVisitor;