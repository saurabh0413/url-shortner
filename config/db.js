const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connection = mongoose.connect(
  "mongodb+srv://saurabh:saurabh@cluster0.cuutuys.mongodb.net/url-shortner"
);

module.exports = { connection };
