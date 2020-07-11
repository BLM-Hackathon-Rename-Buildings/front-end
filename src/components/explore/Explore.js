import React from 'react';
import PinMap from '../pinmap/PinMap';
import SideBar from '../sidebar/SideBar';
import './Explore.css';

export default class Explore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMonument: null,
      showInfo: false,
    };
  }

  setMonument(monument) {
    this.setState({ currentMonument: monument });
    this.setState({ showInfo: true });
  }

  render() {
    return (
      <div>
        <PinMap
          className="pin-map"
          city="Washington, DC"
          onPinClicked={this.setMonument.bind(this)}
        ></PinMap>
        {this.state.showInfo ? <SideBar className="side-bar"></SideBar> : ''}
      </div>
    );
  }
}

//@carly to do: move this attribution somewhere else
// attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
