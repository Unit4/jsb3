jsb3 [![Build Status](https://travis-ci.org/bjornhol/jsb3.svg?branch=master)](https://travis-ci.org/bjornhol/jsb3) [![NPM Version](http://img.shields.io/npm/v/jsb3.svg)](https://www.npmjs.org/package/jsb3) [![Dependency Status](https://david-dm.org/bjornhol/jsb3.svg)](https://david-dm.org/bjornhol/jsb3)
====

 Process a jsb3 file into an array of files

## Install

```bash
$ npm install --save-dev jsb3
```

## Usage

```js
var jsb3 = require('jsb3');

jsb3('testfiles/file1.jsb3').then(function (files){
	// Do something to files array	
}).fail(function (message){
	
});	
```

## License

[MIT](http://opensource.org/licenses/MIT) © [Unit4](http://www.unit4.com/)