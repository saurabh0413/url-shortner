const mongoose = require("mongoose");

const shortId = require("shortid");

const ShortUrlSchema = new mongoose.Schema({
  full: { type: String, required: true },
  short: { type: String, required: true, default: shortId.generate },
  click: { type: Number, required: true, default: 0 },
});

const ShortModel = mongoose.model("shortmodel", ShortUrlSchema);
module.exports = { ShortModel };
