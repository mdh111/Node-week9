var express = require('express');
var app = express();

app.use(function(req, res, next){
    console.log('Middleware!!');
    next();
});

app.use("/", function(req, res, next){
    console.log('Middleware, just "/"');
    next();
});

app.use("/login", function(req, res, next){
    console.log('Middleware, "/login"');
    next();
});

app.get("/", function(req, res, next){
    //res will be sent by next function
    next();
    }, function(req, res) {
        res.send('Hello from home page');
}); 
   
app.get("/login", function(req, res){
    res.send('Hello from login page');
});

app.get("/logout", function(req, res){
    res.send('Hello from logout page');
});

app.listen(8080);