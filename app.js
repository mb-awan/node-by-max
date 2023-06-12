const http = require("http");

const server = http.createServer((req, res) => {
  // Understanding the request
  console.log({
    reqUrl: req.url,
    reqMethod: req.method,
    reqHeader: req.headers,
  });

  // Sending the response

  res.setHeader('content-type','text/html');
  res.write('<html>');
  res.write('<head><title>My first response</title></head>');
  res.write('<body><h1>Hello from Node.js</h1></body>')
  res.write('</html>');
  console.log({res});
  res.end();
  console.log({res});
//   process.exit(); // Playing with event Loop
});

const PORT = 3000;
server.listen(3000);
