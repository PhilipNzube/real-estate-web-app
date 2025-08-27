import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Chip,
  Button,
} from '@mui/material';
import {
  LocationOn as LocationIcon,
  Home as HomeIcon,
  Business as BusinessIcon,
  Landscape as LandscapeIcon,
  Map as MapIcon,
  ViewModule as PlaceholderIcon,
} from '@mui/icons-material';

// Import CSS for map styling
import './PropertyAlertsMap.css';

const PropertyAlertsMap = ({ selectedTab, showMap = true }) => {
  const [mapError, setMapError] = useState(false);
  const [mapReady, setMapReady] = useState(false);
  const [useMap, setUseMap] = useState(showMap);
  const [mapComponentsAvailable, setMapComponentsAvailable] = useState(false);
  const [MapContainer, setMapContainer] = useState(null);
  const [TileLayer, setTileLayer] = useState(null);
  const [Marker, setMarker] = useState(null);
  const [Popup, setPopup] = useState(null);
  const [Circle, setCircle] = useState(null);

  // Sample data for Nigeria locations
  const alertData = [
    {
      id: 1,
      title: "Investment Properties in Ikeja, GRA",
      location: "Ikeja GRA",
      coordinates: [6.6018, 3.3515], // Lagos coordinates
      status: "custom",
      propertyCount: 8,
      propertyType: "Any Type",
      priceRange: "₦90M - ₦180M",
    },
    {
      id: 2,
      title: "Beachfront Properties",
      location: "Banana Island",
      coordinates: [6.4654, 3.4064],
      status: "active",
      propertyCount: 12,
      propertyType: "Villa",
      priceRange: "₦200M+",
    },
    {
      id: 3,
      title: "Affordable Apartments in Epe",
      location: "Epe",
      coordinates: [6.5854, 3.9833],
      status: "paused",
      propertyCount: 12,
      propertyType: "Land",
      priceRange: "₦5M - ₦20M",
    },
    {
      id: 4,
      title: "Luxury Apartment in Victoria Island",
      location: "Victoria Island",
      coordinates: [6.4281, 3.4219],
      status: "active",
      propertyCount: 8,
      propertyType: "Apartment",
      priceRange: "₦50M - ₦120M",
    },
    {
      id: 5,
      title: "Family Home in Lekki Phase 1",
      location: "Lekki Phase 1",
      coordinates: [6.4654, 3.5664],
      status: "active",
      propertyCount: 12,
      propertyType: "House",
      priceRange: "₦100M - ₦250M",
    },
    {
      id: 6,
      title: "Affordable Apartments in Yaba",
      location: "Yaba",
      coordinates: [6.5095, 3.3711],
      status: "paused",
      propertyCount: 12,
      propertyType: "Apartment",
      priceRange: "₦20M - ₦45M",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return '#4CAF50';
      case 'paused':
        return '#FF9800';
      case 'custom':
        return '#2196F3';
      default:
        return '#9E9E9E';
    }
  };

  const filteredAlerts = alertData.filter(alert => {
    if (selectedTab === 'all') return true;
    if (selectedTab === 'active') return alert.status === 'active';
    if (selectedTab === 'paused') return alert.status === 'paused';
    if (selectedTab === 'custom') return alert.status === 'custom';
    return true;
  });

  // Nigeria center coordinates
  const center = [9.0820, 8.6753];

  useEffect(() => {
    // Load map components dynamically
    const loadMapComponents = async () => {
      try {
        const leaflet = await import('react-leaflet');
        const L = await import('leaflet');
        
        setMapContainer(() => leaflet.MapContainer);
        setTileLayer(() => leaflet.TileLayer);
        setMarker(() => leaflet.Marker);
        setPopup(() => leaflet.Popup);
        setCircle(() => leaflet.Circle);
        
        // Fix for default markers in react-leaflet
        delete L.default.Icon.Default.prototype._getIconUrl;
        L.default.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
          iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
          shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        });
        
        setMapComponentsAvailable(true);
      } catch (error) {
        console.warn('Map components not available:', error);
        setMapComponentsAvailable(false);
        setMapError(true);
      }
    };

    if (useMap) {
      loadMapComponents();
    }
  }, [useMap]);

  useEffect(() => {
    // Delay map initialization to ensure container is ready
    if (useMap && mapComponentsAvailable) {
      const timer = setTimeout(() => {
        //setMapReady(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [useMap, mapComponentsAvailable]);

  const toggleMapView = () => {
    setUseMap(!useMap);
    setMapError(false);
    setMapReady(false);
  };

  const renderMapPlaceholder = () => (
    <Box sx={{
      flex: 1,
      position: 'relative',
      backgroundColor: '#f8f9fa',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 400,
    }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography
          variant="h6"
          sx={{
            color: '#0A3A7D',
            fontWeight: 600,
            fontFamily: '"Axiforma", sans-serif',
            mb: 1,
          }}
        >
          Property Alert Coverage Map
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: '#757575',
            fontFamily: '"Axiforma", sans-serif',
            mb: 2,
          }}
        >
          {mapError ? 'Map failed to load. Showing placeholder view.' : 'Interactive map showing property alert density across locations'}
        </Typography>
        <Button
          variant="outlined"
          size="small"
          onClick={toggleMapView}
          startIcon={useMap ? <PlaceholderIcon /> : <MapIcon />}
          sx={{
            borderColor: '#0A3A7D',
            color: '#0A3A7D',
            '&:hover': {
              borderColor: '#0A3A7D',
              backgroundColor: 'rgba(10, 58, 125, 0.04)',
            },
          }}
        >
          {useMap ? 'Show Placeholder' : 'Show Map'}
        </Button>
      </Box>
    </Box>
  );

  const renderRealMap = () => {
    if (!mapComponentsAvailable || !useMap || !MapContainer) {
      return renderMapPlaceholder();
    }

    return (
      <Box sx={{
        flex: 1,
        position: 'relative',
        '& .leaflet-container': {
          height: '100%',
          width: '100%',
        },
      }}>
        {mapReady && (
          <MapContainer
            key={`map-${Date.now()}`}
            center={center}
            zoom={6}
            style={{ height: '100%', width: '100%' }}
            whenCreated={(map) => {
              // Store map instance for cleanup
              if (window.propertyAlertsMap) {
                try {
                  window.propertyAlertsMap.remove();
                } catch (e) {
                  console.warn('Error removing previous map:', e);
                }
              }
              window.propertyAlertsMap = map;
            }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            
            {/* Property Density Circles */}
            {filteredAlerts.map((alert) => (
              <React.Fragment key={alert.id}>
                <Circle
                  center={alert.coordinates}
                  radius={alert.propertyCount * 5000} // Scale radius by property count
                  pathOptions={{
                    fillColor: getStatusColor(alert.status),
                    color: getStatusColor(alert.status),
                    fillOpacity: 0.3,
                    weight: 2,
                  }}
                />
                <Marker position={alert.coordinates}>
                  <Popup>
                    <Box sx={{ p: 1, minWidth: 200 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, fontFamily: '"Axiforma", sans-serif' }}>
                        {alert.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#757575', mb: 1, fontFamily: '"Axiforma", sans-serif' }}>
                        {alert.location}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1 }}>
                        <Chip
                          label={alert.propertyType}
                          size="small"
                          sx={{
                            backgroundColor: '#E3F2FD',
                            color: '#1976D2',
                            fontSize: '0.7rem',
                            height: 20,
                          }}
                        />
                        <Chip
                          label={alert.priceRange}
                          size="small"
                          sx={{
                            backgroundColor: '#E3F2FD',
                            color: '#1976D2',
                            fontSize: '0.7rem',
                            height: 20,
                          }}
                        />
                      </Box>
                      <Typography variant="body2" sx={{ fontWeight: 600, color: getStatusColor(alert.status), fontFamily: '"Axiforma", sans-serif' }}>
                        {alert.propertyCount} properties
                      </Typography>
                    </Box>
                  </Popup>
                </Marker>
              </React.Fragment>
            ))}
          </MapContainer>
        )}
      </Box>
    );
  };

  return (
    <Box sx={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#f8f9fa',
    }}>
      {/* Map Header */}
      <Box sx={{
        p: { xs: 2, sm: 3 },
        backgroundColor: 'white',
        borderBottom: '1px solid #e0e0e0',
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <HomeIcon sx={{ color: '#0A3A7D', fontSize: 20 }} />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: '#0A3A7D',
                fontSize: { xs: '1rem', sm: '1.1rem' },
                fontFamily: '"Axiforma", sans-serif',
              }}
            >
              Property Alert Coverage
            </Typography>
          </Box>
          <Button
            variant="outlined"
            size="small"
            onClick={toggleMapView}
            startIcon={useMap ? <PlaceholderIcon /> : <MapIcon />}
            sx={{
              borderColor: '#0A3A7D',
              color: '#0A3A7D',
              fontSize: '0.75rem',
              '&:hover': {
                borderColor: '#0A3A7D',
                backgroundColor: 'rgba(10, 58, 125, 0.04)',
              },
            }}
          >
            {useMap ? 'Placeholder' : 'Map'}
          </Button>
        </Box>
        <Typography
          variant="body2"
          sx={{
            color: '#757575',
            fontSize: '0.8rem',
            fontFamily: '"Axiforma", sans-serif',
          }}
        >
          Visualize your property alerts across different locations
        </Typography>
      </Box>

      {/* Map Container */}
      {useMap ? renderRealMap() : renderMapPlaceholder()}

      {/* Legend */}
      <Box sx={{
        p: { xs: 2, sm: 3 },
        backgroundColor: 'white',
        borderTop: '1px solid #e0e0e0',
      }}>
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: 600,
            color: '#1a1a1a',
            fontSize: '0.9rem',
            fontFamily: '"Axiforma", sans-serif',
            mb: 2,
          }}
        >
          Legend
        </Typography>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: '#4CAF50',
              }}
            />
            <Typography
              variant="body2"
              sx={{
                color: '#757575',
                fontSize: '0.8rem',
                fontFamily: '"Axiforma", sans-serif',
              }}
            >
              Active Alerts
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: '#FF9800',
              }}
            />
            <Typography
              variant="body2"
              sx={{
                color: '#757575',
                fontSize: '0.8rem',
                fontFamily: '"Axiforma", sans-serif',
              }}
            >
              Paused Alerts
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: '#2196F3',
              }}
            />
            <Typography
              variant="body2"
              sx={{
                color: '#757575',
                fontSize: '0.8rem',
                fontFamily: '"Axiforma", sans-serif',
              }}
            >
              Custom Alerts
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PropertyAlertsMap;
