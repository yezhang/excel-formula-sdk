/**
 * 语言特征：
 * 语言诊断、自动补全（代码补全、函数参数）、浮动提示（快速消息）、单元格高亮、文档格式化。
 */
const formulajs = require('@formulajs/formulajs');
const FormulaLanguageService = require('../../platform/formula/FormulaLanguageService').FormulaLanguageService;
const langService = FormulaLanguageService.INSTANCE;

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
    const diagnostics = langService.getSyntacticDiagnostics(model);

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

exports.HoverInfoProvider = HoverInfoProvider;

// --- 单元格高亮 ------


// --- 文档格式化 ------