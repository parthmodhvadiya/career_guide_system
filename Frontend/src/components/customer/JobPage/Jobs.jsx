import React, { useState, useEffect } from "react";
import axios from "axios";
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  TextField, 
  InputAdornment,
  IconButton,
  CircularProgress,
  Alert,
  Chip,
  Card,
  CardContent,
  CardActions,
  Button,
  Stack,
  Pagination,
  useTheme,
  Divider
} from "@mui/material";
import { 
  Search, 
  LocationOn, 
  Work, 
  Business, 
  AttachMoney,
  AccessTime,
  Language,
  WorkOutline
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s, box-shadow 0.2s',
  borderRadius: theme.spacing(1.5),
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[6],
  },
}));

const RAPID_API_KEY = 'f6b1e482efmsh2e4b4888c70d001p1a7addjsn5338190ebf7c';
const RAPID_API_HOST = 'jsearch.p.rapidapi.com';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();
  const theme = useTheme();

  const fetchJobs = async (query = 'software developer', pageNum = 1) => {
    try {
      setLoading(true);
      setError(null);
      
      const options = {
        method: 'GET',
        url: 'https://jsearch.p.rapidapi.com/search',
        params: {
          query: query || 'software developer',
          page: String(pageNum),
          num_pages: '1'
        },
        headers: {
          'X-RapidAPI-Key': RAPID_API_KEY,
          'X-RapidAPI-Host': RAPID_API_HOST
        }
      };

      const response = await axios.request(options);
      
      if (!response.data || !response.data.data) {
        throw new Error('Invalid response format from API');
      }

      const jobsData = response.data.data.filter(job => job.job_title && job.employer_name);
      setJobs(jobsData);
      
      // Calculate total pages based on the number of jobs per page (default 10)
      const jobsPerPage = 10;
      const totalJobs = response.data.total_jobs || jobsData.length;
      setTotalPages(Math.max(1, Math.ceil(totalJobs / jobsPerPage)));

    } catch (error) {
      console.error("Error fetching jobs:", error);
      if (error.response) {
        // API responded with an error
        const errorMessage = error.response.data?.message || error.response.data?.error || 'Failed to fetch jobs';
        setError(errorMessage);
      } else if (error.request) {
        // No response received
        setError('Unable to connect to the job search service. Please try again later.');
      } else {
        // Other errors
        setError('An error occurred while fetching jobs. Please try again.');
      }
      setJobs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!localStorage.token) {
      navigate('/auth');
      return;
    }
    
    // Only fetch if we have a search query or it's the initial load
    if (searchQuery || page === 1) {
      fetchJobs(searchQuery || 'software developer', page);
    }
  }, [page]);

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    fetchJobs(searchQuery || 'software developer', 1);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const formatSalary = (min, max) => {
    if (!min && !max) return 'Salary not specified';
    if (!max) return `$${min.toLocaleString()}+`;
    return `$${min.toLocaleString()} - $${max.toLocaleString()}`;
  };

  if (!localStorage.token) {
    return null;
  }

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography 
        variant="h3" 
        component="h1" 
        gutterBottom 
        sx={{ 
          textAlign: 'center',
          fontWeight: 'bold',
          color: 'primary.main',
          mb: 4
        }}
      >
        Job Opportunities
      </Typography>

      <Box 
        component="form" 
        onSubmit={handleSearch}
        sx={{ 
          mb: 4,
          display: 'flex',
          gap: 2,
          maxWidth: 'lg',
          mx: 'auto'
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search jobs (e.g., Software Developer, Data Scientist)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
        <Button 
          variant="contained" 
          type="submit"
          disabled={loading}
          sx={{ px: 6 }}
        >
          {loading ? 'Searching...' : 'Search'}
        </Button>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 3, maxWidth: 'lg', mx: 'auto' }}>
          {error}
        </Alert>
      )}

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          {jobs.length === 0 && !error ? (
            <Alert severity="info" sx={{ mb: 3, maxWidth: 'lg', mx: 'auto' }}>
              No jobs found. Try different search terms.
            </Alert>
          ) : (
            <Grid container spacing={3}>
              {jobs.map((job) => (
                <Grid item xs={12} sm={6} md={4} key={job.job_id}>
                  <StyledCard>
                    <CardContent sx={{ p: 2.5 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                        <Box sx={{ flex: 1, pr: 2 }}>
                          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                            {job.job_title}
                          </Typography>
                          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                            {job.employer_name}
                          </Typography>
                        </Box>
                        <Chip 
                          icon={<WorkOutline />}
                          label={job.job_employment_type || 'Not specified'}
                          color="primary"
                          variant="outlined"
                          size="small"
                        />
                      </Box>

                      <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
                        <Chip 
                          icon={<LocationOn />} 
                          label={job.job_city || job.job_country || 'Remote'}
                          size="small"
                          color="secondary"
                        />
                        <Chip 
                          icon={<AttachMoney />}
                          label={formatSalary(job.job_min_salary, job.job_max_salary)}
                          size="small"
                          color="success"
                        />
                      </Stack>

                      <Divider sx={{ my: 1.5 }} />

                      <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                        Job Description
                      </Typography>
                      <Typography 
                        variant="body2" 
                        color="text.secondary"
                        sx={{
                          mb: 2,
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {job.job_description || 'No description available'}
                      </Typography>

                      <Typography variant="caption" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <AccessTime sx={{ fontSize: 14 }} />
                        Posted {new Date(job.job_posted_at_datetime_utc).toLocaleDateString()}
                      </Typography>
                    </CardContent>
                    
                    <CardActions sx={{ p: 2.5, pt: 0 }}>
                      <Button 
                        fullWidth 
                        variant="contained"
                        href={job.job_apply_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ 
                          borderRadius: 1.5,
                          py: 1
                        }}
                      >
                        Apply Now
                      </Button>
                    </CardActions>
                  </StyledCard>
                </Grid>
              ))}
            </Grid>
          )}

          {jobs.length > 0 && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
              <Pagination 
                count={totalPages} 
                page={page} 
                onChange={handlePageChange}
                color="primary"
                size="large"
                disabled={loading}
              />
            </Box>
          )}
        </>
      )}
    </Container>
  );
};

export default Jobs;
