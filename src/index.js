const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI);

const Books = mongoose.model("Books", {
  name: String,
  description: String,
  image_url: String,
  author: String,
});

const app = express();

const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/books", async (req, res) => {
  const book = new Books({
    name: req.body.name,
    description: req.body.description,
    image_url: req.body.image_url,
    author: req.body.author,
  });

  await book.save();
  res.send(book);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
