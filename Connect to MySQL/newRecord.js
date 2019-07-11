var dbcon = require('./dbCon.js');
var url = require('url');
var querystring = require('querystring');

module.exports = function newRecord(req, res){
    var con = dbcon();
    var data = '';
        var record = '';
        req.on('data', function(chuck){
            data += chuck;
        });
        req.on('end', function(){
            record = querystring.parse(data);
            var sql=`insert into personal values ('${record.pno}','${record.name}','${record.email}','${record.tel}','${record.depid}')`;
            con.query(sql, function(error, result){
                if(error) {
                    console.log(error);
                } else {
                    res.writeHead(200, {
                        'Content-Type': 'text/html'
                      });
                    res.write('<p>Record added!!</p><br>');
                    res.write('<a href="/">Home</a><br>');
                    res.end();
                }
            });
        });
}


