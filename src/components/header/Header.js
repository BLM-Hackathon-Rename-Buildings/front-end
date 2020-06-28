import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Header.css';
import SearchBar from '../header/Searchbar';

export default class Explore extends React.Component {
  render() {
    return (
      <div className="home-nav">
        <Link to="/">
          <img
            className="header-logo"
            src={require('../../assets/logo.svg')}
            onClick={this.props.handleLogoClick}
            alt="rename reclaim logo"
          />
        </Link>
        <nav className="header-links">
          <Link className="header-link" to="/">
            MAP
          </Link>
          <Link className="header-link" to="/about">
            ABOUT
          </Link>
          <Link className="header-link" to="/add">
            ADD
          </Link>
        </nav>
        {/* <form>
          <input
            type="text"
            id="search"
            className="header-search"
            name="search"
            placeholder="SEARCH ZIP"
          />
        </form> */}
        <SearchBar handleZip={this.props.handleZip} />
      </div>
    );
  }
}
