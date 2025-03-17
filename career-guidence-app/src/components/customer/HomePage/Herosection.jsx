import React from "react";
import { Button } from "@mui/material";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-10 bg-blue-50">
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl font-bold text-gray-800">
          Find Your Dream Career with Ease!
        </h1>
        <p className="text-gray-600">
          Take quizzes, explore job opportunities, and get personalized career guidance.
        </p>
        <div className="space-x-4">
          <Button variant="contained" color="primary">
            Get Started
          </Button>
          <Button variant="outlined" color="primary">
            Explore Careers
          </Button>
        </div>
      </div>
      <div className="md:w-1/2">
        <img
          src="https://img.freepik.com/free-vector/team-leader-teamwork-concept_74855-6671.jpg?t=st=1742235139~exp=1742238739~hmac=cd0a2965958e490ece651248b5f20102737106d4fe224081cc5b3f0c2d4a1942&w=1380"
          alt="Career Guidance"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default HeroSection;