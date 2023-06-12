const fs = require("fs");

const requestHandler = (req, res) => {
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

  if (url === "/message" && method === "POST") {
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      fs.appendFileSync("message.txt", message);
      res.statusCode = 303;
      res.setHeader("location", "/");
      return res.end();
    });
  }
};

// Way 1 to export
  module.exports = requestHandler;

// Way 2 to export
//   module.export = {
//     reqHanlder: requestHandler,
//     someElseProp: "It can be any thing"
//   }

// Way 3 to export
// module.exports.rqHandler = requestHandler;
// builtinModules.exports.someElseProp = "It can be any thing";

