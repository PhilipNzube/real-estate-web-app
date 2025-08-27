import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Avatar,
  Chip,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  Business as BusinessIcon,
  CalendarToday as CalendarIcon,
  Visibility as ViewIcon,
  Archive as ArchiveIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';

const InquiryCard = ({ inquiry, onClick, isSelected }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return { bg: '#E6EDFF', text: '#0A3A7D' };
      case 'resolved':
        return { bg: '#E6F7EF', text: '#008000' };
      case 'pending':
        return { bg: '#F59E0B', text: 'white' };
      case 'archived':
        return { bg: '#6B7280', text: 'white' };
      default:
        return { bg: '#757575', text: 'white' };
    }
  };

  const statusColors = getStatusColor(inquiry.status);

  return (
    <Paper
      onClick={onClick}
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        p: { xs: 2, sm: 3 },
        borderRadius: 2,
        backgroundColor: 'white',
        cursor: 'poAxi',
        border: isSelected ? '2px solid #0A3A7D' : '1px solid #e0e0e0',
        transition: 'all 0.2s ease',
        '&:hover': {
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          borderColor: '#0A3A7D',
        },
        minHeight: { xs: 'auto', sm: 160 },
      }}
    >
      {/* Property Image */}
      <Box sx={{
        width: { xs: '100%', sm: 120 },
        height: { xs: 120, sm: 120 },
        borderRadius: 1,
        overflow: 'hidden',
        flexShrink: 0,
        mb: { xs: 2, sm: 0 },
        mr: { sm: 3 },
      }}>
        <Box
          component="img"
          src={inquiry.image}
          alt={inquiry.title}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Box>

      {/* Content */}
      <Box sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0, // Prevents text overflow
      }}>
        {/* Header Row */}
        <Box sx={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          mb: 1,
        }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: '#0A3A7D',
              fontSize: { xs: '1rem', sm: '1.125rem' },
              fontFamily: '"Axiforma", sans-serif',
              lineHeight: 1.3,
              flex: 1,
              mr: 2,
            }}
          >
            {inquiry.title}
          </Typography>
          
          {/* Status Badge */}
          <Chip
            label={inquiry.status.toUpperCase()}
            size="small"
            sx={{
              backgroundColor: statusColors.bg,
              color: statusColors.text,
              fontSize: { xs: '0.65rem', sm: '0.7rem' },
              fontWeight: 600,
              height: { xs: 20, sm: 24 },
              minWidth: { xs: 50, sm: 60 },
            }}
          />
        </Box>

        {/* Location and Time */}
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          mb: 1.5,
          flexWrap: 'wrap',
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <BusinessIcon sx={{ fontSize: 16, color: '#757575' }} />
            <Typography
              variant="body2"
              sx={{
                color: '#757575',
                fontSize: { xs: '0.75rem', sm: '0.8rem' },
                fontFamily: '"Axiforma", sans-serif',
              }}
            >
              {inquiry.location}
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <CalendarIcon sx={{ fontSize: 16, color: '#757575' }} />
            <Typography
              variant="body2"
              sx={{
                color: '#757575',
                fontSize: { xs: '0.75rem', sm: '0.8rem' },
                fontFamily: '"Axi", sans-serif',
              }}
            >
              {inquiry.timeAgo}
            </Typography>
          </Box>
        </Box>

        {/* Message Snippet */}
        <Typography
          variant="body2"
          sx={{
            color: '#666',
            fontSize: { xs: '0.8rem', sm: '0.875rem' },
            fontFamily: '"Axi", sans-serif',
            lineHeight: 1.5,
            mb: 2,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {inquiry.message}
        </Typography>

        {/* Footer */}
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mt: 'auto',
        }}>
          {/* Sender Info */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Avatar
              sx={{
                width: 32,
                height: 32,
                backgroundColor: '#10B981',
                color: 'white',
                fontSize: { xs: '0.75rem', sm: '0.8rem' },
                fontWeight: 600,
              }}
            >
              {inquiry.sender.avatar}
            </Avatar>
            <Box>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 600,
                  color: '#333',
                  fontSize: { xs: '0.75rem', sm: '0.8rem' },
                  fontFamily: '"Axi", sans-serif',
                }}
              >
                {inquiry.sender.name}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: '#757575',
                  fontSize: { xs: '0.65rem', sm: '0.7rem' },
                  fontFamily: '"Axi", sans-serif',
                }}
              >
                {inquiry.sender.role}
              </Typography>
            </Box>
          </Box>

          {/* Action Icons */}
          <Box sx={{ display: 'flex', gap: 0.5 }}>
            <IconButton
              size="small"
              sx={{
                width: 28,
                height: 28,
                color: '#757575',
                backgroundColor: '#f5f5f5',
                '&:hover': {
                  backgroundColor: '#e0e0e0',
                },
              }}
            >
              <ViewIcon sx={{ fontSize: 16 }} />
            </IconButton>
            <IconButton
              size="small"
              sx={{
                width: 28,
                height: 28,
                color: '#757575',
                backgroundColor: '#f5f5f5',
                '&:hover': {
                  backgroundColor: '#e0e0e0',
                },
              }}
            >
              <ArchiveIcon sx={{ fontSize: 16 }} />
            </IconButton>
            <IconButton
              size="small"
              sx={{
                width: 28,
                height: 28,
                color: '#757575',
                backgroundColor: '#f5f5f5',
                '&:hover': {
                  backgroundColor: '#e0e0e0',
                },
              }}
            >
              <DeleteIcon sx={{ fontSize: 16 }} />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default InquiryCard;
