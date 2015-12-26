var moment = require('moment');
var now;

// datetime 2015-11-22
// date {month}{day}{hour}{minute}{year}
// sudo date 0318125013
// https://bensmann.no/changing-system-date-from-terminal-os-x-recovery/
exports.setDateTime = function(datetime) {
	now = moment();

	var formatedDateTime = moment().format('MMDDhhmmYY');
	var cmdStr = 'sudo date ' + formatedDateTime;
	return cmdStr;
}

// http://osxdaily.com/2012/07/04/set-system-time-mac-os-x-command-line/
exports.syncTime = function() {
	var cmdStr = 'sudo ntpdate -u time.apple.com';
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