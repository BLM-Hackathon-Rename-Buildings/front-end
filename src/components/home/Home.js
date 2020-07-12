import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="home-about">
        <img
          className="about-img"
          src={require("../../assets/confederate-statue.jpeg")}
          alt="Confederate statue covered in red graffiti."
        />
        <article className="about-text">
          <h1 className="about-header"> RENAME. REMOVE.</h1>
          <h2 className="about-title">About</h2>
          <p className="about-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h2 className="about-title">Credits</h2>
          <p className="about-credits">
            Data courtesy of{" "}
            <a href="https://www.splcenter.org/">
              Southern Poverty Law Center.
            </a>
            <br />
            Mapping by <a href="https://leafletjs.com/">
              Leaflet and{" "}
            </a> and <a href="https://www.openstreetmap.org/">OpenStreetMap </a>
          </p>
        </article>
      </div>
    );
  }
}

export default Home;
