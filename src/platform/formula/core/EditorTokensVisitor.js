/**
 * 用于生成公式编辑器需要的 token。
 * 生成的 token 用于编辑器高亮。
 * 需要高亮的 token 有：字面量、单元格地址、函数名称。
 */
const ReportFormulaParser = require('../runtime/ReportFormulaParser').ReportFormulaParser;
const ReportFormulaParserVisitor = require('../runtime/ReportFormulaParserVisitor').ReportFormulaParserVisitor;

function EditorTokensState() {
  this._tokenList = [];
}

EditorTokensState.prototype.push = function (token) {
  this._tokenList.push(token);
}

EditorTokensState.prototype.clear = function () {
  this._tokenList = [];
}

EditorTokensState.prototype.getTokenList = function () {
  return this._tokenList;
}

class EditorTokensVisitor extends ReportFormulaParserVisitor {
  constructor() {
    super();
    this.tokenSink = new EditorTokensState();

    // token 缓存，用于支持根据坐标查询 token。
    // {lineNumber: tokenList}
    this.lineTokensIndex = {};
  }

  getTokenList() {
    return this.tokenSink.getTokenList();
  }

  /**
   * 根据当前位置获取最近的 token。
   * @param {int} line - line=1..n
   * @param {int} column - column=0..n-1
   */
  findTerminalNodeAtCaret(line, column) {
    if (column < 0) {
      return undefined;
    }

    if (this.lineTokensIndex.hasOwnProperty(line)) {
      let tokenNodeList = this.lineTokensIndex[line];
      if (tokenNodeList.length < 1) {
        return undefined;
      }

      let currentNode = undefined;
      for (let i = 0; i < tokenNodeList.length; i++) {
        let n = tokenNodeList[i];
        let token = n.getSymbol();
        if (token) {
          if (token.column <= column && (token.column + token.text.length - 1) >= column) {
            currentNode = n;
            break;
          }
        }
      }
      if (!currentNode) {
        // 如果没有找到，找到左侧 token 集合中，最右侧的（距离 column 最近）
        for (let i = tokenNodeList.length - 1; i >= 0; i--) {
          const n = tokenNodeList[i];
          const token = n.getSymbol();
          if (token) {
            if(token.stop <= column) {
              return n;
            }
          }
        }
      }

      return currentNode;
    }

    return undefined;
  }
  tryCollect(node) {
    let token = node.getSymbol();
    if (token && token.type !== ReportFormulaParser.EOF) {
      let nodes = [];
      if (this.lineTokensIndex.hasOwnProperty(token.line)) {
        nodes = this.lineTokensIndex[token.line];
      } else {
        this.lineTokensIndex[token.line] = nodes;
      }

      nodes.push(node);
      this.tokenSink.push(token);
    }
  }
  visitTerminal(node) {
    this.tryCollect(node);
  }

  visitErrorNode(node) {
    this.tryCollect(node);
  }


}

exports.EditorTokensVisitor = EditorTokensVisitor;