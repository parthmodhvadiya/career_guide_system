import React from "react";

const Recommendations = ({ careers }) => {
  return (
    <div>
      <h2>Career Recommendations</h2>
      <ul>
        {careers.map((career, index) => (
          <li key={index}>{career}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendations;