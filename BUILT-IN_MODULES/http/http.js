const http = require("http");

// console.log("http ::", http);

// create server
const server = http.createServer((req, res) => {
  console.log("req.method ::", req.method);
  console.log("req.url ::", req.url);

  switch (req.url) {
    case "/":
      res.write("your home page");
      break;
    case "/dashboard":
      res.write("your dashboard page");
      break;
    case "/about":
      res.write("your about page");
      break;
    case "/contact":
      res.write("your contact page");
      break;
    case "/service":
      res.write("your service page");
      break;
    default:
      res.write("page not found");
  }
  res.end();
});

// listen server
server.listen(8080);
