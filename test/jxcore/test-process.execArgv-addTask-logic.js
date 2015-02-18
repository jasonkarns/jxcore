// Copyright & License details are available under JXCORE_LICENSE file

/*
 This code compares process.execArgv called from main thread and addTask() with logic()
 */

var assert = require('assert');
var clog = jxcore.utils.console.log;
var finished = false;

var value = JSON.stringify(process.execArgv);

var method = function (obj) {
  return JSON.stringify(process.execArgv);
};

process.on('exit', function (code) {
  assert.ok(finished, "The test did not finish.");
});

jxcore.tasks.addTask({
  define: function () {
  }, logic: method
}, null, function (ret) {

  finished = true;

  clog("main thread:", "green");
  clog("\t", value);

  clog("addTask() with logic():", "magenta");
  clog("\t", ret);

  assert.strictEqual(value, ret, "Values are not equal: process.execArgv");

  // forcing faster exit than naturally
  setTimeout(process.exit, 10);
});