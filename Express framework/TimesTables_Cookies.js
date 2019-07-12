var express = require('express');
var cookieparser = require('cookie-parser');

var app = express();
app.use(cookieparser());

app.get("/", function(req, res){
    res.clearCookie("table");
    res.write('<h1>Select times table</h1>');
    for (i=1; i<=10; i++) {
        res.write('<a href="/selectRange/' + i + '">' + i + '</a><br>');
    }
    res.end();
});

app.get("/selectRange/:num", function(req, res){
    res.cookie("table", req.params.num);
    res.write('<h1>Select range</h1>');
    for (i=10; i<=100; i+=10) {
        res.write('<a href="/showTimesTable/' + i + '">' + i + '</a><br>');
    } 
    //res.write(req.cookies.table);
    res.end(); 
});

app.get("/showTimesTable/:range", function(req, res){
    var table = req.cookies.table;
    var range = req.params.range;
    if (table) {
        var timesBy = 1;
        res.write('<h1>Result</h1>');
        while(timesBy <= range) {
            res.write('<p>' + table + ' x ' + timesBy + ' = ' + (parseInt(table) * parseInt(timesBy)) + '</p>');
            timesBy += 1;
        }
    res.end();
    } else {
        res.redirect("/");
    }
});

app.get(["/selectRange","/showTimesTable"], function(req, res){
    res.redirect("/");
})

app.listen(8000);