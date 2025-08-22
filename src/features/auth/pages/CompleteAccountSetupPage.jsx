import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Paper,
  Alert,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  Divider
} from '@mui/material';
import {
  Info as InfoIcon,
  Check as CheckIcon,
  Save as SaveIcon,
  ArrowForward as ArrowIcon,
  Person as PersonIcon,
  CameraAlt as CameraIcon,
  CalendarToday as CalendarIcon,
} from '@mui/icons-material';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import './CompleteAccountSetupPage.css';


const CompleteAccountSetupPage = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState('buyer');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: 'johndoe@example.com',
    phone: '+234',
    dateOfBirth: '',
    nin: '',
  });

  const accountTypes = [
    {
      id: 'buyer',
      title: 'Buyer',
      description: 'Looking to purchase or rent property in Nigeria',
      icon: '🏠',
      selected: selectedType === 'buyer',
    },
    {
      id: 'vendor',
      title: 'Vendor',
      description: 'Listing properties for sale or rent on the platform',
      icon: '🛍️',
      selected: selectedType === 'vendor',
    },
    {
      id: 'investor',
      title: 'Investor',
      description: 'Interested in property investments and opportunities',
      icon: '📈',
      selected: selectedType === 'investor',
    },
  ];

  const handleTypeSelect = (typeId) => {
    setSelectedType(typeId);
  };

  const handleChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };

  const handlePhoneChange = (value) => {
    setFormData({
      ...formData,
      phone: value || '',
    });
  };

  const handleContinue = () => {
    navigate('/register/verification');
  };

  return (
    <Box sx={{ 
      width: '100%',
      maxWidth: { xs: '100%', sm: '90%', md: '80%', lg: '70%' },
      mx: 'auto',
      py: { xs: 2, sm: 3, md: 4, lg: 6 }
    }}>
        <Paper 
          elevation={0}
          sx={{ 
            backgroundColor: 'white',
            borderRadius: { xs: 2, sm: 3 },
            p: { xs: 3, sm: 4, md: 5 },
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            width: '100%',
          }}
        >

          {/* Complete Your Profile Section */}
          <Box sx={{ mb: 6 }}>
            <Typography
              variant="h4"
              sx={{
                color: '#0A3A7D',
                fontWeight: 700,
                mb: 2,
                fontFamily: '"Lora", sans-serif',
              }}
            >
              Complete Your Profile
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                color: '#666',
                mb: 4,
                fontSize: '1rem',
                lineHeight: 1.6,
                fontFamily: '"Inter", sans-serif',
              }}
            >
              Please provide accurate information to help us personalize your experience and comply with Nigerian real estate regulations.
            </Typography>

            {/* Profile Photo Upload */}
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Box sx={{ position: 'relative', display: 'inline-block' }}>
                <Box
                  sx={{
                    width: 120,
                    height: 120,
                    borderRadius: '50%',
                    border: '3px dashed #ccc',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#f8f9fa',
                    cursor: 'pointer',
                    '&:hover': {
                      borderColor: '#153C65',
                      backgroundColor: '#f0f4f8',
                    },
                  }}
                >
                  <PersonIcon
                    sx={{
                      fontSize: 60,
                      color: '#153C65',
                    }}
                  />
                </Box>
                
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    backgroundColor: '#DFC14C',
                    width: 40,
                    height: 40,
                    border: '3px solid white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: '#D4B63C',
                    },
                  }}
                >
                  <CameraIcon sx={{ fontSize: 20, color: 'white' }} />
                </Box>
              </Box>
              
              <Typography
                sx={{
                  color: '#666',
                  mt: 2,
                  fontSize: '0.9rem',
                  fontFamily: '"Inter", sans-serif',
                }}
              >
                Add a profile photo to personalize your account (optional)
              </Typography>
            </Box>
          </Box>

          {/* Personal Information Section */}
          <Box sx={{ mb: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Box
                sx={{
                  width: 4,
                  height: 24,
                  backgroundColor: '#153C65',
                  borderRadius: 2,
                  mr: 2,
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  color: '#333B4D',
                  fontWeight: 700,
                  fontFamily: '"Lora", sans-serif',
                }}
              >
                Personal Information
              </Typography>
            </Box>
            
            <Typography
              variant="body2"
              sx={{
                color: '#666',
                mb: 3,
                fontSize: '0.9rem',
                fontFamily: '"Inter", sans-serif',
              }}
            >
              Your basic contact and personal details
            </Typography>

            {/* Form Fields */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {/* Name Fields */}
              <Box sx={{ display: 'flex', gap: 2 }}>
                <TextField
                  fullWidth
                  label="First Name *"
                  value={formData.firstName}
                  onChange={handleChange('firstName')}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      '& fieldset': {
                        borderColor: '#ddd',
                      },
                      '&:hover fieldset': {
                        borderColor: '#153C65',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#153C65',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: '#666',
                      fontFamily: '"Inter", sans-serif',
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Last Name *"
                  value={formData.lastName}
                  onChange={handleChange('lastName')}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      '& fieldset': {
                        borderColor: '#ddd',
                      },
                      '&:hover fieldset': {
                        borderColor: '#153C65',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#153C65',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: '#666',
                      fontFamily: '"Inter", sans-serif',
                    },
                  }}
                />
              </Box>

              {/* Email Field */}
              <TextField
                fullWidth
                label="Email Address *"
                value={formData.email}
                onChange={handleChange('email')}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    '& fieldset': {
                      borderColor: '#ddd',
                    },
                    '&:hover fieldset': {
                      borderColor: '#153C65',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#153C65',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: '#666',
                    fontFamily: '"Inter", sans-serif',
                  },
                }}
              />

              {/* Phone Number Field */}
              <Box sx={{ width: '100%' }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#666',
                    mb: 1,
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '0.875rem',
                  }}
                >
                  Phone Number *
                </Typography>
                <PhoneInput
                  international
                  defaultCountry="NG"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  placeholder="Enter phone number"
                  className="phone-input-custom"
                  countries={['NG', 'US', 'GB', 'CA', 'AU', 'ZA', 'KE', 'GH', 'UG', 'TZ']}
                />
              </Box>

              {/* Date of Birth Field */}
              <TextField
                fullWidth
                label="Date of Birth *"
                type="date"
                value={formData.dateOfBirth}
                onChange={handleChange('dateOfBirth')}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <CalendarIcon sx={{ color: '#666' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    '& fieldset': {
                      borderColor: '#ddd',
                    },
                    '&:hover fieldset': {
                      borderColor: '#153C65',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#153C65',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: '#666',
                    fontFamily: '"Inter", sans-serif',
                  },
                }}
              />
            </Box>
          </Box>

          {/* Identity Information Section */}
          <Box sx={{ mb: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Box
                sx={{
                  width: 4,
                  height: 24,
                  backgroundColor: '#153C65',
                  borderRadius: 2,
                  mr: 2,
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  color: '#333B4D',
                  fontWeight: 700,
                  fontFamily: '"Lora", sans-serif',
                }}
              >
                Identity Information
              </Typography>
            </Box>
            
            <Typography
              variant="body2"
              sx={{
                color: '#666',
                mb: 3,
                fontSize: '0.9rem',
                fontFamily: '"Inter", sans-serif',
              }}
            >
              Your government-issued identification details
            </Typography>

            {/* NIN Field */}
            <TextField
              fullWidth
              label="National Identification Number (NIN) *"
              value={formData.nin}
              onChange={handleChange('nin')}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  '& fieldset': {
                    borderColor: '#ddd',
                  },
                  '&:hover fieldset': {
                    borderColor: '#153C65',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#153C65',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: '#666',
                  fontFamily: '"Inter", sans-serif',
                },
              }}
            />
          </Box>

            {/* Info Banner */}
            <Alert
            severity="info"
            icon={<InfoIcon />}
            sx={{
              mb: 4,
              backgroundColor: '#F7FAFF',
              color: '#596580',
              '& .MuiAlert-icon': {
                color: '#1565c0',
              },
            }}
          >
            Your NIN is required by Nigerian law for real estate transactions. This information will be verified during the next step and is kept secure in compliance with NDPR guidelines.
          </Alert>

          {/* Account Type Section */}
          <Box sx={{ mb: 6 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Box
                sx={{
                  width: 4,
                  height: 24,
                  backgroundColor: '#153C65',
                  borderRadius: 2,
                  mr: 2,
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  color: '#333B4D',
                  fontWeight: 700,
                  fontFamily: '"Lora", sans-serif',
                }}
              >
                Account Type
              </Typography>
            </Box>
     
            <Typography
              variant="body1"
              sx={{
                color: '#666',
                mb: 4,
                fontSize: '1rem',
                fontFamily: '"Inter", sans-serif',
              }}
            >
              Select how you plan to use AfricaEstate
            </Typography>

            {/* Account Type Cards */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {accountTypes.map((type) => (
                <Card
                  key={type.id}
                  onClick={() => handleTypeSelect(type.id)}
                  sx={{
                    cursor: 'pointer',
                    border: type.selected ? '2px solid #153C65' : '2px solid #e0e0e0',
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: type.selected ? '#153C65' : '#153C65',
                      boxShadow: '0 4px 12px rgba(21, 60, 101, 0.15)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 3, position: 'relative' }}>
                    {/* Selection Icon */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        backgroundColor: type.selected ? '#153C65' : 'transparent',
                        border: type.selected ? 'none' : '2px solid #ccc',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {type.selected && (
                        <CheckIcon sx={{ color: 'white', fontSize: 16 }} />
                      )}
                    </Box>

                    {/* Content */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                      {/* Icon */}
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          backgroundColor: '#e3f2fd',
                          borderRadius: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '2rem',
                        }}
                      >
                        {type.icon}
                      </Box>

                      {/* Text Content */}
                      <Box sx={{ flex: 1 }}>
                        <Typography
                          variant="h6"
                          sx={{
                            color: '#153C65',
                            fontWeight: 600,
                            mb: 1,
                            fontFamily: '"Poppins", sans-serif',
                          }}
                        >
                          {type.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#666',
                            fontFamily: '"Inter", sans-serif',
                          }}
                        >
                          {type.description}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>

          {/* Action Buttons */}
          <Box sx={{ display: 'flex', flexDirection: 'column',  alignItems: 'flex-end' }}>
          <Button
              variant="contained"
              endIcon={<ArrowIcon />}
              onClick={handleContinue}
              fullWidth
              sx={{
                backgroundColor: '#FFC043',
                color: '#0A3A7D',
                px: 4,
                py: 1.5,
                borderRadius: 2,
                fontWeight: 700,
                fontSize: '1rem',
                fontFamily: '"Poppins", sans-serif',
                '&:hover': {
                  backgroundColor: '#D4B63C',
                },
              }}
            >
              Continue to Verification
            </Button>
            <Divider sx={{ mt:4, mb: 2, color:'#E2EDFF', width: '100%' }} />
            <Button
                 startIcon={<SaveIcon color='#0A3A7D'/>}
                 sx={{
                   color: '#0A3A7D',
                fontFamily: '"Poppins", sans-serif',
                '&:hover': {
                  backgroundColor: 'rgba(102, 102, 102, 0.1)',
                },
              }}
            >
              Save Progress
            </Button>

                     </Box>
         </Paper>
       </Box>
   );
};

export default CompleteAccountSetupPage;
