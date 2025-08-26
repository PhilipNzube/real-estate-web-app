import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Button, 
  Chip,
  IconButton,
  Divider,
  Card,
  CardContent
} from '@mui/material';
import {
  Favorite as FavoriteIcon,
  Share as ShareIcon,
  LocationOn as LocationIcon,
  Bed as BedIcon,
  Bathtub as BathtubIcon,
  SquareFoot as SquareFootIcon,
  ArrowForward as ArrowForwardIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from '@mui/icons-material';

const PropertiesList = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  const properties = [
    {
      id: 1,
      title: 'Elegant Townhouse in Maitama Island',
      location: 'Maitama, Abuja',
      price: '₦75,000,000',
      bedrooms: '3',
      bathrooms: '2',
      area: '210m²',
      description: 'Elegant 3-bedroom townhouse featuring modern amenities, spacious living areas, and stunning city views. Located in a secure complex with excellent facilities.',
      images: [
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=250&fit=crop',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=250&fit=crop',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=250&fit=crop',
      ],
      label: 'New',
      labelColor: '#f59e0b',
    },
    {
      id: 2,
      title: 'Garden View Apartment in Ikeja GRA',
      location: 'Ikeja GRA, Lagos',
      price: '₦120,000,000',
      bedrooms: '4',
      bathrooms: '3',
      area: '350m²',
      description: 'Spacious 4-bedroom apartment with garden views, premium finishes, and access to exclusive amenities. Perfect for families seeking luxury living.',
      images: [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=250&fit=crop',
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=250&fit=crop',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=250&fit=crop',
      ],
      label: 'Exclusive',
      labelColor: '#3b82f6',
    },
    {
      id: 3,
      title: 'Beachfront Villa in Banana Island',
      location: 'Banana Island, Lagos',
      price: '₦95,000,000',
      bedrooms: '2',
      bathrooms: '2',
      area: '180m²',
      description: 'Stunning beachfront villa with panoramic ocean views, private beach access, and luxury amenities. Ideal for those seeking exclusivity.',
      images: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=250&fit=crop',
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=250&fit=crop',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=250&fit=crop',
      ],
      label: 'Exclusive',
      labelColor: '#3b82f6',
    },
  ];

  const handleImageChange = (propertyId, direction) => {
    const property = properties.find(p => p.id === propertyId);
    const currentIndex = currentImageIndex[propertyId] || 0;
    let newIndex;

    if (direction === 'next') {
      newIndex = (currentIndex + 1) % property.images.length;
    } else {
      newIndex = currentIndex === 0 ? property.images.length - 1 : currentIndex - 1;
    }

    setCurrentImageIndex(prev => ({
      ...prev,
      [propertyId]: newIndex
    }));
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {/* Properties Grid */}
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
        {properties.map((property) => {
          const currentIndex = currentImageIndex[property.id] || 0;
          
          return (
            <Box key={property.id} sx={{ 
              width: { xs: '100%', sm: 'calc(50% - 8px)', md: 'calc(33.333% - 12px)' },
              minWidth: { xs: '100%', sm: 260, md: 300 },
              maxWidth: { xs: '100%', sm: 'calc(50% - 8px)', md: 'calc(33.333% - 12px)' },
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
                    src={property.images[currentIndex]}
                    alt={property.title}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                  />
                  
                  {/* Label */}
                  {property.label && (
                    <Chip
                      label={property.label}
                      sx={{
                        position: 'absolute',
                        top: 12,
                        left: 12,
                        backgroundColor: property.labelColor,
                        color: 'white',
                        fontFamily: '"Poppins", sans-serif',
                        fontSize: { xs: '0.7rem', sm: '0.8rem' },
                        fontWeight: 600,
                        height: 24,
                      }}
                    />
                  )}

                  {/* Action Icons */}
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

                  {/* Image Navigation */}
                  {property.images.length > 1 && (
                    <>
                      <IconButton
                        onClick={(e) => {
                          e.stopPropagation();
                          handleImageChange(property.id, 'prev');
                        }}
                        sx={{
                          position: 'absolute',
                          left: 8,
                          top: '50%',
                          transform: 'translateY(-50%)',
                          backgroundColor: 'rgba(0, 0, 0, 0.5)',
                          color: 'white',
                          width: 32,
                          height: 32,
                          '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                          },
                        }}
                      >
                        <ChevronLeftIcon sx={{ fontSize: 20 }} />
                      </IconButton>
                      <IconButton
                        onClick={(e) => {
                          e.stopPropagation();
                          handleImageChange(property.id, 'next');
                        }}
                        sx={{
                          position: 'absolute',
                          right: 8,
                          top: '50%',
                          transform: 'translateY(-50%)',
                          backgroundColor: 'rgba(0, 0, 0, 0.5)',
                          color: 'white',
                          width: 32,
                          height: 32,
                          '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                          },
                        }}
                      >
                        <ChevronRightIcon sx={{ fontSize: 20 }} />
                      </IconButton>
                    </>
                  )}

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

                  {/* Image Dots */}
                  {property.images.length > 1 && (
                    <Box sx={{ position: 'absolute', bottom: 12, right: 12, display: 'flex', gap: 0.5 }}>
                      {property.images.map((_, index) => (
                        <Box
                          key={index}
                          sx={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            backgroundColor: index === currentIndex ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.5)',
                          }}
                        />
                      ))}
                    </Box>
                  )}
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

                    {/* Description */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#666',
                        fontFamily: '"Inter", sans-serif',
                        fontSize: { xs: '0.8rem', sm: '0.9rem' },
                        lineHeight: 1.5,
                        mb: 2,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {property.description}
                    </Typography>
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
                      backgroundColor: '#153C65',
                      color: 'white',
                      fontFamily: '"Poppins", sans-serif',
                      fontSize: { xs: '0.8rem', sm: '0.9rem' },
                      fontWeight: 600,
                      textTransform: 'none',
                      borderRadius: 2,
                      '&:hover': {
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

      {/* Pagination */}
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, mt: 3 }}>
        <IconButton
          size="small"
          sx={{
            color: '#666',
            '&:hover': {
              backgroundColor: 'rgba(21, 60, 101, 0.04)',
            },
          }}
        >
          <ArrowForwardIcon sx={{ transform: 'rotate(180deg)', fontSize: 16 }} />
        </IconButton>
        
        {[1, 2, 3, 4].map((page) => (
          <Button
            key={page}
            variant={page === 1 ? 'contained' : 'text'}
            size="small"
            sx={{
              minWidth: 32,
              height: 32,
              fontFamily: '"Inter", sans-serif',
              fontSize: { xs: '0.8rem', sm: '0.9rem' },
              backgroundColor: page === 1 ? '#153C65' : 'transparent',
              color: page === 1 ? 'white' : '#666',
              '&:hover': {
                backgroundColor: page === 1 ? '#0d2b4a' : 'rgba(21, 60, 101, 0.04)',
              },
            }}
          >
            {page}
          </Button>
        ))}
        
        <Typography
          sx={{
            color: '#666',
            fontFamily: '"Inter", sans-serif',
            fontSize: { xs: '0.8rem', sm: '0.9rem' },
            mx: 1,
          }}
        >
          ...
        </Typography>
        
        <Button
          variant="text"
          size="small"
          sx={{
            minWidth: 32,
            height: 32,
            fontFamily: '"Inter", sans-serif',
            fontSize: { xs: '0.8rem', sm: '0.9rem' },
            color: '#666',
            '&:hover': {
              backgroundColor: 'rgba(21, 60, 101, 0.04)',
            },
          }}
        >
          25
        </Button>
        
        <IconButton
          size="small"
          sx={{
            color: '#666',
            '&:hover': {
              backgroundColor: 'rgba(21, 60, 101, 0.04)',
            },
          }}
        >
          <ArrowForwardIcon sx={{ fontSize: 16 }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default PropertiesList;
