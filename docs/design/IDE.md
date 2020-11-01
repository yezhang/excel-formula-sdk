## 开发环境配置

### 配置编辑器 VSCode
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

FAQ：
如果使用 vscode 调试时，发生 nvm 指定的 node 无法找到的情况,