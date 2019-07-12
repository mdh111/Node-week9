var express = require('express');
var bodyparser = require('body-parser');

var app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", function(req, res){
    res.sendFile(__dirname + "//timesTableForm.html");
});

app.post("/result", function(req, res){
    var table = req.body.table;
    var range = req.body.range;
    var timesBy = 1;
        res.write('<h1>Result</h1>');
        while(timesBy <= range) {
            res.write('<p>' + table + ' x ' + timesBy + ' = ' + (table * parseInt(timesBy)) + '</p>');
            timesBy += 1;
        }
    res.end(); 
});

app.listen(8000);