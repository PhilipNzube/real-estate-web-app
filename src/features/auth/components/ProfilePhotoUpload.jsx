import React from 'react';
import {
  Box,
  Typography,
  IconButton,
} from '@mui/material';
import { Person as PersonIcon, CameraAlt as CameraIcon } from '@mui/icons-material';

const ProfilePhotoUpload = () => {
  return (
    <Box sx={{ textAlign: 'center', mb: 4 }}>
      {/* Profile Photo Circle */}
      <Box sx={{ position: 'relative', display: 'inline-block' }}>
        {/* Main Circle */}
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
        
        {/* Camera Icon */}
        <IconButton
          sx={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            backgroundColor: '#DFC14C',
            width: 40,
            height: 40,
            border: '3px solid white',
            '&:hover': {
              backgroundColor: '#D4B63C',
            },
          }}
        >
          <CameraIcon sx={{ fontSize: 20, color: 'white' }} />
        </IconButton>
      </Box>
      
      {/* Upload Text */}
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
  );
};

export default ProfilePhotoUpload;
