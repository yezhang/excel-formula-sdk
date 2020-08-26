const antlr4 = require('antlr4');

const CellAddressLexer = require('platform/formula/runtime/CellAddressLexer').CellAddressLexer;
const CellAddressParser = require('platform/formula/runtime/CellAddressParser').CellAddressParser;
const CellAddressLiteralVisitor = require('platform/formula/cellAddressParts/common/CellAddressPartsLiteralVisitor').CellAddressLiteralVisitor;

/**
 * 所有单元格引用的基类。
 */
class CellRef {

}

class SimpleCellAddress extends CellRef {
  constructor(sheet, row, column) {
    super();
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

  hashcode() {
    return `${this.sheet}#${this.column},${this.row}`;
  }
}

/**
 * 单元格地址
 */
class CellAddress extends CellRef {
  constructor(workingSheetName, cellAddressString) {
    super();

    this.workingSheet = workingSheetName;
    const chars = new antlr4.InputStream(cellAddressString);
    const lexer = new CellAddressLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new CellAddressParser(tokens);

    const ast = parser.cellAddressExpr();
    this.addressDescription = ast.accept(new CellAddressLiteralVisitor());

    if (!this.addressDescription.sheet) {
      this.addressDescription.sheet = workingSheetName;
    }
  }

  toSimpleAddress() {

  }
}

/**
 * 单元格范围
 */
class CellRange extends CellRef {
  constructor(workingSheetName, cellRangeString) {
    super();
  }

  toSimpleAddress(){
    
  }
}

function buildCellRef(sheetName, cellAddressOrCellRange) {
  const chars = new antlr4.InputStream(cellAddressString);
  const lexer = new CellAddressLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new CellAddressParser(tokens);

  
}

exports.SimpleCellAddress = SimpleCellAddress;
exports.CellRange = CellRange;
exports.CellAddress = CellAddress;
exports.buildCellRef = buildCellRef;