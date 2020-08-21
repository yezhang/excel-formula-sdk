/**
 * 如果提供的 value 无法计算为一个 Javascript true 值，则使用给定的消息抛出异常。
 */
function ok(value, message) {
	if (!value) {
		throw new Error(message ? `Assertion failed (${message})` : 'Assertion Failed');
	}
}

exports.ok = ok;