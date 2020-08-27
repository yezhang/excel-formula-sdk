const assert = require('assert').strict;
const sinon = require('sinon');

const CellAddress = require('../common/CellAddressParts').CellAddress;
const CellAddressParts = require('platform/formula/cellAddressParts/common/CellAddressParts');
const {A1Reference} = CellAddressParts;
const {RelativeColumn, AbsoluteColumn} = CellAddressParts;
const {RelativeRow, AbsoluteRow} = CellAddressParts;

describe('单元格地址', function (){
  it('单元格地址的结构化表示', function() {

    assert.strictEqual(new RelativeColumn('A').toString(), 'A');
    assert.strictEqual(new AbsoluteColumn('A').toString(), '$A');
    assert.strictEqual(new RelativeRow(1).toString(), '1');
    assert.strictEqual(new AbsoluteRow(1).toString(), '$1');
    
    let c = new AbsoluteColumn('B');
    let r = new RelativeRow(1);
    let ref = new A1Reference(c, r);
    assert.strictEqual(ref.toString(), '$B1');

  });
  it('单元格列转化为数字', function() {
    assert.strictEqual(new RelativeColumn('A').toNumber(), 1);
    assert.strictEqual(new RelativeColumn('Z').toNumber(), 26);
    assert.strictEqual(new AbsoluteColumn('A').toNumber(), 1);
    assert.strictEqual(new AbsoluteColumn('Z').toNumber(), 26);
    
    assert.strictEqual(new AbsoluteColumn('AA').toNumber(), 27);
    assert.strictEqual(new AbsoluteColumn('AB').toNumber(), 28);
    assert.strictEqual(new AbsoluteColumn('AZ').toNumber(), 52);

  });
  it('正确获取Sheet名称', function (){
    let addr = new CellAddress('sheet1', 'A1');

    assert.deepEqual(addr.addressDescription, {
      sheet: 'sheet1',
      column: 'A',
      row: '1'
    });

    addr = new CellAddress('sheet1', 'A$1');

    assert.deepEqual(addr.addressDescription, {
      sheet: 'sheet1',
      column: 'A',
      row: '$1'
    });

    addr = new CellAddress('sheet1', 'Sheet2!A$1');

    assert.deepEqual(addr.addressDescription, {
      sheet: 'Sheet2!',
      column: 'A',
      row: '$1'
    });

    addr = new CellAddress('sheet1', 'Sheet2!$A$1');

    assert.deepEqual(addr.addressDescription, {
      sheet: 'Sheet2!',
      column: '$A',
      row: '$1'
    });
  });
});