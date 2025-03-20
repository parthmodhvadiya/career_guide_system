import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  Bot, 
  User, 
  Loader2, 
  Mic, 
  MicOff,
  Paperclip,
  Smile,
  X
} from 'lucide-react';
import { 
  Box, 
  Typography, 
  IconButton, 
  TextField, 
  Paper,
  Avatar,
  Tooltip,
  Divider,
  Fade
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 16,
  overflow: 'hidden',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
}));

const MessageBubble = styled(motion.div)(({ theme, isUser }) => ({
  maxWidth: '70%',
  padding: theme.spacing(2),
  borderRadius: 16,
  backgroundColor: isUser ? theme.palette.primary.main : theme.palette.grey[100],
  color: isUser ? theme.palette.primary.contrastText : theme.palette.text.primary,
  position: 'relative',
  '&:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    [isUser ? 'right' : 'left']: -8,
    width: 16,
    height: 16,
    backgroundColor: isUser ? theme.palette.primary.main : theme.palette.grey[100],
    clipPath: isUser ? 'polygon(100% 0, 0 100%, 100% 100%)' : 'polygon(0 0, 100% 100%, 0 100%)',
  },
}));

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm your AI career guidance assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const chatboxRef = useRef(null);
  const GEMINI_API_KEY = 'AIzaSyBHEoHtglpGL0ppP58bQE_4SqqVXPU3Cjc';

  useEffect(() => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { 
      text: input, 
      sender: 'user',
      timestamp: new Date()
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ contents: [{ parts: [{ text: input }] }] }),
        }
      );

      const data = await response.json();
      const botMessage = { 
        text: data.candidates[0].content.parts[0].text, 
        sender: 'bot',
        timestamp: new Date()
      };
      
      // Simulate typing delay
      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, botMessage]);
        setIsTyping(false);
      }, 1000);
    } catch (error) {
      console.error('Error:', error);
      setMessages((prevMessages) => [...prevMessages, { 
        text: 'Oops! Something went wrong. Please try again.', 
        sender: 'bot',
        timestamp: new Date()
      }]);
      setIsTyping(false);
    }
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.default',
        py: 4,
        px: { xs: 2, sm: 3, md: 4 }
      }}
    >
      <Typography 
        variant="h4" 
        component="h1" 
        sx={{ 
          textAlign: 'center', 
          mb: 4,
          fontWeight: 'bold',
          color: 'primary.main'
        }}
      >
        AI Career Guidance Assistant
      </Typography>

      <StyledPaper elevation={3}>
        <Box 
          ref={chatboxRef}
          sx={{ 
            flex: 1, 
            overflowY: 'auto',
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            gap: 2
          }}
        >
          <AnimatePresence>
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: message.sender === 'user' ? 'flex-end' : 'flex-start',
                  gap: 0.5
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  {message.sender === 'bot' && (
                    <Avatar sx={{ bgcolor: 'primary.main' }}>
                      <Bot size={20} />
                    </Avatar>
                  )}
                  <MessageBubble isUser={message.sender === 'user'}>
                    <Typography variant="body1">{message.text}</Typography>
                  </MessageBubble>
                  {message.sender === 'user' && (
                    <Avatar sx={{ bgcolor: 'secondary.main' }}>
                      <User size={20} />
                    </Avatar>
                  )}
                </Box>
                <Typography 
                  variant="caption" 
                  color="text.secondary"
                  sx={{ ml: message.sender === 'user' ? 0 : 5 }}
                >
                  {formatTime(message.timestamp)}
                </Typography>
              </motion.div>
            ))}
          </AnimatePresence>

          {isTyping && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 5 }}>
              <Avatar sx={{ bgcolor: 'primary.main' }}>
                <Bot size={20} />
              </Avatar>
              <Box sx={{ display: 'flex', gap: 0.5 }}>
                <Loader2 className="animate-spin" size={20} />
                <Typography variant="body2" color="text.secondary">
                  Typing...
                </Typography>
              </Box>
            </Box>
          )}
        </Box>

        <Divider />

        <Box sx={{ p: 2, bgcolor: 'background.paper' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Tooltip title="Attach file">
              <IconButton size="small">
                <Paperclip size={20} />
              </IconButton>
            </Tooltip>
            
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSendMessage()}
              multiline
              maxRows={4}
              size="small"
            />

            <Tooltip title="Emoji">
              <IconButton 
                size="small"
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              >
                <Smile size={20} />
              </IconButton>
            </Tooltip>

            <Tooltip title={isRecording ? "Stop recording" : "Start recording"}>
              <IconButton 
                size="small"
                color={isRecording ? "error" : "default"}
                onClick={() => setIsRecording(!isRecording)}
              >
                {isRecording ? <MicOff size={20} /> : <Mic size={20} />}
              </IconButton>
            </Tooltip>

            <IconButton 
              color="primary"
              onClick={handleSendMessage}
              disabled={!input.trim()}
            >
              <Send size={20} />
            </IconButton>
          </Box>
        </Box>
      </StyledPaper>
    </Box>
  );
};

export default Chatbot;