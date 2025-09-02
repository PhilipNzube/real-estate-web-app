import React from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Tabs,
  Tab,
  IconButton,
  Avatar,
  Badge,
  useTheme,
  useMediaQuery,
  Drawer,
} from '@mui/material';
import {
  Search as SearchIcon,
  Add as AddIcon,
  Person as PersonIcon,
  Business as BusinessIcon,
  FilterList as FilterIcon,
  KeyboardArrowDown as ArrowDownIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
} from '@mui/icons-material';

const MessagesSidebar = ({ sidebarOpen, onToggleSidebar, activeTab, onTabChange, conversations, selectedConversation, onConversationSelect, mainSidebarOpen }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  
  // Use the same logic as DashboardHeader
  // On tablet/medium screens, when main sidebar is open, show overlay behavior
  const shouldShowOverlay = isMobile || (isTablet && mainSidebarOpen);

  const sidebarContent = (
    <Box sx={{ 
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Mobile/Tablet Header with Close Button - Only show when in overlay mode */}
      {shouldShowOverlay && (
        <Box sx={{ 
          p: 2, 
          borderBottom: '1px solid #e0e0e0',
          backgroundColor: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Typography variant="h6" sx={{ fontWeight: 600, color: '#333' }}>
            Conversations
          </Typography>
          <IconButton
            onClick={onToggleSidebar}
            sx={{
              color: '#666',
              backgroundColor: 'transparent',
              '&:hover': {
                backgroundColor: '#f5f5f5',
              }
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      )}

      {/* Filter Dropdown */}
      <Box sx={{ px: { xs: 2, sm: 3 }, py: 2, borderBottom: '1px solid #e0e0e0' }}>
        <Button
          variant="text"
          startIcon={<FilterIcon />}
          endIcon={<ArrowDownIcon />}
          sx={{
            color: '#333',
            fontWeight: 500,
            fontSize: { xs: '0.875rem', sm: '1rem' },
            textTransform: 'none',
            p: 0,
            '&:hover': {
              backgroundColor: 'transparent',
              color: '#153C65',
            }
          }}
        >
          All Messages
        </Button>
      </Box>

      {/* Search */}
      <Box sx={{ px: { xs: 2, sm: 3 }, py: 2 }}>
        <TextField
          fullWidth
          placeholder="Search Messages..."
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: '#666', fontSize: { xs: 18, sm: 20 } }} />
              </InputAdornment>
            ),
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              backgroundColor: '#f5f5f5',
              borderRadius: 2,
              fontSize: { xs: '0.875rem', sm: '1rem' },
              '& fieldset': {
                borderColor: '#e0e0e0',
              },
              '&:hover fieldset': {
                borderColor: '#153C65',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#153C65',
              },
            },
            '& .MuiInputBase-input': {
              color: '#333',
              fontWeight: 500,
            },
            '& .MuiInputBase-input::placeholder': {
              color: '#666',
              opacity: 1,
            },
          }}
        />
      </Box>

      {/* New Message Button */}
      <Box sx={{ px: { xs: 2, sm: 3 }, pb: 3 }}>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          fullWidth
          sx={{
            backgroundColor: '#153C65',
            '&:hover': { backgroundColor: '#0d2b4a' },
            borderRadius: 2,
            py: 2,
            fontSize: '0.875rem',
            fontWeight: 600,
            textTransform: 'none',
            boxShadow: '0 2px 4px rgba(21, 60, 101, 0.2)',
          }}
        >
          New Message
        </Button>
      </Box>

      {/* Tabs */}
      <Box sx={{ px: { xs: 2, sm: 3 }, pb: 2 }}>
        <Tabs 
          value={activeTab} 
          onChange={onTabChange}
          sx={{
            '& .MuiTab-root': {
              minWidth: 'auto',
              px: { xs: 1.5, sm: 2 },
              color: '#666',
              fontSize: { xs: '0.75rem', sm: '0.875rem' },
              fontWeight: 500,
              textTransform: 'none',
              '&.Mui-selected': {
                color: '#153C65',
                fontWeight: 600,
              }
            },
            '& .MuiTabs-indicator': {
              backgroundColor: '#153C65',
              height: 3,
            }
          }}
        >
          <Tab label="All" />
          <Tab label="Agents" />
          <Tab label="Owners" />
          <Tab label="Unread" />
        </Tabs>
      </Box>

      {/* Conversations List */}
      <Box sx={{ flex: 1, overflowY: 'auto', px: { xs: 2, sm: 3 }, pb: 2 }}>
        {conversations.map((conv, index) => (
          <Box
            key={conv.id}
            onClick={() => {
              onConversationSelect(index);
              if (shouldShowOverlay) {
                onToggleSidebar(); // Close sidebar in overlay mode after selection
              }
            }}
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              p: { xs: 2, sm: 2.5 },
              mb: { xs: 2, sm: 2.5 },
              borderRadius: 2,
              cursor: 'pointer',
              backgroundColor: selectedConversation === index ? '#f0f7ff' : 'transparent',
              border: selectedConversation === index ? '1px solid #153C65' : '1px solid transparent',
              '&:hover': {
                backgroundColor: selectedConversation === index ? '#f0f7ff' : '#f8f9fa',
              },
              transition: 'all 0.2s ease',
            }}
          >
            <Box sx={{ position: 'relative', mr: { xs: 2, sm: 2.5 } }}>
              <Avatar
                sx={{
                  width: { xs: 48, sm: 56 },
                  height: { xs: 48, sm: 56 },
                  backgroundColor: conv.avatarColor,
                  color: 'white',
                  fontWeight: 700,
                  fontSize: { xs: '1rem', sm: '1.125rem' },
                }}
              >
                {conv.avatar}
              </Avatar>
              {conv.online && (
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 2,
                    right: 2,
                    width: { xs: 12, sm: 14 },
                    height: { xs: 12, sm: 14 },
                    backgroundColor: '#4caf50',
                    borderRadius: '50%',
                    border: '2px solid white',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                  }}
                />
              )}
            </Box>
            
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1.5 }}>
                <Typography variant="subtitle1" sx={{ 
                  fontWeight: 700, 
                  color: '#333',
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  lineHeight: 1.2,
                }}>
                  {conv.name}
                </Typography>
                <Typography variant="caption" sx={{ 
                  color: '#666', 
                  fontSize: { xs: '0.75rem', sm: '0.8rem' },
                  fontWeight: 500,
                }}>
                  {conv.time}
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                {conv.role === 'Senior Property Agent' ? (
                  <PersonIcon sx={{ color: '#666', fontSize: { xs: 16, sm: 18 }, mr: 1 }} />
                ) : (
                  <BusinessIcon sx={{ color: '#666', fontSize: { xs: 16, sm: 18 }, mr: 1 }} />
                )}
                <Typography variant="caption" sx={{ 
                  color: '#666',
                  fontSize: { xs: '0.75rem', sm: '0.8rem' },
                  fontWeight: 500,
                }}>
                  {conv.role}
                </Typography>
              </Box>
              
              <Typography variant="body2" sx={{ 
                color: '#333', 
                mb: 2, 
                lineHeight: 1.5,
                fontSize: { xs: '0.8rem', sm: '0.875rem' },
                fontWeight: 400,
              }}>
                {conv.lastMessage}
              </Typography>
              
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center',
                backgroundColor: '#f8f9fa',
                borderRadius: 1.5,
                p: 1,
                border: '1px solid #e9ecef',
              }}>
                <Box
                  component="img"
                  src={conv.property.image}
                  alt={conv.property.title}
                  sx={{
                    width: { xs: 36, sm: 44 },
                    height: { xs: 28, sm: 34 },
                    borderRadius: 1,
                    objectFit: 'cover',
                    mr: 1.5,
                    border: '1px solid #e9ecef',
                  }}
                />
                <Typography variant="caption" sx={{ 
                  color: '#333', 
                  fontSize: { xs: '0.75rem', sm: '0.8rem' },
                  fontWeight: 500,
                  lineHeight: 1.2,
                }}>
                  {conv.property.title}
                </Typography>
              </Box>
            </Box>
            
            {conv.unread > 0 && (
              <Badge
                badgeContent={conv.unread}
                color="primary"
                sx={{ 
                  ml: 1,
                  '& .MuiBadge-badge': {
                    backgroundColor: '#153C65',
                    color: 'white',
                    fontWeight: 600,
                    fontSize: '0.75rem',
                  }
                }}
              />
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );

  // Mobile: Always overlay
  if (isMobile) {
    return (
      <>
        {/* Floating Toggle Button */}
        <IconButton
          onClick={onToggleSidebar}
          sx={{
            position: 'fixed',
            left: 16,
            top: 80,
            backgroundColor: '#153C65',
            color: 'white',
            zIndex: 1700,
            '&:hover': {
              backgroundColor: '#0d2b4a',
            },
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          }}
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Drawer */}
        <Drawer
          anchor="left"
          open={sidebarOpen}
          onClose={onToggleSidebar}
          sx={{
            zIndex: 1700,
            '& .MuiDrawer-paper': {
              width: '100%',
              maxWidth: { xs: '100%', sm: 400 },
            },
          }}
        >
          {sidebarContent}
        </Drawer>
      </>
    );
  }

  // Medium Screen: Use the same logic as DashboardHeader
  if (isTablet) {
    return (
      <>
        {/* Floating Toggle Button - Only show when main sidebar is open (overlay mode) */}
        {shouldShowOverlay && (
          <IconButton
            onClick={onToggleSidebar}
            sx={{
              position: 'fixed',
              left: 16, // This will appear over the main menu sidebar
              top: 80,
              backgroundColor: '#153C65',
              color: 'white',
              zIndex: 1700,
              '&:hover': {
                backgroundColor: '#0d2b4a',
              },
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            }}
          >
            <MenuIcon />
          </IconButton>
        )}

        {/* Medium Screen: Persistent sidebar when main sidebar is closed */}
        {!shouldShowOverlay && (
          <Box sx={{ 
            width: 350,
            minWidth: 350,
            backgroundColor: 'white',
            borderRight: '1px solid #e0e0e0',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}>
            {sidebarContent}
          </Box>
        )}

        {/* Medium Screen: Overlay drawer when main sidebar is open */}
        {shouldShowOverlay && (
          <Drawer
            anchor="left"
            open={sidebarOpen}
            onClose={onToggleSidebar}
            sx={{
              zIndex: 1700,
              '& .MuiDrawer-paper': {
                width: '100%',
                maxWidth: 350,
              },
            }}
          >
            {sidebarContent}
          </Drawer>
        )}
      </>
    );
  }

  // Large Screen: Always persistent
  return (
    <Box sx={{ 
      width: 400,
      minWidth: 400,
      backgroundColor: 'white',
      borderRight: '1px solid #e0e0e0',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    }}>
      {sidebarContent}
    </Box>
  );
};

export default MessagesSidebar;
