'use strict';
var fs = require('fs');
var path = require('path');
var Q = require('q');
var JSONStream = require('JSONStream');

module.exports = function(jsb3){
    var deferred = Q.defer(),
        input = fs.createReadStream(jsb3),
        files = [];

    input.pipe(JSONStream.parse(['packages', true, 'files']))
        .on('data', function(data) {
            data.forEach(function(file) {
                files.push(path.join(path.dirname(jsb3), file.path, file.name));
            });
        })
        .on('end', function() {
            deferred.resolve(files);
        })
        .on('error', function(error) {
            deferred.reject(error);
        });

    return deferred.promise;
};