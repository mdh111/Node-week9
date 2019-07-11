var dbcon = require('./dbCon.js');
var url = require('url');

module.exports = function showDepartmentRecords(req, res){
    var con = dbcon();
    var pnumber = url.parse(req.url, true).query.pno;
    con.query('delete from personal where pno =' + pnumber, function(err,data){
        if(err){
            console.log('An error in index request');
            console.log(err);
        } else {
            res.writeHead(200, {
                'Content-Type': 'text/html'
              });
            res.write('<p>Record deleted</p>');
            res.write('<a href="/">Home</a><br>');
            res.end();
        }
    }
    )
};
