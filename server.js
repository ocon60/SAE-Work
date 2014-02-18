//---------------STATIC HTML SERVER-----------------------------------------------------//

var express = require('express'),
  app = express();


app.use(express.static(__dirname + '/rosterview'));

app.listen(process.env.PORT || 5000);

console.log("App listening on port 5000");
var d = new Date();
console.log("Date: "+d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDay()+" "+d.get);

//----------------TEST CONNECT TO DATABASE----------------------------------------------------//

var pg = require('pg'); 
//or native libpq bindings
//var pg = require('pg').native

var conString = "postgres://eefyabuavpdzzd:hTM0hvHvKQvik9NxA9jY0iXjwu@ec2-174-129-218-200.compute-1.amazonaws.com:5432/d454hdqpfimhl9";

var client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT NOW() AS "theTime"', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].theTime);
    //output: Tue Jan 15 2013 19:12:47 GMT-600 (CST)
    client.end();
  });
});