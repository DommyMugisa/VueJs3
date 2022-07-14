const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  coursename: { type: String, trim: true },
  description: { type: String, trim: true },
});

module.exports = mongoose.model("Course", courseSchema);
