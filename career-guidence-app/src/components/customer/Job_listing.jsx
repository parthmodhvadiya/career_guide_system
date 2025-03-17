import React, { useEffect, useState } from "react";
import axios from "axios";

const JobListings = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("/api/jobs").then((response) => setJobs(response.data));
  }, []);

  return (
    <div>
      <h2>Job Listings</h2>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default JobListings;