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
      backgroundColor: 'transparent',
      borderRadius: 2,
      border: '1px solid #E2EDFF',
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
                color: '#E2EDFF',
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
              color: '#596580',
            }}>
              Select All
            </Box>
          }
          sx={{ margin: 0 }}
        />

        <Button
          variant="outlined"
          endIcon={<ArrowDownIcon color="#596580" />}
          sx={{
            borderColor: '#E2EDFF',
            color: '#596580',
            backgroundColor: 'transparent',
            borderRadius: 4,
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
          startIcon={<ExportIcon color="#596580" />}
          sx={{
            borderColor: '#E2EDFF',
            color: '#596580',
            backgroundColor: '#F9FAFF',
            borderRadius: 4,
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
          startIcon={<CompareIcon color="#072C5F" />}
          sx={{
            borderColor: 'transparent',
            color: '#072C5F',
            backgroundColor: '#FFE9B8',
            borderRadius: 4,
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
          startIcon={<DeleteIcon color="#E94B7E" />}
          sx={{
            borderColor: 'transaparent',
            color: '#E94B7E',
            backgroundColor: '#FFE6ED',
            borderRadius: 4,
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
