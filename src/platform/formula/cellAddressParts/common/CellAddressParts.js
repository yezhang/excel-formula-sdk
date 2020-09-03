
const assert = require('base/common/assert');
const types = require('base/common/types');

const CellAddressNode = require('platform/formula/core/SingleFormulaAST').CellAddressIdentifier;
const CellRangeNode = require('platform/formula/core/SingleFormulaAST').CellRangeIdentifier;
const Syntax = require('platform/formula/core/syntax').Syntax;

class TranslateError extends Error {
  constructor(message) {
    super(message);
    this.name = 'TranslateError';
  }
}

function convertNumberToColumnLetters(number) {
  if (!types.isInt(number)) {
    throw new TypeError('无效的数字。有效的数字是整数');
  }
  if (number <= 0) {
    throw new RangeError('无效的数字。有效的数字范围是 1..n');
  }

  let column = [];
  let n = number;

  let modulus = 26;
  while (n > 0) {
    let remainder = n % modulus;
    if (remainder === 0) {
      remainder = 26;
    }

    let letter = String.fromCharCode(65 /* A */ + remainder - 1);
    column.push(letter);

    n = (n - remainder) / modulus;
  }

  column.reverse();
  return column.join('');
}

function convertColumnLettersToNumber(column) {
  function _convertLetter(char) {
    const c = char.charCodeAt(0);
    return c - 65 /* A */ + 1;
  }
  let sum = 0;
  let len = column.length;
  for (let i = 0; i < len; i++) {
    let n = _convertLetter(column.charAt(i));
    sum += n * Math.pow(26, len - i - 1);
  }

  return sum;
}

exports.convertColumnLettersToNumber = convertColumnLettersToNumber;
exports.convertNumberToColumnLetters = convertNumberToColumnLetters;



/**
 * 列平移器
 */
class CellColumnTranslator {
  constructor(columnIdentifier) {
    this.columnIdentifier = columnIdentifier;
  }

  // 字母表示法，转换为数字表示法。
  // 1..n
  toNumber() {
    return convertColumnLettersToNumber(this.columnIdentifier.text);
  }

  toLabel() {
    return this.columnIdentifier.text;
  }

  translateLeft(step) {
    assert.ok(types.isInt(step) && step >= 0, 'step 参数需要是 0 或正整数');
    if (step === 0) {
      return;
    }
    let num = this.toNumber();
    const startColumn = 1;
    if (num - 1 < startColumn) {
      throw new TranslateError('已经是最左侧列，无法向左移动');
    }

    if(num <= step) {
      throw new TranslateError(`无法向做移动[当前列序号${num}-${this.toLabel()}, 期望向左移动${step}列]`);
    }

    this.columnIdentifier.text = convertNumberToColumnLetters(num - step);
  }

  /**
   * 尽最大努力左移，
   */
  translateLeftAsBest(step) {

  }
  translateRight(step) {
    assert.ok(types.isInt(step) && step >= 0, 'step 参数需要是 0 或正整数');
    if (step === 0) {
      return;
    }

    let num = this.toNumber();
    this.columnIdentifier.text = convertNumberToColumnLetters(num + step);
  }
}


/**
 * 行平移器
 */
class CellRowTranslator {
  constructor(rowIdentifier) {
    this.rowIdentifier = rowIdentifier;
  }

  /**
   * 1..n
   */
  toNumber() {
    return Number(this.rowIdentifier.line);
  }

  translateUp(step) {
    assert.ok(types.isInt(step) && step >= 0, 'step 参数需要是 0 或正整数');
    if (step === 0) {
      return;
    }

    let num = this.toNumber();
    const startColumn = 1;
    if (num - 1 < startColumn) {
      throw new TranslateError('已经是第一行，无法向上移动');
    }

    if(num <= step) {
      throw new TranslateError(`无法向上移动[当前行号${num}, 期望向上移动${step}行]`);
    }

    this.rowIdentifier.line = num - step;
  }

  /**
   * 尽最大努力上移，如果移动空间不够，则移动到第一个位置。
   */
  translateUpAtBest(step) {
    let num = this.toNumber();
    let stopLine = num - step;
    if(stopLine < 1) {
      stopLine = 1;
    }

    this.translateUp(num - stopLine);
  }

  translateDown(step) {
    assert.ok(types.isInt(step) && step >= 0, 'step 参数需要是 0 或正整数');
    if (step === 0) {
      return;
    }

    let num = this.toNumber();
    this.rowIdentifier.line = num + step;
  }
}


/**
 * 不包括表名的单元格地址引用
 */
class A1ReferenceTranslator {
  constructor(a1Reference) {
    this.a1Reference = a1Reference;

    this.columnRefTranslator = new CellColumnTranslator(this.a1Reference.columnRef);
    this.rowRefTranslator = new CellRowTranslator(this.a1Reference.rowRef);
  }

  toString() {
    return this.a1Reference.toString();
  }

  translateUp(step) {
    this.rowRefTranslator.translateUp(step);
  }

  translateDown(step) {
    this.rowRefTranslator.translateDown(step);
  }

