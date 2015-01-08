karma-msl
=========

> [Plugin](https://www.npmjs.org/package/karma-msl) for Karma Test Runner to integrate [MSL](http://finraos.github.io/MSL) (Mock Service Layer)

## Installation

The easiest way is to keep `karma-msl` as a devDependency in your `package.json`.

```json
{
  "devDependencies": {
    "karma": "~0.12.0",
    "karma-msl": "~0.0.13"
  }
}
```

You can simply do it by:
```bash
npm install karma-msl --save-dev
```

## Configuration
Integrating MSL with Jasmine tests (you can also integrate with your favorite testing framework)
```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    frameworks: ['jasmine, msl'],

    files: [
      'spec/*.js'
    ],
    
    // configuration for msl plugin
    msl: {
      port: '8002', //port to start msl server.  8000 by default.
      basedir: '../src/', // directory containing the app code (front-end code under test).  current dir by default.
      debug: 'true', // true to turn on debugging. false by default.
      extensions: 'CustomURL.js' // custom extensions for msl-server (optional)
    },
    
    // this port should match the msl port specified in msl plugin config
    proxies: {
      '/' : 'http://localhost:8002/'
    },
    
    // this port should match the msl port used within the tests
    port: 8001,
  });
};
```

## Contributing & Sponsor

More information on how to contribute to this project including sign off and the [DCO agreement](https://github.com/FINRAOS/karma-msl/blob/master/DCO), please see the project's [GitHub wiki](https://github.com/FINRAOS/karma-msl/wiki).

FINRA has graciously allocated time for their internal development resources to enhance karma-msl and encourages participation in the open source community. Want to join FINRA? Please visit https://finra.org/careers.

[![FINRA Logo][1]](https://finra.org)


## License Type

MSL project, including karma-msl plugin, is licensed under [Apache License Version 2.0](http://www.apache.org/licenses/LICENSE-2.0)

[1]: http://www.finra.org/web/groups/corporate/@corp/documents/web_asset/p075334.gif
