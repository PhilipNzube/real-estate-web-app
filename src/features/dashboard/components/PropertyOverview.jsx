import React from 'react';
import { Box, Typography, Paper, Grid, Chip, Card, CardMedia, CardContent, IconButton, Divider } from '@mui/material';
import { LocationOn as LocationIcon, Favorite as FavoriteIcon, Share as ShareIcon, ArrowForward as ArrowForwardIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const PropertyOverview = () => {
  const navigate = useNavigate();

  const properties = [
    {
      id: 1,
      title: 'Luxury Apartment in Victoria Island',
      location: 'Victoria Island, Lagos',
      price: 'N75,000,000',
      bedrooms: '3',
      bathrooms: '2',
      area: '210m²',
      tag: 'New Listing',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=250&fit=crop',
    },
    {
      id: 2,
      title: 'Modern Family House in Lekki',
      location: 'Lekki Phase 1, Lagos',
      price: 'N120,000,000',
      bedrooms: '4',
      bathrooms: '3',
      area: '350m²',
      tag: 'Featured',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=250&fit=crop',
    },
    {
      id: 3,
      title: 'Penthouse with Ocean View in Ikoyi',
      location: 'Ikoyi, Lagos',
      price: 'N95,000,000',
      bedrooms: '2',
      bathrooms: '2',
      area: '180m²',
      tag: 'Premium',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=250&fit=crop',
    },
  ];

  return (
    <Box sx={{ mt: 6 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
      <Typography
        variant="h5"
        sx={{
            fontWeight: 500,
            color: '#333B4D',
            fontFamily: '"Axiforma", serif',
            fontSize: { xs: '1.2rem', sm: '1.2rem', md: '1.3rem' },
          }}
        >
          Continue Browsing
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
              color: '#333B4D',
            fontFamily: '"Axiforma", serif',
            fontSize: { xs: '1.2rem', sm: '1.2rem', md: '1.3rem' },
            }}
          >
            View history
      </Typography>
          <ArrowForwardIcon sx={{ fontSize: 16 }} />
        </Box>
      </Box>
      
      <Box sx={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: { xs: 1.5, sm: 2, md: 3 },
        width: '100%',
        overflow: 'hidden',
        maxWidth: '100%',
        boxSizing: 'border-box',
        justifyContent: 'flex-start'
      }}>
        {properties.map((property) => (
                      <Box sx={{ 
              width: { xs: '100%', sm: 'calc(50% - 8px)', md: 'calc(33.333% - 12px)' },
              minWidth: { xs: '100%', sm: 260, md: 300 },
              maxWidth: { xs: '100%', sm: 'calc(50% - 8px)', md: 'calc(33.333% - 12px)' },
              flexShrink: 0,
              overflow: 'hidden',
              boxSizing: 'border-box'
            }} key={property.id}>
            <Card
              sx={{
                height: { xs: 'auto', sm: 480, md: 520 },
                minHeight: { xs: 400, sm: 480, md: 520 },
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                width: '100%',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                },
              }}
            >
              {/* Property Image */}
              <Box
                sx={{
                  height: { xs: 200, sm: 220, md: 240 },
                  position: 'relative',
                  overflow: 'hidden',
                  flexShrink: 0,
                }}
              >
                <Box
                  component="img"
                  src={property.image}
                  alt={property.title}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
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
                
                {/* Price Overlay */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 12,
                    left: 12,
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    color: 'white',
                    px: 2,
                    py: 1,
                    borderRadius: 1,
                    fontWeight: 700,
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    letterSpacing: '0.5px',
                  }}
                >
                  {property.price}
                </Box>
                
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

              <CardContent sx={{ 
                p: { xs: 2.5, sm: 3, md: 3.5 },
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#333B4D',
                      fontWeight: 700,
                      mb: 1.5,
                      fontFamily: '"Poppins", sans-serif',
                      fontSize: { xs: '1.1rem', sm: '1.2rem' },
                      lineHeight: 1.3,
                      minHeight: { xs: '2.8rem', sm: '3rem' },
                      maxHeight: { xs: '2.8rem', sm: '3rem' },
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      wordBreak: 'break-word',
                    }}
                  >
                    {property.title}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2.5 }}>
                    <LocationIcon sx={{ fontSize: 18, color: '#666', mr: 1 }} />
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#666',
                        fontFamily: '"Inter", sans-serif',
                        fontSize: { xs: '0.9rem', sm: '1rem' },
                        fontWeight: 500,
                      }}
                    >
                      {property.location}
                </Typography>
              </Box>
                </Box>

                <Divider sx={{ my: 2, backgroundColor: '#e9ecef' }} />

                <Box sx={{ 
                  display: 'flex', 
                  gap: { xs: 2, sm: 3 },
                  justifyContent: 'space-between'
                }}>
                  <Box sx={{ textAlign: 'center', flex: 1 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#333B4D',
                        fontWeight: 700,
                        fontFamily: '"Poppins", sans-serif',
                        fontSize: { xs: '1rem', sm: '1.1rem' },
                        mb: 0.5,
                      }}
                    >
                      {property.bedrooms}
                    </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#666',
                    fontFamily: '"Inter", sans-serif',
                        fontSize: { xs: '0.8rem', sm: '0.85rem' },
                        fontWeight: 500,
                      }}
                    >
                      Bedrooms
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: 'center', flex: 1 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#333B4D',
                        fontWeight: 700,
                        fontFamily: '"Poppins", sans-serif',
                        fontSize: { xs: '1rem', sm: '1.1rem' },
                        mb: 0.5,
                      }}
                    >
                      {property.bathrooms}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#666',
                    fontFamily: '"Inter", sans-serif',
                        fontSize: { xs: '0.8rem', sm: '0.85rem' },
                        fontWeight: 500,
                      }}
                    >
                      Bathrooms
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: 'center', flex: 1 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#333B4D',
                        fontWeight: 700,
                        fontFamily: '"Poppins", sans-serif',
                        fontSize: { xs: '1rem', sm: '1.1rem' },
                        mb: 0.5,
                      }}
                    >
                      {property.area}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#666',
                    fontFamily: '"Inter", sans-serif',
                        fontSize: { xs: '0.8rem', sm: '0.85rem' },
                        fontWeight: 500,
                  }}
                >
                      Area
                </Typography>
              </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PropertyOverview;
