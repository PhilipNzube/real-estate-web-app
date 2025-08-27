import React from 'react';
import {
  Box,
  Typography,
  Badge,
  useTheme,
} from '@mui/material';
import {
  GridView as GridIcon,
  Chat as ChatIcon,
  Visibility as EyeIcon,
  Schedule as ClockIcon,
  Folder as FolderIcon,
} from '@mui/icons-material';

const InquiriesTabs = ({ selectedTab, onTabChange }) => {
  const theme = useTheme();

  const tabs = [
    { id: 'all', label: 'All Inquiries', icon: <GridIcon />, count: 15 },
    { id: 'active', label: 'Active', icon: <ChatIcon />, count: 8 },
    { id: 'pending', label: 'Pending', icon: <EyeIcon />, count: 4 },
    { id: 'resolved', label: 'Resolved', icon: <ClockIcon />, count: 12 },
    { id: 'archived', label: 'Archived', icon: <FolderIcon />, count: 12 },
  ];

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      gap: { xs: 1, sm: 2 },
      p: { xs: 2, sm: 3 },
      backgroundColor: 'white',
      borderBottom: '1px solid #e0e0e0',
      overflowX: 'auto',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
    }}>
      {tabs.map((tab) => (
        <Box
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: { xs: 1, sm: 1.5 },
            px: { xs: 1.5, sm: 2 },
            py: { xs: 1, sm: 1.5 },
            borderRadius: 1,
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            borderBottom: selectedTab === tab.id ? '2px solid #0A3A7D' : '2px solid transparent',
            backgroundColor: selectedTab === tab.id ? '#f8f9fa' : 'transparent',
            transition: 'all 0.2s ease',
            '&:hover': {
              backgroundColor: selectedTab === tab.id ? '#f8f9fa' : '#f5f5f5',
            },
          }}
        >
          <Box sx={{
            color: selectedTab === tab.id ? '#0A3A7D' : '#757575',
            display: 'flex',
            alignItems: 'center',
          }}>
            {tab.icon}
          </Box>
          
          <Typography
            sx={{
              color: selectedTab === tab.id ? '#0A3A7D' : '#757575',
              fontWeight: selectedTab === tab.id ? 600 : 500,
              fontSize: { xs: '0.8rem', sm: '0.875rem' },
              fontFamily: '"Inter", sans-serif',
              mr: { xs: 0.5, sm: 1 }, // Add space between text and badge
            }}
          >
            {tab.label}
          </Typography>
          
          <Badge
            badgeContent={tab.count}
            sx={{
              '& .MuiBadge-badge': {
                backgroundColor: selectedTab === tab.id ? '#0A3A7D' : '#757575',
                color: 'white',
                fontSize: { xs: '0.65rem', sm: '0.7rem' },
                fontWeight: 600,
                minWidth: { xs: 16, sm: 18 },
                height: { xs: 16, sm: 18 },
              },
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default InquiriesTabs;
