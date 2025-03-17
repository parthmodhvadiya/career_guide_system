import React from "react";

const Dashboard = ({ user }) => {
  return (
    <div>
      <h2>Welcome, {user.email}!</h2>
      <h3>Career Suggestions</h3>
      <ul>
        <li>Software Engineer</li>
        <li>Data Scientist</li>
        <li>Graphic Designer</li>
      </ul>
      <h3>Skill Assessments</h3>
      <p>Complete your assessments to get personalized recommendations.</p>
    </div>
  );
};

export default Dashboard;