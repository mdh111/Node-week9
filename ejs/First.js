var express = require('express');

var app = express();
app.set('view engine', 'ejs');

app.get("/tadas", function(req, res){
    res.render('result.ejs', {
        'name':'Tadas',
        'physics':120,
        'chemistry':120,
        'maths':130
    });
});

app.get("/shafeeq", function(req, res){
    res.render('result.ejs', {
        'name':'Shafeeq',
        'physics':150,
        'chemistry':150,
        'maths':150
    });
});

app.listen(8000);