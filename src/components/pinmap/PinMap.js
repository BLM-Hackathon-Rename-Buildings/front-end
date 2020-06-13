import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import * as testData from "./testdata.json";
import "./PinMap.css";

export default class PinMap extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedPin: null
    };
  }

  click(monument){
    console.log("clicked: " + monument.id);
    this.props.onPinClicked(monument);
  }

  render(){
    return (
      <Map center={[38, -96]} zoom={5}>
        {testData.monuments.map(monument => (
          <Marker
            key={monument.id}
            position={[
              monument.latitude,
              monument.longitude
            ]}
            onClick={this.click.bind(this, monument)}
          />
        ))}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </Map>
    );
  }
}


//@carly to do: move this attribution somewhere else
// attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
