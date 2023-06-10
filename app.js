const http = require("http");

// Method 1 : Using Separate request listener function
// function rqListner(req, res) {
	// console.log({req, res});
// }
// const server = http.createServer(rqListner);

// Method 2 : Passing request Listener function as direct argument
// const server = http.createServer(function(req,res){
// 	console.log({req, res});
// });

// Method 3: Using Arrow Function
const server = http.createServer((req,res) => {
	console.log({req, res});
})

const PORT = 3000;
server.listen(3000);
