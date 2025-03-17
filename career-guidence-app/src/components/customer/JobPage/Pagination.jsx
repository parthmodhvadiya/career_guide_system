import React from "react";
import { Button } from "@mui/material";

const Pagination = ({ next, previous, onPageChange }) => {
  return (
    <div className="flex justify-center space-x-4 my-8">
      <Button
        variant="contained"
        color="primary"
        disabled={!previous}
        onClick={() => onPageChange(previous)}
      >
        Previous
      </Button>
      <Button
        variant="contained"
        color="primary"
        disabled={!next}
        onClick={() => onPageChange(next)}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;