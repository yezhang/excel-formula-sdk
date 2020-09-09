
const assert = require('base/common/assert');
const types = require('base/common/types');
const { endsWith } = require('lodash');

const CellAddressNode = require('platform/formula/core/SingleFormulaAST').CellAddressIdentifier;
const CellRangeNode = require('platform/formula/core/SingleFormulaAST').CellRangeIdentifier;
const Syntax = require('platform/formula/core/syntax').Syntax;
const SingleFormulaContext = require('platform/formula/core/SingleFormulaContext').SingleFormulaContext;

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

/**
 * 将列序号或者列名称转换为数字。
 */
function _convertColumnIndex(column) {
  let beforeWhichNum = 0;
  if (types.isNumber(column)) {
    beforeWhichNum = column;
  }
  else if (types.isString(column)) {
    beforeWhichNum = convertColumnLettersToNumber(column);
  } else {
    throw new TypeError('列 参数需要为 String 或 Number 类型');
  }
  return beforeWhichNum;
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
    if (num <= startColumn) {
      throw new TranslateError('已经是最左侧列，无法向左移动');
    }

    if (num <= step) {
      throw new TranslateError(`无法向做移动[当前列序号${num}-${this.toLabel()}, 期望向左移动${step}列]`);
    }

    this.columnIdentifier.text = convertNumberToColumnLetters(num - step);
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

    if (num <= step) {
      throw new TranslateError(`无法向上移动[当前行号${num}, 期望向上移动${step}行]`);
    }

    this.rowIdentifier.line = num - step;
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

  getColumnNumber() {
    return this.columnRefTranslator.toNumber();
  }

  getRowNumber() {
    return this.rowRefTranslator.toNumber();
  }

  translateUp(step) {
    try {
      this.rowRefTranslator.translateUp(step);
    } catch (error) {
      this.a1Reference.lost();
      throw error;
    }

  }

  translateDown(step) {
    try {
      this.rowRefTranslator.translateDown(step);
    } catch (error) {
      this.a1Reference.lost();
      throw error;
    }

  }

  translateLeft(step) {
    try {
      this.columnRefTranslator.translateLeft(step);
    } catch (error) {
      this.a1Reference.lost();
      throw error;
    }

  }
  translateRight(step) {
    try {
      this.columnRefTranslator.translateRight(step);
    } catch (error) {
      this.a1Reference.lost();
      throw error;
    }

  }

  /**
 * @param {Number} beforeWhich 行序号, 1..n
 * @param {Number} numberOfRows 行数量
 */
  insertRows(beforeWhich, numberOfRows) {
    if (beforeWhich <= this.getRowNumber()) {
      this.translateDown(numberOfRows);
    }
  }

  /**
   * @param {Number} startRow 行序号, 1..n
   * @param {Number} numberOfRows 行数量
   */
  removeRows(startRow, numberOfRows) {
    if (startRow <= this.getRowNumber()) {
      this.translateUp(numberOfRows); // 可能会由于可移动空间不够，抛出异常
    }
  }

  /**
   * 在 CellRange 引用中使用。
   * 
   * @param {Boolean} isStopedInsideOfDeletion 在删除范围内停止单元格。
   * 当删除范围很大，包括了当前单元格时，执行删除动作后，本单元格引用的地址需要调整为新地址。
   * 新地址可以为删除范围的起点或删除范围起点的前一个单元格位置。
   * 当 isStopedInsideOfDeletion == true, 停在删除范围起点。
   * 当 isStopedInsideOfDeletion === false，停在删除范围起点之前。
   * 
   * isStopedInsideOfDeletion 默认值是：false
   */
  removeRowsByProperSteps(startRow, numberOfRows, isStopedInsideOfDeletion) {
    const rowNumber = this.getRowNumber();
    if (startRow <= rowNumber) {
      let fixStep = isStopedInsideOfDeletion ? 0 : 1;
      let propSteps = Math.min(rowNumber - startRow + fixStep, numberOfRows);
      this.translateUp(propSteps); // 可能会由于可移动空间不够，抛出异常
    }
  }



  /**
   * @param {String | Number} beforeWhich 列序号, A..Z, 1..n
   * @param {Number} numberOfColumns 列数量
   */
  insertColumns(beforeWhich, numberOfColumns) {
    let beforeWhichNum = _convertColumnIndex(beforeWhich);

    if (beforeWhichNum <= this.getColumnNumber()) {
      this.translateRight(numberOfColumns);
    }
  }

  /**
   * @param {String | Number} startColumn 列序号, A..Z, 1..n
   * @param {Number} numberOfColumns 列数量
   */
  removeColumns(startColumn, numberOfColumns) {
    let startColumnNum = _convertColumnIndex(startColumn);
    if (startColumnNum <= this.getColumnNumber()) {
      this.translateLeft(numberOfColumns); // 可能会由于坐标空间不够，抛出异常
    }
  }

  /**
   * 在 CellRange 引用中使用。
   */
  removeColumnsByProperSteps(startColumn, numberOfColumns, isStopedInsideOfDeletion) {
    let startColumnNum = _convertColumnIndex(startColumn);
    const columnNumber = this.getColumnNumber();
    if (startColumnNum <= columnNumber) {
      let fixStep = isStopedInsideOfDeletion ? 0 : 1;
      const propSteps = Math.min(columnNumber - startColumnNum + fixStep, numberOfColumns);
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
    this.a1TranslatorList.forEach(function (t) {
      t.translateUp(step);
    })
  }

  translateDown(step) {
    this.a1TranslatorList.forEach(function (t) {
      t.translateDown(step);
    })
  }

  translateLeft(step) {
    this.a1TranslatorList.forEach(function (t) {
      t.translateLeft(step);
    })
  }
  translateRight(step) {
    this.a1TranslatorList.forEach(function (t) {
      t.translateRight(step);
    })
  }

  /**
 * @param {Number} beforeWhich 行序号, 1..n
 * @param {Number} numberOfRows 行数量
 */
  insertRows(beforeWhich, numberOfRows) {
    this.a1TranslatorList.forEach(function (t) {
      t.insertRows(beforeWhich, numberOfRows);
    })
  }

  /**
   * @param {Number} startRow 行序号, 1..n
   * @param {Number} numberOfRows 行数量
   */
  removeRows(startRow, numberOfRows) {
    this.a1TranslatorList.forEach(function (t) {
      t.removeRows(startRow, numberOfRows);
    })
  }

  removeRowsByProperSteps(startRow, numberOfRows) {
    this.a1TranslatorList.forEach(function (t) {
      t.removeRowsByProperSteps(startRow, numberOfRows);
    })
  }

  /**
   * @param {String | Number} beforeWhich 列序号, A..Z, 1..n
   * @param {Number} numberOfColumns 列数量
   */
  insertColumns(beforeWhich, numberOfColumns) {
    this.a1TranslatorList.forEach(function (t) {
      t.insertColumns(beforeWhich, numberOfColumns);
    })
  }

  /**
   * @param {String | Number} startColumn 列序号, A..Z, 1..n
   * @param {Number} numberOfColumns 列数量
   */
  removeColumns(startColumn, numberOfColumns) {
    this.a1TranslatorList.forEach(function (t) {
      t.removeColumns(startColumn, numberOfColumns);
    })
  }

  removeColumnsByProperSteps(startColumn, numberOfColumns) {
    this.a1TranslatorList.forEach(function (t) {
      t.removeColumnsByProperSteps(startColumn, numberOfColumns);
    })
  }
}

/**
 * 简单单元格地址表示法
 */
class SimpleCellAddress {

  /**
   * 
   * @param {String} sheetName 当前表格名称
   * @param {Number} columnNumber 1..n
   * @param {Number} rowNumber 1..n
   */
  constructor(sheetName, columnNumber, rowNumber) {
    this.sheet = sheetName;
    this.column = columnNumber;
    this.row = rowNumber;
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

  equals(other) {
    if (!other) {
      return false;
    }
    if (!other instanceof SimpleCellAddress) {
      return false;
    }

    return this.hashcode() === other.hashcode();
  }
}

SimpleCellAddress.build = function(sheetName, column, row) {
  return new SimpleCellAddress(sheetName, column, row);
}

/**
 * 简单单元格范围表示法
 */
class SimpleCellRange {
  /**
   * 
   */
  constructor(sheetName, startSimpleAddress, endSimpleAddress) {
    this.sheet = sheetName;
    this.start = {
      column: startSimpleAddress.column,
      row: startSimpleAddress.row
    };

    this.end = {
      column: endSimpleAddress.column,
      row: endSimpleAddress.row
    }
  }


}

/**
 * 所有单元格引用的基类。
 */
class CellRefDecorator { }

/**
 * 单元格搬运器，用于移动单元格地址。
 * 
 * 根据语法树中的节点构造。
 */
class CellAddressCarrier extends CellRefDecorator {
  constructor(cellAddressIdentifier) {
    super();
    this.cellAddress = cellAddressIdentifier;
    this.a1RefTranslator = new A1ReferenceTranslator(this.cellAddress.a1Reference);
    this._workingContext = undefined; //工作单元格的上下文，包括当前的工作表，活动单元格等界面操作信息。
  }

  toString() {
    return this.cellAddress.toString();
  }

  toSimpleAddress() {
    let sheetName = this.cellAddress.sheetName;
    if (!sheetName) {
      sheetName = this.getWorkingContext().activeSheetName;
    }

    let column = this.a1RefTranslator.getColumnNumber();
    let row = this.a1RefTranslator.getRowNumber();
    return new SimpleCellAddress(sheetName, column, row);
  }

  setWorkingContext(context) {
    if (context instanceof SingleFormulaContext) {
      this._workingContext = context;
    }
  }

  getWorkingContext() {
    return this._workingContext;
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
  removeRows(startRow, numberOfRows) {
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
  removeColumns(startColumn, numberOfColumns) {
    this.a1RefTranslator.removeColumns(startColumn, numberOfColumns);
  }
}

/**
 * 单元格搬运器，用于移动单元格地址。
 * 
 * 根据语法树中的节点构造。
 */
class CellRangeCarrier extends CellRefDecorator {
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

  setWorkingContext(context) {
    if (context instanceof SingleFormulaContext) {
      this._workingContext = context;
    }
  }

  getWorkingContext() {
    return this._workingContext;
  }

  toSimpleAddress() {
    let sheetName = this.cellAddress.sheetName;
    if (!sheetName) {
      sheetName = this.getWorkingContext().activeSheetName;
    }

    let simpleStart = new SimpleCellAddress(null, this.left(), this.top());
    let simpleEnd = new SimpleCellAddress(null, this.right(), this.bottom());
    return new SimpleCellRange(sheetName, simpleStart, simpleEnd);
  }

  left() {
    return this.startRefTranslator.getColumnNumber();
  }

  right() {
    return this.endRefTranslator.getColumnNumber();
  }

  width() {
    return Math.abs(this.left() - this.right() + 1);
  }

  top() {
    return this.startRefTranslator.getRowNumber();
  }

  bottom() {
    return this.endRefTranslator.getRowNumber();
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
  removeRows(startRow, numberOfRows) {
    if (startRow <= this.top() && this.bottom() <= startRow + numberOfRows - 1) {
      this.cellRange.lost();
      throw new TranslateError('单元格范围将被删除');
    }
    this.startRefTranslator.removeRowsByProperSteps(startRow, numberOfRows, true);
    this.endRefTranslator.removeRowsByProperSteps(startRow, numberOfRows, false);
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
  removeColumns(startColumn, numberOfColumns) {
    let startColumnNum = _convertColumnIndex(startColumn);
    if (startColumnNum <= this.left() && this.right() <= startColumnNum + numberOfColumns - 1) {
      this.cellRange.lost();
      throw new TranslateError('单元格范围将被删除');
    }
    this.startRefTranslator.removeColumnsByProperSteps(startColumn, numberOfColumns, true);
    this.endRefTranslator.removeColumnsByProperSteps(startColumn, numberOfColumns, false);
  }

  toString() {
    return this.cellRange.toString();
  }
}

function buildCellRefDecorator(cellRef) {
  switch (cellRef.type) {
    case Syntax.CellAddressIdentifier:
      return new CellAddressCarrier(cellRef);
    case Syntax.CellRangeIdentifier:
      return new CellRangeCarrier(cellRef);
  }

  return undefined;
}

exports.SimpleCellAddress = SimpleCellAddress;
exports.buildCellRefDecorator = buildCellRefDecorator;