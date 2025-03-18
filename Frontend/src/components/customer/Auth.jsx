import React, { useState } from "react";
import { auth, googleProvider } from "../../firebase/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Function to store token and set a timeout to delete it after 2 hours
  const storeTokenWithExpiry = (token) => {
    localStorage.setItem('token', token); // Store the token in localStorage
    // const expiryTime = 2 * 60 * 60 * 1000; // 2 hours in milliseconds
    const expiryTime = 60*1000;
    setTimeout(() => {
      localStorage.removeItem('token'); // Remove the token after 2 hours
      alert("Your session has expired. Please log in again.");
      navigate('/auth'); // Redirect to the login page
    }, expiryTime);
  };

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const idToken = await user.getIdToken();
      storeTokenWithExpiry(idToken); // Store token with expiry
      navigate('/');
      alert("Logged in successfully!");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const idToken = await user.getIdToken();
      storeTokenWithExpiry(idToken); // Store token with expiry
      navigate('/profile');
      alert("Signed up successfully!");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      const user = userCredential.user;
      const idToken = await user.getIdToken();
      storeTokenWithExpiry(idToken); // Store token with expiry
      navigate('/');
      alert("Logged in with Google!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Sign Up / Login</h2>
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Login
          </button>
          <button
            onClick={handleSignUp}
            className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300"
          >
            Sign Up
          </button>
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300 flex items-center justify-center"
          >
            <svg
              className="w-5 h-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
              fill="currentColor"
            >
              <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
            </svg>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;