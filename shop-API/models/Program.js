const mongoose = require("mongoose");

const programSchema = new mongoose.Schema({
  programname: { type: String, trim: true },
  description: { type: String, trim: true },
});

module.exports = mongoose.model("Program", programSchema);
