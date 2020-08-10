const formulajs = require('@formulajs/formulajs');

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

    FnNames.forEach(function(fnName){
      let oneSuggestion = {
        label: fnName,
        kind: monaco.languages.CompletionItemKind.Function,
        documentation: `函数 ${fnName}`,
        insertText: fnName,
        range: range
      };
      suggestions.push(oneSuggestion);
    });
    

    return { suggestions };
  }
}

exports.FormulaSuggestionsProvider = FormulaSuggestionsProvider;