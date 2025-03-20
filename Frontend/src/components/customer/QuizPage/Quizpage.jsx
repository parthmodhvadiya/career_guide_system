import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardActions, 
  Button, 
  CircularProgress,
  Alert,
  Container,
  Chip
} from '@mui/material';
import { styled } from '@mui/material/styles';
import QuizIcon from '@mui/icons-material/Quiz';
import TimerIcon from '@mui/icons-material/Timer';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[8],
  },
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
}));

const Quizpage = () => {
  const [quizList, setQuizList] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuizDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/auth");
          return;
        }

        const response = await fetch("http://localhost:5000/quiz", {
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
        const personalQuiz = {
          title: "Personal Details Quiz",
          description: "Complete your personal details to help us understand your background and preferences better.",
          label: "personal",
          quizquestion: []
        };
        setQuizList([personalQuiz, ...data]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuizDetails();
  }, [navigate]);

  const handleTakeQuiz = (quizType) => {
    if (quizType === 'personal') {
      navigate('/profile');
    } else {
      navigate(`/quiz/${quizType}`);
    }
  };

  if (loading) {
    return (
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center', 
          justifyContent: 'center', 
          minHeight: '100vh',
          gap: 2
        }}
      >
        <CircularProgress size={60} />
        <Typography variant="h6" color="text.secondary">
          Loading quizzes...
        </Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Container maxWidth="sm" sx={{ mt: 8 }}>
        <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>
        <Button variant="contained" onClick={() => window.location.reload()}>
          Try Again
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <QuizIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
        <Typography variant="h3" component="h1" gutterBottom>
          Choose Your Quiz
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Test your knowledge and track your progress
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {quizList?.map((quiz, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <StyledCard>
              <StyledCardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <EmojiEventsIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="h5" component="h2" gutterBottom>
                    {quiz.title}
                  </Typography>
                </Box>
                <Typography color="text.secondary" paragraph>
                  {quiz.description}
                </Typography>
                <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                  {quiz.label !== 'personal' && (
                    <>
                      <Chip 
                        icon={<TimerIcon />} 
                        label="5 min" 
                        size="small" 
                        color="primary" 
                        variant="outlined" 
                      />
                      <Chip 
                        label={`${quiz.quizquestion?.length || 0} questions`} 
                        size="small" 
                        color="secondary" 
                        variant="outlined" 
                      />
                    </>
                  )}
                </Box>
              </StyledCardContent>
              <CardActions sx={{ p: 3, pt: 0 }}>
                {quiz.label === 'personal'? <Button 
                  fullWidth 
                  variant="contained" 
                  onClick={() => handleTakeQuiz('personal/careerquiz')}
                  size="large"
                >
                  Fill Details
                  </Button>:<Button 
                  fullWidth 
                  variant="contained" 
                  onClick={() => handleTakeQuiz(quiz.label)}
                  size="large"
                >
Start Quiz
                  </Button>}
              </CardActions>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Quizpage;
