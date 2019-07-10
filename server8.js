var ref = require('http');
var URL = require('url');

var process = function(req, res) {
    var data = URL.parse(req.url, true);
    res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      if(data.pathname == '/') {
        res.write('<h1>Select first number</h1>');
        for (i=1; i<=10; i++) {
            res.write('<a href="/second?No1=' + i + '">' + i + '</a><br>');
        }
    } else if(data.pathname == '/second') {
        res.write('<h1>Select second number</h1>');
        var firstNumber = data.query.No1;
        res.write('<h4>');
        res.write('First number: ' + firstNumber);
        res.write('</h4>');
        res.write('<br>');
        for (i=1; i<=10; i++) {
            res.write('<a href="/result?No1=' + firstNumber + '&No2=' + i + '">' + i + '</a><br>');
        } 
    } else if(data.pathname == '/result') {
        res.write('<h1>Select second number</h1>');
        var firstNumber = parseInt(data.query.No1);
        var secondNumber = parseInt(data.query.No2);
        res.write('<h4>');
        res.write('First number: ' + firstNumber);
        res.write('<br>');
        res.write('Second number: ' + secondNumber);
        res.write('<br>');
        res.write('</h4>');
        res.write('<h2>');
        res.write('Result of adding them together: ' + (firstNumber + secondNumber));
        res.write('</h2>');
    }

    res.end();
}

server = ref.createServer(process);

server.listen(3035);