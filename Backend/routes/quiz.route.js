const QuizList = require('../model/quizlist.model');
const QuizQuestions = require('../model/quizquestion.model')


async function uploadQuiz(req,res) {
    try {
        const quizData = req.body;
        for (const quiz of quizData) {
          // Check if the quiz title already exists
          const existingQuiz = await QuizList.findOne({ title: quiz.title });
    
          if (existingQuiz) {
            console.log(`Quiz titled "${quiz.title}" already exists. Removing old data...`);
            
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
          const questionsToInsert = quiz.questions.map(q => ({
            quizId: savedQuiz._id,
            question: q.question,
            options: q.options,
            answer: q.answer,
          }));
    
          await QuizQuestions.insertMany(questionsToInsert);
    
          console.log(`Added/Updated Quiz: ${quiz.title}`);
        }
        res.status(200).send({message:"Quiz data uploaded successfully"});
      } catch (error) {
        res.status(500).send({error:error.message});
      }
  }

  async function getQuizList(req,res)
  {
    try {
      const quiz = await QuizList.find();
      res.status(200).send(quiz);
    } catch (error) {
      res.status(500).send({error:error.message});
    }
  }

  async function getQuestions(req,res)
  {
    const name = req.params.name;
    console.log(name);
    try {
      const quizdata = await QuizList.findOne({label:name});
      const quizQuestions = await QuizQuestions.find({quizId:quizdata._id});
      res.status(200).send({quizquestion:quizQuestions,quizdata:quizdata});
    } catch (error) {
      res.status(500).send({error:error.message});
    }
  }

  
  module.exports = {uploadQuiz,getQuizList,getQuestions};