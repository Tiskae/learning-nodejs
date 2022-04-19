const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  //   process.exit(); // Quits the server

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<header><title>My first app></title></header>");
  res.write("<body><h1>Hello from node.js app</h1></body>");
  res.write("</html>");

  res.end();
});

server.listen(8080);
