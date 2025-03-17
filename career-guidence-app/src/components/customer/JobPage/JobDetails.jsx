import React from "react";
import { Button } from "@mui/material";

const JobDetails = ({ job }) => {
  return (
    <div className="bg-white rounded-lg border p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center space-x-4">
        <img
          src={job.logo}
          alt={job.company_name}
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{job.role}</h3>
          <p className="text-gray-600">{job.company_name}</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-600">
          <span className="font-semibold">Location:</span>{" "}
          {job.location || "Remote"}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Employment Type:</span>{" "}
          {job.employment_type}
        </p>
      </div>
      <div className="mt-4">
        <p className="text-gray-600">{job.text}</p>
      </div>
      <div className="mt-6">
        <Button
          variant="contained"
          color="primary"
          href={job.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Apply Now
        </Button>
      </div>
    </div>
  );
};

export default JobDetails;