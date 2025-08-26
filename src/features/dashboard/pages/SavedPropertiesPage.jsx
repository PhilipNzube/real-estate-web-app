import React from 'react';
import { Box } from '@mui/material';
import SavedPropertiesHeader from '../components/SavedPropertiesHeader';
import SavedPropertiesTabs from '../components/SavedPropertiesTabs';
import SavedPropertiesActionBar from '../components/SavedPropertiesActionBar';
import SavedPropertiesList from '../components/SavedPropertiesList';

const SavedPropertiesPage = () => {
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
      {/* Saved Properties Header */}
      <SavedPropertiesHeader />
      
      {/* Navigation Tabs */}
      <SavedPropertiesTabs />
      
      {/* Action Bar */}
      <SavedPropertiesActionBar />
      
      {/* Saved Properties List */}
      <SavedPropertiesList />
    </Box>
  );
};

export default SavedPropertiesPage;
