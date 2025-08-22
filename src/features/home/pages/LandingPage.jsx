import React from 'react';
import {
  Box,
  Container,
} from '@mui/material';
import Header from '../../../shared/components/Header';
import HeroContent from '../../../shared/components/HeroContent';
import PropertySearchForm from '../../../shared/components/PropertySearchForm';
import SocialMediaIcons from '../../../shared/components/SocialMediaIcons';
import BgImage from '../../../assets/images/Bg.png';
import BgOverlay from '../../../assets/images/Bg_overlay.png';

const LandingPage = () => {

  return (
    <Box
      sx={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${BgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 1,
        }}
      />

      {/* Blue Overlay Image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          // Option 1: Use your overlay image
          backgroundImage: `url(${BgOverlay})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          // Option 2: Use CSS overlay instead (uncomment below and comment out backgroundImage above)
          backgroundColor: 'rgba(25, 118, 210, 0.7)', // Blue overlay
          zIndex: 1,
          opacity: 0.8, // Adjust this value to make overlay lighter/darker
          // Debug: Add a border to see the overlay area
          // border: '2px solid red',
        }}
      />

      {/* Social Media Icons */}
      <SocialMediaIcons />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <Container
        maxWidth={false}
        sx={{
          position: 'relative',
          zIndex: 1,
          pt: { xs: 2, sm: 4, md: 6, lg: 8 },
          pb: { xs: 4, sm: 6, md: 8, lg: 12 },
          px: { xs: 2, sm: 3, md: 4, lg: 6, xl: 8 },
        }}
      >
        {/* Hero Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            minHeight: '100vh',
            position: 'relative',
            alignItems: 'center',
            gap: 0,
          }}
        >
          {/* Left Content - Takes up more space (70-75%) */}
          <Box
            sx={{
              flex: { xs: '1', lg: '0 0 75%', xl: '0 0 80%' },
              width: '100%',
            }}
          >
            <HeroContent />
          </Box>

          {/* Right Content - Search Form (25-30%) */}
          <Box
            sx={{
              flex: { xs: '1', lg: '0 0 25%', xl: '0 0 20%' },
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'flex-start',
              height: '100%',
              pt: { xs: 4, md: 6, lg: 8 },
              pr: { xs: 2, md: 3, lg: 4 },
              pl: { xs: 2, md: 0 },
            }}
          >
            <PropertySearchForm />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LandingPage;
