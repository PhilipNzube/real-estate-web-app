import React, { useState } from 'react';
import { Box, Drawer, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import PropertiesHeader from '../components/PropertiesHeader';
import PropertiesFilters from '../components/PropertiesFilters';
import PropertiesList from '../components/PropertiesList';
import PropertiesFilterHeader from '../components/PropertiesFilterHeader';

const PropertiesPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(false);

  const handleLeftSidebarToggle = () => {
    setLeftSidebarOpen(!leftSidebarOpen);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
      {/* Filter Header Section - Above everything */}
      <Box sx={{ 
        backgroundColor: 'white', 
        borderBottom: '1px solid #e0e0e0',
        zIndex: 1100,
        position: 'relative'
      }}>
        <PropertiesFilterHeader />
      </Box>

      {/* Main Content Area */}
      <Box sx={{ 
        display: 'flex', 
        flex: 1, 
        overflow: 'hidden',
        position: 'relative'
      }}>
        {/* Mobile Left Sidebar Toggle Button */}
        {isMobile && (
          <IconButton
            onClick={handleLeftSidebarToggle}
            sx={{
              position: 'fixed',
              top: 80, // Below the filter header
              left: 16,
              zIndex: 1400,
              backgroundColor: 'white',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              '&:hover': {
                backgroundColor: '#f5f5f5',
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        )}

        {/* Left Sidebar - Filters */}
        <Box
          sx={{
            width: { xs: 0, md: 280 },
            minWidth: { xs: 0, md: 280 },
            display: { xs: 'none', md: 'block' },
            borderRight: '1px solid #e0e0e0',
            backgroundColor: 'white',
            overflow: 'auto',
          }}
        >
          <PropertiesFilters />
        </Box>

        {/* Mobile Left Sidebar Drawer */}
        <Drawer
          anchor="left"
          open={leftSidebarOpen}
          onClose={handleLeftSidebarToggle}
          sx={{
            zIndex: 1500, // Higher than the toggle button (1400)
            '& .MuiDrawer-paper': {
              width: 280,
              backgroundColor: 'white',
              borderRight: '1px solid #e0e0e0',
            },
          }}
        >
          <PropertiesFilters />
        </Drawer>

        {/* Main Content */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'auto',
            backgroundColor: '#f8f9fa',
            padding: { xs: 1.5, sm: 2, md: 3 },
            minWidth: 0, // Prevent flex item from overflowing
          }}
        >
          {/* Properties Header (Available Properties section) */}
          <PropertiesHeader />
          
          {/* Properties List */}
          <PropertiesList />
        </Box>
      </Box>
    </Box>
  );
};

export default PropertiesPage;
