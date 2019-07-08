var ref = require('http');
var URL = require('url');

var process = function(req, res) {
    var data = URL.parse(req.url, true);
    var no1 = parseInt(data.query.no1);
    var no2 = parseInt(data.query.no2);
    if(data.pathname == '/add') {
        res.write('Result: ' + (no1 + no2));
    } else if(data.pathname == '/sub') {
        res.write('Result: ' + (no1 - no2));
    }
    res.end();
}

server = ref.createServer(process);

server.listen(2052);