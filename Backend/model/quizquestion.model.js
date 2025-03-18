const mongoose = require('mongoose');
const quizQuestionsSchema = new mongoose.Schema({
    quizId: { type: mongoose.Schema.Types.ObjectId, ref: 'QuizList' }, // Reference to QuizList
    question: String,
    options: [String],
    answer: String,
  });
 
  module.exports = mongoose.model('QuizQuestion',quizQuestionsSchema);