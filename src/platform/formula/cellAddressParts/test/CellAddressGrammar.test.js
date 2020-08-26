const antlr4 = require('antlr4');

const CellAddressLexer = require('platform/formula/runtime/CellAddressLexer').CellAddressLexer;
const CellAddressParser = require('platform/formula/runtime/CellAddressParser').CellAddressParser;
const CellAddressLiteralVisitor = require('platform/formula/cellAddressParts/common/CellAddressPartsLiteralVisitor').CellAddressLiteralVisitor;

describe('单元格地址', function () {
  it('验证"地址语法"解析过程-独立地址', function () {
    let cellAddressString = 'Sheet1!A1:B1';
    const chars = new antlr4.InputStream(cellAddressString);
    const lexer = new CellAddressLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new CellAddressParser(tokens);
    const tree = parser.cellAddressExpress();
    
  })
});