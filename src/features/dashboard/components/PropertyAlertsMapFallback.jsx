import React from 'react';
import {
  Box,
  Typography,
  Card,
  Chip,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  LocationOn as LocationIcon,
  Home as HomeIcon,
  Business as BusinessIcon,
  Landscape as LandscapeIcon,
} from '@mui/icons-material';

const PropertyAlertsMapFallback = ({ selectedTab }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Sample data for Nigeria locations
  const alerts = [
    {
      id: 1,
      title: 'Luxury Apartment in Victoria Island',
      location: 'Victoria Island, Lagos',
      price: '₦75,000,000',
      bedrooms: '3',
      bathrooms: '2',
      area: '210m²',
      propertyType: "Any Type",
      status: 'Active',
      lastUpdated: '2 hours ago',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=250&fit=crop',
    },
    {
      id: 2,
      title: 'Modern Villa in Lekki Phase 1',
      location: 'Lekki Phase 1, Lagos',
      price: '₦120,000,000',
      bedrooms: '4',
      bathrooms: '3',
      area: '350m²',
      propertyType: "Villa",
      status: 'Active',
      lastUpdated: '4 hours ago',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=250&fit=crop',
    },
    {
      id: 3,
      title: 'Premium Land in Banana Island',
      location: 'Banana Island, Lagos',
      price: '₦200,000,000',
      bedrooms: 'N/A',
      bathrooms: 'N/A',
      area: '500m²',
      propertyType: "Land",
      status: 'Active',
      lastUpdated: '6 hours ago',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=250&fit=crop',
    },
    {
      id: 4,
      title: 'Elegant Penthouse in Ikoyi',
      location: 'Ikoyi, Lagos',
      price: '₦95,000,000',
      bedrooms: '2',
      bathrooms: '2',
      area: '180m²',
      propertyType: "Apartment",
      status: 'Active',
      lastUpdated: '8 hours ago',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=250&fit=crop',
    },
    {
      id: 5,
      title: 'Family House in Ikeja GRA',
      location: 'Ikeja GRA, Lagos',
      price: '₦85,000,000',
      bedrooms: '3',
      bathrooms: '2',
      area: '250m²',
      propertyType: "House",
      status: 'Active',
      lastUpdated: '1 day ago',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=250&fit=crop',
    },
    {
      id: 6,
      title: 'Studio Apartment in Surulere',
      location: 'Surulere, Lagos',
      price: '₦45,000,000',
      bedrooms: '1',
      bathrooms: '1',
      area: '120m²',
      propertyType: "Apartment",
      status: 'Active',
      lastUpdated: '2 days ago',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=250&fit=crop',
    },
    {
      id: 7,
      title: 'Cozy Short Let Studio in Victoria Island',
      location: 'Victoria Island, Lagos',
      price: '₦15,000/night',
      bedrooms: '1',
      bathrooms: '1',
      area: '85m²',
      propertyType: "Short Let",
      status: 'Active',
      lastUpdated: '3 hours ago',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=250&fit=crop',
    },
    {
      id: 8,
      title: 'Luxury Short Let Villa in Banana Island',
      location: 'Banana Island, Lagos',
      price: '₦85,000/night',
      bedrooms: '3',
      bathrooms: '2',
      area: '280m²',
      propertyType: "Short Let",
      status: 'Active',
      lastUpdated: '5 hours ago',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=250&fit=crop',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return '#4CAF50';
      case 'paused':
        return '#FF9800';
      case 'custom':
        return '#2196F3';
      default:
        return '#9E9E9E';
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
    if (selectedTab === 'active') return alert.status === 'Active';
    if (selectedTab === 'paused') return alert.status === 'Paused';
    if (selectedTab === 'custom') return alert.status === 'Custom';
    return true;
  });

  return (
    <Box sx={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#f8f9fa',
    }}>
      {/* Map Header */}
      <Box sx={{
        p: { xs: 2, sm: 3 },
        backgroundColor: 'white',
        borderBottom: '1px solid #e0e0e0',
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          <HomeIcon sx={{ color: '#0A3A7D', fontSize: 20 }} />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: '#0A3A7D',
              fontSize: { xs: '1rem', sm: '1.1rem' },
              fontFamily: '"Axiforma", sans-serif',
            }}
          >
            Property Alert Coverage
          </Typography>
        </Box>
        <Typography
          variant="body2"
          sx={{
            color: '#757575',
            fontSize: '0.8rem',
            fontFamily: '"Axiforma", sans-serif',
          }}
        >
          Visualize your property alerts across different locations
        </Typography>
      </Box>

      {/* Map Container - Fallback to Cards View */}
      <Box sx={{
        flex: 1,
        p: { xs: 2, sm: 3 },
        backgroundColor: '#f8f9fa',
      }}>
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(auto-fill, minmax(300px, 1fr))',
            md: 'repeat(auto-fill, minmax(350px, 1fr))',
          },
          gap: { xs: 2, sm: 3 },
        }}>
          {filteredAlerts.map((alert) => {
            const statusColor = getStatusColor(alert.status);
            
            return (
              <Card
                key={alert.id}
                sx={{
                  p: { xs: 2, sm: 3 },
                  borderRadius: 2,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  backgroundColor: 'white',
                  border: '1px solid #e0e0e0',
                  borderLeft: `4px solid ${statusColor}`,
                  '&:hover': {
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                  <LocationIcon sx={{ color: statusColor, fontSize: 20 }} />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: '#1a1a1a',
                      fontSize: { xs: '1rem', sm: '1.1rem' },
                      fontFamily: '"Axiforma", sans-serif',
                    }}
                  >
                    {alert.title}
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                  <LocationIcon sx={{ fontSize: 16, color: '#757575' }} />
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#757575',
                      fontSize: '0.9rem',
                      fontFamily: '"Axiforma", sans-serif',
                    }}
                  >
                    {alert.location}
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
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
                    label={alert.priceRange}
                    size="small"
                    sx={{
                      backgroundColor: '#E3F2FD',
                      color: '#1976D2',
                      fontSize: '0.7rem',
                      height: 24,
                    }}
                  />
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        backgroundColor: statusColor,
                      }}
                    />
                    <Chip
                      label={alert.status.toUpperCase()}
                      size="small"
                      sx={{
                        backgroundColor: alert.status === 'active' ? '#E8F5E8' : 
                                         alert.status === 'paused' ? '#FFF3E0' : '#E3F2FD',
                        color: statusColor,
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        height: 20,
                        textTransform: 'uppercase',
                      }}
                    />
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#757575',
                      fontSize: '0.8rem',
                      fontFamily: '"Axiforma", sans-serif',
                      fontWeight: 600,
                    }}
                  >
                    {alert.propertyCount} properties
                  </Typography>
                </Box>
              </Card>
            );
          })}
        </Box>
      </Box>

      {/* Legend */}
      <Box sx={{
        p: { xs: 2, sm: 3 },
        backgroundColor: 'white',
        borderTop: '1px solid #e0e0e0',
      }}>
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: 600,
            color: '#1a1a1a',
            fontSize: '0.9rem',
            fontFamily: '"Axiforma", sans-serif',
            mb: 2,
          }}
        >
          Legend
        </Typography>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: '#4CAF50',
              }}
            />
            <Typography
              variant="body2"
              sx={{
                color: '#757575',
                fontSize: '0.8rem',
                fontFamily: '"Axiforma", sans-serif',
              }}
            >
              Active Alerts
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: '#FF9800',
              }}
            />
            <Typography
              variant="body2"
              sx={{
                color: '#757575',
                fontSize: '0.8rem',
                fontFamily: '"Axiforma", sans-serif',
              }}
            >
              Paused Alerts
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: '#2196F3',
              }}
            />
            <Typography
              variant="body2"
              sx={{
                color: '#757575',
                fontSize: '0.8rem',
                fontFamily: '"Axiforma", sans-serif',
              }}
            >
              Custom Alerts
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PropertyAlertsMapFallback;
