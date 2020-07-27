parser grammar ReportFormulaParser;

options {
    tokenVocab = ReportFormulaLexer;
}

formulaExpr : expressionStatement;
expressionStatement: expressionSequence;

expressionSequence : singleExpression (',' singleExpression)* ;

singleExpression
    : singleExpression arguments                                               # ArgumentsExpression
    | '+' singleExpression                                                     # UnaryPlusExpression
    | '-' singleExpression                                                     # UnaryMinusExpression
    | <assoc=right> singleExpression '**' singleExpression                     # PowerExpression
    | singleExpression op=('*' | '/' | '%') singleExpression                   # MultiplicativeExpression
    | singleExpression op=('+' | '-') singleExpression                         # AdditiveExpression
    | singleExpression op=('<' | '>' | '<=' | '>=') singleExpression           # RelationalExpression
    | singleExpression op=('==' | '!=' ) singleExpression                      # EqualityExpression
    | singleExpression '&&' singleExpression                                   # LogicalAndExpression
    | singleExpression '||' singleExpression                                   # LogicalOrExpression
    | singleExpression '?' singleExpression ':' singleExpression               # TernaryExpression
    | <assoc=right> singleExpression '=' singleExpression                      # AssignmentExpression
    | identifier                                                               # IdentifierExpression
    | literal                                                                  # LiteralExpression
    | arrayLiteral                                                          # ArrayLiteralExpression
    | objectLiteral                                                         # ObjectLiteralExpression
    | '(' expressionSequence ')'                                               # ParenthesizedExpression
    ;

arguments
    : '('(argument (',' argument)* ','?)?')'
    ;

argument
    : singleExpression 
    | identifier
    ;

objectLiteral
    : '{' (propertyAssignment (',' propertyAssignment)*)? ','? '}'
    ;

arrayLiteral
    : ('[' elementList ']')
    ;

elementList
    : ','* arrayElement? (','+ arrayElement)* ','* // Yes, everything is optional
    ;

arrayElement
    : singleExpression
    ;

propertyAssignment
    : propertyName ':' singleExpression                                             # PropertyExpressionAssignment
    | '[' singleExpression ']' ':' singleExpression                                 # ComputedPropertyExpressionAssignment
    ;

propertyName
    : identifierName
    | StringLiteral
    | numericLiteral
    | '[' singleExpression ']'
    ;

identifierName
    : identifier
    | reservedWord
    ;


// 标识符

identifier
    : refItemCode
    | cellAddressLiteral
    | cellRangeLiteral
    | Identifier
    ;

refItemCode: '@' Identifier; //报表项的标识符

// 单元格范围
cellRangeLiteral: cellAddressLiteral ':' cellAddressLiteral; 

// 字面量
literal
    : numericLiteral    #NumericLiteralExpression
    | NullLiteral       #NullLiteralExpression
    | BooleanLiteral    #BooleanLiteralExpression
    | StringLiteral     #StringLiteralExpression
    ;

cellAddressLiteral
    : (sheetAddress '!')? CellColumnLiteral CellRowLiteral
    ;

cellColumnAddress
    : cellColumnRelativeAddress
    | cellColumnAbsoluteAddress
    ;

cellRowAddress
    : cellRowRelativeAddress
    | cellRowAbsoluteAddress
    ;

cellColumnRelativeAddress: CellColumnLiteral;
cellColumnAbsoluteAddress: '$' CellColumnLiteral;

cellRowRelativeAddress: CellRowLiteral;
cellRowAbsoluteAddress: '$' CellRowLiteral;

// 表格名称
sheetAddress
    : StringCharacter+
    ;

numericLiteral
    : percentageLiteral  
    | basicNumberLiteral 
    ;

percentageLiteral
    : basicNumberLiteral '%';

basicNumberLiteral
    : DecimalLiteral
    | HexIntegerLiteral
    | OctalIntegerLiteral
    | OctalIntegerLiteral2
    | BinaryIntegerLiteral
    ;


reservedWord
    : keyword
    | BooleanLiteral
    ;    

keyword
    : If
    ;

