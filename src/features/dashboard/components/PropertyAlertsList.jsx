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
} from '@mui/icons-material';

const PropertyAlertsList = ({ selectedTab }) => {

  const alerts = [
    {
      id: 1,
      title: "Investment Properties in Ikeja, GRA",
      status: "custom",
      isActive: true,
      created: "3 weeks ago",
      location: "Ikeja GRA",
      propertyType: "Any Type",
      priceRange: "₦90M - ₦180M",
      beds: "Any",
      baths: "Any",
      amenities: ["Investment"],
      matches: 8,
      newMatches: 3,
    },
    {
      id: 2,
      title: "Beachfront Properties",
      status: "active",
      isActive: true,
      created: "1 week ago",
      location: "Banana Island",
      propertyType: "Villa",
      priceRange: "₦200M+",
      beds: "Any",
      baths: "Any",
      amenities: ["Pool"],
      matches: 12,
      newMatches: 5,
    },
    {
      id: 3,
      title: "Affordable Apartments in Epe",
      status: "paused",
      isActive: false,
      created: "2 months ago",
      location: "Epe",
      propertyType: "Land",
      priceRange: "₦5M - ₦20M",
      beds: "Any",
      baths: "Any",
      amenities: ["500m²+"],
      matches: 12,
      newMatches: 5,
    },
    {
      id: 4,
      title: "Luxury Apartment in Victoria Island",
      status: "active",
      isActive: true,
      created: "2 days ago",
      location: "Victoria Island",
      propertyType: "Apartment",
      priceRange: "₦50M - ₦120M",
      beds: "3+ Beds",
      baths: "2+ Baths",
      amenities: ["Parking"],
      matches: 8,
      newMatches: 3,
    },
    {
      id: 5,
      title: "Family Home in Lekki Phase 1",
      status: "active",
      isActive: true,
      created: "1 week ago",
      location: "Lekki Phase 1",
      propertyType: "House",
      priceRange: "₦100M - ₦250M",
      beds: "4+ Beds",
      baths: "3+ Baths",
      amenities: ["Pool"],
      matches: 12,
      newMatches: 5,
    },
    {
      id: 6,
      title: "Affordable Apartments in Yaba",
      status: "paused",
      isActive: false,
      created: "2 weeks ago",
      location: "Yaba",
      propertyType: "Apartment",
      priceRange: "₦20M - ₦45M",
      beds: "2+ Beds",
      baths: "1+ Baths",
      amenities: [],
      matches: 12,
      newMatches: 5,
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return { bg: '#E8F5E8', color: '#2E7D32', dot: '#4CAF50' };
      case 'paused':
        return { bg: '#FFF3E0', color: '#F57C00', dot: '#FF9800' };
      case 'custom':
        return { bg: '#E3F2FD', color: '#1976D2', dot: '#2196F3' };
      default:
        return { bg: '#F5F5F5', color: '#757575', dot: '#9E9E9E' };
    }
  };

  const getPropertyTypeIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'apartment':
        return <HomeIcon sx={{ fontSize: 14 }} />;
      case 'house':
        return <HomeIcon sx={{ fontSize: 14 }} />;
      case 'villa':
        return <HomeIcon sx={{ fontSize: 14 }} />;
      case 'land':
        return <LandscapeIcon sx={{ fontSize: 14 }} />;
      case 'commercial':
        return <BusinessIcon sx={{ fontSize: 14 }} />;
      default:
        return <HomeIcon sx={{ fontSize: 14 }} />;
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
                    color: '#1a1a1a',
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
                      color: '#4CAF50',
                      '&:hover': {
                        backgroundColor: 'rgba(76, 175, 80, 0.08)',
                      },
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: '#4CAF50',
                    },
                  }}
                />
              </Box>

              {/* Creation Date */}
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <TimeIcon sx={{ fontSize: 16, color: '#757575', mr: 1 }} />
                <Typography
                  variant="body2"
                  sx={{
                    color: '#757575',
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
                  icon={<LocationIcon />}
                  label={alert.location}
                  size="small"
                  sx={{
                    backgroundColor: '#E3F2FD',
                    color: '#1976D2',
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
                    backgroundColor: '#E3F2FD',
                    color: '#1976D2',
                    fontSize: '0.7rem',
                    height: 24,
                    '& .MuiChip-icon': { fontSize: 14 },
                  }}
                />
                <Chip
                  icon={<PriceIcon />}
                  label={alert.priceRange}
                  size="small"
                  sx={{
                    backgroundColor: '#E3F2FD',
                    color: '#1976D2',
                    fontSize: '0.7rem',
                    height: 24,
                    '& .MuiChip-icon': { fontSize: 14 },
                  }}
                />
              </Box>

              {/* Property Attributes - Second Row */}
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                <Chip
                  icon={<BedIcon />}
                  label={alert.beds}
                  size="small"
                  sx={{
                    backgroundColor: '#E3F2FD',
                    color: '#1976D2',
                    fontSize: '0.7rem',
                    height: 24,
                    '& .MuiChip-icon': { fontSize: 14 },
                  }}
                />
                <Chip
                  icon={<BathIcon />}
                  label={alert.baths}
                  size="small"
                  sx={{
                    backgroundColor: '#E3F2FD',
                    color: '#1976D2',
                    fontSize: '0.7rem',
                    height: 24,
                    '& .MuiChip-icon': { fontSize: 14 },
                  }}
                />
                {alert.amenities.map((amenity, index) => (
                  <Chip
                    key={index}
                    icon={amenity === 'Pool' ? <PoolIcon /> : null}
                    label={amenity}
                    size="small"
                    sx={{
                      backgroundColor: '#E3F2FD',
                      color: '#1976D2',
                      fontSize: '0.7rem',
                      height: 24,
                      '& .MuiChip-icon': { fontSize: 14 },
                    }}
                  />
                ))}
              </Box>

              {/* Matches Summary */}
              <Box sx={{
                backgroundColor: '#E3F2FD',
                borderRadius: 1,
                p: 2,
                mb: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <TargetIcon sx={{ fontSize: 20, color: '#1976D2' }} />
                  <Box>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 600,
                        color: '#1976D2',
                        fontSize: '0.9rem',
                        fontFamily: '"Axiforma", sans-serif',
                      }}
                    >
                      {alert.matches} properties match
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#1976D2',
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
                    backgroundColor: '#1976D2',
                    color: 'white',
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '0.8rem',
                    px: 2,
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
