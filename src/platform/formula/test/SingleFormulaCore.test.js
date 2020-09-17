const assert = require('assert').strict;
const sinon = require('sinon');
const FormulaCore = require('platform/formula/core/SingleFormulaCore').SingleFormulaCore;

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
  /**
   * 处理识别错误
   */
  function decorateCoreWithErrHandler(rawInput) {

    var handleEvaluateErrorStub = sinon.spy(function (e) {

    });

    var handleParseErrorStub = sinon.spy(function (input, line, column, message) {
      assert.equal(input, rawInput);
      assert.equal(message, '无法识别的符号');
    });

    // 测试错误的符号是否可以正确识别，并提供恰当充分的出错信息
    core.setErrorHandler({
      handleEvaluateError: handleEvaluateErrorStub,
      handleParseError: handleParseErrorStub
    });
    core.calc(rawInput);

    assert.equal(handleParseErrorStub.called, true); //验证语法错误必须识别
  }

  describe('字符串', function () {
    it('字符串:识别', function () {
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
    });

    describe('字符串:识别:错误处理', function () {
      it('"', function () {
        decorateCoreWithErrHandler('"');
      });

      it('\'', function () {
        decorateCoreWithErrHandler('\'');
      });

      it('#', function () {
        decorateCoreWithErrHandler('#');
      });
    });
  })



  describe('布尔', function () {
    it('识别:布尔', function () {
      assertList([
        {
          rawValue: "true",
          expected: true
        },
        {
          rawValue: "false",
          expected: false
        }
      ]);
    });

    it('TRUE/True', function () {
      assertList([
        {
          rawValue: 'TRUE',
          expected: 'TRUE'
        },
        {
          rawValue: 'True',
          expected: 'True'
        }
      ]);
    });


    it('FALSE/False', function () {
      assertList([
        {
          rawValue: 'FALSE',
          expected: 'FALSE'
        },
        {
          rawValue: 'False',
          expected: 'False'
        }
      ]);
    });
  })


  describe('数字', function () {
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

    describe('数字:错误处理', function () {
      it('1-', function () {
        decorateCoreWithErrHandler('1-');
      });

      it('1a', function () {
        decorateCoreWithErrHandler('1a');
      });

      it('a.0', function () {
        decorateCoreWithErrHandler('a.0');
      });

      it('0.a', function () {
        decorateCoreWithErrHandler('0.a');
      });
    })
  })



  it('识别:空', function () {
    assertList([
      {
        rawValue: 'null',
        expected: null
      }
    ]);
  });

});

describe('识别变量', function () {
  it('相对单元格地址', function () {
    assertList([
      {
        rawValue: 'A1',
        expected: 'A1'
      },
      {
        rawValue: 'B1',
        expected: 'B1'
      },
      {
        rawValue: 'A1000',
        expected: 'A1000'
      },
      {
        rawValue: 'Z1000',
        expected: 'Z1000'
      },
      {
        rawValue: 'Sheet1!A1',
        expected: 'Sheet1!A1'
      }
    ]);
  });

  it('绝对单元格地址', function () {
    assertList([
      {
        rawValue: '$A$1',
        expected: '$A$1'
      }
    ]);
  });

  it('混合单元格地址', function () {
    assertList([
      {
        rawValue: 'A$1',
        expected: 'A$1'
      },
      {
        rawValue: '$A1',
        expected: '$A1'
      },

      {
        rawValue: 'Sheet1!A$1',
        expected: 'Sheet1!A$1'
      }
    ]);
  });

  it('单元格范围', function () {
    assertList([
      {
        rawValue: 'A1:B1',
        expected: 'A1:B1'
      },
      {
        rawValue: 'Sheet1!A1:B1',
        expected: 'Sheet1!A1:B1'
      },
      {
        rawValue: 'Sheet1!A$1:$B1',
        expected: 'Sheet1!A$1:$B1'
      },
      {
        rawValue: 'Sheet1!$A$1:$B$1',
        expected: 'Sheet1!$A$1:$B$1'
      },
    ]);
  });

  describe('报表项', function () {

  });

  describe('普通变量', function () {

  });
});
