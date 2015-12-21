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


var Promise = require("bluebird");
var exec = require('child_process').exec;
var github = require('./githubHelper');

var cmdStr = github.status();

exec(cmdStr, function(err, stdout, stderr) {
		if (err) {
			console.log('error: ' + stderr);
		} else {
			console.log(stdout);
			
		}
	});


// exec(cmdStr, function(err, stdout, stderr) {
// 	if (err) {
// 		console.log('error: ' + stderr);
// 	} else {
// 		console.log(stdout);
// 	}
// });

