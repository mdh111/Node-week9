var express = require('express');
var app = express();

app.route('/testing')
    .get(function(req, res, next){
        //res will be sent by next function
        console.log(req.method);
        next();
    }, function(req, res) {
        res.send('Testing GET called from next');
    })
    .post(function(req, res){
        res.send('Testing POST called');
        console.log(req.method);
    })
    .put(function(req, res){
        res.send('Testing PUT called');
        console.log(req.method);
    });

    app.route('/anothertest')
    .get(function(req, res){
        res.send('Anothertest GET called');
        console.log(req.method);
    })
    .post(function(req, res){
        res.send('Anothertest POST called');
        console.log(req.method);
    })
    .put(function(req, res){
        res.send('Anothertest PUT called');
        console.log(req.method);
    });

app.listen(8080);