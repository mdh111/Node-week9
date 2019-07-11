var http = require('http');
var url = require('url');
var fs = require('fs');
var showrec = require('./showRecords.js');
var showdep = require('./showDep.js');
var mysql = require('./dbCon.js');
var deleterec = require('./deleteRecord.js');
var individualrec = require('./individualRecord.js');
var newrec = require('./newRecord.js');
var updaterec = require('./updateRecord.js');

var con = mysql();

function indexRequest(req, res){
    var path = url.parse(req.url).pathname;
    if(path == '/'){

        con.query("select * from departments", function(err,data){
            if(err){
                console.log('An error in index request');
                console.log(err);
            } else {
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                  });
                data.forEach(element => {
                    res.write('<a href="/showdep?depid=' + element.depid + '">Show People Working In ' + element.name + '</a><br>');
                });
            }
        }
        );

        fs.readFile('./index.html', function(err, data){
            if(err){
                res.writeHead(404);
                res.write('File not found');
            } else {
                res.write(data);
            }
            res.end();
        });
    } 
    
    else if(path == '/showallrecords'){
        showrec(res);
    } 
    
    else if(path == '/showdep'){
        showdep(req, res);
    } 
    
    else if(path == '/newrecord'){
        fs.readFile('./newrecord.html', function(err, data){
            if(err){
                res.writeHead(404);
                res.write('File not found');
            } else {
                res.write(data);
            }
            res.end();
        }); 
    } 
    
    else if(path == '/new'){
        newrec(req,res);
    } 
    
    else if(path == '/delete'){
        deleterec(req, res);
    }

    else if(path == '/individual'){
        individualrec(req, res);
    }

    else if(path == '/update'){
        updaterec(req, res);
    }

};

server = http.createServer(indexRequest);

server.listen(8000);