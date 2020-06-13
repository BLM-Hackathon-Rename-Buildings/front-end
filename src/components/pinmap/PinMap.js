import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
import { connect } from 'react-redux';
import * as testData from './testdata.json';
import './PinMap.css';

class PinMapComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPin: null,
    };
  }

  click(monument) {
    console.log('clicked: ' + monument.id);
    this.props.onPinClicked(monument);
  }

  render() {
    return (
      <Map center={[38, -96]} zoom={5}>
        {testData.monuments.map((monument) => (
          <Marker
            key={monument.id}
            position={[monument.latitude, monument.longitude]}
            onClick={this.click.bind(this, monument)}
          />
        ))}
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>
    );
  }
}

function mapStateToProps(state) {
  return {
    symbols: state.symbols, //should render test api for now
  };
}
function mapDispatchToProps(dispatch) {
  return {
    //if any dispatch functions are needed but it should be fetched and in state from app.js
  };
}

const PinMap = connect(mapStateToProps, mapDispatchToProps)(PinMapComponent);

export default PinMap;
//@carly to do: move this attribution somewhere else
// attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
