import React from 'react';
import './Header.css';
export default function SearchBar(props) {
  return (
    <form>
      <input
        type="text"
        id="search"
        className="header-search"
        name="search"
        placeholder="SEARCH ZIP"
      />
    </form>
  );
}
