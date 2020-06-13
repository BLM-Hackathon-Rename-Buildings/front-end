import React, { Component } from "react";
import "./AddSymbol.css";
const states = require("./states.json");
const symbolChoices = require("./symbolChoices.json");

class AddSymbol extends Component {
  render() {
    return (
      <form>
        <label for="name">Symbol Name:</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          placeholder="i.e. Confederate Monument"
        />
        <br />
        <label for="city">City:</label>
        <br />
        <input
          type="text"
          id="city"
          name="city"
          placeholder="i.e. Albertville"
        />
        <br />
        <label for="state">State:</label>
        <br />
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
        <br />
        <label for="county">County:</label>
        <br />
        <input
          type="text"
          id="county"
          name="county"
          placeholder="i.e. Marshall"
        />
        <br />
        <label for="zip">Zip Code:</label>
        <br />
        <input type="text" id="zip" name="zip" placeholder="i.e. 35951" />
        <br />
        <label for="latitude">Latitude</label>
        <br />
        <input
          type="text"
          id="latitude"
          name="latitude"
          placeholder="i.e. 34.268061"
        />
        <br />
        <label for="longitude">Longitude</label>
        <br />
        <input
          type="text"
          id="longitude"
          name="longitude"
          placeholder="i.e. -86.210379"
        />
        <br />
        <label for="symbol">Symbol Type:</label>
        <br />
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
        <br />
        <label for="petition">Petition Link:</label>
        <br />
        <input
          type="text"
          id="petition"
          name="petition"
          placeholder="i.e. https://www.change.org/"
        />
        <br />
        <label for="photo">Photo:</label>
        <br />
        <input
          type="file"
          id="photo"
          name="photo"
          accept="image/png, image/jpeg"
        ></input>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddSymbol;
