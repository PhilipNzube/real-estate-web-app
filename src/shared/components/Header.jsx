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
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, color: 'primary.main' }}>
        Naija Luxury Homes
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemText 
              primary={item} 
              sx={{ 
                textAlign: 'center',
                '& .MuiListItemText-primary': {
                  color: 'text.primary',
                  fontWeight: 500,
                }
              }}
            />
          </ListItem>
        ))}
      </List>
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
            width: 240,
            backgroundColor: 'background.paper',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
