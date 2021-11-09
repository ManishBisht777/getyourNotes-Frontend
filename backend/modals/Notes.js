const mongoose = require("mongoose");
const { Schema } = mongoose;
const Noteschema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    default: "to do",
  },
  tag: { type: String, default: "work" },
  deadline: {
    type: Date,
  },
});

module.exports = mongoose.model("Notes", Noteschema);
