const path = require("path");

const express = require("express");

const router = express.Router();

const rootFile = require("../utils/paths");

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.sendFile(
    path.join(rootFile, "views", "add-product.html")
  );
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
