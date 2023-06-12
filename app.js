const http = require("http");
const routes = require("./routes"); // Whatever is in module.exports of routes will be pointed by this

// Working with Node Moduler System
const server = http.createServer(routes);

const PORT = 3000;
server.listen(3000);
