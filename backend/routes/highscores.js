const HighScore = require("../models/HighScore");
const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const highscores = await HighScore.find();
    res.json(highscores);
  } catch (err) {
    res.json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const highscore = await HighScore.findById(req.params.id);
    res.json(highscore);
  } catch (err) {
    res.json(err);
  }
});

router.post("/", async (req, res) => {
  const newHighScore = new HighScore(req.body);
  try {
    await newHighScore.save();
    res.json(newHighScore);
  } catch (err) {
    res.json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const highscore = await HighScore.findById(req.params.id);
    await highscore.updateOne({ $set: req.body });
    res.json("highscore updated");
  } catch (err) {
    res.json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const highscore = await HighScore.findById(req.params.id);
    await highscore.deleteOne();
    res.json("highscore deleted");
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
