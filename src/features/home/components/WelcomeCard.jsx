import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from '@mui/material';
import { Home as HomeIcon } from '@mui/icons-material';

const WelcomeCard = () => {
  return (
    <Card sx={{ maxWidth: 600, mx: 'auto' }}>
      <CardMedia
        component="img"
        height="200"
        image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        alt="Real Estate"
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ textAlign: 'center', py: 4 }}>
        <HomeIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to Real Estate App
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Discover your dream home with our comprehensive real estate platform. 
          Browse properties, connect with agents, and find the perfect place to call home.
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Button
            variant="contained"
            size="large"
            sx={{ mr: 2 }}
          >
            Browse Properties
          </Button>
          <Button
            variant="outlined"
            size="large"
          >
            Learn More
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default WelcomeCard;

