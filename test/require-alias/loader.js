/**
 * 添加别名功能
 */

const Module = require('module');
const path = require('path');
const mochaMain = require('mocha/lib/cli').main;

const nodeRequire = Module.prototype.require;

const resolve = {
  alias: {
    base: path.resolve(__dirname, '../../src/base/'),
    platform: path.resolve(__dirname, '../../src/platform/'),
    workbench: path.resolve(__dirname, '../../src/workbench/')
  }
}

function findAlias(id, alias) {
  let keys = Object.keys(alias);
  return keys.find(function(key) {
    return id.startsWith(key);
  });
}

function resolveId(id, aliasMap) {
  let aliasKey = findAlias(id, aliasMap);
  if(!aliasKey) {
    return id;
  }

  return id.replace(aliasKey, aliasMap[aliasKey]);
}

function requireHooks(id) {
  // console.log('hooks ' + id);
  let aliasId = resolveId(id, resolve.alias);
  return nodeRequire.apply(this, [aliasId]);
}


Module.prototype.require = requireHooks;

mochaMain();