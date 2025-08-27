import React, { useState } from 'react';
import {
  Box,
  Tabs,
  Tab,
} from '@mui/material';

const InvestmentDetailsTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabLabels = ['Investment Details', 'Documents', 'Project Updates', 'Developer Info', 'FAQs'];

  return (
    <Box sx={{ 
      mb: { xs: 3, sm: 4, md: 5 },
      borderBottom: 1, 
      borderColor: '#e0e0e0',
    }}>
      <Tabs
        value={activeTab}
        onChange={(e, newValue) => setActiveTab(newValue)}
        variant="scrollable"
        scrollButtons="auto"
        sx={{
          '& .MuiTab-root': {
            textTransform: 'none',
            fontWeight: 600,
            fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
            color: '#666',
            minWidth: 'fit-content',
            px: { xs: 2, sm: 3, md: 4 },
            fontFamily: '"Axiforma", sans-serif',
            '&.Mui-selected': {
              color: '#3B82F6',
            },
          },
          '& .MuiTabs-indicator': {
            backgroundColor: '#3B82F6',
            height: 3,
          },
        }}
      >
        {tabLabels.map((label, index) => (
          <Tab key={index} label={label} />
        ))}
      </Tabs>
    </Box>
  );
};

export default InvestmentDetailsTabs;
