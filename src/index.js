const FormulaTokensProvider = require('./workbench/monaco-editor/formulaTokensProvider').FormulaTokensProvider;
const ColorsProvider = require('./workbench/monaco-editor/colorsProvider').ColorsProvider;
const CellAddressTokensDecorator = require('./workbench/monaco-editor/cellAddressTokensDecorator').CellAddressTokensDecorator;
const SignatureHelpProvider = require('./workbench/monaco-editor/signatureHelpProvider').SignatureHelpProvider;

const language = require('./workbench/monaco-editor/languageFeatures');

exports.FormulaTokensProvider = FormulaTokensProvider;
exports.ColorsProvider = ColorsProvider;
exports.CellAddressTokensDecorator = CellAddressTokensDecorator;
exports.SignatureHelpProvider  = SignatureHelpProvider;

exports.language = language;