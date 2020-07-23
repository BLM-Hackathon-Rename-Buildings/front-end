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
import { fetchAllSymbols } from './reducers/SymbolsReducer';
import { fetchSymbolsByZip } from './reducers/SearchResultsReducer';

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
    this.props.fetchSymbolsByZip(zip).then((response) => {
      console.log('results:', this.props.results.data);
      //checks length to see if results array populated
      if (this.props.results.data.length) {
        this.setState({
          zoom: 14,
          center: [
            this.props.results.data[0].latitude,
            this.props.results.data[0].longitude,
          ],
          showAll: false,
        });
      }
    });
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

        {/* <Header
          className="header"
          handleLogoClick={this.handleLogoClick.bind(this)}
          handleZip={this.handleZipZoom.bind(this)}
        /> */}

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
  results: state.results,
});

const mapDispatch = (dispatch) => ({
  fetchAllSymbols: () => dispatch(fetchAllSymbols()),
  fetchSymbolsByZip: (zip) => dispatch(fetchSymbolsByZip(zip)),
});

const App = connect(mapState, mapDispatch)(InitialApp);
export default App;
