/**
 * 遍历语法树
 */

 const OPTIONS = {
   BREAK: 'break',
   CONTINUE: 'continue'
 }
 /**
 * 语法树的遍历。
 * 
 * 本函数可以提供外部使用。
 */
function traverse(node, func) {
  let option = func(node);
  if(option === OPTIONS.BREAK){
    // 不在执行孩子节点的访问。
    return;
  }
  for (var key in node) {
    if (node.hasOwnProperty(key)) {
      var child = node[key];
      if (typeof child === 'object' && child !== null) {

        if (Array.isArray(child)) {
          child.forEach(function (node) {
            traverse(node, func);
          });
        } else {
          traverse(child, func);
        }
      }
    }
  }
}



exports.OPTIONS = OPTIONS;
exports.traverse = traverse;