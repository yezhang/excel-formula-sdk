# excel-formula-sdk

**注意：** 本项目接口仍处于不稳定阶段，接口会随时发生调整。

Excel 公式解析引擎，用于支持公式输入编辑器的智能提示、单元格之间的公式依赖计算、公式的求值。

## API
API 文档请参考[这里](./API.md)

## 贡献代码

## 错误处理方式

当有公式的解析错误时，仍然需要使用 visitor 访问解析树。以便支持变量高亮等内容。

当有解析错误时，对公式求值会出错。

本项目打包后，形成一个独立的组件。在使用时，需要与表格组件、编辑器组件配合。

公式解析出错时，使用监听器处理错误，不使用异常。
公式求值出错时，抛出异常；异常紧用于求值引擎内部使用，用于方便处理不同类型的错误；外部显示计算错误的结果时，使用文本显示。

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

## 配置编辑器
Go To Defination (Ctrl + Click)，在配置相对目录后，无法识别。但是 vscode 的源码(monoca-editor-core)，则可以识别。

在 src 文件夹下，新建 jsconfig.json 配置文件。
配置 jsconfig.json 中的 paths 参数。
配置内容如下：
```json
{
  "compilerOptions": {
    "module": "amd",
    "target": "es2017",
    "moduleResolution": "node",
    "baseUrl": ".",
    "paths": {
      "base/*": [
        "./base/*",
      ],
      "platform/*": [
        "./platform/*",
      ],
      "workbench/*": [
        "./workbench/*",
      ]
    }
  },
  "include": [
    "./base",
    "./platform",
    "./workbench"
  ]
}
```
具体配置方法，参考 [vscode jsconfg.json](https://code.visualstudio.com/docs/languages/jsconfig)。

配置完成后，重新打开文件夹，使得相对路径生效。




## 技术选型关注点
代码中使用了 Map 类型，注意对于浏览器的兼容性。

Babel 工具中使用了 core-js。

## 依赖包
- [core-js](https://github.com/zloirock/core-js)，用于支持 Map 数据结构。

## 打包
形成开发包、生产包。  
参考 build/ 目录。

