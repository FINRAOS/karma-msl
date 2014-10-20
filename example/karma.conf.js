// Karma configuration
// Generated on Fri Aug 29 2014 11:38:06 GMT-0400 (EDT)

module.exports = function(config) {

  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',


    // frameworks to use
    frameworks: ['jasmine','msl'],


    // list of files / patterns to load in the browser
    files: [
      'spec/MSLTestSpec.js'
    ],


    // list of files to exclude
    exclude: [
      
    ],

    // configuration for msl plugin
    msl: {
      port: '8002',
      basedir: '../src/webapp',
      debug: 'true'
    },

    // this port should match the msl port specified in msl plugin configuration
    proxies: {
      '/' : 'http://localhost:8002/'
    },

    // this port should match msl port used within tests
    port: 8001,


    // test results reporter to use
    reporters: ['progress','junit'],


    // the default configuration
    junitReporter: {
      outputFile: 'test-results.xml',
      suite: ''
    },


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    captureTimeout: 120000,

    browsers: ['PhantomJS'],
    //browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true,

    urlRoot: '/root/',

  });
};
