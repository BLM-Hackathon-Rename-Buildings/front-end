import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Header.css";

export default function App() {
  return (
    <div className="home-nav">
      <Link to="/">
        <div className="header-logo"></div>
      </Link>
      <div className="links-search">
        <nav>
          <ul>
            <li>
              <Link to="/map">MAP</Link>
            </li>
            <li>
              <Link to="/">ABOUT</Link>
            </li>
            <li>
              <Link to="/add">ADD +</Link>
            </li>
          </ul>
        </nav>
        <form>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Search map"
          />
        </form>
      </div>
    </div>
  );
}
