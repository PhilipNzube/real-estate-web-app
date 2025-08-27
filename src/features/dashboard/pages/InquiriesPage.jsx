import React, { useState } from 'react';
import {
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import InquiriesHeader from '../components/InquiriesHeader';
import InquiriesTabs from '../components/InquiriesTabs';
import InquiriesList from '../components/InquiriesList';
import InquiryDetails from '../components/InquiryDetails';

const InquiriesPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [selectedTab, setSelectedTab] = useState('all');
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const handleInquiryClick = (inquiry) => {
    setSelectedInquiry(inquiry);
    setIsDetailsOpen(true);
  };

  const handleCloseDetails = () => {
    setIsDetailsOpen(false);
    setSelectedInquiry(null);
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      backgroundColor: '#f8f9fa',
      overflow: 'hidden',
    }}>
      {/* Header - Always visible */}
      <InquiriesHeader />
      
      {/* Tabs - Always visible */}
      <InquiriesTabs 
        selectedTab={selectedTab} 
        onTabChange={setSelectedTab} 
      />
      
      {/* Main Content Area */}
      <Box sx={{ 
        flex: 1, 
        display: 'flex',
        overflow: 'hidden',
      }}>
        {/* Inquiries List */}
        <Box sx={{ 
          flex: 1,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <InquiriesList 
            selectedTab={selectedTab}
            onInquiryClick={handleInquiryClick}
            selectedInquiry={selectedInquiry}
          />
        </Box>

        {/* Details Sidebar - Show when inquiry is selected */}
        {isDetailsOpen && (
          <Box sx={{
            width: { xs: '100%', sm: 400, md: 450, lg: 500 },
            borderLeft: '1px solid #e0e0e0',
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            position: { xs: 'fixed', sm: 'relative' },
            top: { xs: 0 },
            right: { xs: 0 },
            bottom: { xs: 0 },
            zIndex: { xs: 1200, sm: 'auto' },
          }}>
            <InquiryDetails
              inquiry={selectedInquiry}
              isOpen={isDetailsOpen}
              onClose={handleCloseDetails}
              isMobile={isMobile}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default InquiriesPage;
