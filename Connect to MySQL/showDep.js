var dbcon = require('./dbCon.js');
var url = require('url');

module.exports = function showDepartmentRecords(req, res){
    var con = dbcon();
    var department = url.parse(req.url, true).query.dep;
    con.query('select personal.name,personal.email from personal,departments where personal.depid = departments.depid AND departments.name = "' + department + '"', function(err,data){
        if(err){
            console.log('An error in index request');
            console.log(err);
        } else {
            res.writeHead(200, {
                'Content-Type': 'text/html'
              });
            res.write('<table>');
            res.write('<style>table, th, td {border: 1px solid black;border-collapse: collapse;}</style>');
            res.write('<tr>');
            res.write('<th>Name</th>');
            res.write('<th>Email</th>');
            res.write('</tr>');
            data.forEach(element => {
                res.write('<tr>');
                res.write('<td>' + element.name + '</td>');
                res.write('<td>' + element.email + '</td>');
                res.write('</tr>');
            });
            res.write('</table>');
            res.end();
        }
    }
    )
};
