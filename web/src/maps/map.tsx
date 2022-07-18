import "../styles/App.css";
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
const parkData = require("../data/skateboard-parks.json");

type parkT = {
  type: string;
  properties: {
    PARK_ID: number;
    NAME: string;
    DESCRIPTIO: string;
  };
  geometry: {
    type: string;
    coordinates: number[];
  };
};

function Map() {
  const [activePark, setActivePark] = useState<parkT>();
  const icon = new Icon({
    iconUrl: "src\data\rate-rating-survey-31-svgrepo-com.svg",
    iconSize: [25, 25],
  });
  
  console.log(parkData.features)
  return (
    <MapContainer center={[45.4, -75.7]} zoom={12} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {parkData.features.map((park: parkT) => (
        <Marker
          key={park.properties.PARK_ID}
          position={[
            park.geometry.coordinates[1],
            park.geometry.coordinates[0],
          ]}
          // onClick={() => {
          //   setActivePark(park);
          // }}
          icon={icon}
        />
      ))}

      {activePark && (
        <Popup
          position={[
            activePark.geometry.coordinates[1],
            activePark.geometry.coordinates[0],
          ]}
          // onClose={() => {
          //   setActivePark(null);
          // }}
        >
          <div>
            <h2>{activePark.properties.NAME}</h2>
            <p>{activePark.properties.DESCRIPTIO}</p>
          </div>
        </Popup>
      )}
    </MapContainer>
  );
}

export default Map;
