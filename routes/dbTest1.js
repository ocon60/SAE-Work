//-------------------------TEST CONNECT TO DATABASE----------------------------------------------//
var pg = require('pg'); 

var conString = "postgres://eefyabuavpdzzd:hTM0hvHvKQvik9NxA9jY0iXjwu@ec2-174-129-218-200.compute-1.amazonaws.com:5432/d454hdqpfimhl9";

var testClient = new Client({user: 'eefyabuavpdzzd', database: 'd454hdqpfimhl9'});
client.on('drain', client.end.bind(client));
testClient.connect();

var testQuery = testClient.query("SHOW TABLES", function(err, result) {
	console.log(result);
});