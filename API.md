# excel-formula-sdk

**注意：** 本项目接口仍处于不稳定阶段，接口会随时发生调整。

Excel 公式解析引擎，用于支持公式输入编辑器的智能提示、单元格之间的公式依赖计算、公式的求值。

## 使用方法
在使用本组件时，需要引用本组件。

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
engine.evaluate(context, A1CellRef);
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
在公式计算失败时，会排除异常；在异常中包含界面显示需要的文本。
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
自动填充单元格。


## 与编辑器组件 monoca-editor 集成API


## 联系方式
zhangyef@yonyou.com

## LICENSE
MIT

