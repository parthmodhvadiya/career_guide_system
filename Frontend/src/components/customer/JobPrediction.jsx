import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Paper, CircularProgress, Alert, Button } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';

const JobPrediction = () => {
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPrediction = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/auth');
          return;
        }

        const response = await fetch('http://localhost:5000/predictjobrole', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch prediction');
        }

        const data = await response.json();
        setPrediction(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPrediction();
  }, [navigate]);

  if (loading) {
    return (
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '100vh',
        gap: 2
      }}>
        <CircularProgress size={60} />
        <Typography variant="h6" color="text.secondary">
          Analyzing your profile and quiz results...
        </Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '100vh',
        gap: 2
      }}>
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
        <Button 
          variant="contained" 
          onClick={() => navigate('/quiz')}
          startIcon={<WorkIcon />}
        >
          Complete Required Quizzes
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      p: 3
    }}>
      <Paper 
        elevation={3} 
        sx={{ 
          p: 4, 
          maxWidth: 600, 
          width: '100%',
          textAlign: 'center',
          background: 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)'
        }}
      >
        <WorkIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
        <Typography variant="h4" component="h1" gutterBottom>
          Your Career Prediction
        </Typography>
        
        {prediction && prediction.success ? (
          <>
            <Typography variant="h5" color="primary" sx={{ my: 3 }}>
              {prediction.predicted_role}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Based on your quiz results and profile information, we recommend this career path for you.
            </Typography>
            <Button 
              variant="contained" 
              onClick={() => navigate('/jobs')}
              sx={{ mt: 2 }}
            >
              Explore Job Opportunities
            </Button>
          </>
        ) : (
          <Alert severity="info" sx={{ mt: 2 }}>
            Please complete all required quizzes to get your career prediction.
          </Alert>
        )}
      </Paper>
    </Box>
  );
};

export default JobPrediction; 