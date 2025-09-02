import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  Card,
  CardContent,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Slider,
  Switch,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
  Divider,
  Alert,
} from '@mui/material';
import {
  Home as HomeIcon,
  LocationOn as LocationIcon,
  Bed as BedIcon,
  CalendarToday as CalendarIcon,
  Person as PersonIcon,
  Visibility as VisibilityIcon,
  Notifications as NotificationsIcon,
  TrendingUp as TrendingUpIcon,
  Language as LanguageIcon,
  ArrowForward as ArrowIcon,
  ArrowBack as ArrowBackIcon,
  Save as SaveIcon,
  Check as CheckIcon,
  Public as PublicIcon,
  Group as GroupIcon,
  Lock as LockIcon,
  Warning as WarningIcon,
  FilterList as FilterIcon,
  AttachMoney as MoneyIcon,
  Business as BusinessIcon,
  Build as BuildIcon,
  Terrain as TerrainIcon,
  LocalOffer as LocalOfferIcon,
  Article as ArticleIcon,
  Hotel as HotelIcon,
} from '@mui/icons-material';

const AccountPreferencesPage = () => {
  const navigate = useNavigate();
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState(['residential', 'apartment']);
  const [budgetRange, setBudgetRange] = useState([500000, 150000000]);
  const [preferredLocation, setPreferredLocation] = useState('');
  const [bedrooms, setBedrooms] = useState(['1', '2']);
  const [language, setLanguage] = useState('');
  const [contactFrequency, setContactFrequency] = useState('weekly');
  const [profileVisibility, setProfileVisibility] = useState('public');
  const [investmentOpportunities, setInvestmentOpportunities] = useState(false);
  const [newPropertyAlerts, setNewPropertyAlerts] = useState(false);
  const [priceChangeNotifications, setPriceChangeNotifications] = useState(false);
  const [marketUpdates, setMarketUpdates] = useState(true);

  const propertyTypes = [
    { id: 'residential', label: 'Residential', icon: <HomeIcon /> },
    { id: 'apartment', label: 'Apartment', icon: <HomeIcon /> },
    { id: 'land', label: 'Land', icon: <TerrainIcon /> },
    { id: 'commercial', label: 'Commercial', icon: <BusinessIcon /> },
    { id: 'newDevelopment', label: 'New Development', icon: <BuildIcon /> },
    { id: 'shortlet', label: 'Short Let', icon: <HotelIcon /> },
  ];

  const bedroomOptions = ['Studio', '1', '2', '3', '4', '5+'];
  const languages = ['English', 'Yoruba', 'Igbo', 'Hausa', 'French'];

  const handlePropertyTypeToggle = (typeId) => {
    setSelectedPropertyTypes(prev => 
      prev.includes(typeId) 
        ? prev.filter(id => id !== typeId)
        : [...prev, typeId]
    );
  };

  const handleBedroomToggle = (bedroom) => {
    setBedrooms(prev => 
      prev.includes(bedroom) 
        ? prev.filter(b => b !== bedroom)
        : [...prev, bedroom]
    );
  };

  const handleBudgetChange = (event, newValue) => {
    setBudgetRange(newValue);
  };

  const handleBack = () => {
    navigate('/register/verification');
  };

  const handleComplete = () => {
    navigate('/welcome');
  };

  const formatCurrency = (value) => {
    if (value >= 1000000) {
      return `₦${(value / 1000000).toFixed(0)}M`;
    }
    return `₦${value.toLocaleString()}`;
  };

  return (
    <Box sx={{ 
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      overflowX: 'hidden'
    }}>
      <Box sx={{ 
        flex: 1,
        width: '100%',
        maxWidth: { xs: '100%', sm: '95%', md: '90%', lg: '85%', xl: '80%' },
        mx: 'auto',
        py: { xs: 1, sm: 2, md: 3, lg: 4 },
        px: { xs: 1, sm: 2, md: 3, lg: 4 }
      }}>
        <Paper 
          elevation={0}
          sx={{ 
            backgroundColor: 'white',
            borderRadius: { xs: 2, sm: 3 },
            p: { xs: 1.5, sm: 2, md: 3, lg: 4 },
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            width: '100%',
            overflow: 'hidden'
          }}
        >
        {/* Page Title */}
        <Typography
          variant="h4"
          sx={{
            color: '#0A3A7D',
            fontWeight: 700,
            mb: { xs: 1.5, sm: 2 },
            fontFamily: '"Lora", sans-serif',
            fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem', lg: '2.2rem' },
            lineHeight: 1.2,
          }}
        >
          Set Your Preferences
        </Typography>
        
        <Typography
          variant="body1"
          sx={{
            color: '#666',
            mb: { xs: 3, sm: 4 },
            fontSize: { xs: '0.9rem', sm: '1rem' },
            lineHeight: 1.6,
            fontFamily: '"Inter", sans-serif',
          }}
        >
          Customize your AfricaEstate experience to receive relevant property recommendations and control how you want to be contacted.
        </Typography>

        {/* Property Preferences Section */}
        <Box sx={{ mb: { xs: 4, sm: 6 } }}>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between', 
            alignItems: { xs: 'flex-start', sm: 'center' }, 
            mb: { xs: 2, sm: 3 },
            gap: { xs: 2, sm: 0 }
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 2 } }}>
              <HomeIcon sx={{ color: '#153C65', fontSize: { xs: 20, sm: 24 } }} />
              <Typography
                variant="h5"
                sx={{
                  color: '#333B4D',
                  fontWeight: 700,
                  fontFamily: '"Lora", sans-serif',
                  fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.5rem' },
                }}
              >
                Property Preferences
              </Typography>
            </Box>
            <Chip
              icon={<FilterIcon color='#0A3A7D' />}
              label="Optional"
              sx={{
                backgroundColor: '#E6EDFF',
                color: '#0A3A7D',
                fontWeight: 600,
                fontFamily: '"Poppins", sans-serif',
                fontSize: { xs: '0.8rem', sm: '0.9rem' },
              }}
            />
          </Box>
          
          <Typography
            variant="body2"
            sx={{
              color: '#666',
              mb: { xs: 2, sm: 3 },
              fontSize: { xs: '0.85rem', sm: '0.9rem' },
              fontFamily: '"Inter", sans-serif',
            }}
          >
            Tell us what kind of properties you're interested in.
          </Typography>

          {/* Property Types */}
          <Box sx={{ mb: { xs: 3, sm: 4 } }}>
            <Typography
              variant="subtitle1"
              sx={{
                color: '#0A3A7D',
                fontWeight: 400,
                mb: { xs: 1.5, sm: 2 },
                fontFamily: '"Poppins", sans-serif',
                fontSize: { xs: '0.9rem', sm: '1rem' },
              }}
            >
              Property Types (Select all that apply)
            </Typography>
                         <Box sx={{ 
               display: 'flex', 
               flexWrap: 'wrap', 
               gap: { xs: 0.5, sm: 1, md: 2 },
               justifyContent: { xs: 'center', sm: 'flex-start' }
             }}>
               {propertyTypes.map((type) => (
                 <Card
                   key={type.id}
                   onClick={() => handlePropertyTypeToggle(type.id)}
                   sx={{
                     width: { xs: 80, sm: 100, md: 110, lg: 120 },
                     height: { xs: 80, sm: 100, md: 110, lg: 120 },
                     cursor: 'pointer',
                     border: selectedPropertyTypes.includes(type.id) ? '2px solid #153C65' : '2px solid #e0e0e0',
                     borderRadius: 2,
                     transition: 'all 0.3s ease',
                     position: 'relative',
                     '&:hover': {
                       borderColor: '#153C65',
                       boxShadow: '0 4px 12px rgba(21, 60, 101, 0.15)',
                     },
                   }}
                 >
                  <CardContent sx={{ 
                    p: { xs: 1, sm: 1.5, md: 2 }, 
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                  }}>
                    {selectedPropertyTypes.includes(type.id) && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 8,
                          right: 8,
                          width: 20,
                          height: 20,
                          borderRadius: '50%',
                          backgroundColor: '#153C65',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <CheckIcon sx={{ color: 'white', fontSize: 12 }} />
                      </Box>
                    )}
                    <Box sx={{ color: '#153C65', mb: 1 }}>
                      {type.icon}
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#153C65',
                        fontWeight: 500,
                        fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' },
                        fontFamily: '"Poppins", sans-serif',
                      }}
                    >
                      {type.label}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>

          {/* Budget Range */}
          <Box sx={{ mb: { xs: 3, sm: 4 } }}>
            <Typography
              variant="subtitle1"
              sx={{
                color: '#0A3A7D',
                fontWeight: 400,
                mb: { xs: 1.5, sm: 2 },
                fontFamily: '"Poppins", sans-serif',
                fontSize: { xs: '0.9rem', sm: '1rem' },
              }}
            >
              Budget Range
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 1, sm: 2 }, mb: 2 }}>
              <TextField
                value={formatCurrency(budgetRange[0])}
                sx={{
                  flex: 1,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    backgroundColor: '#f8f9fa',
                    '& fieldset': {
                      borderColor: '#ddd',
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
                    fontWeight: 600,
                    fontFamily: '"Inter", sans-serif',
                  },
                }}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                value={formatCurrency(budgetRange[1])}
                sx={{
                  flex: 1,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    backgroundColor: '#f8f9fa',
                    '& fieldset': {
                      borderColor: '#ddd',
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
                    fontWeight: 600,
                    fontFamily: '"Inter", sans-serif',
                  },
                }}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Box>
            <Slider
              value={budgetRange}
              onChange={handleBudgetChange}
              valueLabelDisplay="auto"
              min={0}
              max={150000000}
              step={1000000}
              sx={{
                '& .MuiSlider-track': {
                  backgroundColor: '#153C65',
                },
                '& .MuiSlider-thumb': {
                  backgroundColor: '#153C65',
                  '&:hover': {
                    backgroundColor: '#0d2b4a',
                  },
                },
                '& .MuiSlider-rail': {
                  backgroundColor: '#e0e0e0',
                },
              }}
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1, flexWrap: 'wrap', gap: 0.5 }}>
              {['₦0', '₦30M', '₦60M', '₦90M', '₦120M', '₦150M'].map((label) => (
                <Typography
                  key={label}
                  variant="caption"
                  sx={{
                    color: '#666',
                    fontSize: { xs: '0.6rem', sm: '0.7rem' },
                    fontFamily: '"Inter", sans-serif',
                  }}
                >
                  {label}
                </Typography>
              ))}
            </Box>
          </Box>

          {/* Preferred Location */}
          <Box sx={{ mb: { xs: 3, sm: 4 } }}>
            <Typography
              variant="subtitle1"
              sx={{
                color: '#0A3A7D',
                fontWeight: 400,
                mb: { xs: 1.5, sm: 2 },
                fontFamily: '"Poppins", sans-serif',
                fontSize: { xs: '0.9rem', sm: '1rem' },
              }}
            >
              Preferred Location
            </Typography>
            <TextField
              fullWidth
              placeholder="Enter your preferred location"
              value={preferredLocation}
              onChange={(e) => setPreferredLocation(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  backgroundColor: '#f8f9fa',
                  '& fieldset': {
                    borderColor: '#ddd',
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
                  fontFamily: '"Inter", sans-serif',
                },
                '& .MuiInputBase-input::placeholder': {
                  color: '#666',
                  opacity: 1,
                },
              }}
            />
          </Box>

          {/* Number of Bedrooms */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="subtitle1"
              sx={{
                color: '#0A3A7D',
                fontWeight: 400,
                mb: 2,
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              Number of Bedrooms
            </Typography>
                         <Box sx={{ 
               display: 'flex', 
               gap: { xs: 0.5, sm: 1 },
               flexWrap: 'wrap',
               justifyContent: { xs: 'center', sm: 'flex-start' }
             }}>
               {bedroomOptions.map((bedroom) => (
                 <Button
                   key={bedroom}
                   variant={bedrooms.includes(bedroom) ? 'contained' : 'outlined'}
                   onClick={() => handleBedroomToggle(bedroom)}
                   sx={{
                     borderRadius: 2,
                     px: { xs: 2, sm: 2.5, md: 3 },
                     py: { xs: 0.75, sm: 1 },
                     fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                     fontFamily: '"Poppins", sans-serif',
                     fontWeight: 500,
                     minWidth: 'auto',
                     ...(bedrooms.includes(bedroom) && {
                       backgroundColor: '#153C65',
                       color: 'white',
                       '&:hover': {
                         backgroundColor: '#0d2b4a',
                       },
                     }),
                     ...(bedrooms.includes(bedroom) && {
                       borderBottom: '3px solid #153C65',
                     }),
                   }}
                 >
                   {bedroom}
                 </Button>
               ))}
             </Box>
          </Box>
        </Box>

        {/* Communication Preferences Section */}
        <Box sx={{ mb: { xs: 4, sm: 6 } }}>
          <Card sx={{ backgroundColor: '#f8f9fa', borderRadius: 3 }}>
            <CardContent sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', sm: 'row' }, 
                justifyContent: 'space-between',  
                mb: { xs: 2, sm: 3 },
                gap: { xs: 2, sm: 0 }
              }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: { xs: 1, sm: 2 } }}>
                <NotificationsIcon sx={{ color: '#153C65', fontSize: { xs: 20, sm: 24 } }} />
                <Typography
                  variant="h5"
                  sx={{
                    color: '#333B4D',
                    fontWeight: 700,
                    fontFamily: '"Lora", sans-serif',
                    fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.5rem' },
                  }}
                >
                  Communication Preferences
                </Typography>
                </Box>
                <Chip
                  icon={<WarningIcon color='#E94B7E' />}
                  label="Required"
                  sx={{
                    backgroundColor: '#FFE6ED',
                    color: '#E94B7E',
                    fontWeight: 600,
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: { xs: '0.8rem', sm: '0.9rem' },
                  }}
                />
              </Box>
              
              <Typography
                variant="body2"
                sx={{
                  color: '#666',
                  mb: { xs: 2, sm: 3 },
                  fontSize: { xs: '0.85rem', sm: '0.9rem' },
                  fontFamily: '"Inter", sans-serif',
                }}
              >
                Customize how and when you receive notifications
              </Typography>

              {/* Notification Settings */}
              <Box sx={{ 
                mt: { xs: 3, sm: 4 }, 
                backgroundColor: '#f8f9fa', 
                borderRadius: 2, 
                p: { xs: 2, sm: 3 },
                border: '1px solid #e9ecef'
              }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#153C65',
                    fontWeight: 600,
                    mb: 3,
                    fontFamily: '"Poppins", sans-serif',
                  }}
                >
                  Notification Settings
                </Typography>

                {/* New Property Alerts */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <NotificationsIcon sx={{ color: '#153C65', fontSize: 20 }} />
                    <Typography sx={{ 
                      fontFamily: '"Inter", sans-serif',
                      color: '#153C65',
                      fontWeight: 500
                    }}>
                      New Property Alerts
                    </Typography>
                  </Box>
                  <Switch
                    checked={newPropertyAlerts}
                    onChange={(e) => setNewPropertyAlerts(e.target.checked)}
                    sx={{
                      '& .MuiSwitch-switchBase.Mui-checked': {
                        color: '#153C65',
                      },
                      '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                        backgroundColor: '#153C65',
                      },
                    }}
                  />
                </Box>
                <Divider sx={{ borderColor: '#e9ecef' }} />

                {/* Price Change Notifications */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <LocalOfferIcon sx={{ color: '#153C65', fontSize: 20 }} />
                    <Typography sx={{ 
                      fontFamily: '"Inter", sans-serif',
                      color: '#153C65',
                      fontWeight: 500
                    }}>
                      Price Change Notifications
                    </Typography>
                  </Box>
                  <Switch
                    checked={priceChangeNotifications}
                    onChange={(e) => setPriceChangeNotifications(e.target.checked)}
                    sx={{
                      '& .MuiSwitch-switchBase.Mui-checked': {
                        color: '#153C65',
                      },
                      '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                        backgroundColor: '#153C65',
                      },
                    }}
                  />
                </Box>
                <Divider sx={{ borderColor: '#e9ecef' }} />

                {/* Market Updates & News */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <ArticleIcon sx={{ color: '#153C65', fontSize: 20 }} />
                    <Typography sx={{ 
                      fontFamily: '"Inter", sans-serif',
                      color: '#153C65',
                      fontWeight: 500
                    }}>
                      Market Updates & News
                    </Typography>
                  </Box>
                  <Switch
                    checked={marketUpdates}
                    onChange={(e) => setMarketUpdates(e.target.checked)}
                    sx={{
                      '& .MuiSwitch-switchBase.Mui-checked': {
                        color: '#153C65',
                      },
                      '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                        backgroundColor: '#153C65',
                      },
                    }}
                  />
                </Box>
                <Divider sx={{ borderColor: '#e9ecef' }} />

                {/* Investment Opportunities */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <TrendingUpIcon sx={{ color: '#153C65', fontSize: 20 }} />
                    <Typography sx={{ 
                      fontFamily: '"Inter", sans-serif',
                      color: '#153C65',
                      fontWeight: 500
                    }}>
                      Investment Opportunities
                    </Typography>
                  </Box>
                  <Switch
                    checked={investmentOpportunities}
                    onChange={(e) => setInvestmentOpportunities(e.target.checked)}
                    sx={{
                      '& .MuiSwitch-switchBase.Mui-checked': {
                        color: '#153C65',
                      },
                      '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                        backgroundColor: '#153C65',
                      },
                    }}
                  />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>

              {/* Preferred Language */}
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: '#153C65',
                    fontWeight: 600,
                    mb: 2,
                    fontFamily: '"Poppins", sans-serif',
                  }}
                >
                  Preferred Language
                </Typography>
                <FormControl fullWidth>
                  <InputLabel sx={{ color: '#666', fontWeight: 500 }}>Preferred Language</InputLabel>
                  <Select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    label="Preferred Language"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        backgroundColor: '#f8f9fa',
                        '& fieldset': {
                          borderColor: '#ddd',
                        },
                        '&:hover fieldset': {
                          borderColor: '#153C65',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#153C65',
                        },
                      },
                      '& .MuiSelect-select': {
                        color: '#333',
                        fontWeight: 500,
                      },
                      '& .MuiInputLabel-root.Mui-focused': {
                        color: '#153C65',
                      },
                    }}
                  >
                    <MenuItem value="" disabled sx={{ color: '#999', fontStyle: 'italic' }}>
                      Select language
                    </MenuItem>
                    {languages.map((lang) => (
                      <MenuItem key={lang} value={lang} sx={{ color: '#333' }}>
                        {lang}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>

              {/* Contact Frequency */}
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: '#153C65',
                    fontWeight: 600,
                    mb: 2,
                    fontFamily: '"Poppins", sans-serif',
                  }}
                >
                  Contact Frequency
                </Typography>
                                 <Box sx={{ 
                   display: 'flex', 
                   gap: { xs: 1, sm: 2 },
                   flexDirection: { xs: 'column', sm: 'row' }
                 }}>
                   {[
                     { value: 'daily', label: 'Daily', description: 'Get updates every day' },
                     { value: 'weekly', label: 'Weekly', description: 'Get updates every week' },
                     { value: 'monthly', label: 'Monthly', description: 'Get updates every month' },
                   ].map((option) => (
                    <Card
                      key={option.value}
                      onClick={() => setContactFrequency(option.value)}
                      sx={{
                        flex: 1,
                        cursor: 'pointer',
                        border: contactFrequency === option.value ? '2px solid #153C65' : '2px solid #e0e0e0',
                        borderRadius: 2,
                        transition: 'all 0.3s ease',
                        backgroundColor: contactFrequency === option.value ? '#f0f4f8' : 'white',
                        '&:hover': {
                          borderColor: '#153C65',
                        },
                      }}
                    >
                      <CardContent sx={{ textAlign: 'center', py: 2 }}>
                        <CalendarIcon 
                          sx={{ 
                            color: contactFrequency === option.value ? '#153C65' : '#666',
                            mb: 1 
                          }} 
                        />
                        <Typography
                          variant="subtitle2"
                          sx={{
                            color: '#153C65',
                            fontWeight: 600,
                            mb: 0.5,
                            fontFamily: '"Poppins", sans-serif',
                          }}
                        >
                          {option.label}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            color: '#666',
                            fontSize: '0.7rem',
                            fontFamily: '"Inter", sans-serif',
                          }}
                        >
                          {option.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  ))}
                </Box>
              </Box>

        {/* Profile Visibility Section */}
        <Box sx={{ mb: 6 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <VisibilityIcon sx={{ color: '#153C65', fontSize: 24 }} />
              <Typography
                variant="h5"
                sx={{
                  color: '#153C65',
                  fontWeight: 700,
                  fontFamily: '"Poppins", sans-serif',
                }}
              >
                Profile Visibility
              </Typography>
            </Box>
            <Chip
              icon={<WarningIcon />}
              label="Required"
              sx={{
                backgroundColor: '#ffebee',
                color: '#d32f2f',
                fontWeight: 600,
                fontFamily: '"Poppins", sans-serif',
              }}
            />
          </Box>
          
          <Typography
            variant="body2"
            sx={{
              color: '#666',
              mb: 3,
              fontSize: '0.9rem',
              fontFamily: '"Inter", sans-serif',
            }}
          >
            Control who can see your profile information.
          </Typography>

          <RadioGroup
            value={profileVisibility}
            onChange={(e) => setProfileVisibility(e.target.value)}
          >
            {[
              {
                value: 'public',
                label: 'Public',
                description: 'Your profile is visible to all AfricaEstate users. This option provides maximum exposure for property transactions.',
                icon: <PublicIcon />,
              },
              {
                value: 'limited',
                label: 'Limited',
                description: 'Your profile is only visible to verified real estate agents and property managers on the platform.',
                icon: <GroupIcon />,
              },
              {
                value: 'private',
                label: 'Private',
                description: 'Your profile is only visible to the owners and agents of properties you specifically inquire about.',
                icon: <LockIcon />,
              },
            ].map((option) => (
              <Card
                key={option.value}
                sx={{
                  mb: 2,
                  border: profileVisibility === option.value ? '2px solid #153C65' : '2px solid #e0e0e0',
                  borderRadius: 2,
                  backgroundColor: profileVisibility === option.value ? '#f0f4f8' : 'white',
                  transition: 'all 0.3s ease',
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Radio
                      value={option.value}
                      sx={{
                        color: '#153C65',
                        '&.Mui-checked': {
                          color: '#153C65',
                        },
                      }}
                    />
                    <Box sx={{ flex: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <Box sx={{ color: '#153C65' }}>
                          {option.icon}
                        </Box>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            color: '#153C65',
                            fontWeight: 600,
                            fontFamily: '"Poppins", sans-serif',
                          }}
                        >
                          {option.label}
                        </Typography>
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#666',
                          fontSize: '0.9rem',
                          fontFamily: '"Inter", sans-serif',
                        }}
                      >
                        {option.description}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </RadioGroup>
        </Box>

        {/* Privacy Notice */}
        <Alert
          icon={<VisibilityIcon />}
          sx={{
            mb: 4,
            backgroundColor: '#f8f9fa',
            color: '#495057',
            border: '1px solid #e9ecef',
            '& .MuiAlert-icon': {
              color: '#153C65',
            },
          }}
        >
          Your contact information is always protected regardless of your visibility setting. AfricaEstate uses a secure messaging system to connect buyers and sellers without exposing personal details.
        </Alert>

                 {/* Action Buttons */}
         <Box sx={{ 
           display: 'flex', 
           flexDirection: 'column',
           alignItems: 'center',
         }}>
          {/* Completion Icon */}
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            mb: 3
          }}>
            <Box sx={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              backgroundColor: '#FFC043',
              border: '2px dotted #FFC043',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}>
              <CheckIcon sx={{ 
                fontSize: 40, 
                color: '#153C65',
                fontWeight: 'bold'
              }} />
            </Box>
          </Box>

          {/* Main Heading */}
          <Typography
            variant="h4"
            sx={{
              color: '#153C65',
              fontWeight: 700,
              mb: 2,
              fontFamily: '"Poppins", sans-serif',
              textAlign: 'center'
            }}
          >
            You're Almost There!
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              color: '#666',
              mb: 4,
              fontSize: '1rem',
              lineHeight: 1.6,
              fontFamily: '"Inter", sans-serif',
              textAlign: 'center',
              maxWidth: '500px'
            }}
          >
            Just one more step to complete your AfricaEstate account setup. Once finished, you'll gain full access to personalized property recommendations tailored to your preferences.
          </Typography>

          {/* Progress Indicator */}
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 2, 
            mb: 4,
            justifyContent: 'center'
          }}>
            {/* Step 1 - Completed */}
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1 
            }}>
              <Box sx={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                backgroundColor: '#153C65',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 600,
                fontSize: '0.9rem'
              }}>
                1
              </Box>
              <Box sx={{
                width: 40,
                height: 2,
                backgroundColor: '#153C65'
              }} />
            </Box>

            {/* Step 2 - Completed */}
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1 
            }}>
              <Box sx={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                backgroundColor: '#153C65',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 600,
                fontSize: '0.9rem'
              }}>
                2
              </Box>
              <Box sx={{
                width: 40,
                height: 2,
                backgroundColor: '#e0e0e0'
              }} />
            </Box>

            {/* Step 3 - Current */}
            <Box sx={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              backgroundColor: '#FFC043',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#153C65',
              fontWeight: 600,
              fontSize: '0.9rem'
            }}>
              3
            </Box>
          </Box>

          <Button
              variant="contained"
              endIcon={<ArrowIcon />}
              onClick={handleComplete}
              fullWidth
              sx={{
                backgroundColor: '#FFC043',
                color: '#0A3A7D',
                px: { xs: 2, sm: 3, md: 4 },
                py: { xs: 1, sm: 1.5 },
                borderRadius: 2,
                fontWeight: 600,
                fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' },
                fontFamily: '"Poppins", sans-serif',
                '&:hover': {
                  backgroundColor: '#D4B63C',
                },
              }}
            >
              Complete Setup
            </Button>
            <Divider sx={{ mt: { xs: 3, sm: 4 }, mb: 2, color:'#E2EDFF', width: '100%' }} />
            <Box sx={{ display: 'flex', flexDirection: {xs: 'column', sm: 'row'},  justifyContent: 'space-between', width: '100%' }}>
          <Button
            startIcon={<ArrowBackIcon color='#596580'/>}
            onClick={handleBack}
            sx={{
              color: '#596580',
              fontFamily: '"Poppins", sans-serif',
              px: { xs: 2, sm: 3 },
              py: { xs: 0.75, sm: 1 },
              fontSize: { xs: '0.8rem', sm: '1rem' },
              '&:hover': {
                backgroundColor: 'rgba(102, 102, 102, 0.1)',
              },
            }}
          >
            Back to Verification
          </Button>

                     <Box sx={{ 
             display: 'flex', 
             gap: { xs: 1, sm: 2 },
             flexDirection: { xs: 'column', sm: 'row' },
             width: { xs: '100%', sm: 'auto' }
           }}>
            <Button
                 startIcon={<SaveIcon color='#0A3A7D'/>}
                 sx={{
                   color: '#0A3A7D',
                fontFamily: '"Poppins", sans-serif',
                px: { xs: 2, sm: 3 },
                py: { xs: 0.75, sm: 1 },
                fontSize: { xs: '0.8rem', sm: '1rem' },
                '&:hover': {
                  backgroundColor: 'rgba(102, 102, 102, 0.1)',
                },
              }}
            >
              Save Progress
            </Button>
</Box>
          </Box>
        </Box>
      </Paper>
        </Box>
      </Box>
  );
};

export default AccountPreferencesPage;
