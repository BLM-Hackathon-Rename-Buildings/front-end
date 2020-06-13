import React from "react";
import PinMap from "../pinmap/PinMap";
// import "./PinMap.css";

export default class Explore extends React.Component {
  constructor(props){
    super(props);
    // this.state = {
    //   selectedPin: null
    // };
  }

  // click(monument){
  //   console.log("clicked: " + monument.id);
  //   this.props.onPinClicked(monument);
  // }

  test(monument){
    console.log("click test!");
    console.log(monument.id);
  }

  render(){
    return (
      <div>
      <PinMap city="Washington, DC" onPinClicked={this.test.bind(this)} />
      </div>
    );
  }
}


//@carly to do: move this attribution somewhere else
// attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