  translateLeft(step) {
    this.columnRefTranslator.translateLeft(step);
  }
  translateRight(step) {
    this.columnRefTranslator.translateRight(step);
  }

    /**
   * @param {Number} beforeWhich 行序号, 1..n
   * @param {Number} numberOfRows 行数量
   */
  insertRows(beforeWhich, numberOfRows) {
    if(beforeWhich <= this.rowRefTranslator.toNumber()) {
      this.translateDown(numberOfRows);
    }
  }

  /**
   * @param {Number} startRow 行序号, 1..n
   * @param {Number} numberOfRows 行数量
   */
  removeRows(startRow, numberOfRows){
    if(startRow <= this.rowRefTranslator.toNumber()) {
      this.translateUp(numberOfRows); // 可能会由于坐标位移不够，抛出异常
    }
  }

  /**
   * 在 CellRange 引用中使用。
   */
  removeRowsByProperSteps(startRow, numberOfRows) {
    const rowNumber = this.rowRefTranslator.toNumber()
    if(startRow <= rowNumber) {
      let propSteps = Math.min(rowNumber - startRow, numberOfRows);
      this.translateUp(propSteps); // 可能会由于坐标位移不够，抛出异常
    }
  }

  /**
   * @param {String | Number} beforeWhich 列序号, A..Z, 1..n
   * @param {Number} numberOfColumns 列数量
   */
  insertColumns(beforeWhich, numberOfColumns) {
    if(beforeWhich <= this.columnRefTranslator.toNumber()) {
      this.translateRight(numberOfColumns);
    }
  }

  /**
   * @param {String | Number} startColumn 列序号, A..Z, 1..n
   * @param {Number} numberOfColumns 列数量
   */
  removeColumns(startColumn, numberOfColumns){
    if(startColumn <= this.columnRefTranslator.toNumber()){
      this.translateLeft(numberOfColumns); // 可能会由于坐标空间不够，抛出异常
    }
  }

  /**
   * 在 CellRange 引用中使用。
   */
  removeColumnsByProperSteps(startColumn, numberOfColumns){
    const columnNumber = this.columnRefTranslator.toNumber();
    if(startColumn <= columnNumber){
      const propSteps = Math.min(columnNumber - startColumn, numberOfColumns);
      this.translateLeft(propSteps); // 可能会由于坐标空间不够，抛出异常
    }
  }
}

class CompositeA1ReferenceTranslator {
  constructor(a1ReferenceTranslatorList) {
    this.a1TranslatorList = a1ReferenceTranslatorList;
  }

  append(a1ReferenceTranslator) {
    this.a1TranslatorList.push(a1ReferenceTranslator);
  }

  translateUp(step) {
    this.a1TranslatorList.forEach(function(t){
      t.translateUp(step);
    })
  }

  translateDown(step) {
    this.a1TranslatorList.forEach(function(t){
      t.translateDown(step);
    })
  }

  translateLeft(step) {
    this.a1TranslatorList.forEach(function(t){
      t.translateLeft(step);
    })
  }
  translateRight(step) {
    this.a1TranslatorList.forEach(function(t){
      t.translateRight(step);
    })
  }

    /**
   * @param {Number} beforeWhich 行序号, 1..n
   * @param {Number} numberOfRows 行数量
   */
  insertRows(beforeWhich, numberOfRows) {
    this.a1TranslatorList.forEach(function(t){
      t.insertRows(beforeWhich, numberOfRows);
    })
  }

  /**
   * @param {Number} startRow 行序号, 1..n
   * @param {Number} numberOfRows 行数量
   */
  removeRows(startRow, numberOfRows){
    this.a1TranslatorList.forEach(function(t){
      t.removeRows(startRow, numberOfRows);
    })
  }

  removeRowsByProperSteps(startRow, numberOfRows){
    this.a1TranslatorList.forEach(function(t){
      t.removeRowsByProperSteps(startRow, numberOfRows);
    })
  }

  /**
   * @param {String | Number} beforeWhich 列序号, A..Z, 1..n
   * @param {Number} numberOfColumns 列数量
   */
  insertColumns(beforeWhich, numberOfColumns) {
    this.a1TranslatorList.forEach(function(t){
      t.insertColumns(beforeWhich, numberOfColumns);
    })
  }

  /**
   * @param {String | Number} startColumn 列序号, A..Z, 1..n
   * @param {Number} numberOfColumns 列数量
   */
  removeColumns(startColumn, numberOfColumns){
    this.a1TranslatorList.forEach(function(t){
      t.removeColumns(startColumn, numberOfColumns);
    })
  }

  removeColumnsByProperSteps(startColumn, numberOfColumns){
    this.a1TranslatorList.forEach(function(t){
      t.removeColumnsByProperSteps(startColumn, numberOfColumns);
    })
  }
}

/**
 * 简单单元格地址表示法
 */
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


/**
 * 简单单元格范围表示法
 */
class SimpleCellRange {

}

/**
 * 所有单元格引用的基类。
 */
class CellRefDecorator {

}



/**
 * 单元格地址
 */
