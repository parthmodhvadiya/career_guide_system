import { LocalFireDepartment } from '@mui/icons-material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Quizpage = () => {
  const navigate = useNavigate();

  const quizzes = [
    {
      type: 'aptitude',
      title: 'Aptitude Test',
      description: 'This quiz will test your logical reasoning and problem-solving skills.',
      buttonText: 'Take Aptitude Quiz',
    },
    {
      type: 'personality',
      title: 'Personality Test',
      description: 'This quiz will help you understand your personality traits better.',
      buttonText: 'Take Personality Quiz',
    },
  ];

  const handleTakeQuiz = (quizType) => {
    navigate(`/quiz/${quizType}`);
  };
  console.log(localStorage.token);
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Choose Your Quiz</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {quizzes.map((quiz, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">{quiz.title}</h2>
            <p className="text-gray-600 mb-6">{quiz.description}</p>
            <button
              onClick={() => handleTakeQuiz(quiz.type)}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              {quiz.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quizpage;