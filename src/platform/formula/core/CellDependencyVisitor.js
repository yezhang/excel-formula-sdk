const ReportFormulaParserVisitor = require('../runtime/ReportFormulaParserVisitor').ReportFormulaParserVisitor;
const ReportFormulaParser = require('../runtime/ReportFormulaParser').ReportFormulaParser;

/**
 * 收集单元格依赖的其他单元格地址。
 */
class CellDependencyVisitor extends ReportFormulaParserVisitor {
  constructor() {
    super();

    this.cellAddressList = [];
  }

  collectAddress(address) {
    this.cellAddressList.push(address);
  }

  visitFormulaExpr(ctx) {
    ctx.expressionStatement().accept(this);
    return this.cellAddressList;
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

  /**
  * 单元格地址：CellAddressLiteral
  */
  visitIdentifierCellAddressLiteral(ctx) {
    let addr = ctx.getText();
    this.collectAddress({
      
    });
    return ctx.getText();
  }

  /**
   * 单元格范围：CellRangeLiteral
   */
  visitIdentifierCellRangeLiteral(ctx) {
    //TODO evaluate address
    return ctx.getText();
  }

}

exports.CellDependencyVisitor = CellDependencyVisitor;