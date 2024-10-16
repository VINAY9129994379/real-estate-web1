// MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Set up marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const ContactMap = () => {
  // Set the center of the map and zoom level
  const position = [51.505, -0.09]; // Example coordinates (London)
  const zoomLevel = 13;

  return (
    <div style={{ height: '50vh', position: 'relative' }}>
      <MapContainer center={position} zoom={zoomLevel} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 1,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent background
        zIndex: 1
      }}>
        <h1 style={{ textAlign: 'center', padding: '20px' }}>Map Background Overlay</h1>
      </div>
    </div>
  );
};

export default ContactMap;
