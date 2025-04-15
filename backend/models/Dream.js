const mongoose = require("mongoose");

const DreamSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
});
module.exports = mongoose.model("Dream", DreamSchema);
