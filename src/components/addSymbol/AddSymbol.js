import React, { Component } from "react";
import "./AddSymbol.css";
const states = require("./states.json");
const symbolChoices = require("./symbolChoices.json");

class AddSymbol extends Component {
  render() {
    return (
      <aside className="side-bar">
        <form className="add-form">

          <div className="form-input">
            <label htmlFor="name">Monument Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="i.e. Confederate Monument"
            />
          </div>

          <div className="form-input">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="i.e. Albertville"
            />
          </div>

          <div className="form-input">
            <label htmlFor="state">State</label>
            <select id="state" name="state">
              {Object.keys(states).map((stateCode) => {
                console.log(stateCode, states[stateCode]);
                return (
                  <option value={stateCode} key={stateCode}>
                    {states[stateCode]}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="form-input">
            <label htmlFor="zip">Zip</label>
            <input type="text" id="zip" name="zip" placeholder="i.e. 35951" />
          </div>

          <div className="form-input">
            <label htmlFor="symbol">Symbol Type:</label>
            <select id="symbol" name="symbol">
              {Object.keys(symbolChoices).map((symbol) => {
                console.log(symbol, symbolChoices[symbol]);
                return (
                  <option value={symbol} key={symbol}>
                    {symbolChoices[symbol]}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="form-input">
            <label htmlFor="petition">Petition</label>
            <input
              type="text"
              id="petition"
              name="petition"
              placeholder="i.e. https://www.change.org/"
            />
          </div>

          <div className="form-input">
            <label htmlFor="photo">Photo</label>
            <input
              type="file"
              id="photo"
              name="photo"
              accept="image/png, image/jpeg"
            ></input>
          </div>
        </form>

        <button className="add-button">ADD</button>
      </aside>
    );
  }
}

export default AddSymbol;
