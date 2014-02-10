fs = require('fs');
fs.readFile('');


var rosterfill() {
	fs.readdir('/bios', function (err,data) {
		if (err) {
			return console.log(err);
		}
		console.log(data);
		exports.rosterFill = function() {
			return data;
		}
	} )

}

