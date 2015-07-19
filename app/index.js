'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var Ferris3Generator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      this.spawnCommand('pip', ['install', '--pre', '-t', 'lib', '-r', 'requirements.txt']);
    });
  },

  askFor: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the marvelous Ferris3 generator!'));

    var prompts = [{
      type    : 'input',
      name    : 'app_id',
      message : 'What is your cloud project id? (ex, lofty-seer-632).',
    },{
      type    : 'input',
      name    : 'oauth2_client_id',
      message : 'What is your client\'s OAuth2 client id? (optional)',
    }];

    this.prompt(prompts, function (props) {
      this.someOption = props.someOption;
      this.app_id = props.app_id || 'ferris-app';
      this.oauth2_client_id = props.oauth2_client_id || 'unspecified';

      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('app');
    this.directory('app');
    this.template('app/default-endpoint.yaml');
    this.template('app.yaml');
    this.copy('requirements.txt');
    this.copy('appengine_config.py');
    this.copy('endpoints_config.py');
    this.copy('vendor.py');
    this.copy('main.py');
    this.copy('.gitignore');
  }
});

module.exports = Ferris3Generator;
