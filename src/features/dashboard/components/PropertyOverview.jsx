import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { LocationOn as LocationIcon } from '@mui/icons-material';

const PropertyOverview = () => {
  const locations = [
    {
      name: 'Victoria Island, Lagos',
      bedrooms: '3',
      bathrooms: '2',
      area: '210m²',
    },
    {
      name: 'Lekki Phase 1, Lagos',
      bedrooms: '4',
      bathrooms: '3',
      area: '350m²',
    },
    {
      name: 'Ikoyi, Lagos',
      bedrooms: '2',
      bathrooms: '2',
      area: '180m²',
    },
  ];

  return (
    <Box>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 600,
          mb: 3,
          color: '#153C65',
          fontFamily: '"Lora", serif',
          fontSize: { xs: '1.3rem', sm: '1.5rem', md: '1.8rem' },
        }}
      >
        Property Overview
      </Typography>
      
      <Grid container spacing={2}>
        {locations.map((location, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              sx={{
                p: { xs: 2, sm: 3 },
                borderRadius: 2,
                border: '1px solid #e0e0e0',
                '&:hover': {
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocationIcon sx={{ color: '#153C65', mr: 1, fontSize: 20 }} />
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                    color: '#153C65',
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    fontFamily: '"Poppins", sans-serif',
                  }}
                >
                  {location.name}
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#666',
                    fontSize: { xs: '0.8rem', sm: '0.9rem' },
                    fontFamily: '"Inter", sans-serif',
                  }}
                >
                  {location.bedrooms} Bedrooms
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#666',
                    fontSize: { xs: '0.8rem', sm: '0.9rem' },
                    fontFamily: '"Inter", sans-serif',
                  }}
                >
                  {location.bathrooms} Bathrooms
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#666',
                    fontSize: { xs: '0.8rem', sm: '0.9rem' },
                    fontFamily: '"Inter", sans-serif',
                  }}
                >
                  {location.area} Area
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PropertyOverview;
