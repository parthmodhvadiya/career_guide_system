import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/customer/Navbar";
import Home from './components/customer/Home';
import Jobs from "./components/customer/JobPage/Jobs";
import Footer from "./components/customer/HomePage/Footer";
import Quizpage from './components/customer/QuizPage/Quizpage';
import Quiz  from "./components/customer/QuizPage/Quiz";
import Auth from "./components/customer/Auth";
import UserProfile from "./components/customer/UserProfile";
import UserProfileDisplay from "./components/customer/UserProfileDisplay";
// import Auth from "./components/Auth";
// import Dashboard from "./components/Dashboard";
// import Quiz from "./components/Quiz";
// import Chatbot from "./components/Chatbot";
// import JobListings from "./components/JobListings";
// import ResumeBuilder from "./components/ResumeBuilder";

const App = () => {
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/jobs" element={<Jobs/>}/>
        <Route path="/quiz" element={<Quizpage/>}/>
        <Route path="/quiz/:quizname" element={<Quiz />}/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/profile" element={<UserProfile/>}/>
        <Route path="/profiledetails" element={<UserProfileDisplay/>}/>
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