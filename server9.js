var ref = require('http');
var URL = require('url');

var process = function(req, res) {
    var data = URL.parse(req.url, true);
    res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      if(data.pathname == '/') {
        res.write('<h1>Select times table</h1>');
        for (i=1; i<=10; i++) {
            res.write('<a href="/range?num=' + i + '">' + i + '</a><br>');
        }
    } else if(data.pathname == '/range') {
        var num = data.query.num;
        res.write('<h2><a href="/">Home</a><br></h2>');
        res.write('<h3>Select times table of: ' + num + '</h3>');
        for (i=10; i<=100; i+=10) {
            res.write('<a href="/result?num=' + num + '&range=' + i + '">' + i + '</a><br>');
        } 
    } else if(data.pathname == '/result') {
        var num = data.query.num;
        var range = data.query.range;
        res.write('<h2><a href="/">Home</a></h2>');
        res.write('<h2><a href="/range?num=' + data.query.num + '">Select Range</a><br></h2>');
        var timesBy = 1;
        while(timesBy <= range) {
            res.write('<p>' + num + ' x ' + timesBy + ' = ' + (parseInt(num) * parseInt(timesBy)) + '</p>');
            timesBy += 1;
        }
        
    }

    res.end();
}

server = ref.createServer(process);

server.listen(3035);