const express = require("express");

const app = express();

const hostname = "localhost";
const port = 3000;

app.get("/", function (req, res) {
  res.send("<h1> Hello World</h1>");
});

app.listen(port, hostname, () => {
  console.log(`Hello Cuong, running server at http://${hostname}:${port}/`);
});
