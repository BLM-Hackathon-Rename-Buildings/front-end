import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import * as testData from "./testdata.json";
import "./Map.css";

export default function App() {
  return (
    <Map center={[38, -96]} zoom={5}>
      {testData.monuments.map(monument => (
        <Marker
          key={monument.id}
          position={[
            monument.latitude,
            monument.longitude
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
