import { Schema } from "mongoose";

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    createdAt: {type: Date, default: null},
    updatedAt: {type: Date, default: null},
    deletedAt: {type: Date, default: null},
})