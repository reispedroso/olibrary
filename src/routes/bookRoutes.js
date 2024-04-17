const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");

router.get("/getallbooks", bookController.getAllBooks);
router.post("/addbook", bookController.addBook);
router.put("/updatebook/:id", bookController.updateBook);

module.exports = router;