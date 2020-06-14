import React from "react";
import "./SideBar.css";

export default class SideBar extends React.Component {
  constructor(props){
    super(props);
    console.log("param: " + this.props.match.params.id);
  }


  render(){
    return (
      <aside className="side-bar">{this.props.match.params.id}</aside>
    );
  }
}

//@carly to do: move this attribution somewhere else
// attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
