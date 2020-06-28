import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from 'react-router-dom';
import Header from './components/header/Header';
import AddSymbol from './components/addSymbol/AddSymbol';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import PinMap from './components/pinmap/PinMap';
import Detail from './components/detail/Detail';
import { fetchAllSymbols, fetchSymbolsByZip } from './reducers/SymbolsReducer';

class InitialApp extends Component {
  constructor(props) {
    super(props);
    this.state = { zoom: 5, center: [38, -96] };
  }
  componentDidMount() {
    this.props.fetchAllSymbols();
  }
  handleLogoClick() {
    this.setState({ zoom: 5, center: [38, -96] });
    console.log('logo clicked!');
  }
  handleZoomIn(lat, long) {
    this.setState({
      zoom: 14,
      center: [lat, long],
    });
  }
  handleZipZoom(zip) {
    // this.props.fetchSymbolsByZip()
    console.log('The zip code searched for:', zip);
  }
  render() {
    return (
      <div className="App">
        <div className="map-wrapper">
          <PinMap
            className="pin-map"
            zoom={this.state.zoom}
            center={this.state.center}
            handleZoomIn={this.handleZoomIn.bind(this)}
          ></PinMap>
        </div>

        <Header
          className="header"
          handleLogoClick={this.handleLogoClick.bind(this)}
          handleZip={this.handleZipZoom.bind(this)}
        />

        <div className="above-map">
          <Route path="/about" exact component={Home}></Route>
          <Route path="/add" exact component={AddSymbol}></Route>
          <Route path="/detail/:id" exact component={Detail}></Route>
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
