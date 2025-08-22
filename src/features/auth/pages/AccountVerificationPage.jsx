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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  InputAdornment,
  Divider
} from '@mui/material';
import {
  Info as InfoIcon,
  Security as SecurityIcon,
  Upload as UploadIcon,
  Schedule as ScheduleIcon,
  Edit as EditIcon,
  Send as SendIcon,
  ArrowForward as ArrowIcon,
  ArrowBack as ArrowBackIcon,
  Save as SaveIcon,
  Check as CheckIcon,
  CreditCard as CreditCardIcon,
  Badge as BadgeIcon,
  Description as DescriptionIcon
} from '@mui/icons-material';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import './AccountVerificationPage.css';


const AccountVerificationPage = () => {
  const navigate = useNavigate();
  const [idType, setIdType] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('+2348012345678');
  const [addressDocumentType, setAddressDocumentType] = useState('electricity');
  const [isPhoneEditing, setIsPhoneEditing] = useState(false);

  const idTypes = [
    'National ID Card',
    'International Passport',
    'Driver\'s License',
    'Voter\'s Card',
  ];

  const addressDocumentTypes = [
    { id: 'electricity', label: 'Electricity Bill', icon: '⚡' },
    { id: 'water', label: 'Water Bill', icon: '💧' },
    { id: 'bank', label: 'Bank Statement', icon: '🏦' },
  ];

  const handleBack = () => {
    navigate('/register');
  };

  const handleContinue = () => {
    navigate('/register/preferences');
  };

  const handlePhoneEdit = () => {
    setIsPhoneEditing(!isPhoneEditing);
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
          {/* Page Title */}
          <Typography
            variant="h4"
            sx={{
              color: '#0A3A7D',
              fontWeight: 700,
              mb: 2,
              fontFamily: '"Lora", sans-serif',
            }}
          >
            Verify Your Identity
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
            To ensure security and comply with Nigerian regulations, we need to verify your identity before you can access all features.
          </Typography>

          {/* Security Notice */}
          <Alert
            icon={<SecurityIcon />}
            sx={{
              mb: 4,
              backgroundColor: '#F7FAFF',
              color: '#495057',
              border: '1px solid #E2EDFF',
              '& .MuiAlert-icon': {
                color: '#153C65',
              },
            }}
          >
            Your documents are encrypted and handled according to <strong style={{color: '#0A3A7D'}}>CBN and NDPR guidelines</strong>. We prioritize your data security and privacy at all times.
          </Alert>

          {/* Government-Issued ID Section */}
          <Box sx={{ mb: 6 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography
                variant="h5"
                sx={{
                  color: '#333B4D',
                  fontWeight: 700,
                  fontFamily: '"Lora", sans-serif',
                }}
              >
                Government-Issued ID
              </Typography>
              <Chip
              color="#FFA500"
                icon={<ScheduleIcon />}
                label="Pending"
                sx={{
                  backgroundColor: '#FFF6E6',
                  color: '#FFA500',
                  fontWeight: 400,
                  fontFamily: '"Poppins", sans-serif',
                }}
              />
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
              Upload a valid government-issued identification document
            </Typography>

            {/* ID Type Selection */}
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel sx={{ color: '#666', fontFamily: '"Inter", sans-serif' }}>
                Select ID Type
              </InputLabel>
              <Select
                value={idType}
                label="Select ID Type"
                onChange={(e) => setIdType(e.target.value)}
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
                  '& .MuiSelect-select': {
                    color: 'black',
                  },
                }}
              >
                {idTypes.map((type) => (
                  <MenuItem key={type} value={type} sx={{ color: 'black' }}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

                         {/* ID Upload Cards */}
             <Box sx={{ 
               display: 'flex', 
               gap: { xs: 2, sm: 3 }, 
               mb: 3,
               flexDirection: { xs: 'column', sm: 'row' }
             }}>
               {/* Front of ID */}
               <Card
                 sx={{
                   flex: 1,
                   border: '2px dashed #ddd',
                   borderRadius: { xs: 2, sm: 3 },
                   cursor: 'pointer',
                   transition: 'all 0.3s ease',
                   '&:hover': {
                     borderColor: '#153C65',
                     backgroundColor: '#f8f9fa',
                   },
                 }}
               >
                <CardContent sx={{ textAlign: 'center', py: { xs: 3, sm: 4 } }}>
                  <Box
                    sx={{
                      width: { xs: 50, sm: 60 },
                      height: { xs: 50, sm: 60 },
                      backgroundColor: '#e3f2fd',
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                    }}
                  >
                    <BadgeIcon sx={{ fontSize: { xs: 24, sm: 30 }, color: '#153C65' }} />
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#153C65',
                      fontWeight: 600,
                      mb: 1,
                      fontFamily: '"Poppins", sans-serif',
                    }}
                  >
                    Front of ID
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#666',
                      mb: 2,
                      fontFamily: '"Inter", sans-serif',
                    }}
                  >
                    Click to browse or drag & drop
                  </Typography>
                  <Chip
              color="#FFA500"
                icon={<ScheduleIcon />}
                label="Pending"
                sx={{
                  backgroundColor: '#FFF6E6',
                  color: '#FFA500',
                  fontWeight: 400,
                  fontFamily: '"Poppins", sans-serif',
                    }}
                  />
                </CardContent>
              </Card>

              {/* Back of ID */}
              <Card
                sx={{
                  flex: 1,
                  border: '2px dashed #ddd',
                  borderRadius: { xs: 2, sm: 3 },
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: '#153C65',
                    backgroundColor: '#f8f9fa',
                  },
                }}
              >
                <CardContent sx={{ textAlign: 'center', py: { xs: 3, sm: 4 } }}>
                  <Box
                    sx={{
                      width: { xs: 50, sm: 60 },
                      height: { xs: 50, sm: 60 },
                      backgroundColor: '#e3f2fd',
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                    }}
                  >
                    <BadgeIcon sx={{ fontSize: { xs: 24, sm: 30 }, color: '#153C65' }} />
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#153C65',
                      fontWeight: 600,
                      mb: 1,
                      fontFamily: '"Poppins", sans-serif',
                    }}
                  >
                    Back of ID
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#666',
                      mb: 2,
                      fontFamily: '"Inter", sans-serif',
                    }}
                  >
                    Click to browse or drag & drop
                  </Typography>
                  <Chip
              color="#FFA500"
                icon={<ScheduleIcon />}
                label="Pending"
                sx={{
                  backgroundColor: '#FFF6E6',
                  color: '#FFA500',
                  fontWeight: 400,
                  fontFamily: '"Poppins", sans-serif',
                    }}
                  />
                </CardContent>
              </Card>
            </Box>

            {/* Upload Instructions */}
            <Alert
              icon={<InfoIcon />}
              sx={{
                backgroundColor: '#F7FAFF',
                color: '#596580',
                '& .MuiAlert-icon': {
                  color: '#1565c0',
                },
              }}
            >
              Take a clear photo or scan. Document must clearly show your full name, photo, and ID number. JPG, PNG or PDF formats accepted (max 5MB).
            </Alert>
          </Box>

          {/* Proof of Address Section */}
          <Box sx={{ mb: 6 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography
                variant="h5"
                sx={{
                  color: '#333B4D',
                  fontWeight: 700,
                  fontFamily: '"Lora", sans-serif',
                }}
              >
                Proof of Address
              </Typography>
              <Chip
              color="#FFA500"
                icon={<ScheduleIcon />}
                label="Pending"
                sx={{
                  backgroundColor: '#FFF6E6',
                  color: '#FFA500',
                  fontWeight: 400,
                  fontFamily: '"Poppins", sans-serif',
                }}
              />
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
              Upload a document confirming your current Nigerian address
            </Typography>

                         {/* Address Document Upload */}
             <Card
               sx={{
                 border: '2px dashed #ddd',
                 borderRadius: { xs: 2, sm: 3 },
                 cursor: 'pointer',
                 transition: 'all 0.3s ease',
                 '&:hover': {
                   borderColor: '#153C65',
                   backgroundColor: '#f8f9fa',
                 },
               }}
             >
               <CardContent sx={{ textAlign: 'center', py: { xs: 3, sm: 4 } }}>
                 <Box
                   sx={{
                     width: { xs: 50, sm: 60 },
                     height: { xs: 50, sm: 60 },
                     backgroundColor: '#e3f2fd',
                     borderRadius: 2,
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center',
                     mx: 'auto',
                     mb: 2,
                   }}
                 >
                   <DescriptionIcon sx={{ fontSize: { xs: 24, sm: 30 }, color: '#153C65' }} />
                 </Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#153C65',
                    fontWeight: 600,
                    mb: 1,
                    fontFamily: '"Poppins", sans-serif',
                  }}
                >
                  Upload Address Document
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#666',
                    mb: 2,
                    fontFamily: '"Inter", sans-serif',
                  }}
                >
                  Click to browse or drag & drop
                </Typography>
              </CardContent>
            </Card>

             {/* Document Type Selection */}
                           <Box sx={{ 
                display: 'flex', 
                gap: { xs: 0.5, sm: 1, md: 2 }, 
                justifyContent: { xs: 'center', sm: 'space-between' },
                my: 3,
                flexDirection: { xs: 'column', sm: 'row' },
                
              }}>
               {addressDocumentTypes.map((docType) => (
                 <Button
                 fullWidth
                   key={docType.id}
                   variant={addressDocumentType === docType.id ? 'contained' : 'outlined'}
                                       startIcon={<span style={{ fontSize: 'clamp(0.8rem, 2vw, 1.2rem)' }}>{docType.icon}</span>}
                   onClick={() => setAddressDocumentType(docType.id)}
                                       sx={{
                      borderRadius: 2,
                      px: { xs: 1.5, sm: 2, md: 3 },
                      py: { xs: 0.75, sm: 1, md: 1.5 },
                      fontSize: { xs: '0.7rem', sm: '0.8rem', md: '1rem' },
                      fontFamily: '"Poppins", sans-serif',
                      fontWeight: 500,
                      minWidth: { xs: 'auto', sm: '120px' },
                      whiteSpace: 'nowrap',
                    ...(addressDocumentType === docType.id && {
                      backgroundColor: '#153C65',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: '#0d2b4a',
                      },
                    }),
                    ...(addressDocumentType !== docType.id && {
                      borderColor: '#ddd',
                      color: '#666',
                      '&:hover': {
                        borderColor: '#153C65',
                        color: '#153C65',
                      },
                    }),
                  }}
                >
                  {docType.label}
                </Button>
              ))}
            </Box>

            {/* Address Upload Instructions */}
            <Alert
              icon={<InfoIcon />}
              sx={{
                mt: 3,
                backgroundColor: '#F7FAFF',
                color: '#596580',
                '& .MuiAlert-icon': {
                  color: '#1565c0',
                },
              }}
            >
              Document must clearly show your full name and physical address in Nigeria. We cannot accept P.O. Box addresses or documents older than 3 months.
            </Alert>
          </Box>

          {/* Phone Verification Section */}
          <Box sx={{ mb: 6 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography
                variant="h5"
                sx={{
                  color: '#333B4D',
                  fontWeight: 700,
                  fontFamily: '"Lora", sans-serif',
                }}
              >
                Phone Verification
              </Typography>
              <Chip
              color="#FFA500"
                icon={<ScheduleIcon />}
                label="Pending"
                sx={{
                  backgroundColor: '#FFF6E6',
                  color: '#FFA500',
                  fontWeight: 400,
                  fontFamily: '"Poppins", sans-serif',
                }}
              />
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
              Confirm your phone number via SMS verification
            </Typography>

                                                   {/* Phone Number Display */}
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: { xs: 1, sm: 2 }, 
                mb: 3,
                flexDirection: { xs: 'column', sm: 'row' }
              }}>
                <Box sx={{ flex: 1, width: '100%' }}>
                  <PhoneInput
                    international
                    defaultCountry="NG"
                    value={phoneNumber}
                    onChange={setPhoneNumber}
                    placeholder="Enter phone number"
                    className="phone-input-custom"
                    countries={['NG', 'US', 'GB', 'CA', 'AU', 'ZA', 'KE', 'GH', 'UG', 'TZ']}
                    disabled={!isPhoneEditing}
                  />
                </Box>
                <Button
                  startIcon={<EditIcon />}
                  onClick={handlePhoneEdit}
                  sx={{
                    color: '#153C65',
                    fontFamily: '"Poppins", sans-serif',
                    px: { xs: 2, sm: 3 },
                    py: { xs: 0.75, sm: 1 },
                    fontSize: { xs: '0.8rem', sm: '1rem' },
                    '&:hover': {
                      backgroundColor: 'rgba(21, 60, 101, 0.1)',
                    },
                  }}
                >
                  {isPhoneEditing ? 'Done' : 'Edit'}
                </Button>
              </Box>

            {/* Send Verification Button */}
            <Button
              variant="contained"
              startIcon={<SendIcon />}
              sx={{
                backgroundColor: '#153C65',
                color: 'white',
                px: 4,
                py: 1.5,
                borderRadius: 2,
                fontWeight: 600,
                fontSize: '1rem',
                fontFamily: '"Poppins", sans-serif',
                mb: 2,
                '&:hover': {
                  backgroundColor: '#0d2b4a',
                },
              }}
            >
              Send Verification Code
            </Button>

            {/* SMS Info */}
            <Alert
              icon={<InfoIcon />}
              sx={{
                backgroundColor: '#F7FAFF',
                color: '#596580',
                '& .MuiAlert-icon': {
                  color: '#1565c0',
                },
              }}
            >
              Standard SMS rates may apply. If you don't receive the code, you can request a new one after the timer expires.
            </Alert>
          </Box>

                     {/* Action Buttons */}
           <Box sx={{ 
             display: 'flex', 
             alignItems: 'center',
             flexDirection: 'column',
           }}>
            <Button
                 variant="contained"
                 endIcon={<ArrowIcon />}
                 onClick={handleContinue}
                 fullWidth
                 sx={{
                   backgroundColor: '#FFC043',
                   color: '#0A3A7D',
                   px: { xs: 3, sm: 4 },
                   py: { xs: 1, sm: 1.5 },
                   borderRadius: 2,
                   fontWeight: 600,
                   fontSize: { xs: '0.9rem', sm: '1rem' },
                   fontFamily: '"Poppins", sans-serif',
                   '&:hover': {
                     backgroundColor: '#D4B63C',
                   },
                 }}
               >
                 Continue to Preferences
               </Button>
            <Divider sx={{ mt:4, mb: 2, color:'#E2EDFF', width: '100%' }} />
            <Box sx={{ display: 'flex', flexDirection: 'row',  justifyContent: 'space-between', width: '100%' }}>
             <Button
               startIcon={<ArrowBackIcon color='#596580'/>}
               onClick={handleBack}
               sx={{
                 color: '#596580',
                 fontFamily: '"Poppins", sans-serif',
                 px: { xs: 2, sm: 3 },
                 py: { xs: 0.75, sm: 1 },
                 fontSize: { xs: '0.8rem', sm: '1rem' },
                 '&:hover': {
                   backgroundColor: 'rgba(102, 102, 102, 0.1)',
                 },
               }}
             >
               Back to Account Setup
             </Button>

             <Box sx={{ 
               display: 'flex', 
               gap: { xs: 1, sm: 2 },
               flexDirection: { xs: 'column', sm: 'row' },
               width: { xs: '100%', sm: 'auto' }
             }}>
               <Button
                 startIcon={<SaveIcon color='#0A3A7D'/>}
                 sx={{
                   color: '#0A3A7D',
                   fontFamily: '"Poppins", sans-serif',
                   px: { xs: 2, sm: 3 },
                   py: { xs: 0.75, sm: 1 },
                   fontSize: { xs: '0.8rem', sm: '1rem' },
                   '&:hover': {
                     backgroundColor: 'rgba(102, 102, 102, 0.1)',
                   },
                 }}
               >
                 Save Progress
               </Button>
               </Box>
               
             </Box>
           </Box>
        </Paper>
      </Box>
  );
};

export default AccountVerificationPage;
