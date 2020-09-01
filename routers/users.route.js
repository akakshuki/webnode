var express = require("express");
var route = express.Router();
var db = require("../db");
const shortid = require("short-id");
const controllers = require("../controllers/user.controller");

route.get("/", controllers.index);

route.get("/search", controllers.search);

route.get("/create", controllers.createPage);

route.post("/create", controllers.create);

route.get("/:id", controllers.getById);

function middleware1(req, res, next) {
  next();
}
function middleware2(req, res, next) {
  res.send("hello");
}
route.get("/test", middleware1, middleware2);

module.exports = route;
