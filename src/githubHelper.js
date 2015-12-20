
exports.newFile = function() {
	return 'touch aTempFile.js';
}

exports.addContent = function() {
	return 'echo "update" >> aTempFile.js';
}

exports.status = function() {
	return 'git status';
}

exports.add = function() {
	return 'git add .';
}

exports.commit = function(commitMsg) {
	return 'git commit -m "' + commitMsg + '"';
}

exports.pull = function() {
	return 'git pull --rebase';
}

exports.push = function() {
	return 'git push';
}

exports.rm = function(file) {
	return 'git rm ' + file;
}
