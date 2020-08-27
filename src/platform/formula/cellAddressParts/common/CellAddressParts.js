const antlr4 = require('antlr4');
const assert = require('base/common/assert');
const types = require('base/common/types');
const CellAddressLexer = require('platform/formula/runtime/CellAddressLexer').CellAddressLexer;
const CellAddressParser = require('platform/formula/runtime/CellAddressParser').CellAddressParser;
const CellAddressLiteralVisitor = require('platform/formula/cellAddressParts/common/CellAddressPartsVisitor').CellAddressLiteralVisitor;

class CellColumn {
  constructor(text) {
    assert.ok(types.isString(text), '单元格列需要使用文本类型构建');
    this.text = text;
  }

  // 字母表示法，转换为数字表示法。
  // 1..n
  toNumber() {
    let sum = 0;
    let len = this.text.length;
    for(let i = 0; i < len; i++) {
      let n = this._convertLetter(this.text.charAt(i));
      sum += n * Math.pow(26, len - i - 1);
    }

    return sum;
  }

  _convertLetter(char) {
    const c = char.charCodeAt(0);
    return c - 65 /* A */ + 1;
  }
}

class AbsoluteColumn extends CellColumn {
  toString() {
    return '$' + this.text;
  }
}

class RelativeColumn extends CellColumn {
  toString() {
    return this.text;
  }
}

class CellRow {
  constructor(number){
    assert.ok(types.isNumber(number), '单元格行需要使用数字类型构建');
    this.number = number;
  }

  /**
   * 1..n
   */
  toNumber() {

  }
}
class AbsoluteRow extends CellRow {
  toString() {
    return '$' + String(this.number);
  }
}

class RelativeRow extends CellRow{
  toString() {
    return String(this.number);
  }
}

/**
 * 不包括表明的单元格地址引用
 */
class A1Reference {
  constructor(columnRef, rowRef) {
    this.columnRef = columnRef;
    this.rowRef = rowRef;
  }

  toString() {
    return `${this.columnRef.toString()}${this.rowRef.toString()}`;
  }
}


/**
 * 所有单元格引用的基类。
 */
class CellRef {
  
}

class SimpleCellAddress {
  constructor(cellAddress) {
    this._cellAddress = cellAddress;

    const a1Reference = cellAddress.a1Reference;

    this.sheet = cellAddress.sheetName;
    this.row = a1Reference.rowRef.toNumber();
    this.column = a1Reference.columnRef.toNumber();
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

class SimpleCellRange {

}

/**
 * 单元格地址
 */
class CellAddress extends CellRef {
  constructor(sheetName, a1Reference) {
    super();
    this.sheetName = sheetName;
    this.a1Reference = a1Reference;
  }

  toString() {
    let sheetName = this.sheetName ? this.sheetName + '!': '';
    return `${sheetName}${this.a1Reference.toString()}`;
  }

  toSimpleAddress() {
    return new SimpleCellAddress(this);
  }
}

/**
 * 单元格范围
 */
class CellRange extends CellRef {
  constructor(sheetName, startA1Reference, endA1Reference) {
    super();
    this.sheetName = sheetName;
    this.startRef = startA1Reference;
    this.endRef = endA1Reference;
  }

  toSimpleAddress(){
    
  }

  toString() {
    let sheetName = this.sheetName ? this.sheetName + '!': '';
    return `${sheetName}${this.startRef.toString()}:${this.endRef.toString()}`;
  }
}

function buildCellRef(sheetName, cellAddressOrCellRange) {
  const chars = new antlr4.InputStream(cellAddressString);
  const lexer = new CellAddressLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new CellAddressParser(tokens);

  
}

exports.buildCellRef = buildCellRef;
exports.SimpleCellAddress = SimpleCellAddress;
exports.CellRange = CellRange;
exports.CellAddress = CellAddress;

exports.A1Reference = A1Reference;
exports.CellColumn = CellColumn;
exports.RelativeColumn = RelativeColumn;
exports.AbsoluteColumn = AbsoluteColumn;
exports.CellRow = CellRow;
exports.RelativeRow = RelativeRow;
exports.AbsoluteRow = AbsoluteRow;