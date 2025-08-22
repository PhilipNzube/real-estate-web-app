import React from 'react';
import {
  Box,
  Typography,
} from '@mui/material';
import {
  Verified as VerifiedIcon,
  Security as SecurityIcon,
  HeadsetMic as SupportIcon,
} from '@mui/icons-material';

const FeatureHighlights = () => {
  const features = [
    {
      icon: <VerifiedIcon sx={{ fontSize: 40, color: 'secondary.main' }} />,
      title: 'Verified Listings',
      description: 'All properties are thoroughly verified for authenticity',
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40, color: 'secondary.main' }} />,
      title: 'Secure Transactions',
      description: 'Safe and transparent property transactions',
    },
    {
      icon: <SupportIcon sx={{ fontSize: 40, color: 'secondary.main' }} />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support available',
    },
  ];

  return (
    <Box sx={{ mt: 6 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 3,
          justifyContent: 'space-between',
        }}
      >
        {features.map((feature, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: 'transparent',
              textAlign: 'center',
              p: 2,
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 2,
              backdropFilter: 'blur(10px)',
              flex: { xs: '1', sm: '0 1 calc(33.333% - 16px)' },
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.05)',
                transform: 'translateY(-2px)',
                transition: 'all 0.3s ease',
              },
            }}
          >
            <Box sx={{ mb: 2 }}>
              {feature.icon}
            </Box>
            <Typography
              variant="h6"
              sx={{
                color: 'text.primary',
                fontWeight: 600,
                mb: 1,
              }}
            >
              {feature.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'text.primary',
                opacity: 0.8,
                lineHeight: 1.5,
              }}
            >
              {feature.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FeatureHighlights;
