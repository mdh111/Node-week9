var express = require('express');
var cookieparser = require('cookie-parser');

var app = express();
app.use(cookieparser());

app.get("/makecookie", function(req, res){
    res.cookie("Cookie1", "First cookie in express");
    res.end("cookie created");
});

app.get("/readcookie", function(req, res){
    res.write(req.cookies.Cookie1);
    res.end();
});

app.get("/removecookie", function(req, res){
    res.clearCookie("Cookie1");
    res.end("Cookie removed");
});

app.listen(8000);