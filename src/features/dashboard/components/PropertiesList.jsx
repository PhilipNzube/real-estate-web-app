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
    {
      id: 4,
      title: 'Cozy Short Let Studio in Victoria Island',
      location: 'Victoria Island, Lagos',
      price: '₦15,000/night',
      bedrooms: '1',
      bathrooms: '1',
      area: '85m²',
      description: 'Modern and cozy studio apartment perfect for short stays. Fully furnished with all amenities, located in the heart of Victoria Island.',
      images: [
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=250&fit=crop',
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=250&fit=crop',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=250&fit=crop',
      ],
      label: 'Short Let',
      labelColor: '#10b981',
    },
    {
      id: 5,
      title: 'Luxury Short Let Villa in Banana Island',
      location: 'Banana Island, Lagos',
      price: '₦85,000/night',
      bedrooms: '3',
      bathrooms: '2',
      area: '280m²',
      description: 'Exclusive luxury villa available for short-term rental. Features private pool, beach access, and premium amenities for the ultimate stay.',
      images: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=250&fit=crop',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=250&fit=crop',
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=250&fit=crop',
      ],
      label: 'Short Let',
      labelColor: '#10b981',
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
        gap: { xs: 1.5, sm: 1, md: 1.5 },
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
                        fontFamily: '"Axiforma", sans-serif',
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
                      fontFamily: '"Axiforma", sans-serif',
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
                        fontFamily: '"Axiforma", sans-serif',
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
                          fontFamily: '"Axiforma", sans-serif',
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
                          fontFamily: '"Axiforma", sans-serif',
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
                          fontFamily: '"Axiforma", sans-serif',
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
                    endIcon={<ArrowForwardIcon color="#0A3A7D" />}
                    sx={{
                      backgroundColor: '#E6EDFF',
                      color: '#0A3A7D',
                      fontFamily: '"Axiforma", sans-serif',
                      fontSize: { xs: '0.8rem', sm: '0.9rem' },
                      fontWeight: 600,
                      textTransform: 'none',
                      borderRadius: 2,
                      '&:hover': {
                        color:'#E6EDFF',
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
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: { xs: 0.5, sm: 1, md: 1.5 }, 
        mt: { xs: 2, sm: 3, md: 4 },
        flexWrap: 'wrap',
        overflow: 'visible',
        px: { xs: 1, sm: 2, md: 3 },
        width: '100%',
        maxWidth: '100%',
        boxSizing: 'border-box',
        rowGap: { xs: 1, sm: 1.5 },
      }}>
        {/* Previous Button */}
        <Button
          variant="outlined"
          size="small"
          sx={{
            minWidth: { xs: 40, sm: 44, md: 48 },
            height: { xs: 40, sm: 44, md: 48 },
            borderColor: '#e0e0e0',
            color: '#333',
            borderRadius: 2,
            fontFamily: '"Inter", sans-serif',
            fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.9rem' },
            fontWeight: 500,
            textTransform: 'none',
            flexShrink: 0,
            '&:hover': {
              borderColor: '#153C65',
              backgroundColor: 'rgba(21, 60, 101, 0.04)',
            },
          }}
        >
          <ArrowForwardIcon sx={{ 
            transform: 'rotate(180deg)', 
            fontSize: { xs: 18, sm: 20, md: 22 } 
          }} />
        </Button>

        {/* Page Numbers - Responsive Display */}
        {/* Mobile: Show only 1, 2, ellipsis, 25 */}
        <Button
          variant="contained"
          size="small"
          sx={{
            minWidth: { xs: 40, sm: 44, md: 48 },
            height: { xs: 40, sm: 44, md: 48 },
            backgroundColor: '#153C65',
            color: 'white',
            borderRadius: 2,
            fontFamily: '"Inter", sans-serif',
            fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.9rem' },
            fontWeight: 600,
            textTransform: 'none',
            flexShrink: 0,
            '&:hover': {
              backgroundColor: '#0d2b4a',
            },
          }}
        >
          1
        </Button>

        {/* Show 2 on mobile and tablet, 3 on desktop */}
        <Button
          variant="outlined"
          size="small"
          sx={{
            minWidth: { xs: 40, sm: 44, md: 48 },
            height: { xs: 40, sm: 44, md: 48 },
            borderColor: '#e0e0e0',
            color: '#333',
            borderRadius: 2,
            fontFamily: '"Inter", sans-serif',
            fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.9rem' },
            fontWeight: 500,
            textTransform: 'none',
            flexShrink: 0,
            display: { xs: 'flex', md: 'flex' },
            '&:hover': {
              borderColor: '#153C65',
              backgroundColor: 'rgba(21, 60, 101, 0.04)',
            },
          }}
        >
          2
        </Button>

        {/* Show 3 only on tablet and desktop */}
        <Button
          variant="outlined"
          size="small"
          sx={{
            minWidth: { xs: 40, sm: 44, md: 48 },
            height: { xs: 40, sm: 44, md: 48 },
            borderColor: '#e0e0e0',
            color: '#333',
            borderRadius: 2,
            fontFamily: '"Inter", sans-serif',
            fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.9rem' },
            fontWeight: 500,
            textTransform: 'none',
            flexShrink: 0,
            display: { xs: 'none', sm: 'flex', md: 'flex' },
            '&:hover': {
              borderColor: '#153C65',
              backgroundColor: 'rgba(21, 60, 101, 0.04)',
            },
          }}
        >
          3
        </Button>

        {/* Show 4 only on desktop */}
        <Button
          variant="outlined"
          size="small"
          sx={{
            minWidth: { xs: 40, sm: 44, md: 48 },
            height: { xs: 40, sm: 44, md: 48 },
            borderColor: '#e0e0e0',
            color: '#333',
            borderRadius: 2,
            fontFamily: '"Inter", sans-serif',
            fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.9rem' },
            fontWeight: 500,
            textTransform: 'none',
            flexShrink: 0,
            display: { xs: 'none', sm: 'none', md: 'flex' },
            '&:hover': {
              borderColor: '#153C65',
              backgroundColor: 'rgba(21, 60, 101, 0.04)',
            },
          }}
        >
          4
        </Button>

        {/* Ellipsis - Show on mobile and tablet */}
        <Button
          variant="outlined"
          size="small"
          sx={{
            minWidth: { xs: 40, sm: 44, md: 48 },
            height: { xs: 40, sm: 44, md: 48 },
            borderColor: '#e0e0e0',
            color: '#333',
            borderRadius: 2,
            fontFamily: '"Inter", sans-serif',
            fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.9rem' },
            fontWeight: 500,
            textTransform: 'none',
            flexShrink: 0,
            display: { xs: 'flex', sm: 'flex', md: 'none' },
            '&:hover': {
              borderColor: '#153C65',
              backgroundColor: 'rgba(21, 60, 101, 0.04)',
            },
          }}
        >
          ...
        </Button>

        {/* Last Page */}
        <Button
          variant="outlined"
          size="small"
          sx={{
            minWidth: { xs: 40, sm: 44, md: 48 },
            height: { xs: 40, sm: 44, md: 48 },
            borderColor: '#e0e0e0',
            color: '#333',
            borderRadius: 2,
            fontFamily: '"Inter", sans-serif',
            fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.9rem' },
            fontWeight: 500,
            textTransform: 'none',
            flexShrink: 0,
            '&:hover': {
              borderColor: '#153C65',
              backgroundColor: 'rgba(21, 60, 101, 0.04)',
            },
          }}
        >
          25
        </Button>

        {/* Next Button */}
        <Button
          variant="outlined"
          size="small"
          sx={{
            minWidth: { xs: 40, sm: 44, md: 48 },
            height: { xs: 40, sm: 44, md: 48 },
            borderColor: '#e0e0e0',
            color: '#333',
            borderRadius: 2,
            fontFamily: '"Inter", sans-serif',
            fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.9rem' },
            fontWeight: 500,
            textTransform: 'none',
            flexShrink: 0,
            '&:hover': {
              borderColor: '#153C65',
              backgroundColor: 'rgba(21, 60, 101, 0.04)',
            },
          }}
        >
          <ArrowForwardIcon sx={{ 
            fontSize: { xs: 18, sm: 20, md: 22 } 
          }} />
        </Button>
      </Box>
    </Box>
  );
};

export default PropertiesList;
