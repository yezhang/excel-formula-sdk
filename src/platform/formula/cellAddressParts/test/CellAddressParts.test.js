const assert = require('assert').strict;
const sinon = require('sinon');

const CellAddress = require('../common/CellAddressParts').CellAddress;
const CellAddressParts = require('platform/formula/cellAddressParts/common/CellAddressParts');
const { A1Reference } = CellAddressParts;
const { RelativeColumn, AbsoluteColumn } = CellAddressParts;
const { RelativeRow, AbsoluteRow } = CellAddressParts;

const convertColumnLettersToNumber = CellAddressParts.convertColumnLettersToNumber;
const convertNumberToColumnLetters = CellAddressParts.convertNumberToColumnLetters;

describe('单元格地址', function () {
  it('单元格列与数字的转换', function () {
    for (let n = 1; n <= 1000000; n++) {
      let column = convertNumberToColumnLetters(n);

      let convertedNumber = convertColumnLettersToNumber(column);

      assert.strictEqual(n, convertedNumber);
    }
  });

  
  it('单元格列转化为数字', function () {
    assert.strictEqual(convertColumnLettersToNumber('A'), 1);
    assert.strictEqual(convertColumnLettersToNumber('Z'), 26);
    assert.strictEqual(convertColumnLettersToNumber('A'), 1);
    assert.strictEqual(convertColumnLettersToNumber('Z'), 26);

    assert.strictEqual(convertColumnLettersToNumber('AA'), 27);
    assert.strictEqual(convertColumnLettersToNumber('AB'), 28);
    assert.strictEqual(convertColumnLettersToNumber('AZ'), 52);

  });
});