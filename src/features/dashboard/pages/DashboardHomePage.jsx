import React, { useState } from 'react';
import { 
  Box, 
  Grid, 
  Typography, 
  Paper, 
  useTheme,
  useMediaQuery,
  Drawer,
  IconButton
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import WelcomeBanner from '../components/WelcomeBanner';
import PropertyOverview from '../components/PropertyOverview';
import RecommendedProperties from '../components/RecommendedProperties';
import MarketInsight from '../components/MarketInsight';
import RightSidebar from '../components/RightSidebar';

const DashboardHomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);

  return (
    <Box sx={{ width: '100%', position: 'relative' }}>
      {/* Mobile Right Sidebar Toggle Button */}
      {isMobile && (
        <IconButton
          onClick={() => setRightSidebarOpen(true)}
          sx={{
            position: 'fixed',
            right: 16,
            top: 80,
            backgroundColor: '#153C65',
            color: 'white',
            zIndex: 1200,
            '&:hover': {
              backgroundColor: '#0d2b4a',
            },
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      <Box sx={{ 
        display: 'flex', 
        gap: { xs: 0, sm: 1.5, md: 2, lg: 3 },
        flexDirection: { xs: 'column', md: 'row' },
        width: '100%',
        overflow: 'hidden',
        maxWidth: '100vw',
        boxSizing: 'border-box'
      }}>
        {/* Main Content */}
        <Box sx={{ 
          flex: 1, 
          display: 'flex', 
          flexDirection: 'column', 
          gap: { xs: 1.5, sm: 2, md: 3 },
          width: '100%',
          minWidth: 0,
          overflow: 'hidden',
          maxWidth: '100%',
          boxSizing: 'border-box'
        }}>
            {/* Welcome Banner */}
            <WelcomeBanner />
            
          {/* Continue Browsing */}
            <PropertyOverview />
            
            {/* Recommended Properties */}
            <RecommendedProperties />
            
            {/* Market Insight */}
            <MarketInsight />
          </Box>
        
        {/* Right Sidebar - Desktop (Always Visible) */}
        <Box sx={{ 
          width: { md: 280, lg: 300, xl: 320 }, 
          display: { xs: 'none', md: 'block' },
          position: 'sticky',
          top: 20,
          height: 'fit-content',
          flexShrink: 0,
          minWidth: { md: 280, lg: 300, xl: 320 },
          overflow: 'hidden',
          maxWidth: { md: 280, lg: 300, xl: 320 },
          boxSizing: 'border-box',
          zIndex: 1200
        }}>
          <RightSidebar />
        </Box>
      </Box>

      {/* Mobile Right Sidebar Drawer */}
      <Drawer
        anchor="right"
        open={rightSidebarOpen}
        onClose={() => setRightSidebarOpen(false)}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          zIndex: 1300,
          '& .MuiDrawer-paper': {
            width: 320,
            maxWidth: '85vw',
            backgroundColor: '#f8f9fa',
            boxSizing: 'border-box',
            zIndex: 1300,
          },
        }}
      >
        <Box sx={{ p: 2, borderBottom: '1px solid #e0e0e0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 600, color: '#153C65' }}>
            Dashboard Info
          </Typography>
          <IconButton onClick={() => setRightSidebarOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box sx={{ p: 2 }}>
          <RightSidebar />
        </Box>
      </Drawer>
    </Box>
  );
};

export default DashboardHomePage;
