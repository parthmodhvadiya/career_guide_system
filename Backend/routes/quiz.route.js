const QuizList = require("../model/quizlist.model");
const QuizQuestions = require("../model/quizquestion.model");
const User = require("../model/user.model");

const axios = require("axios");
const UserQuiz = require("../model/userQuiz.model");


async function uploadQuiz(req, res) {
  try {
    const quizData = req.body;
    for (const quiz of quizData) {
      // Check if the quiz title already exists
      const existingQuiz = await QuizList.findOne({ title: quiz.title });

      if (existingQuiz) {
        console.log(
          `Quiz titled "${quiz.title}" already exists. Removing old data...`
        );

        // Delete old quiz questions linked to this quiz
        await QuizQuestions.deleteMany({ quizId: existingQuiz._id });

        // Delete old quiz title
        await QuizList.deleteOne({ _id: existingQuiz._id });
      }

      // Insert new QuizList entry
      const quizListEntry = new QuizList({
        title: quiz.title,
        label: quiz.label,
        description: quiz.description,
      });

      const savedQuiz = await quizListEntry.save(); // Save to get ObjectId

      // Insert new questions linked to this quiz
      const questionsToInsert = quiz.questions.map((q) => ({
        quizId: savedQuiz._id,
        question: q.question,
        options: q.options,
        answer: q.answer,
      }));

      await QuizQuestions.insertMany(questionsToInsert);

      console.log(`Added/Updated Quiz: ${quiz.title}`);
    }
    res.status(200).send({ message: "Quiz data uploaded successfully" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

async function getQuizList(req, res) {
  try {
    const quiz = await QuizList.find();
    res.status(200).send(quiz);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

async function getQuestions(req, res) {
  const name = req.params.name;
  console.log(name);
  try {
    const quizdata = await QuizList.findOne({ label: name });
    const quizQuestions = await QuizQuestions.find({ quizId: quizdata._id });
    res.status(200).send({ quizquestion: quizQuestions, quizdata: quizdata });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

const mapQuizScores = (quizData) => {
  console.log(quizData);
  return {
    "Acedamic percentage in Operating Systems": quizData.scores.os,
    "percentage in Algorithms": quizData.scores.algo,
    "Percentage in Programming Concepts": quizData.scores.pc,
    "Percentage in Software Engineering": quizData.scores.se,
    "Percentage in Computer Networks": quizData.scores.cn,
    "Percentage in Electronics Subjects": quizData.scores.es,
    "Percentage in Computer Architecture": quizData.scores.ca,
    "Percentage in Mathematics": quizData.scores.math,
    "Percentage in Communication skills": quizData.scores.pq.cs, // Default value, modify if needed
    "Logical quotient rating": quizData.scores.pq.lq,
    "hackathons": quizData.scores.pq.hack,
    "coding skills rating": quizData.scores.pq.coding,
    "public speaking points": quizData.scores.pq.ps,
    "self-learning capability?":quizData.scores.pq.slc === "yes" ? "Yes" : "No",
    "Extra-courses did": quizData.scores.pq.ec,
    "certifications": quizData.scores.pq.certs ? "Yes" : "No",
    "Interested subjects": quizData.scores.pq.int_sub,
    "interested career area ": quizData.scores.pq.int_career,
    "Job/Higher Studies?": quizData.scores.pq.job_hs,
    "Type of company want to settle in?": quizData.scores.pq.company,
    "worked in teams ever?":quizData.scores.pq.teamwork === "yes" ? "Yes" : "No",
  };
};

async function predictJobRole(req, res) {
  try {
    const email = req.email; // Get email from authenticated user
    const user = await User.findOne(email );
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    console.log(user);
    // Get user's quiz scores
    const quizData = await UserQuiz.findOne({ userID: user._id });
    console.log(quizData);
    if (!quizData) {
      return res.status(404).json({ error: 'Quiz data not found' });
    }

    // Prepare data for ML model
    const predictionData = {
      'Acedamic percentage in Operating Systems': quizData.scores.cs || 0,
      'percentage in Algorithms': quizData.scores.lq || 0,
      'Percentage in Programming Concepts': quizData.scores.coding || 0,
      'Percentage in Software Engineering': quizData.scores.cs || 0,
      'Percentage in Computer Networks': quizData.scores.cs || 0,
      'Percentage in Electronics Subjects': quizData.scores.cs || 0,
      'Percentage in Computer Architecture': quizData.scores.cs || 0,
      'Percentage in Mathematics': quizData.scores.lq || 0,
      'Percentage in Communication skills': quizData.scores.lq || 0,
      'Logical quotient rating': quizData.scores.lq || 0,
      'hackathons': quizData.scores.hack || 0,
      'coding skills rating': quizData.scores.coding || 0,
      'public speaking points': quizData.scores.lq || 0,
      'self-learning capability?': 'Yes',
      'Extra-courses did': 'Yes',
      'certifications': 'Yes',
      'Interested subjects': 'Machine Learning',
      'interested career area ': 'Data Science',
      'Job/Higher Studies?': 'Job',
      'Type of company want to settle in?': 'Product',
      'worked in teams ever?': 'Yes'
    };

    // Make request to Flask backend
    const response = await axios.post('http://localhost:5001/predict', predictionData);
    
    res.json(response.data);
  } catch (error) {
    console.error('Error in predictJobRole:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to get prediction from ML model'
    });
  }
}

module.exports = { uploadQuiz, getQuizList, getQuestions, predictJobRole };
