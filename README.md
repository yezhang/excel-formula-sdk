# excel-formula-sdk

<p align="center">
<img alt="JavaScript" src="https://img.shields.io/badge/language-JavaScript-brightgreen.svg">
<img alt="license" src="https://img.shields.io/badge/license-MIT-blue.svg">
</p>

**注意：** 本项目接口仍处于不稳定阶段，接口会随时发生调整。

Excel 公式解析引擎，用于支持公式输入编辑器的智能提示、单元格之间的公式依赖计算、公式的求值。

本 SDK 可以与各类编辑器（或输入框）、表格组件配合使用。
- [x] 支持公式的语法解析、单元格地址解析、单元格范围解析、单元格公式之间的依赖关系管理等。
- [x] 支持嵌套公式的解析、公式的求值。
- [x] 支持自动补全、函数签名提示、鼠标浮动提示等 IntelliSense 功能所需要的核心信息，包括当前光标所在的函数上下文、当前光标的参数索引。

词法、语法解析，使用了 [Antlr4](https://www.antlr.org)。  
数学函数的实际执行，使用了 [formulajs](https://formulajs.info)。

## 安装

在项目目录下，执行 `npm i excel-formula-sdk -S` 进行安装。  
参考 [https://www.npmjs.com/package/excel-formula-sdk](https://www.npmjs.com/package/excel-formula-sdk)

## API
API 文档请参考[这里](./API.md)

## 贡献代码
* [提 BUG 或提需求](https://github.com/yezhang/excel-formula-sdk/issues)