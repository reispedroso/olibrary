const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    createdAt: {type: Date, default: null},
    updatedAt: {type: Date, default: null},
    deletedAt: {type: Date, default: null},
})

module.exports = mongoose.model("User", userSchema);