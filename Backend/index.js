const express = require("express");
const axios = require("axios");
const router = express.Router();
const cors = require("cors");
const { saveProfile } = require("./routes/saveProfile");
const {authenticate} = require('./middleware/authenticate');
const { getProfileDetails } = require("./routes/getProfileDetails");
const { uploadQuiz, getQuizList,getQuestions } = require("./routes/quiz.route");
const connectDB = require("./config/db.config");
const { saveScore, personalityQuiz } = require("./routes/saveMark.route");
const {getScore} = require('./routes/getScore.route');
const {predictJobRole} = require('./routes/quiz.route');

const app = express();
const PORT = 5000;

// Connect to database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.post('/saveprofile', authenticate, saveProfile);
app.get('/getprofiledetails', authenticate, getProfileDetails);
app.post('/uploadquizzes', authenticate, uploadQuiz);
app.get('/quiz', authenticate, getQuizList);
app.get('/quiz/:name', authenticate, getQuestions);
app.post('/quiz/:quiztype', authenticate, saveScore);
app.post('/personal', authenticate, personalityQuiz);
app.get('/getscore', authenticate, getScore);
app.get('/predictjobrole', authenticate, predictJobRole);
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: err.message 
  });
});

// Handle 404 routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});