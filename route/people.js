const express = require("express");
const router = express.Router();

const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePeople,
  deletePerson,
} = require("../controller/people");
// router.get("/");

// router.post("/");

// router.put("/:id");

// router.delete("/:id");

router.route('/').get(getPeople).post(createPerson);
router.route('/postman').post(createPersonPostman);
router.route('/:id').put(updatePeople).delete(deletePerson)

module.exports = router;
