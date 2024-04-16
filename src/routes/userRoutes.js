const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/getallusers", userController.getAllUsers);
router.post("/adduser", userController.addUser);

module.exports = router;