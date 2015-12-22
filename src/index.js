/*
 * github-contributor
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
var github = require('./githubHelper');
var dateTimeUtil = require('./dateTimeUtil');


/*
 * createTmpFile -> oneDay -> addDay -> oneDay -> addDay -> resetDate -> push
 */


function createTmpFile() {
	console.log(1);
	var cmdStrNewFile = github.newFile('tmpFile.js');
	execCmd(cmdStrNewFile);
}

function oneDay() {
	console.log(2);

	var cmdStrAddContent = github.addContent();
	execCmd(cmdStrAddContent);

	console.log(3);

	var cmdStrAdd = github.add();
	execCmd(cmdStrAdd);

	console.log(4);

	var cmdStrCommit = github.commit('update');
	execCmd(cmdStrCommit);

	console.log(5);
}

function lastDay() {
	console.log(6);

	var cmdStrRm = github.rm('tmpFile.js');
	execCmd(cmdStrRm);

	console.log(7);

	var cmdStrAdd = github.add();
	execCmd(cmdStrAdd);

	console.log(8);

	var cmdStrCommit = github.commit('rm tmpFile');
	execCmd(cmdStrCommit);

	console.log(9);

	var cmdStrPull = github.pull();
	execCmd(cmdStrPull);

	console.log(10);

	var cmdStrPush = github.push();
	execCmd(cmdStrPush);
}


function execCmd(cmdStr, callback) {
	exec(cmdStr, function(err, stdout, stderr) {
		if (err) {
			console.log('error: ' + stderr);	
		} else {
			console.log('d');
			callback && callback(stdout);
		}
	});
}


function addDay() {
	execCmd('date', function(result) {
		console.log(result);
	});
	console.log('e');
}

function syncTime() {
	var cmdStr = dateTimeUtil.syncTime();
	execCmd(cmdStr, function() {
		console.log(result);
	});
}

// 
// createTmpFile();
// oneDay();
// addDay();
// lastDay();


addDay();