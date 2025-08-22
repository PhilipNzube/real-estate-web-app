import React from 'react';
import {
  Box,
  Typography,
} from '@mui/material';
import { Check as CheckIcon } from '@mui/icons-material';

const ProgressBar = ({ currentStep = 1 }) => {
  const steps = [
    { number: 1, title: 'Account Setup', active: currentStep === 1, completed: currentStep > 1 },
    { number: 2, title: 'Verification', active: currentStep === 2, completed: currentStep > 2 },
    { number: 3, title: 'Preferences', active: currentStep === 3, completed: currentStep > 3 },
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#0A3A7D',
        py: { xs: 2, sm: 2.5, md: 3 },
        px: { xs: 2, sm: 3, md: 4 },
        width: '100%',
      }}
    >
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: { xs: 2, sm: 0 }
      }}>
        <Typography
          variant="h5"
          sx={{
            color: 'white',
            fontWeight: 700,
            fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
            fontFamily: '"Poppins", sans-serif',
            textAlign: { xs: 'center', sm: 'left' }
          }}
        >
          {currentStep === 1 ? 'Account Setup' : currentStep === 2 ? 'Account Verification' : 'Set Your Preferences'}
        </Typography>
        
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: { xs: 1, sm: 2 },
          flexWrap: { xs: 'wrap', sm: 'nowrap' },
          justifyContent: { xs: 'center', sm: 'flex-end' }
        }}>
          {steps.map((step, index) => (
            <Box key={step.number} sx={{ 
              display: 'flex', 
              alignItems: 'center',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: { xs: 0.5, sm: 1 }
            }}>
              {/* Step Circle */}
              <Box
                sx={{
                  width: { xs: 32, sm: 36, md: 40 },
                  height: { xs: 32, sm: 36, md: 40 },
                  borderRadius: '50%',
                  backgroundColor: step.completed ? '#DFC14C' : step.active ? 'white' : '#FFFFFF33',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: step.completed ? 'white' : step.active ? '#153C65' : '#FFFFFF',
                  fontWeight: 700,
                  fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                  fontFamily: '"Poppins", sans-serif',
                  transition: 'all 0.3s ease',
                }}
              >
                {step.completed ? <CheckIcon sx={{ fontSize: { xs: 16, sm: 18, md: 20 } }} /> : step.number}
              </Box>
              
              {/* Step Title */}
              <Typography
                sx={{
                  color: step.completed ? 'white' : step.active ? 'white' : 'rgba(255,255,255,0.7)',
                  fontWeight: 500,
                  fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' },
                  ml: { xs: 0, sm: 1 },
                  fontFamily: '"Poppins", sans-serif',
                  textAlign: { xs: 'center', sm: 'left' },
                  display: { xs: 'none', sm: 'block' }
                }}
              >
                {step.title}
              </Typography>
              
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <Box
                  sx={{
                    width: { xs: 40, sm: 50, md: 60 },
                    height: 2,
                    backgroundColor: step.completed ? '#DFC14C' : step.active ? 'white' : 'rgba(255,255,255,0.3)',
                    mx: { xs: 1, sm: 2 },
                    transition: 'all 0.3s ease',
                    display: { xs: 'none', sm: 'block' }
                  }}
                />
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ProgressBar;
