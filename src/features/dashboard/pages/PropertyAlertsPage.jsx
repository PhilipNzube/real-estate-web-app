import React, { useState } from 'react';
import {
  Box,
} from '@mui/material';
import PropertyAlertsHeader from '../components/PropertyAlertsHeader';
import PropertyAlertsTabs from '../components/PropertyAlertsTabs';
import PropertyAlertsList from '../components/PropertyAlertsList';
import PropertyAlertsMap from '../components/PropertyAlertsMap';
import PropertyAlertsNotifications from '../components/PropertyAlertsNotifications';

const PropertyAlertsPage = () => {
  const [selectedTab, setSelectedTab] = useState('all');

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      backgroundColor: '#f8f9fa',
      overflow: 'hidden',
    }}>
      {/* Header - Always visible */}
      <PropertyAlertsHeader />
      
      {/* Tabs - Always visible */}
      <PropertyAlertsTabs 
        selectedTab={selectedTab} 
        onTabChange={setSelectedTab} 
      />
      
      {/* Main Content Area */}
      <Box sx={{ 
        flex: 1, 
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}>
        {/* Property Alerts List - Main Content */}
        <Box sx={{ 
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          minHeight: 0,
          width: '100%',
          backgroundColor: '#f8f9fa',
        }}>
          <PropertyAlertsList selectedTab={selectedTab} />
        </Box>

        {/* Property Alert Coverage Map Section */}
        <Box sx={{
          backgroundColor: 'white',
          borderTop: '1px solid #e0e0e0',
          minHeight: 400,
        }}>
          <PropertyAlertsMap selectedTab={selectedTab} showMap={true} />
        </Box>

        {/* Recent Alert Notifications Section */}
        <Box sx={{
          backgroundColor: 'white',
          borderTop: '1px solid #e0e0e0',
          p: { xs: 2, sm: 3 },
        }}>
          <PropertyAlertsNotifications />
        </Box>
      </Box>
    </Box>
  );
};

export default PropertyAlertsPage;
