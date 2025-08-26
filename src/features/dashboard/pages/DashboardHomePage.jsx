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
  AccessTime as AccessTimeIcon,
  LocalOffer as LocalOfferIcon,
  Home as HomeIcon,
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

  const RightSidebarContent = () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {/* Complete Your Profile */}
      <Paper sx={{ p: { xs: 2, sm: 3 }, borderRadius: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: '#333B4D',
              fontFamily: '"Poppins", sans-serif',
              fontSize: { xs: '1rem', sm: '1rem' },
              whiteSpace: 'wrap',
            }}
          >
            Complete Your Profile
          </Typography>
          <Box
            sx={{
              backgroundColor: '#E6EDFF',
              color: '#0A3A7D',
              px: 1.5,
              py: 0.5,
              borderRadius: 20,
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
              backgroundColor: 'linear-gradient(135deg, #0A3A7D 0%, #165DC2 100%)',
              borderRadius: 4,
            },
            mb: 3,
          }}
        />

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          {profileItems.map((item, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              {item.completed ? (
                <CheckCircleIcon sx={{ color: '#00A86B', fontSize: 20 }} />
              ) : (
                <RadioButtonUncheckedIcon sx={{ color: '#FFC043', fontSize: 20 }} />
              )}
              <Typography
                variant="body2"
                sx={{
                  color: item.completed ? '#8896B2' : '#596580',
                  textDecoration: item.completed ? 'line-through' : 'none',
                  fontFamily: '"Poppins", sans-serif',
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
                    color: '#0A3A7D',
                    fontWeight: 600,
                    cursor: 'poPoppins',
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

      {/* Upcoming Viewings */}
      <Paper sx={{ p: { xs: 2, sm: 3 }, borderRadius: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: '#333B4D',
              fontFamily: '"Poppins", sans-serif',
              fontSize: { xs: '1rem', sm: '1rem' },
            }}
          >
            Upcoming Viewings
          </Typography>
          <CalendarIcon sx={{ color: '#0A3A7D', fontSize: 20 }} />
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {upcomingViewings.map((viewing, index) => (
            <Box key={index}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  sx={{
                    backgroundColor: '#F0F5FF',
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
                      color: '#0A3A7D',
                      fontFamily: '"Poppins", sans-serif',
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
                      color: '#0A3A7D',
                      fontFamily: '"Poppins", sans-serif',
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
                      color: '#333B4D',
                      fontFamily: '"Poppins", sans-serif',
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
                        fontFamily: '"Poppins", sans-serif',
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
                        fontFamily: '"Poppins", sans-serif',
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
              color: '#333B4D',
              fontFamily: '"Poppins", sans-serif',
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
                      fontFamily: '"Poppins", sans-serif',
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
                      fontFamily: '"Poppins", sans-serif',
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

      {/* Dedicated Agent */}
      <Paper sx={{ p: { xs: 2, sm: 3 }, borderRadius: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: '#333B4D',
              fontFamily: '"Poppins", sans-serif',
              fontSize: { xs: '1rem', sm: '1.1rem' },
            }}
          >
            Your Dedicated Agent
          </Typography>
          <PersonIcon sx={{ color: '#333B4D', fontSize: 20 }} />
        </Box>

        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Avatar
            sx={{
              width: 80,
              height: 80,
              backgroundColor: '#0B397C',
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
              color: '#333B4D',
              fontFamily: '"Poppins", serif',
              fontSize: { xs: '1rem', sm: '1.1rem' },
              mb: 0.5,
            }}
          >
            Sarah Okafor
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: '#333B4D',
              fontFamily: '"Poppins", sans-serif',
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
                  color: '#333B4D',
                  fontFamily: '"Poppins", serif',
                  fontSize: { xs: '1.1rem', sm: '1.2rem' },
                }}
              >
                98%
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: '#333B4D',
                  fontFamily: '"Poppins", sans-serif',
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
                  color: '#333B4D',
                  fontFamily: '"Poppins", serif',
                  fontSize: { xs: '1.1rem', sm: '1.2rem' },
                }}
              >
                152
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: '#333B4D',
                  fontFamily: '"Poppins", sans-serif',
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
                backgroundColor: '#E6EDFF',
                color: '#0A3A7D',
                px: 2,
                py: 1,
                borderRadius: 2,
                fontWeight: 600,
                fontFamily: '"Poppins", sans-serif',
                fontSize: { xs: '0.8rem', sm: '0.9rem' },
                flex: 1,
                '&:hover': {
                  color: '#E6EDFF',
                  backgroundColor: '#0d2b4a',
                },
              }}
            >
              Call
            </Button>
            <Button
              variant="contained"
              startIcon={<MessageIcon />}
              sx={{
                backgroundColor: '#FFE9B8',
                color: '#0A3A7D',
                px: 2,
                py: 1,
                borderRadius: 2,
                fontWeight: 600,
                fontFamily: '"Poppins", sans-serif',
                fontSize: { xs: '0.8rem', sm: '0.9rem' },
                flex: 1,
                '&:hover': {
                  color: '#FFE9B8',
                  backgroundColor: '#0A3A7D',
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
        flexDirection: { xs: 'column', md: 'row' },
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
          width: { md: 280, lg: 300, xl: 320 }, 
          display: { xs: 'none', md: 'block' },
          position: 'sticky',
          top: 20,
          height: 'fit-content',
          flexShrink: 0,
          minWidth: { md: 280, lg: 300, xl: 320 },
          overflow: 'hidden',
          maxWidth: { md: 280, lg: 300, xl: 320 },
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
          display: { xs: 'block', md: 'none' },
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
