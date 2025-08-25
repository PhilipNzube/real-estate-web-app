import React, { useState, useEffect } from 'react';
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
  Menu,
  MenuItem,
  Button,
  Paper,
  ClickAwayListener,
  Fade,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  Mail as MailIcon,
  Favorite as FavoriteIcon,
  KeyboardArrowDown as ArrowDownIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import NLHLogo from '../../../shared/components/icons/NLHLogo';

const DashboardHeader = ({ onSidebarToggle }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const [propertyMenuAnchor, setPropertyMenuAnchor] = useState(null);
  const [searchExpanded, setSearchExpanded] = useState(!isMobile);
  const [dropdownExpanded, setDropdownExpanded] = useState(!isMobile);

  const handlePropertyMenuOpen = (event) => {
    setPropertyMenuAnchor(event.currentTarget);
  };

  const handlePropertyMenuClose = () => {
    setPropertyMenuAnchor(null);
  };

  const handleSearchToggle = () => {
    setSearchExpanded(!searchExpanded);
    if (dropdownExpanded) setDropdownExpanded(false);
  };

  const handleDropdownToggle = () => {
    setDropdownExpanded(!dropdownExpanded);
    if (searchExpanded) setSearchExpanded(false);
  };

  const handleClickAway = () => {
    setSearchExpanded(false);
    setDropdownExpanded(false);
  };

  // Update expanded state when screen size changes
  useEffect(() => {
    setSearchExpanded(false);
    setDropdownExpanded(false);
  }, [isMobile]);

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: '#153C65',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        //zIndex: theme.zIndex.drawer + 1,
        zIndex: 1,
        }}
      >
      <Toolbar sx={{ 
        justifyContent: 'space-between',
        px: { xs: 1.5, sm: 2, md: 3 },
        py: { xs: 1, sm: 1.5 },
        minHeight: { xs: 64, sm: 70 },
        overflow: { xs: 'auto', sm: 'hidden' },
        '&::-webkit-scrollbar': {
          height: '4px',
        },
        '&::-webkit-scrollbar-track': {
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '2px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'rgba(255, 255, 255, 0.3)',
          borderRadius: '2px',
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.5)',
          },
        },
      }}>
        {/* Left Section - Logo and Menu */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Menu Button - Show on mobile and tablet for dashboard */}
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

        {/* Center Section - Desktop: Normal Search and Dropdown, Mobile: Icons */}
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            alignItems: 'center',
            gap: { sm: 1, md: 2 },
            flex: 1,
            mx: { sm: 1, md: 2 },
            minWidth: 0,
            overflow: 'hidden',
          }}
        >
          {/* Desktop: Normal Search Bar */}
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: 2,
              px: { sm: 1, md: 1.5, lg: 2 },
              py: 0.5,
              minWidth: { sm: 120, md: 180, lg: 250 },
              maxWidth: { sm: 200, md: 280, lg: 400 },
              flex: 1,
              overflow: 'hidden',
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

          {/* Desktop: Normal Properties Dropdown */}
          <Button
            onClick={handlePropertyMenuOpen}
            endIcon={<ArrowDownIcon />}
            sx={{
              color: 'white',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: 2,
              px: { sm: 0.5, md: 1, lg: 2 },
              py: 0.5,
              textTransform: 'none',
              fontWeight: 500,
              fontFamily: '"Poppins", sans-serif',
              fontSize: { sm: '0.75rem', md: '0.8rem', lg: '0.9rem' },
              whiteSpace: 'nowrap',
              minWidth: 'fit-content',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              },
            }}
          >
            All Properties
          </Button>
        </Box>

        {/* Mobile: Search and Dropdown Icons */}
        <Box
          sx={{
            display: { xs: 'flex', sm: 'none' },
            alignItems: 'center',
            gap: 1,
            position: 'relative',
          }}
        >
          {/* Search Icon */}
          <IconButton
            onClick={handleSearchToggle}
            sx={{
              color: 'white',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              },
            }}
          >
            <SearchIcon />
          </IconButton>

          {/* Properties Dropdown Icon */}
          <IconButton
            onClick={handleDropdownToggle}
            sx={{
              color: 'white',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              },
            }}
          >
            <ArrowDownIcon />
          </IconButton>

          {/* Mobile Expanded Search Bar */}
          <Fade in={searchExpanded}>
            <Paper
              sx={{
                position: 'fixed',
                top: 70,
                left: '50%',
                transform: 'translateX(-50%)',
                p: 2,
                minWidth: 280,
                maxWidth: 320,
                zIndex: 1500,
                boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                borderRadius: 2,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <SearchIcon sx={{ color: '#666' }} />
                <InputBase
                  placeholder="Search for properties..."
                  autoFocus
                  sx={{
                    flex: 1,
                    '& .MuiInputBase-input': {
                      fontSize: '1rem',
                    },
                  }}
                />
                <IconButton
                  size="small"
                  onClick={() => setSearchExpanded(false)}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
            </Paper>
          </Fade>

          {/* Mobile Expanded Dropdown */}
          <Fade in={dropdownExpanded}>
            <Paper
              sx={{
                position: 'fixed',
                top: 70,
                left: '50%',
                transform: 'translateX(-50%)',
                p: 1,
                minWidth: 180,
                zIndex: 1500,
                boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                borderRadius: 2,
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                <Button
                  fullWidth
                  sx={{
                    justifyContent: 'flex-start',
                    textTransform: 'none',
                    color: '#333',
                    '&:hover': { backgroundColor: '#f5f5f5' },
                  }}
                >
                  Residential
                </Button>
                <Button
                  fullWidth
                  sx={{
                    justifyContent: 'flex-start',
                    textTransform: 'none',
                    color: '#333',
                    '&:hover': { backgroundColor: '#f5f5f5' },
                  }}
                >
                  Commercial
                </Button>
                <Button
                  fullWidth
                  sx={{
                    justifyContent: 'flex-start',
                    textTransform: 'none',
                    color: '#333',
                    '&:hover': { backgroundColor: '#f5f5f5' },
                  }}
                >
                  Land
                </Button>
                <Button
                  fullWidth
                  sx={{
                    justifyContent: 'flex-start',
                    textTransform: 'none',
                    color: '#333',
                    '&:hover': { backgroundColor: '#f5f5f5' },
                  }}
                >
                  Investment
                </Button>
              </Box>
            </Paper>
          </Fade>
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

      {/* Properties Dropdown Menu */}
      <Menu
        anchorEl={propertyMenuAnchor}
        open={Boolean(propertyMenuAnchor)}
        onClose={handlePropertyMenuClose}
        PaperProps={{
          sx: {
            mt: 1,
            minWidth: 200,
            borderRadius: 2,
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          },
        }}
      >
        <MenuItem onClick={handlePropertyMenuClose}>Residential</MenuItem>
        <MenuItem onClick={handlePropertyMenuClose}>Commercial</MenuItem>
        <MenuItem onClick={handlePropertyMenuClose}>Land</MenuItem>
        <MenuItem onClick={handlePropertyMenuClose}>Investment</MenuItem>
      </Menu>
    </AppBar>
    </ClickAwayListener>
  );
};

export default DashboardHeader;
