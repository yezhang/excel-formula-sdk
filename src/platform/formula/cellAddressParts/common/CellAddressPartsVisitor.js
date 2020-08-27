const CellAddressVisitor = require('platform/formula/runtime/CellAddressVisitor').CellAddressVisitor;

class CellAddressLiteralVisitor extends CellAddressVisitor {
  constructor() {
    super();
  }

  visitCellAddress(ctx) {

  }

  visitCellRange(ctx) {

  }

  visitA1Reference(ctx) {

  }

  visitA1Column(ctx) {

  }

  visitA1Row(ctx) {

  }

  visitA1RelativeColumn(ctx) {

  }

  visitA1AbsoluteColumn(ctx) {
    
  }

  visitA1RelativeRow(ctx) {

  }

  visitA1AbsoluteRow(ctx) {

  }
}

exports.CellAddressLiteralVisitor = CellAddressLiteralVisitor;