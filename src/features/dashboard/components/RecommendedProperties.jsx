import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, Chip, IconButton } from '@mui/material';
import { Favorite as FavoriteIcon, Share as ShareIcon, ArrowForward as ArrowForwardIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const RecommendedProperties = () => {
  const navigate = useNavigate();

  const properties = [
    {
      id: 1,
      title: 'Elegant Townhouse in Maitama Island',
      location: 'Maitama, Abuja',
      price: 'N85,000,000',
      bedrooms: '3',
      bathrooms: '2',
      area: '210m²',
      tag: 'Hot Deal',
      image: '/api/placeholder/400/250',
    },
    {
      id: 2,
      title: 'Garden View Apartment in Ikeja GRA',
      location: 'Ikeja GRA, Lagos',
      price: 'N55,000,000',
      bedrooms: '4',
      bathrooms: '3',
      area: '350m²',
      tag: 'Exclusive',
      image: '/api/placeholder/400/250',
    },
    {
      id: 3,
      title: 'Beachfront Villa in Banana Island Ikoyi',
      location: 'Banana Island, Lagos',
      price: 'N180,000,000',
      bedrooms: '2',
      bathrooms: '2',
      area: '180m²',
      tag: 'Premium',
      image: '/api/placeholder/400/250',
    },
  ];

  return (
    <Box>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            color: '#153C65',
            fontFamily: '"Lora", serif',
            fontSize: { xs: '1.3rem', sm: '1.5rem', md: '1.8rem' },
          }}
        >
          Recommended for You
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            color: '#153C65',
            '&:hover': { opacity: 0.8 },
          }}
          onClick={() => navigate('/dashboard/properties')}
        >
          <Typography
            variant="body2"
            sx={{
              fontWeight: 500,
              mr: 0.5,
              fontFamily: '"Poppins", sans-serif',
              fontSize: { xs: '0.8rem', sm: '0.9rem' },
            }}
          >
            View all
          </Typography>
          <ArrowForwardIcon sx={{ fontSize: 16 }} />
        </Box>
      </Box>

      {/* Property Cards */}
      <Grid container spacing={3}>
        {properties.map((property) => (
          <Grid item xs={12} md={4} key={property.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                '&:hover': {
                  boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                  transform: 'translateY(-4px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              {/* Image Section */}
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="div"
                  sx={{
                    height: { xs: 200, sm: 220, md: 200 },
                    backgroundColor: '#f0f0f0',
                    backgroundImage: `url(${property.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                  }}
                />
                
                {/* Tag */}
                <Chip
                  label={property.tag}
                  sx={{
                    position: 'absolute',
                    top: 12,
                    left: 12,
                    backgroundColor: '#DFC14C',
                    color: '#153C65',
                    fontWeight: 600,
                    fontSize: { xs: '0.7rem', sm: '0.8rem' },
                    fontFamily: '"Poppins", sans-serif',
                  }}
                />
                
                {/* Action Buttons */}
                <Box sx={{ position: 'absolute', top: 12, right: 12, display: 'flex', gap: 1 }}>
                  <IconButton
                    size="small"
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      '&:hover': { backgroundColor: 'white' },
                    }}
                  >
                    <FavoriteIcon sx={{ fontSize: 18, color: '#666' }} />
                  </IconButton>
                  <IconButton
                    size="small"
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      '&:hover': { backgroundColor: 'white' },
                    }}
                  >
                    <ShareIcon sx={{ fontSize: 18, color: '#666' }} />
                  </IconButton>
                </Box>
              </Box>

              {/* Content */}
              <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: { xs: 2, sm: 3 } }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: '#153C65',
                    mb: 1,
                    fontSize: { xs: '1rem', sm: '1.1rem' },
                    fontFamily: '"Lora", serif',
                    lineHeight: 1.3,
                  }}
                >
                  {property.title}
                </Typography>
                
                <Typography
                  variant="body2"
                  sx={{
                    color: '#666',
                    mb: 2,
                    fontSize: { xs: '0.8rem', sm: '0.9rem' },
                    fontFamily: '"Inter", sans-serif',
                  }}
                >
                  {property.location}
                </Typography>

                {/* Property Details */}
                <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#666',
                      fontSize: { xs: '0.8rem', sm: '0.9rem' },
                      fontFamily: '"Inter", sans-serif',
                    }}
                  >
                    {property.bedrooms} Bedrooms
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#666',
                      fontSize: { xs: '0.8rem', sm: '0.9rem' },
                      fontFamily: '"Inter", sans-serif',
                    }}
                  >
                    {property.bathrooms} Bathrooms
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#666',
                      fontSize: { xs: '0.8rem', sm: '0.9rem' },
                      fontFamily: '"Inter", sans-serif',
                    }}
                  >
                    {property.area} Area
                  </Typography>
                </Box>

                {/* Price */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: '#153C65',
                    fontSize: { xs: '1.1rem', sm: '1.2rem' },
                    fontFamily: '"Lora", serif',
                    mt: 'auto',
                  }}
                >
                  {property.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RecommendedProperties;
