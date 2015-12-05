
 //  Usage: greenhub run from to

 //  Options: 

	// -h, --help     output usage information
	// -v, --version  output the version number


exports.outputHelp = function() {
	var helpText = 
		'\n' +
		'  make contributions to GitHub, date format `YYYY-mm-dd`\n' +
		'\n' +
		'  Usage: greenhub run from to  [from < to) \r\n' +
		'\n' +
		'  Options: \n' +
		'\n' +
		'	-h, --help     output usage information\n' +
		'	-v, --version  output the version number\n\n' + 
		'  made with ❤ by FrankFan';

	console.log(helpText);
}

exports.outputUnknowMsg = function() {
	var unknowMsg = '\n  error: unknown command \n';
	console.log(unknowMsg);
}