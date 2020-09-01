var db = require("../db");
const mysql = require("../mysql");

module.exports.index = function (req, res) {
  let sql = "SELECT * FROM users";
  let query = mysql.query(sql, (err, users) => {
    if (err) throw err;
    res.json(users);
  });
};
