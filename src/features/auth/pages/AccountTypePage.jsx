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
  IconButton,
} from '@mui/material';
import {
  Info as InfoIcon,
  Check as CheckIcon,
  RadioButtonUnchecked as RadioIcon,
  Save as SaveIcon,
  ArrowForward as ArrowIcon,
} from '@mui/icons-material';
import AccountSetupHeader from '../components/AccountSetupHeader';
import ProgressBar from '../components/ProgressBar';

const AccountTypePage = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState('buyer');

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

  const handleContinue = () => {
    navigate('/account-setup');
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f0f4f8' }}>
      {/* Header */}
      <AccountSetupHeader />
      
      {/* Progress Bar */}
      <ProgressBar currentStep={1} />
      
      {/* Main Content */}
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Paper 
          elevation={0}
          sx={{ 
            backgroundColor: 'white',
            borderRadius: 3,
            p: 5,
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          }}
        >
          {/* Info Banner */}
          <Alert
            severity="info"
            icon={<InfoIcon />}
            sx={{
              mb: 4,
              backgroundColor: '#e3f2fd',
              color: '#1565c0',
              border: '1px solid #90caf9',
              '& .MuiAlert-icon': {
                color: '#1565c0',
              },
            }}
          >
            Your NIN is required by Nigerian law for real estate transactions. This information will be verified during the next step and is kept secure in compliance with NDPR guidelines.
          </Alert>

          {/* Account Type Section */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h4"
              sx={{
                color: '#153C65',
                fontWeight: 700,
                mb: 1,
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              Account Type
            </Typography>
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
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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

            <Button
              variant="contained"
              endIcon={<ArrowIcon />}
              onClick={handleContinue}
              sx={{
                backgroundColor: '#DFC14C',
                color: '#153C65',
                px: 4,
                py: 1.5,
                borderRadius: 2,
                fontWeight: 600,
                fontSize: '1rem',
                fontFamily: '"Poppins", sans-serif',
                '&:hover': {
                  backgroundColor: '#D4B63C',
                },
              }}
            >
              Continue to Verification
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default AccountTypePage;
