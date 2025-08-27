import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Button,
  Chip,
} from '@mui/material';
import {
  Lock as LockIcon,
  CompareArrows as CompareArrowsIcon,
  AccountBalanceWallet as WalletIcon,
  Refresh as RefreshIcon,
  Check as CheckIcon,
  BookmarkBorder as BookmarkIcon,
  Download as DownloadIcon,
} from '@mui/icons-material';

const InvestmentProcessCards = () => {
  return (
    <Box sx={{ mb: { xs: 4, sm: 5, md: 6 } }}>
      {/* Process Cards Grid */}
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
        gap: { xs: 3, sm: 4, md: 5 },
        mb: { xs: 4, sm: 5, md: 6 },
      }}>
        {/* Lock Period & Timeline */}
        <Paper sx={{
          p: { xs: 2, sm: 3, md: 4 },
          borderRadius: 3,
          boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Box sx={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              backgroundColor: '#EBF4FF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mr: 2,
            }}>
              <LockIcon sx={{ fontSize: 20, color: '#3B82F6' }} />
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: '#333',
                fontFamily: '"Axiforma", sans-serif',
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
              }}
            >
              Lock Period & Timeline
            </Typography>
          </Box>
          
          <Typography
            variant="body2"
            sx={{
              color: '#666',
              fontFamily: '"Axiforma", sans-serif',
              fontSize: { xs: '0.8rem', sm: '0.9rem' },
              lineHeight: 1.6,
              mb: 3,
            }}
          >
            Your investment is locked for 24 months from the date of investment. During this period, quarterly reports will be provided, but funds cannot be withdrawn.
          </Typography>

          {/* Timeline */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, flexWrap: 'wrap' }}>
            {['Now', 'Q2', 'Q3', 'Q4', 'Q1', 'Q2', 'Q3', 'Q4'].map((quarter, index) => (
              <Chip
                key={index}
                label={quarter}
                size="small"
                sx={{
                  backgroundColor: index === 0 ? '#3B82F6' : 'transparent',
                  color: index === 0 ? 'white' : '#3B82F6',
                  border: index === 0 ? 'none' : '1px solid #3B82F6',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  fontFamily: '"Axiforma", sans-serif',
                  height: 28,
                  '& .MuiChip-label': {
                    px: 1,
                  },
                }}
              />
            ))}
            <Typography
              variant="body2"
              sx={{
                color: '#3B82F6',
                fontFamily: '"Axiforma", sans-serif',
                fontSize: '0.8rem',
                fontWeight: 600,
                ml: 1,
              }}
            >
              Exit
            </Typography>
          </Box>
        </Paper>

        {/* Exit Options */}
        <Paper sx={{
          p: { xs: 2, sm: 3, md: 4 },
          borderRadius: 3,
          boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Box sx={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              backgroundColor: '#EBF4FF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mr: 2,
            }}>
              <CompareArrowsIcon sx={{ fontSize: 20, color: '#3B82F6' }} />
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: '#333',
                fontFamily: '"Axiforma", sans-serif',
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
              }}
            >
              Exit Options
            </Typography>
          </Box>
          
          <Typography
            variant="body2"
            sx={{
              color: '#666',
              fontFamily: '"Axiforma", sans-serif',
              fontSize: { xs: '0.8rem', sm: '0.9rem' },
              lineHeight: 1.6,
              mb: 3,
            }}
          >
            After the lock period, you have multiple options to exit your investment or continue earning returns.
          </Typography>

          {/* Process Steps */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, position: 'relative' }}>
            {[
              { step: 1, label: 'Lock Period Ends', active: true },
              { step: 2, label: 'Liquidate', active: false },
              { step: 3, label: 'Reinvest', active: false },
            ].map((item, index) => (
              <Box key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                <Box sx={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  backgroundColor: item.active ? '#3B82F6' : '#e0e0e0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 1,
                  zIndex: 2,
                  position: 'relative',
                }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: item.active ? 'white' : '#666',
                      fontWeight: 600,
                      fontSize: '0.8rem',
                      fontFamily: '"Axiforma", sans-serif',
                    }}
                  >
                    {item.step}
                  </Typography>
                </Box>
                <Typography
                  variant="caption"
                  sx={{
                    color: item.active ? '#3B82F6' : '#666',
                    fontWeight: 500,
                    fontSize: '0.7rem',
                    fontFamily: '"Axiforma", sans-serif',
                    textAlign: 'center',
                  }}
                >
                  {item.label}
                </Typography>
                {/* Connecting line */}
                {index < 2 && (
                  <Box sx={{
                    position: 'absolute',
                    top: 16,
                    left: 'calc(50% + 16px)',
                    width: 'calc(100% + 16px)',
                    height: 2,
                    backgroundColor: '#e0e0e0',
                    zIndex: 1,
                  }} />
                )}
              </Box>
            ))}
          </Box>
        </Paper>

        {/* Liquidation Process */}
        <Paper sx={{
          p: { xs: 2, sm: 3, md: 4 },
          borderRadius: 3,
          boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Box sx={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              backgroundColor: '#EBF4FF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mr: 2,
            }}>
              <WalletIcon sx={{ fontSize: 20, color: '#3B82F6' }} />
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: '#333',
                fontFamily: '"Axiforma", sans-serif',
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
              }}
            >
              Liquidation Process
            </Typography>
          </Box>
          
          <Typography
            variant="body2"
            sx={{
              color: '#666',
              fontFamily: '"Axiforma", sans-serif',
              fontSize: { xs: '0.8rem', sm: '0.9rem' },
              lineHeight: 1.6,
              mb: 3,
            }}
          >
            The liquidation process takes 5-7 business days. You can request liquidation through your dashboard once the lock period ends. Funds will be transferred to your registered bank account.
          </Typography>

          {/* Process Steps */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, position: 'relative' }}>
            {[
              { step: 1, label: 'Request', active: true },
              { step: 2, label: 'Review', active: false },
              { step: 3, label: 'Transfer', active: false },
            ].map((item, index) => (
              <Box key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                <Box sx={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  backgroundColor: item.active ? '#3B82F6' : '#e0e0e0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 1,
                  zIndex: 2,
                  position: 'relative',
                }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: item.active ? 'white' : '#666',
                      fontWeight: 600,
                      fontSize: '0.8rem',
                      fontFamily: '"Axiforma", sans-serif',
                    }}
                  >
                    {item.step}
                  </Typography>
                </Box>
                <Typography
                  variant="caption"
                  sx={{
                    color: item.active ? '#3B82F6' : '#666',
                    fontWeight: 500,
                    fontSize: '0.7rem',
                    fontFamily: '"Axiforma", sans-serif',
                    textAlign: 'center',
                  }}
                >
                  {item.label}
                </Typography>
                {/* Connecting line */}
                {index < 2 && (
                  <Box sx={{
                    position: 'absolute',
                    top: 16,
                    left: 'calc(50% + 16px)',
                    width: 'calc(100% + 16px)',
                    height: 2,
                    backgroundColor: '#e0e0e0',
                    zIndex: 1,
                  }} />
                )}
              </Box>
            ))}
          </Box>
        </Paper>

        {/* Reinvestment Benefits */}
        <Paper sx={{
          p: { xs: 2, sm: 3, md: 4 },
          borderRadius: 3,
          boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Box sx={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              backgroundColor: '#EBF4FF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mr: 2,
            }}>
              <RefreshIcon sx={{ fontSize: 20, color: '#3B82F6' }} />
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: '#333',
                fontFamily: '"Axiforma", sans-serif',
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
              }}
            >
              Reinvestment Benefits
            </Typography>
          </Box>
          
          <Typography
            variant="body2"
            sx={{
              color: '#666',
              fontFamily: '"Axiforma", sans-serif',
              fontSize: { xs: '0.8rem', sm: '0.9rem' },
              lineHeight: 1.6,
              mb: 3,
            }}
          >
            By choosing to reinvest, you'll receive preferential access to new projects and reduced fees. Reinvestment options include similar properties or diversifying into other investment types.
          </Typography>

          {/* Process Steps */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, position: 'relative' }}>
            {[
              { step: 1, label: 'Request', active: true },
              { step: 2, label: 'Review', active: false },
              { step: 3, label: 'Transfer', active: false },
            ].map((item, index) => (
              <Box key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                <Box sx={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  backgroundColor: item.active ? '#3B82F6' : '#e0e0e0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 1,
                  zIndex: 2,
                  position: 'relative',
                }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: item.active ? 'white' : '#666',
                      fontWeight: 600,
                      fontSize: '0.8rem',
                      fontFamily: '"Axiforma", sans-serif',
                    }}
                  >
                    {item.step}
                  </Typography>
                </Box>
                <Typography
                  variant="caption"
                  sx={{
                    color: item.active ? '#3B82F6' : '#666',
                    fontWeight: 500,
                    fontSize: '0.7rem',
                    fontFamily: '"Axiforma", sans-serif',
                    textAlign: 'center',
                  }}
                >
                  {item.label}
                </Typography>
                {/* Connecting line */}
                {index < 2 && (
                  <Box sx={{
                    position: 'absolute',
                    top: 16,
                    left: 'calc(50% + 16px)',
                    width: 'calc(100% + 16px)',
                    height: 2,
                    backgroundColor: '#e0e0e0',
                    zIndex: 1,
                  }} />
                )}
              </Box>
            ))}
          </Box>
        </Paper>
      </Box>

      {/* Action Buttons - Full Width */}
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
        gap: { xs: 2, sm: 3 },
        width: '100%',
      }}>
        <Button
          variant="contained"
          startIcon={<CheckIcon />}
          sx={{
            backgroundColor: '#0A6CFF',
            color: 'white',
            fontFamily: '"Axiforma", sans-serif',
            fontSize: { xs: '0.9rem', sm: '1rem' },
            fontWeight: 600,
            textTransform: 'none',
            borderRadius: 2,
            px: { xs: 3, sm: 4, md: 5 },
            py: { xs: 1.25, sm: 1.5, md: 1.75 },
            width: '100%',
            '&:hover': {
              backgroundColor: '#2563eb',
            },
          }}
        >
          Invest Now
        </Button>

        <Button
          variant="outlined"
          startIcon={<BookmarkIcon />}
          sx={{
            borderColor: '#808080',
            color: '#333',
            fontFamily: '"Axiforma", sans-serif',
            fontSize: { xs: '0.9rem', sm: '1rem' },
            fontWeight: 600,
            textTransform: 'none',
            borderRadius: 2,
            px: { xs: 3, sm: 4, md: 5 },
            py: { xs: 1.25, sm: 1.5, md: 1.75 },
            width: '100%',
            '&:hover': {
              backgroundColor: '#f5f5f5',
              borderColor: '#3B82F6',
            },
          }}
        >
          Add to Wishlist
        </Button>
      </Box>

      {/* Download Prospectus */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: 3, width: '100%' }}>
        <Button
          startIcon={<DownloadIcon />}
          sx={{
            color: '#3B82F6',
            fontFamily: '"Axiforma", sans-serif',
            fontSize: { xs: '0.8rem', sm: '0.9rem' },
            fontWeight: 600,
            textTransform: 'none',
            '&:hover': {
              backgroundColor: 'rgba(59, 130, 246, 0.04)',
            },
          }}
        >
          Download Project Prospectus
        </Button>
      </Box>
    </Box>
  );
};

export default InvestmentProcessCards;
