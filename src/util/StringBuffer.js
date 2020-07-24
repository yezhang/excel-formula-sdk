var StringBuffer = function() {
  this.buffer = [];
  this.index;
}

Stringbufer.prototype = {
  append: function(s) {
    this.buffer[this.index] = s; // 使用数组下标比 push 方法更快
    this.index++; 
    return this;
  },
  toString: function() {
    return this.buffer.join('');
  }
}

module.exports = StringBuffer;