const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    name: String,
    author: String,
    description: String,
    releaseDate: Date,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;