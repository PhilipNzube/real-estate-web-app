import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} />;
    }

    return this.props.children;
  }
}

const ErrorFallback = ({ error }) => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  const handleReload = () => {
    window.location.reload();
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
      <Container maxWidth="sm" sx={{ width: '100%' }}>
        <Box
          sx={{
            textAlign: 'center',
            p: { xs: 2, sm: 3, md: 4 },
            backgroundColor: 'white',
            borderRadius: { xs: 2, sm: 3 },
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
            border: '1px solid #e9ecef',
            width: '100%',
            maxWidth: '500px',
            mx: 'auto',
          }}
        >
          {/* Error Icon */}
          <Box
            sx={{
              width: { xs: 60, sm: 70, md: 80 },
              height: { xs: 60, sm: 70, md: 80 },
              borderRadius: '50%',
              backgroundColor: '#ff6b6b',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mx: 'auto',
              mb: { xs: 2, sm: 3 },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: 'white',
                fontWeight: 700,
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.125rem' },
              }}
            >
              !
            </Typography>
          </Box>

          {/* Error Title */}
          <Typography
            variant="h4"
            sx={{
              color: '#333B4D',
              fontWeight: 700,
              mb: { xs: 1.5, sm: 2 },
              fontFamily: '"Lora", serif',
              fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.125rem' },
              lineHeight: 1.2,
            }}
          >
            Something went wrong
          </Typography>

          {/* Error Message */}
          <Typography
            variant="body1"
            sx={{
              color: '#666',
              mb: { xs: 3, sm: 4 },
              lineHeight: 1.6,
              fontFamily: '"Inter", sans-serif',
              fontSize: { xs: '0.9rem', sm: '1rem' },
            }}
          >
            We encountered an unexpected error. Please try refreshing the page or contact support if the problem persists.
          </Typography>

          {/* Development Error Details */}
          {process.env.NODE_ENV === 'development' && error && (
            <Box
              sx={{
                backgroundColor: '#f8f9fa',
                p: 2,
                borderRadius: 2,
                mb: 3,
                textAlign: 'left',
                border: '1px solid #e9ecef',
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: '#dc3545',
                  fontFamily: 'monospace',
                  fontSize: '0.8rem',
                  wordBreak: 'break-word',
                }}
              >
                {error.toString()}
              </Typography>
            </Box>
          )}

          {/* Action Buttons */}
          <Box
            sx={{
              display: 'flex',
              gap: { xs: 1.5, sm: 2 },
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Button
              variant="contained"
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
              onClick={handleReload}
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
              Reload Page
            </Button>
          </Box>

          {/* Contact Info */}
          <Typography
            variant="body2"
            sx={{
              color: '#999',
              mt: 3,
              fontFamily: '"Inter", sans-serif',
            }}
          >
            Need help? Contact our support team at support@naijaluxuryhomes.com
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default ErrorBoundary;
