var express = require('express'),
<<<<<<< HEAD
	app = express();
=======
        app = express();
>>>>>>> 2b1220954abdbbbfc153438eb7a6b7e5a639ce0f

fs = require('fs');

app.use(express.static(__dirname + '/rosterview'));

<<<<<<< HEAD
app.use(function(dir, done) {
  var results = [];
  fs.readdir(dir, function(err, list) {
    if (err) return done(err);
    var pending = list.length;
    if (!pending) return done(null, results);
    list.forEach(function(file) {
      file = dir + '/bios' + file;
      fs.stat(file, function(err, stat) {
        if (stat && stat.isDirectory()) {
          walk(file, function(err, res) {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          results.push(file);
          console.log(results);
          if (!--pending) done(null, results);
        }
      });
    });
  });
});
=======
<<<<<<< HEAD
app.listen(process.env.PORT || 8080);

console.log("App listening on port 8080");
=======
app.listen(process.env.PORT || 5000);
>>>>>>> 90457746b0faa4b33eb7da44345ecd8cd2c0dc4a

app.listen(process.env.PORT || 8080);

console.log("App listening on port 8080");
var d = new Date();
console.log("Date: "+d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDay()+" "+d.get);
<<<<<<< HEAD







=======
>>>>>>> 2b1220954abdbbbfc153438eb7a6b7e5a639ce0f
>>>>>>> 90457746b0faa4b33eb7da44345ecd8cd2c0dc4a
