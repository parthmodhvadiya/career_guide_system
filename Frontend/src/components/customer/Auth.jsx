import React, { useState } from "react";
import { auth, googleProvider } from "../../firebase/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { 
  Button, 
  TextField, 
  Paper, 
  Typography, 
  Box, 
  CircularProgress,
  Alert,
  IconButton,
  InputAdornment,
  Divider
} from '@mui/material';
import { 
  Google as GoogleIcon,
  Visibility,
  VisibilityOff,
  Email as EmailIcon,
  Lock as LockIcon
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: 400,
  width: '100%',
  margin: theme.spacing(2),
  borderRadius: 16,
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
}));

const StyledForm = styled('form')(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(1),
}));

const Auth = ({setFormData}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  const navigate = useNavigate();
  
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const idToken = await user.getIdToken();
      localStorage.setItem('token', idToken);
      console.log(idToken);
      navigate('/');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const idToken = await user.getIdToken();
      localStorage.setItem('token', idToken);
      navigate('/profile');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      const user = userCredential.user;
      const idToken = await user.getIdToken();
      localStorage.setItem('token', idToken);
      navigate('/');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        py: 4,
      }}
    >
      <StyledPaper elevation={3}>
        <Typography component="h1" variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </Typography>
        
        {error && (
          <Alert severity="error" sx={{ width: '100%', mb: 2 }}>
            {error}
          </Alert>
        )}

        <StyledForm onSubmit={isLogin ? handleLogin : handleSignUp}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon color="primary" />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon color="primary" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, py: 1.5 }}
            disabled={loading}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : isLogin ? (
              'Sign In'
            ) : (
              'Sign Up'
            )}
          </Button>

          <Divider sx={{ my: 2 }}>OR</Divider>

          <Button
            fullWidth
            variant="outlined"
            startIcon={<GoogleIcon />}
            onClick={handleGoogleLogin}
            disabled={loading}
            sx={{ mb: 2 }}
          >
            Continue with Google
          </Button>

          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
              <Button
                onClick={() => {
                  setIsLogin(!isLogin);
                  setError("");
                }}
                sx={{ textTransform: 'none' }}
              >
                {isLogin ? 'Sign Up' : 'Sign In'}
              </Button>
            </Typography>
          </Box>
        </StyledForm>
      </StyledPaper>
    </Box>
  );
};

export default Auth;