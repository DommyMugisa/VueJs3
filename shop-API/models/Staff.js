const mongoose = require("mongoose");

const staffSchema = new mongoose.Schema({
  firstname: { type: String, trim: true },
  lastname: { type: String, trim: true },
  email: { type: String, trim: true, unique: true },
  phone: { type: Number },
  role: { type: String, trim: true },
  department: { type: String, trim: true },
});

module.exports = mongoose.model("Staff", staffSchema);
