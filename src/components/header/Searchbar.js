import React, { useState } from 'react';
import './Header.css';
export default function SearchBar(props) {
  const [zip, setZip] = useState('');
  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleZip(zip);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        className="header-search"
        value={zip}
        placeholder="SEARCH ZIP"
        onChange={(e) => setZip(e.target.value)}
      />
    </form>
  );
}
