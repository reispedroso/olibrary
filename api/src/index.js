const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

const bookRouter = require("./routes/bookRoutes");
const userRouter = require("./routes/userRoutes");

mongoose.connect(process.env.MONGODB_URI);


const app = express();



const port = process.env.PORT || 5000;

app.use(express.json());
app.use(bookRouter);
app.use(userRouter);

app.listen(port, () => {
  console.log(`🚀 Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});
