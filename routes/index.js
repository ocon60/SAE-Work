//----------------------ROUTING INDEX--------------------------------//

// Dynamically includes all routes in a sub directory (routes/index.js)
// Credit goes to stackoverflow.com/users/1101154/kostia 
//                stackoverflow.com/users/2351/sam-corder
//                stackoverflow.com/users/1437845/tandrewnichols

function loadRoutes(folder){
    if (!folder){
        folder = __dirname + '/routes/';
    }

    fs.readdir(folder, function(err, files){
        var l = files.length;
        for (var i = 0; i < l; i++){
            var file = files[i];
            fs.stat(file, function(err, stat){
                if (stat && stat.isDirectory()){
                    loadRoutes(folder + '/' + file + '/');
                } else {
                    var dot = file.lastIndexOf('.');
                    if (file.substr(dot + 1) === 'js'){
                        var name = file.substr(0, dot);

                        // I'm also passing argv here (from optimist)
                        // so that I can easily enable debugging for all
                        // routes.
                        require(folder + name)(app, argv);
                    }
                }
            });
        }
    });
}



