
/**
 * 返回不包含重复元素的新数组  
 */
function uniqueArray(array, hashFn) {
  var j = {};

  array.forEach( function(v) {
    j[hashFn(v)] = v;
  });

  return Object.keys(j).map(function(v){
    return j[v];
  });
}

exports.uniqueArray = uniqueArray;