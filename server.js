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
