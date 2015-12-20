var moment = require('moment');
var now;

// datetime 2015-11-22
// date {month}{day}{hour}{minute}{year}
// sudo date 0318125013
exports.setDateTime = function(datetime) {
	now = moment();

	var formatedDateTime = moment().format('MMDDhhmmYY');
	var cmdStr = 'sudo date ' + formatedDateTime;
	return cmdStr;
}