import React from 'react';
import './Detail.css';

//this.props.match.params.id

export default class SideBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      monumentName: "",
      monumentPhoto: "https://media.washtimes.com/media/image/2018/08/08/8_8_2018_ap-172595843326498201.jpg",
      monumentType: "",
      showActions: false
    };

    this.remove = this.remove.bind(this);
    this.close = this.close.bind(this);
  }

  remove() {
    console.log("remove!")
    this.setState(state => ({
      showActions: true
    }));
  }

  close() {
    console.log("close!")
    this.setState(state => ({
      showActions: false
    }));
  }

  render() {
    return (
      <div className="detail">
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

            { this.state.showActions ? null :
              <button className="remove-button" onClick={this.remove} >REMOVE</button> }
          </aside>

          <div>
          { !this.state.showActions ? null :    <div className="action-takeover">
                <article className="action-text">
                <button className="close-button" onClick={this.close}>
                  <img className="close-icon" src={require("../../assets/x-icon.png")}/>
                </button>
                  <h1 className="action-header"> TAKE ACTION. </h1>
                  <h2>Petitions</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <h2>Contact Local Officials</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </article>
              </div>
             }
          </div>

        </div>

    );
  }
}

//@carly to do: move this attribution somewhere else
// attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
