const http = require("http");
const port = process.env.PORT || 8000;
const server = http.createServer(function (req, res) {
  res.end("hi");
});
server.listen(port);
