//---------------------------STATIC HTML SERVER-----------------------------------------------------//

var express = require('express'),
	app = express();
	port = parseInt(process.env.PORT, 10)|| 5000;

app.get("/", function(req,res) {
	res.redirect("rosterview/index.html");	
});

app.configure(function(){
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use(express.static(__dirname + '/rosterview'));
  app.use(express.errorHandler({
    dumpExceptions: true, 
    showStack: true
  }));
  app.use(app.router);
});

app.listen(port);


//-------------------------TEST CONNECT TO DATABASE----------------------------------------------//

var pg = require('pg'); 
//or native libpq bindings
//var pg = require('pg').native
var conString = "postgres://eefyabuavpdzzd:hTM0hvHvKQvik9NxA9jY0iXjwu@ec2-174-129-218-200.compute-1.amazonaws.com:5432/d454hdqpfimhl9";

var testClient = new Client({user: 'eefyabuavpdzzd', database: 'd454hdqpfimhl9'});
client.on('drain', client.end.bind(client));
testClient.connect();

var testQuery = testClient.query("SHOW TABLES", function(err, result) {
	console.log(result);
})

