import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const UserProfile = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    dob: "",
    gender: "",
    city: "",
    state: "",
    country: "",
    skills: ""
  });
  const navigate = useNavigate();
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.token;
    const response = await fetch("http://localhost:5000/saveprofile", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "authorization": `Bearer ${token}`, // Attach token
      },
      body: JSON.stringify({ formData }),
  });
  navigate('/profiledetails');
  };

  return (
    <div className="container min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full mx-5">
        <h2 className="text-2xl font-semibold text-center mb-6">Create Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="fullName" placeholder="Full Name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange} required />
          
          <input type="text" name="phone" placeholder="Phone"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange} required />
          
          <input type="date" name="dob"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange} required />
          
          <select name="gender"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          
          <input type="text" name="city" placeholder="City"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange} required />
          
          <input type="text" name="state" placeholder="State"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange} required />
          
          <input type="text" name="country" placeholder="Country"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange} required />

          <input type="text" name="skills" placeholder="Skills (comma-separated)"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange} required />


          <button type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
            Create Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
