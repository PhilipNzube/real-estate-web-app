import React from 'react';
import {
  Box,
} from '@mui/material';
import Header from '../../../shared/components/Header';
import HeroContent from '../../../shared/components/HeroContent';
import PropertySearchForm from '../../../shared/components/PropertySearchForm';
import SocialMediaIcons from '../../../shared/components/SocialMediaIcons';
import BgImage from '../../../assets/images/Bg.png';

const LandingPage = () => {

  return (
    <Box
      sx={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
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

      {/* Custom Gradient Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, #153C65E5 0%, #153C65B2 100%)',
          zIndex: 1,
        }}
      />

      {/* Social Media Icons */}
      <SocialMediaIcons />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          pt: { xs: 8, sm: 10, md: 12, lg: 14 },
          pb: { xs: 4, sm: 6, md: 8, lg: 10 },
          px: { xs: 2, sm: 3, md: 4, lg: 6, xl: 8, xxl: 10 },
          width: '100%',
          overflowX: 'hidden',
          minHeight: 'calc(100vh - 80px)',
        }}
      >
        {/* Hero Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            minHeight: { xs: 'auto', sm: 'calc(100vh - 120px)' },
            position: 'relative',
            alignItems: { xs: 'stretch', lg: 'center' },
            gap: { xs: 3, sm: 4, md: 5, lg: 6 },
            maxWidth: '100%',
          }}
        >
          {/* Left Content - Takes up more space (70-75%) */}
          <Box
            sx={{
              flex: { xs: '1', lg: '0 0 70%', xl: '0 0 75%', xxl: '0 0 78%' },
              width: '100%',
              order: { xs: 1, lg: 1 },
              minWidth: 0, // Prevents flex item from overflowing
            }}
          >
            <HeroContent />
          </Box>

          {/* Right Content - Search Form (25-30%) */}
          <Box
            sx={{
              flex: { xs: '1', lg: '0 0 30%', xl: '0 0 25%', xxl: '0 0 22%' },
              display: 'flex',
              justifyContent: { xs: 'center', lg: 'flex-end' },
              alignItems: { xs: 'center', lg: 'flex-start' },
              height: '100%',
              pt: { xs: 2, sm: 3, md: 4, lg: 6 },
              pr: { xs: 0, lg: 3, xl: 4, xxl: 5 },
              pl: { xs: 0, lg: 2, xl: 3, xxl: 4 },
              order: { xs: 2, lg: 2 },
              minWidth: 0, // Prevents flex item from overflowing
            }}
          >
            <PropertySearchForm />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
