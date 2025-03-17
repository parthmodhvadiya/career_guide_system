import React, { useState, useEffect } from "react";
import axios from "axios";
import JobDetails from "./JobDetails";
import Pagination from "./Pagination";
import { Grid2 } from "@mui/material";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);

  const fetchJobs = async (url = "http://localhost:5000/api/jobs") => {
    try {
      const response = await axios.get(url);
      setJobs(response.data.results);
      setNextPage(response.data.next);
      setPrevPage(response.data.previous);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handlePageChange = (url) => {
    fetchJobs(url);
  };

  return (
    <div className="xs-px-5 px-20">
    <h1 className="text-3xl font-bold text-center text-gray-800 my-8">
        Job Opportunities
      </h1>

      <Grid2 sx={{marginTop:10}}  container spacing={4}>
      
        {jobs.map((job) => (
          (job.text.length)<150 &&<Grid2 item size={4} className='h-auto'>
            <JobDetails key={job.id} job={job} />
          
          </Grid2>
        ))}
      </Grid2>
        <Pagination
          next={nextPage}
          previous={prevPage}
          onPageChange={handlePageChange}
        />
    </div>
  );
};

export default Jobs;
