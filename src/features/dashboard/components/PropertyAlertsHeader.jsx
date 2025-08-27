import React from 'react';
import {
  Box,
  Typography,
  Button,
  Badge,
  useMediaQuery,
  useTheme,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material';
import {
  Notifications as NotificationsIcon,
  FilterList as FilterIcon,
  Add as AddIcon,
  GridView as GridIcon,
  PlayArrow as PlayIcon,
  Thermostat as HeatmapIcon,
} from '@mui/icons-material';

const PropertyAlertsHeader = () => {
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
      flexWrap: { xs: 'wrap', sm: 'nowrap' },
      gap: { xs: 2, sm: 0 },
    }}>
      {/* Left Side - Title and Count */}
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        flex: { xs: '1 1 100%', sm: '1 1 auto' },
        minWidth: 0,
      }}>
        <NotificationsIcon sx={{ 
          color: '#0A3A7D', 
          fontSize: { xs: 20, sm: 24 },
          mr: { xs: 1, sm: 1.5 },
          flexShrink: 0,
        }} />
        <Box sx={{ display: 'flex', alignItems: 'center', minWidth: 0 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: '#0A3A7D',
              fontSize: { xs: '1.1rem', sm: '1.3rem' },
              fontFamily: '"Axiforma", sans-serif',
              lineHeight: 1.2,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              flexWrap: 'wrap',
            }}
          >
            <span>Property Alerts</span>
            <Badge
              badgeContent={8}
              sx={{
                '& .MuiBadge-badge': {
                  backgroundColor: '#E6EDFF',
                  color: '#0A3A7D',
                  fontSize: { xs: '0.6rem', sm: '0.7rem' },
                  fontWeight: 600,
                  minWidth: { xs: 16, sm: 18 },
                  height: { xs: 16, sm: 18 },
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
        flex: { xs: '1 1 100%', sm: '0 0 auto' },
        justifyContent: { xs: 'space-between', sm: 'flex-end' },
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

        {/* Create Alert Button */}
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
          {isMobile ? 'Create' : 'Create Alert'}
        </Button>
      </Box>
    </Box>
  );
};

export default PropertyAlertsHeader;
