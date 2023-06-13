const express = require("express");

const router = express.Router();

router.use("/add-products", (req, res) => {
  res.send(`
      <form action = "/products" method = "POST">
          <input type="text" name = "prod-name"/>
          <button type = "submit">Add</button>
      </form>
      `);
});

router.post("/products", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

router.get("/products", (req, res, next) => {
  res.send("<h1>This is 'ALL Products' page</h1>");
});

module.exports = router;
