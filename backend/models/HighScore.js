const mongoose = require("mongoose");

const HighScoreSchema = new mongoose.Schema(
  {
    score: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("HighScore", HighScoreSchema);
