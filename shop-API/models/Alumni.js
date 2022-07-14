const mongoose = require("mongoose");

const alumniSchema = new mongoose.Schema({
  firstname: { type: String, trim: true },
  lastname: { type: String, trim: true },
  email: { type: String, trim: true, unique: true },
  phone: { type: Number },
  cohort: { type: String, trim: true },
});

module.exports = mongoose.model("Alumni", alumniSchema);
