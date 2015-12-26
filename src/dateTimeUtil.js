var moment = require('moment');

// datetime 2015-11-22
// date {month}{day}{hour}{minute}{year}
// sudo date 0318125013
// https://bensmann.no/changing-system-date-from-terminal-os-x-recovery/
exports.setDateTime = function(datetime) {
	var formatedDateTime = moment(Date.parse(datetime)).format('MMDDhhmmYY');
	var cmdStr = 'date ' + formatedDateTime;
	return cmdStr;
}

// http://osxdaily.com/2012/07/04/set-system-time-mac-os-x-command-line/
exports.syncTime = function() {
	var cmdStr = 'ntpdate -u time.apple.com';
	return cmdStr;
}

/**
 * @param  {string}
 * @return {Boolean}
 * check input is a valid date format or not
 */
exports.isValid = function(date) {
	// return moment(Date.parse(date)).isValid();
	return moment(date, 'YYYY-M-D').isValid();
}

exports.getDate = function(date) {
	return moment(Date.parse(date)).get('date');
}

exports.isBefore = function(from, to) {
	return moment(from, 'YYYY-M-D').isBefore(to, 'YYYY-M-D');
}