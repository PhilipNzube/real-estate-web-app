import React from 'react';
import {
  Box,
  Typography,
  Button,
  Chip,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  Favorite as FavoriteIcon,
  KeyboardArrowDown as ArrowDownIcon,
  Add as AddIcon,
} from '@mui/icons-material';

const SavedPropertiesHeader = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      flexWrap: { xs: 'wrap', sm: 'nowrap' },
      gap: { xs: 1.5, sm: 2 },
      mb: { xs: 2, sm: 3 },
      flexDirection: { xs: 'column', sm: 'row' },
    }}>
      {/* Left Side - Title and Badge */}
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: { xs: 1, sm: 1.5 },
        flexWrap: 'wrap',
        width: { xs: '100%', sm: 'auto' },
        justifyContent: { xs: 'center', sm: 'flex-start' }
      }}>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: { xs: 0.75, sm: 1 }
        }}>
          <FavoriteIcon sx={{ 
            color: '#0A3A7D', 
            fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' }
          }} />
          <Typography
            variant="h4"
            sx={{
              color: '#0A3A7D',
              fontWeight: 700,
              fontFamily: '"Axiforma", sans-serif',
              fontSize: { xs: '1.4rem', sm: '1.6rem', md: '1.8rem', lg: '2rem' },
              lineHeight: 1.2,
            }}
          >
            Saved Properties
          </Typography>
        </Box>
        
        <Chip
          label="15"
          sx={{
            backgroundColor: '#E6EDFF',
            color: '#0A3A7D',
            borderRadius: 20,
            fontFamily: '"Axiforma", sans-serif',
            fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
            fontWeight: 600,
            height: { xs: 28, sm: 32, md: 36 },
          }}
        />
      </Box>

      {/* Right Side - Action Buttons */}
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: { xs: 1, sm: 1.5 },
        flexWrap: 'wrap',
        width: { xs: '100%', sm: 'auto' },
        justifyContent: { xs: 'center', sm: 'flex-end' }
      }}>
        <Button
          variant="outlined"
          endIcon={<ArrowDownIcon color="#0A3A7D" />}
          sx={{
            borderColor: '#165DC2',
            color: '#0A3A7D',
            backgroundColor: 'white',
            borderRadius: 5,
            px: { xs: 1.5, sm: 2, md: 3 },
            py: { xs: 0.75, sm: 1, md: 1.5 },
            fontFamily: '"Axifo", sans-serif',
            fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' },
            fontWeight: 600,
            textTransform: 'none',
            whiteSpace: 'nowrap',
            '&:hover': {
              borderColor: '#0d2b4a',
              backgroundColor: 'rgba(21, 60, 101, 0.04)',
            },
          }}
        >
          {isMobile ? 'Filter' : 'Filter'}
        </Button>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            backgroundColor: '#0A3A7D',
            color: 'white',
            borderRadius:5,
            px: { xs: 1.5, sm: 2, md: 3 },
            py: { xs: 0.75, sm: 1, md: 1.5 },
            fontFamily: '"Axiforma", sans-serif',
            fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' },
            fontWeight: 600,
            textTransform: 'none',
            whiteSpace: 'nowrap',
            '&:hover': {
              backgroundColor: '#0d2b4a',
            },
          }}
        >
          {isMobile ? 'Add' : 'Add Property'}
        </Button>
      </Box>
    </Box>
  );
};

export default SavedPropertiesHeader;
