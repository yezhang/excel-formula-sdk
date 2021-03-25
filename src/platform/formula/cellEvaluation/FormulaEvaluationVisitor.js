const formulaFns = require('@formulajs/formulajs');

const types = require('base/common/types');
const { SimpleCellAddress, SimpleCellRange } = require('platform/formula/cellAddressParts/common/CellAddressParts');
const StringUtils = require('../../../base/StringUtils').StringUtils;

const EvaluationErrors = require('platform/formula/cellEvaluation/EvaluationErrors');

/**
 * 针对单个公式求值。
 * 
 * 与 {SingleFormulaAST} 对象 配合使用。
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
    let customFns = that.cellValueProxy.customFns;
    let fnName = node.callee.toString();
    let args = node.arguments;
    let argList = args.map(function (arg) {
      return arg.accept(that);
    });
    fnName = fnName.toUpperCase();

    if (customFns && fnName in customFns) {
      return customFns[fnName].apply(null, argList);
    }
    
    if (fnName in formulaFns) {
      return formulaFns[fnName].apply(null, argList);
    }

    throw new EvaluationErrors.NameError('非法的函数，无法识别');
  }

  /**
   * 对普通括号表达式求值
   */
  visitParenthesizedExpression(node) {
    let expression = node.expression;
    return expression.accept(this);
  }

  visitPlainTextIdentifier(node) {
    // return node.name;
    // TODO: 支持自定义变量取数

    throw new EvaluationErrors.NameError(`无法识别的符号 ${node.name}`);
  }

  /**
   * @param {RefItemIdentifier} node
   */
  visitRefItemIdentifier(node) {
    return node.name;
  }

  /**
   * 计算的语法：a[b], a.b
   * 
   * @param {MemberExpression} node
   */
  visitMemberExpression(node) {
    let objectName = node.object.name;
    let property = node.property.name;
    if(!this.cellValueProxy.fetchDataObject){
      throw new EvaluationError('请提供 fetchDataObject 函数，用于获取数据对象的值')
    }
    try {
      return this.cellValueProxy.fetchDataObject(objectName, property);
    }catch(e){
      throw new EvaluationErrors.RefError(`无法获取数据对象的值:${node.toString()}`);
    }
  }

  /**
   * 将语法树节点转换为 SimpleCellAddress 
   * @param {CellAddressIdentifier} node
   */
  _buildSimpleCellAddress(node) {
    // AST 与用户输入的文本保持一致，其中的节点可能有 sheetName，也可能没有 sheetName
    return SimpleCellAddress.buildFromASTNode(this.ownerSheetName, node);
  }

  _buildSimpleCellRange(node) {
    return SimpleCellRange.buildFromASTNode(this.ownerSheetName, node);
  }

  /**
   * 单元格地址：CellAddressIdentifier
   */
  visitCellAddressIdentifier(node) {
    if (node.isLost()) {
      throw EvaluationErrors.RefError(`单元格无法找到: ${node.toString()}`)
    }
    // 转换为 SimpleCellAddress
    let addr = this._buildSimpleCellAddress(node);
    // 根据 SimpleCellAddress 从单元格取值
    let cellValue = undefined;
    try {
      cellValue = this.cellValueProxy.getCellValue(addr);
      if (typeof cellValue === 'undefined') {
        throw new EvaluationErrors.ValueError(`无法获取单元格的值: ${node.toString()}`);
      }
    } catch (e) {
      throw new EvaluationErrors.ValueError(`无法获取单元格的值: ${node.toString()}`);
    }
    return cellValue;
  }

  __visitCellRangeValue(node, valueFetchFn) {
    // 转换为 SimpleCellRange
    let addr = this._buildSimpleCellRange(node);
    // 根据 SimpleCellRange 从单元格范围取值
    let cellValue = undefined;
    try {
      cellValue = valueFetchFn(addr);
      if (typeof cellValue === 'undefined') {
        throw new EvaluationErrors.ValueError(`无法获取单元格范围的值: ${node.toString()}`);
      }
    } catch (e) {
      throw new EvaluationErrors.ValueError(`无法获取单元格范围的值: ${node.toString()}`);
    }
    return cellValue;
  }
  /**
   * 单元格范围：CellRangeIdentifier
   */
  visitCellRangeIdentifier(node) {
    let _this = this;
    return this.__visitCellRangeValue(node, function (simpleCellRangeAddr) {
      return _this.cellValueProxy.getCellRangeValues(simpleCellRangeAddr);
    });
  }

  /**
   * 浮动单元格范围：CellFloatRangeIdentifier
   */
  visitCellFloatRangeIdentifier(node) {
    let _this = this;
    return this.__visitCellRangeValue(node, function (simpleCellRangeAddr) {
      return _this.cellValueProxy.getCellFloatRangeValues(simpleCellRangeAddr);
    });
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
        if (rightValue === 0) {
          throw new EvaluationErrors.DivideByZeroError(`${leftValue} / 0`);
        }
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
    if (types.isString(node.value)) {
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