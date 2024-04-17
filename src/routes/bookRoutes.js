const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");

router.get("/getallbooks", bookController.getAllBooks);
router.get("/getbookbyid/:id", bookController.getBookById);
router.post("/addbook", bookController.addBook);
router.put("/updatebook/:id", bookController.updateBook);
router.delete("/deletebook/:id", bookController.deleteBook);

module.exports = router;