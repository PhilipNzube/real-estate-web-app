import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const WelcomeBanner = () => {
  const stats = [
    { value: '5', label: 'Saved Properties' },
    { value: '3', label: 'Property Alerts' },
    { value: '2', label: 'Pending Inquiries' },
  ];

  return (
    <Paper
      sx={{
        background: 'linear-gradient(135deg, #0E4592 0%, #155ABB 100%)',
        color: 'white',
        p: { xs: 2, sm: 3, md: 4 },
        borderRadius: 3,
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
      }}
    >
      {/* Welcome Text */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 2,
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
            fontFamily: '"Axiforma", serif',
          }}
        >
          Good Afternoon, User!
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '0.9rem', sm: '1rem' },
            lineHeight: 1.6,
            opacity: 0.9,
            fontFamily: '"Axiforma", sans-serif',
            maxWidth: '600px',
          }}
        >
          Welcome to your dashboard. Track your property journey, manage saved listings, 
          and explore new opportunities in the African real estate market.
        </Typography>
      </Box>

      {/* Statistics */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md:'column', lg: 'row' },
          gap: { xs: 2, sm: 4 },
        }}
      >
        {stats.map((stat, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: '#255598',
          borderRadius: '10px',
          padding: '10px',
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                color: '#FFFFFF',
                fontFamily: '"Axiforma", serif',
                mb: 0.5,
              }}
            >
              {stat.value}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: { xs: '0.8rem', sm: '0.9rem' },
                opacity: 0.8,
                fontFamily: '"Axiforma", sans-serif',
                fontWeight: 500,
              }}
            >
              {stat.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default WelcomeBanner;
