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

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = React.useState(false);

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
    }}>
      {/* Header */}
      <Box sx={{ 
        p: 3, 
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        textAlign: 'center'
      }}>
        <Typography 
          variant="h6" 
          sx={{ 
            color: 'white',
            fontWeight: 700,
            fontSize: '1.3rem',
            fontFamily: '"Lora", serif',
          }}
        >
          Naija Luxury Homes
        </Typography>
      </Box>

      {/* Navigation Items */}
      <List sx={{ flex: 1, pt: 2, overflow: 'hidden' }}>
        {navItems.map((item) => (
          <ListItem 
            key={item} 
            disablePadding
            sx={{
              mx: 2,
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
                py: 1.5,
                px: 2,
                '& .MuiListItemText-primary': {
                  color: 'white',
                  fontWeight: 500,
                  fontSize: '1rem',
                  fontFamily: '"Poppins", sans-serif',
                }
              }}
            />
          </ListItem>
        ))}
      </List>

      {/* Action Buttons */}
      <Box sx={{ p: 3, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <Button
          fullWidth
          sx={{
            color: 'white',
            fontWeight: 500,
            fontSize: '1rem',
            fontFamily: '"Poppins", sans-serif',
            mb: 2,
            py: 1.5,
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
            fontSize: '1rem',
            fontWeight: 600,
            fontFamily: '"Poppins", sans-serif',
            py: 1.5,
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
            sx={{ 
              color: 'text.primary',
              fontWeight: 700,
              fontSize: '1.5rem',
              fontFamily: '"Lora", serif',
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
            width: 280,
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
