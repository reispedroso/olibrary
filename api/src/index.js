const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

const bookRouter = require("./routes/bookRoutes");
const userRouter = require("./routes/userRoutes");

mongoose.connect(process.env.MONGODB_URI);

const app = express();
const port = 3000;

app.use(express.json());
app.use(bookRouter);
app.use(userRouter);

app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
