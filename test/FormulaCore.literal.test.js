const assert = require('assert').strict;
const FormulaCore = require('../src/core/FormulaCore.js');

const core = FormulaCore.INSTANCE;

function assertList(list) {
  if (!list || list.length === 0) {
    return;
  }
  list.forEach(function (item) {
    var result = core.calc(item.rawValue);
    assert.equal(result, item.expected, `${item.expected} 计算错误`);
  })
}

describe('一般常量', function () {
  it('识别:字符串', function () {
    assertList([
      {
        rawValue: "\"OK\"",
        expected: "OK"
      },
      {
        rawValue: "\"\"",
        expected: ""
      },
      {
        rawValue: "\"\\\"\"",
        expected: "\""
      }
    ]);

    // 测试错误的符号是否可以正确识别，并提供恰当充分的出错信息
    core.removeErrorHandler().setErrorHandler({
      handle: function (input, line, column, message) {
        assert.equal(message, 'no viable alternative at input \'"\'');
      }
    }).calc('"');
  });


  it('识别:布尔', function () {

  });

  it('识别:数字', function () {
    assertList([
      {
        rawValue: '1',
        expected: 1
      },
      {
        rawValue: '-1',
        expected: -1
      },
      {
        rawValue: '0',
        expected: 0
      },
      {
        rawValue: '1.2',
        expected: 1.2
      },
      {
        rawValue: '0.1',
        expected: 0.1
      },
      {
        rawValue: '-0.1',
        expected: -0.1
      },
      {
        rawValue: '13%',
        expected: 0.13
      },
      {
        rawValue: '+1',
        expected: 1
      },
      {
        rawValue: '+0',
        expected: 0
      },
      {
        rawValue: '-0',
        expected: -0
      },
      {
        rawValue: '0.0',
        expected: 0
      },
      {
        rawValue: '0.00',
        expected: 0
      },
      {
        rawValue: '100%',
        expected: 1
      }
    ]);
  });

  it('识别:空', function () {
    assertList([
      {
        rawValue: 'null',
        expected: null
      }
    ]);
  });

});