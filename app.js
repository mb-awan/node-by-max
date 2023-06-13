const http = require("http");

const express = require("express");

const app = express();

// we can use middleware here.

app.use((req, res, next) => {
  // app.use is used to use middlewares
  // This middle ware will be executed on each request
  // nex is used to redirect the request to the next middleware in a sequence
  console.log("In the first middleware");
  next(); // will call the next middleware on this line and when the control comeback then execute the next line
});

app.use((req, res, next) => {
  console.log("In the second middleware");
});

const server = http.createServer(app);

const PORT = 3000;
server.listen(PORT);
