import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Button,
  CircularProgress,
  Paper,
  Grid,
  Avatar,
  Chip,
  Divider,
  Alert,
  IconButton,
  Tooltip,
  Card,
  CardContent
} from "@mui/material";
import {
  Edit as EditIcon,
  Logout as LogoutIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Cake as CakeIcon,
  Person as PersonIcon,
  LocationOn as LocationIcon,
  Code as CodeIcon,
  Add as AddIcon,
  Assessment as AssessmentIcon,
  Score as ScoreIcon
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const ProfilePaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(10),
  height: theme.spacing(10),
  marginBottom: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
  fontSize: '2rem',
}));

const AssessmentCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.spacing(2),
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
  boxShadow: 'none',
  border: `1px solid ${theme.palette.divider}`,
}));

const InfoItem = ({ icon, label, value }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 2 }}>
    {icon}
    <Box>
      <Typography variant="caption" color="text.secondary">
        {label}
      </Typography>
      <Typography variant="body1">
        {value || 'Not specified'}
      </Typography>
    </Box>
  </Box>
);

const UserProfileDisplay = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/auth");
          return;
        }
        const response = await fetch("http://localhost:5000/getprofiledetails", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        });
        
        if (!response.ok) {
          throw new Error("Failed to fetch user profile");
        }

        const data = await response.json();
        if (data.message === 'User Details Not Founded') {
          navigate('/profile');
          return;
        }
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, [navigate]);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const getInitials = (name) => {
    return name
      ? name
          .split(' ')
          .map(word => word[0])
          .join('')
          .toUpperCase()
      : '?';
  };

  const getSkillChips = (skills) => {
    if (Array.isArray(skills)) return skills;
    if (typeof skills === 'string') return skills.split(',').map(skill => skill.trim()).filter(Boolean);
    return [];
  };

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      {loading ? (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <CircularProgress size={40} />
          <Typography color="text.secondary">
            Loading your profile...
          </Typography>
        </Box>
      ) : error ? (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      ) : !user ? (
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            No Profile Found
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => navigate('/profile')}
            sx={{ mt: 2 }}
          >
            Create Profile
          </Button>
        </Box>
      ) : (
        <ProfilePaper elevation={0}>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <StyledAvatar>
              {getInitials(user.fullName)}
            </StyledAvatar>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
              {user.fullName || "User"}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              {user.title || "Career Seeker"}
            </Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <InfoItem
                icon={<EmailIcon color="primary" />}
                label="Email"
                value={user.email}
              />
              <InfoItem
                icon={<PhoneIcon color="primary" />}
                label="Phone"
                value={user.phone}
              />
              <InfoItem
                icon={<CakeIcon color="primary" />}
                label="Date of Birth"
                value={user.dob}
              />
              <InfoItem
                icon={<PersonIcon color="primary" />}
                label="Gender"
                value={user.gender}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <InfoItem
                icon={<LocationIcon color="primary" />}
                label="Location"
                value={`${user.city || ''} ${user.state || ''} ${user.country || ''}`}
              />
              <Box sx={{ mb: 2 }}>
                <Typography variant="caption" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <CodeIcon color="primary" />
                  Skills
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                  {Array.isArray(user.skills) ? (
                    user.skills.map((skill, index) => (
                      <Chip
                        key={index}
                        label={skill}
                        size="small"
                        color="primary"
                        variant="outlined"
                      />
                    ))
                  ) : user.skills ? (
                    getSkillChips(user.skills).map((skill, index) => (
                      <Chip
                        key={index}
                        label={skill}
                        size="small"
                        color="primary"
                        variant="outlined"
                      />
                    ))
                  ) : (
                    <Typography variant="body2" color="text.secondary">
                      No skills specified
                    </Typography>
                  )}
                </Box>
              </Box>
            </Grid>
          </Grid>

          <AssessmentCard>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <AssessmentIcon color="primary" />
                Assessment Center
              </Typography>
              
              <Grid container spacing={3} sx={{ mt: 1 }}>
                <Grid item xs={12} sm={6}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    startIcon={<AssessmentIcon />}
                    onClick={() => navigate("/careerquiz")}
                    sx={{
                      py: 1.5,
                      backgroundColor: (theme) => theme.palette.primary.main,
                      '&:hover': {
                        backgroundColor: (theme) => theme.palette.primary.dark,
                      },
                    }}
                  >
                    Take Skill Assessment
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    fullWidth
                    variant="outlined"
                    color="primary"
                    startIcon={<ScoreIcon />}
                    onClick={() => navigate("/marks")}
                    sx={{
                      py: 1.5,
                      borderWidth: 2,
                      '&:hover': {
                        borderWidth: 2,
                      },
                    }}
                  >
                    View Assessment Marks
                  </Button>
                </Grid>
              </Grid>

              {user.assessmentMarks && (
                <Box sx={{ mt: 3 }}>
                  <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    Recent Assessment Results
                  </Typography>
                  <Grid container spacing={2}>
                    {Object.entries(user.assessmentMarks).map(([subject, marks], index) => (
                      <Grid item xs={12} sm={6} md={4} key={index}>
                        <Box
                          sx={{
                            p: 2,
                            borderRadius: 1,
                            backgroundColor: (theme) => theme.palette.background.paper,
                            border: '1px solid',
                            borderColor: 'divider',
                          }}
                        >
                          <Typography variant="body2" color="text.secondary">
                            {subject}
                          </Typography>
                          <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                            {marks}%
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              )}
            </CardContent>
          </AssessmentCard>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Tooltip title="Edit Profile">
              <Button
                variant="contained"
                startIcon={<EditIcon />}
                onClick={() => navigate("/profile")}
              >
                Edit Profile
              </Button>
            </Tooltip>
            <Tooltip title="Logout">
              <Button
                variant="outlined"
                color="error"
                startIcon={<LogoutIcon />}
                onClick={handleLogOut}
              >
                Logout
              </Button>
            </Tooltip>
          </Box>
        </ProfilePaper>
      )}
    </Container>
  );
};

export default UserProfileDisplay;
