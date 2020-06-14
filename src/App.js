import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import Header from './components/header/Header';
import AddSymbol from "./components/addSymbol/AddSymbol";
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import PinMap from "./components/pinmap/PinMap";
import SideBar from "./components/sidebar/SideBar";
import { fetchAllSymbols } from './reducers/SymbolsReducer';

class InitialApp extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    this.props.fetchAllSymbols();
  }

  render() {
    console.log('symbols test data', this.props.symbols);
    return (
      <div className="App">


          <div className="map-wrapper">
              <PinMap className="pin-map"></PinMap>
          </div>

          <Header className="header"/>

          <div className="above-map">
            <Route path="/about" exact component={Home}></Route>
            <Route path="/add" exact component={AddSymbol}></Route>
            <Route path="/detail/:id" exact component={SideBar}></Route>
          </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  symbols: state.symbols,
});

const mapDispatch = (dipatch) => ({
  fetchAllSymbols: () => dipatch(fetchAllSymbols()),
});

const App = connect(mapState, mapDispatch)(InitialApp);
export default App;
