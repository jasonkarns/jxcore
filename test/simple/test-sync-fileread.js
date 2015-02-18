// Copyright & License details are available under JXCORE_LICENSE file





var common = require('../common');
var assert = require('assert');
var path = require('path');
var fs = require('fs');

var fixture = path.join(__dirname, '../fixtures/x.txt');

assert.equal('xyz\n', fs.readFileSync(fixture));