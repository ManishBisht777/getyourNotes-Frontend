const express = require("express");
const router = express.Router();

const Note = require("../modals/Notes");

// create a user using post /api/auth no auth required
router.post("/", (req, res) => {
  const note = Note(req.body);
  note.save();
  res.send(req.body);
});

module.exports = router;
