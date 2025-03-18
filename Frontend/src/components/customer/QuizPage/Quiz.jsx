import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Quiz = () => {  
  const location = useLocation();
  const params= location.pathname.split('/');
  const quizType = params[params.length-1];;
  console.log();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const quizQuestions = {
    aptitude: [
      {
        question: 'What is 2 + 2?',
        options: ['3', '4', '5', '6'],
        answer: '4',
      },
      {
        question: 'What is the capital of France?',
        options: ['London', 'Paris', 'Berlin', 'Madrid'],
        answer: 'Paris',
      },
    ],
    personality: [
      {
        question: 'Do you enjoy social gatherings?',
        options: ['Always', 'Sometimes', 'Rarely', 'Never'],
        answer: '',
      },
      {
        question: 'How do you handle stress?',
        options: ['Meditation', 'Exercise', 'Talking to someone', 'Ignoring it'],
        answer: '',
      },
    ],
  };

  // Check if quizType is valid
  if (!quizQuestions[quizType]) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Invalid Quiz Type</h2>
          <p className="text-gray-600">The quiz you are trying to access does not exist.</p>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg mt-4 hover:bg-blue-600 transition-colors duration-300"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const questions = quizQuestions[quizType];

  const handleAnswerOptionClick = (selectedAnswer) => {
    if (quizType === 'aptitude' && selectedAnswer === questions[currentQuestion].answer) {
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