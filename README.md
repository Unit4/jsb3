# jsb3 

Process a jsb3 file into an array of files

[![Build Status][travis-image]][travis-url] 
[![NPM Version][npm-image]][npm-url] 
[![Dependency Status][dependencies-image]][dependencies-url]

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

[travis-image]: https://travis-ci.org/Unit4/jsb3.svg?branch=master
[travis-url]: https://travis-ci.org/Unit4/jsb3
[npm-image]: http://img.shields.io/npm/v/jsb3.svg
[npm-url]: https://www.npmjs.org/package/jsb3
[dependencies-image]: https://david-dm.org/bjornhol/jsb3.svg
[dependencies-url]: https://david-dm.org/bjornhol/jsb3