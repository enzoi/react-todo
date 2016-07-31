var moment = require('moment');
console.log(moment().format());

var now = moment();
console.log('Current timestamp', now.unix());

var timestamp = 1469957718;
var currentMoment = moment.unix(timestamp);

// January 3rd, 2016 @ 12:13 AM
console.log('current moment', currentMoment.format('MMMM Do, YYYY @ h:mm A'));
