import React, { useState } from 'react';
import {
  Box,
  Button,
  Chip,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  GridView as GridIcon,
  Favorite as FavoriteIcon,
  Visibility as EyeIcon,
  AccessTime as ClockIcon,
  Folder as FolderIcon,
  Add as AddIcon,
} from '@mui/icons-material';

const SavedPropertiesTabs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [activeTab, setActiveTab] = useState('saved');

  const tabs = [
    {
      id: 'saved',
      label: 'Saved Properties',
      icon: <GridIcon />,
      count: 15,
      active: true,
    },
    {
      id: 'favorites',
      label: 'Favorites',
      icon: <FavoriteIcon />,
      count: 8,
      active: false,
    },
    {
      id: 'watchlist',
      label: 'Watch List',
      icon: <EyeIcon />,
      count: 4,
      active: false,
    },
    {
      id: 'recent',
      label: 'Recently Viewed',
      icon: <ClockIcon />,
      count: 12,
      active: false,
    },
    {
      id: 'investment',
      label: 'Investment Properties',
      icon: <FolderIcon />,
      count: 12,
      active: false,
    },
  ];

  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center',
      gap: { xs: 0.5, sm: 1 },
      mb: { xs: 2, sm: 3 },
      overflow: 'auto',
      width: '100%',
      '&::-webkit-scrollbar': {
        height: '4px',
      },
      '&::-webkit-scrollbar-track': {
        backgroundColor: '#f1f1f1',
        borderRadius: '2px',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#c1c1c1',
        borderRadius: '2px',
        '&:hover': {
          backgroundColor: '#a8a8a8',
        },
      },
    }}>
      {tabs.map((tab) => (
        <Button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: { xs: 0.5, sm: 0.75 },
            px: { xs: 1, sm: 1.5, md: 2 },
            py: { xs: 0.75, sm: 1 },
            backgroundColor: activeTab === tab.id ? 'white' : 'transparent',
            color: activeTab === tab.id ? '#153C65' : '#666',
            borderBottom: activeTab === tab.id ? '2px solid #153C65' : '2px solid transparent',
            borderRadius: 0,
            fontFamily: '"Axiforma", sans-serif',
            fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' },
            fontWeight: activeTab === tab.id ? 600 : 500,
            textTransform: 'none',
            whiteSpace: 'nowrap',
            flexShrink: 0,
            minWidth: 'auto',
            '&:hover': {
              backgroundColor: activeTab === tab.id ? 'white' : 'rgba(21, 60, 101, 0.04)',
            },
            '& .MuiButton-startIcon': {
              margin: 0,
            },
          }}
          startIcon={tab.icon}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0.25, sm: 0.5 } }}>
            <span>{isMobile ? tab.label.split(' ')[0] : tab.label}</span>
            <Chip
              label={tab.count}
              size="small"
              sx={{
                backgroundColor: activeTab === tab.id ? '#153C65' : '#f0f0f0',
                color: activeTab === tab.id ? 'white' : '#666',
                fontFamily: '"Axiforma", sans-serif',
                fontSize: { xs: '0.6rem', sm: '0.7rem' },
                fontWeight: 600,
                height: { xs: 18, sm: 20 },
                minWidth: { xs: 18, sm: 20 },
                '& .MuiChip-label': {
                  px: { xs: 0.5, sm: 0.75 },
                },
              }}
            />
          </Box>
        </Button>
      ))}

      {/* Create Collection Button */}
      <Button
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: { xs: 0.5, sm: 0.75 },
          px: { xs: 1, sm: 1.5, md: 2 },
          py: { xs: 0.75, sm: 1 },
          backgroundColor: '#f0f0f0',
          color: '#153C65',
          borderRadius: 2,
          fontFamily: '"Axiforma", sans-serif',
          fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' },
          fontWeight: 500,
          textTransform: 'none',
          whiteSpace: 'nowrap',
          flexShrink: 0,
          minWidth: 'auto',
          ml: 'auto',
          '&:hover': {
            backgroundColor: '#e0e0e0',
          },
          '& .MuiButton-startIcon': {
            margin: 0,
          },
        }}
        startIcon={<AddIcon />}
      >
        {isMobile ? 'Create' : 'Create Collection'}
      </Button>
    </Box>
  );
};

export default SavedPropertiesTabs;
