/**
 * 公式计算错误：
 * 共 7 种。
 * (1) 除数为 0 的错误。 DivideByZeroError
 * (2) 数值类型错误。 NotANumberError
 * (3) 非法的符号。 NameError
 * (4) 空错误。 NullError
 * (5) 参数错误。 NumberError
 * (6) 单元格地址错误。 RefError
 * (7) 单元格数据类型错误。 ValueError
 * 
 * https://support.microsoft.com/zh-cn/office/检测公式中的错误-3a8acca5-1d61-4702-80e0-99a36a2822c1
 */

/**
 * 所有计算错误的基类
 */
class EvaluationError extends Error {
  constructor(msg) {
    super(msg);
    this.wrongResult = undefined; // 异常发生时的计算结果。该结果可以用于外部显示使用。
  }

  /**
   * 返回计算错误时的结果。
   */
  getResult() {
    return this.wrongResult;
  }
}

/**
 * 除数为 0 的错误
 */
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

exports.EvaluationError = EvaluationError;

exports.DivideByZeroError = DivideByZeroError;
exports.NotANumberError = NotANumberError;
exports.NameError = NameError;
exports.NullError = NullError;
exports.NumberError = NumberError;
exports.RefError = RefError;
exports.ValueError = ValueError;