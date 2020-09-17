/**
 * 单元格数据的读写，不做公式计算。
 */

class CellValueProviderProxy {
  /**
   * 外部组件提供的单元格值的获取器
   */
  constructor(cellValueProvider) {

  }

  /**
   * 获取单元格值。
   * @param {SimpleCellAddress} cellAddress
   */
  getCellValue(cellAddress) {
    // 转换为外部的单元格值获取接口参数

  }

  /**
   * 获取单元格的公式
   */
  getCellFormula(cellAddress) {

  }

  /**
   * 设置单元格值
   */
  setCellValue(cellAddress, newValue) {

  }

  /**
   * 设置单元格的公式
   */
  setCellFormula(cellAddress, newFormula) {

  }

  /**
   * 返回单元格范围的值的集合
   */
  getCellRangeValues(cellRange) {

  }


}

module.exports = CellValueProviderProxy;