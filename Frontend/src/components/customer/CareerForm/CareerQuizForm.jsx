import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import PersonalDetails from "./PersonalDetails";
import SkillsAssessment from "./SkillsAssessment";
import CareerPreferences from "./CareerPreferences";

const schema = yup.object().shape({
  cs: yup.number().min(0).max(100).required("Required"), // Communication Skills
  lq: yup.number().min(0).max(10).required("Required"), // Logical Quotient
  hack: yup.number().min(0).required("Required"), // Hackathons
  coding: yup.number().min(0).max(10).required("Required"), // Coding Skills
  ps: yup.number().min(0).max(10).required("Required"), // Public Speaking
  slc: yup.string().required("Required"), // Self-Learning Capability
  ec: yup.string().required("Required"), // Extra Courses
  certs: yup.string().required("Required"), // Certifications
  int_sub: yup.string().required("Required"), // Interested Subjects
  int_career: yup.string().required("Required"), // Career Interest
  job_hs: yup.string().required("Required"), // Job or Higher Studies
  company: yup.string().required("Required"), // Preferred Company Type
  teamwork: yup.string().required("Required"), // Worked in Teams
  job_role: yup.string().required("Required"), // Suggested Job Role
});

const CareerQuizForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleDataOnSubmit = async (data) => {
    try {
      const token = localStorage.token;
      const response = await fetch('http://localhost:5000/personal', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      console.log(result);
      
      // After successful submission, navigate to the quiz component
      navigate('/careerquiz');
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    }
  };

  const onSubmit = (data) => {
    handleDataOnSubmit(data);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Career & Skills Quiz</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <PersonalDetails register={register} errors={errors} />
        <SkillsAssessment register={register} errors={errors} />
        <CareerPreferences register={register} errors={errors} />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md mt-4 hover:bg-blue-600 transition-colors"
        >
          Submit and Continue to Quiz
        </button>
      </form>
    </div>
  );
};

export default CareerQuizForm;
