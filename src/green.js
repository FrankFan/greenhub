'use strict';

var exec = require('child_process').exec;
var spawn = require('child_process').spawn;
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
	execFile(cmdStr, {cwd: __dirname}, function(err, stdout, stderr) {
		if (err) {
			deferred.reject(err);
		} else {
			deferred.resolve(stdout);
		}
	});
	return deferred.promise.nodeify(callback);
}

exports.handleGitHub = function(callback) {

	var child = spawn('ls', ['-lh']);
	child.stdout.on('data', function(data) {
		console.log('-----spawn --  ', data);
	});

	child.on('exit', function (code) {
	   console.log('Child process exited with exit code '+code);
	});

	console.info('done handleGitHub');
}




exports.execCmd = execCmd;