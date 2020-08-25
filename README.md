## 错误处理方式

当有公式的解析错误时，仍然需要使用 visitor 访问解析树。以便支持变量高亮等内容。

当有解析错误时，对公式求值会出错。

本项目打包后，形成一个独立的组件。在使用时，需要与表格组件、编辑器组件配合。

## 单元测试
测试文件与源文件放置在同一个目录下。
在 webpack 中配置 alias，支持路径别名，避免深层相对路径。
配置 webpack 的 alias 后，需要配置 karma，来支持单元测试。
在执行 karma 时，会调用 webpack 进行代码编译。

单元测试框架使用 mocha。
在浏览器环境，测试执行器使用 [karma](https://github.com/karma-runner/karma)。

karma 配置方式：https://www.meziantou.net/test-javascript-code-using-karma-mocha-chai-and-headless-browsers.htm

1. 执行基本的测试
package.json
---
npx karma start karma.conf.js
---


karma.conf.js
---
plugins: [
      require('karma-mocha'),
      require('karma-chrome-launcher'),
      require('karma-webpack'),
    ],
---

2. 添加 sourcemap

browsers: ['Chrome'], //ChromeHeadless
    singleRun: false, // true，执行后退出

配置完成后，可以在浏览器中查看错误信息对应的源码位置信息。

3. 添加测试用例执行结果报告
使用 mocha 风格的报告：https://www.npmjs.com/package/karma-mocha-reporter


4. 添加 coverage
代码覆盖度报告的生成包括两个步骤：测量代码注入、代码执行数据收集。

测量代码注入发生在 webpack 打包过程中，使用 webpack 插件：coverage-istanbul-loader
代码执行数据收集：karma-coverage-istanbul-reporter


## 技术选型关注点
代码中使用了 Map 类型，注意对于浏览器的兼容性。

Babel 工具中使用了 core-js。

## 依赖包
- [core-js](https://github.com/zloirock/core-js)，用于支持 Map 数据结构。

