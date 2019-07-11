var dbcon = require('./dbCon.js');
var url = require('url');
var querystring = require('querystring');

module.exports = function updateRecord(req, res){
    var con = dbcon();
    var pno = url.parse(req.url, true).query.pno;
    var name = url.parse(req.url, true).query.name;
    var email = url.parse(req.url, true).query.email;
    var tel = url.parse(req.url, true).query.tel;
    var depid = url.parse(req.url, true).query.depid;
    var sql='update personal set name = "' + name + '", email = "' + email + '", tel = ' + tel + ', depid = ' + depid + ' where pno = ' + pno;
    con.query(sql, function(error, result){
        if(error) {
            console.log(error);
        } else {
            res.writeHead(200, {
                'Content-Type': 'text/html'
                });
            res.write('<p>Record updated!</p><br>');
            res.write('<a href="/">Home</a><br>');
            res.end();
        }
    });
}


