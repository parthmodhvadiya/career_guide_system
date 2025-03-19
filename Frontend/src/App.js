import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/customer/Navbar";
import Home from './components/customer/Home';
import Jobs from "./components/customer/JobPage/Jobs";
import Footer from "./components/customer/HomePage/Footer";
import Quizpage from './components/customer/QuizPage/Quizpage';
import Quiz  from "./components/customer/QuizPage/Quiz";
import Auth from "./components/customer/Auth";
import UserProfile from "./components/customer/Profile/UserProfile";
import { useEffect, useState } from "react";
import UserProfileDisplay from "./components/customer/Profile/UserProfileDisplay";
// import Dashboard from "./components/Dashboard";
// import Chatbot from "./components/Chatbot";
// import JobListings from "./components/JobListings";
// import ResumeBuilder from "./components/ResumeBuilder";
import CareerQuizForm from "./components/customer/CareerForm/CareerQuizForm";
import AboutPage  from "./components/customer/About";
import Chatbot from './components/customer/Chatbot';

const App = () => {
  const expiryTime = 2*60*60*1000;
  useEffect(() => {
    function isTokenValid(token) {
      try {
          const base64Url = token.split('.')[1]; // Get payload
          const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
          const jsonPayload = JSON.parse(atob(base64));
  
          const now = Math.floor(Date.now() / 1000); // Current time in seconds
          return jsonPayload.exp > now; // Check expiry
      } catch (error) {
          return false; // Invalid token
      }
  }
  
  const token = localStorage.token;
  if(!isTokenValid(token))
  {
    localStorage.removeItem("token"); 
  }
  }, [])
  
  setTimeout(() => {
    
    localStorage.removeItem("token"); 
  }, expiryTime);
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
  return (
    <Router>
      <Navbar name={formData.fullName}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/jobs" element={<Jobs/>}/>
          <Route path="/quiz" element={<Quizpage/>}/>
          <Route path="/quiz/:quizname" element={<Quiz />}/>
          <Route path="/auth" element={<Auth setFormData={setFormData}/>}/>
          <Route path="/profile" element={<UserProfile />}/>
          <Route path="/profiledetails" element={<UserProfileDisplay user={formData.profile}/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path='/careerquiz' element={<CareerQuizForm/>}/>
        {/* <Route path="/" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/jobs" element={<JobListings />} />
        <Route path="/resume" element={<ResumeBuilder />} /> */}
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;