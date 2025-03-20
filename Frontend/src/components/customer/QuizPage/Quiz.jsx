import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { 
  Button, 
  CircularProgress, 
  Paper, 
  Typography, 
  Box, 
  LinearProgress,
  Alert,
  Fade,
  Card,
  CardContent,
  Grid,
  Container
} from "@mui/material";
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TimerIcon from '@mui/icons-material/Timer';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: 800,
  width: '100%',
  margin: 'auto',
  borderRadius: 16,
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
}));

const OptionButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  padding: theme.spacing(2),
  borderRadius: 12,
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
}));

const Quiz = () => {
  const location = useLocation();
  const params = location.pathname.split("/");
  const quizType = params[params.length - 1];
  const navigate = useNavigate();
  const [quizData, setQuizData] = useState(null);
  const [zero, setzero] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes per quiz
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleQuizSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleQuizSubmit = async () => {
    try {
      const token = localStorage.token;
      let percent = 0;
      if (!zero) {
        percent = ((score + 1) * 100) / quizData.quizquestion.length;
      }
      const response = await fetch(`http://localhost:5000/quiz/${quizType}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ score: percent }),
      });
      await response.json();
    } catch (error) {
      setError("Failed to submit quiz results");
    }
  };

  useEffect(() => {
    const fetchQuizData = async () => {
      const token = localStorage.token;
      if (!token) {
        navigate("/auth");
        return;
      }
      try {
        const response = await fetch(`http://localhost:5000/quiz/${quizType}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch quiz data");
        }
        const data = await response.json();
        setQuizData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuizData();
  }, [quizType, navigate]);

  const handleAnswerOptionClick = async (option) => {
    if (isAnswerSubmitted) return;
    
    setSelectedAnswer(option);
    setIsAnswerSubmitted(true);

    if (option === quizData.quizquestion[currentQuestion].answer) {
      setzero(false);
      setScore(score + 1);
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < quizData.quizquestion.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedAnswer(null);
        setIsAnswerSubmitted(false);
      } else {
        handleQuizSubmit();
        setShowScore(true);
      }
    }, 1000);
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <CircularProgress size={60} />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>
        <Button variant="contained" onClick={() => navigate("/quiz")}>
          Go Back to Quiz List
        </Button>
      </Box>
    );
  }

  if (!quizData?.quizquestion?.length) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <Typography variant="h4" gutterBottom>No Questions Available</Typography>
        <Typography color="text.secondary" gutterBottom>
          Please check back later or select another quiz.
        </Typography>
        <Button variant="contained" onClick={() => navigate("/quiz")}>
          Go Back to Quiz List
        </Button>
      </Box>
    );
  }

  const questions = quizData.quizquestion;
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <Container 
      maxWidth={false} 
      sx={{ 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        py: 4,
        px: { xs: 2, sm: 3, md: 4 }
      }}
    >
      <StyledPaper elevation={3}>
        {showScore ? (
          <Fade in={true}>
            <Box sx={{ textAlign: 'center', width: '100%' }}>
              <EmojiEventsIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
              <Typography variant="h4" gutterBottom>
                Quiz Completed!
              </Typography>
              <Typography variant="h5" color="primary" gutterBottom>
                Your Score: {score} out of {questions.length}
              </Typography>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                Percentage: {((score / questions.length) * 100).toFixed(1)}%
              </Typography>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate("/quiz")}
                sx={{ mt: 3 }}
              >
                Back to Quiz List
              </Button>
            </Box>
          </Fade>
        ) : (
          <Box sx={{ width: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h6" color="text.secondary">
                Question {currentQuestion + 1} of {questions.length}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <TimerIcon color="primary" />
                <Typography variant="h6" color="primary">
                  {formatTime(timeLeft)}
                </Typography>
              </Box>
            </Box>

            <LinearProgress 
              variant="determinate" 
              value={progress} 
              sx={{ height: 8, borderRadius: 4, mb: 4 }}
            />

            <Card sx={{ mb: 4 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {questions[currentQuestion].question}
                </Typography>
                <Grid container spacing={2}>
                  {questions[currentQuestion].options.map((option, index) => (
                    <Grid item xs={12} key={index}>
                      <OptionButton
                        fullWidth
                        variant={selectedAnswer === option ? 
                          (option === questions[currentQuestion].answer ? "contained" : "outlined") : 
                          "outlined"
                        }
                        color={selectedAnswer === option ? 
                          (option === questions[currentQuestion].answer ? "success" : "error") : 
                          "primary"
                        }
                        onClick={() => handleAnswerOptionClick(option)}
                        disabled={isAnswerSubmitted}
                      >
                        {option}
                      </OptionButton>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Box>
        )}
      </StyledPaper>
    </Container>
  );
};

export default Quiz;
