import React from 'react';
import { Box, Typography, Avatar, IconButton, Card, CardContent, Button } from '@mui/material';
import { Phone as PhoneIcon, Videocam as VideocamIcon, Report as ReportIcon, MoreVert as MoreVertIcon, LocationOn as LocationIcon, CalendarToday as CalendarIcon, Business as BusinessIcon } from '@mui/icons-material';

const MessagesHeader = ({ selectedConversation }) => {
  if (!selectedConversation) {
    return (
      <Box sx={{
        p: { xs: 2, sm: 3 },
        borderBottom: '1px solid #e0e0e0',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Typography variant="h6" sx={{ color: '#666' }}>
          Select a conversation to start messaging
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{
      
      borderBottom: '1px solid #e0e0e0',
      backgroundColor: 'white'
    }}>
      {/* Contact Info and Action Buttons */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5, p: { xs: 1.5, sm: 2 }, }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ position: 'relative', mr: 1.5 }}>
            <Avatar
              sx={{
                width: { xs: 36, sm: 40 },
                height: { xs: 36, sm: 40 },
                backgroundColor: selectedConversation.avatarColor,
                color: 'white',
                fontWeight: 600
              }}
            >
              {selectedConversation.avatar}
            </Avatar>
            {selectedConversation.online && (
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 1,
                  right: 1,
                  width: { xs: 8, sm: 10 },
                  height: { xs: 8, sm: 10 },
                  backgroundColor: '#4caf50',
                  borderRadius: '50%',
                  border: '2px solid white'
                }}
              />
            )}
          </Box>
          <Box>
            <Typography variant="subtitle1" sx={{ 
              fontWeight: 600, 
              color: '#333',
              fontSize: { xs: '0.875rem', sm: '1rem' },
              lineHeight: 1.2
            }}>
              {selectedConversation.name}
            </Typography>
            <Typography variant="body2" sx={{ 
              color: '#666',
              fontSize: { xs: '0.75rem', sm: '0.875rem' },
              lineHeight: 1.2
            }}>
              {selectedConversation.online ? 'Online' : 'Offline'} - {selectedConversation.role}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', gap: 0.5 }}>
          <IconButton size="small" sx={{ color: '#666', p: 0.5 }}>
            <PhoneIcon sx={{ fontSize: { xs: 18, sm: 20 } }} />
          </IconButton>
          <IconButton size="small" sx={{ color: '#666', p: 0.5 }}>
            <VideocamIcon sx={{ fontSize: { xs: 18, sm: 20 } }} />
          </IconButton>
          <IconButton size="small" sx={{ color: '#666', p: 0.5 }}>
            <ReportIcon sx={{ fontSize: { xs: 18, sm: 20 } }} />
          </IconButton>
          <IconButton size="small" sx={{ color: '#666', p: 0.5 }}>
            <MoreVertIcon sx={{ fontSize: { xs: 18, sm: 20 } }} />
          </IconButton>
        </Box>
      </Box>

      {/* Compact Property Card */}
      <Card sx={{
        borderRadius: 0,
        backgroundColor: '#E6EDFF',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        border: '0px solid #e0e0e0',
        maxWidth: { xs: '100%', sm: '100%' },
      }}>
        <CardContent sx={{ p: { xs: 1.5, sm: 2 }, }}>
          <Box sx={{ display: 'flex' }}>
            <Box
              component="img"
              src="/src/assets/images/House_1.png"
              alt="Property"
              sx={{
                width: { xs: 70, sm: 80 },
                height: { xs: 52, sm: 60 },
                borderRadius: '8px 0 0 8px',
                objectFit: 'cover'
              }}
            />
            <Box sx={{ p: { xs: 1, sm: 1.5 }, flex: 1 }}>
              <Typography variant="body2" sx={{ 
                fontWeight: 600, 
                color: '#333', 
                mb: 0.5,
                fontSize: { xs: '0.75rem', sm: '0.875rem' },
                lineHeight: 1.2
              }}>
                Luxury 3 Bedroom Apartment
              </Typography>
              <Typography variant="subtitle1" sx={{ 
                fontWeight: 700, 
                color: '#1976d2', 
                mb: 0.5,
                fontSize: { xs: '0.875rem', sm: '1rem' },
                lineHeight: 1.2
              }}>
                ₦75,000,000
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <LocationIcon sx={{ color: '#666', fontSize: { xs: 12, sm: 14 }, mr: 0.5 }} />
                <Typography variant="caption" sx={{ 
                  color: '#666',
                  fontSize: { xs: '0.625rem', sm: '0.75rem' },
                  lineHeight: 1.2
                }}>
                  Victoria Island, Lagos
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  startIcon={<CalendarIcon />}
                  size="small"
                  sx={{
                    backgroundColor: '#0A3A7D',
                    '&:hover': { backgroundColor: '#1565c0' },
                    borderRadius: 2,
                    fontSize: { xs: '0.625rem', sm: '0.75rem' },
                    py: { xs: 0.25, sm: 0.5 },
                    px: { xs: 0.75, sm: 1 },
                    minHeight: { xs: 28, sm: 32 },
                    '& .MuiButton-startIcon': {
                      mr: 0.5
                    }
                  }}
                >
                  Schedule Viewing
                </Button>
                <Button
                  variant="contained"
                  startIcon={<BusinessIcon />}
                  size="small"
                  sx={{
                    backgroundColor: '#FFFFFF',
                    color: '#666',
                    borderRadius: 2,
                    fontSize: { xs: '0.625rem', sm: '0.75rem' },
                    py: { xs: 0.25, sm: 0.5 },
                    px: { xs: 0.75, sm: 1 },
                    minHeight: { xs: 28, sm: 32 },
                    '& .MuiButton-startIcon': {
                      mr: 0.5
                    }
                  }}
                >
                  View Property
                </Button>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default MessagesHeader;
