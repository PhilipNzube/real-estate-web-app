import React from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  InputBase,
  IconButton,
  Badge,
  Avatar,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  Mail as MailIcon,
  Favorite as FavoriteIcon,
  KeyboardArrowDown as ArrowDownIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import NLHLogo from '../../../shared/components/icons/NLHLogo';

const DashboardHeader = ({ onSidebarToggle, sidebarOpen }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: '#153C65',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        zIndex: theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar sx={{ 
        justifyContent: 'space-between',
        px: { xs: 2, sm: 3 },
        py: { xs: 1, sm: 1.5 },
        minHeight: { xs: 64, sm: 70 }
      }}>
        {/* Left Section - Logo and Menu */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Menu Button */}
          <IconButton
            color="inherit"
            onClick={onSidebarToggle}
            sx={{ 
              display: { xs: 'flex', md: 'none' },
              mr: 1 
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo */}
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center',
              cursor: 'pointer',
              '&:hover': { opacity: 0.8 },
            }}
            onClick={() => navigate('/')}
          >
            <Box
              sx={{
                width: { xs: 28, sm: 32 },
                height: { xs: 28, sm: 32 },
                backgroundColor: '#DFC14C',
                borderRadius: 1.5,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mr: 1,
              }}
            >
              <NLHLogo 
                width={16}
                height={20}
                color="#153C65"
              />
            </Box>
            <Typography 
              variant="h6" 
              sx={{ 
                color: 'white',
                fontWeight: 700,
                fontSize: { xs: '1rem', sm: '1.2rem' },
                fontFamily: '"Lora", serif',
                display: { xs: 'none', sm: 'block' }
              }}
            >
              Naija Luxury Homes
            </Typography>
          </Box>
        </Box>

        {/* Center Section - Search */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: 2,
            px: 2,
            py: 0.5,
            minWidth: 300,
            maxWidth: 500,
            flex: 1,
            mx: 4,
          }}
        >
          <SearchIcon sx={{ color: 'white', mr: 1, fontSize: 20 }} />
          <InputBase
            placeholder="Search for properties..."
            sx={{
              color: 'white',
              width: '100%',
              '& .MuiInputBase-input': {
                color: 'white',
                '&::placeholder': {
                  color: 'rgba(255, 255, 255, 0.7)',
                  opacity: 1,
                },
              },
            }}
          />
        </Box>

        {/* Right Section - Notifications and User */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {/* Notifications */}
          <IconButton color="inherit" sx={{ position: 'relative' }}>
            <Badge badgeContent={3} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          {/* Messages */}
          <IconButton color="inherit" sx={{ position: 'relative' }}>
            <Badge badgeContent={5} color="error">
              <MailIcon />
            </Badge>
          </IconButton>

          {/* Favorites */}
          <IconButton color="inherit">
            <FavoriteIcon />
          </IconButton>

          {/* User Avatar */}
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}>
            <Avatar
              sx={{
                width: { xs: 32, sm: 36 },
                height: { xs: 32, sm: 36 },
                backgroundColor: '#DFC14C',
                color: '#153C65',
                fontWeight: 600,
                fontSize: { xs: '0.9rem', sm: '1rem' },
              }}
            >
              JD
            </Avatar>
            <IconButton color="inherit" sx={{ ml: 0.5 }}>
              <ArrowDownIcon sx={{ fontSize: 16 }} />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default DashboardHeader;
