const http = require("http");
const { handler } = require("./routes");
const routes = require("./routes");

console.log(routes.someText);

const server = http.createServer(routes, handler);

server.listen(8080);
