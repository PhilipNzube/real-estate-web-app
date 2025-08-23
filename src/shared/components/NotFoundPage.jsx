import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Home as HomeIcon, Search as SearchIcon } from '@mui/icons-material';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8f9fa',
        backgroundImage: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
        px: { xs: 2, sm: 3, md: 4 },
        py: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Container maxWidth="md" sx={{ width: '100%' }}>
        <Box
          sx={{
            textAlign: 'center',
            p: { xs: 2, sm: 3, md: 4 },
            backgroundColor: 'white',
            borderRadius: { xs: 2, sm: 3 },
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
            border: '1px solid #e9ecef',
            width: '100%',
            maxWidth: '600px',
            mx: 'auto',
          }}
        >
          {/* 404 Icon */}
          <Box
            sx={{
              width: { xs: 80, sm: 100, md: 120 },
              height: { xs: 80, sm: 100, md: 120 },
              borderRadius: '50%',
              backgroundColor: '#153C65',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mx: 'auto',
              mb: { xs: 2, sm: 3 },
              position: 'relative',
            }}
          >
            <Typography
              variant="h2"
              sx={{
                color: 'white',
                fontWeight: 700,
                fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
              }}
            >
              404
            </Typography>
          </Box>

          {/* Page Title */}
          <Typography
            variant="h3"
            sx={{
              color: '#333B4D',
              fontWeight: 700,
              mb: 2,
              fontFamily: '"Lora", serif',
              fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
            }}
          >
            Page Not Found
          </Typography>

          {/* Error Message */}
          <Typography
            variant="h6"
            sx={{
              color: '#666',
              mb: 3,
              lineHeight: 1.6,
              fontFamily: '"Inter", sans-serif',
              fontSize: { xs: '1rem', sm: '1.1rem' },
            }}
          >
            The page you're looking for doesn't exist or has been moved to a new location.
          </Typography>

          {/* Additional Info */}
          <Typography
            variant="body1"
            sx={{
              color: '#999',
              mb: 4,
              lineHeight: 1.6,
              fontFamily: '"Inter", sans-serif',
              maxWidth: '500px',
              mx: 'auto',
            }}
          >
            Don't worry! You can explore our properties or go back to the homepage to find what you're looking for.
          </Typography>

          {/* Action Buttons */}
          <Box
            sx={{
              display: 'flex',
              gap: { xs: 1.5, sm: 2 },
              justifyContent: 'center',
              flexWrap: 'wrap',
              mb: { xs: 3, sm: 4 },
            }}
          >
            <Button
              variant="contained"
              startIcon={<HomeIcon />}
              onClick={handleGoHome}
              sx={{
                backgroundColor: '#153C65',
                color: 'white',
                px: { xs: 2, sm: 3 },
                py: { xs: 1, sm: 1.5 },
                borderRadius: 2,
                fontWeight: 600,
                fontFamily: '"Poppins", sans-serif',
                fontSize: { xs: '0.9rem', sm: '1rem' },
                '&:hover': {
                  backgroundColor: '#0d2b4a',
                },
              }}
            >
              Go Home
            </Button>
            
            <Button
              variant="outlined"
              onClick={handleGoBack}
              sx={{
                borderColor: '#153C65',
                color: '#153C65',
                px: { xs: 2, sm: 3 },
                py: { xs: 1, sm: 1.5 },
                borderRadius: 2,
                fontWeight: 600,
                fontFamily: '"Poppins", sans-serif',
                fontSize: { xs: '0.9rem', sm: '1rem' },
                '&:hover': {
                  borderColor: '#0d2b4a',
                  backgroundColor: 'rgba(21, 60, 101, 0.1)',
                },
              }}
            >
              Go Back
            </Button>
          </Box>

          {/* Quick Links */}
          <Box
            sx={{
              display: 'flex',
              gap: 3,
              justifyContent: 'center',
              flexWrap: 'wrap',
              pt: 3,
              borderTop: '1px solid #e9ecef',
            }}
          >
            <Button
              variant="text"
              startIcon={<SearchIcon />}
              onClick={() => navigate('/')}
              sx={{
                color: '#153C65',
                fontWeight: 500,
                fontFamily: '"Poppins", sans-serif',
                '&:hover': {
                  backgroundColor: 'rgba(21, 60, 101, 0.1)',
                },
              }}
            >
              Browse Properties
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NotFoundPage;
