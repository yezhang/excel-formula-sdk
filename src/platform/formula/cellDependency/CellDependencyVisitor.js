const ReportFormulaParserVisitor = require('../runtime/ReportFormulaParserVisitor').ReportFormulaParserVisitor;
const ReportFormulaParser = require('../runtime/ReportFormulaParser').ReportFormulaParser;

/**
 * 收集单元格依赖的其他单元格地址。
 */
class CellDependencyVisitor extends ReportFormulaParserVisitor {
  constructor() {
    super();

    this._cellAddressList = [];
  }

  collectAddress(address) {
    this._cellAddressList.push(address);
  }

  getCellAddressList() {
    return this._cellAddressList;
  }

  visitFormulaExpr(ctx) {
    ctx.expressionStatement().accept(this);
    return this._cellAddressList;
  }

  visitExpressionStatement(ctx) {
    return ctx.expressionSequence().accept(this);
  }

  // 多个表达式序列时，使用最后一个序列为计算结果
  visitExpressionSequence(ctx) {
    if (!ctx) {
      return;
    }

    if (ctx.children) {
      var result = undefined;
      for (var i = 0; i < ctx.children.length; i++) {
        result = ctx.children[i].accept(this);
      }

      return result;
    }
  }

  collectCellAddrLiteral(ctx) {
    let addr = ctx.getText();
    this.collectAddress(addr);
  }

  /**
  * 单元格地址：CellAddressLiteral
  */
  visitIdentifierCellAddressLiteral(ctx) {
    this.collectCellAddrLiteral(ctx);
  }

  /**
   * 单元格范围：CellRangeLiteral
   */
  visitIdentifierCellRangeLiteral(ctx) {
    this.collectCellAddrLiteral(ctx);
  }

}

exports.CellDependencyVisitor = CellDependencyVisitor;