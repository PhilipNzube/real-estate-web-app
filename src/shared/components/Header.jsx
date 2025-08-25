import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  useTheme,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const navItems = ['Home', 'Properties', 'Mortgage', 'Investment', 'About'];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ 
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'linear-gradient(135deg, #153C65E5 0%, #153C65B2 100%)',
      overflow: 'hidden',
      width: '100%',
    }}>
      {/* Header */}
      <Box sx={{ 
        p: { xs: 2, sm: 3 }, 
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        textAlign: 'center',
        flexShrink: 0,
      }}>
        <Typography 
          variant="h6" 
          onClick={() => navigate('/')}
          sx={{ 
            color: 'white',
            fontWeight: 700,
            fontSize: { xs: '1.1rem', sm: '1.3rem' },
            fontFamily: '"Lora", serif',
            cursor: 'pointer',
            '&:hover': {
              opacity: 0.8,
            },
          }}
        >
          Naija Luxury Homes
        </Typography>
      </Box>

      {/* Navigation Items - Scrollable */}
      <Box sx={{ 
        flex: 1, 
        overflowY: 'auto',
        overflowX: 'hidden',
        minHeight: 0,
        py: { xs: 1, sm: 2 },
      }}>
        <List sx={{ 
          pt: { xs: 1, sm: 2 },
          pb: { xs: 2, sm: 3 },
        }}>
          {navItems.map((item) => (
            <ListItem 
              key={item} 
              disablePadding
              sx={{
                mx: { xs: 1.5, sm: 2 },
                mb: 1,
                borderRadius: 2,
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)',
                },
              }}
            >
              <ListItemText 
                primary={item} 
                sx={{ 
                  py: { xs: 1, sm: 1.5 },
                  px: { xs: 1.5, sm: 2 },
                  '& .MuiListItemText-primary': {
                    color: 'white',
                    fontWeight: 500,
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    fontFamily: '"Poppins", sans-serif',
                  }
                }}
              />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Action Buttons - Fixed at Bottom */}
      <Box sx={{ 
        p: { xs: 2, sm: 3 }, 
        borderTop: '1px solid rgba(255,255,255,0.1)',
        flexShrink: 0,
        backgroundColor: 'rgba(21, 60, 101, 0.95)',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <Button
          fullWidth
          onClick={() => navigate('/register')}
          sx={{
            color: 'white',
            fontWeight: 500,
            fontSize: { xs: '0.9rem', sm: '1rem' },
            fontFamily: '"Poppins", sans-serif',
            mb: { xs: 1.5, sm: 2 },
            py: { xs: 1, sm: 1.5 },
            borderRadius: 2,
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.1)',
            },
          }}
        >
          Register
        </Button>
        <Button
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: 'white',
            color: '#153C65',
            borderRadius: '30px',
            fontSize: { xs: '0.9rem', sm: '1rem' },
            fontWeight: 600,
            fontFamily: '"Poppins", sans-serif',
            py: { xs: 1, sm: 1.5 },
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.9)',
            },
          }}
        >
          Sign In
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          boxShadow: 'none',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo */}
          <Typography 
            variant="h6" 
            component="div" 
            onClick={() => navigate('/')}
            sx={{ 
              color: 'text.primary',
              fontWeight: 700,
              fontSize: '1.5rem',
              fontFamily: '"Lora", serif',
              cursor: 'pointer',
              '&:hover': {
                opacity: 0.8,
              },
            }}
          >
            Naija Luxury Homes
          </Typography>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: 'flex',  alignItems: 'center' }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{
                    color: 'text.primary',
                    fontWeight: 500,
                    fontSize: { md: '0.9rem', lg: '1rem' },
                    px: { md: 1, lg: 2 },
                    fontFamily: '"Poppins", sans-serif',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.1)',
                    },
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
          )}

          {/* User Actions */}
          <Box sx={{ display: 'flex',  alignItems: 'center' }}>
            {!isMobile && (
              <Button
                onClick={() => navigate('/register')}
                sx={{
                  color: 'text.primary',
                  fontWeight: 500,
                  fontSize: { md: '0.9rem', lg: '1rem' },
                  fontFamily: '"Poppins", sans-serif',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.1)',
                  },
                }}
              >
                Register
              </Button>
            )}
            {!isMobile && (
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#FFFFFF26',
                  color: 'white',
                  borderRadius: '30px',
                  border: '1px solid #FFFFFF4D',
                  px: { xs: 2, md: 2, lg: 3 },
                  fontSize: { xs: '0.8rem', md: '0.9rem', lg: '1rem' },
                  fontFamily: '"Poppins", sans-serif',
                  '&:hover': {
                    backgroundColor: '#153C65',
                  },
                }}
              >
                Sign In
              </Button>
            )}
            
            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ color: 'text.primary' }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: { xs: 280, sm: 320 },
            maxWidth: '85vw',
            height: '100vh',
            backgroundColor: 'transparent',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            backdropFilter: 'blur(10px)',
            overflow: 'hidden',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
