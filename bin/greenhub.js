#!/usr/bin/env node

'use strict';

var help = require('../src/help.js');
var 

var run = function(obj) {
	// greenhub run 20151011 20151021
	// greenhub -v | --version
	// greenhub -h | --help
	var option = obj[0];

	if (option) {
		if (option === '-v' || option === '--version') {
			console.log('1.0.0');
		} else if (option === '-h' || option === '--help') {
			help.outputHelp();
		} else if (option === 'run') {
			var from = obj[1],
				to   = obj[2];

			console.log('obj ', obj);
			console.log('from ', from);
			console.log('to ', to);
		} else {
			help.outputUnknowMsg();
		}
	} else {
		help.outputHelp();
	}
	
}

//获取除第一个命令以后的参数，使用空格拆分
run(process.argv.slice(2)); 