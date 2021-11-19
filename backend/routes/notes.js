const express = require("express");
const router = express.Router();

const Note = require("../modals/Notes");

const cors = require("cors");

router.use(cors());

// create a note using post /api/note no auth required
router.post("/addnote", (req, res) => {
  const note = Note(req.body);
  note.save();
  res.send(req.body);
});

// get all notes using get /api/note/getnotes

router.get("/getnotes", async (req, res) => {
  const note = await Note.find();
  res.json([note]);
});

module.exports = router;
