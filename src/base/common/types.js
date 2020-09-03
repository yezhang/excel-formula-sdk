/**
 * @returns whether the provided parameter is a JavaScript Array or not.
 */
function isArray(array) {
  return Array.isArray(array);
}

/**
 * @returns whether the provided parameter is a JavaScript String or not.
 */
function isString(str) {
  return (typeof str === 'string');
}

/**
 *
 * @returns whether the provided parameter is of type `object` but **not**
 *	`null`, an `array`, a `regexp`, nor a `date`.
 */
function isObject(obj) {
  // The method can't do a type cast since there are type (like strings) which
  // are subclasses of any put not positvely matched by the function. Hence type
  // narrowing results in wrong results.
  return typeof obj === 'object'
    && obj !== null
    && !Array.isArray(obj)
    && !(obj instanceof RegExp)
    && !(obj instanceof Date);
}

function isInt(value) {
  var x;
  if (isNaN(value)) {
    return false;
  }
  x = parseFloat(value);
  return (x | 0) === x;
}

/**
 * In **contrast** to just checking `typeof` this will return `false` for `NaN`.
 * @returns whether the provided parameter is a JavaScript Number or not.
 */
function isNumber(obj){
	return (typeof obj === 'number' && !isNaN(obj));
}

exports.isInt = isInt;
exports.isArray = isArray;
exports.isString = isString;
exports.isObject = isObject;
exports.isNumber = isNumber;