const assert = require('assert').strict;
const sinon = require('sinon');
const FormulaCore = require('../core/SingleFormulaCore.js');

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
  function decorateCore(rawInput) {
  
    var handleRuntimeErrorStub = sinon.spy(function(e) {

    });

    var handleStub = sinon.spy(function (input, line, column, message) {
      assert.equal(input, rawInput);
      assert.equal(message, '无法识别的符号');
    });
    
    // 测试错误的符号是否可以正确识别，并提供恰当充分的出错信息
    core.removeErrorHandler().setErrorHandler({
      handleRuntimeError: handleRuntimeErrorStub,
      handle: handleStub
    });
    core.calc(rawInput);
    
    assert.equal(handleStub.called, true); //验证语法错误必须识别
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
      it('"', function(){
        decorateCore('"');
      });
      
      it('\'', function(){
        decorateCore('\'');
      });
  
      it('#', function(){
        decorateCore('#');
      });     
    });
  })
 

  
  describe('布尔', function (){
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

    describe('数字:错误处理', function() {
      it('1-', function(){
        decorateCore('1-');
      });
      
      it('1a', function(){
        decorateCore('1a');
      });
  
      it('a.0', function(){
        decorateCore('a.0');
      }); 
      
      it('0.a', function(){
        decorateCore('0.a');
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
  describe('相对单元格地址',function () {

  });

  describe('绝对单元格地址', function () {

  });

  describe('单元格范围', function () {

  });

  describe('报表项', function () {

  });

  describe('普通变量', function () {

  });
});