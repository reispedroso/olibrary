const Book = require("../models/Book").default;

const bookController = {
  getAllBooks: async (req, res) => {
    const books = await Book.find();
    res.send(books);
  },

  addBook: async (req, res) => {
    const newBook = new Book({
      name: req.body.name,
      author: req.body.author,
      description: req.body.description,
      releaseDate: new Date(),
    });

    try {
      const savedBook = await newBook.save();
      res.send(savedBook);
    } catch (error) {
      res.status(500).send;
    }
  }

};

module.exports = bookController;