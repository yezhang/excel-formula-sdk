const antlr4 = require('antlr4');

const CellAddressLexer = require('../runtime/CellAddressLexer').CellAddressLexer;
const CellAddressParser = require('../runtime/CellAddressParser').CellAddressParser;
const CellAddressLiteralVisitor = require('./CellAddressLiteralVisitor').CellAddressLiteralVisitor;

class SimpleCellAddress {
  constructor(sheet, row, column) {
    this.sheet = sheet;
    this.row = row;
    this.column = column;
  }

  getDescription() {
    return {
      sheet: this.sheet,
      row: this.row,
      column: this.column
    }
  }
}

/**
 * 单元格地址
 */
class CellAddress {
  constructor(workingSheetName, cellAddressString) {
    this.workingSheet = workingSheetName;
    const chars = new antlr4.InputStream(cellAddressString);
    const lexer = new CellAddressLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new CellAddressParser(tokens);

    const ast = parser.cellAddressExpr();
    this.addressDescription = ast.accept(new CellAddressLiteralVisitor());

    if(!this.addressDescription.sheet){
      this.addressDescription.sheet = workingSheetName;
    }
  }

  toSimpleAddress() {
    
  }
}

/**
 * 单元格范围
 */
class CellRange {
  constructor(workingSheetName, cellRangeString) {

  }
}

exports.SimpleCellAddress = SimpleCellAddress;
exports.CellRange = CellRange;
exports.CellAddress = CellAddress;