import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Paper, Chip, Button } from '@mui/material';
import { Loader } from '@googlemaps/js-api-loader';

const PropertyAlertsMap = ({ selectedTab, showMap = true }) => {

  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapError, setMapError] = useState(false);
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  // Sample data for Nigeria locations
  const alertData = [
    {
      id: 1,
      title: "Luxury Apartment Alert",
      location: "Victoria Island, Lagos",
      coordinates: { lat: 6.4281, lng: 3.4219 },
      price: "₦150,000,000",
      status: "active",
      type: "apartment",
      bedrooms: 3,
      bathrooms: 2,
      area: "150 sqm"
    },
    {
      id: 2,
      title: "Family Home Alert",
      location: "Lekki, Lagos",
      coordinates: { lat: 6.4550, lng: 3.4731 },
      price: "₦200,000,000",
      status: "active",
      type: "house",
      bedrooms: 4,
      bathrooms: 3,
      area: "250 sqm"
    },
    {
      id: 3,
      title: "Investment Property Alert",
      location: "Ikeja, Lagos",
      coordinates: { lat: 6.6018, lng: 3.3515 },
      price: "₦80,000,000",
      status: "active",
      type: "commercial",
      bedrooms: 2,
      bathrooms: 1,
      area: "100 sqm"
    },
    {
      id: 4,
      title: "Beachfront Villa Alert",
      location: "Elegushi, Lagos",
      coordinates: { lat: 6.4281, lng: 3.4219 },
      price: "₦500,000,000",
      status: "active",
      type: "villa",
      bedrooms: 5,
      bathrooms: 4,
      area: "400 sqm"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return '#4CAF50';
      case 'inactive': return '#9E9E9E';
      case 'expired': return '#F44336';
      default: return '#2196F3';
    }
  };

  const filteredAlerts = selectedTab === 'all' 
    ? alertData 
    : alertData.filter(alert => alert.type === selectedTab);

  const center = { lat: 6.5244, lng: 3.3792 }; // Lagos, Nigeria

  // Initialize Google Maps
  useEffect(() => {
    if (!showMap || mapLoaded || mapError) return;

    const loader = new Loader({
      apiKey: "YOUR_GOOGLE_MAPS_API_KEY", // You'll need to replace this with your actual API key
      version: "weekly",
      libraries: ["places", "marker"]
    });

    loader.load()
      .then(() => {
        console.log('Google Maps loaded successfully');
        setMapLoaded(true);
      })
      .catch((error) => {
        console.error('Error loading Google Maps:', error);
        setMapError(true);
      });
  }, [showMap, mapLoaded, mapError]);

  // Initialize map instance
  useEffect(() => {
    if (!mapLoaded || !mapRef.current || mapInstanceRef.current) return;

    try {
      const mapInstance = new window.google.maps.Map(mapRef.current, {
        center: center,
        zoom: 10,
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }]
          }
        ]
      });

             mapInstanceRef.current = mapInstance;

             // Add markers for each alert
       filteredAlerts.forEach((alert) => {
         // Create custom marker element
         const markerElement = document.createElement('div');
         markerElement.innerHTML = `
           <div style="
             width: 24px; 
             height: 24px; 
             background: ${getStatusColor(alert.status)}; 
             border: 2px solid white; 
             border-radius: 50%; 
             display: flex; 
             align-items: center; 
             justify-content: center;
             box-shadow: 0 2px 4px rgba(0,0,0,0.3);
           ">
             <div style="
               width: 8px; 
               height: 8px; 
               background: white; 
               border-radius: 50%;
             "></div>
           </div>
         `;

         // Use AdvancedMarkerElement (new API)
         const marker = new window.google.maps.marker.AdvancedMarkerElement({
           position: alert.coordinates,
           map: mapInstance,
           title: alert.title,
           content: markerElement
         });

         const infoWindow = new window.google.maps.InfoWindow({
           content: `
             <div style="padding: 8px; max-width: 200px;">
               <h3 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 600;">${alert.title}</h3>
               <p style="margin: 0 0 4px 0; font-size: 12px; color: #666;">${alert.location}</p>
               <p style="margin: 0 0 4px 0; font-size: 12px; font-weight: 600; color: #1976d2;">${alert.price}</p>
               <div style="display: flex; gap: 4px; margin-top: 8px;">
                 <span style="background: #e3f2fd; color: #1976d2; padding: 2px 6px; border-radius: 4px; font-size: 10px;">${alert.bedrooms} bed</span>
                 <span style="background: #e3f2fd; color: #1976d2; padding: 2px 6px; border-radius: 4px; font-size: 10px;">${alert.bathrooms} bath</span>
                 <span style="background: #e3f2fd; color: #1976d2; padding: 2px 6px; border-radius: 4px; font-size: 10px;">${alert.area}</span>
               </div>
             </div>
           `
         });

         marker.addListener('click', () => {
           infoWindow.open(mapInstance, marker);
         });
       });

    } catch (error) {
      console.error('Error initializing map:', error);
      setMapError(true);
    }
  }, [mapLoaded, filteredAlerts, center]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current = null;
      }
    };
  }, []);

  const renderMapPlaceholder = () => (
    <Box sx={{
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f5f5f5',
      border: '2px dashed #ccc',
      borderRadius: 1,
      minHeight: 400,
    }}>
      <Box sx={{ textAlign: 'center', maxWidth: 400, p: 3 }}>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          {mapError ? 'Map Unavailable' : 'Map Loading...'}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {mapError 
            ? 'Google Maps API key is required to display the interactive map. Please configure a valid API key.' 
            : 'Loading interactive map...'
          }
        </Typography>
        
        {mapError && (
          <Box sx={{ textAlign: 'left', bgcolor: '#f8f9fa', p: 2, borderRadius: 1, mb: 2 }}>
            <Typography variant="body2" fontWeight={600} gutterBottom>
              To fix this:
            </Typography>
            <Typography variant="body2" component="ol" sx={{ pl: 2, m: 0 }}>
              <li>Get a Google Maps API key from Google Cloud Console</li>
              <li>Enable "Maps JavaScript API"</li>
              <li>Replace "YOUR_GOOGLE_MAPS_API_KEY" in the code</li>
            </Typography>
          </Box>
        )}
        
        {mapError && (
          <Button 
            variant="outlined" 
            size="small" 
            sx={{ mt: 1 }}
            onClick={() => {
              setMapError(false);
              setMapLoaded(false);
              mapInstanceRef.current = null;
            }}
          >
            Retry
          </Button>
        )}
      </Box>
    </Box>
  );

  if (!showMap) {
    return renderMapPlaceholder();
  }

  if (mapError) {
    return renderMapPlaceholder();
  }

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      minHeight: 400,
    }}>
      {/* Map Header */}
      <Box sx={{
        p: 2,
        borderBottom: '1px solid #e0e0e0',
        backgroundColor: 'white',
      }}>
        <Typography variant="h6" fontWeight={600}>
          Property Alert Coverage Map
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {filteredAlerts.length} active alerts in your area
        </Typography>
      </Box>

      {/* Map Container */}
      <Box sx={{
        flex: 1,
        position: 'relative',
        backgroundColor: '#f5f5f5',
      }}>
        {!mapLoaded ? (
          renderMapPlaceholder()
        ) : (
          <div
            ref={mapRef}
            style={{
              width: '100%',
              height: '100%',
              minHeight: 400,
            }}
          />
        )}
      </Box>

      {/* Map Legend */}
      <Box sx={{
        p: 2,
        borderTop: '1px solid #e0e0e0',
        backgroundColor: 'white',
        display: 'flex',
        gap: 2,
        flexWrap: 'wrap',
        alignItems: 'center',
      }}>
        <Typography variant="body2" fontWeight={500}>
          Legend:
        </Typography>
        <Chip 
          label="Active Alerts" 
          size="small" 
          sx={{ 
            backgroundColor: '#4CAF50', 
            color: 'white',
            '& .MuiChip-label': { color: 'white' }
          }} 
        />
        <Chip 
          label="Inactive Alerts" 
          size="small" 
          sx={{ 
            backgroundColor: '#9E9E9E', 
            color: 'white',
            '& .MuiChip-label': { color: 'white' }
          }} 
        />
        <Chip 
          label="Expired Alerts" 
          size="small" 
          sx={{ 
            backgroundColor: '#F44336', 
            color: 'white',
            '& .MuiChip-label': { color: 'white' }
          }} 
        />
      </Box>
    </Box>
  );
};

export default PropertyAlertsMap;
