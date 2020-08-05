const ReportFormulaParserVisitor = require('../runtime/ReportFormulaParserVisitor').ReportFormulaParserVisitor;
const ReportFormulaParser = require('../runtime/ReportFormulaParser').ReportFormulaParser;

const StringUtils = require('../../../base/StringUtils').StringUtils;
const FormulaErrs = require('../error/FormulaExceptions');
const CalculationException = FormulaErrs.CalculationException;
const ParseException = FormulaErrs.ParseException;

class ValueEvaluationVisitor extends ReportFormulaParserVisitor {
  visitFormulaExpr(ctx) {
    return ctx.expressionStatement().accept(this);
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
   * 一元运算符: -
   */
  visitUnaryMinusExpression(ctx) {
    return -1 * ctx.singleExpression().accept(this);
  }

  /**
   * 一元运算符：+
   */
  visitUnaryPlusExpression(ctx) {
    return ctx.singleExpression().accept(this);
  }

  /**
   * 单元格地址：CellAddressLiteral
   */
  visitIdentifierCellAddressLiteral(ctx) {
    //TODO evaluate address
    return ctx.getText();
  }

  /**
   * 单元格范围：CellRangeLiteral
   */
  visitIdentifierCellRangeLiteral(ctx) {
    //TODO evaluate address
  }

  /**
   * 字符串字面量
   */
  visitStringLiteralExpression(ctx) {
    var rawText = ctx.getText();
    return StringUtils.unwrapText(rawText);
  }

  visitNumericLiteralExpression(ctx) {
    var num = ctx.children[0].accept(this);
    return num;
  }

  /**
   * 访问百分数
   */
  visitPercentageLiteralExpression(ctx) {
    return ctx.percentageLiteral().accept(this);
  }

  visitPercentageLiteral(ctx) {
    return ctx.BasicNumberLiteral().accept(this) / 100.0;
  }

  /**
   * 访问基本数字
   */
  visitBasicNumberLiteralExpression(ctx) {
    return Number(ctx.getText());
  }

  visitIdentifierExpression(ctx) {
    return ctx.identifier().accept(this);
  }

  visitIdentifierPlainText(ctx) {
    return ctx.getText();
  }

  /**
   * 识别布尔字面量
   */
  visitBooleanLiteralExpression(ctx) {
    var plainText = ctx.getText();
    return (plainText === 'true');
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

  /**
   * 加法运算: singleExpression ('+' | '-') singleExpression
   */
  visitAdditiveExpression(ctx) {
    var leftValue = ctx.singleExpression(0).accept(this);
    if (!leftValue) {
      throw new CalculationException();
    }
    var rightValue = ctx.singleExpression(1).accept(this);
    if (!rightValue) {
      throw new CalculationException();
    }

    if (ctx.op.type === ReportFormulaParser.Plus) {
      return leftValue + rightValue;
    }

    if (ctx.op.type === ReportFormulaParser.Minus) {
      return leftValue - rightValue;
    }
  }

  /**
   * 乘法运算: singleExpression op=('*' | '/' | '%') singleExpression
   */
  visitMultiplicativeExpression(ctx) {
    var leftValue = ctx.singleExpression(0).accept(this);
    if (!leftValue) {
      throw new CalculationException();
    }
    var rightValue = ctx.singleExpression(1).accept(this);
    if (!rightValue) {
      throw new CalculationException();
    }

    if (ctx.op.type === ReportFormulaParser.Multiply) {
      return leftValue * rightValue;
    }

    if (ctx.op.type === ReportFormulaParser.Divide) {
      if(rightValue === 0) {
        throw new CalculationException();
      }
      return leftValue / rightValue;
    }

    if (ctx.op.type === ReportFormulaParser.Modulus) {
      return leftValue % rightValue;
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

exports.ValueEvaluationVisitor = ValueEvaluationVisitor;