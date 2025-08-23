import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { BarChart as BarChartIcon, Handshake as HandshakeIcon } from '@mui/icons-material';

const MarketInsight = () => {
  const transactions = [
    {
      type: '3 Bedroom Apartment',
      location: 'Victoria Island, Lagos',
      price: 'N100M',
    },
    {
      type: '2 Bedroom Penthouse',
      location: 'Ikoyi Lagos',
      price: 'N82M',
    },
    {
      type: '4 Bedroom Duplex',
      location: 'Lekki Phase Lagos',
      price: 'N95M',
    },
  ];

  return (
    <Box>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 600,
          mb: 3,
          color: '#153C65',
          fontFamily: '"Lora", serif',
          fontSize: { xs: '1.3rem', sm: '1.5rem', md: '1.8rem' },
        }}
      >
        Market Insight
      </Typography>

      <Grid container spacing={3}>
        {/* Price Trends Chart */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: { xs: 2, sm: 3 },
              borderRadius: 2,
              height: '100%',
              position: 'relative',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: '#153C65',
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: { xs: '1rem', sm: '1.1rem' },
                }}
              >
                Price Trends in Lagos
              </Typography>
              <BarChartIcon sx={{ color: '#153C65', fontSize: 20 }} />
            </Box>

            {/* Chart Placeholder */}
            <Box
              sx={{
                height: 200,
                backgroundColor: '#f8f9fa',
                borderRadius: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px dashed #ccc',
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: '#666',
                  fontFamily: '"Inter", sans-serif',
                }}
              >
                Price Trends Chart
              </Typography>
            </Box>

            {/* Legend */}
            <Box sx={{ display: 'flex', gap: 2, mt: 2, flexWrap: 'wrap' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box sx={{ width: 12, height: 12, backgroundColor: '#4CAF50', borderRadius: '50%' }} />
                <Typography
                  variant="caption"
                  sx={{
                    color: '#666',
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '0.75rem',
                  }}
                >
                  Victoria Island
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box sx={{ width: 12, height: 12, backgroundColor: '#2196F3', borderRadius: '50%' }} />
                <Typography
                  variant="caption"
                  sx={{
                    color: '#666',
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '0.75rem',
                  }}
                >
                  Ikoyi
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box sx={{ width: 12, height: 12, backgroundColor: '#FFC107', borderRadius: '50%' }} />
                <Typography
                  variant="caption"
                  sx={{
                    color: '#666',
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '0.75rem',
                  }}
                >
                  Lagos
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>

        {/* Recent Transactions */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: { xs: 2, sm: 3 },
              borderRadius: 2,
              height: '100%',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: '#153C65',
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: { xs: '1rem', sm: '1.1rem' },
                }}
              >
                Recent Transactions
              </Typography>
              <HandshakeIcon sx={{ color: '#153C65', fontSize: 20 }} />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {transactions.map((transaction, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    p: 2,
                    backgroundColor: '#f8f9fa',
                    borderRadius: 1,
                    border: '1px solid #e0e0e0',
                  }}
                >
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      backgroundColor: '#153C65',
                      borderRadius: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Box
                      sx={{
                        width: 16,
                        height: 16,
                        backgroundColor: 'white',
                        borderRadius: '50%',
                      }}
                    />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 600,
                        color: '#153C65',
                        fontFamily: '"Poppins", sans-serif',
                        fontSize: { xs: '0.8rem', sm: '0.9rem' },
                      }}
                    >
                      {transaction.type}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: '#666',
                        fontFamily: '"Inter", sans-serif',
                        fontSize: '0.75rem',
                      }}
                    >
                      {transaction.location}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 700,
                      color: '#4CAF50',
                      fontFamily: '"Lora", serif',
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                    }}
                  >
                    {transaction.price}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MarketInsight;
