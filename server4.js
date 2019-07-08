var ref = require('http');

var process = function(req, res) {
    res.write('hello');
    res.write('hi!');
    res.end();
}

server = ref.createServer(process);

server.listen(2052);