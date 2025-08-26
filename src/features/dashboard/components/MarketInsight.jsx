import React from 'react';
import { Box, Typography, Paper, Grid, Divider } from '@mui/material';
import { BarChart as BarChartIcon, Handshake as HandshakeIcon, Home as HomeIcon } from '@mui/icons-material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

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

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Victoria Island',
        data: [75, 78, 82, 85, 88, 92, 95, 98, 96, 94, 97, 100],
        borderColor: '#4CAF50',
        backgroundColor: 'rgba(76, 175, 80, 0.1)',
        tension: 0.4,
        pointBackgroundColor: '#4CAF50',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 4,
      },
      {
        label: 'Ikoyi',
        data: [65, 68, 72, 75, 78, 82, 85, 88, 86, 84, 87, 90],
        borderColor: '#2196F3',
        backgroundColor: 'rgba(33, 150, 243, 0.1)',
        tension: 0.4,
        pointBackgroundColor: '#2196F3',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 4,
      },
      {
        label: 'Lagos',
        data: [55, 58, 62, 65, 68, 72, 75, 78, 76, 74, 77, 80],
        borderColor: '#FFC107',
        backgroundColor: 'rgba(255, 193, 7, 0.1)',
        tension: 0.4,
        pointBackgroundColor: '#FFC107',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: '#153C65',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: true,
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: N${context.parsed.y}M`;
          }
        }
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 50,
        max: 100,
        ticks: {
          callback: function(value) {
            return `N${value}M`;
          },
          color: '#666',
          font: {
            size: 12,
            family: '"Inter", sans-serif',
          },
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
          drawBorder: false,
        },
      },
      x: {
        ticks: {
          color: '#666',
          font: {
            size: 12,
            family: '"Inter", sans-serif',
          },
        },
        grid: {
          display: false,
        },
      },
    },
    elements: {
      point: {
        hoverRadius: 6,
      },
    },
  };

  return (
    <Box sx={{ mt: 6 }}>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 500,
          mb: 3,
          color: '#333B4D',
            fontFamily: '"Axiforma", serif',
            fontSize: { xs: '1.2rem', sm: '1.2rem', md: '1.3rem' },
        }}
      >
        Market Insight
      </Typography>

      <Box sx={{ 
        display: 'flex', 
        flexDirection: {xs: 'column', sm: 'column', md: 'column', lg: 'row'},
        //flexWrap: 'wrap', 
        gap: { xs: 1.5, sm: 2, md: 3 },
        width: '100%',
        overflowY: 'hidden',
        overflowX: 'auto',
        maxWidth: '100%',
        boxSizing: 'border-box',
        '&::-webkit-scrollbar': {
          height: '6px',
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: '#f1f1f1',
          borderRadius: '3px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#c1c1c1',
          borderRadius: '3px',
          '&:hover': {
            backgroundColor: '#a8a8a8',
          },
        },
      }}>
        {/* Price Trends Chart */}
        <Box sx={{ 
          width: { xs: '100%', lg: 'calc(50% - 8px)' },
          minWidth: { xs: '100%', lg: 380 },
          maxWidth: { xs: '100%', lg: 'calc(50% - 8px)' },
          flexShrink: 0,
          overflow: 'hidden',
          boxSizing: 'border-box'
        }}>
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

            {/* Chart */}
            <Box
              sx={{
                height: 200,
                position: 'relative',
              }}
            >
              <Line data={chartData} options={chartOptions} />
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
        </Box>

        {/* Recent Transactions */}
        <Box sx={{ 
          width: { xs: '100%', lg: 'calc(50% - 8px)' },
          minWidth: { xs: '100%', lg: 380 },
          maxWidth: { xs: '100%', lg: 'calc(50% - 8px)' },
          flexShrink: 0,
          overflow: 'hidden',
          boxSizing: 'border-box'
        }}>
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
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  backgroundColor: '#f3f4f6',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <HandshakeIcon sx={{ color: '#374151', fontSize: 18 }} />
              </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              {transactions.map((transaction, index) => (
                <React.Fragment key={index}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                      py: 2,
                      px: 0,
                  }}
                >
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                        backgroundColor: '#dbeafe',
                        borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                      <HomeIcon sx={{ color: '#1e40af', fontSize: 16 }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 600,
                          color: '#374151',
                          fontFamily: '"Inter", sans-serif',
                        fontSize: { xs: '0.8rem', sm: '0.9rem' },
                          lineHeight: 1.4,
                      }}
                    >
                      {transaction.type}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                          color: '#6b7280',
                        fontFamily: '"Inter", sans-serif',
                        fontSize: '0.75rem',
                          lineHeight: 1.4,
                      }}
                    >
                      {transaction.location}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 700,
                        color: '#10b981',
                        fontFamily: '"Inter", sans-serif',
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                    }}
                  >
                    {transaction.price}
                  </Typography>
                </Box>
                  {index < transactions.length - 1 && (
                    <Divider sx={{ borderColor: '#e5e7eb' }} />
                  )}
                </React.Fragment>
              ))}
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default MarketInsight;
