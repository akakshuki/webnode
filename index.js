var express = require("express");
var db = require("./db");
var userRoutes = require("./routers/users.route");
var apiRoute = require("./routers/product.route");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "pug");
app.set("views", "./views");
app.use("/static", express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/users", userRoutes);
app.use("/api", apiRoute);
var port = 3000;
app.listen(port);
