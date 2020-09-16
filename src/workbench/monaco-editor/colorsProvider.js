/**
 * 生成不同的颜色
 */
const chroma = require('chroma-js');
const colorTest = require('base/color/colorTest').ColorTest;
const ColorTable = require('platform/theme/colorRegistry').ColorTable;

class ColorsProvider {
  constructor() {
    this.cellAddress2color = {};

    // CellAddress Style
    var styleDomNode = document.createElement('style');
    styleDomNode.type = 'text/css';
    styleDomNode.media = 'screen';
    styleDomNode.className = 'formula-text-colors';
    // styleSheet.addRule('.', 'color: ' + formulaSDK.ColorsProvider.generate().toString());

    document.head.appendChild(styleDomNode);

    this._styleSheet = styleDomNode.sheet;
  }
}

ColorsProvider.prototype.appendToCSS = function (index, hexColor) {
  this._styleSheet.insertRule('.ftc' + index + '{ color: ' + hexColor + ' !important; }', this._styleSheet.cssRules.length);
}

ColorsProvider.prototype.deleteCSS = function (index) {
  this._styleSheet.deleteRule(index);
}

// 已经使用该颜色，返回 true
ColorsProvider.prototype.hasAppliedColor = function (index) {
  return this.cellAddress2color.hasOwnProperty(index);
}

ColorsProvider.prototype.getColor = function (index) {
  return this.cellAddress2color[index];
}

ColorsProvider.prototype.setColor = function (index, color) {
  this.cellAddress2color[index] = color;

  // 设置 CSS 样式
  this.appendToCSS(index, color.hex());

  return color;
}

ColorsProvider.prototype.generate = function () {
  let color = chroma.random();
  let channels = color.rgb();
  let contrast = colorTest(1, 1, 1, channels[0], channels[1], channels[2]);
  contrast = Math.abs(contrast);

  if (contrast > 110) {
    color = color.darken();
  }

  if (contrast < 50) {
    color = color.darken();
  }

  return color;
}

ColorsProvider.prototype.pickOrCreateColor = function (index) {
  if (!this.hasAppliedColor(index)) {
    this.setColor(index, this.generate());
  }
  return this.getColor(index);
}

ColorsProvider.INSTANCE = new ColorsProvider();

exports.ColorsProvider = ColorsProvider;