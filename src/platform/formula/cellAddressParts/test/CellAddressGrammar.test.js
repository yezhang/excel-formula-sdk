const antlr4 = require('antlr4');
const CellAddressLexer = require('platform/formula/runtime/CellAddressLexer').CellAddressLexer;
const CellAddressParser = require('platform/formula/runtime/CellAddressParser').CellAddressParser;
const CellAddressLiteralVisitor = require('platform/formula/cellAddressParts/common/CellAddressPartsVisitor').CellAddressLiteralVisitor;

const CellAddressParts = require('platform/formula/cellAddressParts/common/CellAddressParts');

describe('单元格地址', function () {
  it('验证"地址语法"解析过程-独立地址', function () {
    let cellAddressString = 'A1!$A$1:C1';
    const chars = new antlr4.InputStream(cellAddressString);
    const lexer = new CellAddressLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new CellAddressParser(tokens);
    const tree = parser.cellReference();
    
  })
});