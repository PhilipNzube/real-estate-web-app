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
  FilterList as FilterIcon,
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
      <Box sx={{ display: 'flex', alignItems: 'flex-start', flex: 1 }}>
        <ChatIcon sx={{ 
          color: '#0A3A7D', 
          fontSize: { xs: 20, sm: 28 },
          mr: { xs: 1, sm: 1.5 },
          mt: { xs: 0.5, sm: 0 },
          flexShrink: 0,
        }} />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: '#0A3A7D',
              fontSize: { xs: '1.1rem', sm: '1.5rem' },
              fontFamily: '"Axiforma", sans-serif',
              lineHeight: { xs: 1.2, sm: 1.3 },
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: {xs:'column', sm:'row'} }}>
              <span>My</span>
              <span>Inquiries</span>
            </Box>
            <Badge
              badgeContent={8}
              sx={{
                alignSelf: 'flex-start',
                mt: { xs: 0.5, sm: 0.5 },
                '& .MuiBadge-badge': {
                  backgroundColor: '#E6EDFF',
                  color: '#0A3A7D',
                  fontSize: { xs: '0.6rem', sm: '0.75rem' },
                  fontWeight: 600,
                  minWidth: { xs: 16, sm: 20 },
                  height: { xs: 16, sm: 20 },
                },
              }}
            />
          </Typography>
        </Box>
      </Box>

      {/* Right Side - Action Buttons */}
      <Box sx={{ 
        display: 'flex', 
        gap: { xs: 1, sm: 2 },
        alignItems: 'center',
        flexShrink: 0,
      }}>
        {/* Filter Button */}
        <Button
          variant="outlined"
          startIcon={<FilterIcon />}
          sx={{
            borderRadius: 4,
            borderColor: '#165DC2',
            color: '#0A3A7D',
            backgroundColor: 'white',
            textTransform: 'none',
            fontWeight: 500,
            fontSize: { xs: '0.75rem', sm: '0.875rem' },
            px: { xs: 1, sm: 2 },
            py: { xs: 0.5, sm: 1 },
            minWidth: { xs: 'auto', sm: 'auto' },
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
            borderRadius: 4,
            backgroundColor: '#0A3A7D',
            color: 'white',
            textTransform: 'none',
            fontWeight: 600,
            fontSize: { xs: '0.75rem', sm: '0.875rem' },
            px: { xs: 1, sm: 2 },
            py: { xs: 0.5, sm: 1 },
            minWidth: { xs: 'auto', sm: 'auto' },
            '&:hover': {
              backgroundColor: '#082a5a',
            },
          }}
        >
          {isMobile ? 'New' : 'New Inquiry'}
        </Button>
      </Box>
    </Box>
  );
};

export default InquiriesHeader;
