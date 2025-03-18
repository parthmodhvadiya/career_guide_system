import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

const UserProfileDisplay = () => {
  const [users, setUsers] = useState([{
    fullName: "Parth",
    email: "parthmodhvadiya15@gmail.com",
    phone: "79984651621",
    dob: "26-03-2005",
    gender: "male",
    city: "porbandar",
    state: "gujarat",
    country: "india",
    skills: "java"
  }]);
  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const querySnapshot = await getDocs(collection(db, "users"));
  //       const userData = querySnapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         ...doc.data(),
  //       }));
  //       setUsers(userData);
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //     }
  //   };

  //   fetchUsers();
  // }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">User Profiles</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div key={user.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{user.fullName}</h3>
            <p className="text-gray-600"><strong>Email:</strong> {user.email}</p>
            <p className="text-gray-600"><strong>Phone:</strong> {user.phone}</p>
            <p className="text-gray-600"><strong>DOB:</strong> {user.dob}</p>
            <p className="text-gray-600"><strong>Gender:</strong> {user.gender}</p>
            <p className="text-gray-600"><strong>Location:</strong> {user.city}, {user.state}, {user.country}</p>
            <p className="text-gray-600"><strong>Skills:</strong> {user.skills}</p>
            <p className="text-gray-600"><strong>Career Goals:</strong> {user.careerGoals}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfileDisplay;
