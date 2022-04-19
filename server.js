const http = require("http");

const rqListener = (req, res) => {
  console.log(req);
};

const server = http.createServer(rqListener);

server.listen(8080);
