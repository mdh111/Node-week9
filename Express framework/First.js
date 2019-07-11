var express = require('express');
var app = express();

app.get('/home', function(req, res){
    res.send('Hello from home');
    console.log(req.method);
});

app.post('/add', function(req, res){
    res.send('Hello from add');
    console.log(req.method);
});

app.put('/update', function(req, res){
    res.send('Hello from update');
    console.log(req.method);
});

app.delete('/update', function(req, res){
    res.send('Hello from delete');
    console.log(req.method);
});

app.all('/all/:name', function(req, res){
    var name = req.params.name;
    console.log(name);
    console.log(req.method);
    res.send('Hello from: ' + name);
});

app.all('/add/:num1/:num2', function(req, res){
    var num1 = parseInt(req.params.num1);
    var num2 = parseInt(req.params.num2);
    var result = num1 + num2;
    res.send('The result is: ' + result);
});

app.listen(8080);