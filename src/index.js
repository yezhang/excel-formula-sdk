const FormulaTokensProvider = require('./workbench/monaco-editor/formulaTokensProvider').FormulaTokensProvider;
const ColorsProvider = require('./workbench/monaco-editor/colorsProvider').ColorsProvider;
const CellAddressTokensDecorator = require('./workbench/monaco-editor/cellAddressTokensDecorator').CellAddressTokensDecorator;
const FormulaSuggestionsProvider = require('./workbench/monaco-editor/formulaSuggestionsProvider').FormulaSuggestionsProvider;
const HoverInfoProvider = require('./workbench/monaco-editor/hoverInfoProvider').HoverInfoProvider;
const SignatureHelpProvider = require('./workbench/monaco-editor/signatureHelpProvider').SignatureHelpProvider;

exports.FormulaTokensProvider = FormulaTokensProvider;
exports.ColorsProvider = ColorsProvider;
exports.CellAddressTokensDecorator = CellAddressTokensDecorator;
exports.FormulaSuggestionsProvider = FormulaSuggestionsProvider;
exports.HoverInfoProvider = HoverInfoProvider;
exports.SignatureHelpProvider  = SignatureHelpProvider;