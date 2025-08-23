import React from 'react';
import { Box, Grid } from '@mui/material';
import WelcomeBanner from '../components/WelcomeBanner';
import PropertyOverview from '../components/PropertyOverview';
import RecommendedProperties from '../components/RecommendedProperties';
import MarketInsight from '../components/MarketInsight';
import RightSidebar from '../components/RightSidebar';

const DashboardHomePage = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container spacing={3}>
        {/* Main Content */}
        <Grid item xs={12} lg={8}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {/* Welcome Banner */}
            <WelcomeBanner />
            
            {/* Property Overview */}
            <PropertyOverview />
            
            {/* Recommended Properties */}
            <RecommendedProperties />
            
            {/* Market Insight */}
            <MarketInsight />
          </Box>
        </Grid>
        
        {/* Right Sidebar */}
        <Grid item xs={12} lg={4}>
          <RightSidebar />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardHomePage;
