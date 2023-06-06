const http = require("http");
const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("This runs every tiem with a refresh");
  next();
});

app.use("/add-product", (req, res, next) => {
  app.response('This is "add-product" page');
});

app.listen(3030);
