const http = require("http");
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  const body = [];
  if (url === "/") {
    res.write(`
	<html>
		<head>
			<title>Save Message</title>
		</head>
		<body>
			<h1>Enter The Message</h1>
			<form action = '/message' method = 'POST'>
				<input type = 'text' name = 'message'>
				<button type = 'submit' >Save</button>
			</form>
		</body>
	</html>
	`);
	return res.end();
  }

  if(url === '/message' && method === 'POST') {
	req.on('data', chunk => {
		body.push(chunk);
	})

	req.on('end', () => {
		const parsedBody = Buffer.concat(body).toString();
		console.log(parsedBody);
		const message = parsedBody.split('=')[1];
		fs.appendFileSync('message.txt', message);
		res.statusCode = 303;
		res.setHeader('location', '/');
		return res.end();
	})
  }
});

const PORT = 3000;
server.listen(3000);
