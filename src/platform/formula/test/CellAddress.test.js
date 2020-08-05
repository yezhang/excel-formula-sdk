const assert = require('assert').strict;
const sinon = require('sinon');

const CellAddress = require('../cellAddress/CellAddress').CellAddress;


describe('单元格地址', function (){
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