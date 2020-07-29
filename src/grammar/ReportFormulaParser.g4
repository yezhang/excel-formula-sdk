parser grammar ReportFormulaParser;

options {
    tokenVocab = ReportFormulaLexer;
}

formulaExpr : expressionStatement;
expressionStatement: expressionSequence;

expressionSequence : singleExpression (',' singleExpression)* ;

singleExpression
    : singleExpression arguments                                                # ArgumentsExpression
    | '+' singleExpression                                                      # UnaryPlusExpression
    | '-' singleExpression                                                      # UnaryMinusExpression
    | <assoc=right> singleExpression '**' singleExpression                      # PowerExpression
    | singleExpression op=('*' | '/' | '%') singleExpression                    # MultiplicativeExpression
    | singleExpression op=('+' | '-') singleExpression                          # AdditiveExpression
    | singleExpression op=('<' | '>' | '<=' | '>=') singleExpression            # RelationalExpression
    | singleExpression op=('==' | '!=' ) singleExpression                       # EqualityExpression
    | singleExpression '&&' singleExpression                                    # LogicalAndExpression
    | singleExpression '||' singleExpression                                    # LogicalOrExpression
    | singleExpression '?' singleExpression ':' singleExpression                # TernaryExpression
    | <assoc=right> singleExpression '=' singleExpression                       # AssignmentExpression
    | identifier                                                                # IdentifierExpression
    | literal                                                                   # LiteralExpression
    | arrayLiteral                                                              # ArrayLiteralExpression
    | objectLiteral                                                             # ObjectLiteralExpression
    | '(' expressionSequence ')'                                                # ParenthesizedExpression
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
    : refItemCode           #IdentifierRefItemCode
    | CellAddressLiteral    #IdentifierCellAddressLiteral
    | CellRangeLiteral      #IdentifierCellRangeLiteral
    | Identifier            #IdentifierPlainText
    ;

refItemCode: '@' Identifier; //报表项的标识符

// 字面量
literal
    : NullLiteral       #NullLiteralExpression
    | BooleanLiteral    #BooleanLiteralExpression
    | StringLiteral     #StringLiteralExpression
    | numericLiteral    #NumericLiteralExpression
    ;


numericLiteral
    : percentageLiteral  #PercentageLiteralExpression
    | BasicNumberLiteral #BasicNumberLiteralExpression
    ;

percentageLiteral
    : BasicNumberLiteral '%';

reservedWord
    : keyword
    | BooleanLiteral
    ;    

keyword
    : If
    ;

eos
    : SemiColon
    | EOF
    ;