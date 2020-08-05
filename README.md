## 错误处理方式

当有公式的解析错误时，仍然需要使用 visitor 访问解析树。以便支持变量高亮等内容。

当有解析错误时，对公式求值会出错。

本项目打包后，形成一个独立的组件。在使用时，需要与表格组件、编辑器组件配合。

## 单元测试
测试文件与源文件放置在同一个目录下。

## 技术选型关注点
代码中使用了 Map 类型，注意对于浏览器的兼容性。

Babel 工具中使用了 core-js。

## 依赖包
- [core-js](https://github.com/zloirock/core-js)，用于支持 Map 数据结构。

