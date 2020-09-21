/**
 * 公式求值器，计算公式的具体数值。
 */
const types = require('base/common/types');
const CellValueProviderProxy = require('platform/formula/cellEvaluation/CellValueProviderProxy');
const FormulaEvaluationVisitor = require('platform/formula/cellEvaluation/FormulaEvaluationVisitor').FormulaEvaluationVisitor;
const {SimpleCellAddress} = require('platform/formula/cellAddressParts/common/CellAddressParts');

/**
 * 公式计算错误：
 * https://support.microsoft.com/zh-cn/office/检测公式中的错误-3a8acca5-1d61-4702-80e0-99a36a2822c1
 */
class EvaluationError extends Error {
  constructor(msg) {
    super(msg);
    this.wrongResult = undefined; // 异常发生时的计算结果。该结果可以用于外部显示使用。
  }
}

class DivideByZeroError extends EvaluationError{
  constructor(msg){
    super(msg);
    this.wrongResult = '#DIV/0!';
  }
}

/**
 * 当某个值不可用于函数或公式时，将显示此错误。
 */
class NotANumberError extends EvaluationError{
  constructor(msg){
    super(msg);
    this.wrongResult = '#N/A'
  }
}

/**
 * 当无法识别公式中的文本时，将显示此错误。 例如，区域名称或函数名称可能拼写错误。
 */
class NameError extends EvaluationError{
  constructor(msg){
    super(msg);
    this.wrongResult = '#NAME?'
  }
}

/**
 * 当你指定两个不相交的区域的交集时，Excel 将显示此错误。 交集运算符是分隔公式中的引用的空格字符。
 */
class NullError extends EvaluationError{
  constructor(msg){
    super(msg);
    this.wrongResult = '#NULL!'
  }
}

/**
 * 当公式或函数包含无效数值时，将显示此错误。
 * 你使用的是循环访问的函数 (如 IRR 或 RATE) 吗？如果是, 则 #NUM!错误可能是由于函数无法找到结果而导致的。
 */
class NumberError extends EvaluationError{
  constructor(msg){
    super(msg);
    this.wrongResult = '#NUM!'
  }
}

/**
 * 当单元格引用无效时，将显示此错误。 
 * 例如，你可能删除了其他公式所引用的单元格，或者可能将所移动的单元格粘贴到其他公式所引用的单元格上。
 */
class RefError extends EvaluationError{
  constructor(msg){
    super(msg);
    this.wrongResult = '#REF!'
  }
}

/**
 * 如果公式中包含含有不同数据类型的单元格，则 Excel 会显示此错误。
 */
class ValueError extends EvaluationError {
  constructor(msg){
    super(msg);
    this.wrongResult = '#VALUE!'
  }
}


/**
 * 根据依赖图对单元格求值。
 */
class Evaluator {
  constructor(depGraph, tableCellValueProvider) {
    this.depGraph = depGraph;
    this.cellValueProxy = new CellValueProviderProxy(tableCellValueProvider);
  }

  /**
   * 对某个单元格的公式求值。
   * @param {String} activeSheetName 工作表名称
   * @param {Object} cellAddr 单元格地址对象 {column:<1..n>, row:<1..n>}
   * 
   */
  evaluate(activeSheetName, cellAddr) {
    let simpleAddr = SimpleCellAddress.build(activeSheetName, cellAddr.column, cellAddr.row);
    let formulaAST = this.depGraph.getCellFormulaAST(activeSheetName, simpleAddr);
    return this.evaluateAST(formulaAST);
  }

  evaluateAST(formulaAST) {
    return formulaAST.accept(new FormulaEvaluationVisitor(this.cellValueProxy));
  }

  evaluateAll() {
    let that = this;
    let sorted = this.depGraph.sort();
    if (types.isArray(sorted)) {
      sorted.forEach(function (node) {
        let cellData = node.data;

        // 根据语法树求值
        let formula = cellData.getFormulaAST();
        let visitor = new FormulaEvaluationVisitor(that.cellValueProxy);

        // 在求值过程中，会同步调用 cellValueProxy 获取单元格数据
        let ret = formula.accept(visitor);

        // TODO: 如果发生计算异常，则缓存成输出的值，反馈外部。

        // 在求值完毕后，会同步调用 cellValueProxy 设置单元格值，因为后续单元格会依赖该值的计算
        that.cellValueProxy.setCellValue(cellData.cellAddress, ret);
      })
    }
  }
}


exports.Evaluator = Evaluator;