'use strict';

var exec = require('child_process').exec;
var execFile = require('child_process').execFile;
var github = require('./githubHelper');
var Q = require('q');


function execCmd(cmdStr, callback) {
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

function execFileCmd(cmdStr, callback) {
	var deferred = Q.defer();
	execFileCmd(cmdStr, function(err, stdout, stderr) {
		if (err) {
			deferred.reject(err);
		} else {
			deferred.resolve(stdout);
		}
	});
	return deferred.promise.nodeify(callback);
}

exports.handleGitHub = function() {
	var deferred = Q.defer();

	var p0 = execFileCmd('git.sh');
	p0.then(function(stdout) {
		console.log('execFileCmd stdout ', stdout);
	}, function(error) {
		console.log('execFileCmd error ', error);
	});

	// var cmdStrAddContent = github.addContent();
	// var p = execCmd(cmdStrAddContent);
	// p.then(function(stdout) {
	// 	console.log('----- make changes -----');
	// 	// process.exit();

	// 	var cmdStrAdd = github.add();
	// 	var p1 = execCmd(cmdStrAdd);
	// 	// console.log(p1.then);
	// 	p1.then(function(stdout) {
	// 		console.log('----- git add  -----');
	// 	}, function (error) {
	// 	    // We only get here if "foo" fails
	// 	    console.log('----- git add error  -----', error);
	// 	});
	// }, function(error) {
	// 	console.log('changes error');
	// });

	// console.log('------------------');
	// console.log('update file');
	// console.log('git add .');
	// console.log('git commit');
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




exports.execCmd = execCmd;