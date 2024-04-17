const User = require("../models/User");
const DateCorrection = require("../services/dateCorrection");
const passwordHashingService = require("../services/passwordHashingService");

const userController = {

    getAllUsers: async (req, res) => {
        const users = await User.find();
        res.json(users);
    },

    addUser: async (req, res) => {
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: await passwordHashingService.hashPassword(req.body.password),
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