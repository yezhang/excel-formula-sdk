const ReportFormulaParserVisitor = require('../../out/ReportFormulaParserVisitor').ReportFormulaParserVisitor;
const ReportFormulaParser = require('../../out/ReportFormulaParser').ReportFormulaParser;

const StringUtils = require('../util/StringUtils').StringUtils;
const CalculationException = require('../error/FormulaExceptions').CalculationException;


class FormulaVisitor extends ReportFormulaParserVisitor {
  visitFormulaExpr(ctx) {
    return ctx.expressionStatement().accept(this);
  }

  visitExpressionStatement(ctx) {
    return ctx.expressionSequence().accept(this);
  }

  // 多个表达式序列时，使用最后一个序列为计算结果
  visitExpressionSequence(ctx) {
    if(!ctx){
      return;
    }

    if(ctx.children) {
      var result = undefined;
      for(var i = 0; i < ctx.children.length; i++){
        result = ctx.children[i].accept(this);
      }

      return result;
    }
  }

  visitUnaryMinusExpression(ctx) {
    return -1 * ctx.singleExpression().accept(this);
  }

  visitUnaryPlusExpression(ctx) {
    return ctx.singleExpression().accept(this);
  }

  visitSheetAddress(ctx) {
    return ctx.getText();
  }

  
  visitStringLiteralExpression(ctx) {
    var rawText = ctx.getText();
    return StringUtils.unwrapText(rawText);
  }

  visitNumericLiteralExpression(ctx) {
    var num = ctx.children[0].accept(this);
    return num;
  }

  visitNumericLiteral(ctx) {
    return ctx.children[0].accept(this);
  }
  /**
   * 访问百分数
   */
  visitPercentageLiteral(ctx) {
    return ctx.basicNumberLiteral().accept(this) / 100.0;
  }

  /**
   * 访问基本数字
   */
  visitBasicNumberLiteral(ctx) {
    return Number(ctx.getText());
  }

  /**
   * 识别 null
   */
  visitNullLiteralExpression(ctx) {
    return null; // 直接反馈 null 字面量
  }

  visitTerminal(ctx) {
    return ctx.getText();
  }

  visitLiteralExpression(ctx) {
    return ctx.children[0].accept(this); // 直接返回孩子节点的结果，不使用数组包装
  }

  // singleExpression ('+' | '-') singleExpression
  visitAdditiveExpression(ctx) {
    var leftValue = ctx.singleExpression(0).accept(this);
    if(!leftValue){
      throw new CalculationException();
    }
    var rightValue = ctx.singleExpression(1).accept(this);
    if(!rightValue){
      throw new CalculationException();
    }

    if(ctx.op.type === ReportFormulaParser.Plus){
      return leftValue + rightValue;
    }

    if(ctx.op.type === ReportFormulaParser.Minus) {
      return leftValue - rightValue;
    }
  }

  // visitChildren(ctx) {
  //   if (!ctx) {
  //     return;
  //   }
  //   if (ctx.children) {
  //     return ctx.children.map(child => {
  //       if (child.children && child.children.length != 0) {
  //         return child.accept(this);
  //       } else {
  //         return child.getText();
  //       }
  //     });
  //   }
  // }
}

exports.FormulaVisitor = FormulaVisitor;