var ref = require('http');
var URL = require('url');

var process = function(req, res) {
    var data = URL.parse(req.url, true);
    var no1 = (data.query.no1);
    var no2 = (data.query.no2);
    if(data.pathname == '/add') {
        console.log('Result: ' + (no1 + no2));
    } else if(data.pathname == '/sub') {
        console.log('Result: ' + (no1 - no2));
    }
}

server = ref.createServer(process);

server.listen(2052);