const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("./public"));

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname,"./navbar-app/index.html"));
// });adding statis assets,SSR

app.all("*", (req, res) => {
  res.status(404).send('resource is not found!!!');
});
app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
