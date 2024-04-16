import { Schema, model } from "mongoose";
import DateCorrection from "../services/dateCorrection";

const bookSchema = new Schema({
    name: String,
    author: String,
    description: String,
    releaseDate: DateCorrection(Date.now()),
});

const Book = model("Book", bookSchema);

export default Book;