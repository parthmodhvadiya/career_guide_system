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

const app = express();
const PORT = 5000;
connectDB();
app.use(express.json());
app.use(cors());
app.use(router);
app.get("/api/jobs", async (req, res) => {
  try {
    const response = await axios.get("https://findwork.dev/api/jobs/", {
      headers: {
        Authorization: `Token 9f80308286177113e05064dfee2c75a3ba64c561`, // Replace with your API key
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
});

app.post('/saveprofile',authenticate,saveProfile);
app.get('/getprofiledetails',authenticate,getProfileDetails);
app.post('/uploadquizzes',authenticate,uploadQuiz)
app.get('/quiz',authenticate,getQuizList);
app.get('/quiz/:name',authenticate,getQuestions);
app.post('/quiz/:quiztype',authenticate,saveScore);
app.post('/personal',authenticate,personalityQuiz);
app.get('/getscore',authenticate,getScore);
app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});