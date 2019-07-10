var ref = require('http');

var process = function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
      });
    res.write('<HTML>');
    res.write('<CENTER>');
    res.write('<B>Welcome to</B>');
    res.write('<H1>Nationwide</H1>');
    res.write('</CENTER>');
    res.write('</HTML>');
    res.end();
}

server = ref.createServer(process);

server.listen(2052);