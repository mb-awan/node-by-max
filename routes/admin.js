const path = require("path");
const express = require("express");
const rootDir = require("../utils/paths");

const router = express.Router();

router.get("/add-products", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "products.html"));
});

router.post("/products", (req, res) => {
  console.log(req.body);
  res.redirect("/admin/products/");
});

router.get("/products", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
