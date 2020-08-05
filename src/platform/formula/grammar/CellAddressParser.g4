grammar CellAddressParser;

cellAddressExpress
    : cellAddressExpr
    | cellRangeExpr;

// 单元格范围
cellRangeExpr: cellAddressExpr ':' cellAddressExpr; 

// 单元格地址需要作为一个整体识别，识别后在 visitor 中解析。
// 如果在语法上将行、列进一步拆分，会与 标识符、数字字面量 有歧义。
cellAddressExpr
    : SheetAddress? cellColumnAddressExpr cellRowAddressExpr ;

cellColumnAddressExpr: CellColumnAddress;
cellRowAddressExpr: CellRowAddress;


// 表格名称
SheetAddress
    : StringCharacter+ '!'
    ;

  

CellColumnAddress: '$'? [A-Z] [A-Z]*;

CellRowAddress: '$'? [1-9] [0-9]*;

// 用户可输入的字符串
StringCharacter
    : ~[\\\r\n]
    | '\\' EscapeSequence
    | LineContinuation
    ;

fragment EscapeSequence
    : CharacterEscapeSequence
    | '0' // no digit ahead! TODO
    | HexEscapeSequence
    | UnicodeEscapeSequence
    | ExtendedUnicodeEscapeSequence
    ;
fragment CharacterEscapeSequence
    : SingleEscapeCharacter
    | NonEscapeCharacter
    ;

fragment LineContinuation
    : '\\' [\r\n\u2028\u2029]
    ;

fragment HexEscapeSequence
    : 'x' HexDigit HexDigit
    ;

fragment UnicodeEscapeSequence
    : 'u' HexDigit HexDigit HexDigit HexDigit
    | 'u' '{' HexDigit HexDigit+ '}'
    ;  

fragment ExtendedUnicodeEscapeSequence
    : 'u' '{' HexDigit+ '}'
    ;
  
fragment SingleEscapeCharacter
    : ['"\\bfnrtv]
    ;   

fragment NonEscapeCharacter
    : ~['"\\bfnrtv0-9xu\r\n]
    ;

fragment HexDigit
    : [_0-9a-fA-F]
    ;