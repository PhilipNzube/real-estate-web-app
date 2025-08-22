import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from '@mui/material';

const PropertySearchForm = () => {
  const [formData, setFormData] = useState({
    location: '',
    propertyType: '',
    budgetRange: '',
    bedrooms: '',
  });

  const propertyTypes = [
    'Apartment',
    'House',
    'Villa',
    'Penthouse',
    'Townhouse',
    'Land',
  ];

  const budgetRanges = [
    'Under ₦50M',
    '₦50M - ₦100M',
    '₦100M - ₦200M',
    '₦200M - ₦500M',
    '₦500M - ₦1B',
    'Above ₦1B',
  ];

  const bedroomOptions = [
    'Any',
    '1 Bedroom',
    '2 Bedrooms',
    '3 Bedrooms',
    '4 Bedrooms',
    '5+ Bedrooms',
  ];

  const handleChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Search form submitted:', formData);
    // Handle search logic here
  };

  return (
    <Card
      sx={{
        backgroundColor: 'background.paper',
        borderRadius: 3,
        boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
        width: '100%',
        maxWidth: { xs: '95%', sm: 400, md: 350, lg: 320, xl: 300, xxl: 350 },
        minWidth: { xs: 250, sm: 280, md: 300, xxl: 320 },
      }}
    >
      <CardContent sx={{ p: { xs: 2, sm: 2.5, md: 3, lg: 4, xxl: 5 } }}>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{
            color: '#153C65',
            fontWeight: 700,
            mb: { xs: 0.5, sm: 1 },
            fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem', lg: '1.75rem', xxl: '2rem' },
            fontFamily: '"Poppins", sans-serif',
          }}
        >
          Find Your Dream Home
        </Typography>
        
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            mb: { xs: 2, sm: 3 },
            opacity: 0.8,
            fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' },
            fontFamily: '"Poppins", sans-serif',
          }}
        >
          Customize your property search
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          {/* Location Field */}
          <TextField
            fullWidth
            label="Location"
            value={formData.location}
            onChange={handleChange('location')}
            margin="dense"
            size="small"
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'white',
                '& fieldset': {
                  borderColor: 'rgba(0,0,0,0.1)',
                },
                '&:hover fieldset': {
                  borderColor: 'primary.main',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'primary.main',
                },
              },
            }}
          />

          {/* Property Type Field */}
          <FormControl fullWidth margin="dense" size="small">
            <InputLabel sx={{ color: 'rgba(0,0,0,0.6)' }}>Property Type</InputLabel>
            <Select
              value={formData.propertyType}
              label="Property Type"
              onChange={handleChange('propertyType')}
              sx={{
                backgroundColor: 'white',
                color: 'black',
                '& .MuiSelect-select': {
                  color: 'black',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(0,0,0,0.1)',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'primary.main',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'primary.main',
                },
              }}
            >
              {propertyTypes.map((type) => (
                <MenuItem 
                  key={type} 
                  value={type}
                  sx={{ color: 'black' }}
                >
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Budget Range Field */}
          <FormControl fullWidth margin="dense" size="small">
            <InputLabel sx={{ color: 'rgba(0,0,0,0.6)' }}>Budget Range</InputLabel>
            <Select
              value={formData.budgetRange}
              label="Budget Range"
              onChange={handleChange('budgetRange')}
              sx={{
                backgroundColor: 'white',
                color: 'black',
                '& .MuiSelect-select': {
                  color: 'black',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(0,0,0,0.1)',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'primary.main',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'primary.main',
                },
              }}
            >
              {budgetRanges.map((range) => (
                <MenuItem 
                  key={range} 
                  value={range}
                  sx={{ color: 'black' }}
                >
                  {range}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Bedrooms Field */}
          <FormControl fullWidth margin="dense" size="small">
            <InputLabel sx={{ color: 'rgba(0,0,0,0.6)' }}>Bedrooms</InputLabel>
            <Select
              value={formData.bedrooms}
              label="Bedrooms"
              onChange={handleChange('bedrooms')}
              sx={{
                backgroundColor: 'white',
                color: 'black',
                '& .MuiSelect-select': {
                  color: 'black',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(0,0,0,0.1)',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'primary.main',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'primary.main',
                },
              }}
            >
              {bedroomOptions.map((option) => (
                <MenuItem 
                  key={option} 
                  value={option}
                  sx={{ color: 'black' }}
                >
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Search Button */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="medium"
            sx={{
              mt: { xs: 2, sm: 3 },
              mb: { xs: 1, sm: 2 },
              backgroundColor: '#153C65',
              color: 'white',
              py: { xs: 0.75, sm: 1 },
              fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem' },
              fontWeight: 600,
              fontFamily: '"Poppins", sans-serif',
              '&:hover': {
                backgroundColor: 'primary.dark',
              },
            }}
          >
            Search Properties
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PropertySearchForm;
