/**
 * 用于生成公式编辑器需要的 token。
 * 生成的 token 用于编辑器高亮。
 * 需要高亮的 token 有：字面量、单元格地址、函数名称。
 */

const ReportFormulaParserVisitor = require('../runtime/ReportFormulaParserVisitor').ReportFormulaParserVisitor;

class EditorTokensVisitor extends ReportFormulaParserVisitor {
  constructor(tokenContainer) {
    super();
    this.tokenContainer = tokenContainer;
  }

  visitArgumentsExpression(ctx) {
    const tokenRule = ctx.singleExpression();
    this.tokenContainer.push({
      tokenTypeName: 'functionName',
      column: tokenRule.getStart().getCharPositionInLine()
    });
    ctx.arguments().accept(this);
  }

  visitNumericLiteralExpression(ctx) {
    this.tokenContainer.push({
      tokenTypeName: 'numberLiteral',
      column: ctx.getStart().getCharPositionInLine()
    });
  }
}

exports.EditorTokensVisitor = EditorTokensVisitor;