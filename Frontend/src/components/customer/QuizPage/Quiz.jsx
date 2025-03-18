import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button, CircularProgress } from '@mui/material';

const Quiz = () => {
  const location = useLocation();
  const params = location.pathname.split('/');
  const quizType = params[params.length - 1]; 
  const navigate = useNavigate();

  const [quizData, setQuizData] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch quiz data from backend
    const fetchQuizData = async () => {
      const token = localStorage.token;
      if(!token)
      {
        navigate('/auth');
      }
      try {
        const response = await fetch(`http://localhost:5000/quiz/${quizType}`,
          {
            method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`, // Attach token
          },
          }
        );
        if (!response.ok) {
          throw new Error('Failed to fetch quiz data');
        }
        const data = await response.json();
        setQuizData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuizData();
  }, [quizType]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  if (!quizData || !quizData.quizquestion || quizData.quizquestion.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold text-gray-800">No Questions Available</h2>
        <p className="text-gray-600">Please check back later or select another quiz.</p>
        <Button variant="contained" color="primary" onClick={() => navigate('/')}>
          Go Back
        </Button>
      </div>
    );
  }

  const questions = quizData.quizquestion;

  const handleAnswerOptionClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {showScore ? (
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Quiz Completed!</h2>
          <p className="text-gray-600">
            You scored {score} out of {questions.length}
          </p>
          <Button
            variant="contained"
            color="success"
            onClick={() => navigate('/quiz')}
            sx={{ marginTop: 3 }}
          >
            Done
          </Button>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
          <div className="mb-6">
            <span className="text-gray-600">
              Question {currentQuestion + 1} of {questions.length}
            </span>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            {questions[currentQuestion].question}
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(option)}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
