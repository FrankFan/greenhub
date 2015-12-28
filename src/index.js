/*
 * greenhub
 * http://fy98.com
 *
 */

 // 思路：
 // 1. touch aTempFile.js
 // 2. echo "123" >> aTempFile.js
 // 3. git add aTempFile.js
 // 4. git commit -m 'a beautiful world'
 // 5. 修改系统时间  sudo date 0318125013
 // date {month}{day}{hour}{minute}{year}


var exec = require('child_process').exec;
var execFile = require('child_process').execFile;
var github = require('./githubHelper');
var green = require('./green');
var dateTimeUtil = require('./dateTimeUtil');
var moment = require('moment');


function execCmd(cmdStr, callback) {
	exec(cmdStr, function(err, stdout, stderr) {
		if (err) {
			console.log('error: ' + stderr);	
		} else {
			callback && callback(stdout);
		}
	});
}

function execCmdSudo(cmdStr, callback) {
	exec('sudo ' + cmdStr, function(err, stdout, stderr) {
		if (err) {
			console.log('error: ' + stderr);	
		} else {
			callback && callback(stdout);
		}
	});
}

function createTmpFile() {
	var cmdStrNewFile = github.newFile('tmpFile.js');
	execCmd(cmdStrNewFile);
}

function makeChanges() {
	var cmdStrAddContent = github.addContent();
	execCmd(cmdStrAddContent);
}

function gitStatus() {
	var cmdStrGitStatus = github.status();
	execCmd(cmdStrGitStatus, function(stdout) {
	});
}

function removeTmpFile() {
	var cmdStrRmFile = github.rm('tmpFile.js');
	execCmd(cmdStrRmFile);
}

function oneDay() {

	var cmdStrAddContent = github.addContent();
	execCmd(cmdStrAddContent);

	var cmdStrAdd = github.add();
	execCmd(cmdStrAdd);

	var cmdStrCommit = github.commit('update');
	execCmd(cmdStrCommit);

}

function lastDay() {

	var cmdStrRm = github.rm('tmpFile.js');
	execCmd(cmdStrRm);

	var cmdStrAdd = github.add();
	execCmd(cmdStrAdd);

	var cmdStrCommit = github.commit('rm tmpFile');
	execCmd(cmdStrCommit);

	var cmdStrPull = github.pull();
	execCmd(cmdStrPull);

	var cmdStrPush = github.push();
	execCmd(cmdStrPush);
}


function addDay() {
	execCmd('date', function(result) {
		console.log(result);
	});
}

function syncTime() {
	var cmdStr = dateTimeUtil.syncTime();
	execCmdSudo(cmdStr, function(result) {
		console.log(result);
	});
}

function setStartDate(date, callback) {
	var dateStr = dateTimeUtil.setDateTime(date);
	execCmdSudo(dateStr, function(result) {
		console.log(result);
		callback && callback();
	});
}


/**
 * @from  {string} 2015-01-01
 * @to    {string} 2015-02-11
 * @return {void}
 */
exports.run = function(from, to) {
	console.log(from);
	console.log(to);
	
	// 1.设置开始时间
	setStartDate(from, function() {

		while(!moment(Date.parse(from)).isSame(Date.parse(to))) {
			
			console.log(from);
			
			// 2.创建一个临时文件
			// createTmpFile();

			// 3.make some changes

			// 4.git add .

			// 5.git commit -m 'update'

			// 6. 日期自增
			from = moment(Date.parse(from)).add(1, 'd').format('YYYY-M-D');

		}


		// 7. 循环完毕，删除文件
		// removeTmpFile();
		// 8.git add & commit

		// 9.git push

		// 10.把时间改回来
		// syncTime();
	});	
}


/**
 * @from  {string} 2015-01-01
 * @to    {string} 2015-02-11
 * @return {void}
 */
exports.go = function(from, to) {
	console.log('come in go: ', from, to);

// syncTime();
// return;


	// 1.设置开始时间
	var dateStr = dateTimeUtil.setDateTime(from);
	var p = green.execCmdSudo(dateStr);
	p.then(function(stdout) {
		// 2.创建一个临时文件
		createTmpFile();

		while(!moment(Date.parse(from)).isSame(Date.parse(to))) {

			console.log(from);

			green.handleGitHub(function(stdout) {
				console.log('ppppp');

			});

			from = moment(Date.parse(from)).add(1, 'd').format('YYYY-M-D');


			// promise.then(function(stdout) {
			// 	console.log('promise ok', stdout);
			// 	from = moment(Date.parse(from)).add(1, 'd').format('YYYY-M-D');
			// }, function(error) {
			// 	console.log('promise err', error);
			// });

			// 3.make some changes
			// makeChanges();

			// gitStatus();

			// gitAddWithCommit('test update');

			// 4.git add .

			// 5.git commit -m 'update'

			// 6. 日期自增
			// from = moment(Date.parse(from)).add(1, 'd').format('YYYY-M-D');

		}
	});



}







