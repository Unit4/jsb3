jsb3 [![Build Status](https://travis-ci.org/bjornhol/jsb3.svg?branch=master)](https://travis-ci.org/bjornhol/jsb3)
====

 Process a jsb3 file into an array of files

## Install

Not currently published

## Usage

```js
var jsb3 = require('./index');

jsb3('testfiles/file1.jsb3').then(function (files){
	// Do something to files array	
}).fail(function (message){
	
});	
```

## License

[MIT](http://opensource.org/licenses/MIT) © [Bjørn Harald Olsen](https://github.com/bjornhol)