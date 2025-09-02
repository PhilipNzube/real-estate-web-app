import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  Paper,
  Divider,
} from '@mui/material';

const MessagesArea = ({ selectedConversation }) => {
  if (!selectedConversation) {
    return (
      <Box sx={{ 
        height: '100%',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#f8f9fa',
        pb: 24, // Account for fixed message input
      }}>
        <Typography variant="h6" sx={{ color: '#666' }}>
          Select a conversation to start messaging
        </Typography>
      </Box>
    );
  }

  // Sample messages for demonstration
  const messages = [
    {
      id: 1,
      sender: 'agent',
      text: 'Hello John Doe, thank you for your interest in the Luxury 3 Bedroom Apartment in Victoria Island. How can I assist you today?',
      time: '11:25 AM',
      avatar: 'JD',
      avatarColor: '#153C65'
    },
    {
      id: 2,
      sender: 'user',
      text: 'Hi John, I\'m very interested in this property. I\'d like to know if it\'s still available and if there\'s any flexibility on the price.',
      time: '10:25 AM',
      avatar: 'JD',
      avatarColor: '#153C65'
    }
  ];

  return (
    <Box sx={{ 
      height: '100%',
      display: 'flex', 
      flexDirection: 'column', 
      backgroundColor: 'white',
      pb: 24, // Account for fixed message input
    }}>
      {/* Date Divider */}
      <Box sx={{ px: { xs: 2, sm: 3 }, py: 2 }}>
        <Divider>
          <Typography variant="caption" sx={{ color: '#666', px: 2, fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
            Wednesday, June 28, 2025
          </Typography>
        </Divider>
      </Box>

      {/* Messages - Scrollable Area */}
      <Box sx={{ 
        flex: 1, 
        overflowY: 'auto', 
        px: { xs: 2, sm: 3 }, 
        pb: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        minHeight: 0, // Important for flex scrolling
      }}>
        {messages.map((message) => (
          <Box
            key={message.id}
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
              mb: 2,
            }}
          >
            {message.sender === 'agent' && (
              <Avatar
                sx={{
                  width: { xs: 28, sm: 32 },
                  height: { xs: 28, sm: 32 },
                  backgroundColor: message.avatarColor,
                  color: 'white',
                  fontWeight: 600,
                  mr: 1,
                  flexShrink: 0
                }}
              >
                {message.avatar}
              </Avatar>
            )}
            
            <Box sx={{ 
              maxWidth: { xs: '75%', sm: '70%' },
              display: 'flex',
              flexDirection: 'column',
              alignItems: message.sender === 'user' ? 'flex-end' : 'flex-start'
            }}>
              <Paper
                sx={{
                  p: { xs: 1.5, sm: 2 },
                  backgroundColor: message.sender === 'user' ? '#e3f2fd' : '#f5f5f5',
                  borderRadius: message.sender === 'user' 
                    ? '18px 18px 4px 18px' 
                    : '18px 18px 18px 4px',
                  maxWidth: '100%',
                  wordBreak: 'break-word'
                }}
              >
                <Typography variant="body2" sx={{ 
                  color: '#333', 
                  lineHeight: 1.5,
                  fontSize: { xs: '0.875rem', sm: '1rem' }
                }}>
                  {message.text}
                </Typography>
              </Paper>
              
              <Typography 
                variant="caption" 
                sx={{ 
                  color: '#666', 
                  mt: 0.5,
                  fontSize: { xs: '0.625rem', sm: '0.75rem' }
                }}
              >
                {message.time}
              </Typography>
            </Box>

            {message.sender === 'user' && (
              <Avatar
                sx={{
                  width: { xs: 28, sm: 32 },
                  height: { xs: 28, sm: 32 },
                  backgroundColor: message.avatarColor,
                  color: 'white',
                  fontWeight: 600,
                  ml: 1,
                  flexShrink: 0
                }}
              >
                {message.avatar}
              </Avatar>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MessagesArea;