class CellAddressDecorator extends CellRefDecorator {
  constructor(cellAddressIdentifier) {
    super();
    this.cellAddress = cellAddressIdentifier;

    this.a1RefTranslator = new A1ReferenceTranslator(this.cellAddress.a1Reference);
  }

  toString() {
    return this.cellAddress.toString();
  }

  toSimpleAddress() {
    return new SimpleCellAddress(this);
  }

  translateUp(step) {
    this.a1RefTranslator.translateUp(step);
  }

  translateDown(step) {
    this.a1RefTranslator.translateDown(step);
  }

  translateLeft(step) {
    this.a1RefTranslator.translateLeft(step);
  }
  translateRight(step) {
    this.a1RefTranslator.translateRight(step);
  }

  /**
   * @param {Number} beforeWhich 行序号, 1..n
   * @param {Number} numberOfRows 行数量
   */
  insertRows(beforeWhich, numberOfRows) {
    this.a1RefTranslator.insertRows(beforeWhich, numberOfRows);
  }

  /**
   * @param {Number} startRow 行序号, 1..n
   * @param {Number} numberOfRows 行数量
   */
  removeRows(startRow, numberOfRows){
    this.a1RefTranslator.removeRows(startRow, numberOfRows);
  }

  /**
   * @param {String | Number} beforeWhich 列序号, A..Z, 1..n
   * @param {Number} numberOfColumns 列数量
   */
  insertColumns(beforeWhich, numberOfColumns) {
    this.a1RefTranslator.insertColumns(beforeWhich, numberOfColumns);
  }

  /**
   * @param {String | Number} startColumn 列序号, A..Z, 1..n
   * @param {Number} numberOfColumns 列数量
   */
  removeColumns(startColumn, numberOfColumns){
    this.a1RefTranslator.removeColumns(startColumn, numberOfColumns);
  }
}

/**
 * 单元格范围
 */
class CellRangeDecorator extends CellRefDecorator {
  /**
   * @param {CellRangeIdentifier} cellRangeRef 
   */
  constructor(cellRangeRef) {
    super();
    this.cellRange = cellRangeRef;

    this.startRefTranslator = new A1ReferenceTranslator(this.cellRange.startRef);
    this.endRefTranslator = new A1ReferenceTranslator(this.cellRange.endRef);

    this.cellRangeTranslator = new CompositeA1ReferenceTranslator([
      this.startRefTranslator,
      this.endRefTranslator
    ]);
  }

  toSimpleAddress() {

  }

  left() {
    return this.startRefTranslator.columnRefTranslator.toNumber();
  }

  right() {
    this.endRefTranslator.columnRefTranslator.toNumber();
  }

  width() {
    return Math.abs(this.left() - this.right() + 1);
  }

  top() {
    return this.startRefTranslator.rowRefTranslator.toNumber();
  }

  bottom() {
    return this.endRefTranslator.rowRefTranslator.toNumber();
  }

  height() {
    return Math.abs(this.top() - this.bottom() + 1);
  }

  translateUp(step) {
    this.cellRangeTranslator.translateUp(step);
  }

  translateDown(step) {
    this.cellRangeTranslator.translateDown(step);
  }

  translateLeft(step) {
    this.cellRangeTranslator.translateLeft(step);
  }
  translateRight(step) {
    this.cellRangeTranslator.translateRight(step);
  }

    /**
   * @param {Number} beforeWhich 行序号, 1..n
   * @param {Number} numberOfRows 行数量
   */
  insertRows(beforeWhich, numberOfRows) {
    this.cellRangeTranslator.insertRows(beforeWhich, numberOfRows);
  }

  /**
   * @param {Number} startRow 行序号, 1..n
   * @param {Number} numberOfRows 行数量
   */
  removeRows(startRow, numberOfRows){
    if(startRow <= this.top() && this.bottom() <= startRow + numberOfRows - 1) {
      throw new TranslateError('单元格范围将被删除');
    }
    this.cellRangeTranslator.removeRowsByProperSteps(startRow, numberOfRows);
  }

  /**
   * @param {String | Number} beforeWhich 列序号, A..Z, 1..n
   * @param {Number} numberOfColumns 列数量
   */
  insertColumns(beforeWhich, numberOfColumns) {
    this.cellRangeTranslator.insertColumns(beforeWhich, numberOfColumns);
  }

  /**
   * @param {String | Number} startColumn 列序号, A..Z, 1..n
   * @param {Number} numberOfColumns 列数量
   */
  removeColumns(startColumn, numberOfColumns){
    if(startColumn <= this.left() && this.right() <= startColumn + numberOfColumns - 1) {
      throw new TranslateError('单元格范围将被删除');
    }
    this.cellRangeTranslator.removeColumnsByProperSteps(startColumn, numberOfColumns);
  }

  toString() {
    return this.cellRange.toString();
  }
}

function buildCellRefDecorator(cellRef) {
  switch (cellRef.type) {
    case Syntax.CellAddressIdentifier:
      return new CellAddressDecorator(cellRef);
    case Syntax.CellRangeIdentifier:
      return new CellRangeDecorator(cellRef);
  }

  return undefined;
}

exports.SimpleCellAddress = SimpleCellAddress;
exports.buildCellRefDecorator = buildCellRefDecorator;