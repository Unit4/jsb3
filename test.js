'use strict';
var assert = require('assert');
var path = require('path');
var jsb3 = require('./index');

it('should read all files from jsb3 stream', function(cb){
    jsb3('testfiles/file1.jsb3').then(function(files){
        assert.equal(files.length, 2);
        assert.strictEqual('folder1', path.dirname(files[0]));      
        assert.strictEqual('file.txt', path.basename(files[0]));
        assert.strictEqual('folder2', path.dirname(files[1]));
        assert.strictEqual('file.pdf', path.basename(files[1]));        
        cb();
    }).fail(function(message){
        assert(false, message);
        cb();
    }); 
});

it('should read all files from jsb3 stream with multiple projects', function(cb){
    jsb3('testfiles/file2.jsb3').then(function(files){
        assert.equal(files.length, 2);
        assert.strictEqual('folder1', path.dirname(files[0]));      
        assert.strictEqual('file.txt', path.basename(files[0]));
        assert.strictEqual('folder2', path.dirname(files[1]));
        assert.strictEqual('file.pdf', path.basename(files[1]));        
        cb();
    }).fail(function(message){
        assert(false, message);
        cb();
    }); 
    cb();
});