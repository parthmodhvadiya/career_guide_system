import React from "react";
import { Button } from "@mui/material";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const JobSlider = () => {
  const jobs = [
    {
      title: "Software Engineer at Google",
      description: "Join a world-class team and work on cutting-edge projects.",
    },
    {
      title: "Data Scientist at Amazon",
      description: "Work with big data and machine learning to solve real-world problems.",
    },
    {
      title: "Product Manager at Microsoft",
      description: "Lead innovative projects and shape the future of technology.",
    },
    {
        title: "Software Engineer at Google",
        description: "Join a world-class team and work on cutting-edge projects.",
      },
      {
        title: "Data Scientist at Amazon",
        description: "Work with big data and machine learning to solve real-world problems.",
      },
      {
        title: "Product Manager at Microsoft",
        description: "Lead innovative projects and shape the future of technology.",
      },
  ];
const items = jobs.map((job,index) => {
    return (<div key={index} className="h-full p-6 bg-white justify-self-center mx-10 flex flex-col rounded-lg shadow-sm">
        <img src="https://pub-f8c0307ce82b4885975558b04e13a858.r2.dev/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen-1920x706.jpg" className="bg-cover bg-top w-full h-full" alt="#"/>
        <h3 className="text-xl font-semibold">{job.title}</h3>
        <p className="text-gray-600" sx={{marginTop:2}}>{job.description}</p>
        <Button variant="contained" color="primary" sx={{marginTop:3}} className="mt-4">
          Apply Now
        </Button>
      </div>);
});

  return (
    <div className="py-12 bg-blue-50">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Explore Job Opportunities
      </h2>
      <div className="flex p-20 px-10">
        
      <AliceCarousel
        items={items}
        infinite
        // autoPlay
        autoPlayInterval={2000}
        disableDotsControls
        responsive={{
          0: { items: 1 },
          600: { items: 3 },
        }}
      />
      </div>
    </div>
  );
};

export default JobSlider;