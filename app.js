const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true })); // To parse request body before each middleware

app.use("/add-product", (req, res) => {
  res.send(`
    <form action = "/products" method = "POST">
        <input type="text" name = "prod-name"/>
        <button type = "submit">Add</button>
    </form>
    `);
});

app.use("/products", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/all-products", (req, res, next) => {
  res.send("<h1>This is 'ALL Products' page</h1>");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello from express js</h1>");
});

const PORT = 3000;
app.listen(PORT);
