import React, { useState } from 'react';
import { Box } from '@mui/material';
import PropertiesHeader from '../components/PropertiesHeader';
import PropertiesFilters from '../components/PropertiesFilters';
import PropertiesList from '../components/PropertiesList';
import PropertiesFilterHeader from '../components/PropertiesFilterHeader';
import PropertiesSidebar from '../components/PropertiesSidebar';

const PropertiesPage = () => {
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
        {/* Properties Sidebar Component */}
        <PropertiesSidebar 
          leftSidebarOpen={leftSidebarOpen}
          onLeftSidebarToggle={handleLeftSidebarToggle}
        />

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
