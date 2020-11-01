# 杂项

## 技术选型关注点
代码中使用了 Map 类型，注意对于浏览器的兼容性。

Babel 工具中使用了 core-js。

## 依赖包
- [core-js](https://github.com/zloirock/core-js)，用于支持 Map 数据结构。

## 打包
形成开发包、生产包。  
参考 build/ 目录。

## 打包部署
执行 `npx gulp` 命令，不要执行全局 gulp 命令。

