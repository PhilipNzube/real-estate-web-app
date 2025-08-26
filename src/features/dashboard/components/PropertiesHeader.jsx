import React, { useState } from 'react';
import {
  Box,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from '@mui/material';

const PropertiesHeader = () => {
  const [sortBy, setSortBy] = useState('newest');

  return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 2,
      mb: 3
    }}>
      <Box>
        <Typography
          variant="h4"
          sx={{
            color: '#153C65',
            fontWeight: 700,
            fontFamily: '"Poppins", sans-serif',
            fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' },
            mb: 0.5,
          }}
        >
          Available Properties
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#666',
            fontFamily: '"Inter", sans-serif',
            fontSize: { xs: '0.9rem', sm: '1rem' },
            fontWeight: 500,
          }}
        >
          Showing 1 - 9 of 230 properties
        </Typography>
      </Box>

      {/* Sort By */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography
          sx={{
            color: '#666',
            fontFamily: '"Inter", sans-serif',
            fontSize: '0.9rem',
            fontWeight: 500,
          }}
        >
          Sort By:
        </Typography>
        <FormControl size="small" sx={{ minWidth: 120 }}>
          <Select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            displayEmpty
            sx={{
              fontFamily: '"Inter", sans-serif',
              fontSize: '0.9rem',
              fontWeight: 500,
              '& .MuiSelect-select': {
                py: 1,
              },
            }}
          >
            <MenuItem value="newest">Newest</MenuItem>
            <MenuItem value="oldest">Oldest</MenuItem>
            <MenuItem value="price-low">Price: Low to High</MenuItem>
            <MenuItem value="price-high">Price: High to Low</MenuItem>
            <MenuItem value="popular">Most Popular</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default PropertiesHeader;
