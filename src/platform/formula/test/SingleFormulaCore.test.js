const expect = require('chai').expect;
const sinon = require('sinon');
const FormulaCore = require('platform/formula/core/SingleFormulaCore').SingleFormulaCore;

// 验证语法的识别是否准确
function assertRecognitionList(core, list, grammarRule) {
  if (!list || list.length === 0) {
    return;
  }
  list.forEach(function (item) {
    const parser = core.buildParser(item.rawValue);
    const parseTree = parser[grammarRule]();

    var result = parseTree.getText();
    expect(result).to.equal(item.expected, '语法识别错误');
  })
}

describe('一般常量', function () {
  let core;
  beforeEach(function () {
    core = new FormulaCore();
  })


  /**
   * 处理识别错误
   */
  function decorateCoreWithErrHandler(core, rawInput, ruleName) {
    var handleEvaluateErrorStub = sinon.spy(function (e) { });

    var handleParseErrorStub = sinon.spy(function (input, line, column, message) {
      expect(input).to.equal(rawInput);
      expect(message, '无法识别的符号')
    });

    // 测试错误的符号是否可以正确识别，并提供恰当充分的出错信息
    core.setErrorHandler({
      handleEvaluateError: handleEvaluateErrorStub,
      handleParseError: handleParseErrorStub
    });
    const parser = core.buildParser(rawInput);

    if (ruleName) {
      parser[ruleName]();
    } else {

      parser.formulaExpr();
    }

    //验证语法错误必须识别
    expect(handleParseErrorStub.called).to.be.true;
  }

  describe('字符串', function () {
    it('字符串:识别', function () {
      assertRecognitionList(core, [
        {
          rawValue: "\"OK\"",
          expected: "\"OK\""
        },
        {
          rawValue: "\"\"",
          expected: "\"\""
        },
        {
          rawValue: "\"\\\"\"",
          expected: "\"\\\"\""
        }
      ], 'literal');
    });

    describe('字符串:识别:错误处理', function () {
      it('"', function () {
        decorateCoreWithErrHandler(core, '"');
      });

      it('\'', function () {
        decorateCoreWithErrHandler(core, '\'');
      });

      it('#', function () {
        decorateCoreWithErrHandler(core, '#');
      });
    });
  })

  describe('布尔', function () {
    it('识别:布尔', function () {
      assertRecognitionList(core, [
        {
          rawValue: "true",
          expected: "true"
        },
        {
          rawValue: "false",
          expected: "false"
        }
      ], 'literal');
    });

    it('TRUE/True', function () {
      decorateCoreWithErrHandler(core, 'TRUE', 'literal');
      decorateCoreWithErrHandler(core, 'True', 'literal');
      // assertRecognitionList(core, [
      //   {
      //     rawValue: 'TRUE',
      //     expected: 'TRUE'
      //   },
      //   {
      //     rawValue: 'True',
      //     expected: 'True'
      //   }
      // ], 'literal');
    });


    it('FALSE/False', function () {
      assertRecognitionList(core, [
        {
          rawValue: 'FALSE',
          expected: 'FALSE'
        },
        {
          rawValue: 'False',
          expected: 'False'
        }
      ], 'literal');
    });
  })

  describe('数字', function () {
    it('识别:数字', function () {
      assertRecognitionList(core, [
        {
          rawValue: '1',
          expected: '1'
        },
        {
          rawValue: '-1',
          expected: '-1'
        },
        {
          rawValue: '0',
          expected: '0'
        },
        {
          rawValue: '1.2',
          expected: '1.2'
        },
        {
          rawValue: '0.1',
          expected: '0.1'
        },
        {
          rawValue: '-0.1',
          expected: '-0.1'
        },
        {
          rawValue: '13%',
          expected: '13%'
        },
        {
          rawValue: '+1',
          expected: '+1'
        },
        {
          rawValue: '+0',
          expected: '+0'
        },
        {
          rawValue: '-0',
          expected: '-0'
        },
        {
          rawValue: '0.0',
          expected: '0.0'
        },
        {
          rawValue: '0.00',
          expected: '0.00'
        },
        {
          rawValue: '100%',
          expected: '100%'
        }
      ], 'singleExpression');
    });

    describe('数字:错误处理', function () {
      it('1-', function () {
        decorateCoreWithErrHandler(core, '1-');
      });

      it('1a', function () {
        decorateCoreWithErrHandler(core, '1a');
      });

      it('a.0', function () {
        decorateCoreWithErrHandler(core, 'a.0');
      });

      it('0.a', function () {
        decorateCoreWithErrHandler(core, '0.a');
      });
    })
  })

  it('识别:空', function () {
    assertRecognitionList(core, [
      {
        rawValue: 'null',
        expected: 'null'
      }
    ], 'literal');
  });

});

describe('识别变量(SingleFormulaCore.test.js)', function () {
  let core;
  beforeEach(function () {
    core = new FormulaCore();
  })
  it('相对单元格地址', function () {
    assertRecognitionList(core, [
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
    ], 'identifier');
  });

  it('绝对单元格地址', function () {
    assertRecognitionList(core, [
      {
        rawValue: '$A$1',
        expected: '$A$1'
      }
    ], 'identifier');
  });

  it('混合单元格地址', function () {
    assertRecognitionList(core, [
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
    ], 'identifier');
  });

  it('单元格范围', function () {
    assertRecognitionList(core, [
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
    ], 'identifier');
  });

  it('浮动单元格范围', function(){
    assertRecognitionList(core, [
      {
        rawValue: 'A1->B1',
        expected: 'A1->B1'
      },
      {
        rawValue: 'Sheet1!A1->B1',
        expected: 'Sheet1!A1->B1'
      },
      {
        rawValue: 'Sheet1!A$1->$B1',
        expected: 'Sheet1!A$1->$B1'
      },
      {
        rawValue: 'Sheet1!$A$1->$B$1',
        expected: 'Sheet1!$A$1->$B$1'
      },
    ], 'identifier');
  })

  describe('报表项', function () {

  });

  describe('普通变量', function () {

  });
});
