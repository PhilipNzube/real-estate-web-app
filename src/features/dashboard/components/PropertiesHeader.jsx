import React, { useState } from 'react';
import {
  Box,
  Typography,
  FormControl,
  Select,
  MenuItem,
  useMediaQuery,
  useTheme,
} from '@mui/material';

const PropertiesHeader = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  
  const [sortBy, setSortBy] = useState('newest');

  return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: { xs: 'flex-start', sm: 'center' },
      flexWrap: { xs: 'wrap', sm: 'nowrap' },
      gap: { xs: 1.5, sm: 2 },
      mb: { xs: 2, sm: 3 },
      flexDirection: { xs: 'column', sm: 'row' },
    }}>
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Typography
          variant="h4"
          sx={{
            color: '#153C65',
            fontWeight: 700,
            fontFamily: '"Axiforma", sans-serif',
            fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem', lg: '1.8rem' },
            mb: { xs: 0.5, sm: 0.5 },
            lineHeight: 1.2,
          }}
        >
          Available Properties
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#666',
            fontFamily: '"Axi", sans-serif',
            fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem', lg: '1rem' },
            fontWeight: 500,
            lineHeight: 1.3,
          }}
        >
          Showing 1 - 9 of 230 properties
        </Typography>
      </Box>

      {/* Sort By */}
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: { xs: 0.5, sm: 1 },
        minWidth: { xs: '100%', sm: 'auto' },
        justifyContent: { xs: 'space-between', sm: 'flex-end' },
      }}>
        <Typography
          sx={{
            color: '#333B4D',
            fontFamily: '"Axiforma", sans-serif',
            fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' },
            fontWeight: 500,
            whiteSpace: 'nowrap',
          }}
        >
          Sort By:
        </Typography>
        <FormControl 
          size={isMobile ? "small" : "medium"} 
          sx={{ 
            minWidth: { xs: 120, sm: 140, md: 160 },
            '& .MuiSelect-select': {
              color: '#00000080',
              py: { xs: 0.75, sm: 1 },
              fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' },
            },
          }}
        >
          <Select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            displayEmpty
            sx={{
              fontFamily: '"Axi", sans-serif',
              fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' },
              fontWeight: 500,
              color: '#00000080',
              '& .MuiSelect-select': {
                py: { xs: 0.75, sm: 1 },
              },
            }}
          >
            <MenuItem value="newest" sx={{ color: '#333', fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' } }}>
              Newest
            </MenuItem>
            <MenuItem value="oldest" sx={{ color: '#333', fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' } }}>
              Oldest
            </MenuItem>
            <MenuItem value="price-low" sx={{ color: '#333', fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' } }}>
              Price: Low to High
            </MenuItem>
            <MenuItem value="price-high" sx={{ color: '#333', fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' } }}>
              Price: High to Low
            </MenuItem>
            <MenuItem value="popular" sx={{ color: '#333', fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' } }}>
              Most Popular
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default PropertiesHeader;
