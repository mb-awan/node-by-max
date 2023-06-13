const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("In the first middleware");
  next();
});

app.use((req, res, next) => {
  console.log("In the second middleware");
  res.send("<h1>Hello from Express JS</h1>");
});

const PORT = 3000;
app.listen(PORT);
