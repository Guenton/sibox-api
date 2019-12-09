const express = require("express");
const loginAuth = express();

loginAuth.get("/", (req, res) => {
  const bearer = req.headers.authorization;
  console.log(req);
  res.send(bearer);
});

module.exports = loginAuth;
