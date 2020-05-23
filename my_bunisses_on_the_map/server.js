const createError = require("http-errors");
const express = require("express");
const path = require("path");
const logger = require("morgan");
const bodyParser = require("body-parser");

const routes = require("./routes/index");

const server = express();

server.use(logger("dev"));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

//server.set("views", path.resolve(__dirname, "views"));

server.use("/api/v1", routes);

server.listen(8888, function () {
  console.log("Server running at http://localhost:8888");
});
