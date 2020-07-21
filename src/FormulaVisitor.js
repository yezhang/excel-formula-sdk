const ReportFormulaParserVisitor = require('../out/ReportFormulaParserVisitor.js').ReportFormulaParserVisitor;

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

  visitSheetAddress(ctx) {
    return ctx.getText();
  }

  visitLiteral(ctx) {
    return ctx.children[0].accept(this);
  }
  visitLiteralExpression(ctx) {
    return ctx.children[0].accept(this); // 直接返回孩子节点的结果，不使用数组包装
  }

  visitNumericLiteral(ctx) {
    return new Number(ctx.getText());
  }

  // singleExpression ('+' | '-') singleExpression
  visitAdditiveExpression(ctx) {
    var leftValue = ctx.singleExpression(0).accept(this);
    var rightValue = ctx.singleExpression(1).accept(this);
    if(ctx.op === ctx.Plus().getSymbol()){
      return leftValue + rightValue;
    }

    if(ctx.op === ctx.Minus().getSymbol()) {
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