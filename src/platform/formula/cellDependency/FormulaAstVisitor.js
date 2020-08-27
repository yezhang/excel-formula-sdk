const ReportFormulaParserVisitor = require('../runtime/ReportFormulaParserVisitor').ReportFormulaParserVisitor;
const CellAddressVisitor = require('platform/formula/runtime/CellAddressVisitor').CellAddressVisitor;

class CellAddressAstVisitor extends CellAddressVisitor {

}

/**
 * 用于将解析树转换为语言模型。
 */
class FormulaAstVisitor extends ReportFormulaParserVisitor {

}

exports.FormulaAstVisitor = FormulaAstVisitor;