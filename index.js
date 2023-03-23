const express = require("express");
var cors = require("cors");
const app = express();

app.get("/", function (req, res) {
  res.json({ id: "yeon", pw: "1234" });
});

app.use(cors());

app.listen(3000);
