/**
 * 函数自动补全的信息。
 * 
 * @see https://support.google.com/docs/answer/3093364
 * @see https://support.google.com/docs/answer/3093440
 * @see https://support.google.com/docs/table/25273?hl=zh-Hans&ref_topic=9054531
 */
let FormulaSignatureList = {
  'IF': {
    prefixDisplayParts: 'IF(',
    suffixDisplayParts: ')',
    separatorDisplayParts: ',',
    documentation: '当逻辑表达式的值为 TRUE 时返回一个值，而当其为 FALSE 时返回另一个值。',
    example: 'IF(A2,"A2 was true","A2 was false")',
    parameters: [
      {
        displayParts: '逻辑表达式',
        documentation: '一个表达式或对包含表达式的单元格的引用，该表达式代表某种逻辑值，即 TRUE 或 FALSE。',
      },
      {
        displayParts: '为 TRUE 时的返回值',
        documentation: '当“逻辑表达式”为 TRUE 时的返回值。',
      },
      {
        displayParts: '为 FAISE 时的返回值',
        documentation: '当“逻辑表达式”为 FAISE 时的返回值。',
      }
    ]
  },
  'MIN': {
    prefixDisplayParts: 'MIN(',
    suffixDisplayParts: ')',
    separatorDisplayParts: ',',
    documentation: '返回数值数据集中的最小值。',
    example: 'MIN(A2:A100,B2:B100,4,26)',
    parameters: [
      {
        displayParts: '值1',
        documentation: '计算最小值时所用的第一个值或范围。',
      },
      {
        displayParts: '[值2, ...]',
        documentation: '[可选] - 在计算最小值时要考虑的其他数值或范围。',
      }
    ]
  },
  'ROUND': {
    prefixDisplayParts: 'ROUND(',
    suffixDisplayParts: ')',
    separatorDisplayParts: ',',
    documentation: '按标准规则，将数值的指定小数位之后的部分四舍五入。',
    example: 'ROUND(A2)',
    parameters: [
      {
        displayParts: '值',
        documentation: '要四舍五入为位数位小数的数值。',
      },
      {
        displayParts: '位数',
        documentation: '[可选 - 默认值为0] - 要舍入到的小数位数。位数可以取负值，在这种情况下会将值的小数点左侧部分舍入到指定的位数。',
      }
    ]
  }
};

exports.FormulaSignatureList = FormulaSignatureList;