const express = require("express");

const app = express();

// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded( { extended: true})); is deprecated and built in now in express
// will parse each request body to js object before each request

app.use(express.urlencoded({ extended: true })); // Latest

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
