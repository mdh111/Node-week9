var ref = require('http');

var process = function(request, response) {
    var theURL = request.url;
    if (theURL == '/'){
        console.log('Home page');
    } else if (theURL == '/login'){
        console.log('login page');
    } else {
        console.log('Unknown page!');
    }
}

server = ref.createServer(process);

server.listen(2051);