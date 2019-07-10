var ref = require('http');
var URL = require('url');

var process = function(req, res) {
    var data = URL.parse(req.url, true);
    res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      if(data.pathname == '/') {
        res.write('<h1>My home page</h1>');
        res.write('<a href="/qa">QA Consulting<\a><br>');
        res.write('<a href="/about">About me</a><br>');
        res.write('<a href="/nbs">Nationwide</a><br>');
    } else if(data.pathname == '/qa') {
        res.write('<h1>QA Consulting</h1>');
        res.write('<a href="/">Home</a><br>');
        res.write('<a href="/about">About me</a><br>');
        res.write('<a href="/nbs">Nationwide</a><br>');
    } else if(data.pathname == '/about') {
        res.write('<h1>About me</h1>');
        res.write('<a href="/">Home</a><br>');
        res.write('<a href="/qa">QA Consulting</a><br>');
        res.write('<a href="/nbs">Nationwide</a><br>');
    } else if(data.pathname == '/nbs') {
        res.write('<h1>Nationwide</h1>');
        res.write('<a href="/">Home</a><br>');
        res.write('<a href="/qa">QA Consulting</a><br>');
        res.write('<a href="/about">About me</a><br>');
    }
    res.end();
}

server = ref.createServer(process);

server.listen(3035);