import React from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  IconButton,
  Card,
  CardContent,
  Divider,
} from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  Share as ShareIcon,
  BookmarkBorder as BookmarkIcon,
  ArrowForward as ArrowForwardIcon,
  LocationOn as LocationIcon,
} from '@mui/icons-material';

const SavedPropertiesList = () => {
  const savedProperties = [
    {
      id: 1,
      title: 'Luxury Apartment in Victoria Island',
      location: 'Victoria Island, Lagos',
      price: '₦75,000,000',
      bedrooms: '3',
      bathrooms: '2',
      area: '210m²',
      savedDate: 'Saved 2 weeks ago',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=250&fit=crop',
      isSaved: true,
      savedCount: 1,
    },
    {
      id: 2,
      title: 'Modern Family House in Lekki',
      location: 'Lekki Phase 1, Lagos',
      price: '₦120,000,000',
      bedrooms: '4',
      bathrooms: '3',
      area: '350m²',
      savedDate: 'Saved 2 weeks ago',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=250&fit=crop',
      isSaved: true,
      savedCount: 2,
    },
    {
      id: 3,
      title: 'Penthouse with Ocean View in Ikoyi',
      location: 'Ikoyi, Lagos',
      price: '₦100,000,000',
      bedrooms: '2',
      bathrooms: '2',
      area: '180m²',
      savedDate: 'Saved 2 weeks ago',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=250&fit=crop',
      isSaved: true,
      savedCount: 1,
    },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {/* Properties Grid */}
      <Box sx={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: { xs: 1.5, sm: 1, md: 1.5 },
        width: '100%',
        overflow: 'hidden',
        maxWidth: '100%',
        boxSizing: 'border-box',
        justifyContent: 'flex-start'
      }}>
        {savedProperties.map((property) => {
          return (
            <Box key={property.id} sx={{ 
              width: { xs: '100%', sm: 'calc(50% - 4px)', md: 'calc(33.333% - 8px)' },
              minWidth: { xs: '100%', sm: 240, md: 280 },
              maxWidth: { xs: '100%', sm: 'calc(50% - 4px)', md: 'calc(33.333% - 8px)' },
              flexShrink: 0,
              overflow: 'hidden',
              boxSizing: 'border-box'
            }}>
              <Card
                sx={{
                  height: 'auto',
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
                  
                  {/* Saved Date Overlay - Top Left */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 12,
                      left: 12,
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                      color: 'white',
                      px: 2,
                      py: 0.5,
                      borderRadius: 1,
                      fontFamily: '"Inter", sans-serif',
                      fontSize: { xs: '0.7rem', sm: '0.8rem' },
                      fontWeight: 500,
                    }}
                  >
                    {property.savedDate}
                  </Box>

                  {/* Action Icons - Top Right */}
                  <Box sx={{ position: 'absolute', top: 12, right: 12, display: 'flex', gap: 1 }}>
                    <IconButton
                      size="small"
                      sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        '&:hover': { backgroundColor: 'white' },
                      }}
                    >
                      <TrendingUpIcon sx={{ fontSize: 18, color: '#666' }} />
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
                    <IconButton
                      size="small"
                      sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        position: 'relative',
                        '&:hover': { backgroundColor: 'white' },
                      }}
                    >
                      <BookmarkIcon sx={{ fontSize: 18, color: '#666' }} />
                      {property.savedCount > 0 && (
                        <Box
                          sx={{
                            position: 'absolute',
                            top: -2,
                            right: -2,
                            backgroundColor: '#ff6b35',
                            color: 'white',
                            borderRadius: '50%',
                            width: 12,
                            height: 12,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.5rem',
                            fontWeight: 600,
                            fontFamily: '"Poppins", sans-serif',
                            border: '1px solid white',
                          }}
                        >
                          {property.savedCount}
                        </Box>
                      )}
                    </IconButton>
                  </Box>

                  {/* Price Overlay - Bottom Left */}
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

                  {/* Image Carousel Indicators - Bottom Right */}
                  <Box sx={{ 
                    position: 'absolute', 
                    bottom: 12, 
                    right: 12, 
                    display: 'flex', 
                    gap: 0.5 
                  }}>
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        backgroundColor: 'white',
                        opacity: 1,
                      }}
                    />
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        backgroundColor: 'white',
                        opacity: 0.6,
                      }}
                    />
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        backgroundColor: 'white',
                        opacity: 0.6,
                      }}
                    />
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
                    {/* Title */}
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

                    {/* Location */}
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

                  {/* Property Stats */}
                  <Box sx={{ 
                    display: 'flex', 
                    gap: { xs: 2, sm: 3 },
                    justifyContent: 'space-between',
                    mb: 2
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

                  {/* View Details Button */}
                  <Button
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      backgroundColor: '#E6EDFF',
                      color: '#0A3A7D',
                      fontFamily: '"Poppins", sans-serif',
                      fontSize: { xs: '0.8rem', sm: '0.9rem' },
                      fontWeight: 600,
                      textTransform: 'none',
                      borderRadius: 2,
                      '&:hover': {
                        color: '#E6EDFF',
                        backgroundColor: '#0d2b4a',
                      },
                    }}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default SavedPropertiesList;
