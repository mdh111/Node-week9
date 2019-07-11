var http = require('http');
var url = require('url');
var fs = require('fs');
var showrec = require('./showRecords.js')
var showdep = require('./showDep.js')
var mysql = require('./dbCon.js');
var mysql = require('mysql');

function indexRequest(req, res){
    var path = url.parse(req.url).pathname;
    if(path == '/'){
        fs.readFile('./index.html', function(err, data){
            if(err){
                res.writeHead(404);
                res.write('File not found');
            } else {
                res.write(data);
            }
            res.end();
        });
    } else if(path == '/showallrecords'){
        showrec(res);
    } else if(path == '/showdep'){
        showdep(req, res);
    } 
};


server = http.createServer(indexRequest);

server.listen(8000);