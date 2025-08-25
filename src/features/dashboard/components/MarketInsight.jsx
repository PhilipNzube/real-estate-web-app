import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { BarChart as BarChartIcon, Handshake as HandshakeIcon } from '@mui/icons-material';
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

      <Box sx={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: { xs: 1.5, sm: 2, md: 3 },
        width: '100%',
        overflow: 'hidden',
        maxWidth: '100%',
        boxSizing: 'border-box'
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
        </Box>
      </Box>
    </Box>
  );
};

export default MarketInsight;
