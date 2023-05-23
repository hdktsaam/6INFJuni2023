const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const urlSchema = new Schema({
  kort: String,
  lang: String,
  tags: [String],
});

const Url = mongoose.model("Url", urlSchema);

module.exports = Url;
