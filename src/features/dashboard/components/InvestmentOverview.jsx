import React from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  IconButton,
} from '@mui/material';
import {
  AccountBalanceWallet as WalletIcon,
  TrendingUp as TrendingUpIcon,
  Handshake as HandshakeIcon,
  CalendarToday as CalendarIcon,
  TrendingUp as ArrowUpIcon,
  MoreVert as MoreVertIcon,
} from '@mui/icons-material';

const InvestmentOverview = () => {
  const overviewData = [
    {
      id: 1,
      icon: <WalletIcon sx={{ fontSize: { xs: 20, sm: 22, md: 24 }, color: '#1976d2' }} />,
      value: '₦1,850,000',
      label: 'Total invested',
      trend: '↑ 12.5% from last month',
      trendColor: '#4caf50',
      iconBgColor: '#e3f2fd',
    },
    {
      id: 2,
      icon: <TrendingUpIcon sx={{ fontSize: { xs: 20, sm: 22, md: 24 }, color: '#4caf50' }} />,
      value: '₦248,600',
      label: 'Total Earnings',
      trend: '↑ 8.3% growth rate',
      trendColor: '#4caf50',
      iconBgColor: '#e8f5e8',
    },
    {
      id: 3,
      icon: <HandshakeIcon sx={{ fontSize: { xs: 20, sm: 22, md: 24 }, color: '#ff9800' }} />,
      value: '5',
      label: 'Active investments',
      trend: '↑ 2 new this quarter',
      trendColor: '#4caf50',
      iconBgColor: '#fff3e0',
    },
    {
      id: 4,
      icon: <CalendarIcon sx={{ fontSize: { xs: 20, sm: 22, md: 24 }, color: '#9c27b0' }} />,
      value: '₦425,000',
      label: 'Projected Returns',
      trend: '↑ By Q3 2025',
      trendColor: '#4caf50',
      iconBgColor: '#f3e5f5',
    },
  ];

  return (
    <Box sx={{ 
      display: 'grid', 
      gridTemplateColumns: { 
        xs: '1fr', 
        sm: 'repeat(2, 1fr)', 
        md: 'repeat(4, 1fr)' 
      },
      gap: { xs: 1.5, sm: 2, md: 3 },
      mb: { xs: 3, sm: 4, md: 5 },
    }}>
      {overviewData.map((item) => (
        <Card
          key={item.id}
          sx={{
            borderRadius: { xs: 2, sm: 2.5, md: 3 },
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
            p: { xs: 1.5, sm: 2, md: 2.5 },
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
          }}>
            {/* More Options Icon */}
            <IconButton
              size="small"
              sx={{
                position: 'absolute',
                top: { xs: 4, sm: 6, md: 8 },
                right: { xs: 4, sm: 6, md: 8 },
                color: '#666',
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.04)',
                },
              }}
            >
              <MoreVertIcon sx={{ fontSize: { xs: 16, sm: 18, md: 20 } }} />
            </IconButton>

            {/* Icon with Circular Background */}
            <Box sx={{ 
              mb: { xs: 1, sm: 1.5, md: 2 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
              <Box sx={{
                width: { xs: 36, sm: 40, md: 48 },
                height: { xs: 36, sm: 40, md: 48 },
                borderRadius: '50%',
                backgroundColor: item.iconBgColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mr: { xs: 1, sm: 1.5, md: 2 },
              }}>
                {item.icon}
              </Box>
            </Box>

            {/* Value */}
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: '#333B4D',
                fontFamily: '"Poppins", sans-serif',
                fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
                mb: { xs: 0.5, sm: 0.75, md: 1 },
                lineHeight: 1.2,
                wordBreak: 'break-word',
              }}
            >
              {item.value}
            </Typography>

            {/* Label */}
            <Typography
              variant="body2"
              sx={{
                color: '#666',
                fontFamily: '"Inter", sans-serif',
                fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.85rem' },
                fontWeight: 500,
                mb: { xs: 1, sm: 1.5, md: 2 },
                lineHeight: 1.3,
              }}
            >
              {item.label}
            </Typography>

            {/* Trend */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <ArrowUpIcon sx={{ 
                fontSize: { xs: 12, sm: 14, md: 16 }, 
                color: item.trendColor,
                transform: 'rotate(0deg)',
              }} />
              <Typography
                variant="caption"
                sx={{
                  color: item.trendColor,
                  fontFamily: '"Inter", sans-serif',
                  fontSize: { xs: '0.6rem', sm: '0.7rem', md: '0.75rem' },
                  fontWeight: 600,
                  lineHeight: 1.2,
                }}
              >
                {item.trend}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default InvestmentOverview;
