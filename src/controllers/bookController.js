const Book = require("../models/Book");

const bookController = {
  getAllBooks: async (req, res) => {
    try {
      const books = await Book.find();
      res.json(books);
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  },

  addBook: async (req, res) => {
    const newBook = new Book({
      name: req.body.name,
      author: req.body.author,
      description: req.body.description,
      releaseDate: req.body.releaseDate,
    });

    try {
      const savedBook = await newBook.save();
      res.send(savedBook);
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  },
};

module.exports = bookController;
