import React from 'react';
import { Box, Drawer, IconButton, useMediaQuery, useTheme, Typography } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import PropertiesFilters from './PropertiesFilters';
import { useDashboard } from '../context/DashboardContext';

const PropertiesSidebar = ({ leftSidebarOpen, onLeftSidebarToggle }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const { sidebarOpen: mainSidebarOpen } = useDashboard();

  // Use the same logic as DashboardHeader
  // On tablet/medium screens, when main sidebar is open, show overlay behavior
  const shouldShowOverlay = isMobile || (isTablet && mainSidebarOpen);

  return (
    <>
      {/* Left Sidebar Toggle Button - Show on mobile and when overlay is needed on tablet */}
      {shouldShowOverlay && (
        <IconButton
          onClick={onLeftSidebarToggle}
          sx={{
            position: 'fixed',
            top: 80, // Below the filter header
            left: 16,
            zIndex: 1700,
            backgroundColor: '#153C65',
            color: 'white',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            '&:hover': {
              backgroundColor: '#0d2b4a',
            },
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      {/* Left Sidebar - Filters - Persistent when main sidebar is closed on tablet */}
      {!shouldShowOverlay && (
        <Box
          sx={{
            width: 280,
            minWidth: 280,
            borderRight: '1px solid #e0e0e0',
            backgroundColor: 'white',
            overflow: 'auto',
          }}
        >
          <PropertiesFilters />
        </Box>
      )}

      {/* Mobile/Tablet Left Sidebar Drawer - Overlay when needed */}
      {shouldShowOverlay && (
        <Drawer
          anchor="left"
          open={leftSidebarOpen}
          onClose={onLeftSidebarToggle}
          sx={{
            zIndex: 1700,
            '& .MuiDrawer-paper': {
              width: 280,
              backgroundColor: 'white',
              borderRight: '1px solid #e0e0e0',
            },
          }}
        >
          {/* Header with Close Button */}
          <Box sx={{
            p: 2,
            borderBottom: '1px solid #e0e0e0',
            backgroundColor: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#333' }}>
              Filters
            </Typography>
            <IconButton
              onClick={onLeftSidebarToggle}
              sx={{
                color: '#666',
                backgroundColor: 'transparent',
                '&:hover': {
                  backgroundColor: '#f5f5f5',
                }
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          
          {/* Filters Content */}
          <PropertiesFilters />
        </Drawer>
      )}
    </>
  );
};

export default PropertiesSidebar;
