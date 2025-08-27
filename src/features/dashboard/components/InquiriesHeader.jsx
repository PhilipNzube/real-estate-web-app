import React from 'react';
import {
  Box,
  Typography,
  Button,
  Badge,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  Chat as ChatIcon,
  KeyboardArrowDown as ArrowDownIcon,
  Add as AddIcon,
} from '@mui/icons-material';

const InquiriesHeader = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      p: { xs: 2, sm: 3 },
      backgroundColor: 'white',
      borderBottom: '1px solid #e0e0e0',
      minHeight: 72,
    }}>
      {/* Left Side - Title and Count */}
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <ChatIcon sx={{ 
          color: '#0A3A7D', 
          fontSize: { xs: 24, sm: 28 },
          mr: 1.5 
        }} />
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: '#0A3A7D',
            fontSize: { xs: '1.25rem', sm: '1.5rem' },
            fontFamily: '"Inter", sans-serif',
            mr: 1.5,
          }}
        >
          My Inquiries
        </Typography>
        <Badge
          badgeContent={8}
          sx={{
            '& .MuiBadge-badge': {
              backgroundColor: '#757575',
              color: 'white',
              fontSize: { xs: '0.7rem', sm: '0.75rem' },
              fontWeight: 600,
              minWidth: { xs: 18, sm: 20 },
              height: { xs: 18, sm: 20 },
            },
          }}
        />
      </Box>

      {/* Right Side - Action Buttons */}
      <Box sx={{ 
        display: 'flex', 
        gap: { xs: 1, sm: 2 },
        alignItems: 'center',
      }}>
        {/* Filter Button */}
        <Button
          variant="outlined"
          startIcon={<ArrowDownIcon />}
          sx={{
            borderColor: '#0A3A7D',
            color: '#0A3A7D',
            backgroundColor: 'white',
            textTransform: 'none',
            fontWeight: 500,
            fontSize: { xs: '0.8rem', sm: '0.875rem' },
            px: { xs: 1.5, sm: 2 },
            py: { xs: 0.75, sm: 1 },
            '&:hover': {
              borderColor: '#0A3A7D',
              backgroundColor: '#f8f9fa',
            },
          }}
        >
          Filter
        </Button>

        {/* New Inquiry Button */}
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            backgroundColor: '#0A3A7D',
            color: 'white',
            textTransform: 'none',
            fontWeight: 600,
            fontSize: { xs: '0.8rem', sm: '0.875rem' },
            px: { xs: 1.5, sm: 2 },
            py: { xs: 0.75, sm: 1 },
            '&:hover': {
              backgroundColor: '#082a5a',
            },
          }}
        >
          {isMobile ? 'New' : '+ New Inquiry'}
        </Button>
      </Box>
    </Box>
  );
};

export default InquiriesHeader;
