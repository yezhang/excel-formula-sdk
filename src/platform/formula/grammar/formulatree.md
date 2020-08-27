本文档描述了核心的公式语法树（FTree）节点类型。

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [FNode 类型](#fnode-%E7%B1%BB%E5%9E%8B)
- [标识符](#%E6%A0%87%E8%AF%86%E7%AC%A6)
  - [报表项引用](#%E6%8A%A5%E8%A1%A8%E9%A1%B9%E5%BC%95%E7%94%A8)
  - [单元格地址](#%E5%8D%95%E5%85%83%E6%A0%BC%E5%9C%B0%E5%9D%80)
  - [单元格范围](#%E5%8D%95%E5%85%83%E6%A0%BC%E8%8C%83%E5%9B%B4)
  - [一般标识符](#%E4%B8%80%E8%88%AC%E6%A0%87%E8%AF%86%E7%AC%A6)
- [字面量](#%E5%AD%97%E9%9D%A2%E9%87%8F)
- [表达式](#%E8%A1%A8%E8%BE%BE%E5%BC%8F)
  - [数组表达式](#%E6%95%B0%E7%BB%84%E8%A1%A8%E8%BE%BE%E5%BC%8F)
  - [对象表达式](#%E5%AF%B9%E8%B1%A1%E8%A1%A8%E8%BE%BE%E5%BC%8F)
  - [一元操作](#%E4%B8%80%E5%85%83%E6%93%8D%E4%BD%9C)
    - [一元操作符表达式](#%E4%B8%80%E5%85%83%E6%93%8D%E4%BD%9C%E7%AC%A6%E8%A1%A8%E8%BE%BE%E5%BC%8F)
      - [一元操作符](#%E4%B8%80%E5%85%83%E6%93%8D%E4%BD%9C%E7%AC%A6)
  - [二元操作](#%E4%BA%8C%E5%85%83%E6%93%8D%E4%BD%9C)
    - [二元表达式](#%E4%BA%8C%E5%85%83%E8%A1%A8%E8%BE%BE%E5%BC%8F)
      - [二元运算符](#%E4%BA%8C%E5%85%83%E8%BF%90%E7%AE%97%E7%AC%A6)
    - [赋值表达式](#%E8%B5%8B%E5%80%BC%E8%A1%A8%E8%BE%BE%E5%BC%8F)
      - [赋值运算符](#%E8%B5%8B%E5%80%BC%E8%BF%90%E7%AE%97%E7%AC%A6)
    - [逻辑表达式](#%E9%80%BB%E8%BE%91%E8%A1%A8%E8%BE%BE%E5%BC%8F)
      - [逻辑运算符](#%E9%80%BB%E8%BE%91%E8%BF%90%E7%AE%97%E7%AC%A6)
  - [条件表达式](#%E6%9D%A1%E4%BB%B6%E8%A1%A8%E8%BE%BE%E5%BC%8F)
  - [调用表达式](#%E8%B0%83%E7%94%A8%E8%A1%A8%E8%BE%BE%E5%BC%8F)
  - [表达式序列调用](#%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%BA%8F%E5%88%97%E8%B0%83%E7%94%A8)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# FNode 类型

FTree 节点通过 FNode 表示，该节点将会有不同继承方式，其接口定义如下：
```js
interface FNode {
    type: string;
    loc: SourceLocation | null;
}
```
type 字段表示 AST 的不同类型。每个 FNode 子类型的 type 字段，具有特定字符串，详细信息将在下文描述。
可以使用 type 字段确定某个节点实现的具体接口。
loc 字段表示节点的源码位置。如果节点没有源码位置信息，则为 null。如果有位置信息，则通过一个对象表示源码位置。
该对象包含一个开始位置（被解析的源码区域的第一个字符位置）和一个结束位置（被解析源码区域后面的第一个字符位置）。

```js
interface SourceLocation {
    source: string | null;
    start: Position;
    end: Position;
}
```
每个 Position 对象包含一个 line 数字（起始索引是 1）和一个 column 数字（起始索引是 0）。
```js
interface Position {
    line: number; // >= 1
    column: number; // >= 0
}
```

# 标识符

```js
interface Identifier <: Expression {
    type: "Identifier";
    name: string;
}
```
一个标识符。注意一个表示符可能是一个表达式。

## 报表项引用

```js
interface RefItemIdentifier <: Identifier {
    type: "RefItemIdentifier";
    name: string;
```

## 单元格地址

单元格引用的基类。
```js
interface CellRef <:Identifier {}
```

```js
interface CellAddressIdentifier <: CellRef {
    type: "CellAddressIdentifier";
    sheetName: SheetName;
    a1Reference: A1Reference;
}
```

表格的引用.

```js
interface SheetName <:Identifier {
  type: "SheetNameIdentifier";
  name: string;
}
```

单元格地址的引用方式。
```js
interface A1Reference {
  type: "A1ReferenceIdentifier";
  columnRef: AbsoluteColumn | RelativeColumn;
  rowRef: AbsoluteRow | RelativeRow;
}
```

```js
interface CellColumn {
  text: string;
}
```

```js
interface AbsoluteColumn <: CellColumn {
  type: "AbsoluteColumnIdentifier";
}
```

```js
interface RelativeColumn <: CellColumn {
  type: "RelativeColumnIdentifier";
}
```

```js
interface CellRow {
  line: number;
}
```
```js
interface AbsoluteRow <:CellRow {
  type: "AbsoluteRowIdentifier";
}
```
```js
interface RelativeRow <:CellRow {
  type: "RelativeRowIdentifier";
}
```

## 单元格范围

```js
interface CellRangeIdentifier <: CellRef {
    type: "CellRangeIdentifier";
    sheetName: SheetName;
    startRef: A1Reference;
    endRef: A1Reference;
}
```

sheetName 字段表示单元格名称。
startRef 字段表示其实单元格地址的引用；endRef 表示结束单元格地址的引用。

## 一般标识符

```js
interface Identifier <: Expression, Pattern {
    type: "Identifier";
    name: string;
}
```

# 字面量

```js
interface Literal <: Expression {
    type: "Literal";
    value: string | boolean | null | number;
}
```

# 表达式
```js
interface Expression <: Node { }
```
任一的表达式节点。

## 数组表达式
```js
interface ArrayExpression <: Expression {
    type: "ArrayExpression";
    elements: [ Expression | null ];
}
```
一个数组表达式。如果一个元素表示一个稀疏数组中的空位，则该元素为 null。例如 `[1,,2]`。

## 对象表达式

```js
interface ObjectExpression <: Expression {
    type: "ObjectExpression";
    properties: [ Property ];
}
```

一个对象表达式。
```js
interface Property <: FNode {
    type: "Property";
    key: Literal | Identifier;
    value: Expression;
    kind: "init" | "get" | "set";
}
```


## 一元操作

### 一元操作符表达式

```js
interface UnaryExpression <: Expression {
    type: "UnaryExpression";
    operator: UnaryOperator;
    prefix: boolean;
    argument: Expression;
}
```
一元操作符表达式。

#### 一元操作符
```js
enum UnaryOperator {
    "-" | "+" | "!" | "~"
}
```
一元操作符符号。

## 二元操作

### 二元表达式

```js
interface BinaryExpression <: Expression {
    type: "BinaryExpression";
    operator: BinaryOperator;
    left: Expression;
    right: Expression;
}
```
二元运算符表达式。

#### 二元运算符

```js
enum BinaryOperator {
          "==" | "!=" 
         | "<" | "<=" | ">" | ">="
         | "<<" | ">>" | ">>>"
         | "+" | "-" | "*" | "/" | "%"
         | "**"
}
```
二元运算符符号。

### 赋值表达式

```js
interface AssignmentExpression <: Expression {
    type: "AssignmentExpression";
    operator: AssignmentOperator;
    left: Pattern | Expression;
    right: Expression;
}
```
一个赋值运算符表达式。

#### 赋值运算符

```js
enum AssignmentOperator {
    "="
}
```

### 逻辑表达式

```js
interface LogicalExpression <: Expression {
    type: "LogicalExpression";
    operator: LogicalOperator;
    left: Expression;
    right: Expression;
}
```
逻辑运算符表达式。

#### 逻辑运算符

```js
enum LogicalOperator {
    "||" | "&&"
}
```

## 条件表达式

```js
interface ConditionalExpression <: Expression {
    type: "ConditionalExpression";
    test: Expression;
    alternate: Expression;
    consequent: Expression;
}
```
条件表达式：test ? consequent : alternate


## 调用表达式

```js
interface CallExpression <: Expression {
    type: "CallExpression";
    callee: Expression;
    arguments: [ Expression ];
}
```

函数调用表达式。

## 表达式序列调用

```js
interface SequenceExpression <: Expression {
    type: "SequenceExpression";
    expressions: [ Expression ];
}
```
序列表达式，例如，逗号分割的表达式序列。