import React from 'react';
import {
  Box,
  Card,
  Typography,
  Chip,
  Button,
  Switch,
  IconButton,
} from '@mui/material';
import {
  LocationOn as LocationIcon,
  Home as HomeIcon,
  MonetizationOn as PriceIcon,
  Bed as BedIcon,
  Bathtub as BathIcon,
  Pool as PoolIcon,
  Edit as EditIcon,
  Notifications as NotificationsIcon,
  Delete as DeleteIcon,
  AccessTime as TimeIcon,
  MyLocation as TargetIcon,
  Business as BusinessIcon,
  Landscape as LandscapeIcon,
  Hotel as HotelIcon,
} from '@mui/icons-material';

const PropertyAlertsList = ({ selectedTab }) => {

  const alerts = [
    {
      id: 1,
      title: 'Luxury Apartment in Victoria Island',
      location: 'Victoria Island, Lagos',
      price: '₦75,000,000',
      priceRange: '₦70M - ₦80M',
      bedrooms: '3',
      bathrooms: '2',
      beds: '3',
      baths: '2',
      area: '210m²',
      propertyType: "Any Type",
      status: 'Active',
      lastUpdated: '2 hours ago',
      amenities: ['Pool', 'Gym', 'Security'],
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=250&fit=crop',
    },
    {
      id: 2,
      title: 'Modern Villa in Lekki Phase 1',
      location: 'Lekki Phase 1, Lagos',
      price: '₦120,000,000',
      priceRange: '₦110M - ₦130M',
      bedrooms: '4',
      bathrooms: '3',
      beds: '4',
      baths: '3',
      area: '350m²',
      propertyType: "Villa",
      status: 'Active',
      lastUpdated: '4 hours ago',
      amenities: ['Pool', 'Garden', 'Security'],
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=250&fit=crop',
    },
    {
      id: 3,
      title: 'Premium Land in Banana Island',
      location: 'Banana Island, Lagos',
      price: '₦200,000,000',
      priceRange: '₦190M - ₦210M',
      bedrooms: 'N/A',
      bathrooms: 'N/A',
      beds: 'N/A',
      baths: 'N/A',
      area: '500m²',
      propertyType: "Land",
      status: 'Active',
      lastUpdated: '6 hours ago',
      amenities: ['Waterfront', 'Security'],
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=250&fit=crop',
    },
    {
      id: 4,
      title: 'Elegant Penthouse in Ikoyi',
      location: 'Ikoyi, Lagos',
      price: '₦95,000,000',
      priceRange: '₦90M - ₦100M',
      bedrooms: '2',
      bathrooms: '2',
      beds: '2',
      baths: '2',
      area: '180m²',
      propertyType: "Apartment",
      status: 'Active',
      lastUpdated: '8 hours ago',
      amenities: ['Pool', 'Gym', 'Security'],
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=250&fit=crop',
    },
    {
      id: 5,
      title: 'Family House in Ikeja GRA',
      location: 'Ikeja GRA, Lagos',
      price: '₦85,000,000',
      priceRange: '₦80M - ₦90M',
      bedrooms: '3',
      bathrooms: '2',
      beds: '3',
      baths: '2',
      area: '250m²',
      propertyType: "House",
      status: 'Active',
      lastUpdated: '1 day ago',
      amenities: ['Garden', 'Security'],
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=250&fit=crop',
    },
    {
      id: 6,
      title: 'Studio Apartment in Surulere',
      location: 'Surulere, Lagos',
      price: '₦45,000,000',
      priceRange: '₦40M - ₦50M',
      bedrooms: '1',
      bathrooms: '1',
      beds: '1',
      baths: '1',
      area: '120m²',
      propertyType: "Apartment",
      status: 'Active',
      lastUpdated: '2 days ago',
      amenities: ['Security'],
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=250&fit=crop',
    },
    {
      id: 7,
      title: 'Cozy Short Let Studio in Victoria Island',
      location: 'Victoria Island, Lagos',
      price: '₦15,000/night',
      priceRange: '₦12K - ₦18K/night',
      bedrooms: '1',
      bathrooms: '1',
      beds: '1',
      baths: '1',
      area: '85m²',
      propertyType: "Short Let",
      status: 'Active',
      lastUpdated: '3 hours ago',
      amenities: ['WiFi', 'Kitchen', 'Security'],
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=250&fit=crop',
    },
    {
      id: 8,
      title: 'Luxury Short Let Villa in Banana Island',
      location: 'Banana Island, Lagos',
      price: '₦85,000/night',
      priceRange: '₦80K - ₦90K/night',
      bedrooms: '3',
      bathrooms: '2',
      beds: '3',
      baths: '2',
      area: '280m²',
      propertyType: "Short Let",
      status: 'Active',
      lastUpdated: '5 hours ago',
      amenities: ['Pool', 'WiFi', 'Kitchen', 'Security'],
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=250&fit=crop',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return { bg: '#E8F5E8', color: '#2E7D32', dot: '#4CAF50' };
      case 'paused':
        return { bg: '#FFF3E0', color: '#F57C00', dot: '#FF9800' };
      case 'custom':
        return { bg: '#F0F5FF', color: '#0A3A7D', dot: '#2196F3' };
      default:
        return { bg: '#F5F5F5', color: '#757575', dot: '#9E9E9E' };
    }
  };

  const getPropertyTypeIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'apartment':
        return <HomeIcon color="#0A3A7D" sx={{ fontSize: 14 }} />;
      case 'house':
        return <HomeIcon color="#0A3A7D" sx={{ fontSize: 14 }} />;
      case 'villa':
        return <HomeIcon color="#0A3A7D" sx={{ fontSize: 14 }} />;
      case 'land':
        return <LandscapeIcon color="#0A3A7D" sx={{ fontSize: 14 }} />;
      case 'commercial':
        return <BusinessIcon color="#0A3A7D" sx={{ fontSize: 14 }} />;
      case 'short let':
        return <HotelIcon color="#0A3A7D" sx={{ fontSize: 14 }} />;
      default:
        return <HomeIcon color="#0A3A7D" sx={{ fontSize: 14 }} />;
    }
  };



  const filteredAlerts = alerts.filter(alert => {
    if (selectedTab === 'all') return true;
    if (selectedTab === 'active') return alert.status === 'active';
    if (selectedTab === 'paused') return alert.status === 'paused';
    if (selectedTab === 'custom') return alert.status === 'custom';
    return true;
  });

  return (
    <Box sx={{
      flex: 1,
      overflow: 'auto',
      backgroundColor: '#f8f9fa',
      width: '100vw',
      height: '100%',
      maxWidth: '100%',
      boxSizing: 'border-box',
    }}>
      <Box sx={{
        p: { xs: 2, sm: 3 },
        width: '100%',
        height: '100%',
        maxWidth: '100%',
        boxSizing: 'border-box',
      }}>
                           <Box sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
            xl: 'repeat(4, 1fr)',
          },
          gap: { xs: 2, sm: 3 },
          width: '100vw',
          minHeight: '100%',
          maxWidth: '100%',
          boxSizing: 'border-box',
        }}>
        {filteredAlerts.map((alert) => {
          const statusStyle = getStatusColor(alert.status);
          
          return (
            <Card
              key={alert.id}
              sx={{
                p: { xs: 2, sm: 3 },
                borderRadius: 2,
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                backgroundColor: 'white',
                border: '1px solid #e0e0e0',
                '&:hover': {
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                },
              }}
            >
              {/* Header with Toggle */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '1rem', sm: '1.1rem' },
                    color: 'black',
                    fontFamily: '"Axiforma", sans-serif',
                    lineHeight: 1.3,
                    flex: 1,
                    mr: 2,
                  }}
                >
                  {alert.title}
                </Typography>
                <Switch
                  checked={alert.isActive}
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: 'white',
                      '&:hover': {
                        backgroundColor: 'rgba(76, 175, 80, 0.08)',
                      },
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: '#008000',
                    },
                  }}
                />
              </Box>

              {/* Creation Date */}
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <TimeIcon sx={{ fontSize: 16, color: '#808080', mr: 1 }} />
                <Typography
                  variant="body2"
                  sx={{
                    color: '#808080',
                    fontSize: '0.8rem',
                    fontFamily: '"Axiforma", sans-serif',
                  }}
                >
                  Created {alert.created}
                </Typography>
              </Box>

              {/* Property Attributes - First Row */}
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 1 }}>
                <Chip
                  icon={<LocationIcon color="#0A3A7D" />}
                  label={alert.location}
                  size="small"
                  sx={{
                    backgroundColor: '#F0F5FF',
                    color: '#0A3A7D',
                    fontSize: '0.7rem',
                    height: 24,
                    '& .MuiChip-icon': { fontSize: 14 },
                  }}
                />
                <Chip
                  icon={getPropertyTypeIcon(alert.propertyType)}
                  label={alert.propertyType}
                  size="small"
                  sx={{
                    backgroundColor: '#F0F5FF',
                    color: '#0A3A7D',
                    fontSize: '0.7rem',
                    height: 24,
                    '& .MuiChip-icon': { fontSize: 14 },
                  }}
                />
                <Chip
                  icon={<PriceIcon color="#0A3A7D" />}
                  label={alert.priceRange}
                  size="small"
                  sx={{
                    backgroundColor: '#F0F5FF',
                    color: '#0A3A7D',
                    fontSize: '0.7rem',
                    height: 24,
                    '& .MuiChip-icon': { fontSize: 14 },
                  }}
                />
              </Box>

              {/* Property Attributes - Second Row */}
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                <Chip
                  icon={<BedIcon color="#0A3A7D" />}
                  label={alert.beds}
                  size="small"
                  sx={{
                    backgroundColor: '#F0F5FF',
                    color: '#0A3A7D',
                    fontSize: '0.7rem',
                    height: 24,
                    '& .MuiChip-icon': { fontSize: 14 },
                  }}
                />
                <Chip
                  icon={<BathIcon color="#0A3A7D" />}
                  label={alert.baths}
                  size="small"
                  sx={{
                    backgroundColor: '#F0F5FF',
                    color: '#0A3A7D',
                    fontSize: '0.7rem',
                    height: 24,
                    '& .MuiChip-icon': { fontSize: 14 },
                  }}
                />
                {alert.amenities.map((amenity, index) => (
                  <Chip
                    key={index}
                    icon={amenity === 'Pool' ? <PoolIcon color="#0A3A7D" /> : null}
                    label={amenity}
                    size="small"
                    sx={{
                      backgroundColor: '#F0F5FF',
                      color: '#0A3A7D',
                      fontSize: '0.7rem',
                      height: 24,
                      '& .MuiChip-icon': { fontSize: 14 },
                    }}
                  />
                ))}
              </Box>

              {/* Matches Summary */}
              <Box sx={{
                backgroundColor: '#F0F5FF',
                borderRadius: 1,
                p: 2,
                mb: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <TargetIcon sx={{ fontSize: 20, color: '#0A3A7D' }} />
                  <Box>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 600,
                        color: '#0A3A7D',
                        fontSize: '0.9rem',
                        fontFamily: '"Axiforma", sans-serif',
                      }}
                    >
                      {alert.matches} properties match
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#0A3A7D',
                        fontSize: '0.8rem',
                        fontFamily: '"Axiforma", sans-serif',
                      }}
                    >
                      {alert.newMatches} new matches in teh last 7 days
                    </Typography>
                  </Box>
                </Box>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    backgroundColor: '#0A3A7D',
                    color: 'white',
                    textTransform: 'none',
                    fontWeight: 400,
                    fontSize: '0.8rem',
                   
                    py: 0.5,
                    borderRadius: 1,
                    '&:hover': {
                      backgroundColor: '#1565C0',
                    },
                  }}
                >
                  View Matches
                </Button>
              </Box>
              

              {/* Footer */}
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      backgroundColor: statusStyle.dot,
                    }}
                  />
                  <Chip
                    label={alert.status.toUpperCase()}
                    size="small"
                    sx={{
                      backgroundColor: statusStyle.bg,
                      color: statusStyle.color,
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      height: 20,
                      textTransform: 'uppercase',
                    }}
                  />
                </Box>
                <Box sx={{ display: 'flex', gap: 0.5 }}>
                  <IconButton size="small" sx={{ color: '#757575' }}>
                    <EditIcon sx={{ fontSize: 18 }} />
                  </IconButton>
                  <IconButton size="small" sx={{ color: '#757575' }}>
                    <NotificationsIcon sx={{ fontSize: 18 }} />
                  </IconButton>
                  <IconButton size="small" sx={{ color: '#757575' }}>
                    <DeleteIcon sx={{ fontSize: 18 }} />
                  </IconButton>
                </Box>
              </Box>
            </Card>
          );
        })}
      </Box>
      </Box>
    </Box>
  );
};

export default PropertyAlertsList;
