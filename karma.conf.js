process.env.CHROME_BIN = require('puppeteer').executablePath();

const webpackDevConfig = require('./build/webpack.config.dev');

webpackDevConfig.stats = 'errors-only'; // 关闭不必要的日志

module.exports = function (config) {
  config.set({
    basePath: '.',
    frameworks: ['mocha'],
    client: {
      mocha: {
        // change Karma's debug.html to the mocha web reporter
        reporter: 'html'
      }
    },
    files: [
      'test/**/*.test.js',
      'src/**/*.test.js',
    ],
    // 排除的文件列表
    exclude: [
      'node_modules'
    ],
    preprocessors: {
      // add webpack as preprocessor
      'test/**/*.test.js': ['webpack', 'sourcemap'],
      'src/**/*.test.js': [ 'webpack', 'sourcemap'],
    },

    webpack: webpackDevConfig,
    plugins: [
      require('karma-mocha'),
      require('karma-chrome-launcher'),
      require('karma-webpack'),
      require('karma-coverage'),
      require('karma-sourcemap-loader'),
      require('karma-mocha-reporter'),
      require('karma-coverage-istanbul-reporter')
    ],
    /**
    * 服务端口号
    */
    port: 9876,

    /**
     * 启用或禁用输出报告或者日志中的颜色
     */
    colors: true,

    /**
     * 日志等级
     * 可能的值：
     * config.LOG_DISABLE //不输出信息
     * config.LOG_ERROR    //只输出错误信息
     * config.LOG_WARN //只输出警告信息
     * config.LOG_INFO //输出全部信息
     * config.LOG_DEBUG //输出调试信息
     */
    logLevel: config.LOG_DISABLE,
    browsers: ['ChromeHeadless'], // 或者 ChromeHeadless, Chrome

    // 开启或禁用持续集成模式
    singleRun: true, // true，执行后退出
    // coverage reporter generates the coverage
    reporters: ['coverage-istanbul', 'mocha'], //, 'coverage-istanbul'
    coverageIstanbulReporter: {
      dir: "coverage/%browser%",
      reports: ["html"]
    }
  });
};