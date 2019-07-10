var mysql = require('mysql');

module.exports = function connection(){
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "tdp"
  });

  con.connect(function(err) {
    if (err) {
      console.log("Connection error");
      console.log(err);
    } else {
      console.log("Connected!");
    }
  });

  return con;
}
