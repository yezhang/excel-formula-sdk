
const contrib = require('workbench/monaco-editor/monaco.contribution');
const ColorsProvider = require('workbench/monaco-editor/colorsProvider').ColorsProvider;
const language = require('workbench/monaco-editor/languageFeatures');

const FormulaEngine = require('platform/formula/FormulaEngine').FormulaEngine;

exports.ColorsProvider = ColorsProvider;
exports.contrib = contrib;
exports.language = language;

exports.FormulaEngine = FormulaEngine;