import React from 'react';
import './SideBar.css';

//this.props.match.params.id

export default class SideBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      monumentName: "",
      monumentPhoto: "https://media.washtimes.com/media/image/2018/08/08/8_8_2018_ap-172595843326498201.jpg",
      monumentType: ""
    };
  }

  render() {
    return (
      <aside className="side-bar">
            {this.state.monumentName}
            <img
              src={this.state.monumentPhoto}
              alt="symbol"
              className="symbol-image"
            />
            <div className="symbol-info">
              <h2 className="symbol-title-field">
                {this.props.match.params.id}
              </h2>
              <p className="symbol-info-field">
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            <button className="remove-button">REMOVE</button>
          </aside>
    );
  }
}
//@carly to do: move this attribution somewhere else
// attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
