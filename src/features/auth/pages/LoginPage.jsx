import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  return (
    <Box>
      <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
        Login
      </Typography>
      <Paper elevation={3} sx={{ p: 4, maxWidth: 500, mx: 'auto' }}>
        <LoginForm />
      </Paper>
    </Box>
  );
};

export default LoginPage;

