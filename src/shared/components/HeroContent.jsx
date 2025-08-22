import React from 'react';
import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Verified as VerifiedIcon,
  Security as SecurityIcon,
  HeadsetMic as SupportIcon,
} from '@mui/icons-material';

const HeroContent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        width: '100%',
        pr: isMobile ? 0 : { md: 4, lg: 6, xl: 8 },
        textAlign: isMobile ? 'center' : 'left',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '70vh',
        pl: { xs: 2, md: 4, lg: 6, xl: 8 },
      }}
    >
      {/* Tagline */}
      <Typography
        variant="overline"
        sx={{
          color: 'secondary.main',
          fontWeight: 700,
          fontSize: '1rem',
          letterSpacing: 2,
          mb: 2,
          display: 'block',
        }}
      >
        PREMIUM REAL ESTATE
      </Typography>

      {/* Main Headline */}
      <Typography
        variant="h1"
        sx={{
          color: 'text.primary',
          fontWeight: 700,
          mb: 3,
          fontSize: isMobile ? '2.5rem' : '3.5rem',
          lineHeight: 1.2,
        }}
      >
        Verified Properties.
        <br />
        Secured Transactions.
      </Typography>

      {/* Description */}
      <Typography
        variant="body1"
        sx={{
          color: 'text.primary',
          fontSize: '1.1rem',
          lineHeight: 1.6,
          mb: 4,
          opacity: 0.9,
        }}
      >
        Discover the finest properties across Nigeria with our trusted platform 
        that ensures security and transparency in every transaction.
      </Typography>

      {/* Call-to-Action Buttons */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: 2,
          mb: 4,
        }}
      >
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: 'secondary.main',
            color: 'text.secondary',
            fontWeight: 600,
            fontSize: '1.1rem',
            py: 1.5,
            px: 4,
            borderRadius: 2,
            '&:hover': {
              backgroundColor: 'secondary.dark',
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 25px rgba(255, 215, 0, 0.3)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          Browse Properties
        </Button>
        
        <Button
          variant="outlined"
          size="large"
          sx={{
            color: 'text.primary',
            borderColor: 'text.primary',
            borderWidth: 2,
            fontWeight: 600,
            fontSize: '1.1rem',
            py: 1.5,
            px: 4,
            borderRadius: 2,
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.1)',
              borderColor: 'text.primary',
              borderWidth: 2,
              transform: 'translateY(-2px)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          Learn More
        </Button>
             </Box>

       {/* Feature Highlights */}
       <Box sx={{ mt: 8 }}>
         <Box
           sx={{
             display: 'flex',
             flexDirection: { xs: 'column', sm: 'row' },
             gap: 4,
             justifyContent: 'space-between',
           }}
         >
           {[
             {
               icon: <VerifiedIcon sx={{ fontSize: 28, color: 'secondary.main' }} />,
               title: 'Verified Listings',
             },
             {
               icon: <SecurityIcon sx={{ fontSize: 28, color: 'secondary.main' }} />,
               title: 'Secure Transactions',
             },
             {
               icon: <SupportIcon sx={{ fontSize: 28, color: 'secondary.main' }} />,
               title: '24/7 Support',
             },
           ].map((feature, index) => (
             <Box
               key={index}
               sx={{
                 display: 'flex',
                 alignItems: 'center',
                 gap: 1.5,
                 flex: { xs: '1', sm: '0 1 auto' },
               }}
             >
               {feature.icon}
               <Typography
                 variant="body2"
                 sx={{
                   color: 'text.primary',
                   fontWeight: 500,
                   fontSize: '0.9rem',
                 }}
               >
                 {feature.title}
               </Typography>
             </Box>
           ))}
         </Box>
       </Box>
    </Box>
  );
};

export default HeroContent;
