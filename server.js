var express = require('express'),
<<<<<<< HEAD
	app = express();
=======
        app = express();
>>>>>>> 2b1220954abdbbbfc153438eb7a6b7e5a639ce0f


app.use(express.static(__dirname + '/rosterview'));

<<<<<<< HEAD
app.listen(process.env.PORT || 8080);

console.log("App listening on port 8080");
=======
app.listen(process.env.PORT || 5000);

console.log("App listening on port 5000");
var d = new Date();
console.log("Date: "+d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDay()+" "+d.get);
>>>>>>> 2b1220954abdbbbfc153438eb7a6b7e5a639ce0f
