const path = require('path'); 
const fs = require('fs'); 
const { series } = require('gulp');
const _rimraf = require('rimraf');

function clean(cb) {
  let dir = path.join(__dirname,'./dist');
  _rimraf(dir, function(err) {
    if(!err) {
      cb();
    }

    cb('删除文件失败');
  });
  
}
function build(cb) {

  cb();
}

exports.clean = clean;
exports.build = build;
exports.default = build;