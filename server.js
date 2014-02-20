//---------------------------STATIC HTML SERVER-----------------------------------------------------//

var express = require('express'),
	app = express(),
	routes = require('./routes')(app);

	port = parseInt(process.env.PORT, 10)|| 8080;


// SERVE ROSTER PAGE
app.set('views', __dirname + '/rosterview');
app.engine('html', require('ejs').renderFile);
app.get('/', function(req,res) {
	res.render("index.html");	
});


// APP CONFIGURATION
app.configure(function(){
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use(express.errorHandler({
    dumpExceptions: true, 
    showStack: true
  }));
  app.use(app.router);  
  app.use(express.static(__dirname + '/rosterview')); 
});

app.listen(port);
