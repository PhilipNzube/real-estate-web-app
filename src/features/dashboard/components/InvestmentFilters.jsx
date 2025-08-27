import React, { useState } from 'react';
import {
  Box,
  Button,
} from '@mui/material';
import {
  GridView as GridIcon,
  Landscape as LandIcon,
  Business as DevelopmentIcon,
  Percent as PercentIcon,
  KeyboardArrowDown as ArrowDownIcon,
} from '@mui/icons-material';

const InvestmentFilters = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterOptions = [
    {
      id: 'all',
      label: 'All Projects',
      icon: <GridIcon sx={{ fontSize: 18 }} />,
      color: '#0A6CFF',
    },
    {
      id: 'land',
      label: 'Land',
      icon: <LandIcon sx={{ fontSize: 18 }} />,
      color: '#4caf50',
    },
    {
      id: 'development',
      label: 'Development',
      icon: <DevelopmentIcon sx={{ fontSize: 18 }} />,
      color: '#9c27b0',
    },
    {
      id: 'roi',
      label: 'Highest ROI',
      icon: <PercentIcon sx={{ fontSize: 18 }} />,
      color: '#ff9800',
    },
    {
      id: 'price',
      label: 'Price: Low to High',
      icon: <ArrowDownIcon sx={{ fontSize: 18 }} />,
      color: '#666',
    },
  ];

  return (
    <Box sx={{
      mb: { xs: 3, sm: 4, md: 5 },
      overflow: 'auto',
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
      <Box sx={{
        display: 'flex',
        gap: { xs: 1, sm: 1.5, md: 2 },
        flexWrap: 'nowrap',
        minWidth: 'max-content',
        pb: 1,
      }}>
        {filterOptions.map((option) => (
          <Button
            key={option.id}
            variant={activeFilter === option.id ? 'contained' : 'outlined'}
            startIcon={option.icon}
            onClick={() => setActiveFilter(option.id)}
            sx={{
              backgroundColor: activeFilter === option.id ? option.color : 'transparent',
              color: activeFilter === option.id ? 'white' : '#666',
              borderColor: activeFilter === option.id ? option.color : '#e0e0e0',
              borderRadius: 2,
              px: { xs: 2, sm: 2.5, md: 3 },
              py: { xs: 1, sm: 1.25, md: 1.5 },
              fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' },
              fontWeight: 600,
              textTransform: 'none',
              whiteSpace: 'nowrap',
              minWidth: 'fit-content',
              fontFamily: '"Axiforma", sans-serif',
              '&:hover': {
                backgroundColor: activeFilter === option.id ? option.color : 'rgba(0,0,0,0.04)',
                borderColor: option.color,
              },
              '&.MuiButton-contained': {
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              },
            }}
          >
            {option.label}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default InvestmentFilters;
