const formulaFns = require('@formulajs/formulajs');

const types = require('base/common/types');
const {SimpleCellAddress} = require('platform/formula/cellAddressParts/common/CellAddressParts');
const StringUtils = require('../../../base/StringUtils').StringUtils;

const EvaluationErrors = require('platform/formula/cellEvaluation/EvaluationErrors');

/**
 * 针对单个公式求值。
 */
class FormulaEvaluationVisitor {
  /**
   * 
   * @param {*} cellValueProxy 
   * @param {String} ownerSheetName 当前公式所属的工作表名称。
   */
  constructor(cellValueProxy, ownerSheetName) {
    this.cellValueProxy = cellValueProxy;
    this.ownerSheetName = ownerSheetName;
  }

  setCellValueProvider(provider) {
    if (!provider) {
      return;
    }
    this.cellValueProxy = provider;
  }

  getCellValueProvider() {
    return this.cellValueProxy;
  }

  visitFormulaProgram(node) {
    return node.body.accept(this);
  }

  visitExpressionStatement(node) {
    return node.expression.accept(this);
  }

  /**
   * TODO: 针对 IF 函数的短路运算？
   * @param {*} node 
   */
  visitCallExpression(node) {
    const that = this;
    let fnName = node.callee.toString();
    let args = node.arguments;
    let argList = args.map(function (arg) {
      return arg.accept(that);
    });

    fnName = fnName.toUpperCase();
    if (fnName in formulaFns) {
      return formulaFns[fnName].apply(null, argList);
    }

    throw new EvaluationErrors.NameError('非法的函数，无法识别');
  }

  visitPlainTextIdentifier(node) {
    return node.name;
  }

  visitRefItemIdentifier(node) {
    // TODO: 从接口取数
    // not implemented yet
  }

  /**
   * 将语法树节点转换为 SimpleCellAddress 
   * @param {CellAddressIdentifier} node
   */
  _buildSimpleCellAddress(node) {
    // AST 与用户输入的文本保持一致，其中的节点可能有 sheetName，也可能没有 sheetName

    let sheetName = undefined;
    if(node.sheetName){
      sheetName = node.sheetName.toString();
    }

    if(!sheetName || sheetName.length === 0) {
      sheetName = this.ownerSheetName;
    }
    
    let a1ref = node.a1Reference;
    let column = a1ref.columnRef.text;
    let row = a1ref.rowRef.line;
    return SimpleCellAddress.build(sheetName, column, row);
  }

  /**
   * 单元格地址：CellAddressLiteral
   */
  visitCellAddressIdentifier(node) {
    // TODO: 从单元格取值
    // 转换为 SimpleCellAddress
    let addr = this._buildSimpleCellAddress(node);
    // 根据 SimpleCellAddress 从单元格取值
    return this.cellValueProxy.getCellValue(addr);
  }

  /**
   * 单元格范围：CellRangeLiteral
   */
  visitCellRangeIdentifier(node) {
    // TODO: 从单元格范围取值
  }

  visitA1ReferenceIdentifier(node) {

  }

  visitRelativeColumnIdentifier(node) {

  }

  visitAbsoluteColumnIdentifier(node) {

  }

  visitRelativeRowIdentifier(node) {

  }

  visitAbsoluteRowIdentifier(node) {

  }

  /**
   * 一元运算符: -,+
   */
  visitUnaryExpression(node) {
    let argValue = node.argument.accept(this);
    switch (node.operator) {
      case '+':
        return argValue;
      case '-':
        return -1 * argValue;
    }

    throw new Error('非法的运算符');
  }

  visitBinaryExpression(node) {
    let op = node.operator;
    let leftValue = node.left.accept(this);
    let rightValue = node.right.accept(this);
    switch (op) {
      case '**':
        return Math.pow(leftValue, rightValue);
      case '*':
        return leftValue * rightValue;
      case '/':
        return leftValue / rightValue;
      case '%':
        return leftValue % rightValue;
      case '+':
        return leftValue + rightValue;
      case '-':
        return leftValue - rightValue;
      case '>':
        return leftValue > rightValue;
      case '>=':
        return leftValue >= rightValue;
      case '<':
        return leftValue < rightValue;
      case '<=':
        return leftValue <= rightValue;
      case '==':
        return leftValue == rightValue;
      case '!=':
        return leftValue != rightValue;
    }

    throw new Error('非法的二元运算符:' + op);
  }

  visitLogicalExpression(node) {
    let op = node.operator;
    let leftValue = node.left.accept(this);
    let rightValue = node.right.accept(this);
    switch (op) {
      case '&&':
        return leftValue && rightValue;
      case '||':
        return leftValue || rightValue;
    }

    throw new Error('非法的逻辑运算符:' + op);
  }

  visitConditionalExpression(node) {
    let testValue = node.test.accept(this);
    if (testValue) {
      return node.consequent.accept(this);
    }

    return node.alternate.accept(this);
  }

  visitAssignmentExpression(node) {
    // not implemented yet
  }

  /**
   * 通过 antlr 解析树，转换得到语法树节点 node。
   * node.value 的值已经是具体数据类型了。
   * 
   * null, boolean, string(包括字符串两侧的双引号或单引号), number
   */
  visitLiteral(node) {
    if(types.isString(node.value)){
      // 字符串类型包含所有字符串两侧的单引号或双引号
      return StringUtils.unwrapText(node.value);
    }
    return node.value;
  }

  /**
   * 百分比数字
   */
  visitPercentageLiteral(node) {
    return node.value / 100.0;
  }


  visitArrayExpression(node) {
    // not implemented yet
  }

  visitObjectExpression(node) {
    // not implemented yet
  }

  visitSequenceExpression(node) {
    // not implemented yet
  }

  visitProperty(node) {
    // not implemented yet
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

exports.FormulaEvaluationVisitor = FormulaEvaluationVisitor;