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
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <FilterIcon sx={{ color: '#666', fontSize: { xs: 18, sm: 20 } }} />
          <Typography variant="body2" sx={{ color: '#666', fontWeight: 500, fontSize: { xs: '0.875rem', sm: '1rem' } }}>
            All Messages
          </Typography>
          <ArrowDownIcon sx={{ color: '#666', fontSize: { xs: 14, sm: 16 } }} />
        </Box>
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
      <Box sx={{ px: { xs: 2, sm: 3 }, pb: 2 }}>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          fullWidth
          sx={{
            backgroundColor: '#1976d2',
            '&:hover': { backgroundColor: '#1565c0' },
            borderRadius: 2,
            py: { xs: 1, sm: 1.5 },
            fontSize: { xs: '0.875rem', sm: '1rem' },
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
              px: { xs: 1, sm: 2 },
              color: '#666',
              fontSize: { xs: '0.75rem', sm: '0.875rem' },
              '&.Mui-selected': {
                color: '#1976d2',
              }
            },
            '& .MuiTabs-indicator': {
              backgroundColor: '#1976d2',
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
              p: { xs: 1.5, sm: 2 },
              mb: { xs: 1.5, sm: 2 },
              borderRadius: 2,
              cursor: 'pointer',
              backgroundColor: selectedConversation === index ? '#e3f2fd' : 'transparent',
              border: selectedConversation === index ? '1px solid #1976d2' : '1px solid transparent',
              '&:hover': {
                backgroundColor: selectedConversation === index ? '#e3f2fd' : '#f5f5f5',
              }
            }}
          >
            <Box sx={{ position: 'relative', mr: { xs: 1.5, sm: 2 } }}>
              <Avatar
                sx={{
                  width: { xs: 40, sm: 48 },
                  height: { xs: 40, sm: 48 },
                  backgroundColor: conv.avatarColor,
                  color: 'white',
                  fontWeight: 600,
                  fontSize: { xs: '0.875rem', sm: '1rem' },
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
                    width: { xs: 10, sm: 12 },
                    height: { xs: 10, sm: 12 },
                    backgroundColor: '#4caf50',
                    borderRadius: '50%',
                    border: '2px solid white'
                  }}
                />
              )}
            </Box>
            
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                <Typography variant="subtitle2" sx={{ 
                  fontWeight: 600, 
                  color: '#333',
                  fontSize: { xs: '0.75rem', sm: '0.875rem' }
                }}>
                  {conv.name}
                </Typography>
                <Typography variant="caption" sx={{ 
                  color: '#666', 
                  fontSize: { xs: '0.625rem', sm: '0.75rem' }
                }}>
                  {conv.time}
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                {conv.role === 'Senior Property Agent' ? (
                  <PersonIcon sx={{ color: '#666', fontSize: { xs: 14, sm: 16 }, mr: 0.5 }} />
                ) : (
                  <BusinessIcon sx={{ color: '#666', fontSize: { xs: 14, sm: 16 }, mr: 0.5 }} />
                )}
                <Typography variant="caption" sx={{ 
                  color: '#666',
                  fontSize: { xs: '0.625rem', sm: '0.75rem' }
                }}>
                  {conv.role}
                </Typography>
              </Box>
              
              <Typography variant="body2" sx={{ 
                color: '#333', 
                mb: 1, 
                lineHeight: 1.4,
                fontSize: { xs: '0.75rem', sm: '0.875rem' }
              }}>
                {conv.lastMessage}
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box
                  component="img"
                  src={conv.property.image}
                  alt={conv.property.title}
                  sx={{
                    width: { xs: 32, sm: 40 },
                    height: { xs: 24, sm: 30 },
                    borderRadius: 1,
                    objectFit: 'cover',
                    mr: 1
                  }}
                />
                <Typography variant="caption" sx={{ 
                  color: '#666', 
                  fontSize: { xs: '0.625rem', sm: '0.7rem' }
                }}>
                  {conv.property.title}
                </Typography>
              </Box>
            </Box>
            
            {conv.unread > 0 && (
              <Badge
                badgeContent={conv.unread}
                color="primary"
                sx={{ ml: 1 }}
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
