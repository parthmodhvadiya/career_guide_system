import React, { useState } from "react";
import { auth, googleProvider } from "./firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Logged in successfully!");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signed up successfully!");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Logged in with Google!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>Sign Up / Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  );
};

export default Auth;