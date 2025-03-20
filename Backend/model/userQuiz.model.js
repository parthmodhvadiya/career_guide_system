const mongoose = require('mongoose');

const userQuizSchema = new mongoose.Schema({
    userID: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    scores: {
      os: { type: Number,   }, // Operating Systems
      algo: { type: Number,   }, // Algorithms
      pc: { type: Number,   }, // Programming Concepts
      se: { type: Number,   }, // Software Engineering
      cn: { type: Number,   }, // Computer Networks
      es: { type: Number,   }, // Electronics Subjects
      ca: { type: Number,   }, // Computer Architecture
      math: { type: Number,   }, // Mathematics
      pq:{
        cs: { type: Number,   }, // Communication Skills
        lq: { type: Number,   }, // Logical Quotient
        hack: { type: Number,   }, // Hackathons
        coding: { type: Number,   }, // Coding Skills
        ps: { type: Number,   }, // Public Speaking
        slc: { type: String, default: "" }, // Self-Learning Capability (yes/no)
        ec: { type: String, default: "" }, // Extra Courses
        certs: { type: String, default: "" }, // Certifications
        int_sub: { type: String, default: "" }, // Interested Subjects
        int_career: { type: String, default: "" }, // Interested Career Area
        job_hs: { type: String, default: "" }, // Job or Higher Studies
        company: { type: String, default: "" }, // Preferred Company Type
        teamwork: { type: String, default: "" }, // Worked in Teams (yes/no)
      }
    },
  });

  module.exports = mongoose.model('UserQuiz',userQuizSchema);