import React from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  Button,
  Chip,
  LinearProgress,
} from '@mui/material';
import {
  LocationOn as LocationIcon,
  Verified as VerifiedIcon,
  Business as DevelopmentIcon,
  Landscape as LandIcon,
  AccountBalanceWallet as WalletIcon,
  TrendingUp as TrendingUpIcon,
  Schedule as ScheduleIcon,
  Group as GroupIcon,
  PlayArrow as PlayIcon,
} from '@mui/icons-material';

const InvestmentProperties = () => {
  const properties = [
    {
      id: 1,
      title: 'Azure Heights Complex',
      description: 'Luxury apartment complex with premium amenities in prime location.',
      location: 'Lekki, Lagos',
      category: 'Development',
      categoryColor: '#9c27b0',
      categoryIcon: <DevelopmentIcon />,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=250&fit=crop',
      minInvestment: '₦100,000',
      expectedROI: '18.5% p.a',
      lockPeriod: '24 months',
      investors: 142,
      progress: 33,
      progressLabels: ['Start', 'Construction', 'Completion'],
      progressPosition: 1,
    },
    {
      id: 2,
      title: 'Green Valley Estate',
      description: 'Premium land plots in fast-developing area with excellent appreciation.',
      location: 'Abuja, FCT',
      category: 'Land',
      categoryColor: '#4caf50',
      categoryIcon: <LandIcon />,
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=250&fit=crop',
      minInvestment: '₦250,000',
      expectedROI: '22% p.a',
      lockPeriod: '12 months',
      investors: 86,
      progress: 0,
      progressLabels: ['Acquisition', 'Development', 'Sale'],
      progressPosition: 0,
    },
    {
      id: 3,
      title: 'Riverside Commercial Hub',
      description: 'Mixed-use commercial complex with retail and office spaces.',
      location: 'Port Harcourt',
      category: 'Development',
      categoryColor: '#9c27b0',
      categoryIcon: <DevelopmentIcon />,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop',
      minInvestment: '₦500,000',
      expectedROI: '20.5% p.a',
      lockPeriod: '36 months',
      investors: 211,
      progress: 33,
      progressLabels: ['Start', 'Construction', 'Completion'],
      progressPosition: 1,
    },
  ];

  return (
    <Box sx={{ mb: { xs: 4, sm: 5, md: 6 } }}>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          color: '#333B4D',
          fontFamily: '"Poppins", sans-serif',
          fontSize: { xs: '1.3rem', sm: '1.5rem', md: '1.8rem' },
          mb: { xs: 2, sm: 3, md: 4 },
        }}
      >
        Investment Opportunities
      </Typography>

      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { 
          xs: '1fr', 
          sm: 'repeat(2, 1fr)', 
          lg: 'repeat(3, 1fr)' 
        },
        gap: { xs: 2, sm: 2.5, md: 3 },
      }}>
        {properties.map((property) => (
          <Card
            key={property.id}
            sx={{
              borderRadius: 3,
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease',
              minHeight: { xs: 600, sm: 650, md: 700 },
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
              },
            }}
          >
            {/* Property Image */}
            <Box
              sx={{
                height: { xs: 180, sm: 200, md: 220 },
                position: 'relative',
                overflow: 'hidden',
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
              
              {/* Verified Badge */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 12,
                  right: 12,
                  backgroundColor: '#4caf50',
                  color: 'white',
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 1,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5,
                  fontSize: { xs: '0.7rem', sm: '0.75rem' },
                  fontWeight: 600,
                  fontFamily: '"Inter", sans-serif',
                }}
              >
                <VerifiedIcon sx={{ fontSize: 14 }} />
                <span>Verified</span>
              </Box>

              {/* Location Overlay */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 12,
                  left: 12,
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  color: 'white',
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 1,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5,
                }}
              >
                <LocationIcon sx={{ fontSize: 16 }} />
                <Typography
                  sx={{
                    fontSize: { xs: '0.75rem', sm: '0.8rem' },
                    fontWeight: 500,
                    fontFamily: '"Inter", sans-serif',
                  }}
                >
                  {property.location}
                </Typography>
              </Box>
            </Box>

            <CardContent sx={{ 
              p: { xs: 2.5, sm: 3, md: 3.5 },
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
              {/* Category Chip */}
              <Chip
                icon={property.categoryIcon}
                label={property.category}
                sx={{
                  backgroundColor: property.categoryColor,
                  color: 'white',
                  mb: 2,
                  fontSize: { xs: '0.75rem', sm: '0.8rem' },
                  fontWeight: 600,
                  '& .MuiChip-icon': {
                    color: 'white',
                  },
                }}
              />

              {/* Title */}
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: '#333B4D',
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                  mb: 1,
                  lineHeight: 1.3,
                }}
              >
                {property.title}
              </Typography>

              {/* Description */}
              <Typography
                variant="body2"
                sx={{
                  color: '#666',
                  fontFamily: '"Inter", sans-serif',
                  fontSize: { xs: '0.85rem', sm: '0.9rem' },
                  mb: 3,
                  lineHeight: 1.5,
                }}
              >
                {property.description}
              </Typography>

              {/* Investment Details */}
              <Box sx={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(2, 1fr)', 
                gap: { xs: 1.5, sm: 2 },
                mb: 3,
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <WalletIcon sx={{ fontSize: 18, color: '#666' }} />
                  <Box>
                    <Typography
                      sx={{
                        fontSize: { xs: '0.75rem', sm: '0.8rem' },
                        color: '#666',
                        fontFamily: '"Inter", sans-serif',
                        fontWeight: 500,
                      }}
                    >
                      Minimum Investment
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: '0.9rem', sm: '1rem' },
                        fontWeight: 700,
                        color: '#333B4D',
                        fontFamily: '"Poppins", sans-serif',
                      }}
                    >
                      {property.minInvestment}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <TrendingUpIcon sx={{ fontSize: 18, color: '#4caf50' }} />
                  <Box>
                    <Typography
                      sx={{
                        fontSize: { xs: '0.75rem', sm: '0.8rem' },
                        color: '#666',
                        fontFamily: '"Inter", sans-serif',
                        fontWeight: 500,
                      }}
                    >
                      Expected ROI
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: '0.9rem', sm: '1rem' },
                        fontWeight: 700,
                        color: '#4caf50',
                        fontFamily: '"Poppins", sans-serif',
                      }}
                    >
                      {property.expectedROI}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <ScheduleIcon sx={{ fontSize: 18, color: '#666' }} />
                  <Box>
                    <Typography
                      sx={{
                        fontSize: { xs: '0.75rem', sm: '0.8rem' },
                        color: '#666',
                        fontFamily: '"Inter", sans-serif',
                        fontWeight: 500,
                      }}
                    >
                      Lock Period
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: '0.9rem', sm: '1rem' },
                        fontWeight: 700,
                        color: '#333B4D',
                        fontFamily: '"Poppins", sans-serif',
                      }}
                    >
                      {property.lockPeriod}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <GroupIcon sx={{ fontSize: 18, color: '#666' }} />
                  <Box>
                    <Typography
                      sx={{
                        fontSize: { xs: '0.75rem', sm: '0.8rem' },
                        color: '#666',
                        fontFamily: '"Inter", sans-serif',
                        fontWeight: 500,
                      }}
                    >
                      Investors
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: '0.9rem', sm: '1rem' },
                        fontWeight: 700,
                        color: '#333B4D',
                        fontFamily: '"Poppins", sans-serif',
                      }}
                    >
                      {property.investors}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Progress Bar */}
              <Box sx={{ mb: 3 }}>
                <Box
                  sx={{
                    position: 'relative',
                    height: 4,
                    backgroundColor: '#e0e0e0',
                    borderRadius: 2,
                    mb: 1,
                  }}
                >
                  <LinearProgress
                    variant="determinate"
                    value={property.progress}
                    sx={{
                      height: 4,
                      borderRadius: 2,
                      backgroundColor: 'transparent',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: '#1976d2',
                        borderRadius: 2,
                      },
                    }}
                  />
                  {/* Progress Dots */}
                  {property.progressLabels.map((label, index) => (
                    <Box
                      key={index}
                      sx={{
                        position: 'absolute',
                        top: -4,
                        left: `${(index / (property.progressLabels.length - 1)) * 100}%`,
                        transform: 'translateX(-50%)',
                        width: 12,
                        height: 12,
                        borderRadius: '50%',
                        backgroundColor: index < property.progressPosition ? '#1976d2' : '#e0e0e0',
                        border: '2px solid white',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                      }}
                    />
                  ))}
                </Box>
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  fontSize: { xs: '0.7rem', sm: '0.75rem' },
                  color: '#666',
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 500,
                }}>
                  {property.progressLabels.map((label, index) => (
                    <span key={index}>{label}</span>
                  ))}
                </Box>
              </Box>

              {/* Invest Now Button */}
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: '#1976d2',
                  color: 'white',
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                  fontWeight: 600,
                  textTransform: 'none',
                  borderRadius: 2,
                  py: { xs: 1.25, sm: 1.5 },
                  '&:hover': {
                    backgroundColor: '#1565c0',
                  },
                }}
              >
                Invest Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default InvestmentProperties;
