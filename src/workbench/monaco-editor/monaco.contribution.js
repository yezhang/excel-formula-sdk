/**
 * 编辑器插件的入口文件
 */
const languageFeatures = require('./languageFeatures');


function setupEditor(monaco, editor) {
  languageFeatures.CellAddressTokensDecorator.registerDecorator(editor, monaco);
}
function setupLanguage(monaco, langId) {
 
      
  // 配置基本的编辑功能
  monaco.languages.setLanguageConfiguration(langId, {
    brackets: [
      ['{', '}'],
      ['[', ']'],
      ['(', ')']
    ],
    autoClosingPairs: [{
        open: '{',
        close: '}'
      },
      {
        open: '[',
        close: ']'
      },
      {
        open: '(',
        close: ')'
      },
      {
        open: '"',
        close: '"',
        notIn: ['string']
      },
      {
        open: '\'',
        close: '\'',
        notIn: ['string', 'comment']
      },
      {
        open: "/**",
        close: " */",
        notIn: ["string"]
      }
    ]
  });

  monaco.languages.setTokensProvider(langId, new languageFeatures.FormulaTokensProvider());

  monaco.languages.registerCompletionItemProvider(langId, new languageFeatures.FormulaSuggestionsProvider());
	// monaco.languages.registerSignatureHelpProvider(langId, new languageFeatures.SignatureHelpAdapter(worker));
	monaco.languages.registerSignatureHelpProvider(langId, new languageFeatures.SignatureHelpProvider());
  // monaco.languages.registerHoverProvider(langId, new languageFeatures.QuickInfoAdapter(worker));
  monaco.languages.registerHoverProvider(langId, new languageFeatures.HoverInfoProvider());

  new languageFeatures.DiagnosticsAdapter(langId);
}

function init(monaco) {
  monaco.languages.onLanguage('lang-formula', () => {
    return setupLanguage(monaco, 'lang-formula');
  });

  // 需要在 setupLanguage 函数外。
  monaco.languages.register({
    id: 'lang-formula'
  });
}

function initEditor(monaco, editor) {
  setupEditor(monaco, editor);
}

exports.init = init;

exports.initEditor = initEditor;
