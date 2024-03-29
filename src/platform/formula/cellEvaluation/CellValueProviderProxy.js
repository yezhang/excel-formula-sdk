/**
 * 单元格数据的读写，不做公式计算。
 */

class CellValueProviderProxy {
  /**
   * 外部组件提供的单元格值的获取器
   */
  constructor(cellValueProvider) {
    this.cellValueProvider = cellValueProvider;
    // 自定义函数
    this.customFns = cellValueProvider.customFns;
  }

  /**
   * 获取单元格值。
   * @param {SimpleCellAddress} cellAddress
   */
  getCellValue(cellAddress) {
    // 转换为外部的单元格值获取接口参数
    return this.cellValueProvider.getCellValue(cellAddress);
  }

  /**
   * 获取单元格范围的值，是一个数组。
   * @param {SimpleCellRange} cellRange 
   */
  getCellRangeValues(cellRange) {
    return this.cellValueProvider.getCellRangeValues(cellRange);
  }

  /**
   * 获取数据对象（公式中的特定常量、特定档案标识等）
   */
  fetchDataObject(object, property){
    return this.cellValueProvider.fetchDataObject(object, property)
  }

  /**
   * 获取浮动单元格范围的值，是一个数组。
   * @param {SimpleCellRange} cellRange 
   */
  getCellFloatRangeValues(cellRange) {
    return this.cellValueProvider.getCellFloatRangeValues(cellRange);
  }

  /**
   * 获取单元格的公式
   */
  getCellFormula(cellAddress) {
    return this.cellValueProvider.getCellFormula(cellAddress);
  }

  /**
   * 设置单元格值
   */
  setCellValue(cellAddress, newValue) {
    return this.cellValueProvider.setCellValue(cellAddress, newValue);
  }

  /**
   * 设置单元格的公式
   */
  setCellFormula(cellAddress, newFormula) {
    return this.cellValueProvider.setCellFormula(cellAddress, newFormula);
  }

  /**
   * 返回单元格范围的值的集合
   */
  getCellRangeValues(cellRange) {
    return this.cellValueProvider.getCellRangeValues(cellRange);
  }
}

module.exports = CellValueProviderProxy;