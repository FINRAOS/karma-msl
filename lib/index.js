#!/usr/bin/env node
var path = require('path');

var pattern = function(file) {
  return {pattern: file, included: true, served: true, watched: false};
};

var initMSL = function(files, config) {
    files.unshift(pattern(path.join(__dirname, 'jquery-1.11.1.min.js')));
    files.unshift(pattern(path.join(__dirname, 'mockapi-browser.min.js')));
    files.unshift(pattern(path.join(__dirname, 'appcontainer-driver.min.js')));

    if (process.argv.toString().search('conf.js')>0)
        process.argv = process.argv.splice(4);
    else
        process.argv = process.argv.splice(3);
    var port = config.port||'8000';
    var basedir = config.basedir||process.cwd();
    var debug = config.debug||'false';
    var extensions = config.extensions||'';
    process.argv.push('node');
    process.argv.push('msl');
    process.argv.push('--port='+port);
    process.argv.push('--basedir='+basedir);
    process.argv.push('--debug='+debug);
    process.argv.push('--extensions='+extensions);
    console.log('msl configs: ',process.argv);
    require('../node_modules/msl-server/web-server');
}

initMSL.$inject = ['config.files', 'config.msl'];

module.exports = {
    'framework:msl': ['factory', initMSL]
};
