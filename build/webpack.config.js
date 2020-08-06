const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'formula-engine.js',
    library: 'formulaEngine',
    libraryTarget: 'umd',
  },
  optimization: {
    runtimeChunk: true
  },
  node: { module: "empty", net: "empty", fs: "empty" } //配置 antlr4 不在 nodejs 环境工作。
};