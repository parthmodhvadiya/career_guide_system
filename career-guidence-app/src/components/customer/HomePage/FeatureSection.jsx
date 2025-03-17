import React from "react";
import { FaSearch, FaBriefcase, FaUserGraduate, FaChartLine } from "react-icons/fa";

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaSearch className="text-4xl text-blue-500" />,
      title: "Career Quizzes",
      description: "Discover your strengths and interests with our personalized career quizzes.",
    },
    {
      icon: <FaBriefcase className="text-4xl text-blue-500" />,
      title: "Job Opportunities",
      description: "Explore thousands of job openings tailored to your skills and interests.",
    },
    {
      icon: <FaUserGraduate className="text-4xl text-blue-500" />,
      title: "Expert Guidance",
      description: "Get personalized advice from career experts to shape your future.",
    },
    {
      icon: <FaChartLine className="text-4xl text-blue-500" />,
      title: "Track Your Progress",
      description: "Monitor your career growth and achievements over time.",
    },
  ];

  return (
    <div className="py-12 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        What We Offer
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-10">
        {features.map((feature, index) => (
          <div key={index} className="text-center p-6 bg-gray-50 rounded-lg shadow-sm">
            <div className="flex justify-center">{feature.icon}</div>
            <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;