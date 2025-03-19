import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, CircularProgress } from "@mui/material";

const UserProfileDisplay = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/auth");
          return;
        }
        const response = await fetch("http://localhost:5000/getprofiledetails", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`, // Attach token
          },
        });
        if (!response.ok){
          throw new Error("Failed to fetch user profiles")};

        const data = await response.json();
        console.log(data);
        if(data.message==='User Details Not Founded')
        {
          navigate('/profile')
        }
        setUser(data); // ✅ Ensure backend returns a valid user object
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-700 animate-fade-in">
        User Profile
      </h2>

      {loading ? (
        <div className="flex flex-col items-center">
          <CircularProgress color="primary" />
          <p className="text-gray-600 mt-2">Fetching your profile...</p>
        </div>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : user ? (
        <div className="container mx-auto w-6/12">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 animate-fade-in">
            <h3 className="text-xl font-semibold mb-2 text-blue-800">{user.fullName || "User"}</h3>
            <p className="text-gray-600"><strong>Email:</strong> {user.email}</p>
            <p className="text-gray-600"><strong>Phone:</strong> {user.phone}</p>
            <p className="text-gray-600"><strong>DOB:</strong> {user.dob}</p>
            <p className="text-gray-600"><strong>Gender:</strong> {user.gender}</p>
            <p className="text-gray-600"><strong>Location:</strong> {user.city}, {user.state}, {user.country}</p>
            <p className="text-gray-600"><strong>Skills:</strong> {user.skills}</p>

            <div className="flex flex-row space-x-6 mt-5">
              <Button color="primary" variant="contained" onClick={() => navigate("/profile")}>
                Edit
              </Button>
              <Button color="error" variant="contained" onClick={handleLogOut}>
                Logout
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">No user data available.</p>
      )}
    </div>
  );
};

export default UserProfileDisplay;
