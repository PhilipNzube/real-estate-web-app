import React from 'react';
import { Box } from '@mui/material';
import InvestmentOverview from '../components/InvestmentOverview';
import InvestmentFilters from '../components/InvestmentFilters';
import InvestmentProperties from '../components/InvestmentProperties';
import InvestmentPortfolio from '../components/InvestmentPortfolio';

const InvestmentPage = () => {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      height: '100%', 
      overflow: 'auto',
      backgroundColor: '#f8f9fa',
      padding: { xs: 1.5, sm: 2, md: 3 },
      minWidth: 0,
    }}>
      {/* Investment Overview Cards */}
      <InvestmentOverview />
      
      {/* Filter and Sort Bar */}
      <InvestmentFilters />
      
      {/* Investment Properties Grid */}
      <InvestmentProperties />
      
      {/* Investment Portfolio Section */}
      <InvestmentPortfolio />
    </Box>
  );
};

export default InvestmentPage;
