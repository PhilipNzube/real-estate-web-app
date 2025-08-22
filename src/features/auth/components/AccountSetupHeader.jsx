import React from 'react';
import {
  Box,
  Typography,
  Button,
  AppBar,
  Toolbar,
} from '@mui/material';
import { Help as HelpIcon } from '@mui/icons-material';
import NLHLogo from '../../../shared/components/icons/NLHLogo';

const AccountSetupHeader = () => {
  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: 'white',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        width: '100%',
      }}
    >
      <Toolbar sx={{ 
        justifyContent: 'space-between',
        px: { xs: 2, sm: 3, md: 4 },
        py: { xs: 1, sm: 1.5 },
        minHeight: { xs: 64, sm: 70, md: 80 }
      }}>
                            {/* Logo */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box
                        sx={{
                          width: { xs: 32, sm: 36, md: 40 },
                          height: { xs: 32, sm: 36, md: 40 },
                          backgroundColor: '#DFC14C',
                          borderRadius: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mr: { xs: 1.5, sm: 2 },
                        }}
                      >
                        <NLHLogo 
                          width={20}
                          height={26}
                          color="#153C65"
                        />
                      </Box>
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#153C65',
              fontWeight: 700,
              fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
              fontFamily: '"Lora", serif',
              display: { xs: 'none', sm: 'block' }
            }}
          >
            Naija Luxury Homes
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#153C65',
              fontWeight: 700,
              fontSize: '1rem',
              fontFamily: '"Lora", serif',
              display: { xs: 'block', sm: 'none' }
            }}
          >
            NLH
          </Typography>
        </Box>

        {/* Help Button */}
        <Button
          startIcon={<HelpIcon />}
          sx={{
            backgroundColor: '#0A3A7D0D',
            color: '#0A3A7D',
            borderRadius: 2,
            px: { xs: 2, sm: 2.5, md: 3 },
            py: { xs: 0.75, sm: 1 },
            fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 500,
            minWidth: { xs: 'auto', sm: 'auto' },
            '&:hover': {
              backgroundColor: '#153C65',
              color: 'white',
              borderColor: '#153C65',
            },
          }}
        >
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            Need Help?
          </Box>
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            Help
          </Box>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default AccountSetupHeader;
