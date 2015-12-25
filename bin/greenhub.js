#!/usr/bin/env node

'use strict';

var help = require('../src/help.js');

var run = function(obj) {
	// greenhub run 20151011 20151021
	// greenhub -v | --version
	// greenhub -h | --help

	if (obj[0] === '-v' || obj[0] === '--version') {
		console.log('version is 1.0.0');
	} else if (obj[0] === '-h') {
		console.log('Useage:');
	    console.log('  -v --version [show version]');
	} else {
		help.help();
	}
}

//获取除第一个命令以后的参数，使用空格拆分
run(process.argv.slice(2)); 