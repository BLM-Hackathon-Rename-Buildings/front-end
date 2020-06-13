import React from "react";
import "./SideBar.css";

export default class SideBar extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     currentMonument: "hello"
  //   };
  // }

  render(){
    return (
      <aside className="side-bar">
        {this.props.currentMonumentName}
      </aside>
    );
  }
}


//@carly to do: move this attribution somewhere else
// attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
