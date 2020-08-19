/**
 * 语言特征：
 * 语言诊断（提示错误）、自动补全（代码补全、函数参数）、浮动提示（快速消息）、单元格高亮、文档格式化。
 */
const formulajs = require('@formulajs/formulajs');

const debounce = require('../../base/debounce');
const FormulaLanguageService = require('../../platform/formula/FormulaLanguageService');
const LangInputModel = FormulaLanguageService.LangInputModel;
const langService = FormulaLanguageService.FormulaLanguageService.INSTANCE;
const ColorsProvider = require('./colorsProvider').ColorsProvider;
const colorsProviderInst = ColorsProvider.INSTANCE;


function _convertEditModel(model) {
  return new LangInputModel(model.getVersionId(), model.getValue());
}

// --- 语言诊断 ------

const DiagnosticCategory = {
  Warning: 0,
  Error: 1,
  Suggestion: 2,
  Message: 3
}

class DiagnosticsAdapter {
  constructor(_selector) {
    this._disposables = [];
    this._listener = Object.create(null);
    this._selector = _selector;

    let _this = this;
    const onModelAdded = function (model) {
      if (model.getModeId() !== _selector) {
        return;
      }

      let handle = undefined;
      const changeSubscription = model.onDidChangeContent(function () {
        clearTimeout(handle);
        handle = setTimeout(function () { _this._doValidate(model); }, 500);
      })

      _this._listener[model.uri.toString()] = {
        dispose() {
          changeSubscription.dispose();
          clearTimeout(handle);
        }
      }

      _this._doValidate(model);
    };
    const onModelRemoved = function (model) {
      monaco.editor.setModelMarkers(model, _this._selector, []);
      const key = model.uri.toString();
      if (_this._listener[key]) {
        _this._listener[key].dispose();
        delete _this._listener[key];;
      }
    };

    this._disposables.push(monaco.editor.onDidCreateModel(onModelAdded));
    this._disposables.push(monaco.editor.onWillDisposeModel(onModelRemoved));
    this._disposables.push(monaco.editor.onDidChangeModelLanguage(function (event) {
      onModelRemoved(event.model);
      onModelAdded(event.model);
    }));

    this._disposables.push({
      dispose() {
        monaco.editor.getModels().forEach(function (model) {
          onModelRemoved(model);
        })
      }
    });

    monaco.editor.getModels().forEach(onModelAdded);
  }

  dispose() {
    this._disposables.forEach(function (d) { d && d.dispose(); });
    this._disposables = [];
  }

  _doValidate(model) {
    const diagnostics = langService.getSyntacticDiagnostics(_convertEditModel(model));

		if (!diagnostics || model.isDisposed()) {
			// model was disposed in the meantime
			return;
		}

		const markers = diagnostics
			// .reduce((p, c) => {
      //   c.concat(p), []
      // })
			.map(d => this._convertDiagnostics(model, d));

		monaco.editor.setModelMarkers(model, this._selector, markers);
  }

  /**
   * @return {monaco.editor.IMarkerData}
   */
  _convertDiagnostics(model, diag) {
		const diagStart = diag.start || 0;
		const diagLength = diag.length || 1;
		const { lineNumber: startLineNumber, column: startColumn } = model.getPositionAt(diagStart);
		const { lineNumber: endLineNumber, column: endColumn } = model.getPositionAt(diagStart + diagLength);

		return {
			severity: this._tsDiagnosticCategoryToMarkerSeverity(diag.category),
			startLineNumber,
			startColumn,
			endLineNumber,
			endColumn,
			message: diag.messageText
		};
  }
  
  _tsDiagnosticCategoryToMarkerSeverity(category) {
		switch (category) {
			case DiagnosticCategory.Error: return monaco.MarkerSeverity.Error
			case DiagnosticCategory.Message: return monaco.MarkerSeverity.Info
			case DiagnosticCategory.Warning: return monaco.MarkerSeverity.Warning
			case DiagnosticCategory.Suggestion: return monaco.MarkerSeverity.Hint
		}
		return monaco.MarkerSeverity.Info;
	}
}

exports.DiagnosticsAdapter = DiagnosticsAdapter;

// --- 自动补全 ------

const FnNames = Object.keys(formulajs);

