const StringBuffer = require('./StringUtils.js');

function StringUtils (){}

const LiteralEscapedCharValue = {
  '0':'\0',
  'n':'\n',
  'r':'\r',
  't':'\t',
  'v':'\v',
  'b':'\b',
  'f':'\f',
  '\\':'\\',
  '\'':'\'',
  '"':'"'
};

/**
 * \\ - 匹配反斜线，表达转义序列的开始
 * (
 *   u\{([0-9A-Fa-f]+)\} - 可选1; 匹配可变长度的 16 进制转义序列 (\u{ABCD0})
 * |
 *   u([0-9A-Fa-f]{4}) - 可选2; 匹配 4 位 16 进制转义序列 (\uABCD)
 * |
 *   x([0-9A-Fa-f]{2}) - 可选3; 匹配 3 位 16 进制转义序列 (\xA5)
 * |
 *   ([1-7][0-7]{0,2}|[0-7]{2,3}) - 可选4; 匹配最多 3 位 8 进制转义序列 (\5 or \512)
 * |
 *   (['"tbrnfv0\\]) - 可选5; 匹配特殊转义字符 (\t, \n 等)
 * |
 *   \U([0-9A-Fa-f]+) - 可选6; 匹配 8 位 16 进制转义序列，python 使用 (\U0001F3B5)
 * )
 */
const jsEscapeRegex = /\\(u\{([0-9A-Fa-f]+)\}|u([0-9A-Fa-f]{4})|x([0-9A-Fa-f]{2})|([1-7][0-7]{0,2}|[0-7]{2,3})|(['"tbrnfv0\\]))|\\U([0-9A-Fa-f]{8})/g;
const fromHex = (str) => String.fromCodePoint(parseInt(str, 16));
const fromOct = (str) => String.fromCodePoint(parseInt(str, 8));

StringUtils.unescape = function (str) {
  return str.replace(jsEscapeRegex, function(_, __, varHex, longHex, shortHex, octal, specialCharacter, python) {
    if (varHex !== undefined) {
        return fromHex(varHex);
    } else if (longHex !== undefined) {
        return fromHex(longHex);
    } else if (shortHex !== undefined) {
        return fromHex(shortHex);
    } else if (octal !== undefined) {
        return fromOct(octal);
    } else if (python !== undefined) {
        return fromHex(python);
    } else {
        return LiteralEscapedCharValue[specialCharacter];
    }
});
}

/**
 * 移除两侧的引号
 *
 * @param {String} str
 * @returns {String}
 */
StringUtils.removeQuotes = function removeQuotes(str) {
  let newStr = str;

  if (
    (str.charAt(0) === '"' && str.charAt(str.length - 1) === '"') ||
    (str.charAt(0) === '\'' && str.charAt(str.length - 1) === '\'')
  ) {
    newStr = str.substr(1, str.length - 2);
  }

  return newStr;
}

/**
 * 从 String token 中解析出真正的文本内容。
 * 移除字符串两侧的双引号或单引号，移除字面量中的转义符。
 * 
 * 支持的 JavaScript 转义字符串有：
 * '\t'
 * '\v'
 * '\0'
 * '\b'
 * '\f'
 * '\n'
 * '\r'
 * '\''
 * '\"'
 * '\\'
 */
StringUtils.unwrapText = function(quotedString) {
  if(quotedString == null) {
    return quotedString;
  }
  var innerText = StringUtils.removeQuotes(quotedString);
  return StringUtils.unescape(innerText);
}

exports.StringUtils = StringUtils;

