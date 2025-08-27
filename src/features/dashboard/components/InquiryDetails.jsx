import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Avatar,
  Button,
  IconButton,
  TextField,
  useTheme,
} from '@mui/material';
import {
  Close as CloseIcon,
  LocationOn as LocationIcon,
  Hotel as BedIcon,
  Bathtub as BathIcon,
  SquareFoot as SizeIcon,
  Visibility as ViewIcon,
  AttachFile as AttachIcon,
  FormatBold as BoldIcon,
  FormatItalic as ItalicIcon,
  FormatListBulleted as ListIcon,
  Send as SendIcon,
  Schedule as ScheduleIcon,
} from '@mui/icons-material';

const InquiryDetails = ({ inquiry, isOpen, onClose, isMobile }) => {
  const theme = useTheme();
  const [message, setMessage] = useState('');

  if (!inquiry) return null;

  const messages = [
    {
      id: 1,
      sender: 'user',
      name: 'You',
      avatar: 'JD',
      message: "Hello, I'm Axiested in viewing this property. I'd like to know if the apartment comes with parking space and if there are any additional fees for amenities. Also, is the price negotiable?",
      timestamp: '10:25 AM',
    },
    {
      id: 2,
      sender: 'agent',
      name: 'John Doe',
      avatar: 'JD',
      message: "Hello John Doe, thank you for your Axiest in our luxury apartment. Yes, the apartment comes with 2 designated parking spaces in the secured underground garage. There is a monthly service charge of ₦150,000 which covers security, maintenance of common areas, and access to amenities like the pool, gym, and rooftop lounge.",
      timestamp: '11:25 AM',
    },
  ];

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      backgroundColor: 'white',
    }}>
      {/* Header */}
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        p: { xs: 2, sm: 3 },
        borderBottom: '1px solid #e0e0e0',
        flexShrink: 0,
      }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: '#0A3A7D',
            fontSize: { xs: '1rem', sm: '1.125rem' },
            fontFamily: '"Axiforma", sans-serif',
          }}
        >
          Inquiry Details
        </Typography>
        <IconButton
          onClick={onClose}
          sx={{
            color: '#757575',
            '&:hover': {
              backgroundColor: '#f5f5f5',
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Scrollable Content */}
      <Box sx={{
        flex: 1,
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
        minHeight: 0,
      }}>
        {/* Property Details */}
        <Box sx={{ 
          p: { xs: 2, sm: 3 }, 
          borderBottom: '1px solid #e0e0e0',
          flexShrink: 0,
        }}>
          <Box sx={{
            width: '100%',
            height: { xs: 150, sm: 200 },
            borderRadius: 2,
            overflow: 'hidden',
            mb: 2,
          }}>
            <Box
              component="img"
              src={inquiry.image}
              alt={inquiry.property.title}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>

          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: '#0A3A7D',
              fontSize: { xs: '1.125rem', sm: '1.25rem' },
              fontFamily: '"Axiforma", sans-serif',
              mb: 1,
            }}
          >
            {inquiry.property.title}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <LocationIcon sx={{ fontSize: { xs: 18, sm: 20 }, color: '#757575', mr: 1 }} />
            <Typography
              variant="body2"
              sx={{
                color: '#757575',
                fontSize: { xs: '0.8rem', sm: '0.875rem' },
                fontFamily: '"Axiforma", sans-serif',
              }}
            >
              {inquiry.property.location}
            </Typography>
          </Box>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: '#0A3A7D',
              fontSize: { xs: '1.25rem', sm: '1.5rem' },
              fontFamily: '"Axiforma", sans-serif',
              mb: 2,
            }}
          >
            {inquiry.property.price}
          </Typography>

          <Box sx={{
            display: 'flex',
            gap: { xs: 2, sm: 3 },
            mb: 2,
            flexWrap: 'wrap',
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <BedIcon sx={{ fontSize: { xs: 16, sm: 18 }, color: '#757575' }} />
              <Typography
                variant="body2"
                sx={{
                  color: '#757575',
                  fontSize: { xs: '0.8rem', sm: '0.875rem' },
                  fontFamily: '"Axiforma", sans-serif',
                }}
              >
                {inquiry.property.beds} Beds
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <BathIcon sx={{ fontSize: { xs: 16, sm: 18 }, color: '#757575' }} />
              <Typography
                variant="body2"
                sx={{
                  color: '#757575',
                  fontSize: { xs: '0.8rem', sm: '0.875rem' },
                  fontFamily: '"Axiforma", sans-serif',
                }}
              >
                {inquiry.property.baths} Baths
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <SizeIcon sx={{ fontSize: { xs: 16, sm: 18 }, color: '#757575' }} />
              <Typography
                variant="body2"
                sx={{
                  color: '#757575',
                  fontSize: { xs: '0.8rem', sm: '0.875rem' },
                  fontFamily: '"Axiforma", sans-serif',
                }}
              >
                {inquiry.property.size}
              </Typography>
            </Box>
          </Box>

          <Button
            variant="contained"
            startIcon={<ViewIcon />}
            sx={{
              backgroundColor: '#0A3A7D',
              color: 'white',
              textTransform: 'none',
              fontWeight: 600,
              fontSize: { xs: '0.8rem', sm: '0.875rem' },
              px: { xs: 1.5, sm: 2 },
              py: { xs: 0.75, sm: 1 },
              '&:hover': {
                backgroundColor: '#082a5a',
              },
            }}
          >
            View Property
          </Button>
        </Box>

        {/* Messages */}
        <Box sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '100%',
        }}>
          {/* Date Separator */}
          <Box sx={{
            p: { xs: 1.5, sm: 2 },
            textAlign: 'center',
            borderBottom: '1px solid #e0e0e0',
            flexShrink: 0,
          }}>
            <Typography
              variant="body2"
              sx={{
                color: '#757575',
                fontSize: { xs: '0.8rem', sm: '0.875rem' },
                fontFamily: '"Axiforma", sans-serif',
              }}
            >
              August 24, 2025
            </Typography>
          </Box>

          {/* Messages List */}
          <Box sx={{
            flex: 1,
            overflow: 'auto',
            p: { xs: 1.5, sm: 2 },
            minHeight: 0,
            maxHeight: '100%', // Add this line
          }}>
            {messages.map((msg) => (
              <Box
                key={msg.id}
                sx={{
                  display: 'flex',
                  flexDirection: msg.sender === 'user' ? 'row-reverse' : 'row',
                  mb: 2,
                  gap: 1,
                }}
              >
                <Avatar
                  sx={{
                    width: { xs: 28, sm: 32 },
                    height: { xs: 28, sm: 32 },
                    backgroundColor: msg.sender === 'user' ? '#0A3A7D' : '#10B981',
                    color: 'white',
                    fontSize: { xs: '0.7rem', sm: '0.75rem' },
                    fontWeight: 600,
                    flexShrink: 0,
                  }}
                >
                  {msg.avatar}
                </Avatar>
                
                <Box sx={{
                  maxWidth: '70%',
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    mb: 0.5,
                    justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  }}>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 600,
                        color: '#333',
                        fontSize: { xs: '0.7rem', sm: '0.75rem' },
                        fontFamily: '"Axiforma", sans-serif',
                      }}
                    >
                      {msg.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: '#757575',
                        fontSize: { xs: '0.6rem', sm: '0.65rem' },
                        fontFamily: '"Axiforma", sans-serif',
                      }}
                    >
                      {msg.timestamp}
                    </Typography>
                  </Box>
                  
                  <Paper
                    sx={{
                      p: { xs: 1.5, sm: 2 },
                      backgroundColor: msg.sender === 'user' ? '#E6EDFF' : '#f5f5f5',
                      borderRadius: 2,
                      maxWidth: '100%',
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#333',
                        fontSize: { xs: '0.8rem', sm: '0.875rem' },
                        fontFamily: '"Axiforma", sans-serif',
                        lineHeight: 1.5,
                      }}
                    >
                      {msg.message}
                    </Typography>
                  </Paper>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Message Input - Fixed at bottom */}
      <Box sx={{
        p: { xs: 1.5, sm: 2 },
        borderTop: '1px solid #e0e0e0',
        backgroundColor: 'white',
        flexShrink: 0,
      }}>
        {/* Formatting Toolbar */}
        <Box sx={{
          display: 'flex',
          gap: 1,
          mb: 1,
        }}>
          <IconButton size="small" sx={{ color: '#757575' }}>
            <BoldIcon sx={{ fontSize: 16 }} />
          </IconButton>
          <IconButton size="small" sx={{ color: '#757575' }}>
            <ItalicIcon sx={{ fontSize: 16 }} />
          </IconButton>
          <IconButton size="small" sx={{ color: '#757575' }}>
            <AttachIcon sx={{ fontSize: 16 }} />
          </IconButton>
          <IconButton size="small" sx={{ color: '#757575' }}>
            <ListIcon sx={{ fontSize: 16 }} />
          </IconButton>
        </Box>

        {/* Input Field */}
        <TextField
          multiline
          rows={3}
          placeholder="Type Your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          variant="outlined"
          sx={{
            width: '100%',
            mb: 2,
            '& .MuiOutlinedInput-root': {
              borderRadius: 2,
              backgroundColor: '#f8f9fa',
              '& fieldset': {
                borderColor: '#e0e0e0',
              },
              '&:hover fieldset': {
                borderColor: '#0A3A7D',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#0A3A7D',
              },
            },
          }}
        />

        {/* Action Buttons */}
        <Box sx={{
          display: 'flex',
          gap: 1,
          flexWrap: 'wrap',
        }}>
          <Button
            variant="outlined"
            startIcon={<AttachIcon />}
            sx={{
              borderColor: '#757575',
              color: '#757575',
              textTransform: 'none',
              fontSize: { xs: '0.8rem', sm: '0.875rem' },
              px: { xs: 1.5, sm: 2 },
              py: { xs: 0.75, sm: 1 },
              '&:hover': {
                borderColor: '#757575',
                backgroundColor: '#f5f5f5',
              },
            }}
          >
            Attach
          </Button>
          <Button
            variant="contained"
            startIcon={<ScheduleIcon />}
            sx={{
              backgroundColor: '#F59E0B',
              color: 'white',
              textTransform: 'none',
              fontSize: { xs: '0.8rem', sm: '0.875rem' },
              px: { xs: 1.5, sm: 2 },
              py: { xs: 0.75, sm: 1 },
              '&:hover': {
                backgroundColor: '#D97706',
              },
            }}
          >
            Schedule Viewing
          </Button>
          <Button
            variant="contained"
            startIcon={<SendIcon />}
            sx={{
              backgroundColor: '#0A3A7D',
              color: 'white',
              textTransform: 'none',
              fontSize: { xs: '0.8rem', sm: '0.875rem' },
              px: { xs: 1.5, sm: 2 },
              py: { xs: 0.75, sm: 1 },
              '&:hover': {
                backgroundColor: '#082a5a',
              },
            }}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default InquiryDetails;
