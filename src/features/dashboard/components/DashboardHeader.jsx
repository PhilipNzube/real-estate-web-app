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
  Divider,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  Mail as MailIcon,
  Favorite as FavoriteIcon,
  KeyboardArrowDown as ArrowDownIcon,
  Close as CloseIcon,
  MoreVert as MoreVertIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import NLHLogo from '../../../shared/components/icons/NLHLogo';

const DashboardHeader = ({ onSidebarToggle, sidebarOpen }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const navigate = useNavigate();
  const [propertyMenuAnchor, setPropertyMenuAnchor] = useState(null);
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [dropdownExpanded, setDropdownExpanded] = useState(false);
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);

  // Determine if we should show mobile menu due to space constraints
  const shouldShowMobileMenu = isMobile || (isTablet && sidebarOpen);

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

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
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
          zIndex: 1200,
      }}
    >
      <Toolbar sx={{ 
        justifyContent: 'space-between',
          px: { xs: 1.5, sm: 2, md: 3 },
        py: { xs: 1, sm: 1.5 },
          minHeight: { xs: 64, sm: 70 },
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
                fontFamily: '"Axiforma", serif',
                display: { xs: 'none', sm: 'block' },
                '@media (max-width: 450px)': {
                  display: 'none',
                },
                '@media (min-width: 451px)': {
                  display: 'block',
                },
              }}
            >
              Naija Luxury Homes
            </Typography>
          </Box>
        </Box>

                    {/* Center Section - Desktop: Unified Search Bar, Tablet: Icons */}
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
            {/* Desktop: Unified Search and Properties Bar */}
        <Box
          sx={{
                display: shouldShowMobileMenu ? 'none' : { xs: 'none', md: 'flex' },
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                borderRadius: 3,
                minWidth: { md: 350, lg: 400 },
                maxWidth: { md: 500, lg: 600 },
                width: { md: '40%', lg: '45%' },
                height: 44,
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              }}
            >
              {/* Search Section */}
        <Box
          onClick={handleSearchToggle}
          sx={{
                  display: 'flex',
            alignItems: 'center',
                  flex: 1,
            px: 2,
                  py: 1,
                  borderRight: '1px solid rgba(255, 255, 255, 0.2)',
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  },
                }}
              >
                <SearchIcon sx={{ color: 'white', mr: 1.5, fontSize: 20 }} />
          <InputBase
            placeholder="Search for properties..."
            sx={{
              color: 'white',
              width: '100%',
              pointerEvents: 'none',
              '& .MuiInputBase-input': {
                color: 'white',
                      fontSize: '0.9rem',
                '&::placeholder': {
                  color: 'rgba(255, 255, 255, 0.7)',
                  opacity: 1,
                },
              },
            }}
          />
        </Box>

              {/* Properties Dropdown Section */}
              <Button
                onClick={handlePropertyMenuOpen}
                endIcon={<ArrowDownIcon />}
                sx={{
                  color: 'white',
                  px: 2,
                  py: 1,
                  textTransform: 'none',
                  fontWeight: 500,
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: '0.9rem',
                  whiteSpace: 'nowrap',
                  minWidth: 'fit-content',
                  borderRadius: 0,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                All Properties
              </Button>
            </Box>

            {/* Tablet: Search and Properties Icons */}
            <Box
              sx={{
                display: shouldShowMobileMenu ? 'none' : { xs: 'none', sm: 'flex', md: 'none' },
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

              {/* Tablet Expanded Search Bar */}
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
                        color: '#666',
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

              {/* Tablet Expanded Dropdown */}
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
                      Short Let
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
          </Box>

          {/* Right Section - Notifications, User, and Mobile Menu */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {/* Desktop/Tablet: Notifications, Messages, Favorites */}
            <Box sx={{ display: shouldShowMobileMenu ? 'none' : { xs: 'none', sm: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
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
            </Box>

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

            {/* Mobile: More Options Menu */}
            <IconButton
              color="inherit"
              onClick={handleMobileMenuOpen}
              sx={{ display: shouldShowMobileMenu ? 'flex' : { xs: 'flex', sm: 'flex', md: 'none' } }}
            >
              <MoreVertIcon />
            </IconButton>
        </Box>
      </Toolbar>

        {/* Properties Dropdown Menu */}
        <Menu
          anchorEl={propertyMenuAnchor}
          open={Boolean(propertyMenuAnchor)}
          onClose={handlePropertyMenuClose}
          PaperProps={{
            sx: {
              color: "black",
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
          <MenuItem onClick={handlePropertyMenuClose}>Short Let</MenuItem>
          <MenuItem onClick={handlePropertyMenuClose}>Investment</MenuItem>
        </Menu>

        {/* Mobile Tools Menu */}
        <Menu
          anchorEl={mobileMenuAnchor}
          open={Boolean(mobileMenuAnchor)}
          onClose={handleMobileMenuClose}
          PaperProps={{
            sx: {
              color: "black",
              mt: 1,
              minWidth: 200,
              borderRadius: 2,
              boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
            },
          }}
        >
          {/* Search Option */}
          <MenuItem 
            onClick={() => {
              handleMobileMenuClose();
              setSearchExpanded(true);
            }}
            sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
          >
            <SearchIcon sx={{ fontSize: 20 }} />
            Search Properties
          </MenuItem>
          
          <Divider />
          
          {/* Properties Dropdown Option */}
          <MenuItem 
            onClick={() => {
              handleMobileMenuClose();
              setDropdownExpanded(true);
            }}
            sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
          >
            <ArrowDownIcon sx={{ fontSize: 20 }} />
            All Properties
          </MenuItem>
          
          <Divider />
          
          {/* Notifications */}
          <MenuItem 
            onClick={handleMobileMenuClose}
            sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
          >
            <Badge badgeContent={3} color="error">
              <NotificationsIcon sx={{ fontSize: 20 }} />
            </Badge>
            Notifications
          </MenuItem>
          
          {/* Messages */}
          <MenuItem 
            onClick={handleMobileMenuClose}
            sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
          >
            <Badge badgeContent={5} color="error">
              <MailIcon sx={{ fontSize: 20 }} />
            </Badge>
            Messages
          </MenuItem>
          
          {/* Favorites */}
          <MenuItem 
            onClick={handleMobileMenuClose}
            sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
          >
            <FavoriteIcon sx={{ fontSize: 20 }} />
            Favorites
          </MenuItem>
        </Menu>

        {/* Mobile/Medium Expanded Search Bar */}
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
                  color: '#666',
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

        {/* Mobile/Medium Expanded Dropdown */}
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
                Short Let
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
    </AppBar>
    </ClickAwayListener>
  );
};

export default DashboardHeader;
