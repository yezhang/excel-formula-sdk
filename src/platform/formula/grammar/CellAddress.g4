grammar CellAddress;

cellAddressExpress
    : cellAddressExpr
    | cellRangeExpr;

// 单元格范围
cellRangeExpr: SheetAddress? plainCellAddressExpr ':' plainCellAddressExpr; 

// 单元格地址
cellAddressExpr
    : SheetAddress? plainCellAddressExpr ;

plainCellAddressExpr: cellColumnAddressExpr cellRowAddressExpr;

cellColumnAddressExpr: CellColumnAddress;
cellRowAddressExpr: CellRowAddress;


// 表格名称
SheetAddress
    : StringCharacter+ '!'
    ;

  

CellColumnAddress: '$'? [A-Z] [A-Z]*;

CellRowAddress: '$'? [1-9] [0-9]*;

Colon:                          ':';
ExclamationMark:                '!';

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