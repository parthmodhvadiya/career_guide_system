import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Paper, CircularProgress, Alert, Button, Grid } from '@mui/material';
import QuizIcon from '@mui/icons-material/Quiz';

const Marks = () => {
  const [scores, setScores] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/auth');
          return;
        }

        const response = await fetch('http://localhost:5000/getscore', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          if (response.status === 404) {
            // If no quiz scores found, redirect to quiz section
            navigate('/quiz');
            return;
          }
          throw new Error('Failed to fetch quiz scores');
        }

        const data = await response.json();
        setScores(data.scores);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchScores();
  }, [navigate]);

  const quizTypes = [
    { 
      name: 'Problem Solving Quiz', 
      key: 'pq', 
      path: '/quiz/pq',
      subScores: ['cs', 'lq', 'hack', 'coding'],
      additionalFields: [
        { key: 'ps', label: 'Problem Solving' },
        { key: 'slc', label: 'School Level Coding' },
        { key: 'ec', label: 'Extra Curricular' },
        { key: 'certs', label: 'Certifications' },
        { key: 'int_sub', label: 'Interest in Subjects' },
        { key: 'int_career', label: 'Career Interest' },
        { key: 'job_hs', label: 'Job History' },
        { key: 'company', label: 'Company' },
        { key: 'teamwork', label: 'Teamwork' }
      ]
    },
    { name: 'Operating Systems', key: 'os', path: '/quiz/os' },
    { name: 'Algorithms', key: 'algo', path: '/quiz/algo' },
    { name: 'Programming Concepts', key: 'pc', path: '/quiz/pc' },
    { name: 'Software Engineering', key: 'se', path: '/quiz/se' },
    { name: 'Computer Networks', key: 'cn', path: '/quiz/cn' },
    { name: 'Electronics Subjects', key: 'es', path: '/quiz/es' },
    { name: 'Computer Architecture', key: 'ca', path: '/quiz/ca' },
    { name: 'Mathematics', key: 'math', path: '/quiz/math' }
  ];

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
          Loading your quiz scores...
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
          startIcon={<QuizIcon />}
        >
          Take Required Quizzes
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
          maxWidth: 800, 
          width: '100%',
          textAlign: 'center',
          background: 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)'
        }}
      >
        <QuizIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
        <Typography variant="h4" component="h1" gutterBottom>
          Your Quiz Scores
        </Typography>
        
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {quizTypes.map((quiz) => (
            <Grid item xs={12} key={quiz.key}>
              <Paper 
                elevation={2} 
                sx={{ 
                  p: 3, 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2
                }}
              >
                <Typography variant="h5" color="primary">
                  {quiz.name}
                </Typography>
                
                {scores && scores[quiz.key] !== undefined ? (
                  <>
                    {quiz.subScores ? (
                      // Handle PQ quiz with sub-scores and additional fields
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        {/* Sub-scores section */}
                        <Box>
                          <Typography variant="h6" color="primary" gutterBottom>
                            Technical Scores
                          </Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
                            {quiz.subScores.map((subKey) => (
                              <Box key={subKey} sx={{ textAlign: 'center', minWidth: 120 }}>
                                <Typography variant="subtitle2" color="text.secondary">
                                  {subKey.toUpperCase()}
                                </Typography>
                                <Typography variant="h6" color="primary">
                                  {scores[quiz.key][subKey]}%
                                </Typography>
                              </Box>
                            ))}
                          </Box>
                        </Box>

                        {/* Additional fields section */}
                        <Box>
                          <Typography variant="h6" color="primary" gutterBottom>
                            Additional Information
                          </Typography>
                          <Grid container spacing={2}>
                            {quiz.additionalFields.map((field) => (
                              <Grid item xs={12} sm={6} key={field.key}>
                                <Box sx={{ textAlign: 'left', p: 1 }}>
                                  <Typography variant="subtitle2" color="text.secondary">
                                    {field.label}
                                  </Typography>
                                  <Typography variant="body1">
                                    {scores[quiz.key][field.key] || 'Not specified'}
                                  </Typography>
                                </Box>
                              </Grid>
                            ))}
                          </Grid>
                        </Box>
                      </Box>
                    ) : (
                      // Handle other quizzes
                      <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h4" color="primary" sx={{ my: 2 }}>
                          {scores[quiz.key]}%
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Completed
                        </Typography>
                      </Box>
                    )}
                  </>
                ) : (
                  <Box sx={{ textAlign: 'center', py: 2 }}>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                      Not taken yet
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => navigate(quiz.path)}
                      startIcon={<QuizIcon />}
                    >
                      Take Quiz
                    </Button>
                  </Box>
                )}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};

export default Marks;
