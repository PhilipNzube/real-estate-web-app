import React, { useState } from 'react';
import { 
  Box, 
  Grid, 
  Typography, 
  Paper, 
  LinearProgress, 
  Avatar, 
  Button,
  Chip,
  useTheme,
  useMediaQuery,
  Drawer,
  IconButton
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
  Menu as MenuIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import WelcomeBanner from '../components/WelcomeBanner';
import PropertyOverview from '../components/PropertyOverview';
import RecommendedProperties from '../components/RecommendedProperties';
import MarketInsight from '../components/MarketInsight';

const DashboardHomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);

  const profileItems = [
    { text: 'Verify email address', completed: true },
    { text: 'Set up your preferences', completed: true },
    { text: 'Add phone number', completed: true },
    { text: 'Upload profile picture', completed: false, action: 'Add' },
    { text: 'Verify ID document', completed: false, action: 'Verify' },
  ];

  const propertyAlerts = [
    {
      title: 'Price Drops - Lagos',
      count: '12 new properties this week',
      icon: <Box sx={{ width: 12, height: 12, backgroundColor: '#DFC14C', borderRadius: '50%' }} />,
    },
    {
      title: 'New Listings - Lekki',
      count: '8 new properties this week',
      icon: <Box sx={{ width: 12, height: 12, backgroundColor: '#4CAF50', borderRadius: '50%' }} />,
    },
    {
      title: 'Victoria Island Properties',
      count: '8 new properties this week',
      icon: <LocationIcon sx={{ fontSize: 16, color: '#2196F3' }} />,
    },
  ];

  const RightSidebarContent = () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {/* Upcoming Appointment */}
      <Paper sx={{ p: { xs: 2, sm: 3 }, borderRadius: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 600,
              color: '#153C65',
              fontFamily: '"Poppins", sans-serif',
              fontSize: { xs: '0.8rem', sm: '0.9rem' },
            }}
          >
            22 JUN
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: '#666',
              fontFamily: '"Inter", sans-serif',
              fontSize: '0.75rem',
            }}
          >
            02:30 AM
          </Typography>
        </Box>
        <Typography
          variant="body2"
          sx={{
            color: '#666',
            fontFamily: '"Inter", sans-serif',
            fontSize: { xs: '0.8rem', sm: '0.9rem' },
            mb: 0.5,
          }}
        >
          Modern House, Lekki
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: '#153C65',
            fontFamily: '"Poppins", sans-serif',
            fontSize: '0.75rem',
          }}
        >
          With Sarah
        </Typography>
      </Paper>

      {/* Profile Completion */}
      <Paper sx={{ p: { xs: 2, sm: 3 }, borderRadius: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: '#153C65',
              fontFamily: '"Poppins", sans-serif',
              fontSize: { xs: '1rem', sm: '1.1rem' },
            }}
          >
            Complete Your Profile
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 600,
              color: '#153C65',
              fontFamily: '"Lora", serif',
              fontSize: { xs: '0.9rem', sm: '1rem' },
            }}
          >
            75%
          </Typography>
        </Box>

        <LinearProgress
          variant="determinate"
          value={75}
          sx={{
            height: 8,
            borderRadius: 4,
            backgroundColor: '#e0e0e0',
            '& .MuiLinearProgress-bar': {
              backgroundColor: '#153C65',
              borderRadius: 4,
            },
            mb: 3,
          }}
        />

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          {profileItems.map((item, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              {item.completed ? (
                <CheckCircleIcon sx={{ color: '#4CAF50', fontSize: 20 }} />
              ) : (
                <RadioButtonUncheckedIcon sx={{ color: '#ccc', fontSize: 20 }} />
              )}
              <Typography
                variant="body2"
                sx={{
                  color: item.completed ? '#4CAF50' : '#666',
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
                    color: '#153C65',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontFamily: '"Poppins", sans-serif',
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

      {/* Property Alerts */}
      <Paper sx={{ p: { xs: 2, sm: 3 }, borderRadius: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: '#153C65',
              fontFamily: '"Poppins", sans-serif',
              fontSize: { xs: '1rem', sm: '1.1rem' },
            }}
          >
            Property Alerts
          </Typography>
          <NotificationsIcon sx={{ color: '#153C65', fontSize: 20 }} />
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {propertyAlerts.map((alert, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                p: 2,
                backgroundColor: '#f8f9fa',
                borderRadius: 1,
                border: '1px solid #e0e0e0',
              }}
            >
              {alert.icon}
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 600,
                    color: '#153C65',
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: { xs: '0.8rem', sm: '0.9rem' },
                  }}
                >
                  {alert.title}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: '#666',
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '0.75rem',
                  }}
                >
                  {alert.count}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Paper>

      {/* Dedicated Agent */}
      <Paper sx={{ p: { xs: 2, sm: 3 }, borderRadius: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: '#153C65',
              fontFamily: '"Poppins", sans-serif',
              fontSize: { xs: '1rem', sm: '1.1rem' },
            }}
          >
            Your Dedicated Agent
          </Typography>
          <PersonIcon sx={{ color: '#153C65', fontSize: 20 }} />
        </Box>

        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Avatar
            sx={{
              width: 80,
              height: 80,
              backgroundColor: '#153C65',
              color: 'white',
              fontWeight: 600,
              fontSize: '1.5rem',
              mx: 'auto',
              mb: 2,
            }}
          >
            SO
          </Avatar>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: '#153C65',
              fontFamily: '"Lora", serif',
              fontSize: { xs: '1rem', sm: '1.1rem' },
              mb: 0.5,
            }}
          >
            Sarah Okafor
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: '#666',
              fontFamily: '"Inter", sans-serif',
              fontSize: { xs: '0.8rem', sm: '0.9rem' },
              mb: 2,
            }}
          >
            Senior Property Consultant
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'space-around', mb: 3 }}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: '#153C65',
                  fontFamily: '"Lora", serif',
                  fontSize: { xs: '1.1rem', sm: '1.2rem' },
                }}
              >
                98%
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: '#666',
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '0.75rem',
                }}
              >
                Response Rate
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: '#153C65',
                  fontFamily: '"Lora", serif',
                  fontSize: { xs: '1.1rem', sm: '1.2rem' },
                }}
              >
                152
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: '#666',
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '0.75rem',
                }}
              >
                Properties Sold
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button
              variant="contained"
              startIcon={<PhoneIcon />}
              sx={{
                backgroundColor: '#153C65',
                color: 'white',
                px: 2,
                py: 1,
                borderRadius: 2,
                fontWeight: 600,
                fontFamily: '"Poppins", sans-serif',
                fontSize: { xs: '0.8rem', sm: '0.9rem' },
                flex: 1,
                '&:hover': {
                  backgroundColor: '#0d2b4a',
                },
              }}
            >
              Call
            </Button>
            <Button
              variant="outlined"
              startIcon={<MessageIcon />}
              sx={{
                borderColor: '#DFC14C',
                color: '#DFC14C',
                px: 2,
                py: 1,
                borderRadius: 2,
                fontWeight: 600,
                fontFamily: '"Poppins", sans-serif',
                fontSize: { xs: '0.8rem', sm: '0.9rem' },
                flex: 1,
                '&:hover': {
                  borderColor: '#D4B63C',
                  backgroundColor: 'rgba(223, 193, 76, 0.1)',
                },
              }}
            >
              Message
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );

  return (
    <Box sx={{ width: '100%', position: 'relative' }}>
      {/* Mobile Right Sidebar Toggle Button */}
      {isMobile && (
        <IconButton
          onClick={() => setRightSidebarOpen(true)}
          sx={{
            position: 'fixed',
            right: 16,
            top: 80,
            backgroundColor: '#153C65',
            color: 'white',
            zIndex: 1200,
            '&:hover': {
              backgroundColor: '#0d2b4a',
            },
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      <Box sx={{ 
        display: 'flex', 
        gap: { xs: 0, sm: 1.5, md: 2, lg: 3 },
        flexDirection: { xs: 'column', lg: 'row' },
        width: '100%',
        overflow: 'hidden',
        maxWidth: '100vw',
        boxSizing: 'border-box'
      }}>
        {/* Main Content */}
        <Box sx={{ 
          flex: 1, 
          display: 'flex', 
          flexDirection: 'column', 
          gap: { xs: 1.5, sm: 2, md: 3 },
          width: '100%',
          minWidth: 0,
          overflow: 'hidden',
          maxWidth: '100%',
          boxSizing: 'border-box'
        }}>
          {/* Welcome Banner */}
          <WelcomeBanner />
          
          {/* Continue Browsing */}
          <PropertyOverview />
          
          {/* Recommended Properties */}
          <RecommendedProperties />
          
          {/* Market Insight */}
          <MarketInsight />
        </Box>
        
        {/* Right Sidebar - Desktop (Always Visible) */}
        <Box sx={{ 
          width: { lg: 300, xl: 320 }, 
          display: { xs: 'none', lg: 'block' },
          position: 'sticky',
          top: 20,
          height: 'fit-content',
          flexShrink: 0,
          minWidth: { lg: 300, xl: 320 },
          overflow: 'hidden',
          maxWidth: { lg: 300, xl: 320 },
          boxSizing: 'border-box',
          zIndex: 1200
        }}>
          <RightSidebarContent />
        </Box>
      </Box>

      {/* Mobile Right Sidebar Drawer */}
      <Drawer
        anchor="right"
        open={rightSidebarOpen}
        onClose={() => setRightSidebarOpen(false)}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', lg: 'none' },
          zIndex: 1300,
          '& .MuiDrawer-paper': {
            width: 320,
            maxWidth: '85vw',
            backgroundColor: '#f8f9fa',
            boxSizing: 'border-box',
            zIndex: 1300,
          },
        }}
      >
        <Box sx={{ p: 2, borderBottom: '1px solid #e0e0e0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 600, color: '#153C65' }}>
            Dashboard Info
          </Typography>
          <IconButton onClick={() => setRightSidebarOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box sx={{ p: 2 }}>
          <RightSidebarContent />
        </Box>
      </Drawer>
    </Box>
  );
};

export default DashboardHomePage;
