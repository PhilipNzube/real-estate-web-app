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
  IconButton,
  useTheme,
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
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const DashboardSidebar = ({ open, onClose, isMobile, onToggle }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();

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
      <Box sx={{ p: 3, borderBottom: '1px solid #e0e0e0', position: 'relative' }}>
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
          <Box sx={{ flex: 1 }}>
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
          <IconButton
            onClick={onToggle}
            sx={{
              color: '#153C65',
              '&:hover': {
                backgroundColor: 'rgba(21, 60, 101, 0.1)',
              },
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
        </Box>
      </Box>
      

      {/* Sidebar Menu */}
      <Box sx={{ flex: 1, overflow: 'auto' }}>
        {/* Main Menu */}
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
          Main Menu
        </Typography>
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
          width: isMobile ? 280 : (open ? 280 : 0),
          boxSizing: 'border-box',
          backgroundColor: 'white',
          borderRight: '1px solid #e0e0e0',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          zIndex: 1,
          transition: theme.transitions.create(['width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        },
      }}
    >
      {drawerContent}
    </Drawer>
  );
};

export default DashboardSidebar;
