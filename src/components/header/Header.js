import React from "react";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "./Header.css";

export default function App() {
  return (
    <div className="home-nav">
      <Link to="/">
        <img className="header-logo" src={require("../../assets/logo.svg")} />
      </Link>
        <nav className="header-links">
          <Link className="header-link" to="/">MAP</Link>
          <Link className="header-link" to="/about">ABOUT</Link>
          <Link className="header-link" to="/add">ADD</Link>
        </nav>
        <form>
          <input
            type="text"
            id="search"
            class="header-search"
            name="search"
            placeholder="SEARCH ZIP"
          />
        </form>
    </div>
  );
}
