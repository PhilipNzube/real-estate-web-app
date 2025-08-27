import React, { useState } from 'react';
import {
  Box,
  Typography,
  Slider,
  TextField,
  Paper,
} from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts';

const InvestmentCalculator = () => {
  const [investmentAmount, setInvestmentAmount] = useState(500000);
  const [sliderValue, setSliderValue] = useState(2000000);

  // Calculate ownership percentage and returns based on investmentAmount (not sliderValue)
  const ownershipPercentage = ((investmentAmount / 80000000) * 100).toFixed(3);
  const annualReturns = (investmentAmount * 0.185).toFixed(0);

  // Chart data for projected returns
  const chartData = [
    { quarter: 'Q1', quarterly: 23000, cumulative: 23000 },
    { quarter: 'Q2', quarterly: 24000, cumulative: 47000 },
    { quarter: 'Q3', quarterly: 25000, cumulative: 72000 },
    { quarter: 'Q4', quarterly: 22000, cumulative: 94000 },
    { quarter: 'Q5', quarterly: 24000, cumulative: 118000 },
    { quarter: 'Q6', quarterly: 26000, cumulative: 144000 },
    { quarter: 'Q7', quarterly: 23000, cumulative: 167000 },
    { quarter: 'Q8', quarterly: 22000, cumulative: 189000 },
  ];

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
    // Don't update investmentAmount from slider - keep them separate
  };

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value.replace(/[^0-9]/g, ''));
    if (value >= 100000 && value <= 2000000) {
      setInvestmentAmount(value);
    }
  };

  return (
    <Box sx={{ mb: { xs: 4, sm: 5, md: 6 } }}>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
        gap: { xs: 3, sm: 4, md: 5 },
      }}>
        {/* Investment Calculator */}
        <Paper sx={{
          p: { xs: 2, sm: 3, md: 4 },
          borderRadius: 3,
          boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
        }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: '#333',
              fontFamily: '"Axiforma", sans-serif',
              fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem' },
              mb: 1,
            }}
          >
            Investment Calculator
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: '#666',
              fontFamily: '"Axiforma", sans-serif',
              fontSize: { xs: '0.8rem', sm: '0.9rem' },
              mb: 3,
            }}
          >
            Adjust your investment amount to see potential returns and ownership percentage
          </Typography>

          {/* Investment Amount Slider */}
          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography
                variant="body2"
                sx={{
                  color: '#666',
                  fontFamily: '"Axiforma", sans-serif',
                  fontSize: { xs: '0.8rem', sm: '0.9rem' },
                  fontWeight: 500,
                }}
              >
                Investment Amount
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#333',
                  fontFamily: '"Axiforma", sans-serif',
                  fontSize: { xs: '0.8rem', sm: '0.9rem' },
                  fontWeight: 600,
                }}
              >
                ₦{sliderValue.toLocaleString()}
              </Typography>
            </Box>
            <Slider
              value={sliderValue}
              onChange={handleSliderChange}
              min={100000}
              max={2000000}
              step={50000}
              sx={{
                '& .MuiSlider-track': {
                  backgroundColor: '#3B82F6',
                },
                '& .MuiSlider-thumb': {
                  backgroundColor: '#3B82F6',
                },
                '& .MuiSlider-rail': {
                  backgroundColor: '#e0e0e0',
                },
              }}
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
              {['₦100K', '₦500K', '₦1M', '₦1.5M', '₦2M'].map((label) => (
                <Typography
                  key={label}
                  variant="caption"
                  sx={{
                    color: '#666',
                    fontFamily: '"Axiforma", sans-serif',
                    fontSize: '0.7rem',
                  }}
                >
                  {label}
                </Typography>
              ))}
            </Box>
          </Box>

          {/* Investment Input */}
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="body2"
              sx={{
                color: '#666',
                fontFamily: '"Axiforma", sans-serif',
                fontSize: { xs: '0.8rem', sm: '0.9rem' },
                fontWeight: 500,
                mb: 1,
              }}
            >
              Your investment:
            </Typography>
            <TextField
              value={`₦${investmentAmount.toLocaleString()}`}
              onChange={handleInputChange}
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: '#000',
                  backgroundColor: '#f5f5f5',
                  '& fieldset': {
                    borderColor: '#e0e0e0',
                  },
                  '&:hover fieldset': {
                    borderColor: '#3B82F6',
                  },
                },
                '& .MuiInputBase-input': {
                  fontFamily: '"Axiforma", sans-serif',
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                  fontWeight: 600,
                },
              }}
            />
          </Box>

          {/* Results */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{
              backgroundColor: '#EBF4FF',
              p: 2,
              borderRadius: 2,
            }}>
              <Typography
                variant="body2"
                sx={{
                  color: '#666',
                  fontFamily: '"Axiforma", sans-serif',
                  fontSize: { xs: '0.8rem', sm: '0.9rem' },
                  fontWeight: 500,
                  mb: 0.5,
                }}
              >
                Your ownership percentage:
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: '#3B82F6',
                  fontFamily: '"Axiforma", sans-serif',
                  fontSize: { xs: '1.1rem', sm: '1.2rem' },
                  fontWeight: 700,
                }}
              >
                {ownershipPercentage}%
              </Typography>
            </Box>

            <Box sx={{
              backgroundColor: '#EBF4FF',
              p: 2,
              borderRadius: 2,
            }}>
              <Typography
                variant="body2"
                sx={{
                  color: '#666',
                  fontFamily: '"Axiforma", sans-serif',
                  fontSize: { xs: '0.8rem', sm: '0.9rem' },
                  fontWeight: 500,
                  mb: 0.5,
                }}
              >
                Estimated annual returns:
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: '#3B82F6',
                  fontFamily: '"Axiforma", sans-serif',
                  fontSize: { xs: '1.1rem', sm: '1.2rem' },
                  fontWeight: 700,
                }}
              >
                ₦{parseInt(annualReturns).toLocaleString()}
              </Typography>
            </Box>
          </Box>
        </Paper>

        {/* Projected Returns Chart */}
        <Paper sx={{
          p: { xs: 2, sm: 3, md: 4 },
          borderRadius: 3,
          boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
        }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: '#333',
              fontFamily: '"Axiforma", sans-serif',
              fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem' },
              mb: 1,
            }}
          >
            Projected Returns
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: '#666',
              fontFamily: '"Axiforma", sans-serif',
              fontSize: { xs: '0.8rem', sm: '0.9rem' },
              mb: 3,
            }}
          >
            Based on historical performance and project timeline
          </Typography>

          <Box sx={{ height: 300, width: '100%' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="quarter" 
                  stroke="#666"
                  fontSize={12}
                  fontFamily="Axiforma"
                />
                <YAxis 
                  stroke="#666"
                  fontSize={12}
                  fontFamily="Axiforma"
                  tickFormatter={(value) => `₦${value/1000}k`}
                />
                <Tooltip 
                  formatter={(value, name) => [
                    `₦${value.toLocaleString()}`, 
                    name === 'quarterly' ? 'Quarterly Returns' : 'Cumulative Returns'
                  ]}
                  labelStyle={{ fontFamily: 'Axiforma' }}
                />
                <Bar dataKey="quarterly" fill="#3B82F6" radius={[2, 2, 0, 0]} />
                <Line 
                  type="monotone" 
                  dataKey="cumulative" 
                  stroke="#10B981" 
                  strokeWidth={3}
                  dot={{ fill: 'white', stroke: '#10B981', strokeWidth: 2, r: 4 }}
                />
              </BarChart>
            </ResponsiveContainer>
          </Box>

          {/* Legend */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mt: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ width: 16, height: 16, backgroundColor: '#3B82F6', borderRadius: 1 }} />
              <Typography
                variant="caption"
                sx={{
                  color: '#666',
                  fontFamily: '"Axiforma", sans-serif',
                  fontSize: '0.8rem',
                }}
              >
                Quarterly Returns
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ width: 16, height: 16, backgroundColor: '#10B981', borderRadius: 1 }} />
              <Typography
                variant="caption"
                sx={{
                  color: '#666',
                  fontFamily: '"Axiforma", sans-serif',
                  fontSize: '0.8rem',
                }}
              >
                Cumulative Returns
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default InvestmentCalculator;
