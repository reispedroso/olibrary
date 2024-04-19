const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/getallusers", userController.getAllUsers);
router.get("/getuserbyid/:id", userController.getUserById);
router.post("/adduser", userController.addUser);
router.delete("/deleteuser/:id", userController.deleteUser);

module.exports = router;