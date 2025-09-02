import React from 'react';
import { Box, TextField, Button, IconButton } from '@mui/material';
import { Send as SendIcon, AttachFile as AttachFileIcon, CalendarToday as CalendarIcon, FormatBold as FormatBoldIcon, FormatItalic as FormatItalicIcon, Link as LinkIcon, FormatListBulleted as FormatListBulletedIcon } from '@mui/icons-material';

const MessageInput = ({ messageText, onMessageChange, onSendMessage }) => {
  return (
    <Box sx={{ 
      p: { xs: 1.5, sm: 2 }, 
      backgroundColor: 'white',
      borderTop: '1px solid #e0e0e0',
    }}>
      <Box sx={{
        backgroundColor: '#f8f9fa',
        borderRadius: 2,
        p: { xs: 1.5, sm: 2 },
        border: '1px solid #e0e0e0'
      }}>
        {/* Formatting Toolbar */}
        <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
          <IconButton size="small" sx={{ color: '#666', '&:hover': { backgroundColor: '#e0e0e0' } }}>
            <FormatBoldIcon fontSize="small" />
          </IconButton>
          <IconButton size="small" sx={{ color: '#666', '&:hover': { backgroundColor: '#e0e0e0' } }}>
            <FormatItalicIcon fontSize="small" />
          </IconButton>
          <IconButton size="small" sx={{ color: '#666', '&:hover': { backgroundColor: '#e0e0e0' } }}>
            <LinkIcon fontSize="small" />
          </IconButton>
          <IconButton size="small" sx={{ color: '#666', '&:hover': { backgroundColor: '#e0e0e0' } }}>
            <FormatListBulletedIcon fontSize="small" />
          </IconButton>
        </Box>

        {/* Message Input Field */}
        <TextField
          fullWidth
          multiline
          rows={2}
          placeholder="Type your message here..."
          value={messageText}
          onChange={onMessageChange}
          variant="outlined"
          sx={{
            '& .MuiOutlinedInput-root': {
              backgroundColor: 'white',
              borderRadius: 2,
              fontSize: { xs: '0.875rem', sm: '1rem' },
              '& fieldset': {
                borderColor: '#e0e0e0',
              },
              '&:hover fieldset': {
                borderColor: '#153C65',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#153C65',
              },
            },
            '& .MuiInputBase-input': {
              color: '#333',
              fontWeight: 500,
            },
            '& .MuiInputBase-input::placeholder': {
              color: '#666',
              opacity: 1,
            },
          }}
        />

        {/* Action Buttons */}
        <Box sx={{ 
          display: 'flex', 
          gap: 1, 
          mt: 2, 
          flexWrap: 'wrap',
          alignItems: 'center'
        }}>
          <Button
            variant="outlined"
            startIcon={<AttachFileIcon />}
            size="small"
            sx={{
              borderColor: '#666',
              color: '#666',
              borderRadius: 2,
              fontSize: { xs: '0.75rem', sm: '0.875rem' },
              py: { xs: 0.5, sm: 0.75 },
              px: { xs: 1, sm: 1.5 },
              '&:hover': {
                borderColor: '#1976d2',
                color: '#1976d2',
              }
            }}
          >
            Attach
          </Button>
          <Button
            variant="contained"
            startIcon={<CalendarIcon />}
            size="small"
            sx={{
              backgroundColor: '#FF9800',
              '&:hover': { backgroundColor: '#F57C00' },
              borderRadius: 2,
              fontSize: { xs: '0.75rem', sm: '0.875rem' },
              py: { xs: 0.5, sm: 0.75 },
              px: { xs: 1, sm: 1.5 }
            }}
          >
            Schedule Viewing
          </Button>
          <Button
            variant="contained"
            startIcon={<SendIcon />}
            size="small"
            onClick={onSendMessage}
            disabled={!messageText.trim()}
            sx={{
              backgroundColor: '#1976d2',
              '&:hover': { backgroundColor: '#1565c0' },
              borderRadius: 2,
              fontSize: { xs: '0.75rem', sm: '0.875rem' },
              py: { xs: 0.5, sm: 0.75 },
              px: { xs: 1, sm: 1.5 },
              '&:disabled': {
                backgroundColor: '#e0e0e0',
                color: '#999',
              }
            }}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default MessageInput;
