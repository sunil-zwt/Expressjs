const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { name } = req.body;

  if (name) {
    res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("Please provide credential");
});

module.exports = router
