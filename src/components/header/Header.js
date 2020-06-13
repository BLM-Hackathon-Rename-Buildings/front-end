import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Header.css';

export default function App() {
  return (
    <div>
      <nav className="home-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">Add Building</Link>
          </li>

          {/* I think this map link should only be accessed by a search bar on the home page or something, but let me know your thoughts! I've included it for now for testing  */}

          <li>
            <Link to="/map">Map</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
