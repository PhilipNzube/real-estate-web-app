import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Button, 
  Checkbox, 
  FormControlLabel,
  Slider,
  TextField,
  Divider
} from '@mui/material';
import {
  Bed as BedIcon,
  Bathtub as BathtubIcon,
  Home as HomeIcon,
} from '@mui/icons-material';

const PropertiesFilters = () => {
  const [priceRange, setPriceRange] = useState([25000000, 150000000]);
  const [selectedSize, setSelectedSize] = useState('200m²+');
  const [selectedAge, setSelectedAge] = useState('Any Age');
  const [amenities, setAmenities] = useState({
    security: true,
    airConditioning: true,
    parking: true,
    wifi: true,
    furnished: true,
    swimmingPool: false,
    balcony: false,
  });

  const handleAmenityChange = (amenity) => {
    setAmenities(prev => ({
      ...prev,
      [amenity]: !prev[amenity]
    }));
  };

  const formatPrice = (value) => {
    return `₦${(value / 1000000).toFixed(0)}M`;
  };

  const sizeOptions = [
    { label: 'Any Size', value: 'any' },
    { label: '100m²+', value: '100m²+' },
    { label: '200m²+', value: '200m²+' },
  ];

  const ageOptions = [
    { label: 'Any Age', value: 'Any Age', icon: <HomeIcon /> },
    { label: 'New 0-5 yrs', value: 'New 0-5 yrs', icon: <HomeIcon /> },
    { label: '5-10 yrs Age', value: '5-10 yrs Age', icon: <HomeIcon /> },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {/* Price Range */}
      <Paper sx={{ p: { xs: 2, sm: 3 }, borderRadius: 2 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            color: '#153C65',
            fontFamily: '"Poppins", sans-serif',
            fontSize: { xs: '1rem', sm: '1.1rem' },
            mb: 2,
          }}
        >
          Price Range
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <TextField
            size="small"
            value={formatPrice(priceRange[0])}
            sx={{
              '& .MuiOutlinedInput-root': {
                fontFamily: '"Inter", sans-serif',
                fontSize: { xs: '0.8rem', sm: '0.9rem' },
              },
            }}
          />
          <TextField
            size="small"
            value={formatPrice(priceRange[1])}
            sx={{
              '& .MuiOutlinedInput-root': {
                fontFamily: '"Inter", sans-serif',
                fontSize: { xs: '0.8rem', sm: '0.9rem' },
              },
            }}
          />
        </Box>

        <Slider
          value={priceRange}
          onChange={(event, newValue) => setPriceRange(newValue)}
          min={0}
          max={300000000}
          step={5000000}
          sx={{
            '& .MuiSlider-thumb': {
              backgroundColor: '#153C65',
            },
            '& .MuiSlider-track': {
              backgroundColor: '#153C65',
            },
            '& .MuiSlider-rail': {
              backgroundColor: '#e0e0e0',
            },
          }}
        />
      </Paper>

      {/* Property Size */}
      <Paper sx={{ p: { xs: 2, sm: 3 }, borderRadius: 2 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            color: '#153C65',
            fontFamily: '"Poppins", sans-serif',
            fontSize: { xs: '1rem', sm: '1.1rem' },
            mb: 2,
          }}
        >
          Property Size
        </Typography>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {sizeOptions.map((option) => (
            <Button
              key={option.value}
              variant={selectedSize === option.value ? 'contained' : 'outlined'}
              onClick={() => setSelectedSize(option.value)}
              sx={{
                justifyContent: 'flex-start',
                textTransform: 'none',
                fontFamily: '"Inter", sans-serif',
                fontSize: { xs: '0.8rem', sm: '0.9rem' },
                backgroundColor: selectedSize === option.value ? '#153C65' : 'transparent',
                color: selectedSize === option.value ? 'white' : '#153C65',
                borderColor: '#153C65',
                '&:hover': {
                  backgroundColor: selectedSize === option.value ? '#0d2b4a' : 'rgba(21, 60, 101, 0.04)',
                },
              }}
            >
              {option.label}
            </Button>
          ))}
        </Box>
      </Paper>

      {/* Amenities */}
      <Paper sx={{ p: { xs: 2, sm: 3 }, borderRadius: 2 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            color: '#153C65',
            fontFamily: '"Poppins", sans-serif',
            fontSize: { xs: '1rem', sm: '1.1rem' },
            mb: 2,
          }}
        >
          Amenities
        </Typography>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {Object.entries(amenities).map(([key, checked]) => (
            <FormControlLabel
              key={key}
              control={
                <Checkbox
                  checked={checked}
                  onChange={() => handleAmenityChange(key)}
                  sx={{
                    color: '#153C65',
                    '&.Mui-checked': {
                      color: '#153C65',
                    },
                  }}
                />
              }
              label={key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
              sx={{
                fontFamily: '"Inter", sans-serif',
                fontSize: { xs: '0.8rem', sm: '0.9rem' },
                color: '#153C65',
              }}
            />
          ))}
        </Box>
        
        <Button
          variant="text"
          size="small"
          sx={{
            color: '#153C65',
            fontFamily: '"Inter", sans-serif',
            fontSize: { xs: '0.7rem', sm: '0.8rem' },
            textTransform: 'none',
            mt: 1,
            '&:hover': {
              backgroundColor: 'transparent',
              textDecoration: 'underline',
            },
          }}
        >
          + Show more amenities
        </Button>
      </Paper>

      {/* Property Age */}
      <Paper sx={{ p: { xs: 2, sm: 3 }, borderRadius: 2 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            color: '#153C65',
            fontFamily: '"Poppins", sans-serif',
            fontSize: { xs: '1rem', sm: '1.1rem' },
            mb: 2,
          }}
        >
          Property Age
        </Typography>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {ageOptions.map((option) => (
            <Button
              key={option.value}
              variant={selectedAge === option.value ? 'contained' : 'outlined'}
              onClick={() => setSelectedAge(option.value)}
              startIcon={option.icon}
              sx={{
                justifyContent: 'flex-start',
                textTransform: 'none',
                fontFamily: '"Inter", sans-serif',
                fontSize: { xs: '0.8rem', sm: '0.9rem' },
                backgroundColor: selectedAge === option.value ? '#153C65' : 'transparent',
                color: selectedAge === option.value ? 'white' : '#153C65',
                borderColor: '#153C65',
                '&:hover': {
                  backgroundColor: selectedAge === option.value ? '#0d2b4a' : 'rgba(21, 60, 101, 0.04)',
                },
              }}
            >
              {option.label}
            </Button>
          ))}
        </Box>
      </Paper>

      {/* Action Buttons */}
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: '#153C65',
            color: 'white',
            fontFamily: '"Poppins", sans-serif',
            fontSize: { xs: '0.8rem', sm: '0.9rem' },
            fontWeight: 600,
            '&:hover': {
              backgroundColor: '#0d2b4a',
            },
          }}
        >
          Apply Filters
        </Button>
        <Button
          variant="outlined"
          fullWidth
          sx={{
            borderColor: '#153C65',
            color: '#153C65',
            fontFamily: '"Poppins", sans-serif',
            fontSize: { xs: '0.8rem', sm: '0.9rem' },
            fontWeight: 600,
            '&:hover': {
              borderColor: '#0d2b4a',
              backgroundColor: 'rgba(21, 60, 101, 0.04)',
            },
          }}
        >
          Reset
        </Button>
      </Box>
    </Box>
  );
};

export default PropertiesFilters;
