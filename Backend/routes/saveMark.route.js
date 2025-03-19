const mongoose = require("mongoose");
const { getUserIdformEMail } = require("./getProfileDetails");
const UserQuiz = require("../model/userQuiz.model");

const saveScore = async (req, res) => {
  const email = req.userEmail;
  try {
    const user = await getUserIdformEMail(email);
    const mark = await UserQuiz.findOne({ userID: user._id });
    if (!mark) {
      try {
        const newQuizEntry = new UserQuiz({
          userID: user._id,
          scores: {},
        });

        await newQuizEntry.save();
        res
          .status(201)
          .json({ message: "Quiz data initialized for user", newQuizEntry });
      } catch (error) {
        res.status(500).json({ error: "Error creating quiz entry" });
      }
    }
    const score = req.body;
    const quizType = req.params.quiztype;
    const updatedQuiz = await UserQuiz.findOneAndUpdate(
        { userID:user._id },
        { $set: { [`scores.${quizType}`]: score.score } },
        { new: true }
      );
      
    res.json({ message: "Quiz score updated", updatedQuiz });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

async function personalityQuiz(req,res) {
    const email = req.userEmail;
    try {
      const user = await getUserIdformEMail(email);
      const userID = user._id;
      const pq = req.body;
      const mark = await UserQuiz.findOne({userID});
      console.log(pq);
      if (mark) {
        // Update existing data
        mark.scores = { ...mark.scores, pq:pq };
        console.log(mark.scores);
        await mark.save();
        return res.json({ message: "Quiz data updated successfully", mark });
      } else {
        // Create new entry if not found
        userQuiz = new UserQuiz({ userID, scores });
        await userQuiz.save();
        return res.status(201).json({ message: "Quiz data created successfully", userQuiz });
      }
    } catch (error) {
      res.status(500).json({ error: "Server error", details: error.message });
    }
}

module.exports = {saveScore,personalityQuiz};