import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/customer/Navbar";
import Home from './components/customer/Home';
import { useState } from "react";
import Jobs from "./components/customer/JobPage/Jobs";
import Footer from "./components/customer/HomePage/Footer";
// import Auth from "./components/Auth";
// import Dashboard from "./components/Dashboard";
// import Quiz from "./components/Quiz";
// import Chatbot from "./components/Chatbot";
// import JobListings from "./components/JobListings";
// import ResumeBuilder from "./components/ResumeBuilder";

const App = () => {
  
  const [darkMode, setDarkMode] = useState(false);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/jobs" element={<Jobs/>}/>
        {/* <Route path="/" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/jobs" element={<JobListings />} />
        <Route path="/resume" element={<ResumeBuilder />} /> */}
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;