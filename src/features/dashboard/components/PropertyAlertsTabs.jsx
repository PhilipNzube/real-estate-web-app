import React from 'react';
import {
  Box,
  Tab,
  Tabs,
  Badge,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  GridView as GridIcon,
  PlayArrow as PlayIcon,
  Pause as PauseIcon,
  Build as BuildIcon,
} from '@mui/icons-material';

const PropertyAlertsTabs = ({ selectedTab, onTabChange }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const tabs = [
    {
      id: 'all',
      label: 'All Alerts',
      icon: <GridIcon sx={{ fontSize: 18 }} />,
      count: 15,
    },
    {
      id: 'active',
      label: 'Active',
      icon: <PlayIcon sx={{ fontSize: 18 }} />,
      count: 8,
    },
    {
      id: 'paused',
      label: 'Paused',
      icon: <PauseIcon sx={{ fontSize: 18 }} />,
      count: 4,
    },
    {
      id: 'custom',
      label: 'Custom',
      icon: <BuildIcon sx={{ fontSize: 18 }} />,
      count: 12,
    },
  ];

  return (
    <Box sx={{
      backgroundColor: 'white',
      borderBottom: '1px solid #e0e0e0',
      overflow: 'auto',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
    }}>
      <Tabs
        value={selectedTab}
        onChange={(e, newValue) => onTabChange(newValue)}
        variant="scrollable"
        scrollButtons={false}
        sx={{
          minHeight: 56,
          '& .MuiTabs-indicator': {
            backgroundColor: '#0A3A7D',
            height: 3,
          },
          '& .MuiTab-root': {
            minHeight: 56,
            textTransform: 'none',
            fontSize: { xs: '0.8rem', sm: '0.875rem' },
            fontWeight: 500,
            color: '#757575',
            minWidth: 'auto',
            px: { xs: 2, sm: 3 },
            '&.Mui-selected': {
              color: '#0A3A7D',
              fontWeight: 600,
            },
            '&:hover': {
              color: '#0A3A7D',
            },
          },
        }}
      >
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            value={tab.id}
            label={
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: { xs: 0.5, sm: 1 },
                flexDirection: { xs: 'column', sm: 'row' },
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, fontFamily: '"Axiforma", sans-serif',
              mr: { xs: 0.5, sm: 1 }, }}>
                  {tab.icon}
                  <span>{tab.label}</span>
                </Box>
                <Badge
                  badgeContent={tab.count}
                  sx={{
                    '& .MuiBadge-badge': {
                      backgroundColor: selectedTab === tab.id ? '#0A3A7D' : '#E6EDFF',
                      color: selectedTab === tab.id ? 'white' : '#0A3A7D',
                      fontSize: { xs: '0.6rem', sm: '0.7rem' },
                      fontWeight: 600,
                      minWidth: { xs: 16, sm: 18 },
                      height: { xs: 16, sm: 18 },
                      border: '1px solid #e0e0e0',
                      ml: { xs: 0.5, sm: 1 }, // Add space between text and badge
                    },
                  }}
                />
              </Box>
            }
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default PropertyAlertsTabs;
