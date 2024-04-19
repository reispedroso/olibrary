const User = require("../models/User");
const DateCorrection = require("../services/dateCorrection");
const passwordHashingService = require("../services/passwordHashingService");

const userController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  },

  getUserById: async (req, res) => {
    try {
      const userById = await User.findById(req.params.id);
      res.json(userById);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  },

  addUser: async (req, res) => {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: await passwordHashingService.hashPassword(req.body.password),
      createdAt: DateCorrection(Date.now()),
      updatedAt: null,
      deletedAt: null,
    });

    try {
      await newUser.save();
      res.json(newUser);
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  },

  updateUser: async (req, res) => {
    try {
      const userToUpdate = await User.updateOne(req.params.id);
      userToUpdate.name = req.body.name;
      userToUpdate.email = req.body.email;
      userToUpdate.password = req.body.password;
      userToUpdate.updatedAt = DateCorrection(Date.now());

      await userToUpdate.save();
      res.json(userToUpdate);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const userToDelete = await User.findById(req.params.id);
      userToDelete.deletedAt = DateCorrection(Date.now());
      await userToDelete.save();
      res.json(userToDelete);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  },
};

module.exports = userController;
