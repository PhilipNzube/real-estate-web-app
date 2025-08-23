import React from 'react';
import {
  Drawer,
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Divider,
  Button,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Business as BusinessIcon,
  TrendingUp as TrendingUpIcon,
  AccountBalance as AccountBalanceIcon,
  Favorite as FavoriteIcon,
  Chat as ChatIcon,
  Notifications as NotificationsIcon,
  Mail as MailIcon,
  Person as PersonIcon,
  CreditCard as CreditCardIcon,
  Help as HelpIcon,
  Logout as LogoutIcon,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const DashboardSidebar = ({ open, onClose, isMobile }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      title: 'Dashboard',
      icon: <DashboardIcon />,
      path: '/dashboard',
    },
    {
      title: 'Properties',
      icon: <BusinessIcon />,
      path: '/dashboard/properties',
    },
    {
      title: 'Investment',
      icon: <TrendingUpIcon />,
      path: '/dashboard/investment',
    },
    {
      title: 'Mortgage',
      icon: <AccountBalanceIcon />,
      path: '/dashboard/mortgage',
    },
  ];

  const quickAccessItems = [
    {
      title: 'Saved Properties',
      icon: <FavoriteIcon />,
      path: '/dashboard/saved',
    },
    {
      title: 'My Inquiries',
      icon: <ChatIcon />,
      path: '/dashboard/inquiries',
    },
    {
      title: 'Property Alerts',
      icon: <NotificationsIcon />,
      path: '/dashboard/alerts',
    },
    {
      title: 'Messages',
      icon: <MailIcon />,
      path: '/dashboard/messages',
    },
  ];

  const accountItems = [
    {
      title: 'Profile Settings',
      icon: <PersonIcon />,
      path: '/dashboard/profile',
    },
    {
      title: 'Billing & Payments',
      icon: <CreditCardIcon />,
      path: '/dashboard/billing',
    },
    {
      title: 'Help & Support',
      icon: <HelpIcon />,
      path: '/dashboard/support',
    },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    if (isMobile) {
      onClose();
    }
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const drawerContent = (
    <Box sx={{ width: 280, height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* User Profile Section */}
      <Box sx={{ p: 3, borderBottom: '1px solid #e0e0e0' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar
            sx={{
              width: 48,
              height: 48,
              backgroundColor: '#153C65',
              color: 'white',
              fontWeight: 600,
              mr: 2,
            }}
          >
            JD
          </Avatar>
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: '#153C65',
                fontSize: '1rem',
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              JOHN DOE
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#666',
                fontSize: '0.8rem',
                fontFamily: '"Inter", sans-serif',
              }}
            >
              BUYER ACCOUNT
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Main Menu */}
      <Box sx={{ flex: 1, overflow: 'auto' }}>
        <List sx={{ py: 1 }}>
          {menuItems.map((item) => (
            <ListItem key={item.title} disablePadding>
              <ListItemButton
                onClick={() => handleNavigation(item.path)}
                sx={{
                  mx: 1,
                  borderRadius: 1,
                  backgroundColor: isActive(item.path) ? '#E3F2FD' : 'transparent',
                  color: isActive(item.path) ? '#153C65' : '#666',
                  '&:hover': {
                    backgroundColor: isActive(item.path) ? '#E3F2FD' : '#f5f5f5',
                  },
                  py: 1.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    color: isActive(item.path) ? '#153C65' : '#666',
                    minWidth: 40,
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  sx={{
                    '& .MuiListItemText-primary': {
                      fontWeight: isActive(item.path) ? 600 : 400,
                      fontSize: '0.9rem',
                      fontFamily: '"Poppins", sans-serif',
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider sx={{ my: 2 }} />

        {/* Quick Access */}
        <Typography
          variant="subtitle2"
          sx={{
            px: 3,
            py: 1,
            color: '#999',
            fontSize: '0.75rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: 0.5,
            fontFamily: '"Inter", sans-serif',
          }}
        >
          Quick Access
        </Typography>
        <List sx={{ py: 1 }}>
          {quickAccessItems.map((item) => (
            <ListItem key={item.title} disablePadding>
              <ListItemButton
                onClick={() => handleNavigation(item.path)}
                sx={{
                  mx: 1,
                  borderRadius: 1,
                  backgroundColor: isActive(item.path) ? '#E3F2FD' : 'transparent',
                  color: isActive(item.path) ? '#153C65' : '#666',
                  '&:hover': {
                    backgroundColor: isActive(item.path) ? '#E3F2FD' : '#f5f5f5',
                  },
                  py: 1.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    color: isActive(item.path) ? '#153C65' : '#666',
                    minWidth: 40,
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  sx={{
                    '& .MuiListItemText-primary': {
                      fontWeight: isActive(item.path) ? 600 : 400,
                      fontSize: '0.9rem',
                      fontFamily: '"Poppins", sans-serif',
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider sx={{ my: 2 }} />

        {/* Account */}
        <Typography
          variant="subtitle2"
          sx={{
            px: 3,
            py: 1,
            color: '#999',
            fontSize: '0.75rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: 0.5,
            fontFamily: '"Inter", sans-serif',
          }}
        >
          Account
        </Typography>
        <List sx={{ py: 1 }}>
          {accountItems.map((item) => (
            <ListItem key={item.title} disablePadding>
              <ListItemButton
                onClick={() => handleNavigation(item.path)}
                sx={{
                  mx: 1,
                  borderRadius: 1,
                  backgroundColor: isActive(item.path) ? '#E3F2FD' : 'transparent',
                  color: isActive(item.path) ? '#153C65' : '#666',
                  '&:hover': {
                    backgroundColor: isActive(item.path) ? '#E3F2FD' : '#f5f5f5',
                  },
                  py: 1.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    color: isActive(item.path) ? '#153C65' : '#666',
                    minWidth: 40,
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  sx={{
                    '& .MuiListItemText-primary': {
                      fontWeight: isActive(item.path) ? 600 : 400,
                      fontSize: '0.9rem',
                      fontFamily: '"Poppins", sans-serif',
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Logout Section */}
      <Box sx={{ p: 2, borderTop: '1px solid #e0e0e0' }}>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => navigate('/')}
            sx={{
              borderRadius: 1,
              color: '#d32f2f',
              '&:hover': {
                backgroundColor: '#ffebee',
              },
              py: 1.5,
            }}
          >
            <ListItemIcon sx={{ color: '#d32f2f', minWidth: 40 }}>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText
              primary="Logout Account"
              sx={{
                '& .MuiListItemText-primary': {
                  fontWeight: 500,
                  fontSize: '0.9rem',
                  fontFamily: '"Poppins", sans-serif',
                },
              }}
            />
          </ListItemButton>
        </ListItem>
      </Box>
    </Box>
  );

  return (
    <Drawer
      variant={isMobile ? 'temporary' : 'persistent'}
      open={open}
      onClose={onClose}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        '& .MuiDrawer-paper': {
          width: 280,
          boxSizing: 'border-box',
          backgroundColor: isMobile ? '#153C65' : 'white',
          borderRight: isMobile ? 'none' : '1px solid #e0e0e0',
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      {isMobile ? (
        <Box sx={{ 
          width: '100%', 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column',
          backgroundColor: '#153C65',
          color: 'white',
        }}>
          {/* Mobile Header */}
          <Box sx={{ 
            p: 3, 
            textAlign: 'center',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: '#DFC14C',
                fontSize: '1.2rem',
                fontFamily: '"Lora", serif',
              }}
            >
              Naija Luxury Homes
            </Typography>
          </Box>

          {/* Mobile Navigation */}
          <Box sx={{ flex: 1, overflow: 'auto', py: 2 }}>
            <List sx={{ py: 1 }}>
              {[
                { title: 'Home', path: '/' },
                { title: 'Properties', path: '/dashboard/properties' },
                { title: 'Mortgage', path: '/dashboard/mortgage' },
                { title: 'Investment', path: '/dashboard/investment' },
                { title: 'About', path: '/about' },
              ].map((item) => (
                <ListItem key={item.title} disablePadding>
                  <ListItemButton
                    onClick={() => handleNavigation(item.path)}
                    sx={{
                      mx: 1,
                      borderRadius: 1,
                      backgroundColor: isActive(item.path) ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      },
                      py: 1.5,
                    }}
                  >
                    <ListItemText
                      primary={item.title}
                      sx={{
                        '& .MuiListItemText-primary': {
                          fontWeight: isActive(item.path) ? 600 : 400,
                          fontSize: '0.95rem',
                          fontFamily: '"Poppins", sans-serif',
                        },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Mobile Register Button */}
          <Box sx={{ p: 3, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => navigate('/register')}
              sx={{
                backgroundColor: '#DFC14C',
                color: '#153C65',
                py: 1.5,
                borderRadius: 2,
                fontWeight: 600,
                fontSize: '0.95rem',
                fontFamily: '"Poppins", sans-serif',
                '&:hover': {
                  backgroundColor: '#D4B63C',
                },
              }}
            >
              Register
            </Button>
          </Box>
        </Box>
      ) : (
        drawerContent
      )}
    </Drawer>
  );
};

export default DashboardSidebar;
