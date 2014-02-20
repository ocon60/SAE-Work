//---------------------------STATIC HTML SERVER-----------------------------------------------------//

var express = require('express'),
	app = express();
	port = parseInt(process.env.PORT, 10)|| 8080;

app.set('views', __dirname + '/rosterview');
app.engine('html', require('ejs').renderFile);

app.get("/", function(req,res) {
	res.render("index.html");	
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
