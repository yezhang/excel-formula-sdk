grammar CellAddress;

cellReference
    : WorkSheetPrefix? a1Reference  EOF                    #CellAddress
    | WorkSheetPrefix? a1Reference ':' a1Reference EOF     #CellRange
    ;

// 不包括 sheet 名称的单元格地址
a1Reference: a1Column a1Row;

a1Column: a1RelativeColumn | a1AbsoluteColumn;
a1Row: a1RelativeRow | a1AbsoluteRow;

a1RelativeColumn: CellColumnAddress;
a1AbsoluteColumn: '$' CellColumnAddress;

a1RelativeRow: CellRowAddress;
a1AbsoluteRow: '$' CellRowAddress;

WorkSheetPrefix
    : SheetName '!'
    ;

CellColumnAddress: [A-Z] [A-Z]*;
CellRowAddress: [1-9] [0-9]*;

Colon:                          ':';
Dollar:                         '$';   
ExclamationMark:                '!';


// 表格名称
fragment SheetName
    : SheetNameCharacter+
    | StringLiteral
    ;

/// String Literals
fragment StringLiteral
    :'"' DoubleStringCharacter* '"'       
    |'\'' SingleStringCharacter* '\''
    ;

fragment DoubleStringCharacter
    : ~["\\\r\n]
    | '\\' EscapeSequence
    | LineContinuation
    ;

fragment SingleStringCharacter
    : ~['\\\r\n]
    | '\\' EscapeSequence
    | LineContinuation
    ;

// 用户可输入的字符串
fragment SheetNameCharacter
    : ~('\\' | '\r' | '\n' | '+' | '-' | '*' | '/' | '[' | ']' | '!' | '\'' | '"')
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