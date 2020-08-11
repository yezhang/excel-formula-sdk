const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist_dev'),
    filename: 'formula-sdk.js',
    library: 'formulaSDK',
    libraryTarget: 'umd', 
  },
  devtool: 'source-map',
  optimization: {
    runtimeChunk: true
  },
  node: { module: "empty", net: "empty", fs: "empty" }, //配置 antlr4 不在 nodejs 环境工作。
  devServer: {
    contentBase: [path.join(__dirname, '../dist'),
      path.join(__dirname, '../test'),
      path.join(__dirname, '../')],
    watchContentBase: true,
    compress: true,
    port: 9000
  }
};