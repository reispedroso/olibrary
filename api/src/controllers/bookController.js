const Book = require("../models/Book");
const DateCorrection = require("../services/dateCorrection");

const bookController = {
  getAllBooks: async (req, res) => {
    try {
      const books = await Book.find();
      res.json(books);
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  },
  getBookById: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      res.json(book);
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  },
  addBook: async (req, res) => {
    try {
      const newBook = new Book({
        name: req.body.name,
        author: req.body.author,
        description: req.body.description,
        releaseDate: req.body.releaseDate,
      });

      const savedBook = await newBook.save();
      res.send(savedBook);
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  },

  updateBook: async (req, res) => {
    try {
      const updatedBook = await Book.findById(req.params.id);
      updatedBook.name = req.body.name;
      updatedBook.author = req.body.author;
      updatedBook.description = req.body.description;

      const savedBook = await updatedBook.save();
      res.json(savedBook);
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  },

  deleteBook: async (req, res) => {
    try {
      const deletedBook = await Book.deleteOne(req.params.id);

      const savedBook = await deletedBook.save();
      res.json(savedBook);
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  },

 
};

module.exports = bookController;
