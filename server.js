var express = require('express'),
  app = express();


app.use(express.static(__dirname + '/rosterview'));

app.listen(process.env.PORT || 5000);

console.log("App listening on port 5000");
var d = new Date();
console.log("Date: "+d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDay()+" "+d.get);

 var pg = require('pg');

pg.connect(process.env.DATABASE_URL, function(err ,client) {
	var query = client.query('SELECT * FROM rostertable');
	
	query.on('row', function(row) {
		console.log(JSON.stringify(row));
		
	});
}); 
