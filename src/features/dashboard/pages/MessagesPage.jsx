import React, { useState } from 'react';
import {
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MessagesSidebar from '../components/MessagesSidebar';
import MessagesHeader from '../components/MessagesHeader';
import MessagesArea from '../components/MessagesArea';
import MessageInput from '../components/MessageInput';
import { useDashboard } from '../context/DashboardContext';

const MessagesPage = () => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const { sidebarOpen: mainSidebarOpen } = useDashboard();
  const [activeTab, setActiveTab] = useState(0);
  const [selectedConversation, setSelectedConversation] = useState(0);
  const [messageText, setMessageText] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(true); // Default for desktop, controlled by toggle on mobile/medium

  const conversations = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Senior Property Agent',
      avatar: 'JD',
      avatarColor: '#0A3A7D',
      online: true,
      time: '11:25 AM',
      lastMessage: 'You: Hi John, I\'m very interested in this property. I\'d like to know more about the payment plans and available units.',
      unread: 2,
      property: {
        title: 'Luxury Apartment, Victoria Island',
        image: '/src/assets/images/House_1.png'
      }
    },
    {
      id: 2,
      name: 'Sarah Wilson',
      role: 'Property Owner',
      avatar: 'SW',
      avatarColor: '#1976d2',
      online: false,
      time: '10:30 AM',
      lastMessage: 'Sarah: Thank you for your interest. The property is still available and I can arrange a viewing this weekend.',
      unread: 0,
      property: {
        title: 'Modern Villa, Lekki',
        image: '/src/assets/images/House_1.png'
      }
    },
    {
      id: 3,
      name: 'Michael Brown',
      role: 'Real Estate Agent',
      avatar: 'MB',
      avatarColor: '#388e3c',
      online: true,
      time: '9:15 AM',
      lastMessage: 'Michael: I have several properties that match your criteria. Would you like me to send you the details?',
      unread: 1,
      property: {
        title: 'Penthouse, Banana Island',
        image: '/src/assets/images/House_1.png'
      }
    }
  ];

  const selectedConv = conversations[selectedConversation];

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleConversationSelect = (index) => {
    setSelectedConversation(index);
  };

  const handleSendMessage = () => {
    if (messageText.trim()) {
      console.log('Sending message:', messageText);
      setMessageText('');
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleMessageChange = (e) => {
    setMessageText(e.target.value);
  };

  return (
    <Box sx={{
      display: 'flex',
      height: '100%',
      width: '100%',
      backgroundColor: '#f8f9fa',
      overflow: 'hidden',
    }}>
      {/* Left Sidebar - Behavior depends on main sidebar state */}
      <MessagesSidebar
        sidebarOpen={sidebarOpen}
        onToggleSidebar={toggleSidebar}
        activeTab={activeTab}
        onTabChange={handleTabChange}
        conversations={conversations}
        selectedConversation={selectedConversation}
        onConversationSelect={handleConversationSelect}
        mainSidebarOpen={mainSidebarOpen}
      />

      {/* Main Content Area */}
      <Box sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        minWidth: 0,
        borderRadius: { xs: 0, sm: 0, md: 0, lg: 2, xl: 2 }, // No border radius on medium screens
        boxShadow: { xs: 'none', sm: 'none', md: 'none', lg: '0 4px 20px rgba(0,0,0,0.1)', xl: '0 4px 20px rgba(0,0,0,0.1)' }, // No shadow on medium screens
        overflow: 'hidden',
        position: 'relative',
        // On medium screens, when sidebar is open, make this an overlay
        ...(isMediumScreen && sidebarOpen && {
          position: 'fixed',
          right: 0,
          top: 0,
          bottom: 0,
          width: '100%',
          zIndex: 1200,
        }),
      }}>
        {/* Main Header */}
        <MessagesHeader selectedConversation={selectedConv} />

        {/* Messages Area - Scrollable */}
        <Box sx={{
          flex: 1,
          overflow: 'hidden',
          position: 'relative',
          minHeight: 0, // Important for flex scrolling
        }}>
          <MessagesArea selectedConversation={selectedConv} />
        </Box>

        {/* Message Input - Fixed at bottom */}
        <Box sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'white',
          borderTop: '1px solid #e0e0e0',
          zIndex: 10,
        }}>
          <MessageInput
            messageText={messageText}
            onMessageChange={handleMessageChange}
            onSendMessage={handleSendMessage}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default MessagesPage;
