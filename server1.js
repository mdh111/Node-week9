var ref = require('http');

var myFunction = function(request, response) {
    console.log('hello from function');
}

server = ref.createServer(myFunction);

server.listen(4052);