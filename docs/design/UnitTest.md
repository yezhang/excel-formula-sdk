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
```javascript
npx karma start karma.conf.js
```


karma.conf.js
```json
plugins: [
      require('karma-mocha'),
      require('karma-chrome-launcher'),
      require('karma-webpack'),
    ],
```

2. 添加 sourcemap

browsers: ['Chrome'], //ChromeHeadless
    singleRun: false, // true，执行后退出

配置完成后，可以在浏览器中查看错误信息对应的源码位置信息。

3. 添加测试用例执行结果报告（终端）
使用 mocha 风格的报告：https://www.npmjs.com/package/karma-mocha-reporter

4. 添加 coverage 报表（HTML）
代码覆盖度报告的生成包括两个步骤：测量代码注入、代码执行数据收集。

测量代码注入发生在 webpack 打包过程中，使用 webpack 插件：coverage-istanbul-loader
代码执行数据收集：karma-coverage-istanbul-reporter

**注意**：当同时使用 mocha 的单元测试执行结果报告、istanbul 的代码覆盖度报告时，
需要在 karma.conf.js 中配置报告的参数：reporters: ['coverage-istanbul', 'mocha']。
为了防止 mocha 的终端（Terminal）报告结果格式被破坏，
在 reporters 数组中，'mocha' 需要放在 'coverage-istanbul' 后面。

## require 路径配置
在 src 路径中，为了防止深层嵌套 ../../../ ，使用了 webpack alias 来处理。
为了在 NodeJS 中运行 mocha，需要在 NodeJS 中配置相对路径别名。
实现自定义 require：test/require-alias/loader.js。


## 配置单元测试的调试环境
使用 VSCode 的 launch.json 配置。

