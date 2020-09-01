var db = require("../db");
const shortid = require("short-id");

module.exports.index = function (req, res) {
  res.render("user/users", { users: db.get("users").value() });
};

module.exports.search = (req, res) => {
  var name = req.query.name;
  var matchUser = users.filter((user) => {
    return user.name.toLowerCase().indexOf(name) !== -1;
  });
  res.render("index", { users: matchUser });
};

module.exports.create = (req, res) => {
  req.body.id = shortid.generate();
  db.get("users").push(req.body).write();
  res.redirect("/users");
};

module.exports.createPage = (req, res) => {
  res.render("user/userCreate");
};

module.exports.getById = (req, res) => {
  var id = req.params.id;
  var userFound = db.get("users").find({ id: id }).value();
  console.log(userFound);
  res.render("user/view", { user: userFound });
};
