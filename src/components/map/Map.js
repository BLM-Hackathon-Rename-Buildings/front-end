import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import * as testData from "./testdata.json";
import "./Map.css";

export default function App() {
  return (
    <Map center={[38, -96]} zoom={5}>
      {testData.features.map(location => (
        <Marker
          key={location.properties.PARK_ID}
          position={[
            location.geometry.coordinates[1],
            location.geometry.coordinates[0]
          ]}
        />
      ))}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </Map>
  );
}

//@carly to do: move this attribution somewhere else
// attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
