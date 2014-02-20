//----------------------ROUTING INDEX--------------------------------//

// Dynamically includes all routes in a sub directory (routes/index.js)
// Credit goes to stackoverflow.com/users/1101154/kostia 
//                stackoverflow.com/users/2351/sam-corder


var fs = require('fs');

module.exports = function(app) {
	fs.readdirSync(__dirname).forEach(function(file) {
		if (file == "index.js") return;
		var name = file.substr(0, file.indexOf('.'));
		require('./' + name)(app);
	});
}



