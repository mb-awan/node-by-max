const express = require("express");

const app = express();

// app.use has many overloads out which we can use app.use([PATH-optional],callback) to manage different routes

app.use("/all-products", (req, res, next) => {
  res.send("<h1>This is 'ALL Products' page</h1>");
});

app.use("/", (req, res, next) => {
  res.send("<h>Hello from express js</h1>");
});

const PORT = 3000;
app.listen(PORT);
