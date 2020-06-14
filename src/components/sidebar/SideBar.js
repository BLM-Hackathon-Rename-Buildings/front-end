import React from 'react';
import './SideBar.css';

export default class SideBar extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     currentMonument: "hello"
  //   };
  // }

  render() {
    return (
      <aside className="side-bar">
        <img
          src={this.props.currentMonumentPhoto}
          alt="symbol"
          class="symbol-image"
        />
        <div class="symbol-info">
          <div class="symbol-info-field">
            {' '}
            <b>Name:</b> {this.props.currentMonumentName}{' '}
          </div>
          <div class="symbol-info-field">
            {' '}
            <b>Type: </b>
            {this.props.currentMonumentType}{' '}
          </div>
          <div class="symbol-info-field">
            {' '}
            <b>Info:</b>
            This is dummy data. Not sure what we are going to put here but for
            now this is just gibberish. I wonder how many lines this will have
            on here. 'This is dummy data. Not sure what we are going to put here
            but for now this is just gibberish. I wonder how many lines this
            will have on here. 'This is dummy data. Not sure what we are going
            to put here but for now this is just gibberish. I wonder how many
            lines this will have on here.
          </div>
          <div class="center-button">
            <button class="remove-button">How to Get Statue Removed</button>
          </div>
        </div>
      </aside>
    );
  }
}

//@carly to do: move this attribution somewhere else
// attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
