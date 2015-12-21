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

var cmdStrNewFile = github.newFile();

exec(cmdStrNewFile, function(err, stdout, stderr) {
		if (err) {
			console.log('error: ' + stderr);
		} else {
			// console.log(stdout);
			var cmdStrAddContent = github.addContent();

			exec(cmdStrNewFile, function(err, stdout, stderr) {
					if (err) {
						console.log('error: ' + stderr);
					} else {
						// console.log(stdout);

						var cmdStrAdd = github.add();
						exec(cmdStrAdd, function(err, stdout, stderr) {
							if (err) {
								console.log('error: ' + stderr);	
							} else {
								var cmdStrCommit = github.commit('update');
								exec(cmdStrCommit, function(err, stdout, stderr) {
									if (err) {
										console.log('error: ' + stderr);	
									} else {
										
									}
								});

							}
						});
					}
				});
		}
	});



// exec(cmdStr, function(err, stdout, stderr) {
// 	if (err) {
// 		console.log('error: ' + stderr);
// 	} else {
// 		console.log(stdout);
// 	}
// });

