const express = require("express");
const app = express();

const people = require("./route/people");
const auth = require("./route/auth");

// const path = require("path");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("./method-public"));
app.use(express.json());

app.use("/api/people", people);
app.use("/login", auth);


app.listen(5000, () => {
  console.log("server is listening on port 5000");
});
