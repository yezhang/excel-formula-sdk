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

  }
};

exports.FormulaSignatureList = FormulaSignatureList;