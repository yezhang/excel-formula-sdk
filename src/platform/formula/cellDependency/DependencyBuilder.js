
const buildCellRefDecorator = require('../cellAddressParts/common/CellAddressParts').buildCellRefDecorator;
const SimpleCellAddress = require('platform/formula/cellAddressParts/common/CellAddressParts').SimpleCellAddress;
const SingleFormulaContext = require('platform/formula/core/SingleFormulaContext').SingleFormulaContext;

class CellDependencyBuilder {
  /**
   * @param {DependencyGraph} depGraph 依赖关系图
   */
  constructor(depGraph) {
    this.depGraph = depGraph;
  }

  setFormulaAST(ast) {
    this.formulaAST = ast;
  }

  /**
   * 清空当前工作单元格的依赖
   */
  clear(activeSheetName, workingCellRefAddr) {
    let simpleCellAddress = new SimpleCellAddress(activeSheetName, workingCellRefAddr.column, workingCellRefAddr.row);
    this._removeDependencies(simpleCellAddress);
  }

  build(activeSheetName, workingCellRefAddr) {
    let simpleCellAddress = new SimpleCellAddress(activeSheetName, workingCellRefAddr.column, workingCellRefAddr.row);

    // 收集受影响的单元格
    // Array[ CellAddressIdentifier|CellRangeIdentifier]
    let dependenciesList = this.formulaAST.findAllCellRefNodes();
    this.addOrUpdateDependencies(simpleCellAddress, dependenciesList);
  }

  /**
   * 将 "单元格引用字符串" 对象化、去除重复的依赖引用、简化地址表示法。
   * 
   * 每次遇到一个单元格的公式，将公式放置到图结构中。
   * 对单元格地址格式进行规范化处理。
   * 
   * 如果传入重复的 workingCellAddress，则执行覆盖，并更新图的关系。
   * @param {SimpleCellAddress} workingCellAddr 工作单元格地址
   * @param {Array[ CellAddressIdentifier|CellRangeIdentifier] } dependenciesList cellRefNodes
   */
  addOrUpdateDependencies(workingCellAddr, dependenciesList) {
    const _this = this;
    let activeSheetName = workingCellAddr.sheet;
    
    // 包括单元格地址和单元格范围
    const depMap = {};
    dependenciesList.forEach(function (dep) {
      let cellCarry = _this._buildCellAddress(activeSheetName, dep);
      let simpleCell = cellCarry.toSimpleAddress();
      let hashcode = simpleCell.hashcode();

      if (depMap.hasOwnProperty(hashcode)) {
        let depDetail = depMap[hashcode];
        let depListValue = depDetail.deps;
        
        depListValue.push(cellCarry);
      } else {
        let depDetail = {
          simple: simpleCell,
          deps: [cellCarry]
        };
        depMap[hashcode] = depDetail;
      }
    });

    this._removeDependencies(workingCellAddr);
    this._addDependencies(workingCellAddr, depMap);
    this._checkCycleDepencies();
  }

  _checkCycleDepencies() {
    this.depGraph.sort();
  }

  /**
   * 移除从 cellAddress 发出的有向边（只移除出度）。
   * @param {SimpleCellAddress} cellAddress
   */
  _removeDependencies(cellAddress) {
    this.depGraph.removeCellDependencies(cellAddress);
  }


  /**
   * 建立从 cellAddress 指向 dependencyMap.keys() 的有向边。
   * @param {SimpleCellAddress} cellAddress
   */
  _addDependencies(cellAddress, dependencyMap) {
    this.depGraph.addCellDependencies(cellAddress, dependencyMap);
  }

  // 将单元格地址转化为标准对象
  _buildCellAddress(sheetName, cellAddressOrCellRange) {
    let cellRef = buildCellRefDecorator(cellAddressOrCellRange);
    let context = new SingleFormulaContext();
    context.activeSheetName = sheetName;
    cellRef.setWorkingContext(context);
    return cellRef;
  }

  getDependencyGraph() {
    return this.depGraph;
  }
}


exports.CellDependencyBuilder = CellDependencyBuilder;