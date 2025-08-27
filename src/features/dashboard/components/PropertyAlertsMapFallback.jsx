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
  const alertData = [
    {
      id: 1,
      title: "Investment Properties in Ikeja, GRA",
      location: "Ikeja GRA",
      status: "custom",
      propertyCount: 8,
      propertyType: "Any Type",
      priceRange: "N90M - N180M",
    },
    {
      id: 2,
      title: "Beachfront Properties",
      location: "Banana Island",
      status: "active",
      propertyCount: 12,
      propertyType: "Villa",
      priceRange: "N200M+",
    },
    {
      id: 3,
      title: "Affordable Apartments in Epe",
      location: "Epe",
      status: "paused",
      propertyCount: 12,
      propertyType: "Land",
      priceRange: "N5M - N20M",
    },
    {
      id: 4,
      title: "Luxury Apartment in Victoria Island",
      location: "Victoria Island",
      status: "active",
      propertyCount: 8,
      propertyType: "Apartment",
      priceRange: "N50M - N120M",
    },
    {
      id: 5,
      title: "Family Home in Lekki Phase 1",
      location: "Lekki Phase 1",
      status: "active",
      propertyCount: 12,
      propertyType: "House",
      priceRange: "N100M - N250M",
    },
    {
      id: 6,
      title: "Affordable Apartments in Yaba",
      location: "Yaba",
      status: "paused",
      propertyCount: 12,
      propertyType: "Apartment",
      priceRange: "N20M - N45M",
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

  const filteredAlerts = alertData.filter(alert => {
    if (selectedTab === 'all') return true;
    if (selectedTab === 'active') return alert.status === 'active';
    if (selectedTab === 'paused') return alert.status === 'paused';
    if (selectedTab === 'custom') return alert.status === 'custom';
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
