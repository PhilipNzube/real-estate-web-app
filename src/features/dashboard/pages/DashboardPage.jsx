import React from 'react';
import { Box, useMediaQuery, useTheme, IconButton } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { ChevronRight as ChevronRightIcon } from '@mui/icons-material';
import DashboardSidebar from '../components/DashboardSidebar';
import DashboardHeader from '../components/DashboardHeader';
import { DashboardProvider, useDashboard } from '../context/DashboardContext';

const DashboardContent = () => {
  const theme = useTheme();
  const { sidebarOpen, handleSidebarToggle, handleSidebarClose, isMobile } = useDashboard();

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8f9fa', overflow: 'hidden', width: '100%' }}>
      {/* Sidebar - Show on all devices for dashboard */}
      <DashboardSidebar 
        open={sidebarOpen} 
        onClose={handleSidebarClose}
        isMobile={isMobile}
        onToggle={handleSidebarToggle}
      />
      
      {/* Main Content Area */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          ...(sidebarOpen && !isMobile && {
            marginLeft: '280px',
            width: 'calc(100vw - 280px)',
            minWidth: 0,
          }),
          ...(!sidebarOpen && !isMobile && {
            marginLeft: 0,
            width: '100%',
          }),
          position: 'relative',
          overflow: 'hidden',
          minWidth: 0,
          maxWidth: '100vw',
          boxSizing: 'border-box',
        }}
      >
        {/* Sidebar Toggle Button (when closed) */}
        {!sidebarOpen && !isMobile && (
          <IconButton
            onClick={handleSidebarToggle}
            sx={{
              position: 'fixed',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: '#153C65',
              color: 'white',
              zIndex: 1400,
              '&:hover': {
                backgroundColor: '#0d2b4a',
              },
              boxShadow: '2px 0 8px rgba(0,0,0,0.1)',
            }}
          >
            <ChevronRightIcon />
          </IconButton>
        )}
        
        {/* Header */}
        <DashboardHeader 
          onSidebarToggle={handleSidebarToggle}
          sidebarOpen={sidebarOpen}
        />
        
        {/* Main Content */}
        <Box
          component="main"
          sx={{
            flex: 1,
            p: { xs: 1, sm: 2, md: 3 },
            overflowX: 'hidden',
            maxWidth: '100%',
            width: '100%',
            minWidth: 0,
            boxSizing: 'border-box',
            overflowY: 'auto',
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

const DashboardPage = () => {
  return (
    <DashboardProvider>
      <DashboardContent />
    </DashboardProvider>
  );
};

export default DashboardPage;
