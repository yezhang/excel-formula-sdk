/** 
 * 测试公式求值过程。
 */
const expect = require('chai').expect;
const Core = require('platform/formula/core/SingleFormulaCore').INSTANCE;
const SingleFormulaAST = require('platform/formula/core/SingleFormulaAST').SingleFormulaAST;
const Evaluator = require('platform/formula/cellEvaluation/Evaluator').Evaluator;

describe('公式求值', function () {
  let cellValueProvider = {
    getCellValue: function (cellAddress) {

    },
    setCellValue: function (cellAddress){

    }
  }
  describe('[常量+运算符]', function () {
    function assertEvaluation(input, expected) {
      let ast = new SingleFormulaAST(Core.parse(input));
      let evaluator = new Evaluator(null, cellValueProvider);

      let ret = evaluator.evaluateAST(ast);
      if(Number.isNaN(expected)) {
        expect(ret).to.be.NaN;
      }else {
        expect(ret).to.equal(expected);
      }
      
    }

    const datas = [
      ['-1', -1],
      ['+0', 0],
      ['1 + 1', 2],
      ['0 - 1', -1],
      ['0.0 * 1', 0],
      [' 1 / 2.5', 1 / 2.5],
      ['2 * 50%', 1],
      ['- - 1', 1],
      ['10 % 0', NaN],
      ['2 ** 0', 1]
    ];

    datas.forEach(function (item){
      it(item[0], function() {
        assertEvaluation(item[0], item[1]);
      })
    });
  })
})