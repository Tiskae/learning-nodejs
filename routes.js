const fs = require("fs");

const requestHandler = (request, result) => {
  const { url, method } = request;

  if (url === "/") {
    result.setHeader("Content-Type", "text/html");
    result.write("<html>");
    result.write("<header><title>Enter a message></title></header>");
    result.write(
      "<body><form method='POST' action='/message'><input placeholder='Enter your message' type='text' name='message'/><button>Send</button></form></body>"
    );
    result.write("</html>");

    return result.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    request.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    return request.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];

      fs.writeFile("message.txt", message, (error) => {
        // console.log(err);
        result.statusCode = 302;
        result.setHeader("Location", "/");
        return result.end();
      });
    });
  }

  result.setHeader("Content-Type", "text/html");
  result.write("<html>");
  result.write("<header><title>My first app></title></header>");
  result.write("<body><h1>Hello from node.js app</h1></body>");
  result.write("</html>");

  result.end();
};

// module.exports = requestHandler;

// module.exports = {
//   handler: requestHandler,
//   someText: "Some hard coded text",
// };

// module.exports.handler = requestHandler;
// module.exports.someText = "Some hard coded text";

exports.handler = requestHandler;
exports.someText = "Some hard coded text";
