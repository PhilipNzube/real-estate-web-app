import React from 'react';
import {
  Box,
  Typography,
  Card,
  Button,
} from '@mui/material';
import {
  Refresh as RefreshIcon,
  Notifications as NotificationsIcon,
  LocationOn as LocationIcon,
  Visibility as VisibilityIcon,
  Close as CloseIcon,
} from '@mui/icons-material';

const PropertyAlertsNotifications = () => {

  const notifications = [
    {
      id: 1,
      alertName: "Luxury Apartments in Victoria Island",
      price: "₦85,000,000",
      location: "Victoria Island, Lagos",
      time: "Today, 09:45 AM",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      alertName: "Family Homes in Lekki Phase 1",
      price: "₦150,000,000",
      location: "Lekki Phase 1, Lagos",
      time: "Yesterday, 3:20 PM",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      alertName: "Beachfront Properties",
      price: "₦350,000,000",
      location: "Banana Island, Lagos",
      time: "3 days ago",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop",
    },
  ];

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'white',
    }}>
      {/* Header */}
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        mb: 3,
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <RefreshIcon sx={{ color: '#0A3A7D', fontSize: 20 }} />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: '#0A3A7D',
              fontSize: { xs: '1rem', sm: '1.1rem' },
              fontFamily: '"Axiforma", sans-serif',
            }}
          >
            Recent Alert Notifications
          </Typography>
        </Box>
        <Button
          variant="text"
          size="small"
          sx={{
            color: '#0A3A7D',
            textTransform: 'none',
            fontWeight: 500,
            fontSize: '0.8rem',
            '&:hover': {
              backgroundColor: '#f8f9fa',
            },
          }}
        >
          See All &gt;
        </Button>
      </Box>

      {/* Notifications List - Timeline Structure */}
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          left: 12,
          top: 0,
          bottom: 0,
          width: 2,
          backgroundColor: '#e0e0e0',
          zIndex: 0,
        },
      }}>
        {notifications.map((notification) => (
          <Box
            key={notification.id}
            sx={{
              position: 'relative',
              display: 'flex',
              alignItems: 'flex-start',
              gap: 2,
              '&::before': {
                content: '""',
                position: 'absolute',
                left: 6,
                top: 20,
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: '#0A3A7D',
                border: '2px solid white',
                zIndex: 1,
              },
            }}
          >
            {/* Bell Icon */}
            <Box sx={{
              position: 'absolute',
              left: 0,
              top: 16,
              zIndex: 2,
            }}>
              <NotificationsIcon sx={{ 
                fontSize: 16, 
                color: '#0A3A7D',
                backgroundColor: 'white',
                borderRadius: '50%',
                padding: 0.5,
              }} />
            </Box>

            {/* Notification Card */}
            <Card
              sx={{
                flex: 1,
                p: 2,
                borderRadius: 2,
                backgroundColor: '#f8f9fa',
                border: '1px solid #e0e0e0',
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                },
              }}
            >
              <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                {/* Property Image */}
                <Box
                  sx={{
                    width: 60,
                    height: 45,
                    borderRadius: 1,
                    overflow: 'hidden',
                    flexShrink: 0,
                    backgroundColor: '#e0e0e0',
                    backgroundImage: `url(${notification.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                
                {/* Content */}
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      color: '#0A3A7D',
                      fontSize: '0.8rem',
                      fontFamily: '"Axiforma", sans-serif',
                      mb: 0.5,
                      lineHeight: 1.3,
                    }}
                  >
                    New match for "{notification.alertName}"
                  </Typography>
                  
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 700,
                      color: '#0A3A7D',
                      fontSize: '0.9rem',
                      fontFamily: '"Axiforma", sans-serif',
                      mb: 0.5,
                    }}
                  >
                    {notification.price}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 0.5 }}>
                    <LocationIcon sx={{ fontSize: 12, color: '#757575' }} />
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#757575',
                        fontSize: '0.7rem',
                        fontFamily: '"Axiforma", sans-serif',
                      }}
                    >
                      {notification.location}
                    </Typography>
                  </Box>
                  
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#757575',
                      fontSize: '0.7rem',
                      fontFamily: '"Axiforma", sans-serif',
                    }}
                  >
                    {notification.time}
                  </Typography>
                </Box>
              </Box>
              
              {/* Action Buttons */}
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Button
                  variant="contained"
                  size="small"
                  startIcon={<VisibilityIcon />}
                  sx={{
                    backgroundColor: '#E3F2FD',
                    color: '#1976D2',
                    textTransform: 'none',
                    fontWeight: 500,
                    fontSize: '0.7rem',
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1,
                    flex: 1,
                    '&:hover': {
                      backgroundColor: '#BBDEFB',
                    },
                  }}
                >
                  View Property
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<CloseIcon />}
                  sx={{
                    borderColor: '#e0e0e0',
                    color: '#757575',
                    textTransform: 'none',
                    fontWeight: 500,
                    fontSize: '0.7rem',
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1,
                    '&:hover': {
                      borderColor: '#bdbdbd',
                      backgroundColor: '#f5f5f5',
                    },
                  }}
                >
                  Dismiss
                </Button>
              </Box>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PropertyAlertsNotifications;
