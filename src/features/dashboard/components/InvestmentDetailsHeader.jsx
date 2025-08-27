import React from 'react';
import {
  Box,
  Typography,
  Chip,
  Paper,
} from '@mui/material';
import {
  Business as BusinessIcon,
  Verified as VerifiedIcon,
  LocationOn as LocationIcon,
} from '@mui/icons-material';

const InvestmentDetailsHeader = ({ investment }) => {
  return (
    <Box sx={{ mb: { xs: 3, sm: 4, md: 5 } }}>
      {/* Breadcrumbs */}
      <Box sx={{ mb: { xs: 2, sm: 3 } }}>
        <Typography
          variant="body2"
          sx={{
            color: '#808080',
            fontFamily: '"Axiforma", sans-serif',
            fontSize: { xs: '0.8rem', sm: '0.9rem' },
            fontWeight: 500,
          }}
        >
          Investment | <span style={{ color: '#000', fontWeight: 600 }}>{investment.title}</span>
        </Typography>
      </Box>

      {/* Main Content */}
      <Paper
        sx={{
          borderRadius: 3,
          overflow: 'hidden',
          boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
        }}
      >
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
        }}>
          {/* Property Image */}
          <Box sx={{
            width: { xs: '100%', lg: '50%' },
            height: { xs: 250, sm: 300, lg: 400 },
            position: 'relative',
            overflow: 'hidden',
          }}>
            <Box
              component="img"
              src={investment.image}
              alt={investment.title}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          </Box>

          {/* Content */}
          <Box sx={{
            width: { xs: '100%', lg: '50%' },
            p: { xs: 2, sm: 3, md: 4 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            {/* Top Section */}
            <Box>
              {/* Badges */}
              <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                <Chip
                  icon={<BusinessIcon />}
                  label={investment.category}
                  sx={{
                    backgroundColor: '#9c27b0',
                    color: 'white',
                    fontSize: { xs: '0.7rem', sm: '0.8rem' },
                    fontWeight: 600,
                    '& .MuiChip-icon': {
                      color: 'white',
                    },
                  }}
                />
                <Chip
                  icon={<VerifiedIcon color="#10B981" />}
                  label="Verified"
                  sx={{
                    backgroundColor: 'white',
                    color: '#10B981',
                    fontSize: { xs: '0.7rem', sm: '0.8rem' },
                    fontWeight: 600,
                    '& .MuiChip-icon': {
                      color: '#10B981',
                    },
                  }}
                />
              </Box>

              {/* Title */}
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: '#0A3A7D',
                  fontFamily: '"Axiforma", sans-serif',
                  fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' },
                  mb: 1,
                  lineHeight: 1.2,
                }}
              >
                {investment.title}
              </Typography>

              {/* Location */}
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocationIcon sx={{ fontSize: 20, color: '#3B82F6', mr: 1 }} />
                <Typography
                  variant="body1"
                  sx={{
                    color: '#666',
                    fontFamily: '"Axiforma", sans-serif',
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    fontWeight: 500,
                  }}
                >
                  {investment.location}
                </Typography>
              </Box>

              {/* Description */}
              <Typography
                variant="body2"
                sx={{
                  color: '#666',
                  fontFamily: '"Axiforma", sans-serif',
                  fontSize: { xs: '0.85rem', sm: '0.9rem' },
                  lineHeight: 1.6,
                  mb: 3,
                }}
              >
                {investment.description}
              </Typography>
            </Box>

            {/* Key Metrics */}
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: { xs: 2, sm: 3 },
            }}>
              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#666',
                    fontFamily: '"Axiforma", sans-serif',
                    fontSize: { xs: '0.75rem', sm: '0.8rem' },
                    fontWeight: 500,
                    mb: 0.5,
                  }}
                >
                  Expected ROI
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#10B981',
                    fontFamily: '"Axiforma", sans-serif',
                    fontSize: { xs: '1rem', sm: '1.1rem' },
                    fontWeight: 700,
                  }}
                >
                  {investment.expectedROI}
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#666',
                    fontFamily: '"Axiforma", sans-serif',
                    fontSize: { xs: '0.75rem', sm: '0.8rem' },
                    fontWeight: 500,
                    mb: 0.5,
                  }}
                >
                  Lock Period
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#333',
                    fontFamily: '"Axiforma", sans-serif',
                    fontSize: { xs: '1rem', sm: '1.1rem' },
                    fontWeight: 700,
                  }}
                >
                  {investment.lockPeriod}
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#666',
                    fontFamily: '"Axiforma", sans-serif',
                    fontSize: { xs: '0.75rem', sm: '0.8rem' },
                    fontWeight: 500,
                    mb: 0.5,
                  }}
                >
                  Current Investors
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#333',
                    fontFamily: '"Axiforma", sans-serif',
                    fontSize: { xs: '1rem', sm: '1.1rem' },
                    fontWeight: 700,
                  }}
                >
                  {investment.currentInvestors}
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#666',
                    fontFamily: '"Axiforma", sans-serif',
                    fontSize: { xs: '0.75rem', sm: '0.8rem' },
                    fontWeight: 500,
                    mb: 0.5,
                  }}
                >
                  Completion Date
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#333',
                    fontFamily: '"Axiforma", sans-serif',
                    fontSize: { xs: '1rem', sm: '1.1rem' },
                    fontWeight: 700,
                  }}
                >
                  {investment.completionDate}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default InvestmentDetailsHeader;
