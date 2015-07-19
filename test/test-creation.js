/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('ferris3 generator', function () {
  before(function (done) {
      helpers.run(path.join(__dirname, '../app'))
       .withOptions({ skipInstall: true })
       .withPrompts({ someOption: true })
       .on('end', done);
  });

  it('creates expected files', function () {
      assert.file([
        'app/__init__.py',
        'app/settings.py',
        'app/default-endpoint.yaml',
        'app/basic/basic_handler.py',
        'app/basic/__init__.py',
        'main.py',
        'vendor.py',
        'appengine_config.py',
        'endpoints_config.py',
        'app.yaml',
        'requirements.txt',
        '.gitignore'
      ]);
  });
});
