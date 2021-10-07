const express = require("express");
const app = express();
const port = 4000;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const highscoreRoute = require("./routes/highscores");

app.use(express.json());
dotenv.config();

mongoose.connect(process.env.MONGODB, () => {
  console.log("connected to mongodb");
});

app.use("/api/highscores", highscoreRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
