import React from 'react';
import { Box, Typography } from '@mui/material';
import WelcomeCard from '../components/WelcomeCard';

const HomePage = () => {
  return (
    <Box>
      <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
        Home
      </Typography>
      <WelcomeCard />
    </Box>
  );
};

export default HomePage;

