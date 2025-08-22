import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
} from '@mui/material';
import { CalendarToday as CalendarIcon } from '@mui/icons-material';

const PersonalInfoForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: 'johndoe@example.com',
    phone: '',
    dateOfBirth: '',
    nin: '',
  });

  const handleChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };

  return (
    <Box>
      {/* Personal Information Section */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Box
            sx={{
              width: 4,
              height: 24,
              backgroundColor: '#153C65',
              borderRadius: 2,
              mr: 2,
            }}
          />
          <Typography
            variant="h5"
            sx={{
              color: '#153C65',
              fontWeight: 700,
              fontFamily: '"Poppins", sans-serif',
            }}
          >
            Personal Information
          </Typography>
        </Box>
        
        <Typography
          variant="body2"
          sx={{
            color: '#666',
            mb: 3,
            fontSize: '0.9rem',
            fontFamily: '"Inter", sans-serif',
          }}
        >
          Your basic contact and personal details
        </Typography>

        {/* Form Fields */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {/* Name Fields */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField
              fullWidth
              label="First Name *"
              value={formData.firstName}
              onChange={handleChange('firstName')}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  '& fieldset': {
                    borderColor: '#ddd',
                  },
                  '&:hover fieldset': {
                    borderColor: '#153C65',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#153C65',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: '#666',
                  fontFamily: '"Inter", sans-serif',
                },
              }}
            />
            <TextField
              fullWidth
              label="Last Name *"
              value={formData.lastName}
              onChange={handleChange('lastName')}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  '& fieldset': {
                    borderColor: '#ddd',
                  },
                  '&:hover fieldset': {
                    borderColor: '#153C65',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#153C65',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: '#666',
                  fontFamily: '"Inter", sans-serif',
                },
              }}
            />
          </Box>

          {/* Email Field */}
          <TextField
            fullWidth
            label="Email Address *"
            value={formData.email}
            onChange={handleChange('email')}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
                '& fieldset': {
                  borderColor: '#ddd',
                },
                '&:hover fieldset': {
                  borderColor: '#153C65',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#153C65',
                },
              },
              '& .MuiInputLabel-root': {
                color: '#666',
                fontFamily: '"Inter", sans-serif',
              },
            }}
          />

          {/* Phone Number Field */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            <TextField
              label=""
              value="+234"
              sx={{
                width: 100,
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  backgroundColor: '#f8f9fa',
                  '& fieldset': {
                    borderColor: '#ddd',
                  },
                },
                '& .MuiInputBase-input': {
                  textAlign: 'center',
                  fontWeight: 600,
                  color: '#153C65',
                },
              }}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              fullWidth
              label="Phone Number *"
              value={formData.phone}
              onChange={handleChange('phone')}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  '& fieldset': {
                    borderColor: '#ddd',
                  },
                  '&:hover fieldset': {
                    borderColor: '#153C65',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#153C65',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: '#666',
                  fontFamily: '"Inter", sans-serif',
                },
              }}
            />
          </Box>

          {/* Date of Birth Field */}
          <TextField
            fullWidth
            label="Date of Birth *"
            type="date"
            value={formData.dateOfBirth}
            onChange={handleChange('dateOfBirth')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <CalendarIcon sx={{ color: '#666' }} />
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
                '& fieldset': {
                  borderColor: '#ddd',
                },
                '&:hover fieldset': {
                  borderColor: '#153C65',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#153C65',
                },
              },
              '& .MuiInputLabel-root': {
                color: '#666',
                fontFamily: '"Inter", sans-serif',
              },
            }}
          />
        </Box>
      </Box>

      {/* Identity Information Section */}
      <Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Box
            sx={{
              width: 4,
              height: 24,
              backgroundColor: '#153C65',
              borderRadius: 2,
              mr: 2,
            }}
          />
          <Typography
            variant="h5"
            sx={{
              color: '#153C65',
              fontWeight: 700,
              fontFamily: '"Poppins", sans-serif',
            }}
          >
            Identity Information
          </Typography>
        </Box>
        
        <Typography
          variant="body2"
          sx={{
            color: '#666',
            mb: 3,
            fontSize: '0.9rem',
            fontFamily: '"Inter", sans-serif',
          }}
        >
          Your government-issued identification details
        </Typography>

        {/* NIN Field */}
        <TextField
          fullWidth
          label="National Identification Number (NIN) *"
          value={formData.nin}
          onChange={handleChange('nin')}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 2,
              '& fieldset': {
                borderColor: '#ddd',
              },
              '&:hover fieldset': {
                borderColor: '#153C65',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#153C65',
              },
            },
            '& .MuiInputLabel-root': {
              color: '#666',
              fontFamily: '"Inter", sans-serif',
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default PersonalInfoForm;
