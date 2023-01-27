const express = require("express");
const app = express();
// const logger = require("./logger");
// const authorize = require("./authorize");

const morgan = require('morgan')
//In express everything goes in oder
// so do not use app.use affter the home page get or any where ,you can not get clg result which are ppassed in logger

app.use(morgan('combined'))
// app.use([logger,authorize]);
app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/api/products", (req, res) => {
  res.send("Product ");
});

app.get("/api/items", (req, res) => {
  res.send("Items");
});
app.listen(5000, () => {
  console.log("server is listhening on port 5000");
});
