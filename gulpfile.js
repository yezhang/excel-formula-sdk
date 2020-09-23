const path = require('path');
const process = require('process');
const fs = require('fs');
const _rimraf = require('rimraf');
const cp = require('child_process');
const { spawn } = cp;
const gulp = require('gulp');
const { series, parallel } = gulp;
const bump = require('gulp-bump');
const rename = require("gulp-rename");

const webpack = require('webpack');
const webpackDevConfig = require('./build/webpack.config.dist.dev');
const webpackMinConfig = require('./build/webpack.config.dist.min');

let root = __dirname;

function clean(cb) {
  let dir = path.join(__dirname, './dist');
  _rimraf(dir, function (err) {
    if (!err) {
      cb();
    }

    cb('删除文件失败');
  });

}

/**
 * 打包开发版本
 * @param {*} cb 
 */
function buildDev(cb) {
  webpack(webpackDevConfig, function (err, stats) {
    if (err) {
      console.log(err);
    }
    if (stats.hasErrors()) {
      console.log(stats);
    }
    cb();
  })
}

/**
 * 打包压缩版本
 */
function buildMin(cb) {
  webpack(webpackMinConfig, function (err, stats) {
    if (err) {
      console.log(err);
    }
    if (stats.hasErrors()) {
      console.log(stats);
    }
    cb();
  })
}

/**
 * 执行 webpack 打包。
 */
const build = parallel(buildDev, buildMin);

/**
 * 将 excel-formula-sdk 的打包文件提炼到发布文件目录。
 * 包括依赖的相关资源文件。
 */
function extractSDK(cb) {
  const destFolder = './dist/excel-formula-sdk/';

  gulp.src(path.join(root, './package.json'))
    .pipe(gulp.dest(destFolder, { overwrite: true }));

  gulp.src(path.join(root, './API_README.md'))
    .pipe(rename(function (path) {
      path.basename = 'README';
    }))
    .pipe(gulp.dest(destFolder, { overwrite: true }));

  cb();
}

/**
 * 更新发布版本
 */
function updateSemver(cb) {
  const options = {};
  const stream = gulp
    .src(['./package.json'])
    .pipe(bump(options))
    .pipe(gulp.dest('./'));

  stream.on('end', function () {
    // 文件复制完成
    cb();
  });
  stream.on('error', function (err) {
    // 文件复制出错
    cb(err);
  });
}

function npmPublish(cb) {
  spawn('npm', ['publish', './dist/excel-formula-sdk'], { stdio: 'inherit' }).on('close', function (err) {
    cb();
  });

}

const sdkDistro = series(clean, build, updateSemver, extractSDK);

exports.clean = clean;
exports.build = build;
exports.updateSemver = updateSemver;
exports.extractSDK = extractSDK;
exports.publish = npmPublish;
exports.default = sdkDistro;