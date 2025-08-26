import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Chip,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  KeyboardArrowDown as ArrowDownIcon,
  AttachMoney as MoneyIcon,
  Bed as BedIcon,
  LocationOn as LocationIcon,
  FilterList as FilterIcon,
  Notifications as NotificationsIcon,
  Clear as ClearIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';

const PropertiesFilterHeader = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  
  const [activeFilters, setActiveFilters] = useState([
    { id: 1, label: 'Price: ₦25M - ₦150M', type: 'price' },
    { id: 2, label: 'Apartment', type: 'propertyType' },
    { id: 3, label: '2+ Bedrooms', type: 'bedrooms' },
    { id: 4, label: 'Lagos', type: 'location' },
  ]);

  const handleRemoveFilter = (filterId) => {
    setActiveFilters(activeFilters.filter(filter => filter.id !== filterId));
  };

  const handleClearAllFilters = () => {
    setActiveFilters([]);
  };

  return (
    <Box sx={{ 
      p: { xs: 1, sm: 1.5, md: 2 }, 
      overflow: 'hidden',
      backgroundColor: 'white',
      borderBottom: '1px solid #e0e0e0',
    }}>
      {/* Main Header Row */}
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: { xs: 0.5, sm: 1, md: 2 },
        flexWrap: 'nowrap',
        minHeight: { xs: 48, sm: 56 },
        overflow: 'hidden',
      }}>
        {/* All Properties Types Dropdown */}
        <Button
          variant="contained"
          endIcon={<ArrowDownIcon />}
          sx={{
            backgroundColor: '#2B4B76',
            color: 'white',
            borderRadius: 20,
            px: { xs: 1.5, sm: 2, md: 3 },
            py: { xs: 0.75, sm: 1, md: 1.5 },
            fontFamily: '"Axiforma", sans-serif',
            fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.9rem' },
            fontWeight: 600,
            textTransform: 'none',
            minWidth: { xs: 'auto', sm: 'fit-content' },
            whiteSpace: 'nowrap',
            flexShrink: 0,
            '&:hover': {
              backgroundColor: '#0d2b4a',
            },
          }}
        >
          {isMobile ? 'All Types' : 'All Properties Types'}
        </Button>

        {/* Filter Buttons - Horizontal Scroll on Mobile */}
        <Box sx={{ 
          display: 'flex', 
          gap: { xs: 0.5, sm: 1 }, 
          flexWrap: 'nowrap',
          flex: 1,
          minWidth: 0,
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
          '@media (max-width: 600px)': {
            '& > *': {
              animation: 'autoScrollContent 12s linear infinite',
            },
            '&:hover > *': {
              animationPlayState: 'paused',
            },
          },
          '@keyframes autoScrollContent': {
            '0%': {
              transform: 'translateX(0)',
            },
            '20%': {
              transform: 'translateX(-10px)',
            },
            '40%': {
              transform: 'translateX(-20px)',
            },
            '60%': {
              transform: 'translateX(-10px)',
            },
            '80%': {
              transform: 'translateX(-5px)',
            },
            '100%': {
              transform: 'translateX(0)',
            },
          },
        }}>
          <Button
            variant="contained"
            startIcon={<MoneyIcon />}
            sx={{
              backgroundColor: '#4A658A',
              color: 'white',
              borderRadius: 20,
              px: { xs: 1, sm: 1.5, md: 2 },
              py: { xs: 0.75, sm: 1, md: 1.5 },
              fontFamily: '"Axiforma", sans-serif',
              fontSize: { xs: '0.65rem', sm: '0.7rem', md: '0.85rem' },
              fontWeight: 600,
              textTransform: 'none',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              '&:hover': {
                backgroundColor: '#0d2b4a',
              },
            }}
          >
            {isMobile ? '₦25M-150M' : '₦25M - ₦150M'}
          </Button>

          <Button
            variant="outlined"
            startIcon={<BedIcon />}
            sx={{
              borderColor: '#0A3A7D',
              color: '#0A3A7D',
              borderRadius: 20,
              px: { xs: 1, sm: 1.5, md: 2 },
              py: { xs: 0.75, sm: 1, md: 1.5 },
              fontFamily: '"Axiforma", sans-serif',
              fontSize: { xs: '0.65rem', sm: '0.7rem', md: '0.85rem' },
              fontWeight: 600,
              textTransform: 'none',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              '&:hover': {
                borderColor: '#153C65',
                backgroundColor: 'rgba(21, 60, 101, 0.04)',
              },
            }}
          >
            {isMobile ? 'Beds' : 'Bedrooms'}
          </Button>

          <Button
            variant="outlined"
            startIcon={<LocationIcon color='#0A3A7D' />}
            sx={{
              borderColor: '#0A3A7D',
              color: '#0A3A7D',
              borderRadius: 20,
              px: { xs: 1, sm: 1.5, md: 2 },
              py: { xs: 0.75, sm: 1, md: 1.5 },
              fontFamily: '"Axiforma", sans-serif',
              fontSize: { xs: '0.65rem', sm: '0.7rem', md: '0.85rem' },
              fontWeight: 600,
              textTransform: 'none',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              '&:hover': {
                borderColor: '#153C65',
                backgroundColor: 'rgba(21, 60, 101, 0.04)',
              },
            }}
          >
            {isMobile ? 'Loc' : 'Locations'}
          </Button>

          <Button
            variant="outlined"
            startIcon={<FilterIcon />}
            sx={{
              borderColor: '#0A3A7D',
              color: '#0A3A7D',
              borderRadius: 20,
              px: { xs: 1, sm: 1.5, md: 2 },
              py: { xs: 0.75, sm: 1, md: 1.5 },
              fontFamily: '"Axiforma", sans-serif',
              fontSize: { xs: '0.65rem', sm: '0.7rem', md: '0.85rem' },
              fontWeight: 600,
              textTransform: 'none',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              '&:hover': {
                borderColor: '#153C65',
                backgroundColor: 'rgba(21, 60, 101, 0.04)',
              },
            }}
          >
            {isMobile ? 'More' : 'More Filters'}
          </Button>
        </Box>

        {/* Save Search Button */}
        <Button
          variant="contained"
          startIcon={<NotificationsIcon color='#0A3A7D' />}
          sx={{
            backgroundColor: '#FFE9B8',
            color: '#0A3A7D',
            borderRadius: 2,
            px: { xs: 1.5, sm: 2, md: 3 },
            py: { xs: 0.75, sm: 1, md: 1.5 },
            fontFamily: '"Axiforma", sans-serif',
            fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.9rem' },
            fontWeight: 600,
            textTransform: 'none',
            whiteSpace: 'nowrap',
            flexShrink: 0,
            '&:hover': {
              backgroundColor: '#d97706',
            },
          }}
        >
          {isMobile ? 'Save' : 'Save Search'}
        </Button>
      </Box>

      {/* Active Filters Bar */}
      {activeFilters.length > 0 && (
        <Box sx={{
          backgroundColor: '#F0F5FF',
          borderRadius: 0,
          p: { xs: 1, sm: 1.5, md: 2 },
          mt: { xs: 1, sm: 1.5, md: 2 },
          display: 'flex',
          alignItems: 'center',
          gap: { xs: 0.5, sm: 1 },
          flexWrap: 'nowrap',
          minHeight: { xs: 40, sm: 48 },
          overflow: 'hidden',
        }}>
          <Typography
            sx={{
              color: '#1976d2',
              fontFamily: '"Axiforma", sans-serif',
              fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.85rem' },
              fontWeight: 600,
              mr: { xs: 0.5, sm: 1 },
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            {isMobile ? 'Filters:' : 'Active Filters:'}
          </Typography>
          
          <Box sx={{ 
            display: 'flex', 
            gap: { xs: 0.5, sm: 1 }, 
            flexWrap: 'nowrap',
            flex: 1,
            minWidth: 0,
            overflow: 'auto',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}>
            {activeFilters.map((filter) => (
              <Chip
                key={filter.id}
                label={isMobile ? filter.label.split(' ')[0] : filter.label}
                onDelete={() => handleRemoveFilter(filter.id)}
                deleteIcon={<ClearIcon sx={{ fontSize: { xs: 12, sm: 14, md: 16 } }} />}
                sx={{
                  backgroundColor: 'white',
                  color: '#0A3A7D',
                  fontFamily: '"Inter", sans-serif',
                  fontSize: { xs: '0.65rem', sm: '0.7rem', md: '0.8rem' },
                  fontWeight: 500,
                  height: { xs: 24, sm: 28, md: 32 },
                  flexShrink: 0,
                  '& .MuiChip-label': {
                    px: { xs: 0.75, sm: 1, md: 1.5 },
                  },
                  '& .MuiChip-deleteIcon': {
                    color: '#666',
                    fontSize: { xs: 12, sm: 14, md: 16 },
                    '&:hover': {
                      color: '#d32f2f',
                    },
                  },
                }}
              />
            ))}
          </Box>

          <Button
            startIcon={<DeleteIcon />}
            onClick={handleClearAllFilters}
            sx={{
              color: '#d32f2f',
              fontFamily: '"Inter", sans-serif',
              fontSize: { xs: '0.65rem', sm: '0.7rem', md: '0.8rem' },
              fontWeight: 600,
              textTransform: 'none',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              '&:hover': {
                backgroundColor: 'rgba(211, 47, 47, 0.04)',
              },
            }}
          >
            {isMobile ? 'Clear all' : 'Clear all filters'}
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default PropertiesFilterHeader;
