var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "sa",
  password: "123456",
  database: "demo1",
});
 

module.exports = connection;
