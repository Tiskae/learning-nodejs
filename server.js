const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<header><title>Enter your BVN></title></header>");
    res.write(
      "<body><form method='POST' action='/message'><input placeholder='Enter your BVN' type='text' name='bvn'/><button>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    fs.writeFileSync("message.txt", "DUMMY");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<header><title>My first app></title></header>");
  res.write("<body><h1>Hello from node.js app</h1></body>");
  res.write("</html>");

  res.end();
});

server.listen(8080);
