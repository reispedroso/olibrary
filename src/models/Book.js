const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    name: String,
    author: String,
    description: String,
    releaseDate: Date,
});

module.exports = mongoose.model("Book", bookSchema);