import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'leaflet/dist/leaflet.css';
import { Map, TileLayer} from 'react-leaflet';

function App() {
  return (
    <div className="App">
     <Map center={[0, 0]} zoom={4}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors"></TileLayer>
     </Map>
    </div>
  );
}

export default App;
