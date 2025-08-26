import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  KeyboardArrowDown as ArrowDownIcon,
  FileDownload as ExportIcon,
  Compare as CompareIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';

const SavedPropertiesActionBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [selectAll, setSelectAll] = useState(false);

  return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      flexWrap: { xs: 'wrap', sm: 'nowrap' },
      gap: { xs: 1, sm: 1.5 },
      mb: { xs: 2, sm: 3 },
      p: { xs: 1.5, sm: 2 },
      backgroundColor: 'white',
      borderRadius: 2,
      border: '1px solid #e0e0e0',
    }}>
      {/* Left Side - Select All and Add to Collection */}
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center',
        gap: { xs: 1, sm: 1.5 },
        flexWrap: 'wrap',
        width: { xs: '100%', sm: 'auto' },
        justifyContent: { xs: 'center', sm: 'flex-start' }
      }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={selectAll}
              onChange={(e) => setSelectAll(e.target.checked)}
              sx={{
                color: '#153C65',
                '&.Mui-checked': {
                  color: '#153C65',
                },
              }}
            />
          }
          label={
            <Box sx={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: { xs: '0.8rem', sm: '0.9rem' },
              fontWeight: 500,
              color: '#333',
            }}>
              Select All
            </Box>
          }
          sx={{ margin: 0 }}
        />

        <Button
          variant="outlined"
          endIcon={<ArrowDownIcon />}
          sx={{
            borderColor: '#e0e0e0',
            color: '#153C65',
            backgroundColor: '#f8f9fa',
            borderRadius: 2,
            px: { xs: 1.5, sm: 2 },
            py: { xs: 0.75, sm: 1 },
            fontFamily: '"Poppins", sans-serif',
            fontSize: { xs: '0.7rem', sm: '0.8rem' },
            fontWeight: 500,
            textTransform: 'none',
            whiteSpace: 'nowrap',
            '&:hover': {
              borderColor: '#153C65',
              backgroundColor: 'rgba(21, 60, 101, 0.04)',
            },
          }}
        >
          {isMobile ? 'Add to' : 'Add to Collection'}
        </Button>
      </Box>

      {/* Right Side - Action Buttons */}
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center',
        gap: { xs: 0.75, sm: 1 },
        flexWrap: 'wrap',
        width: { xs: '100%', sm: 'auto' },
        justifyContent: { xs: 'center', sm: 'flex-end' }
      }}>
        <Button
          variant="outlined"
          startIcon={<ExportIcon />}
          sx={{
            borderColor: '#e0e0e0',
            color: '#153C65',
            backgroundColor: '#f8f9fa',
            borderRadius: 2,
            px: { xs: 1.5, sm: 2 },
            py: { xs: 0.75, sm: 1 },
            fontFamily: '"Poppins", sans-serif',
            fontSize: { xs: '0.7rem', sm: '0.8rem' },
            fontWeight: 500,
            textTransform: 'none',
            whiteSpace: 'nowrap',
            '&:hover': {
              borderColor: '#153C65',
              backgroundColor: 'rgba(21, 60, 101, 0.04)',
            },
          }}
        >
          {isMobile ? 'Export' : 'Export'}
        </Button>

        <Button
          variant="outlined"
          startIcon={<CompareIcon />}
          sx={{
            borderColor: '#e0e0e0',
            color: '#153C65',
            backgroundColor: '#fff3cd',
            borderRadius: 2,
            px: { xs: 1.5, sm: 2 },
            py: { xs: 0.75, sm: 1 },
            fontFamily: '"Poppins", sans-serif',
            fontSize: { xs: '0.7rem', sm: '0.8rem' },
            fontWeight: 500,
            textTransform: 'none',
            whiteSpace: 'nowrap',
            '&:hover': {
              borderColor: '#153C65',
              backgroundColor: '#ffeaa7',
            },
          }}
        >
          {isMobile ? 'Compare' : 'Compare'}
        </Button>

        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          sx={{
            borderColor: '#e0e0e0',
            color: '#d32f2f',
            backgroundColor: '#ffebee',
            borderRadius: 2,
            px: { xs: 1.5, sm: 2 },
            py: { xs: 0.75, sm: 1 },
            fontFamily: '"Poppins", sans-serif',
            fontSize: { xs: '0.7rem', sm: '0.8rem' },
            fontWeight: 500,
            textTransform: 'none',
            whiteSpace: 'nowrap',
            '&:hover': {
              borderColor: '#d32f2f',
              backgroundColor: '#ffcdd2',
            },
          }}
        >
          {isMobile ? 'Remove' : 'Remove'}
        </Button>
      </Box>
    </Box>
  );
};

export default SavedPropertiesActionBar;
