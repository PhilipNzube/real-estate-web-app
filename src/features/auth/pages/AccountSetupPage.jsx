import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
} from '@mui/material';
import AccountSetupHeader from '../components/AccountSetupHeader';
import ProgressBar from '../components/ProgressBar';
import ProfilePhotoUpload from '../components/ProfilePhotoUpload';
import PersonalInfoForm from '../components/PersonalInfoForm';

const AccountSetupPage = () => {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f0f4f8' }}>
      {/* Header */}
      <AccountSetupHeader />
      
      {/* Progress Bar */}
      <ProgressBar currentStep={2} />
      
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
          {/* Page Title */}
          <Typography
            variant="h4"
            sx={{
              color: '#153C65',
              fontWeight: 700,
              mb: 2,
              fontFamily: '"Poppins", sans-serif',
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
          <ProfilePhotoUpload />
          
          {/* Personal Information Form */}
          <PersonalInfoForm />
        </Paper>
      </Container>
    </Box>
  );
};

export default AccountSetupPage;
