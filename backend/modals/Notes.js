const mongoose = require("mongoose");
const { Schema } = mongoose;
const Noteschema = new mongoose.Schema({
  title: {
    type: Array,
    required: true,
  },
  description: {
    type: Array,
    required: true,
  },
  state: {
    type: Array,
    default: "to do",
  },
  tag: { type: Array, default: "work" },
  deadline: {
    type: Date,
  },
  
});

module.exports = mongoose.model("Notes", Noteschema);
