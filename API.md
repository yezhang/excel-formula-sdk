# excel-formula-sdk

**注意：** 
本项目长期维护，如果您有疑问或功能需求，欢迎在 [issue](https://github.com/yezhang/excel-formula-sdk/issues) 提问。

### 基本功能
Excel 公式解析引擎，用于支持公式输入编辑器的智能提示、单元格之间的公式依赖计算、公式的求值。

### 集成用法
本 SDK 还可以与各类编辑器（或输入框）、表格组件配合使用。
- [x] 支持公式的语法解析、单元格地址解析、单元格范围解析、单元格公式之间的依赖关系管理等。
- [x] 支持嵌套公式的解析、公式的求值。
- [x] 支持自动补全、函数签名提示、鼠标浮动提示等 IntelliSense 功能所需要的核心信息，包括当前光标所在的函数上下文、当前光标的参数索引。

使用场景概述：
- 独立使用。
- 与个人/公司项目中的表格组件、输入框组件配合使用。
- 与 [monaco-editor](https://www.npmjs.com/package/monaco-editor)/[code mirror](https://www.npmjs.com/package/codemirror) 编辑器配合使用，提供智能提示的功能。
- 与 [handsontable](https://www.npmjs.com/package/handsontable) 配合使用，提供公式的联动计算。


### 函数的扩展性
本 SDK 支持 Excel 内置函数的解析，还支持其他「任何」函数调用语法，可用于扩展支持项目个性化函数。
例如，项目中需要一个“根据用户ID查询用户名”的函数 getUserNameById('id')。
并且，输入的公式为 “= getUserNameById('u001')”。该函数及参数是可以解析的。

### 变量的扩展性
本 SDK 支持特殊变量的解析。当变量以 '@' 符号开头时，将解析为特殊变量。
例如，公式为 '= @lastyear'。

### 用于文本格式化（beautify）
通过生成的解析树、语法树，可以生成美化后的公式文本。

## 安装

CommonJS 规范：
```js
const formulaSDK = require('excel-formula-sdk');
const { FormulaEngine, WorkBookContext } = formulaSDK;
```

`<script/>` 引入:
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
    // 本函数用于获取单元格范围的具体数值，返回一维数组。
    return [];
  },
  getCellFloatRangeValues: function (cellRange) {
    // 本函数用于获取 “浮动单元格范围” 的具体数值，返回一维数组。
    return [];
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

**场景「浮动范围」**
本公式引擎支持「浮动范围」的概念。公式语法是使用箭头连接两个单元格地址，例如 A1->A1。
浮动范围与“单元格范围（例如，A1:A1)”的用作类似，都具有覆盖范围内的所有单元格的作用。
区别是，浮动范围的公式联动方式与单元格范围不同。

样例：对于公式 B1 = A1->A1, B2 = A1:A1，  
（1）操作方式1：当用户选择 A1 单元格所在的行，执行“增加浮动行”时，B1 处的公式发生联动变化，变更为 "=A1->A2"。
B2 处的公式不发生变更，维持 "=A1:A1"。

（2）操作方式2：当用户选择 A1 单元格所在的行，执行“插入行”时，B1 处的公式发生平移，变更为 "=A2->A2"。
B2 处的公式发生变更，称为 "=A2:A2"。

适用的业务：增值税申报表浮动行。

```js
const B1 = { column: 2, row: 1 };
engine.setCellFormula(context, B1, '=SUM(A1->A1)+SUM(A1:A1)');

const B2 = { column: 2, row: 2 };
engine.setCellFormula(context, B2, '=SUM(A5->A5)');

// 选中第 1 行，向下增加 2 个浮动行
engine.expandFloatRows(context, 1, 2);
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

