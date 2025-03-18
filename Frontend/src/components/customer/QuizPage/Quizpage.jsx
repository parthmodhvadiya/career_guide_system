import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingIcons from 'react-loading-icons'

const Quizpage = () => {
  const [quizList, setquizList] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchQuizDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/auth");
          return;
        }

        const response = await fetch("http://localhost:5000/quiz", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`, // Attach token
          },
        });

        if (!response.ok) throw new Error("Failed to fetch user profiles");

        const data = await response.json();
        console.log(data);
        setquizList(data);
      } catch (err) {
      } finally {
      }
    };

    fetchQuizDetails();
  }, []);

  const handleTakeQuiz = (quizType) => {
    navigate(`/quiz/${quizType}`);
  };
  return quizList === undefined ? (
    <div className="h-5/6 w-full justify-center items-center">
      <LoadingIcons.SpinningCircles />
    </div>
  ) : (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Choose Your Quiz
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {quizList.map((quiz, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              {quiz.title}
            </h2>
            <p className="text-gray-600 mb-6">{quiz.description}</p>
            <button
              onClick={() => handleTakeQuiz(quiz.type)}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              Give Test
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quizpage;
