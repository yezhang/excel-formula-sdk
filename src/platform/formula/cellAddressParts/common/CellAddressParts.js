
const assert = require('base/common/assert');
const types = require('base/common/types');

const Syntax = require('platform/formula/core/syntax').Syntax;
const SingleFormulaContext = require('platform/formula/core/SingleFormulaContext').SingleFormulaContext;
const { CellAddressIdentifier, CellRangeIdentifier, RelativeColumnIdentifier, RelativeRowIdentifier } = require('platform/formula/core/SingleFormulaAST');

class TranslateError extends Error {
  constructor(message) {
    super(message);
    this.name = 'TranslateError';
  }
}

/**
 * 把正数转换为列字母表示法
 */
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

function convertToNumberWhenColumnLetters(column) {
  if (types.isInt(column)) {
    return column;
  }
  return convertColumnLettersToNumber(column);
}

/**
 * 把字母列的表示法转换为数字。
 * 如果参数为数字，直接返回参数的值。 
 * @param {String} columnLetters 支持大写和小写。
 */
function convertColumnLettersToNumber(columnLetters) {
  function _convertLetter(char) {
    const c = char.charCodeAt(0);
    return c - 65 /* A */ + 1;
  }

  // 一律按照大写处理
  const column = columnLetters.toUpperCase();

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
 * 只移动相对列地址。
 */
class RelativeCellColumnTranslator {
  constructor(columnIdentifier) {
    this._columnIdentifier = columnIdentifier;
    this._cellColumnTranslatorProxy = new CellColumnTranslator(this._columnIdentifier);

    // RelativeColumnIdentifier
  }
  translateLeft(step) {
    if (this._columnIdentifier instanceof RelativeColumnIdentifier) {
      this._cellColumnTranslatorProxy.translateLeft(step);
    }
  }

  translateRight(step) {
    if (this._columnIdentifier instanceof RelativeColumnIdentifier) {
      this._cellColumnTranslatorProxy.translateRight(step);
    }
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
 * 只移动相对行
 */
class RelativeCellRowTranslator {
  constructor(rowIdentifier) {
    this._rowIdentifier = rowIdentifier;
    this._celllRowTranslatorProxy = new CellRowTranslator(this._rowIdentifier);
  }

  translateUp(step) {
    if (this._rowIdentifier instanceof RelativeRowIdentifier) {
      this._celllRowTranslatorProxy.translateUp(step);
    }
  }

  translateDown(step) {
    if (this._rowIdentifier instanceof RelativeRowIdentifier) {
      this._celllRowTranslatorProxy.translateDown(step);
    }
  }

}

class IA1ReferenceTranslator {
  constructor(a1Reference) {
    this.a1Reference = a1Reference;
    this.$init();
  }

  $init() { /** protected, no op */ }
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
   * 当删除范围很大，包括了当前单元格时，执行删除动作后，本单元格引用的地址需要调整为新地址。
   * 新地址可以为删除范围的起点或删除范围起点的前一个单元格位置。
   * 当 isStopedInsideOfDeletion == true, 停在删除范围起点。
   * 当 isStopedInsideOfDeletion === false，停在删除范围起点之前。
   * 
   * @param {Boolean} isStopedInsideOfDeletion 在删除范围内停止单元格。
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
/**
 * 不包括表名的单元格地址引用
 */
class A1ReferenceTranslator extends IA1ReferenceTranslator {
  constructor(a1Reference) {
    super(a1Reference);
  }

  $init() {
    this.columnRefTranslator = new CellColumnTranslator(this.a1Reference.columnRef);
    this.rowRefTranslator = new CellRowTranslator(this.a1Reference.rowRef);
  }
}

class RelativeA1ReferenceTranslator extends IA1ReferenceTranslator {
  constructor(a1Reference) {
    super(a1Reference);
  }

  $init() {
    this.columnRefTranslator = new RelativeCellColumnTranslator(this.a1Reference.columnRef);
    this.rowRefTranslator = new RelativeCellRowTranslator(this.a1Reference.rowRef);
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

const CellAddressState = {
  LOST: 'LOST', // 单元格地址已经丢失（如被删除）
  DIRTY: 'DIRTY', // 单元格地址需要更新
  NORMAL: 'NORMAL', // 单元格地址处于正常状态
};
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
    this.type = 'CellRefAddress';
    this.sheet = sheetName;
    this.column = columnNumber;
    this.row = rowNumber;

    this.state = CellAddressState.NORMAL;
  }

  setSheet(sheet) {
    this.sheet = sheet;
  }

  clone() {
    return new SimpleCellAddress(this.sheet, this.column, this.row);
  }

  // 单元格地址失效（单元格被删除）
  lost() {
    this.state = CellAddressState.LOST;
  }

  isLost() {
    return this.state === CellAddressState.LOST;
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
    if (!(other instanceof SimpleCellAddress)) {
      return false;
    }

    return this.hashcode() === other.hashcode();
  }

  /**
   * 如果无法移动指定步数，则抛出异常。
   */
  translateLeft(step) {
    assert.ok(types.isInt(step) && step >= 0, 'translateLeft: step 参数需要是 0 或正整数');
    if (step > this.column) {
      throw new Error('单元格地址无法向左移动：超出了当前地址范围');
    }

    this.column -= step;
  }

  translateRight(step) {
    assert.ok(types.isInt(step) && step >= 0, 'translateRight: step 参数需要是 0 或正整数');
    this.column += step;
  }

  translateUp(step) {
    assert.ok(types.isInt(step) && step >= 0, 'translateUp: step 参数需要是 0 或正整数');
    if (step > this.row) {
      throw new Error('单元格地址无法向上移动：超出了当前地址范围');
    }

    this.row -= step;
  }

  translateDown(step) {
    assert.ok(types.isInt(step) && step >= 0, 'translateDown: step 参数需要是 0 或正整数');
    this.row += step;
  }

  insertRowsWhenNecessary(activeSheetName, beforeWhich, numberOfRows) {
    if (this.isAffactedByInsertingRows(activeSheetName, beforeWhich, numberOfRows)) {
      this.translateDown(numberOfRows);
    }
  }

  insertRows(activeSheetName, beforeWhich, numberOfRows) {
    this.translateDown(numberOfRows);
  }

  // 注意：本函数无法处理当前单元格应该被删除的情况。
  // 移动单元格位置，最多移动到删除的起始位置（startFrom）。
  removeRowsWhenNecessary(activeSheetName, startFrom, numberOfRows) {
    if (this.isAffactedByRemovingRows(activeSheetName, startFrom, numberOfRows)) {
      this.translateUp(Math.min(numberOfRows, this.row - startFrom));
    }
  }

  removeRows(activeSheetName, startFrom, numberOfRows) {
    this.translateUp(Math.min(numberOfRows, this.row - startFrom));
  }

  insertColumnsWhenNecessary(activeSheetName, beforeWhich, numberOfColumns) {
    if (this.isAffactedByInsertingColumns(activeSheetName, beforeWhich, numberOfColumns)) {
      this.translateRight(numberOfColumns);
    }
  }

  insertColumns(activeSheetName, beforeWhich, numberOfColumns) {
    this.translateRight(numberOfColumns);
  }

  // 注意：本函数无法处理当前单元格应该被删除的情况。
  removeColumnsWhenNecessary(activeSheetName, startFrom, numberOfColumns) {
    if (this.isAffactedByRemovingColumns(activeSheetName, startFrom, numberOfColumns)) {
      this.translateLeft(Math.min(numberOfColumns, this.column - startFrom));
    }
  }

  removeColumns(activeSheetName, startFrom, numberOfColumns) {
    this.translateLeft(Math.min(numberOfColumns, this.column - startFrom));
  }


  willBeRemovedWhenRemovingRows(activeSheetName, startFrom, numberOfRows) {
    if (this.isAffactedByRemovingRows(activeSheetName, startFrom, numberOfRows)) {
      return this.row <= (startFrom + numberOfRows - 1);
    }

    return false;
  }

  willBeRemovedWhenRemovingColumns(activeSheetName, startFrom, numberOfColumns) {
    if (this.isAffactedByRemovingColumns(activeSheetName, startFrom, numberOfColumns)) {
      return this.column <= (startFrom + numberOfColumns - 1);
    }

    return false;
  }

  /**
  * 判断当前地址是否受到 “插入行” 操作的影响
  */
  isAffactedByInsertingRows(activeSheetName, beforeWhich, numberOfRows) {
    if (activeSheetName !== this.sheet) {
      return false;
    }
    if (numberOfRows <= 0) {
      return false;
    }

    return beforeWhich <= this.row;
  }

  /**
   * 判断当前地址是否受到 “删除行” 操作的影响
   */
  isAffactedByRemovingRows(activeSheetName, startFrom, numberOfRows) {
    if (activeSheetName !== this.sheet) {
      return false;
    }

    if (numberOfRows <= 0) {
      return false;
    }

    return startFrom <= this.row;
  }

  /**
   * 判断当前地址是否受到 “插入列” 操作的影响
   */
  isAffactedByInsertingColumns(activeSheetName, beforeWhich, numberOfColumns) {
    if (activeSheetName !== this.sheet) {
      return false;
    }
    if (numberOfColumns <= 0) {
      return false;
    }

    return beforeWhich <= this.column;
  }

  /**
   * 判断当前地址是否受到 “删除列” 操作的影响
   */
  isAffactedByRemovingColumns(activeSheetName, startFrom, numberOfColumns) {
    if (activeSheetName !== this.sheet) {
      return false;
    }
    if (numberOfColumns <= 0) {
      return false;
    }

    return startFrom <= this.column;
  }
}

SimpleCellAddress.build = function build(sheetName, column, row) {
  return new SimpleCellAddress(sheetName, convertToNumberWhenColumnLetters(column), row);
}

/**
 * 根据单元格地址的 AST 节点结构，构造 SimpleCellAddress。
 * @param {CellAddressIdentifier} node
 */
SimpleCellAddress.buildFromASTNode = function buildFromASTNode(sheetName, node) {
  let sheet = sheetName;
  if (node.sheetName) {
    sheet = node.sheetName.toString();
  }

  let a1ref = node.a1Reference;
  let column = a1ref.columnRef.text;
  let row = a1ref.rowRef.line;
  return SimpleCellAddress.build(sheet, column, row);
}

SimpleCellAddress.defaultHashFn = function defaultHashFn(cellAddress) {
  return cellAddress.hashcode();
}

/**
 * 简单单元格范围表示法。
 * 
 */
class SimpleCellRange {
  /**
   * @param {String} sheetName
   */
  constructor(sheetName, startSimpleAddress, endSimpleAddress) {
    this.type = 'CellRefRange';

    this.sheet = sheetName;

    // assert 保证 start 是左上角起始点
    // assert 保证 end 是右下角终止点
    this.start = SimpleCellAddress.build(this.sheet, startSimpleAddress.column, startSimpleAddress.row);
    this.end = SimpleCellAddress.build(this.sheet, endSimpleAddress.column, endSimpleAddress.row);
  }

  /**
   * 返回左上角地址。
   * 
   * @return {Object} {column: <1..n>, row: <1..n>}
   */
  topLeft() {
    return {
      column: Math.min(this.start.column, this.end.column),
      row: Math.min(this.start.row, this.end.row)
    }
  }
  /**
   * 返回右下角地址。
   * 
   * @return {Object} {column: <1..n>, row: <1..n>}
   */
  bottomRight() {
    return {
      column: Math.max(this.start.column, this.end.column),
      row: Math.max(this.start.row, this.end.row)
    }
  }

  pickAddressOnRight() {
    if (this.start.column >= this.end.column) {
      return this.start;
    }

    return this.end;
  }

  pickAddressAtBottom() {
    if (this.start.row >= this.end.row) {
      return this.start;
    }

    return this.end;
  }

  setSheet(sheet) {
    this.sheet = sheet;
  }

  clone() {
    return new SimpleCellRange(this.sheet, {
      column: this.start.column,
      row: this.start.row
    }, {
      column: this.end.column,
      row: this.end.row
    });
  }

  hashcode() {
    return `${this.sheet}#${this.start.column},${this.start.row};${this.end.column},${this.end.row}`;
  }

  includes(simpleCellAddress) {
    let inColumn = this.start.column <= simpleCellAddress.column && simpleCellAddress.column <= this.end.column;
    let inRow = this.start.row <= simpleCellAddress.row && simpleCellAddress.row <= this.end.row;

    return inColumn && inRow;
  }

  equals(other) {
    if (!other) {
      return false;
    }
    if (!(other instanceof SimpleCellRange)) {
      return false;
    }

    return this.hashcode() === other.hashcode();
  }

  insertRows(activeSheetName, beforeWhich, numberOfRows) {
    this.start.insertRowsWhenNecessary(activeSheetName, beforeWhich, numberOfRows);
    this.end.insertRowsWhenNecessary(activeSheetName, beforeWhich, numberOfRows);
  }

  removeRows(activeSheetName, startFrom, numberOfRows) {
    this.start.removeRowsWhenNecessary(activeSheetName, startFrom, numberOfRows);
    this.end.removeRowsWhenNecessary(activeSheetName, startFrom, numberOfRows);
  }

  insertColumns(activeSheetName, beforeWhich, numberOfColumns) {
    this.start.insertColumnsWhenNecessary(activeSheetName, beforeWhich, numberOfColumns);
    this.end.insertColumnsWhenNecessary(activeSheetName, beforeWhich, numberOfColumns);
  }

  removeColumns(activeSheetName, startFrom, numberOfColumns) {
    this.start.removeColumnsWhenNecessary(activeSheetName, startFrom, numberOfColumns);
    this.end.removeColumnsWhenNecessary(activeSheetName, startFrom, numberOfColumns);
  }

  /**
  * 判断当前地址是否受到 “插入行” 操作的影响
  */
  isAffactedByInsertingRows(activeSheetName, beforeWhich, numberOfRows) {
    const bottomAddress = this.pickAddressAtBottom();
    return bottomAddress.isAffactedByInsertingRows(activeSheetName, beforeWhich, numberOfRows);
  }

  /**
  * 判断当前地址是否受到 “删除行” 操作的影响
  */
  isAffactedByRemovingRows(activeSheetName, startFrom, numberOfRows) {
    const bottomAddress = this.pickAddressAtBottom();
    return bottomAddress.isAffactedByRemovingRows(activeSheetName, startFrom, numberOfRows);
  }

  /**
 * 判断当前地址是否受到 “插入列” 操作的影响
 */
  isAffactedByInsertingColumns(activeSheetName, beforeWhich, numberOfColumns) {
    const rightAddress = this.pickAddressOnRight();
    return rightAddress.isAffactedByInsertingColumns(activeSheetName, beforeWhich, numberOfColumns);
  }

  /**
   * 判断当前地址是否受到 “删除列” 操作的影响
   */
  isAffactedByRemovingColumns(activeSheetName, startFrom, numberOfColumns) {
    const rightAddress = this.pickAddressOnRight();
    return rightAddress.isAffactedByRemovingColumns(activeSheetName, startFrom, numberOfColumns);
  }


}

SimpleCellRange.build = function (sheetName, column1, row1, column2, row2) {
  return new SimpleCellRange(sheetName,
    {
      column: convertToNumberWhenColumnLetters(column1),
      row: row1
    },
    {
      column: convertToNumberWhenColumnLetters(column2),
      row: row2
    });
}

/**
 * 
 * @param {*} sheetName 
 * @param {CellRangeIdentifier} node 
 */
SimpleCellRange.buildFromASTNode = function buildFromASTNode(sheetName, node) {
  if (!(node instanceof CellRangeIdentifier)) {
    return undefined;
  }

  let sheet = sheetName;
  if (node.sheetName) {
    sheet = node.sheetName.toString();
  }

  //
  let a1ref = node.startRef;
  let column1 = a1ref.columnRef.text;
  let row1 = a1ref.rowRef.line;

  a1ref = node.endRef;
  let column2 = a1ref.columnRef.text;
  let row2 = a1ref.rowRef.line;

  return SimpleCellRange.build(sheet, column1, row1, column2, row2);
}

/**
 * 变更表格名称。
 */
class SheetNameTranslator {
  constructor(sheetNameIdentifier) {
    this.sheetNameIdentifier = sheetNameIdentifier;
  }

  setSheet(sheetName) {
    if(this.sheetNameIdentifier) {
      this.sheetNameIdentifier.name = sheetName;
    }
    
  }
}
/**
 * 所有单元格引用的基类。
 * 用于对单元格地址的语法树节点进行功能增强。
 */
class CellRefDecorator { }

/**
 * 单元格搬运器，用于移动单元格地址。
 * 
 * 根据语法树中的节点构造。
 */
class CellAddressCarrier extends CellRefDecorator {
  constructor(cellAddressIdentifier, A1ReferenceTranslatorCtor) {
    super();
    this.cellAddress = cellAddressIdentifier;
    this.sheetNameTranslator = new SheetNameTranslator(this.cellAddress.sheetName);
    this.a1RefTranslator = new A1ReferenceTranslatorCtor(this.cellAddress.a1Reference);
    this._workingContext = undefined; //工作单元格的上下文，包括当前的工作表，活动单元格等界面操作信息。
  }

  // 丢弃当前单元格（单元格被删除）
  lost() {
    this.cellAddress.lost();
  }

  isLost() {
    return this.cellAddress.isLost();
  }

  toString() {
    return this.cellAddress.toString();
  }

  toSimpleAddress() {
    let sheetNameID = this.cellAddress.sheetName;
    let sheetName = sheetNameID ? sheetNameID.toString() : undefined;
    if (!sheetName) {
      sheetName = this.getWorkingContext().activeSheetName;
    }

    let column = this.a1RefTranslator.getColumnNumber();
    let row = this.a1RefTranslator.getRowNumber();
    assert.ok(sheetName, '表格名称为空');

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

  setSheetName(name) {
    this.sheetNameTranslator.setSheet(name);
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
  constructor(cellRangeRef, A1ReferenceTranslatorCtor) {
    super();
    this.cellRange = cellRangeRef;

    this.sheetNameTranslator = new SheetNameTranslator(this.cellRange.sheetName);
    
    this.startRefTranslator = new A1ReferenceTranslatorCtor(this.cellRange.startRef);
    this.endRefTranslator = new A1ReferenceTranslatorCtor(this.cellRange.endRef);

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

  setSheetName(name) {
    this.sheetNameTranslator.setSheet(name);
  }

  toSimpleAddress() {
    let sheetNameID = this.cellRange.sheetName;
    let sheetName = sheetNameID ? sheetNameID.toString() : undefined;
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

function _doBuildCellRefCarrier(cellRef, a1RefTranslatorCtor) {
  switch (cellRef.type) {
    case Syntax.CellAddressIdentifier:
      return new CellAddressCarrier(cellRef, a1RefTranslatorCtor);
    case Syntax.CellRangeIdentifier:
      return new CellRangeCarrier(cellRef, a1RefTranslatorCtor);
  }

  return undefined;
}
/**
 * 根据语法树节点，构建节点移动工具。
 * @param {CellAddressIdentifier | CellRangeCarrier} cellRef
 */
function buildCellRefDecorator(cellRef) {
  return _doBuildCellRefCarrier(cellRef, A1ReferenceTranslator);

}

/**
 * 构建只移动相对地址（相对行、相对列）的平移器。
 * 地址中的绝对行、绝对列部分不会移动。
 * 
 * 本函数用于生成自动填充公式。
 * 
 * @param {*} cellRef 
 */
function buildRelativeCellRefCarrier(cellRef) {
  return _doBuildCellRefCarrier(cellRef, RelativeA1ReferenceTranslator);
}

exports.SimpleCellRange = SimpleCellRange;
exports.SimpleCellAddress = SimpleCellAddress;
exports.buildCellRefDecorator = buildCellRefDecorator;
exports.buildRelativeCellRefCarrier = buildRelativeCellRefCarrier;
