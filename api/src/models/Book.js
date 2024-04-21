const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  author: String,
  description: String,
  category: String,
  releaseDate: Date,
  url: String
});

module.exports = mongoose.model("Book", bookSchema);
