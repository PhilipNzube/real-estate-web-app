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
import InquiryCard from './InquiryCard';

const InquiriesList = ({ selectedTab, onInquiryClick, selectedInquiry }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Sample data - in a real app, this would come from props or API
  const inquiriesData = {
    today: [
      {
        id: 1,
        title: "Inquiry about Luxury Apartment in Victoria Island",
        location: "Victoria Island, Lagos",
        timeAgo: "Started 2 hours ago",
        message: "Hello, I'm interested in viewing this property. I'd like to know if the apartment comes with parking space and if there are any additional fees for amenities. Also, is the price negotiable?",
        sender: {
          name: "John Doe",
          role: "Property Agent",
          avatar: "JD"
        },
        status: "active",
        unreadCount: 2,
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
        property: {
          title: "Luxury Apartment in Victoria Island",
          location: "Victoria Island, Lagos",
          price: "₦75,000,000",
          beds: 3,
          baths: 2,
          size: "210m²"
        }
      },
      {
        id: 2,
        title: "Questions about Penthouse with Ocean View",
        location: "Ikoyi Lagos",
        timeAgo: "Started 6 hours ago",
        message: "I've sent you the details about the financing options available for this property. Please let me know if you need any clarification or have additional questions about the payment plans.",
        sender: {
          name: "You",
          role: "Last replied",
          avatar: "JD"
        },
        status: "active",
        unreadCount: 0,
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
        property: {
          title: "Penthouse with Ocean View",
          location: "Ikoyi, Lagos",
          price: "₦120,000,000",
          beds: 4,
          baths: 3,
          size: "280m²"
        }
      }
    ],
    yesterday: [
      {
        id: 3,
        title: "Information About Modern Family House in Lekki",
        location: "Lekki Phase 1, Lagos",
        timeAgo: "Started Yesterday",
        message: "Yes, we can arrange a viewing for this weekend. I have availability on Saturday afternoon or Sunday morning. Which would you prefer? I can also share some additional photos of the backyard and garden area.",
        sender: {
          name: "John Doe",
          role: "Property Agent",
          avatar: "JD"
        },
        status: "active",
        unreadCount: 0,
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
        property: {
          title: "Modern Family House in Lekki",
          location: "Lekki Phase 1, Lagos",
          price: "₦85,000,000",
          beds: 5,
          baths: 4,
          size: "350m²"
        }
      },
      {
        id: 4,
        title: "Query about Elegant Townhouse in Maitama",
        location: "Maitama, Abuja",
        timeAgo: "Started Yesterday",
        message: "Thank you for all the information. I've decided to pursue other options at this time, but I appreciate your assistance. I'll keep this property in mind for future consideration.",
        sender: {
          name: "You",
          role: "Last replied",
          avatar: "JD"
        },
        status: "resolved",
        unreadCount: 0,
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
        property: {
          title: "Elegant Townhouse in Maitama",
          location: "Maitama, Abuja",
          price: "₦95,000,000",
          beds: 4,
          baths: 3,
          size: "320m²"
        }
      }
    ]
  };

  const getFilteredInquiries = () => {
    if (selectedTab === 'all') {
      return { ...inquiriesData };
    }
    
    // Filter based on status - in a real app, this would be more sophisticated
    const filtered = {};
    Object.keys(inquiriesData).forEach(dateKey => {
      filtered[dateKey] = inquiriesData[dateKey].filter(inquiry => {
        if (selectedTab === 'active') return inquiry.status === 'active';
        if (selectedTab === 'resolved') return inquiry.status === 'resolved';
        if (selectedTab === 'pending') return inquiry.status === 'pending';
        if (selectedTab === 'archived') return inquiry.status === 'archived';
        return true;
      });
    });
    
    return filtered;
  };

  const filteredData = getFilteredInquiries();

  return (
    <Box sx={{
      p: { xs: 2, sm: 3 },
      backgroundColor: '#f8f9fa',
      height: '100%',
      overflow: 'auto',
    }}>
      {Object.keys(filteredData).map((dateKey) => {
        const inquiries = filteredData[dateKey];
        if (inquiries.length === 0) return null;

        return (
          <Box key={dateKey} sx={{ mb: 4 }}>
            {/* Date Header */}
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: '#0A3A7D',
                fontSize: { xs: '1rem', sm: '1.125rem' },
                fontFamily: '"Inter", sans-serif',
                mb: 2,
                textTransform: 'capitalize',
              }}
            >
              {dateKey}
            </Typography>

            {/* Inquiry Cards */}
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}>
              {inquiries.map((inquiry) => (
                <InquiryCard
                  key={inquiry.id}
                  inquiry={inquiry}
                  onClick={() => onInquiryClick(inquiry)}
                  isSelected={selectedInquiry?.id === inquiry.id}
                />
              ))}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default InquiriesList;
