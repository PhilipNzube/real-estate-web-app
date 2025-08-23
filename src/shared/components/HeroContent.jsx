import React from 'react';
import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import VerifiedListingsIcon from './icons/VerifiedListingsIcon';
import SecureTransactionsIcon from './icons/SecureTransactionsIcon';
import SupportServicesIcon from './icons/SupportServicesIcon';

const HeroContent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        width: '100%',
        pr: isMobile ? 0 : { md: 2, lg: 4, xl: 6, xxl: 8 },
        textAlign: isMobile ? 'center' : 'left',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: { xs: 'auto', sm: '60vh', md: '70vh' },
        pl: { xs: 1, sm: 2, md: 3, lg: 4, xl: 6, xxl: 8 },
        py: { xs: 2, sm: 3, md: 4 },
        overflow: 'hidden',
      }}
    >
      {/* Tagline */}
      <Typography
        variant="overline"
        sx={{
          color: '#DFC14C',
          fontWeight: 400,
          fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
          letterSpacing: 0,
          mb: { xs: 1, sm: 2 },
          display: 'block',
          fontFamily: '"Inter", sans-serif',
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
          mb: { xs: 2, sm: 3 },
          fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem', lg: '3.2rem', xl: '3.5rem', xxl: '4rem' },
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
          fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem', xxl: '1.1rem' },
          lineHeight: 1.6,
          mb: { xs: 3, sm: 4 },
          opacity: 0.9,
          fontFamily: '"Poppins", sans-serif',
        }}
      >
        Discover the finest properties across Nigeria with our trusted platform 
        that ensures security and transparency in every transaction.
      </Typography>

      {/* Call-to-Action Buttons */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: { xs: 1.5, sm: 2 },
          mb: { xs: 3, sm: 4 },
        }}
      >
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: '#DFC14C',
            color: '#153C65',
            fontWeight: 400,
            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
            py: { xs: 1, sm: 1.25, md: 1.5 },
            px: { xs: 3, sm: 3.5, md: 4 },
            borderRadius: 2,
            fontFamily: '"Poppins", sans-serif',
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
            borderWidth: 1,
            fontWeight: 400,
            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
            py: { xs: 1, sm: 1.25, md: 1.5 },
            px: { xs: 3, sm: 3.5, md: 4 },
            borderRadius: 2,
            fontFamily: '"Poppins", sans-serif',
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
       <Box sx={{ mt: { xs: 4, sm: 6, md: 8 } }}>
         <Box
           sx={{
             display: 'flex',
             flexDirection: { xs: 'column', sm: 'row' },
             gap: { xs: 2, sm: 3, md: 4 },
           }}
         >
           {[
             {
               icon: <VerifiedListingsIcon style={{ width: 28, height: 28 }} />,
               title: 'Verified Listings',
             },
             {
               icon: <SecureTransactionsIcon style={{ width: 28, height: 28 }} />,
               title: 'Secure Transactions',
             },
             {
               icon: <SupportServicesIcon style={{ width: 28, height: 28 }} />,
               title: '24/7 Support',
             },
           ].map((feature, index) => (
             <Box
               key={index}
               sx={{
                 display: 'flex',
                 alignItems: 'center',
                 gap: { xs: 1, sm: 1.5 },
                 flex: { xs: '1', sm: '0 1 auto' },
                 justifyContent: { xs: 'center', sm: 'flex-start' },
               }}
             >
               {feature.icon}
               <Typography
                 variant="body2"
                 sx={{
                   color: 'text.primary',
                   fontWeight: 500,
                   fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' },
                   fontFamily: '"Poppins", sans-serif',
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
