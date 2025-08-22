import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  Divider,
} from '@mui/material';
import {
  Check as CheckIcon,
  Person as PersonIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  Home as HomeIcon,
  PersonAdd as PersonAddIcon,
  Notifications as NotificationsIcon,
  Dashboard as DashboardIcon,
  Book as BookIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  Favorite as FavoriteIcon,
  QuestionAnswer as QuestionAnswerIcon,
  TrendingUp as TrendingUpIcon,
  Help as HelpIcon
} from '@mui/icons-material';
import NLHLogo from '../../../shared/components/icons/NLHLogo';

const AccountWelcomePage = () => {
  const navigate = useNavigate();

  const handleGoToDashboard = () => {
    navigate('/dashboard');
  };

  const handleViewAllRecommendations = () => {
    navigate('/properties');
  };

  const handleBrowseProperties = () => {
    navigate('/properties');
  };

  const handleUpdateProfile = () => {
    navigate('/profile');
  };

  const handleCreateAlerts = () => {
    navigate('/alerts');
  };

  const handleViewUserGuide = () => {
    navigate('/help');
  };

  // Mock data - in real app this would come from user context/state
  const userData = {
    name: 'JOHN DOE',
    email: 'john.doe@gmail.com',
    accountType: 'Buyer',
    location: 'Lagos, Nigeria',
    savedProperties: 0,
    inquiries: 0,
    propertyAlerts: 3,
  };

  const recommendedProperties = [
    {
      id: 1,
      title: 'Luxury Apartment in Victoria Island',
      location: 'Victoria Island, Lagos',
      price: '₦75,000,000',
      bedrooms: 3,
      bathrooms: 2,
      area: '210m²',
      image: null, // Will be provided by user
    },
    {
      id: 2,
      title: 'Modern Family House in Lekki',
      location: 'Lekki Phase 1, Lagos',
      price: '₦120,000,000',
      bedrooms: 4,
      bathrooms: 3,
      area: '350m²',
      image: null, // Will be provided by user
    },
    {
      id: 3,
      title: 'Penthouse with Ocean View in Ikoyi',
      location: 'Ikoyi, Lagos',
      price: '₦95,000,000',
      bedrooms: 2,
      bathrooms: 2,
      area: '180m²',
      image: null, // Will be provided by user
    },
  ];

  const nextSteps = [
    {
      id: 1,
      title: 'Browse Properties',
      description: 'Explore thousands of available properties across Africa. Use filters to find your perfect match based on your preferences.',
      icon: <HomeIcon />,
      buttonText: 'Find Properties',
      buttonColor: '#e3f2fd',
      iconColor: '#1565c0',
      onClick: handleBrowseProperties,
    },
    {
      id: 2,
      title: 'Complete Your Profile',
      description: 'Add more details to your profile to help us match you with the right properties and improve your experience.',
      icon: <PersonAddIcon />,
      buttonText: 'Update Profile',
      buttonColor: '#e8f5e8',
      iconColor: '#2e7d32',
      onClick: handleUpdateProfile,
    },
    {
      id: 3,
      title: 'Set Up Alerts',
      description: 'Create custom property alerts to be notified when new properties that match your criteria are listed.',
      icon: <NotificationsIcon />,
      buttonText: 'Create Alerts',
      buttonColor: '#fff3e0',
      iconColor: '#f57c00',
      onClick: handleCreateAlerts,
    },
  ];

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      backgroundColor: '#f0f4f8',
      width: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Header */}
      <Box sx={{ 
        backgroundColor: 'white', 
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        width: '100%'
      }}>
        <Box sx={{ 
          maxWidth: 'lg',
          mx: 'auto',
          px: { xs: 2, sm: 3, md: 4 }
        }}>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            py: { xs: 1.5, sm: 2 },
            minHeight: { xs: 64, sm: 70, md: 80 }
          }}>
            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                sx={{
                  width: { xs: 32, sm: 36, md: 40 },
                  height: { xs: 32, sm: 36, md: 40 },
                  backgroundColor: '#DFC14C',
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: { xs: 1.5, sm: 2 },
                }}
              >
                <NLHLogo 
                  width={20}
                  height={26}
                  color="#153C65"
                />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  color: '#153C65',
                  fontWeight: 700,
                  fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
                  fontFamily: '"Lora", serif',
                  display: { xs: 'none', sm: 'block' }
                }}
              >
                Naija Luxury Homes
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: '#153C65',
                  fontWeight: 700,
                  fontSize: '1rem',
                  fontFamily: '"Lora", serif',
                  display: { xs: 'block', sm: 'none' }
                }}
              >
                NLH
              </Typography>
            </Box>

            {/* Help Button */}
            <Button
          startIcon={<HelpIcon />}
          sx={{
            backgroundColor: '#0A3A7D0D',
            color: '#0A3A7D',
            borderRadius: 2,
            px: { xs: 2, sm: 2.5, md: 3 },
            py: { xs: 0.75, sm: 1 },
            fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 500,
            minWidth: { xs: 'auto', sm: 'auto' },
            '&:hover': {
              backgroundColor: '#153C65',
              color: 'white',
              borderColor: '#153C65',
            },
          }}
        >
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            Need Help?
          </Box>
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            Help
          </Box>
        </Button>
          </Box>
        </Box>
      </Box>

      <Box sx={{ 
        flex: 1,
        width: '100%',
        maxWidth: 'lg',
        mx: 'auto',
        px: { xs: 2, sm: 3, md: 4 },
        py: { xs: 3, sm: 4, md: 6 }
      }}>
        {/* Success Message */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Box
            sx={{
              width: 120,
              height: 120,
              borderRadius: '50%',
              backgroundColor: '#DFC14C',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mx: 'auto',
              mb: 3,
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: -8,
                left: -8,
                right: -8,
                bottom: -8,
                borderRadius: '50%',
                border: '2px dashed #DFC14C',
                opacity: 0.5,
              },
            }}
          >
            <CheckIcon sx={{ fontSize: 60, color: '#153C65' }} />
          </Box>
          
          <Typography
            variant="h3"
            sx={{
              color: '#153C65',
              fontWeight: 700,
              mb: 2,
              fontFamily: '"Lora", serif',
            }}
          >
            Welcome to Naija Luxury Homes!
          </Typography>
          
          <Typography
            variant="h6"
            sx={{
              color: '#666',
              fontWeight: 400,
              fontFamily: '"Inter", sans-serif',
            }}
          >
            Your account has been successfully created. You're now part of the largest real estate community in Africa.
          </Typography>
        </Box>

        {/* Account Details Section */}
        <Paper
          elevation={0}
          sx={{
            backgroundColor: '#153C65',
            borderRadius: 3,
            p: 4,
            mb: 6,
            color: 'white',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mb: 1,
              fontFamily: '"Poppins", sans-serif',
            }}
          >
            Account Details
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#90caf9',
              mb: 4,
              fontFamily: '"Inter", sans-serif',
            }}
          >
            Your account is now active and ready to use
          </Typography>

                     <Grid container spacing={{ xs: 2, sm: 4 }}>
             {/* User Profile Card */}
             <Grid item xs={12} sm={6}>
              <Card sx={{ backgroundColor: 'white', borderRadius: 3 }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        backgroundColor: '#e3f2fd',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 3,
                      }}
                    >
                      <PersonIcon sx={{ fontSize: 30, color: '#153C65' }} />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          color: '#153C65',
                          fontWeight: 700,
                          mb: 1,
                          fontFamily: '"Poppins", sans-serif',
                        }}
                      >
                        {userData.name}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <EmailIcon sx={{ fontSize: 16, color: '#666', mr: 1 }} />
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#666',
                            fontFamily: '"Inter", sans-serif',
                          }}
                        >
                          {userData.email}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                        <Chip
                          icon={<PersonIcon />}
                          label={userData.accountType}
                          size="small"
                          sx={{
                            backgroundColor: '#e3f2fd',
                            color: '#1565c0',
                            fontWeight: 600,
                            fontFamily: '"Poppins", sans-serif',
                          }}
                        />
                        <Chip
                          icon={<CheckIcon />}
                          label="✔ Verified"
                          size="small"
                          sx={{
                            backgroundColor: '#e8f5e8',
                            color: '#2e7d32',
                            fontWeight: 600,
                            fontFamily: '"Poppins", sans-serif',
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <LocationIcon sx={{ fontSize: 16, color: '#666', mr: 1 }} />
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#666',
                        fontFamily: '"Inter", sans-serif',
                      }}
                    >
                      {userData.location}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

                         {/* Account Statistics */}
             <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography
                    variant="h4"
                    sx={{
                      color: 'white',
                      fontWeight: 700,
                      fontFamily: '"Poppins", sans-serif',
                    }}
                  >
                    {userData.savedProperties}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#90caf9',
                      fontFamily: '"Inter", sans-serif',
                    }}
                  >
                    Saved Properties
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography
                    variant="h4"
                    sx={{
                      color: 'white',
                      fontWeight: 700,
                      fontFamily: '"Poppins", sans-serif',
                    }}
                  >
                    {userData.inquiries}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#90caf9',
                      fontFamily: '"Inter", sans-serif',
                    }}
                  >
                    Inquiries
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography
                    variant="h4"
                    sx={{
                      color: 'white',
                      fontWeight: 700,
                      fontFamily: '"Poppins", sans-serif',
                    }}
                  >
                    {userData.propertyAlerts}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#90caf9',
                      fontFamily: '"Inter", sans-serif',
                    }}
                  >
                    Property Alerts
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        {/* What's Next Section */}
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h4"
            sx={{
              color: '#153C65',
              fontWeight: 700,
              mb: 4,
              fontFamily: '"Lora", serif',
            }}
          >
            What's Next?
          </Typography>
          
                     <Grid container spacing={{ xs: 2, sm: 3 }}>
             {nextSteps.map((step) => (
               <Grid item xs={12} sm={6} md={4} key={step.id}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4, position: 'relative' }}>
                    {/* Step Number */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        width: 32,
                        height: 32,
                        borderRadius: '50%',
                        backgroundColor: '#e3f2fd',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#1565c0',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        fontFamily: '"Poppins", sans-serif',
                      }}
                    >
                      {step.id}
                    </Box>

                    {/* Icon */}
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        backgroundColor: step.buttonColor,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                        border: `2px dashed ${step.iconColor}`,
                      }}
                    >
                      <Box sx={{ color: step.iconColor }}>
                        {step.icon}
                      </Box>
                    </Box>

                    {/* Content */}
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#153C65',
                        fontWeight: 700,
                        mb: 2,
                        fontFamily: '"Poppins", sans-serif',
                      }}
                    >
                      {step.title}
                    </Typography>
                    
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#666',
                        mb: 3,
                        lineHeight: 1.6,
                        fontFamily: '"Inter", sans-serif',
                      }}
                    >
                      {step.description}
                    </Typography>

                    <Button
                      variant="contained"
                      onClick={step.onClick}
                      sx={{
                        backgroundColor: step.buttonColor,
                        color: step.iconColor,
                        borderRadius: 2,
                        px: 3,
                        py: 1.5,
                        fontWeight: 600,
                        fontFamily: '"Poppins", sans-serif',
                        '&:hover': {
                          backgroundColor: step.buttonColor,
                          opacity: 0.9,
                        },
                      }}
                    >
                      {step.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Properties You Might Like Section */}
        <Box sx={{ mb: 6 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Typography
              variant="h4"
              sx={{
                color: '#153C65',
                fontWeight: 700,
                fontFamily: '"Lora", serif',
              }}
            >
              Properties You Might Like
            </Typography>
            <Button
              onClick={handleViewAllRecommendations}
              sx={{
                color: '#153C65',
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: 'rgba(21, 60, 101, 0.1)',
                },
              }}
            >
              View all recommendations →
            </Button>
          </Box>
          
          <Typography
            variant="body1"
            sx={{
              color: '#666',
              mb: 4,
              fontFamily: '"Inter", sans-serif',
            }}
          >
            Based on your preferences
          </Typography>

                     <Grid container spacing={{ xs: 2, sm: 3 }}>
             {recommendedProperties.map((property) => (
               <Grid item xs={12} sm={6} md={4} key={property.id}>
                <Card
                  sx={{
                    borderRadius: 3,
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                    },
                  }}
                >
                  {/* Property Image Placeholder */}
                  <Box
                    sx={{
                      height: 200,
                      backgroundColor: '#f0f4f8',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                    }}
                  >
                    <HomeIcon sx={{ fontSize: 60, color: '#ccc' }} />
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#999',
                        position: 'absolute',
                        bottom: 8,
                        left: 8,
                        fontFamily: '"Inter", sans-serif',
                      }}
                    >
                      Image placeholder
                    </Typography>
                    
                    {/* Price Overlay */}
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 8,
                        left: 8,
                        backgroundColor: 'rgba(21, 60, 101, 0.9)',
                        color: 'white',
                        px: 2,
                        py: 1,
                        borderRadius: 2,
                        fontWeight: 600,
                        fontFamily: '"Poppins", sans-serif',
                      }}
                    >
                      {property.price}
                    </Box>
                  </Box>

                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#153C65',
                        fontWeight: 700,
                        mb: 1,
                        fontFamily: '"Poppins", sans-serif',
                      }}
                    >
                      {property.title}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <LocationIcon sx={{ fontSize: 16, color: '#666', mr: 1 }} />
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#666',
                          fontFamily: '"Inter", sans-serif',
                        }}
                      >
                        {property.location}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#666',
                          fontFamily: '"Inter", sans-serif',
                        }}
                      >
                        {property.bedrooms} Bedrooms
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#666',
                          fontFamily: '"Inter", sans-serif',
                        }}
                      >
                        {property.bathrooms} Bathrooms
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#666',
                          fontFamily: '"Inter", sans-serif',
                        }}
                      >
                        {property.area} Area
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Ready to Explore Section */}
        <Paper
          elevation={0}
          sx={{
            backgroundColor: 'white',
            borderRadius: 3,
            p: 5,
            mb: 6,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative Top Border */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 4,
              background: 'linear-gradient(90deg, #153C65 0%, #DFC14C 100%)',
            }}
          />

          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h4"
              sx={{
                color: '#153C65',
                fontWeight: 700,
                mb: 3,
                fontFamily: '"Lora", serif',
              }}
            >
              Ready to Explore?
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                color: '#666',
                mb: 4,
                maxWidth: 600,
                mx: 'auto',
                lineHeight: 1.6,
                fontFamily: '"Inter", sans-serif',
              }}
            >
              Your personalized dashboard is now ready. Start exploring properties, save your favorites, and connect with agents.
            </Typography>

            <Button
              variant="contained"
              startIcon={<DashboardIcon />}
              onClick={handleGoToDashboard}
              sx={{
                backgroundColor: '#DFC14C',
                color: '#153C65',
                px: 4,
                py: 2,
                borderRadius: 2,
                fontWeight: 600,
                fontSize: '1.1rem',
                fontFamily: '"Poppins", sans-serif',
                mb: 3,
                '&:hover': {
                  backgroundColor: '#D4B63C',
                },
              }}
            >
              Go to Dashboard
            </Button>

            <Typography
              variant="body2"
              sx={{
                color: '#666',
                fontFamily: '"Inter", sans-serif',
              }}
            >
              Need help getting started?{' '}
              <Button
                onClick={handleViewUserGuide}
                sx={{
                  color: '#1565c0',
                  p: 0,
                  minWidth: 'auto',
                  fontFamily: '"Inter", sans-serif',
                  textDecoration: 'underline',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    textDecoration: 'underline',
                  },
                }}
              >
                Check our user guide
              </Button>
            </Typography>
          </Box>
        </Paper>
      </Box>

      {/* Footer */}
      <Box sx={{ 
        backgroundColor: 'white', 
        py: { xs: 3, sm: 4 }, 
        mt: 'auto',
        width: '100%'
      }}>
        <Box sx={{ 
          maxWidth: 'lg',
          mx: 'auto',
          px: { xs: 2, sm: 3, md: 4 }
        }}>
          <Box sx={{ textAlign: 'center' }}>
            {/* Social Media Icons */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 3 }}>
              {[
                { icon: <FacebookIcon />, label: 'Facebook' },
                { icon: <TwitterIcon />, label: 'Twitter' },
                { icon: <InstagramIcon />, label: 'Instagram' },
                { icon: <LinkedInIcon />, label: 'LinkedIn' },
              ].map((social) => (
                <Box
                  key={social.label}
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    backgroundColor: '#153C65',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#0d2b4a',
                      transform: 'scale(1.1)',
                    },
                  }}
                >
                  {social.icon}
                </Box>
              ))}
            </Box>

            {/* Copyright */}
            <Typography
              variant="body2"
              sx={{
                color: '#666',
                fontFamily: '"Inter", sans-serif',
              }}
            >
              © 2025 Real Estate Market. All rights reserved.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AccountWelcomePage;
