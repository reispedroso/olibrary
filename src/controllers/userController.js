const User = require("../models/User");
const mongoose = require("mongoose");
const DateCorrection = require("../services/dateCorrection");


const userController = {

    getAllUsers: async (res) => {
        const users = await User.find();
        res.json(users);
    },

    addUser: async (req, res) => {
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            createdAt: DateCorrection(Date.now()),
            updatedAt: null,
            deletedAt: null,
        })

        try {
            await newUser.save();
            res.json(newUser);
        } catch(error) {
            return res.status(400).json({message: error});
        }
    }
}

module.exports = userController;