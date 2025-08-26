import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Chip,
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
    <Box sx={{ p: 2 }}>
      {/* Main Header Row */}
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: 2,
        flexWrap: 'wrap'
      }}>
        {/* All Properties Types Dropdown */}
        <Button
          variant="contained"
          endIcon={<ArrowDownIcon />}
          sx={{
            backgroundColor: '#153C65',
            color: 'white',
            borderRadius: 2,
            px: 3,
            py: 1.5,
            fontFamily: '"Poppins", sans-serif',
            fontSize: '0.9rem',
            fontWeight: 600,
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#0d2b4a',
            },
          }}
        >
          All Properties Types
        </Button>

        {/* Filter Buttons */}
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            startIcon={<MoneyIcon />}
            sx={{
              backgroundColor: '#153C65',
              color: 'white',
              borderRadius: 2,
              px: 2,
              py: 1.5,
              fontFamily: '"Poppins", sans-serif',
              fontSize: '0.85rem',
              fontWeight: 600,
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#0d2b4a',
              },
            }}
          >
            ₦25M - ₦150M
          </Button>

          <Button
            variant="outlined"
            startIcon={<BedIcon />}
            sx={{
              borderColor: '#e0e0e0',
              color: '#333',
              borderRadius: 2,
              px: 2,
              py: 1.5,
              fontFamily: '"Poppins", sans-serif',
              fontSize: '0.85rem',
              fontWeight: 600,
              textTransform: 'none',
              '&:hover': {
                borderColor: '#153C65',
                backgroundColor: 'rgba(21, 60, 101, 0.04)',
              },
            }}
          >
            Bedrooms
          </Button>

          <Button
            variant="outlined"
            startIcon={<LocationIcon />}
            sx={{
              borderColor: '#e0e0e0',
              color: '#333',
              borderRadius: 2,
              px: 2,
              py: 1.5,
              fontFamily: '"Poppins", sans-serif',
              fontSize: '0.85rem',
              fontWeight: 600,
              textTransform: 'none',
              '&:hover': {
                borderColor: '#153C65',
                backgroundColor: 'rgba(21, 60, 101, 0.04)',
              },
            }}
          >
            Locations
          </Button>

          <Button
            variant="outlined"
            startIcon={<FilterIcon />}
            sx={{
              borderColor: '#e0e0e0',
              color: '#333',
              borderRadius: 2,
              px: 2,
              py: 1.5,
              fontFamily: '"Poppins", sans-serif',
              fontSize: '0.85rem',
              fontWeight: 600,
              textTransform: 'none',
              '&:hover': {
                borderColor: '#153C65',
                backgroundColor: 'rgba(21, 60, 101, 0.04)',
              },
            }}
          >
            More Filters
          </Button>
        </Box>

        {/* Save Search Button */}
        <Button
          variant="contained"
          startIcon={<NotificationsIcon />}
          sx={{
            backgroundColor: '#f59e0b',
            color: 'white',
            borderRadius: 2,
            px: 3,
            py: 1.5,
            fontFamily: '"Poppins", sans-serif',
            fontSize: '0.9rem',
            fontWeight: 600,
            textTransform: 'none',
            ml: 'auto',
            '&:hover': {
              backgroundColor: '#d97706',
            },
          }}
        >
          Save Search
        </Button>
      </Box>

      {/* Active Filters Bar */}
      {activeFilters.length > 0 && (
        <Box sx={{
          backgroundColor: '#e3f2fd',
          borderRadius: 2,
          p: 2,
          mt: 2,
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          flexWrap: 'wrap'
        }}>
          <Typography
            sx={{
              color: '#1976d2',
              fontFamily: '"Poppins", sans-serif',
              fontSize: '0.85rem',
              fontWeight: 600,
              mr: 1
            }}
          >
            Active Filters:
          </Typography>
          
          {activeFilters.map((filter) => (
            <Chip
              key={filter.id}
              label={filter.label}
              onDelete={() => handleRemoveFilter(filter.id)}
              deleteIcon={<ClearIcon sx={{ fontSize: 16 }} />}
              sx={{
                backgroundColor: 'white',
                color: '#1976d2',
                fontFamily: '"Inter", sans-serif',
                fontSize: '0.8rem',
                fontWeight: 500,
                '& .MuiChip-deleteIcon': {
                  color: '#666',
                  '&:hover': {
                    color: '#d32f2f',
                  },
                },
              }}
            />
          ))}

          <Button
            startIcon={<DeleteIcon />}
            onClick={handleClearAllFilters}
            sx={{
              color: '#d32f2f',
              fontFamily: '"Inter", sans-serif',
              fontSize: '0.8rem',
              fontWeight: 600,
              textTransform: 'none',
              ml: 'auto',
              '&:hover': {
                backgroundColor: 'rgba(211, 47, 47, 0.04)',
              },
            }}
          >
            Clear all filters
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default PropertiesFilterHeader;
