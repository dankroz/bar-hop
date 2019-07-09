const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const barSchema = new Schema({
  name: { type: String, required: true },
  latitude: { type: Number, required: true },
  longtitude: { type: Number, required: true },
  type: String
});

const Bar = mongoose.model("Bar", barSchema);

module.exports = Bar;