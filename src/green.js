'use strict';

var exec = require('child_process').exec;
var github = require('./githubHelper');
var Q = require('q');


exports.execCmd = function(cmdStr, callback) {
	var deferred = Q.defer();
	exec(cmdStr, function(err, stdout, stderr) {
		if (err) {
			deferred.reject(err);
		} else {
			deferred.resolve(stdout);
		}
	});
	return deferred.promise.nodeify(callback);
}

exports.execCmdSudo = function(cmdStr, callback) {
	var deferred = Q.defer();
	exec('sudo ' + cmdStr, function(err, stdout, stderr) {
		if (err) {
			deferred.reject(err);
		} else {
			deferred.resolve(stdout);
		}
	});
	return deferred.promise.nodeify(callback);
}

// var dateStr = dateTimeUtil.setDateTime(from);
// var p = green.execCmdSudo(dateStr);
// p.then(function(err, stdout) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(stdout);
// 	}
// }).then(function() {
	
// })