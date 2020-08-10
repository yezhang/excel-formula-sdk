const formulaTokensProvider = require('./workbench/monaco-editor/formulaTokensProvider').FormulaTokensProvider;
const colorsProvider = require('./workbench/monaco-editor/colorsProvider').ColorsProvider;
const CellAddressTokensDecorator = require('./workbench/monaco-editor/cellAddressTokensDecorator').CellAddressTokensDecorator;

exports.FormulaTokensProvider = formulaTokensProvider;
exports.ColorsProvider = colorsProvider;
exports.CellAddressTokensDecorator = CellAddressTokensDecorator;