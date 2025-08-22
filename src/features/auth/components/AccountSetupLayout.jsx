import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import AccountSetupHeader from './AccountSetupHeader';
import ProgressBar from './ProgressBar';

const AccountSetupLayout = () => {
  const location = useLocation();
  
  // Determine current step based on route
  let currentStep = 1;
  if (location.pathname.includes('/verification')) {
    currentStep = 2;
  } else if (location.pathname.includes('/preferences')) {
    currentStep = 3;
  }

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      backgroundColor: '#f0f4f8',
      width: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Header */}
      <AccountSetupHeader />
      
      {/* Progress Bar */}
      <ProgressBar currentStep={currentStep} />
      
      {/* Dynamic Content - Full Width */}
      <Box sx={{ 
        flex: 1,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        py: { xs: 2, sm: 3, md: 4 },
        px: { xs: 1, sm: 2, md: 3 }
      }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default AccountSetupLayout;
