import React, { useState } from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  Button,
  Tabs,
  Tab,
} from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  CheckCircle as CheckCircleIcon,
  CalendarToday as CalendarIcon,
  AccountBalanceWallet as WalletIcon,
  TrendingUp as ArrowUpIcon,
} from '@mui/icons-material';

const InvestmentPortfolio = () => {
  const [activeTab, setActiveTab] = useState(0);

  const portfolioData = [
    {
      id: 1,
      title: 'Your invested Capital',
      value: '₦1,850,000',
      trend: '↑ ₦350,000 this quarter',
      trendColor: '#4caf50',
      icon: <WalletIcon sx={{ fontSize: 24, color: '#1976d2' }} />,
    },
    {
      id: 2,
      title: 'Current Portfolio Value',
      value: '₦2,235,500',
      trend: '↑ 20.8% growth',
      trendColor: '#4caf50',
      icon: <TrendingUpIcon sx={{ fontSize: 24, color: '#4caf50' }} />,
    },
    {
      id: 3,
      title: 'Total Projects',
      value: '5 Active',
      trend: '2 completed projects',
      trendColor: '#4caf50',
      icon: <CheckCircleIcon sx={{ fontSize: 24, color: '#ff9800' }} />,
    },
    {
      id: 4,
      title: 'Available for Withdrawal',
      value: '₦185,000',
      trend: '₦320,000 unlocking in 30 days',
      trendColor: '#4caf50',
      icon: <CalendarIcon sx={{ fontSize: 24, color: '#9c27b0' }} />,
    },
  ];

  const tabLabels = ['Overview', 'Active investments', 'Returns History', 'Available for Liquidation'];

  return (
    <Box>
      {/* Section Title */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          color: '#333B4D',
          fontFamily: '"Poppins", sans-serif',
          fontSize: { xs: '1.3rem', sm: '1.5rem', md: '1.8rem' },
          mb: { xs: 2, sm: 3, md: 4 },
        }}
      >
        Your Investment Portfolio
      </Typography>

      {/* Tabs */}
      <Box sx={{ 
        borderBottom: 1, 
        borderColor: '#e0e0e0',
        mb: { xs: 3, sm: 4, md: 5 },
        overflow: 'auto',
        '&::-webkit-scrollbar': {
          height: '4px',
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: '#f1f1f1',
          borderRadius: '2px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#c1c1c1',
          borderRadius: '2px',
          '&:hover': {
            backgroundColor: '#a8a8a8',
          },
        },
      }}>
        <Tabs
          value={activeTab}
          onChange={(e, newValue) => setActiveTab(newValue)}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            '& .MuiTab-root': {
              textTransform: 'none',
              fontWeight: 600,
              fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' },
              color: '#666',
              minWidth: 'fit-content',
              px: { xs: 2, sm: 3, md: 4 },
              '&.Mui-selected': {
                color: '#1976d2',
              },
            },
            '& .MuiTabs-indicator': {
              backgroundColor: '#1976d2',
              height: 3,
            },
          }}
        >
          {tabLabels.map((label, index) => (
            <Tab key={index} label={label} />
          ))}
        </Tabs>
      </Box>

      {/* Portfolio Summary Cards */}
      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { 
          xs: '1fr', 
          sm: 'repeat(2, 1fr)', 
          md: 'repeat(4, 1fr)' 
        },
        gap: { xs: 2, sm: 2.5, md: 3 },
        mb: { xs: 4, sm: 5, md: 6 },
      }}>
        {portfolioData.map((item) => (
          <Card
            key={item.id}
            sx={{
              borderRadius: 3,
              boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
              transition: 'all 0.3s ease',
              minHeight: { xs: 140, sm: 160, md: 180 },
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
              },
            }}
          >
            <CardContent sx={{ 
              p: { xs: 2, sm: 2.5, md: 3 },
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
              {/* Icon */}
              <Box sx={{ mb: 1.5 }}>
                {item.icon}
              </Box>

              {/* Title */}
              <Typography
                variant="body2"
                sx={{
                  color: '#666',
                  fontFamily: '"Inter", sans-serif',
                  fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' },
                  fontWeight: 500,
                  mb: 1,
                }}
              >
                {item.title}
              </Typography>

              {/* Value */}
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: '#333B4D',
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem' },
                  mb: 1,
                  lineHeight: 1.2,
                }}
              >
                {item.value}
              </Typography>

              {/* Trend */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <ArrowUpIcon sx={{ 
                  fontSize: 12, 
                  color: item.trendColor,
                  transform: 'rotate(0deg)',
                }} />
                <Typography
                  variant="caption"
                  sx={{
                    color: item.trendColor,
                    fontFamily: '"Inter", sans-serif',
                    fontSize: { xs: '0.65rem', sm: '0.7rem', md: '0.75rem' },
                    fontWeight: 600,
                  }}
                >
                  {item.trend}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* View Detailed ROI Dashboard Button */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center',
        mt: { xs: 4, sm: 5, md: 6 },
      }}>
        <Button
          variant="outlined"
          startIcon={<TrendingUpIcon />}
          sx={{
            borderColor: '#1976d2',
            color: '#1976d2',
            fontFamily: '"Poppins", sans-serif',
            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
            fontWeight: 600,
            textTransform: 'none',
            borderRadius: 2,
            px: { xs: 3, sm: 4, md: 5 },
            py: { xs: 1.25, sm: 1.5, md: 1.75 },
            '&:hover': {
              backgroundColor: '#1976d2',
              color: 'white',
              borderColor: '#1976d2',
            },
          }}
        >
          View Detailed ROI Dashboard
        </Button>
      </Box>
    </Box>
  );
};

export default InvestmentPortfolio;
