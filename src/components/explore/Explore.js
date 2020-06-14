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
        {this.state.showInfo ? (
          <SideBar
            className="side-bar"
            currentMonumentName={
              this.state.currentMonument ? this.state.currentMonument.name : ''
            }
            currentMonumentPhoto={
              this.state.currentMonument && this.state.currentMonument.photo
                ? this.state.currentMonument.photo
                : 'https://media.washtimes.com/media/image/2018/08/08/8_8_2018_ap-172595843326498201.jpg'
            }
            currentMonumentType={
              this.state.currentMonument
                ? this.state.currentMonument.symbol_type
                : ''
            }
          ></SideBar>
        ) : (
          ''
        )}
      </div>
    );
  }
}

//@carly to do: move this attribution somewhere else
// attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
