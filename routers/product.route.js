var express = require("express");
var route = express.Router();
var db = require("../db");
const shortid = require("short-id");
const controllers = require("../controllers/product.controller");

route.get("/testApi", controllers.index);

module.exports = route;
