import React from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  LinearProgress, 
  Avatar, 
  Button,
  Checkbox,
  FormControlLabel,
  Divider
} from '@mui/material';
import {
  CheckCircle as CheckCircleIcon,
  RadioButtonUnchecked as RadioButtonUncheckedIcon,
  CalendarToday as CalendarIcon,
  Person as PersonIcon,
  Notifications as NotificationsIcon,
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
  Message as MessageIcon,
  AccessTime as AccessTimeIcon,
  LocalOffer as LocalOfferIcon,
  Home as HomeIcon,
} from '@mui/icons-material';

const RightSidebar = () => {
  const profileItems = [
    { text: 'Verify email address', completed: true },
    { text: 'Set up your preferences', completed: true },
    { text: 'Add phone number', completed: true },
    { text: 'Upload profile picture', completed: false, action: 'Add' },
    { text: 'Verify ID document', completed: false, action: 'Verify' },
  ];

  const upcomingViewings = [
    {
      day: '18',
      month: 'JUN',
      type: 'Luxury Apartment, V.I',
      time: '10:00 AM',
      agent: 'With John',
    },
    {
      day: '22',
      month: 'JUN',
      type: 'Modern House, Lekki',
      time: '02:30 AM',
      agent: 'With Sarah',
    },
  ];

  const propertyAlerts = [
    {
      title: 'Price Drops - Lagos',
      count: '12 new properties this week',
      icon: <LocalOfferIcon sx={{ fontSize: 16, color: '#000000' }} />,
      bgColor: '#fef3c7',
    },
    {
      title: 'New Listings - Lekki',
      count: '8 new properties this week',
      icon: <HomeIcon sx={{ fontSize: 16, color: '#166534' }} />,
      bgColor: '#dcfce7',
    },
    {
      title: 'Victoria Island Properties',
      count: '8 new properties this week',
      icon: <LocationIcon sx={{ fontSize: 16, color: '#1e40af' }} />,
      bgColor: '#dbeafe',
    },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {/* Complete Your Profile */}
      <Paper sx={{ p: { xs: 2, sm: 3 }, borderRadius: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: '#374151',
              fontFamily: '"Inter", sans-serif',
              fontSize: { xs: '1rem', sm: '1.1rem' },
            }}
          >
            Complete Your Profile
          </Typography>
          <Box
            sx={{
              backgroundColor: '#dbeafe',
              color: '#1e40af',
              px: 1.5,
              py: 0.5,
              borderRadius: 2,
              fontSize: { xs: '0.8rem', sm: '0.9rem' },
              fontWeight: 600,
            }}
          >
            75%
          </Box>
        </Box>

        <LinearProgress
          variant="determinate"
          value={75}
          sx={{
            height: 8,
            borderRadius: 4,
            backgroundColor: '#e5e7eb',
            '& .MuiLinearProgress-bar': {
              backgroundColor: '#3b82f6',
              borderRadius: 4,
            },
            mb: 3,
          }}
        />

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          {profileItems.map((item, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              {item.completed ? (
                <CheckCircleIcon sx={{ color: '#10b981', fontSize: 20 }} />
              ) : (
                <RadioButtonUncheckedIcon sx={{ color: '#f59e0b', fontSize: 20 }} />
              )}
              <Typography
                variant="body2"
                sx={{
                  color: item.completed ? '#6b7280' : '#374151',
                  textDecoration: item.completed ? 'line-through' : 'none',
                  fontFamily: '"Inter", sans-serif',
                  fontSize: { xs: '0.8rem', sm: '0.9rem' },
                  flex: 1,
                }}
              >
                {item.text}
              </Typography>
              {item.action && (
                <Typography
                  variant="caption"
                  sx={{
                    color: '#3b82f6',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '0.75rem',
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  {item.action}
                </Typography>
              )}
            </Box>
          ))}
        </Box>
      </Paper>

      {/* Upcoming Viewings */}
      <Paper sx={{ p: { xs: 2, sm: 3 }, borderRadius: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: '#374151',
              fontFamily: '"Inter", sans-serif',
              fontSize: { xs: '1rem', sm: '1.1rem' },
            }}
          >
            Upcoming Viewings
          </Typography>
          <CalendarIcon sx={{ color: '#1e40af', fontSize: 20 }} />
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {upcomingViewings.map((viewing, index) => (
            <Box key={index}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  sx={{
                    backgroundColor: '#dbeafe',
                    borderRadius: 1,
                    p: 1,
                    minWidth: 50,
                    textAlign: 'center',
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: '#1e40af',
                      fontFamily: '"Inter", sans-serif',
                      fontSize: { xs: '1.1rem', sm: '1.2rem' },
                      lineHeight: 1,
                    }}
                  >
                    {viewing.day}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 600,
                      color: '#1e40af',
                      fontFamily: '"Inter", sans-serif',
                      fontSize: '0.7rem',
                      textTransform: 'uppercase',
                    }}
                  >
                    {viewing.month}
                  </Typography>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      color: '#374151',
                      fontFamily: '"Inter", sans-serif',
                      fontSize: { xs: '0.8rem', sm: '0.9rem' },
                      mb: 0.5,
                    }}
                  >
                    {viewing.type}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                    <AccessTimeIcon sx={{ fontSize: 14, color: '#6b7280' }} />
                    <Typography
                      variant="caption"
                      sx={{
                        color: '#6b7280',
                        fontFamily: '"Inter", sans-serif',
                        fontSize: '0.75rem',
                      }}
                    >
                      {viewing.time}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <PersonIcon sx={{ fontSize: 14, color: '#6b7280' }} />
                    <Typography
                      variant="caption"
                      sx={{
                        color: '#6b7280',
                        fontFamily: '"Inter", sans-serif',
                        fontSize: '0.75rem',
                      }}
                    >
                      {viewing.agent}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              {index < upcomingViewings.length - 1 && (
                <Box sx={{ borderBottom: '1px solid #e5e7eb', mt: 2 }} />
              )}
            </Box>
          ))}
        </Box>
      </Paper>

      {/* Property Alerts */}
      <Paper sx={{ p: { xs: 2, sm: 3 }, borderRadius: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: '#374151',
              fontFamily: '"Inter", sans-serif',
              fontSize: { xs: '1rem', sm: '1.1rem' },
            }}
          >
            Property Alerts
          </Typography>
          <NotificationsIcon sx={{ color: '#1e40af', fontSize: 20 }} />
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {propertyAlerts.map((alert, index) => (
            <Box key={index}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  py: 1.5,
                }}
              >
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    backgroundColor: alert.bgColor,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {alert.icon}
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      color: '#374151',
                      fontFamily: '"Inter", sans-serif',
                      fontSize: { xs: '0.8rem', sm: '0.9rem' },
                      mb: 0.5,
                    }}
                  >
                    {alert.title}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: '#6b7280',
                      fontFamily: '"Inter", sans-serif',
                      fontSize: '0.75rem',
                    }}
                  >
                    {alert.count}
                  </Typography>
                </Box>
              </Box>
              {index < propertyAlerts.length - 1 && (
                <Box sx={{ borderBottom: '1px solid #e5e7eb', mt: 1.5 }} />
              )}
            </Box>
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

export default RightSidebar;