class FormulaSuggestionsProvider {
  provideCompletionItems(model, position) {
    const suggestions = [];

    var word = model.getWordUntilPosition(position);
    var range = {
      startLineNumber: position.lineNumber,
      endLineNumber: position.lineNumber,
      startColumn: word.startColumn,
      endColumn: word.endColumn
    };

    FnNames.forEach(function (fnName) {
      let oneSuggestion = {
        label: fnName,
        kind: monaco.languages.CompletionItemKind.Function,
        documentation: `函数 ${fnName}`,
        insertText: fnName, // 控制鼠标位置，https://github.com/Microsoft/monaco-editor/issues/413
        range: range
      };
      suggestions.push(oneSuggestion);
    });

    return { suggestions };
  }
}

exports.FormulaSuggestionsProvider = FormulaSuggestionsProvider;

// --- 函数签名 ------
/**
 * 函数参数提醒。
 */
class SignatureHelpProvider {
  constructor() {
    this.signatureHelpTriggerCharacters = ['(', ','];
    this.signatureHelpRetrieveCharacters = [')'];
  }

  provideSignatureHelp(model, position, cancellationToken, context) {
    // const offset = model.getOffsetAt(position);

    let info = langService.getSignatureHelpItems(_convertEditModel(model), position);

    if (!info || model.isDisposed()) {
			return;
		}

    const ret = {
			activeSignature: info.selectedItemIndex,
			activeParameter: info.argumentIndex,
			signatures: []
    };

    info.items.forEach(item => {

			const signature = {
				label: '',
				parameters: []
			};

			signature.documentation = item.documentation;
			signature.label += item.prefixDisplayParts;
			item.parameters.forEach((p, i, a) => {
				const label = p.displayParts;
				const parameter = {
					label: label,
					documentation: p.documentation
				};
				signature.label += label;
				signature.parameters.push(parameter);
				if (i < a.length - 1) {
					signature.label += item.separatorDisplayParts;
				}
			});
			signature.label += item.suffixDisplayParts;
			ret.signatures.push(signature);
		});

		return {
			value: ret,
			dispose() { }
		};
  }
}

exports.SignatureHelpProvider = SignatureHelpProvider;


// --- 浮动提示 ------

class HoverInfoProvider {

  provideHover(model, position) {
    let tokens = model.getLineTokens(position.lineNumber);
    let word = model.getWordAtPosition(position);
    console.log(word);
    // 根据 provideHover 接口定义，返回结果如果没有 range，则使用当前 hover 的位置。
    return {
      contents: [
        // { value: '**函数**' },
        { value: word ? word.word : '' }
      ]
    };
  }
}

exports.QuickInfoAdapter = HoverInfoProvider;

// --- 单元格地址高亮 ------

class CellAddressTokensDecorator {
  constructor() {
    this.decorations = [];
  }

  decorate(editor, monaco) {
    let _this = this;
    let model = editor.getModel();
    // 为了可以在语法解析过程中生成正确的行号，需要保留换行符 '\n'。此处不能使用 model.getValue()。
    let allLinesContent = model.getLinesContent().join('\n');
    const tokens = langService.provideTokensFromCache(LangInputModel.build(model.getVersionId(), allLinesContent));

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

    let decorateWithDebounce = debounce(_this.decorate.bind(this), 300);
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

// --- 文档格式化 ------


// --- 词法高亮 ------

/**
 * 根据 https://microsoft.github.io/monaco-editor/api/interfaces/monaco.languages.istate.html 描述，
 * state 可以用于多行记录。
 */
class FormulaTokensState {
  clone() {
    return new FormulaTokensState();
  }

  equals(other) {
    return true;
  }
}

class FormulaToken {
  constructor(ruleName, startIndex) {
    this.scopes = ruleName.toLowerCase() + ".formula";
    this.startIndex = startIndex;
  }
}

class FormulaLineTokens {
  constructor(tokens, state) {
    this.endState = new FormulaTokensState();
    this.tokens = tokens;
  }
}


class FormulaTokensProvider {
  constructor() {
    this.lineTokens = null;
  }
  getInitialState() {
    return new FormulaTokensState();
  }

  tokenize(line, state) {
    this.lineTokens = this.tokensForLine(line);
    return this.lineTokens;
  }

  tokensForLine(input) {
    let tokens = langService.provideTokensFromCache(LangInputModel.build(null, input));
    let lineTokenList = [];
    tokens.forEach(function(token){
      lineTokenList.push(new FormulaToken(token.tokenType + '.formula', token.startColumn));
    });
  
    return new FormulaLineTokens(lineTokenList);
  }
}

exports.FormulaTokensProvider = FormulaTokensProvider;