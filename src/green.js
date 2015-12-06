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


	// p0.then(function(stdout) {
	// 	console.log('execFileCmd ok');
	// 	callback && callback(stdout);
	// }, function(error) {
	// 	console.log('execFileCmd error ', error);
	// });

	console.info('done handleGitHub');
	

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




exports.execCmd = execCmd;