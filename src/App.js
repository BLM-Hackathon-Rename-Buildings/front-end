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
    // this.setMonument = this.setMonument.bind(this)
    // this.state = {
    //   currentMonument: null
    // };
  }

  // setMonument(monument){
  //   this.setState({currentMonument: monument});
  //
  //   const history = useHistory();
  //
  //   function click(){
  //     history.push("/detail/" + monument.id);
  //   }
  // }

  componentDidMount() {
    this.props.fetchAllSymbols();
  }

  render() {
    console.log('symbols test data', this.props.symbols);
    return (
      <div className="App">
          <Header className="header"/>

          <div className="map-wrapper">
              <PinMap className="pin-map"
                      onPinClicked={this.setMonument}>
              </PinMap>
          </div>

          <div className="above-map">
            <Route path="/" exact component={Home}></Route>
            <Route path="/add" exact component={AddSymbol}></Route>
            <Route path="/detail/:id" exact component={SideBar}></Route>
          </div>

          {/*<SideBar
            className="side-bar"
            currentMonumentName={ this.state.currentMonument ? this.state.currentMonument.name :                                             "" }>
          </SideBar>*/}

        {/*<Footer />*/}
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
