import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const QuizResults = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token"); // Use getItem() properly
    if (!token) {
      navigate('/auth'); // Redirect if no token
      return; // Prevent further execution
    }

    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/getscore", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) throw new Error("Failed to fetch data");

        const result = await response.json();
        
        setData(result.scores);
        
      } catch (error) {
        console.error("Error fetching scores:", error);
      }
    };

    fetchData(); // Fetch data only if token exists
  }, [navigate]); // Dependency array includes `navigate`

  if (!data) {
    return <div className="text-center text-xl font-semibold">Loading...</div>;
  }
  const  scores  = data;
  const quizzes = { ...scores };
  delete quizzes.pq; // Handling PQ separately
  return (
    scores==null?<></>:
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Quiz Results</h2>

      {/* PQ Section */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h3 className="text-xl font-semibold mb-2">Problem Solving & Coding Quiz (PQ)</h3>
        <p className="text-gray-700">CS: {scores.pq.cs}</p>
        <p className="text-gray-700">LQ: {scores.pq.lq}</p>
        <p className="text-gray-700">Hacking: {scores.pq.hack}</p>
        <p className="text-gray-700">Coding: {scores.pq.coding}</p>
      </div>

      {/* Other Quizzes */}
      {Object.entries(quizzes).map(([key, value]) => (
        <div key={key} className="bg-white p-4 rounded-lg shadow-md mb-2 flex justify-between items-center">
          <p className="text-lg font-medium">{key.toUpperCase()} Score: {value}</p>
          {value === 0 && (
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
              Take Quiz
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default QuizResults;
