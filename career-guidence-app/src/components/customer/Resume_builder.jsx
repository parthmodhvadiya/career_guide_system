import React, { useState } from "react";

const ResumeBuilder = () => {
  const [name, setName] = useState("");
  const [skills, setSkills] = useState("");

  const handleGenerate = () => {
    alert(`Resume generated for ${name} with skills: ${skills}`);
  };

  return (
    <div>
      <h2>Resume Builder</h2>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Skills" value={skills} onChange={(e) => setSkills(e.target.value)} />
      <button onClick={handleGenerate}>Generate Resume</button>
    </div>
  );
};

export default ResumeBuilder;