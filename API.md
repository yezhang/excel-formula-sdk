# excel-formula-sdk

**注意：** 本项目接口仍处于不稳定阶段，接口会随时发生调整。

Excel 公式解析引擎，用于支持公式输入编辑器的智能提示、单元格之间的公式依赖计算、公式的求值。

本 SDK 可以与各类编辑器（或输入框）、表格组件配合使用。
- [x] 支持公式的语法解析、单元格地址解析、单元格范围解析、单元格公式之间的依赖关系管理等。
- [x] 支持嵌套公式的解析、公式的求值。
- [x] 支持自动补全、函数签名提示、鼠标浮动提示等 IntelliSense 功能所需要的核心信息，包括当前光标所在的函数上下文、当前光标的参数索引。

使用场景概述：
- 与 [monaco-editor](https://www.npmjs.com/package/monaco-editor)/[code mirror](https://www.npmjs.com/package/codemirror) 编辑器配合使用，提供智能提示的功能。
- 与 [handsontable](https://www.npmjs.com/package/handsontable) 配合使用，提供公式的联动计算。

## 安装

CommonJS 规范引入方法：
```js
const formulaSDK = require('excel-formula-sdk');
const { FormulaEngine, WorkBookContext } = formulaSDK;
```

`<script/>` 引入方法:
```html
<script src="path/to/formula-sdk.js"></script>
```

通过 `<script/>` 标签引用，会形成 formulaSDK 全局变量，用于对公式 SDK 执行调用。

使用 `formulaSDK.FormulaEngine` 访问公式引擎。
使用 `formulaSDK.WorkBookContext` 访问工作表的上下文。

## 与表格组件集成API

**场景**  
当用户输入公式按下回车时，执行如下调用：
```js
const engine = new FormulaEngine();
// 工作簿上下文（用于提供“活动的工作表”，“活动的单元格”等信息），目前仅支持“活动工作表”。
let context = new WorkBookContext('sheet1'); 
// 当前单元格是 A1，公式为“=B1”，即 A1 = B1
let A1CellRef = { column: 1, row: 1 }; 
engine.setCellFormula(context, A1CellRef, '=B1');
```

如果输入的公式发生了错误，`engine.setCellFormula` 函数会抛出异常，提示禁止用户提交公式即可。

**场景**  
当对单元格 A1 求值时，执行如下调用：
```js
const engine = new FormulaEngine();
const context = new WorkBookContext('sheet1');
const A1CellRef = { column: 1, row: 1 };

// 当对公式求值时，engine 会自动回调该对象的方法，用于获取某个单元格的值。
const cellValueProvider = {
  getCellValue: function (cell) {
    // {column, row} = cell
    // column in [1..n]
    // row in [1..n]
  },
  getCellRangeValues: function (cellRange) {

  }
};
engine.prepareToEvaluateTable(cellValueProvider);

// 求值结果存放至 ret 变量中。
let ret = engine.evaluate(context, A1CellRef);
```

**场景**  
假设表格中已经设置了如下公式: A1 = B1, B1 = C1, B2 = C2.  
当单元格 C1 的数值在表格组件中发生变更时，需要重新计算 B1, A1 处的单元格的值。
```js
const engine = new FormulaEngine();
const context = new WorkBookContext('sheet1');
const C1 = { column: 3, row: 1 };
engine.reEvaluateAll(context, C1);
```

engine.reEvaluateAll(...) 函数可能会抛出计算异常，处理方法同 engine.evaluate(...)。

**场景**  
在公式计算失败时，会抛出异常；在异常中包含界面显示需要的文本。
```js
const engine = new FormulaEngine();
const context = new WorkBookContext('sheet1');
let ret = undefined;
try{
  ret = engine.evaluate(context, A1CellRef);
}catch(e){
  ret = e.getResult();
}
```

**场景**  
自动填充单元格。当希望在表格组件中，拖动鼠标，从当前选中单元格开始向下填充单元格公式时，
使用 `engine.autofillDown(context, formulaText, rowNumber)` 函数自动生成新单元格的公式。
随着鼠标不断向下移动，循环调用该 `engine.autofillDown` 函数，并传递逐渐递增的参数 `rowNumber`。

例如，向下 1 行填充公式。
```js
let f = '= C3 + D3 + SUM(C3:D3) + MIN($C3:D$3)';
let context = new WorkBookContext('sheet1');
let downRet = engine.autofillDown(context, f, 1);
// downRet = '=C4+D4+SUM(C4:D4)+MIN($C4:D$3)';
```



## 与编辑器组件 monoca-editor 集成API

```js
require(['vs/editor/editor.main'], function () {

  formulaSDK.contrib.init(monaco);

  // 定义 monaco editor 的主题颜色
  monaco.editor.defineTheme('theme1', {
    base: 'vs',
    inherit: false,
    rules: [{
        token: 'basicnumberliteral.formula',
        foreground: '1155cc' //#1155cc
      },
      {
        token: 'unexpectedcharacter.formula',
        foreground: 'ff0000' //#ff0000
      },
      {
        token: 'fnidentifier.formula',
        foreground: '000000' //#000000
      },
      {
        token: 'error.formula',
        foreground: 'ff0000'
      }
    ]
  });      
  var editor = monaco.editor.create(document.getElementById('container'), {
    value: [
      'IF(C7 <  E7, MIN( ABS(E7 -C7),D7), 0)',
    ].join('\n'),
    language: 'lang-formula',
    theme: 'theme1'
  });

  // 初始化编辑器，提供自动补全、函数参数提示等功能。
  formulaSDK.contrib.initEditor(monaco, editor);
});

```


## 联系方式
zhangyef@yonyou.com

## LICENSE
MIT

