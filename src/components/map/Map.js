import React, { Component } from "react";
import "./Map.css";

class Map extends Component {
  render() {
    return (
      <div>
        <h1>You are now viewing buildings in {this.props.city}</h1>
      </div>
    );
  }
}

export default Map;
