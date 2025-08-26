import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Slider,
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
} from '@mui/material';
import {
  Bed as BedIcon,
  Bathtub as BathtubIcon,
  SquareFoot as SquareFootIcon,
  Home as HomeIcon,
  Add as AddIcon,
} from '@mui/icons-material';

const PropertiesFilters = () => {
  
  const [priceRange, setPriceRange] = useState([25000000, 150000000]);
  const [selectedBeds, setSelectedBeds] = useState('2+');
  const [selectedBaths, setSelectedBaths] = useState('2+');
  const [selectedSize, setSelectedSize] = useState('200m²+');
  const [selectedAge, setSelectedAge] = useState('any');
  const [amenities, setAmenities] = useState({
    swimmingPool: false,
    airConditioning: true,
    furnished: true,
    gym: false,
    security: true,
    parking: true,
    wifi: true,
    balcony: false,
  });

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleAmenityChange = (amenity) => {
    setAmenities(prev => ({
      ...prev,
      [amenity]: !prev[amenity]
    }));
  };

  const formatPrice = (value) => {
    return `₦ ${value.toLocaleString()}`;
  };

  // Mock histogram data
  const histogramData = [20, 35, 45, 60, 80, 65, 40, 25, 15, 10];

  return (
    <Box sx={{ 
      p: { xs: 2, sm: 2.5, md: 3 }, 
      height: '100%', 
      overflow: 'auto',
      '&::-webkit-scrollbar': {
        width: '6px',
      },
      '&::-webkit-scrollbar-track': {
        backgroundColor: '#f1f1f1',
        borderRadius: '3px',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#c1c1c1',
        borderRadius: '3px',
        '&:hover': {
          backgroundColor: '#a8a8a8',
        },
      },
    }}>
      {/* Price Range Section */}
      <Box sx={{ mb: { xs: 3, sm: 4 } }}>
        <Typography
          variant="h6"
          sx={{
            color: '#153C65',
            fontWeight: 700,
            fontFamily: '"Poppins", sans-serif',
            fontSize: { xs: '1rem', sm: '1.05rem', md: '1.1rem' },
            mb: { xs: 1.5, sm: 2 },
          }}
        >
          Price Range
        </Typography>

        {/* Price Input Fields */}
        <Box sx={{ display: 'flex', gap: { xs: 1.5, sm: 2 }, mb: { xs: 2.5, sm: 3 } }}>
          <TextField
            value={formatPrice(priceRange[0])}
            variant="outlined"
            size="small"
            sx={{
              flex: 1,
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
                borderColor: '#e3f2fd',
                '& fieldset': {
                  borderColor: '#e3f2fd',
                },
                '&:hover fieldset': {
                  borderColor: '#153C65',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#153C65',
                },
              },
              '& .MuiInputBase-input': {
                color: '#153C65',
                fontFamily: '"Inter", sans-serif',
                fontWeight: 600,
                fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' },
              },
            }}
          />
          <TextField
            value={formatPrice(priceRange[1])}
            variant="outlined"
            size="small"
            sx={{
              flex: 1,
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
                borderColor: '#e3f2fd',
                '& fieldset': {
                  borderColor: '#e3f2fd',
                },
                '&:hover fieldset': {
                  borderColor: '#153C65',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#153C65',
                },
              },
              '& .MuiInputBase-input': {
                color: '#153C65',
                fontFamily: '"Inter", sans-serif',
                fontWeight: 600,
                fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' },
              },
            }}
          />
        </Box>

        {/* Range Slider */}
        <Box sx={{ mb: { xs: 2.5, sm: 3 } }}>
          <Slider
            value={priceRange}
            onChange={handlePriceChange}
            min={0}
            max={200000000}
            step={1000000}
            sx={{
              '& .MuiSlider-track': {
                backgroundColor: '#153C65',
                height: { xs: 3, sm: 4 },
              },
              '& .MuiSlider-rail': {
                backgroundColor: '#e3f2fd',
                height: { xs: 3, sm: 4 },
              },
              '& .MuiSlider-thumb': {
                backgroundColor: '#153C65',
                width: { xs: 18, sm: 20 },
                height: { xs: 18, sm: 20 },
                '&:hover': {
                  backgroundColor: '#0d2b4a',
                },
              },
            }}
          />
        </Box>

        {/* Price Distribution Histogram */}
        <Box sx={{ display: 'flex', alignItems: 'end', gap: { xs: 0.5, sm: 1 }, height: { xs: 50, sm: 60 } }}>
          {histogramData.map((height, index) => (
            <Box
              key={index}
              sx={{
                flex: 1,
                backgroundColor: '#e3f2fd',
                height: `${height}%`,
                borderRadius: '2px 2px 0 0',
                minHeight: { xs: 3, sm: 4 },
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Properties Features Section */}
      <Box sx={{ mb: { xs: 3, sm: 4 } }}>
        <Typography
          variant="h6"
          sx={{
            color: '#153C65',
            fontWeight: 700,
            fontFamily: '"Poppins", sans-serif',
            fontSize: { xs: '1rem', sm: '1.05rem', md: '1.1rem' },
            mb: { xs: 1.5, sm: 2 },
          }}
        >
          Properties Features
        </Typography>

        {/* Beds Row */}
        <Box sx={{ mb: { xs: 1.5, sm: 2 } }}>
          <Box sx={{ display: 'flex', gap: { xs: 0.5, sm: 1 } }}>
            {[
              { value: 'any', label: 'Any Beds', icon: <BedIcon /> },
              { value: '2+', label: '2+ Beds', icon: <BedIcon /> },
              { value: '3+', label: '3+ Beds', icon: <BedIcon /> },
            ].map((option) => (
              <Button
                key={option.value}
                variant={selectedBeds === option.value ? 'contained' : 'outlined'}
                onClick={() => setSelectedBeds(option.value)}
                sx={{
                  flex: 1,
                  flexDirection: 'column',
                  py: { xs: 1.25, sm: 1.5 },
                  px: { xs: 0.75, sm: 1 },
                  borderRadius: 2,
                  backgroundColor: selectedBeds === option.value ? '#e3f2fd' : 'white',
                  borderColor: '#e3f2fd',
                  color: '#153C65',
                  fontFamily: '"Inter", sans-serif',
                  fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' },
                  fontWeight: 600,
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: selectedBeds === option.value ? '#e3f2fd' : '#f8f9fa',
                    borderColor: '#153C65',
                  },
                  '&.MuiButton-contained': {
                    backgroundColor: '#e3f2fd',
                    color: '#153C65',
                    '&:hover': {
                      backgroundColor: '#e3f2fd',
                    },
                  },
                }}
              >
                <Box sx={{ mb: { xs: 0.25, sm: 0.5 } }}>{option.icon}</Box>
                {option.label}
              </Button>
            ))}
          </Box>
        </Box>

        {/* Baths Row */}
        <Box sx={{ mb: { xs: 1.5, sm: 2 } }}>
          <Box sx={{ display: 'flex', gap: { xs: 0.5, sm: 1 } }}>
            {[
              { value: 'any', label: 'Any Baths', icon: <BathtubIcon /> },
              { value: '2+', label: '2+ Baths', icon: <BathtubIcon /> },
              { value: '3+', label: '3+ Baths', icon: <BathtubIcon /> },
            ].map((option) => (
              <Button
                key={option.value}
                variant={selectedBaths === option.value ? 'contained' : 'outlined'}
                onClick={() => setSelectedBaths(option.value)}
                sx={{
                  flex: 1,
                  flexDirection: 'column',
                  py: { xs: 1.25, sm: 1.5 },
                  px: { xs: 0.75, sm: 1 },
                  borderRadius: 2,
                  backgroundColor: selectedBaths === option.value ? '#e3f2fd' : 'white',
                  borderColor: '#e3f2fd',
                  color: '#153C65',
                  fontFamily: '"Inter", sans-serif',
                  fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' },
                  fontWeight: 600,
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: selectedBaths === option.value ? '#e3f2fd' : '#f8f9fa',
                    borderColor: '#153C65',
                  },
                  '&.MuiButton-contained': {
                    backgroundColor: '#e3f2fd',
                    color: '#153C65',
                    '&:hover': {
                      backgroundColor: '#e3f2fd',
                    },
                  },
                }}
              >
                <Box sx={{ mb: { xs: 0.25, sm: 0.5 } }}>{option.icon}</Box>
                {option.label}
              </Button>
            ))}
          </Box>
        </Box>

        {/* Size Row */}
        <Box sx={{ mb: { xs: 2.5, sm: 3 } }}>
          <Box sx={{ display: 'flex', gap: { xs: 0.5, sm: 1 } }}>
            {[
              { value: 'any', label: 'Any Size', icon: <SquareFootIcon /> },
              { value: '100m²+', label: '100m²+ Size', icon: <SquareFootIcon /> },
              { value: '200m²+', label: '200m²+ Size', icon: <SquareFootIcon /> },
            ].map((option) => (
              <Button
                key={option.value}
                variant={selectedSize === option.value ? 'contained' : 'outlined'}
                onClick={() => setSelectedSize(option.value)}
                sx={{
                  flex: 1,
                  flexDirection: 'column',
                  py: { xs: 1.25, sm: 1.5 },
                  px: { xs: 0.75, sm: 1 },
                  borderRadius: 2,
                  backgroundColor: selectedSize === option.value ? '#e3f2fd' : 'white',
                  borderColor: '#e3f2fd',
                  color: '#153C65',
                  fontFamily: '"Inter", sans-serif',
                  fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' },
                  fontWeight: 600,
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: selectedSize === option.value ? '#e3f2fd' : '#f8f9fa',
                    borderColor: '#153C65',
                  },
                  '&.MuiButton-contained': {
                    backgroundColor: '#e3f2fd',
                    color: '#153C65',
                    '&:hover': {
                      backgroundColor: '#e3f2fd',
                    },
                  },
                }}
              >
                <Box sx={{ mb: { xs: 0.25, sm: 0.5 } }}>{option.icon}</Box>
                {option.label}
              </Button>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Amenities Section */}
      <Box sx={{ mb: { xs: 3, sm: 4 } }}>
        <Typography
          variant="h6"
          sx={{
            color: '#153C65',
            fontWeight: 700,
            fontFamily: '"Poppins", sans-serif',
            fontSize: { xs: '1rem', sm: '1.05rem', md: '1.1rem' },
            mb: { xs: 1.5, sm: 2 },
          }}
        >
          Amenities
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: { xs: 0.5, sm: 1 } }}>
          {[
            { key: 'swimmingPool', label: 'Swimming Pool' },
            { key: 'airConditioning', label: 'Air Conditioning' },
            { key: 'furnished', label: 'Furnished' },
            { key: 'gym', label: 'Gym' },
            { key: 'security', label: '24/7 Security' },
            { key: 'parking', label: 'Parking Space' },
            { key: 'wifi', label: 'WiFi' },
            { key: 'balcony', label: 'Balcony' },
          ].map((amenity) => (
            <FormControlLabel
              key={amenity.key}
              control={
                <Checkbox
                  checked={amenities[amenity.key]}
                  onChange={() => handleAmenityChange(amenity.key)}
                  sx={{
                    color: '#153C65',
                    '&.Mui-checked': {
                      color: '#153C65',
                    },
                  }}
                />
              }
              label={amenity.label}
              sx={{
                '& .MuiFormControlLabel-label': {
                  fontFamily: '"Inter", sans-serif',
                  fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.85rem' },
                  color: '#333',
                },
              }}
            />
          ))}
        </Box>

        <Button
          startIcon={<AddIcon />}
          sx={{
            color: '#153C65',
            fontFamily: '"Inter", sans-serif',
            fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.85rem' },
            fontWeight: 600,
            textTransform: 'none',
            mt: { xs: 0.75, sm: 1 },
            '&:hover': {
              backgroundColor: 'rgba(21, 60, 101, 0.04)',
            },
          }}
        >
          + Show more amenities
        </Button>
      </Box>

      {/* Property Age Section */}
      <Box sx={{ mb: { xs: 3, sm: 4 } }}>
        <Typography
          variant="h6"
          sx={{
            color: '#153C65',
            fontWeight: 700,
            fontFamily: '"Poppins", sans-serif',
            fontSize: { xs: '1rem', sm: '1.05rem', md: '1.1rem' },
            mb: { xs: 1.5, sm: 2 },
          }}
        >
          Property Age
        </Typography>

        <Box sx={{ display: 'flex', gap: { xs: 0.5, sm: 1 } }}>
          {[
            { value: 'any', label: 'Any Age', icon: <HomeIcon /> },
            { value: 'new', label: 'New 0-5 yrs', icon: <HomeIcon /> },
            { value: '5-10', label: '5-10 yrs Age', icon: <HomeIcon /> },
          ].map((option) => (
            <Button
              key={option.value}
              variant={selectedAge === option.value ? 'contained' : 'outlined'}
              onClick={() => setSelectedAge(option.value)}
              sx={{
                flex: 1,
                flexDirection: 'column',
                py: { xs: 1.25, sm: 1.5 },
                px: { xs: 0.75, sm: 1 },
                borderRadius: 2,
                backgroundColor: selectedAge === option.value ? '#e3f2fd' : 'white',
                borderColor: '#e3f2fd',
                color: '#153C65',
                fontFamily: '"Inter", sans-serif',
                fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' },
                fontWeight: 600,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: selectedAge === option.value ? '#e3f2fd' : '#f8f9fa',
                  borderColor: '#153C65',
                },
                '&.MuiButton-contained': {
                  backgroundColor: '#e3f2fd',
                  color: '#153C65',
                  '&:hover': {
                    backgroundColor: '#e3f2fd',
                  },
                },
              }}
            >
              <Box sx={{ mb: { xs: 0.25, sm: 0.5 } }}>{option.icon}</Box>
              {option.label}
            </Button>
          ))}
        </Box>
      </Box>

      {/* Action Buttons */}
      <Box sx={{ display: 'flex', gap: { xs: 1.5, sm: 2 } }}>
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: '#153C65',
            color: 'white',
            fontFamily: '"Poppins", sans-serif',
            fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' },
            fontWeight: 600,
            textTransform: 'none',
            borderRadius: 2,
            py: { xs: 0, sm: 0 },
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
            fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' },
            fontWeight: 600,
            textTransform: 'none',
            borderRadius: 2,
            py: { xs: 0, sm: 0 },
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
