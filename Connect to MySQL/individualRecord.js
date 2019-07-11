var dbcon = require('./dbCon.js');
var url = require('url');

module.exports = function showDepartmentRecords(req, res){
    var con = dbcon();
    var pnumber = url.parse(req.url, true).query.pno;
    con.query('select * from personal where pno =' + pnumber, function(err,data){
        if(err){
            console.log('An error in index request');
            console.log(err);
        } else {
            res.writeHead(200, {
                'Content-Type': 'text/html'
              });
            res.write('<form action="/update" method="put">');
            res.write('<input type="hidden" name="pno" value="' + data[0].pno + '" readonly="readonly" /><br>');
            res.write('<label>Name</label>');
            res.write('<input type="text" name="name" value="' + data[0].name + '" /><br>');
            res.write('<label>Email</label>');
            res.write('<input type="text" name="email" value="' + data[0].email + '" /><br>');
            res.write('<label>Tel Number</label>');
            res.write('<input type="text" name="tel" value="' + data[0].tel + '" /><br>');
            res.write('<label>Department Id</label>');
            res.write('<input type="text" name="depid" value="' + data[0].depid + '" /><br>');
            res.write('<button>Update</button>');
            res.write('</form>');
            res.end();
        }
    }
    )
};
