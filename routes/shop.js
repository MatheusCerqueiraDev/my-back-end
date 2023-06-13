const path = require("path");

const express = require("express");

const router = express.Router();
const rootFile = require("../utils/paths");

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootFile, "views", "shop.html"));
});

module.exports = router;
