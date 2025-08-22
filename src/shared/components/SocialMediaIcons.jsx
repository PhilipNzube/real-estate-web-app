import React from 'react';
import {
  Box,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
} from '@mui/icons-material';

const SocialMediaIcons = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const socialLinks = [
    {
      icon: <FacebookIcon />,
      url: 'https://facebook.com',
      label: 'Facebook',
    },
    {
      icon: <InstagramIcon />,
      url: 'https://instagram.com',
      label: 'Instagram',
    },
    {
      icon: <TwitterIcon />,
      url: 'https://twitter.com',
      label: 'Twitter',
    },
    {
      icon: <LinkedInIcon />,
      url: 'https://linkedin.com',
      label: 'LinkedIn',
    },
    
  ];

  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        right: { xs: 12, sm: 16, md: 20, lg: 24 },
        bottom: '0%',
        transform: 'translateY(-0%)',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: 1, sm: 1.5 },
      }}
    >
      {socialLinks.map((social, index) => (
        <IconButton
          key={index}
          onClick={() => handleSocialClick(social.url)}
          aria-label={social.label}
          sx={{
            color: 'text.primary',
            backgroundColor: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)',
            width: { xs: 40, sm: 44, md: 48 },
            height: { xs: 40, sm: 44, md: 48 },
            '&:hover': {
              color: 'grey',
              backgroundColor: 'rgba(255,255,255,0.2)',
              transform: 'scale(1.1)',
              transition: 'all 0.3s ease',
            },
            '& .MuiSvgIcon-root': {
              fontSize: { xs: 20, sm: 22, md: 24 },
            },
          }}
        >
          {social.icon}
        </IconButton>
      ))}
    </Box>
  );
};

export default SocialMediaIcons;
