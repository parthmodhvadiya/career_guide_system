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
import QuizResults from './components/customer/Marks';
import JobPrediction from './components/customer/JobPrediction';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
      },
    },
  },
});

const App = () => {
  const expiryTime = 2 * 60 * 60 * 1000; // 2 hours
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

  useEffect(() => {
    function isTokenValid(token) {
      try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = JSON.parse(atob(base64));
        const now = Math.floor(Date.now() / 1000);
        return jsonPayload.exp > now;
      } catch (error) {
        return false;
      }
    }

    const token = localStorage.token;
    if (!isTokenValid(token)) {
      localStorage.removeItem("token");
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.removeItem("token");
    }, expiryTime);

    return () => clearTimeout(timer);
  }, [expiryTime]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar name={formData.fullName} />
          <Box component="main" sx={{ flexGrow: 1, pt: 8 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/quiz" element={<Quizpage />} />
              <Route path="/quiz/:quizname" element={<Quiz />} />
              <Route path="/auth" element={<Auth setFormData={setFormData} />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/profiledetails" element={<UserProfileDisplay user={formData.profile} />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path="/chatbot" element={<Chatbot />} />
              <Route path='/quiz/personal/careerquiz' element={<CareerQuizForm />} />
              <Route path='/marks' element={<QuizResults />} />
              <Route path='/prediction' element={<JobPrediction />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;