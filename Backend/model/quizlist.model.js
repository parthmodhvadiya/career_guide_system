const mongoose = require('mongoose');
const quizListSchema = new mongoose.Schema({
    title: String,
    label: String,
    description: String,
  });
 
  module.exports = mongoose.model('Quizlist',quizListSchema);