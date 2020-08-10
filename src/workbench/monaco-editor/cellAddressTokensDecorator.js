const FormulaLanguageService = require('../../platform/formula/FormulaLanguageService').FormulaLanguageService;
const langService = FormulaLanguageService.INSTANCE;

const ColorsProvider = require('./colorsProvider').ColorsProvider;
const colorsProviderInst = ColorsProvider.INSTANCE;

/**
 * 用于高亮单元格地址
 */
class CellAddressTokensDecorator {
  constructor() {
    this.decorations = {
      1: []
    };
  }

  register(editor, namespace) {
    let _this = this;
    editor.onDidChangeModelContent(function (e) {

      // 假定用户不断进行单行输入，处理第一个改变对应的行
      let lineNumber = e.changes[0].range.startLineNumber;

      const input = editor.getModel().getLineContent(lineNumber);

      const tokens = langService.provideTokensFromCache(input);

      const cellAddressIndex = {
        cursor: 1
      };

      const decorationRangeList = [];

      tokens.forEach(function (token) {
        if (token.tokenType === CellAddressTokensDecorator.CellAddressLiteral
          || token.tokenType === CellAddressTokensDecorator.CellRangeLiteral) {
          if (!cellAddressIndex[token.text]) {
            cellAddressIndex[token.text] = cellAddressIndex.cursor++;
          }
          let colorIndex = cellAddressIndex[token.text];

          decorationRangeList.push({
            range: new monaco.Range(lineNumber, token.startColumn + 1, lineNumber, token.stopColumn + 1 + 1),
            options: {
              inlineClassName: 'ftc' + colorIndex
            }
          });

          colorsProviderInst.pickOrCreateColor(colorIndex);
        }
      });

      let lineDecorations = _this.decorations[lineNumber];
      if (!lineDecorations) {
        lineDecorations = [];
      }
      _this.decorations[lineNumber] = editor.deltaDecorations(lineDecorations, decorationRangeList);
    });
  }
}

CellAddressTokensDecorator.CellRangeLiteral = 'CellRangeLiteral';
CellAddressTokensDecorator.CellAddressLiteral = 'CellAddressLiteral';


CellAddressTokensDecorator.registerDecorator = function (editor, monaco) {
  new CellAddressTokensDecorator().register(editor, monaco);
}

exports.CellAddressTokensDecorator = CellAddressTokensDecorator;