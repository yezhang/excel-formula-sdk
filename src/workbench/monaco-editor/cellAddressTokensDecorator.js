const debounce = require('../../base/debounce');

const FormulaLanguageService = require('../../platform/formula/FormulaLanguageService').FormulaLanguageService;
const langService = FormulaLanguageService.INSTANCE;

const ColorsProvider = require('./colorsProvider').ColorsProvider;
const colorsProviderInst = ColorsProvider.INSTANCE;

/**
 * 用于高亮单元格地址
 */
class CellAddressTokensDecorator {
  constructor() {
    this.decorations = [];
  }

  decorate(editor, monaco) {
    let _this = this;
    let allLinesContent = editor.getModel().getLinesContent().join('\n');
    const tokens = langService.provideTokensFromCache(allLinesContent);

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
          range: new monaco.Range(token.lineNumber, token.startColumn + 1, token.lineNumber, token.stopColumn + 1 + 1),
          options: {
            inlineClassName: 'ftc' + colorIndex
          }
        });

        let color = colorsProviderInst.pickOrCreateColor(colorIndex);
        // TODO: 保存使用的颜色
      }
    });

    // TODO: 触发单元格高亮事件
    console.log('trigger cell address colors');
    _this.decorations = editor.deltaDecorations(_this.decorations, decorationRangeList);
  }
  
  register(editor, monaco) {
    let _this = this;
    this.decorate(editor, monaco);

    let decorateWithDebounce = debounce(_this.decorate.bind(this), 500);
    editor.onDidChangeModelContent(function (e) {
      decorateWithDebounce(editor, monaco);
    });
  }
}

CellAddressTokensDecorator.CellRangeLiteral = 'CellRangeLiteral';
CellAddressTokensDecorator.CellAddressLiteral = 'CellAddressLiteral';


CellAddressTokensDecorator.registerDecorator = function (editor, monaco) {
  new CellAddressTokensDecorator().register(editor, monaco);
}

exports.CellAddressTokensDecorator = CellAddressTokensDecorator;